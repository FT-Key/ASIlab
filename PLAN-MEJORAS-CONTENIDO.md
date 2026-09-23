# Plan de Mejoras de Contenido — Estudiar para aprobar evaluativos

> Cómo usar este archivo: es el tablero oficial de avance. Cada tarea agrupa 2-3 topics para bajo riesgo.
> Cuando el usuario diga **"haz la siguiente tarea"**, el asistente debe:
> 1. Leer este archivo y buscar la primera tarea en `pendiente`.
> 2. Ejecutarla completa (editar `content/topics/*.md` → `npm run build:content` → `npm run build`).
> 3. Marcarla como `hecha` con fecha y commit, y mover `EN CURSO` a la siguiente.
> No avanzar más de UNA tarea por solicitud salvo orden explícita.

**Estado global:** 6/6 hechas + revisión QA completa (2026-09-22) — Plan completo y verificado
**Regla del repo (AGENTS.md):** NUNCA levantar servidores (`npm run dev`, etc.). Solo `build:content`, `seed`, `build`, scripts `node`.

---

## Diagnóstico (por qué hoy no se aprueba)

| Evaluativo (Material/nuevo/) | Lo que exige | Lo que hoy falta en la página |
|---|---|---|
| EVALUACIÓN ITIL S-R | SVS + co-creación valor, 3 principios guía aplicados a caso e-commerce, v3 vs v4 (procesos→prácticas, 26 vs 34, ciclo vida→SVS, Agile/Lean/DevOps), 4 dimensiones con deficiencia+correctivo por dimensión, cadena valor 6 actividades, incidentes vs problemas, mejora continua | v3 vs v4 solo 1 callout sin tabla; principios listados sin explicación ni ejemplo; dimensiones sin caso nube/SLA; sin diferencia incidente/problema/cambio; quizzes solo 6 preguntas fáciles, sin niveles ni casos |
| EVALUACIÓN COBIT S-R | Ciclo EDM (quién: Alta Dirección, propósito Evaluar/Dirigir/Monitorear), ciclo PBRM mapeado a APO/BAI/DSS/MEA, 7 componentes como engranajes + enfoque holístico sociotécnico, interacción Gobernanza↔Gestión con Estructuras+Información | EDM/APO/etc. listados pero sin explicar letra por letra el ciclo; PBRM no existe en ningún topic; 7 componentes NO existen (solo 6 principios); sin caso alineación negocio-TI |
| Evaluativo ISO 38500 S-R | 6 principios con violación concreta (ej. IA sin compliance, monitoreo sin consentimiento), E-D-M paso a paso correctivo, Gobierno vs Gestión + ejemplo decisión exclusiva c/u, ISO 38500 (qué/por qué) vs ITIL (cómo), alineación ISO 37000 2024, accountability indelegable, monitoreo en agile | Principios en 2 líneas c/u; E-D-M solo un flow de 3 bullets; gobierno vs gestión en 1 callout; sin ISO 37000; sin accountability indelegable; quizzes básicos |
| EVAL PMBOK 1+2, Matriz, U31, Rockin1000 | Matriz 7 dominios × 5 focus areas (40 procesos, ej. EDT en Alcance/Planificación, EVM en Finanzas/MyC, Charter en Gobernanza/Iniciación, ruta crítica, matriz comunicaciones), 6 principios (holística, valor vs output/outcome, liderazgo+calidad, entorno empoderado, sostenibilidad), interconexión dominios, tailoring+IA, caso zafra ingenio día a día, Rockin1000 valor | Matriz 40 procesos NO existe; principios con nombres distintos a los del evaluativo (stewardship vs calidad integrada); sin EDT/EVM/Charter/ruta crítica explicados; sin output vs outcome con ejemplo; zafra solo mencionada, sin día 45 paso a paso |

**Estándar que debe cumplir cada tema al terminar (flujo pedido por el usuario):**
1. Teoría completa pero resumida (no 3 líneas, no libro): definiciones claras + tablas + ejemplos empresa ficticia con problema→solución.
2. Toda pregunta del quiz debe estar explicada antes en el texto (prohibido preguntar lo no enseñado).
3. Batería progresiva: Quiz Nivel 1 (memoria) → Quiz Nivel 2 (comprensión) → Quiz Nivel 3 (escenario empresa) + Sort + Match + TrueFalse + Essay con respuesta modelo y rúbrica + Path con caso ramificado. Respuesta correcta siempre visible (explicación).
4. Mantener estilo interactivo `awesome`: definitions, callouts, flows, tablas, nada de muro de texto plano.

