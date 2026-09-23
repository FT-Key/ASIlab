const TONES = ['info', 'success', 'warning', 'danger', 'idea', 'question']

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'seccion'
}

export function cleanInline(text) {
  return String(text)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim()
}

function unquote(value) {
  const v = value.trim()
  if (v.length >= 2 && v.startsWith('"') && v.endsWith('"')) return v.slice(1, -1)
  if (v.length >= 2 && v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1)
  return v
}

export function parseSources(list) {
  return (Array.isArray(list) ? list : [])
    .map((s) => {
      const [title, url, source, description] = String(s).split('|').map((x) => x.trim())
      return { title, url, source, description }
    })
    .filter((s) => s.title && s.url)
}

function parseFrontmatter(md) {
  const match = md.match(/^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/)
  if (!match) return { meta: {}, body: md }
  const lines = match[1].split(/\r?\n/)
  const meta = {}
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let value = m[2].trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => unquote(s))
        .filter(Boolean)
      continue
    }
    if (value === '') {
      const items = []
      i++
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(unquote(lines[i].replace(/^\s*-\s+/, '')))
        i++
      }
      i--
      meta[key] = items
      continue
    }
    meta[key] = unquote(value)
  }
  return { meta, body: md.slice(match[0].length) }
}

function serializeFrontmatter(topic) {
  const quote = (v) => (/[:#"']/.test(v) ? `"${v.replace(/"/g, "'")}"` : v)
  const lines = [
    '---',
    `title: ${quote(topic.title)}`,
    ...(topic.id && topic.id !== topic.slug ? [`id: ${quote(topic.id)}`] : []),
    `emoji: ${topic.emoji}`,
    `accent: "${topic.accent}"`,
    `category: ${topic.category}`,
    `difficulty: ${topic.difficulty}`,
    `order: ${topic.order}`,
    ...(topic.unit ? [`unit: ${quote(topic.unit)}`] : []),
    `description: ${quote(topic.description)}`,
  ]
  if (Array.isArray(topic.tags) && topic.tags.length) {
    lines.push(`tags: [${topic.tags.join(', ')}]`)
  }
  lines.push(`keyTakeaway: ${quote(topic.keyTakeaway)}`)
  if (Array.isArray(topic.sources) && topic.sources.length) {
    lines.push('sources:')
    for (const s of topic.sources) {
      const row = [s.title, s.url, s.source ?? '', s.description ?? ''].join('|')
      lines.push(`  - "${row.replace(/"/g, "'")}"`)
    }
  }
  lines.push('---')
  return lines.join('\n')
}

function parseDirective(lines, start) {
  const m = lines[start].trim().match(/^:::([a-zA-Z]+)(?:\s+(.*))?$/)
  if (!m) return null
  const kind = m[1].toLowerCase()
  const rest = (m[2] || '').trim()

  if (['pivot', 'etl', 'dikw', 'arch'].includes(kind)) {
    const block = { type: kind }
    if (kind === 'arch') block.kind = rest || 'lakehouse'
    else if (rest) block.title = rest
    let next = start + 1
    if (next < lines.length && /^::+\s*$/.test(lines[next].trim())) next++
    return { block, next }
  }

  let end = start + 1
  const content = []
  while (end < lines.length) {
    if (/^::+\s*$/.test(lines[end].trim())) break
    content.push(lines[end])
    end++
  }
  const next = end < lines.length ? end + 1 : end
  const text = content.map((l) => l.trim()).join(' ').trim()
  const block = {}

  switch (kind) {
    case 'callout': {
      block.type = 'callout'
      const [first, ...restWords] = rest.split(/\s+/)
      if (TONES.includes(first?.toLowerCase())) {
        block.tone = first.toLowerCase()
        block.title = restWords.join(' ').trim() || undefined
      } else {
        block.tone = 'idea'
        block.title = rest || undefined
      }
      block.text = cleanInline(text)
      break
    }
    case 'definition':
      block.type = 'definition'
      block.term = cleanInline(rest || 'Término')
      block.text = cleanInline(text)
      break
    case 'example':
      block.type = 'example'
      block.title = rest || undefined
      block.text = cleanInline(text)
      break
    case 'flow':
      block.type = 'flow'
      block.title = rest || undefined
      block.steps = content
        .map((l) => cleanInline(l.trim().replace(/^[-*+]\s+/, '')))
        .filter(Boolean)
      break
    case 'list': {
      block.type = 'list'
      block.title = rest || undefined
      const items = content
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => l.replace(/^\d+[.)]\s+/, '').replace(/^[-*+]\s+/, ''))
      block.items = items.map(cleanInline)
      if (content.some((l) => /^\s*\d+[.)]\s+/.test(l))) block.ordered = true
      break
    }
    case 'quiz': {
      block.type = 'quiz'
      block.title = rest || 'Autoevaluación'
      block.questions = content
        .map((l) => l.trim())
        .filter((l) => /^\d+[.)]\s+/.test(l))
        .map((l) => {
          const parts = l.replace(/^\d+[.)]\s+/, '').split('||').map((s) => s.trim())
          const n = parts.length
          if (n < 5) return null
          const answer = Number(parts[n - 2])
          return {
            question: cleanInline(parts[0]),
            options: parts.slice(1, n - 2).map(cleanInline),
            answer: Number.isInteger(answer) && answer >= 0 ? answer : 0,
            explanation: parts[n - 1] || undefined,
          }
        })
        .filter((q) => q && q.question && q.options.length >= 2)
      break
    }
    case 'essay': {
      block.type = 'essay'
      block.title = rest || undefined
      block.essay = content
        .map((l) => l.trim())
        .filter((l) => /^\d+[.)]\s+/.test(l))
        .map((l) => {
          const parts = l.replace(/^\d+[.)]\s+/, '').split('||').map((s) => s.trim())
          const q = { question: cleanInline(parts[0] || '') }
          for (let i = 1; i < parts.length; i++) {
            const part = parts[i]
            const hint = part.match(/^Pista:\s*(.+)$/i)
            if (hint) {
              q.hint = cleanInline(hint[1])
              continue
            }
            const model = part.match(/^Respuesta modelo:\s*(.+)$/i)
            if (model) {
              q.model = cleanInline(model[1])
              continue
            }
            const rubric = part.match(/^\[r[uú]brica:\s*([\s\S]*?)\]\s*$/)
            if (rubric) {
              q.rubric = rubric[1].split(',').map((s) => s.trim()).filter(Boolean)
              continue
            }
            if (!q.model) q.model = cleanInline(part)
          }
          return q.question && q.model ? q : null
        })
        .filter(Boolean)
      break
    }
    case 'truefalse': {
      block.type = 'truefalse'
      block.title = rest || undefined
      block.tf = content
        .map((l) => l.trim())
        .filter((l) => /^\d+[.)]\s+/.test(l))
        .map((l) => {
          const parts = l.replace(/^\d+[.)]\s+/, '').split('||').map((s) => s.trim())
          if (parts.length < 3) return null
          const answer = /^verdadero$/i.test(parts[1]) ? true : /^falso$/i.test(parts[1]) ? false : null
          if (answer === null) return null
          return { statement: cleanInline(parts[0]), answer, explanation: cleanInline(parts[2]) }
        })
        .filter(Boolean)
      break
    }
    case 'sort': {
      block.type = 'sort'
      block.title = rest || undefined
      block.items = content
        .map((l) => cleanInline(l.trim().replace(/^[-*+]\s+/, '')))
        .filter(Boolean)
      break
    }
    case 'match': {
      block.type = 'match'
      block.title = rest || undefined
      block.pairs = content
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => {
          const cells = l.replace(/^[-*+]\s+/, '').split('|').map((s) => s.trim())
          if (cells.length < 2 || !cells[0] || !cells[1]) return null
          return { left: cleanInline(cells[0]), right: cleanInline(cells[1]) }
        })
        .filter(Boolean)
      break
    }
    case 'pyodide': {
      block.type = 'pyodide'
      block.title = rest || undefined
      const p = { csv: '', code: '', questions: [] }
      const codeLines = []
      let inFence = false
      for (const raw of content) {
        const l = raw.trim()
        if (!p.csv && !inFence) {
          const cm = l.match(/^csv\s*:\s*([A-Za-z0-9._-]+)$/i)
          if (cm) {
            p.csv = cm[1]
            continue
          }
        }
        if (/^```/.test(l)) {
          inFence = !inFence
          continue
        }
        if (inFence) {
          codeLines.push(raw)
          continue
        }
        if (/^\d+[.)]\s+/.test(l)) {
          const parts = l.replace(/^\d+[.)]\s+/, '').split('||').map((s) => s.trim())
          const q = { question: cleanInline(parts[0]) }
          if (parts[1]) q.answer = cleanInline(parts[1])
          p.questions.push(q)
          continue
        }
      }
      p.code = codeLines.join('\n').trim()
      block.pyodide = p
      break
    }
    case 'lab': {
      block.type = 'lab'
      block.title = rest || undefined
      const steps = []
      let step = null
      let inFence = false
      const fenceLines = []
      const CSV_RE = /([A-Za-z0-9_.-]+\.csv)/i
      for (const raw of content) {
        const l = raw.trim()
        if (!inFence) {
          const num = l.match(/^(\d+)[.)]\s+(.*)$/)
          if (num) {
            if (step) steps.push(step)
            step = { text: cleanInline(num[2]) }
            const csvm = num[2].match(CSV_RE)
            if (csvm) step.csv = csvm[1]
            continue
          }
        }
        if (!step) continue
        if (/^```/.test(l)) {
          if (!inFence) {
            inFence = true
            fenceLines.length = 0
          } else {
            inFence = false
            const code = fenceLines.join('\n')
            step.command = step.command ? `${step.command}\n${code}` : code
            if (!step.csv) {
              const csvm = code.match(CSV_RE)
              if (csvm) step.csv = csvm[1]
            }
          }
          continue
        }
        if (inFence) {
          fenceLines.push(raw)
          continue
        }
        const exp = l.match(/^(?:[-*]\s*)?esperado\s*:\s*(.+)$/i)
        if (exp) {
          step.expected = (step.expected ? `${step.expected}\n` : '') + cleanInline(exp[1])
          continue
        }
        const cmd = l.match(/^comando\s*:\s*(.+)$/i)
        if (cmd) {
          const c = cmd[1].replace(/^`+/, '').replace(/`+$/, '').trim()
          step.command = step.command ? `${step.command}\n${c}` : c
          continue
        }
        const extra = cleanInline(l)
        if (extra) step.text = `${step.text}\n${extra}`
        if (!step.csv) {
          const csvm = l.match(CSV_RE)
          if (csvm) step.csv = csvm[1]
        }
      }
      if (step) steps.push(step)
      block.lab = steps.filter((s) => s.text || s.command || s.expected)
      break
    }
    case 'path': {
      block.type = 'path'
      block.title = rest || undefined
      block.nodes = content
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith('#'))
        .map((l) => {
          const cells = l.split('|').map((s) => s.trim())
          if (cells.length < 3) return null
          const node = { id: cells[0], title: cleanInline(cells[1]), prompt: cleanInline(cells[2]) }
          if (cells[3] === '*') {
            node.isFinal = true
            node.verdict = cells[4] || undefined
            node.options = []
          } else {
            node.options = (cells[3] || '')
              .split(';')
              .map((o) => o.trim())
              .filter(Boolean)
              .map((o) => {
                const eq = o.indexOf('=')
                if (eq === -1) return null
                return { label: cleanInline(o.slice(0, eq)), target: o.slice(eq + 1).trim() }
              })
              .filter(Boolean)
          }
          return node.id && node.title ? node : null
        })
        .filter(Boolean)
      break
    }
    default:
      return null
  }
  return { block, next }
}

