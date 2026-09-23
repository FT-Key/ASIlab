export interface TopicSource {
  title: string
  url: string
  source?: string
  description?: string
}

export interface TopicMeta {
  id: string
  slug: string
  title: string
  emoji: string
  accent: string
  category: string
  difficulty: string
  order: number
  unit?: string
  description: string
  tags: string[]
  keyTakeaway: string
  sources: TopicSource[]
}

export type BlockType =
  | 'paragraph'
  | 'heading'
  | 'list'
  | 'table'
  | 'code'
  | 'callout'
  | 'definition'
  | 'example'
  | 'quote'
  | 'flow'
  | 'quiz'
  | 'essay'
  | 'truefalse'
  | 'sort'
  | 'match'
  | 'path'
  | 'pyodide'
  | 'lab'
  | 'pivot'
  | 'etl'
  | 'dikw'
  | 'arch'

export interface BlockBase {
  type: BlockType
}

export interface ParagraphBlock extends BlockBase {
  type: 'paragraph'
  text: string
}

export interface HeadingBlock extends BlockBase {
  type: 'heading'
  text: string
}

export interface ListBlock extends BlockBase {
  type: 'list'
  title?: string
  items: string[]
  ordered?: boolean
}

export interface TableBlock extends BlockBase {
  type: 'table'
  columns: string[]
  rows: string[][]
}

export interface CodeBlock extends BlockBase {
  type: 'code'
  language: string
  code: string
}

export interface CalloutBlock extends BlockBase {
  type: 'callout'
  tone: 'info' | 'success' | 'warning' | 'danger' | 'idea' | 'question'
  title?: string
  text: string
}

export interface DefinitionBlock extends BlockBase {
  type: 'definition'
  term: string
  text: string
}

export interface ExampleBlock extends BlockBase {
  type: 'example'
  title?: string
  text: string
}

export interface QuoteBlock extends BlockBase {
  type: 'quote'
  text: string
  author?: string
}

export interface FlowBlock extends BlockBase {
  type: 'flow'
  title?: string
  steps: string[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
  explanation?: string
}

export interface QuizBlock extends BlockBase {
  type: 'quiz'
  title?: string
  questions: QuizQuestion[]
}

export interface EssayQuestion {
  question: string
  hint?: string
  model?: string
  rubric?: string[]
}

export interface EssayBlock extends BlockBase {
  type: 'essay'
  title?: string
  essay: EssayQuestion[]
}

export interface TrueFalseQuestion {
  statement: string
  answer: boolean
  explanation: string
}

export interface TrueFalseBlock extends BlockBase {
  type: 'truefalse'
  title?: string
  tf: TrueFalseQuestion[]
}

export interface SortBlock extends BlockBase {
  type: 'sort'
  title?: string
  items: string[]
}

export interface MatchPair {
  left: string
  right: string
}

export interface MatchBlock extends BlockBase {
  type: 'match'
  title?: string
  pairs: MatchPair[]
}

export interface PathNode {
  id: string
  title: string
  prompt: string
  options?: { label: string; target: string }[]
  isFinal?: boolean
  verdict?: string
}

export interface PathBlock extends BlockBase {
  type: 'path'
  title?: string
  nodes: PathNode[]
}

export interface PyodideQuestion {
  question: string
  answer?: string
}

export interface PyodideData {
  csv: string
  code: string
  questions: PyodideQuestion[]
}

export interface PyodideBlock extends BlockBase {
  type: 'pyodide'
  title?: string
  pyodide: PyodideData
}

export interface LabStep {
  text: string
  command?: string
  expected?: string
  csv?: string
}

export interface LabBlock extends BlockBase {
  type: 'lab'
  title?: string
  lab: LabStep[]
}

export interface PivotBlock extends BlockBase {
  type: 'pivot'
  title?: string
}

export interface EtlBlock extends BlockBase {
  type: 'etl'
  title?: string
}

export interface DikwBlock extends BlockBase {
  type: 'dikw'
  title?: string
}

export interface ArchBlock extends BlockBase {
  type: 'arch'
  kind?: string
}

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | TableBlock
  | CodeBlock
  | CalloutBlock
  | DefinitionBlock
  | ExampleBlock
  | QuoteBlock
  | FlowBlock
  | QuizBlock
  | EssayBlock
  | TrueFalseBlock
  | SortBlock
  | MatchBlock
  | PathBlock
  | PyodideBlock
  | LabBlock
  | PivotBlock
  | EtlBlock
  | DikwBlock
  | ArchBlock

export interface Section {
  id: string
  title: string
  blocks: Block[]
}

export interface Topic extends TopicMeta {
  sections: Section[]
  resources?: Resource[]
}

export interface Category {
  id: string
  name: string
  slug: string
  color: string
  icon: string
  order: number
}

export interface GlossaryTerm {
  term: string
  definition: string
  category?: string
}

export interface Resource {
  id: string
  title: string
  url: string
  type: 'pdf' | 'link' | 'video' | 'book' | 'norma'
  topicId: string
  description?: string
}

export interface ProgressData {
  [topicId: string]: {
    completedSections: string[]
    lastVisited?: string
    quizScores?: { [blockIndex: string]: number }
  }
}

export interface AppData {
  meta: {
    version: number
    lastUpdated: string
    source: string
    description: string
  }
  categories: Category[]
  topics: Topic[]
  glossary: GlossaryTerm[]
}