Formato parser (`backend/src/convert/md.js`): bloques `:::quiz`, `:::truefalse`, `:::sort`, `:::match`, `:::essay`, `:::path` en pipe-separated. Validar con `npm run build:content`.

---

## Tareas (grupos de 2-3)

### T1 — ITIL 4 completo [HECHA 2026-09-22]
**Files:** `content/topics/itil-4-gestion-servicios.md`, `content/topics/dimensiones-itil-svs.md`
**Habilita:** EVALUACIÓN ITIL S-R (las 3 de desarrollo + 10 choice)
- Agregar: tabla v3 (26 procesos, ciclo de vida) vs v4 (34 prácticas, SVS, Agile/Lean/DevOps); co-creación de valor con anti-ejemplo "funciona según especificado pero pierde ventas"; 7 principios con qué es + ejemplo + qué pasa si se ignora; 4 dimensiones con caso proveedor nube (doc desactualizada, SLA 2 años, comunicación poco empática → 1 deficiencia + 1 correctivo por dimensión); cadena valor 6 actividades con flujo valor e-commerce; incidente (restaurar rápido) vs problema (causa raíz) vs cambio (estándar/normal); mejora continua.
- Casos: "Tienda Andina e-commerce lento" (path ramificado), "NubeNova SLA caído 40%".
- Ejercicios: Quiz N1 (5 memoria: n° dimensiones/prácticas/actividades/SVS), Quiz N2 (7 comprensión: NO es principio, co-creación, Agile permitido), Quiz N3 (6 escenario espejo del evaluativo), Sort principios, Match dimensión→deficiencia, TrueFalse 6, Essay 3 (SVS, v3 vs v4, 4 dimensiones) con rúbrica, Path e-commerce.
**Aceptación:** un lector puede responder las 10 choice del evaluativo y esbozar las 3 de desarrollo sin info externa.

### T2 — COBIT núcleo [HECHA 2026-09-22]
**Files:** `content/topics/cobit-2019-framework.md`, `content/topics/mapa-procesos-cobit.md`
**Habilita:** EVALUACIÓN COBIT S-R (4 de desarrollo + rúbrica)
- Agregar: EDM letra por letra (Evaluar: analizar estrategia/riesgo; Dirigir: fijar dirección/políticas; Monitorear: medir vs objetivos; responsable: Consejo/Alta Dirección); PBRM (Plan/Build/Run/Monitor → APO/BAI/DSS/MEA con qué logra cada uno + 2 objetivos ejemplo c/u); 7 componentes del sistema (procesos, estructuras org, principios/políticas, información, cultura/ética, personas/habilidades, servicios/infraestructura) + por qué holístico sociotécnico con 2 ejemplos; Gobernanza (EDM, board) vs Gestión (PBRM, CIO/gerencia) + tabla quién decide qué; caso alineación con Estructuras (comités, RACI) + Información (reportes, KPIs).
- Casos: "Banco Regional TI desalineada" (essay+path).
- Ejercicios: Quiz N1/N2/N3, Sort dominios PBRM, Match objetivo→dominio (EDM01-05, APO01/12/13, BAI11, DSS02/05, MEA01), TrueFalse, Essay 4 espejo evaluativo con rúbrica 0-2.5 (concepto/aplicación/terminología/redacción).
**Aceptación:** responde qué hace cada fase EDM/PBRM, a qué dominio pertenece cada ejemplo, y explica interacción board↔CIO.

### T3 — ISO 38500 + intro gobierno [HECHA 2026-09-22]
**Files:** `content/topics/iso-38500-gobierno-corporativo.md`, `content/topics/gobierno-ti-introduccion-cobit-il-iso.md`
**Habilita:** Evaluativo ISO 38500 S-R (2 desarrollo + 10 choice)
- Agregar: 6 principios deep (qué exige + violación típica + ejemplo: Responsabilidad, Estrategia, Adquisición transparente costo/beneficio/riesgo, Desempeño fit-for-purpose, Conformidad, Comportamiento Humano consentimiento); E-D-M correctivo paso a paso aplicado al caso IA financiera sin compliance; Gobierno (accountability indelegable del Directorio, aunque delegue operación al CIO) vs Gestión (ejecutar) + 1 decisión exclusiva c/u; ISO 38500 (qué/por qué, alta dirección) vs ITIL (cómo, operación); novedad 2024 alineación ISO 37000 (desempeño+responsable+ético); Monitoreo en agile (backlog refleja estrategia + valor dentro de riesgo, no velocity).
- Casos: "Financiera compra IA predictiva sin comité" (path E-D-M), "Monitoreo invasivo sin aviso" (principio humano).
- Ejercicios: Quiz N1/N2/N3 (10 espejo evaluativo), Match principio→violación, TrueFalse, Essay 2 + rúbrica.
**Aceptación:** identifica principios vulnerados en un caso y aplica E-D-M correctivo.