function parseQuote(lines, start) {
  const parts = []
  let author
  let i = start
  while (i < lines.length && /^>\s?/.test(lines[i])) {
    const content = lines[i].replace(/^>\s?/, '')
    const am = content.match(/^\s*(?:—|--|-)\s*(.+)$/)
    if (am) author = cleanInline(am[1])
    else parts.push(content)
    i++
  }
  const block = { type: 'quote', text: cleanInline(parts.join(' ')) }
  if (author) block.author = author
  return { block, next: i }
}

function splitRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim())
}

function parseTable(lines, start) {
  const rows = []
  let i = start
  while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
    rows.push(splitRow(lines[i]))
    i++
  }
  if (rows.length === 0) return null
  const isSep = (r) => r.length > 0 && r.every((cell) => /^:?-{2,}:?$/.test(cell.trim()))
  let dataStart = 1
  if (rows.length > 1 && isSep(rows[1])) dataStart = 2
  return {
    block: {
      type: 'table',
      columns: rows[0].map(cleanInline),
      rows: rows.slice(dataStart).map((r) => r.map(cleanInline)),
    },
    next: i,
  }
}

function parseList(lines, start, ordered) {
  const re = ordered ? /^\d+[.)]\s+(.*)$/ : /^[-*+]\s+(.*)$/
  const items = []
  let i = start
  while (i < lines.length && re.test(lines[i].trim())) {
    items.push(cleanInline(lines[i].trim().replace(re, '$1')))
    i++
  }
  const block = { type: 'list', items }
  if (ordered) block.ordered = true
  return { block, next: i }
}