### T4 — PMBOK 8 + casos (zafra + valor) [HECHA 2026-09-22]
**Files:** `content/topics/gestion-proyectos-pmbok-8.md`, `content/topics/caso-estudio-ingenio-azucarero.md`, `content/topics/valor-negocio-administracion-ti.md`
**Habilita:** EVAL PMBOK 1 (matriz 10) + EVAL PMBOK 2 (3 desarrollo + 10 choice)
- Agregar: 6 principios con nombres del evaluativo (holística, valor, calidad integrada, liderazgo responsable, sostenibilidad, entorno empoderado) + output (producto) vs outcome (beneficio, ej. software instalado vs 30% más rápido); 5 focus areas + tabla 40 procesos (conteo 2/19/8/9/2) + matriz 7×5 (dónde va cada proceso: Charter=Gob/Iniciación, EDT=Alcance/Planificación, ruta crítica=Cronograma/Planificación, EVM=Finanzas/MyC, encuesta satisfacción=Interesados/MyC, contingencia=Riesgo/Ejecución, liberar equipo=Recursos/Cierre); interconexión dominios (cambio alcance→cronograma→presupuesto); IA/datos + tailoring + sostenibilidad; zafra ingenio día 45 06:00→08:15 integrando PMBOK+COBIT+ITIL; Rockin1000 como output vs outcome y modelo multifacético.
- Ejercicios: Quiz N1 (6/7/40/5), Quiz N2 matriz (10 espejo EVAL 1), Quiz N3 principios (10 espejo EVAL 2), Sort focus areas, Match dominio→proceso, TrueFalse, Essay 3 con pautas corrección del docente.
**Aceptación:** ubica cualquier actividad en celda Dominio×Focus Area y diferencia output/outcome.

### T5 — Estrategia y PETI [HECHA 2026-09-22]
**Files:** `content/topics/plan-estrategico-ti-peti.md`, `content/topics/admin-estrategica-ti.md`, `content/topics/admin-general-planificacion-estrategica.md`
- Unificar solapes, agregar FODA/PESTEL/BSC aplicado a TI con ejemplo empresa ficticia, cascada PETI→portafolio→proyecto, quizzes progresivos. Sin evaluativo directo: nivel exigencia medio.
**Aceptación:** build:content + build OK, sin duplicar lo de T2-T4.

### T6 — Auditoría, calidad y personas [HECHA 2026-09-22]
**Files:** `content/topics/auditoria-informatica.md`, `content/topics/iso-12207-ingenieria-software.md`, `content/topics/gestion-cambio-organizacional.md`, `content/topics/habilidades-sociales-trabajo-equipo.md`, `content/topics/habilidades-sociales-trabajo-equipo-2.md`
- Completar tipos de auditoría y papeles, ciclo 12207 con ejemplo, ADKAR/cambio con caso, fusionar las 2 de habilidades (hoy duplicadas) o diferenciarlas (fundamentos vs avanzado). Quizzes progresivos.
**Aceptación:** eliminar duplicación habilidades; build OK.

---
*(Nuevo tema solo si el material lo exige: p. ej. `iso-37000-sostenibilidad.md` si T3 lo necesita — pedir confirmación antes de crear.)*

## Log de avance
| Tarea | Estado | Fecha | Commit | Notas |
|---|---|---|---|---|
| T1 ITIL | hecha | 2026-09-22 | — | v3 vs v4, SVS, 7 principios, 34 practicas, 4 dimensiones, casos Tienda Andina + NubeNova + LogiTrans, quizzes N1/N2/N3 + sort/match/tf/essay/path |
| T2 COBIT | hecha | 2026-09-22 | — | EDM letra por letra, PBRM→APO/BAI/DSS/MEA, 7 componentes, 6 principios, gobernanza vs gestion, 40 objetivos, caso Banco Regional, quizzes N1/N2/N3 + sort/match/tf/essay(4, rubrica 0-2.5)/path |
| T3 ISO 38500 | hecha | 2026-09-22 | — | 6 principios deep (que exige + violacion + ejemplo), tabla 2015 vs 2024 (11 principios ISO 37000), E-D-M, gobierno vs gestion + accountability indelegable, ISO 38500 vs ITIL (que/por que vs como), monitoreo agile, casos Financiera Andina + Monitoreo invasivo, quizzes N1/N2/N3 (10 espejo evaluativo) + sort/match/tf/essay(2, rubrica)/path; intro gobierno con roles confundidos Comercial Pacifico |
| T4 PMBOK 8 | hecha | 2026-09-22 | — | 6 principios (holistica, valor, calidad integrada, liderazgo responsable, sostenibilidad, entorno empoderado), output vs outcome, 7 dominios, 5 focus areas + 40 procesos (2/19/8/9/2), matriz 7x5, interconexion, IA/tailoring/sostenibilidad, zafra dia 45 + COBIT/ITIL, Rockin1000 modelo multifacetico; quizzes N1 (6/7/40/5)/N2 matriz (10 espejo EVAL1)/N3 principios (10 espejo EVAL2) + sort/match/tf/essay(3 con pautas docente)/path en los 3 topics |
| T5 Estrategia/PETI | hecha | 2026-09-22 | — | Sin duplicar T2-T4: FODA general + PESTEL en admin-general; FODA/PESTEL aplicados a TI en admin-estrategica; BSC de TI (4 perspectivas con KPIs) + cascada PETI->portafolio->programa->proyecto->operacion en PETI. Empresa ficticia Logistica Andina. Corregido heading duplicado PODIO. Quizzes N1/N2/N3 + sort/match/tf/essay(2, rubrica)/path en los 3 topics |
| T6 Auditoría/personas | hecha | 2026-09-22 | — | Auditoría: tipos (origen/alcance/objeto/continuidad), papeles de trabajo, ética del auditor, caso Comercial del Valle, quizzes N1/N2/N3+sort+2match+tf+essay(2)+path. ISO 12207: caso SoftAndes, quizzes N1/N2/N3+sort+match+tf+essay(2). Cambio: caso ERP Distribuidora Andina (ADKAR/Kotter), quizzes N1/N2/N3+2sort+match+tf+essay(2)+path. Habilidades diferenciadas: fundamentos (comunicación/escucha/IE/conflictos, caso Retail Andina) vs liderazgo avanzado (estilos/Lencioni/delegación/SBI/remoto, caso Camila), con cross-refs y quizzes progresivos |

## Revisión completa de calidad (QA) — 2026-09-22

Auditoría de los 17 temas contra el estándar del usuario. Resultados:

| Chequeo | Resultado |
|---|---|
| Batería progresiva (Quiz N1/N2/N3 + Essay con rúbrica + Path + Sort + Match + TrueFalse) | **17/17 OK** |
| Quiz con explicación en cada pregunta | OK |
| Índice de respuesta dentro de rango y opciones ≥ 2 | OK |
| Essay con respuesta modelo y rúbrica | OK |
| Path con nodo final y sin callejones / targets válidos | OK (se corrigió 1) |
| Secciones duplicadas | OK (se corrigió 1 en T5) |
| Contenido de cada evaluativo cubierto (ITIL, COBIT, ISO 38500, PMBOK 1 y 2) | OK |
| Casos de empresa ficticia + problema→solución en cada tema | OK |
| Estilo interactivo (definitions, callouts, flows, tablas) | OK |

**Hallazgos corregidos en esta revisión:**
1. `gobierno-ti-introduccion-cobit-il-iso.md`: el bloque `:::path` usaba `|| * |` en nodos finales (formato inválido). Corregido a `| * |` → ahora tiene nodo final y sin callejones.
2. `mapa-procesos-cobit.md`: le faltaban Essay y Path (era el único tema sin batería completa). Se agregó Essay (Evaluate vs Assess, ubicar objetivos) y Path.
3. **Contenido nuevo detectado en `Material/MEA EVALUATE Y ASSES.docx`** (no estaba en `nuevo/`): distinción **Evaluate (Evaluar) vs Assess (Valorar)** en COBIT MEA. Se agregó a `mapa-procesos-cobit.md` con tabla comparativa y ejemplo de control de contraseñas.

**Verificación final:** `npm run build:content` (17 temas) + `npm run build` OK; auditoría estructural automática sin incidencias.

## Workflow por tarea ( checklist obligatorio )
1. Leer los `.md` de la tarea + evaluativo correspondiente en `Material/nuevo/`.
2. Reescribir con estándar de 4 puntos (teoría completa + caso empresa + batería progresiva + estilo awesome).
3. `npm run build:content` (debe regenerar `data/topics.json` sin errores).
4. `npm run build` (typecheck frontend OK).
5. Actualizar este archivo: marcar tarea hecha, fecha, mover EN CURSO.
6. Responder al usuario con qué cambió y qué evaluativo ya puede probar.