const isBlockStart = (t) =>
  /^#/.test(t) ||
  /^>/.test(t) ||
  /^\|/.test(t) ||
  /^```/.test(t) ||
  /^:::+/.test(t) ||
  /^\d+[.)]\s+/.test(t) ||
  /^[-*+]\s+/.test(t)

export function mdToTopic(slug, md) {
  const { meta, body } = parseFrontmatter(md)
  const lines = body.split(/\r?\n/)
  const topic = {
    id: meta.id || slug,
    slug,
    title: meta.title || slug,
    emoji: meta.emoji || '📄',
    accent: meta.accent || '#5BC8F5',
    category: meta.category || 'fundamentos',
    difficulty: meta.difficulty || 'principiante',
    order: Number(meta.order) || 0,
    unit: meta.unit || undefined,
    description: meta.description || '',
    tags: Array.isArray(meta.tags)
      ? meta.tags
      : typeof meta.tags === 'string'
        ? meta.tags.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
    keyTakeaway: meta.keyTakeaway || '',
    sources: parseSources(meta.sources),
    sections: [],
  }

  let current = null
  const ensureSection = (title) => {
    current = { id: slugify(title), title, blocks: [] }
    topic.sections.push(current)
    return current
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()
    if (!trimmed) {
      i++
      continue
    }

    const directive = parseDirective(lines, i)
    if (directive) {
      if (!current) ensureSection('Contenido')
      current.blocks.push(directive.block)
      i = directive.next
      continue
    }

    const fence = line.match(/^```(\S*)\s*$/)
    if (fence) {
      const language = fence[1] || 'text'
      i++
      const code = []
      while (i < lines.length && !/^```\s*$/.test(lines[i].trim())) {
        code.push(lines[i])
        i++
      }
      i++
      if (!current) ensureSection('Contenido')
      current.blocks.push({ type: 'code', language, code: code.join('\n') })
      continue
    }

    const sectionMatch = line.match(/^##\s+(.+?)(?:\s+\{#([a-zA-Z0-9_-]+)\})?\s*$/)
    if (sectionMatch) {
      const title = cleanInline(sectionMatch[1])
      current = { id: sectionMatch[2] || slugify(title), title, blocks: [] }
      topic.sections.push(current)
      i++
      continue
    }

    const headingMatch = line.match(/^(#+)\s+(.+)$/)
    if (headingMatch) {
      if (!current) ensureSection('Contenido')
      current.blocks.push({ type: 'heading', text: cleanInline(headingMatch[2]) })
      i++
      continue
    }

    if (trimmed.startsWith('>')) {
      const parsed = parseQuote(lines, i)
      if (!current) ensureSection('Contenido')
      current.blocks.push(parsed.block)
      i = parsed.next
      continue
    }

    if (trimmed.startsWith('|')) {
      const parsed = parseTable(lines, i)
      if (parsed) {
        if (!current) ensureSection('Contenido')
        current.blocks.push(parsed.block)
        i = parsed.next
        continue
      }
    }

    if (/^\d+[.)]\s+/.test(trimmed)) {
      const parsed = parseList(lines, i, true)
      if (!current) ensureSection('Contenido')
      current.blocks.push(parsed.block)
      i = parsed.next
      continue
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const parsed = parseList(lines, i, false)
      if (!current) ensureSection('Contenido')
      current.blocks.push(parsed.block)
      i = parsed.next
      continue
    }

    const para = []
    while (i < lines.length) {
      const t = lines[i].trim()
      if (!t || isBlockStart(t)) break
      para.push(t)
      i++
    }
    if (para.length) {
      if (!current) ensureSection('Contenido')
      current.blocks.push({ type: 'paragraph', text: cleanInline(para.join(' ')) })
    }
  }

  return topic
}

function blockToMd(b) {
  switch (b.type) {
    case 'paragraph':
      return b.text
    case 'heading':
      return `### ${b.text}`
    case 'list': {
      if (b.title) {
        const items = (b.items ?? []).map((it) => (b.ordered ? `1. ${it}` : `- ${it}`))
        return [`:::list ${b.title}`, ...items, ':::'].join('\n')
      }
      return (b.items ?? []).map((it) => (b.ordered ? `1. ${it}` : `- ${it}`)).join('\n')
    }
    case 'table': {
      const row = (cells) => `| ${cells.map((c) => String(c).trim()).join(' | ')} |`
      const sep = `| ${(b.columns ?? []).map(() => '---').join(' | ')} |`
      const body = (b.rows ?? []).map(row)
      return [row(b.columns ?? []), sep, ...body].join('\n')
    }
    case 'code':
      return `\`\`\`${b.language ?? 'text'}\n${b.code}\n\`\`\``
    case 'callout': {
      const head = b.tone === 'idea' && !b.title ? ':::callout' : `:::callout ${b.tone}${b.title ? ` ${b.title}` : ''}`
      return [head, b.text, ':::'].join('\n')
    }
    case 'definition':
      return [`:::definition ${b.term}`, b.text, ':::'].join('\n')
    case 'example':
      return [`:::example ${b.title ?? ''}`, b.text, ':::'].join('\n').replace(/:::example\s+$/, ':::example')
    case 'quote':
      return b.author ? `> ${b.text}\n> — ${b.author}` : `> ${b.text}`
    case 'flow':
      return [`:::flow ${b.title ?? ''}`, ...(b.steps ?? []).map((s) => `- ${s}`), ':::'].join('\n').replace(/:::flow\s+$/, ':::flow')
    case 'quiz': {
      const qLines = (b.questions ?? [])
        .map((q, i) => `${i + 1}. ${q.question} || ${q.options.join(' || ')} || ${q.answer} || ${q.explanation ?? ''}`.trimEnd())
      return [`:::quiz ${b.title ?? 'Autoevaluación'}`, ...qLines, ':::'].join('\n')
    }
    case 'essay': {
      const rows = (b.essay ?? []).map((q, i) => {
        const parts = [q.question]
        if (q.hint) parts.push(`Pista: ${q.hint}`)
        if (q.model) parts.push(`Respuesta modelo: ${q.model}`)
        if (Array.isArray(q.rubric) && q.rubric.length) parts.push(`[rúbrica: ${q.rubric.join(', ')}]`)
        return `${i + 1}. ${parts.join(' || ')}`
      })
      return [`:::essay ${b.title ?? ''}`, ...rows, ':::'].join('\n').replace(/:::essay\s+$/, ':::essay')
    }
    case 'truefalse': {
      const rows = (b.tf ?? []).map((q, i) =>
        `${i + 1}. ${q.statement} || ${q.answer ? 'Verdadero' : 'Falso'} || ${q.explanation ?? ''}`.trimEnd()
      )
      return [`:::truefalse ${b.title ?? ''}`, ...rows, ':::'].join('\n').replace(/:::truefalse\s+$/, ':::truefalse')
    }
    case 'sort':
      return [`:::sort ${b.title ?? ''}`, ...(b.items ?? []).map((it) => `- ${it}`), ':::'].join('\n').replace(/:::sort\s+$/, ':::sort')
    case 'match':
      return [`:::match ${b.title ?? ''}`, ...(b.pairs ?? []).map((p) => `- ${p.left} | ${p.right}`), ':::'].join('\n').replace(/:::match\s+$/, ':::match')
    case 'path': {
      const rows = (b.nodes ?? []).map((n) => {
        if (n.isFinal) return [n.id, n.title, n.prompt, '*', n.verdict || ''].join(' | ').trimEnd()
        const opts = (n.options ?? []).map((o) => `${o.label}=${o.target}`).join('; ')
        return [n.id, n.title, n.prompt, opts].join(' | ')
      })
      return [`:::path ${b.title ?? ''}`, ...rows, ':::'].join('\n').replace(/:::path\s+$/, ':::path')
    }
    case 'pyodide': {
      const p = b.pyodide ?? {}
      const head = b.title ? `:::pyodide ${b.title}` : ':::pyodide'
      const qLines = (p.questions ?? []).map(
        (q, i) => `${i + 1}. ${q.question}${q.answer ? ` || ${q.answer}` : ''}`
      )
      const code = p.code ? ['```python', p.code, '```'] : []
      return [head, `csv: ${p.csv ?? ''}`, ...code, ...qLines, ':::'].join('\n')
    }
    case 'lab': {
      const head = b.title ? `:::lab ${b.title}` : ':::lab'
      const rows = (b.lab ?? []).map((s, i) => {
        const lines = [`${i + 1}. ${s.text ?? ''}`]
        if (s.command) lines.push(`   \`\`\`\n${s.command}\n   \`\`\``)
        if (s.expected) lines.push(`   Esperado: ${s.expected}`)
        return lines.join('\n')
      })
      return [head, ...rows, ':::'].join('\n')
    }
    case 'pivot':
      return [`:::pivot ${b.title ?? ''}`, ':::'].join('\n').replace(/:::pivot\s+$/, ':::pivot')
    case 'etl':
      return [`:::etl ${b.title ?? ''}`, ':::'].join('\n').replace(/:::etl\s+$/, ':::etl')
    case 'dikw':
      return [`:::dikw ${b.title ?? ''}`, ':::'].join('\n').replace(/:::dikw\s+$/, ':::dikw')
    case 'arch':
      return `:::arch ${b.kind || 'lakehouse'}`
    default:
      return ''
  }
}

export function topicToMd(topic) {
  const out = [serializeFrontmatter(topic), '']
  for (const section of topic.sections ?? []) {
    const defaultId = slugify(section.title)
    const suffix = section.id && section.id !== defaultId ? ` {#${section.id}}` : ''
    out.push(`## ${section.title}${suffix}`, '')
    for (const block of section.blocks ?? []) {
      out.push(blockToMd(block), '')
    }
  }
  return out.join('\n').trimEnd() + '\n'
}