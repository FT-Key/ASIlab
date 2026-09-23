---
title: Auditoría Informática
emoji: "🔍"
accent: "#E87C7C"
category: Auditoría y Control
difficulty: intermedio
order: 12
unit: "Auditoría y Calidad"
description: Conceptos, caracteristicas, clasificación, entorno auditable, tipos de auditoría, técnicas, herramientas, controles, papeles de trabajo, ética del auditor, metodologías y métodos de evaluación de la auditoría informática. Incluye CRMR y un caso aplicado.
tags: [auditoria-informatica, CRMR, controles, metodologia-auditoria, entorno-auditable, papeles-de-trabajo]
keyTakeaway: La auditoría informática evalúa el entorno tecnologico para encontrar debilidades y amenazas que afectan la calidad de los procesos y la confiabilidad de la información. El auditor domina técnicas, herramientas, controles y papeles de trabajo para llegar a conclusiones fundamentadas.
sources:
  - "ITAF - IT Audit Framework (5ta edición)|https://www.isaca.org/resources/frameworks-standards-and-models|ISACA|Estándar de auditoría de TI"
  - "ISO 19011:2018 - Directrices para la auditoría de sistemas de gestión|https://www.iso.org/standard/70017.html|ISO|Principios y proceso de auditoría"
  - "CISA - Certified Information Systems Auditor|https://www.isaca.org/credentialing/cisa|ISACA|Certificación de auditoría de sistemas"
  - "Resumen de libro y material de clase de auditoría|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es la Auditoría Informática?

:::definition Auditoría Informática
Proceso sistemático de evaluación del entorno tecnologico de una organización para identificar debilidades y amenazas que puedan afectar la calidad de los procesos, la confiabilidad de la información y la eficiencia de las operaciones. El auditor busca problemas y propone soluciones.
:::

:::callout info
La auditoría informática NO es solo revisar computadores. Es evaluar toda la tecnología: hardware, software, datos, personas, procesos y procedimientos que conforman el entorno informático.
:::

## Caracteristicas de la Auditoría Informática

1. **Es un proceso sistemático** — Sigue una metodología y procedimientos estructurados
2. **Busca debilidades y amenazas** — Identifica vulnerabilidades en el entorno
3. **Evalúa la calidad** — Mide si los procesos y la información cumplen estándares
4. **Es independiente** — El auditor no debe tener conflicto de intereses
5. **Es continua** — Se realiza de forma periódica, no una sola vez
6. **Genera recomendaciones** — No solo encuentra problemas, propone soluciones

## Clasificación de la Auditoría Informática

| Tipo | Enfoque | Que evalúa | Ejemplo |
|------|---------|------------|---------|
| **Por areas específicas** | Técnico | Aplicaciones, desarrollo, producción | Revisar si una BD esta bien disenada |
| **Por areas generales** | Gerencial | Gestión, estrategia, organización | Evaluar si el gerente planifica bien (PODIO) |
| **Global** | Integral | Todos los aspectos técnicos y gerenciales | Auditoría completa del departamento de TI |
| **Parcial (CRMR)** | Gerencial | Deficiencias organizativas y gerenciales | Revisar la gestión de un area específica |

:::callout warning
La auditoría global estudia todos los problemas técnicos, parámetros, configuraciones y controles. La auditoría parcial (CRMR) es más corta porque se enfoca solo en deficiencias gerenciales.
:::

## Tipos de Auditoría Informática

Además de la clasificación por areas, la auditoría se clasifica segun quien la hace y que evalúa.

| Criterio | Tipo | Que significa |
|----------|------|---------------|
| **Por origen** | Interna | La realiza personal de la propia organización |
| | Externa | La realiza una firma independiente contratada |
| **Por alcance** | Global | Cubre todos los aspectos técnicos y gerenciales |
| | Parcial (CRMR) | Se enfoca en un area o en deficiencias gerenciales |
| **Por objeto** | De sistemas | Evalúa el entorno tecnologico: hardware, software, datos, redes |
| | Financiera | Evalúa la confiabilidad de la información contable soportada por TI |
| | Operativa | Evalúa eficiencia y eficacia de las operaciones |
| **Por continuidad** | Periódica | Se realiza en ciclos planificados |
| | Continua | Monitoreo permanente del entorno |

:::callout idea
Interna vs externa no es "buena vs mala": la interna conoce la organización pero puede perder objetividad; la externa aporta independencia pero requiere más tiempo de contextualización. Lo importante es la **independencia** del juicio.
:::

## El Entorno Auditable

:::definition Entorno Auditable
Todo aquello que puede ser evaluado por un auditor. Incluye los sistemas, procesos, datos, personas, controles y procedimientos que conforman la infraestructura tecnologica de la organización.
:::

| Componente | Que incluye | Que evalúa el auditor |
|------------|-------------|----------------------|
| **Aplicaciones** | Software, sistemas, plataformas | Funcionalidad, seguridad, eficiencia |
| **Infraestructura** | Hardware, redes, servidores | Disponibilidad, capacidad, mantenimiento |
| **Datos** | Bases de datos, archivos, respaldos | Integridad, confiabilidad, accesibilidad |
| **Personas** | Personal de TI, usuarios | Competencia, procedimientos, controles |
| **Procesos** | Métodos de trabajo, flujos | Eficiencia, efectividad, cumplimiento |
| **Seguridad** | Políticas, controles de acceso | Protección, prevención, detección |

### Areas Específicas vs Generales

| Area | Enfoque | Ejemplo de evaluación |
|------|---------|----------------------|
| **Desarrollo** | Creación de software | Metodología de desarrollo, calidad del código |
| **Producción** | Operación de sistemas | Disponibilidad, rendimiento, respaldos |
| **Sistemas** | Integración de ambos | Arquitectura, integración, gobierno |
| **Gerencia** | Gestión y estrategia | Planificación, organización, control (PODIO) |

:::callout info
Las areas específicas son Desarrollo, Producción y Sistemas. La fila que necesita de Desarrollo y Producción a la vez es SISTEMAS.
:::

## Técnicas de Auditoría

| Técnica | Que hace | Cuando se usa |
|---------|----------|---------------|
| **Entrevista** | Recopila información mediante preguntas directas | Para entender procesos y percepciones |
| **Cuestionario** | Estandariza la recolección de datos | Para evaluar multiples areas de forma consistente |
| **Observación directa** | Ve como trabajan las personas | Para verificar cumplimiento de procedimientos |
| **Inspección visual** | Revisa documentación y registros | Para verificar que existan políticas y registros |
| **Prueba de cumplimiento** | Verifica si se siguen los procedimientos | Para confirmar que los controles funcionan |
| **Prueba sustantiva** | Evalúa la exactitud de los datos | Para validar la confiabilidad de la información |

:::callout idea
El auditor combina técnicas segun el objetivo. No basta con una sola; la combinación da conclusiones más solidas.
:::

## Herramientas de Auditoría

| Herramienta | Para que sirve | Ejemplo |
|-------------|----------------|---------|
| **Software de auditoría** | Automatiza pruebas y análisis | ACL, IDEA, CAT |
| **Hojas de cálculo** | Analiza datos y genera reportes | Excel, Google Sheets |
| **Herramientas de monitoreo** | Supervisa la operación en tiempo real | Nagios, Zabbix |
| **Simuladores** | Prueban escenarios sin afectar producción | Entornos de prueba |
| **Generadores de informes** | Documentan hallazgos y recomendaciones | Plantillas de auditoría |

## Controles de Auditoría

:::definition Controles de Auditoría
Mecanismos de prevención, detección y corrección que protegen los activos de TI, aseguran la integridad de la información y garantizan el cumplimiento de políticas y procedimientos.
:::

| Tipo | Función | Ejemplo |
|------|---------|---------|
| **Preventivos** | Evitan que ocurran problemas | Controles de acceso, autenticación |
| **Detectivos** | Identifican problemas que ya ocurrieron | Logs de auditoría, alarmas |
| **Correctivos** | Corrigen problemas detectados | Restauracion de respaldos, parches |

### Controles por Area

| Area | Controles tipicos |
|------|-------------------|
| **Seguridad** | Permisos, contraseñas, firewall, cifrado |
| **Disponibilidad** | Respaldos, planes de continuidad, redundancia |
| **Integridad** | Validaciones, sumas de verificación, auditoría de datos |
| **Confidencialidad** | Cifrado, políticas de acceso, NDA |

## Metodología de Trabajo del Auditor

:::flow Metodología de Auditoría
1. Planificación: Definir alcance, objetivos, recursos y cronograma
2. Recopilación: Aplicar técnicas y herramientas para obtener evidencia
3. Análisis: Evaluar la evidencia y encontrar debilidades y amenazas
4. Conclusiones: Formular hallazgos, opiniones y recomendaciones
5. Informe: Documentar resultados y presentar a la dirección
:::

### Fase 1: Planificación
- Definir el alcance de la auditoría
- Establecer objetivos claros
- Asignar recursos (personas, tiempo, herramientas)
- Crear el cronograma de actividades

### Fase 2: Recopilación de Información
- Aplicar entrevistas, cuestionarios y observación
- Revisar documentación y registros
- Realizar pruebas de cumplimiento y sustantivas
- Recopilar evidencia objetiva

### Fase 3: Análisis
- Evaluar la evidencia obtenida
- Identificar debilidades y amenazas
- Clasificar los hallazgos por criticidad
- Comparar con estándares y mejores prácticas

### Fase 4: Conclusiones
- Formular hallazgos fundamentados
- Emitir opiniones sobre el estado del entorno
- Proponer recomendaciones accionables
- Priorizar acciones correctivas

### Fase 5: Informe de Auditoría
- Documentar hallazgos, conclusiones y recomendaciones
- Presentar a la dirección y areas involucradas
- Establecer plan de seguimiento
- Definir plazos para implementar acciones correctivas

:::callout warning
El informe es el producto final de la auditoría. Debe ser claro, conciso y fundamentado. Un informe sin evidencia no tiene valor.
:::

## Papeles de Trabajo del Auditor

:::definition Papeles de Trabajo
Conjunto ordenado de documentos donde el auditor registra el trabajo realizado y la evidencia obtenida. Son la base que sustenta los hallazgos, conclusiones y el informe final. Pertenecen al auditor o a la firma, son confidenciales y deben custodiarse.
:::

| Elemento | Que es | Ejemplo |
|----------|--------|---------|
| **Evidencia** | Prueba objetiva que sustenta un hallazgo | Logs, capturas, actas, resultados de pruebas |
| **Cedula / hoja de trabajo** | Documento donde se registra el análisis | Checklist de controles de acceso |
| **Marcas de auditoría** | Simbolos que referencian la evidencia | √ verificado, N/A no aplica, ≠ observado |
| **Legajo / archivo** | Conjunto ordenado de los papeles | Carpeta del area auditada |
| **Hallazgo** | Debilidad documentada con causa, efecto y recomendación | "No hay respaldos: riesgo de pérdida de datos" |

:::callout info
Un hallazgo bien redactado tiene 4 partes: **condición** (que se encontro), **criterio** (que debería ser), **causa** (por que ocurre) y **efecto** (que riesgo genera). Sin evidencia en el papel de trabajo, el hallazgo no se sostiene.
:::

## Ética y Perfil del Auditor

| Principio | Que exige |
|-----------|-----------|
| **Independencia** | No tener conflicto de intereses con el area auditada |
| **Objetividad** | Juzgar por la evidencia, sin sesgos ni favoritismos |
| **Confidencialidad** | No divulgar la información obtenida |
| **Competencia** | Tener los conocimientos técnicos necesarios |
| **Diligencia (due care)** | Realizar el trabajo con rigor y método |
| **Integridad** | Actuar con honestidad en todo momento |

## La Revisión de los Recursos Informáticos de la Dirección (CRMR)

:::definition CRMR
Metodología de auditoría abreviada que se enfoca en evaluar las debilidades y amenazas en la gestión de los directores de area. Es más corta que la auditoría global porque no busca problemas técnicos, sino deficiencias organizativas y gerenciales.
:::

### Objetivos de CRMR
1. Evaluar el grado de bondad o ineficiencia de los procedimientos y métodos de gestión
2. Identificar y fijar responsabilidades
3. Mejorar la flexibilidad de realización de actividades
4. Aumentar la productividad
5. Disminuir costes
6. Mejorar los métodos y procedimientos de dirección

### Alcance del CRMR

| Nivel | Descripción | Que incluye |
|-------|-------------|-------------|
| **Reducido** | Senala areas con potencialidad de beneficios | Identificación de oportunidades |
| **Medio** | Establece conclusiones y recomendaciones | Como la auditoría ordinaria |
| **Amplio** | Incluye planes de acción e implementación | Técnicas de implementación |

### Auditoría Global vs CRMR

| Aspecto | Auditoría Global | CRMR |
|---------|------------------|------|
| **Alcance** | Todos los aspectos técnicos y gerenciales | Solo deficiencias gerenciales |
| **Profundidad** | Alta (estudia todos los problemas) | Menor (enfoque en gestión) |
| **Velocidad** | Lenta (abarcadora) | Rapida (focalizada) |
| **Resultado** | Informe completo con recomendaciones técnicas | Soluciones rapidas a problemas concretos |

## Clasificación de Auditoría por Función

| Función | Que evalúa | Ejemplo |
|---------|------------|---------|
| **Función de Dirección** | Planificación, organización, integración | Si el gerente planifica y organiza bien |
| **Función de Operación** | Ejecución de procesos operativos | Si los sistemas funcionan correctamente |
| **Función de Producción** | Generación de servicios y productos | Si la producción es eficiente |
| **Función de Soporte** | Servicio técnico y ayuda al usuario | Si el soporte resuelve problemas a tiempo |

:::callout info
Para la función de producción se busca: operatividad, confiabilidad, seguridad y disponibilidad.
:::

## Caso de estudio: Comercial del Valle

Comercial del Valle es una cadena de tiendas que depende de su sistema de inventario y facturación. La gerencia sospecha que hay problemas: no existen respaldos documentados, los cajeros comparten una sola contraseña, y los cambios al sistema se hacen directamente en producción sin pruebas. Se contrata una auditoría informática externa.

| Hallazgo | Condición | Criterio | Causa | Efecto |
|----------|-----------|----------|-------|--------|
| Sin respaldos | No hay respaldos ni plan de recuperación | Debe existir respaldo y plan de continuidad | Falta de política de TI | Riesgo de pérdida total de datos |
| Contraseñas compartidas | Todos los cajeros usan la misma cuenta | Cada usuario debe tener credencial propia | Comodidad operativa | No hay trazabilidad ni responsabilidad |
| Cambios en producción | Se modifica el sistema sin pasar por pruebas | Debe existir separación de entornos y control de cambios | Ausencia de proceso de cambios | Fallos e interrupciones del servicio |

:::callout success
El informe del auditor no se limita a senalar: prioriza por criticidad y propone acciones (respaldos automáticos, cuentas individuales, entorno de pruebas y control de cambios). Cada hallazgo queda sustentado en un papel de trabajo con evidencia.
:::

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz Auditoría Informática - Nivel 1 (memoria)
1. ¿Que busca la auditoría informática? || Instalar software nuevo || Encontrar debilidades y amenazas en el entorno tecnologico || Vender computadores || Contratar más personal || 1 || Evalúa el entorno tecnologico para identificar debilidades y amenazas.
2. ¿Cuantas fases tiene la metodología de auditoría? || 3 || 4 || 5 || 7 || 2 || Cinco: Planificación, Recopilación, Análisis, Conclusiones e Informe.
3. ¿Que evalúa el CRMR? || Problemas técnicos de hardware || Deficiencias organizativas y gerenciales || Ventas de la empresa || Satisfacción del cliente || 1 || CRMR evalúa deficiencias organizativas y gerenciales (PODIO), no problemas técnicos.
4. ¿Que técnica permite ver como trabajan las personas? || Entrevista || Cuestionario || Observación directa || Prueba sustantiva || 2 || La observación directa permite ver el trabajo en su entorno real.
5. ¿A quien pertenecen los papeles de trabajo? || A la empresa auditada || Al auditor o a la firma de auditoría || Al público || Al proveedor de software || 1 || Pertenecen al auditor o la firma, son confidenciales y se custodian.
:::

### Nivel 2 - Comprensión

:::quiz Auditoría Informática - Nivel 2 (comprensión)
1. ¿Cual es la diferencia entre auditoría interna y externa? || La interna la hace personal propio y la externa una firma independiente || La interna es más cara || La externa no usa evidencia || Son iguales || 0 || Interna: personal de la organización. Externa: firma independiente contratada.
2. ¿Que diferencia hay entre auditoría global y CRMR? || La global cubre todo lo técnico y gerencial; CRMR solo lo gerencial || CRMR es más lenta || La global no usa técnicas || Son sinonimos || 0 || La global es abarcadora; CRMR es abreviada y enfocada en gestión.
3. ¿Que hace un control preventivo? || Detecta problemas ya ocurridos || Evita que ocurran problemas || Corrige problemas detectados || Documenta el informe || 1 || Los preventivos actuan antes de que el problema ocurra.
4. ¿Que diferencia una prueba de cumplimiento de una sustantiva? || La de cumplimiento verifica si se siguen los procedimientos; la sustantiva valida la exactitud de los datos || La sustantiva es más rapida || La de cumplimiento no usa evidencia || Son iguales || 0 || Cumplimiento: se siguen los controles. Sustantiva: los datos son exactos.
5. Un hallazgo bien redactado incluye: || Solo la queja del auditor || Condición, criterio, causa y efecto || El nombre del responsable || El costo del software || 1 || Un hallazgo tiene condición, criterio, causa y efecto, sustentado en evidencia.
6. ¿Que principio obliga al auditor a no tener conflicto de intereses? || Confidencialidad || Independencia || Diligencia || Competencia || 1 || La independencia exige ausencia de conflicto de intereses con el area auditada.
:::

### Nivel 3 - Casos de empresa

:::quiz Auditoría Informática - Nivel 3 (escenarios)
1. En Comercial del Valle no existen respaldos ni plan de recuperación. ¿Que control falta principalmente? || Preventivo de disponibilidad || Correctivo de seguridad || Detectivo de integridad || Preventivo de confidencialidad || 0 || El respaldo y el plan de continuidad son controles preventivos de disponibilidad.
2. Todos los cajeros usan la misma contraseña. ¿Que problema genera? || Mejora el rendimiento || No hay trazabilidad ni responsabilidad individual || Reduce costos || Aumenta la disponibilidad || 1 || Sin credenciales individuales no se puede rastrear quien hizo que.
3. Los cambios al sistema se hacen directo en producción sin pruebas. ¿Que control fundamental falta? || Separación de entornos y control de cambios || Cifrado de disco || Balanceo de carga || Respaldo de correo || 0 || Sin separación de entornos ni control de cambios, un error afecta producción.
4. La gerencia pide evaluar solo si los directores de area gestionan bien (PODIO). ¿Que tipo de auditoría corresponde? || Global || CRMR (parcial) || Financiera || De sistemas || 1 || CRMR se enfoca en deficiencias organizativas y gerenciales.
5. El auditor toma capturas de pantalla y actas como sustento de un hallazgo. ¿Como se llama ese respaldo? || Marca de auditoría || Evidencia en el papel de trabajo || Informe final || Cronograma || 1 || La evidencia registrada en los papeles de trabajo sustenta el hallazgo.
6. Se contrata una firma independiente para auditar el area de TI. ¿Que tipo de auditoría es por su origen? || Interna || Externa || Continua || Financiera || 1 || Una firma independiente contratada realiza auditoría externa.
:::

### Práctica guiada

:::sort Ordena las fases de la metodología de auditoría
- Planificación: definir alcance, objetivos y recursos
- Recopilación: aplicar técnicas y obtener evidencia
- Análisis: evaluar evidencia y encontrar debilidades
- Conclusiones: formular hallazgos y recomendaciones
- Informe: documentar y presentar a la dirección
:::

:::match Tipos de controles
- Preventivos | Evitan que ocurran problemas
- Detectivos | Identifican problemas que ya ocurrieron
- Correctivos | Corrigen problemas detectados
- CRMR | Revisión abreviada de gestión gerencial
:::

:::match Tipos de auditoría por objeto
- De sistemas | Evalúa el entorno tecnologico
- Financiera | Evalúa la confiabilidad de la información contable soportada por TI
- Operativa | Evalúa eficiencia y eficacia de las operaciones
- Global | Cubre todos los aspectos técnicos y gerenciales
:::

:::truefalse Auditoría Informática
1. La auditoría global es más rapida que CRMR. || Falso || La global es más lenta porque es abarcadora; CRMR es focalizada.
2. Los controles preventivos evitan que ocurran problemas. || Verdadero || Actuan antes de que el problema suceda.
3. El informe es el producto final de la auditoría. || Verdadero || Documenta hallazgos, conclusiones y recomendaciones.
4. Los papeles de trabajo son públicos. || Falso || Son confidenciales y pertenecen al auditor o la firma.
5. Un hallazgo sin evidencia sigue siendo valido. || Falso || Sin evidencia registrada el hallazgo no se sostiene.
6. La independencia del auditor es un requisito ético. || Verdadero || No debe tener conflicto de intereses con el area auditada.
:::

:::essay Análisis de auditoría
1. Explica por que la evidencia y los papeles de trabajo son la base del informe de auditoría. || Pista: Piensa en como se sostiene un hallazgo frente a la dirección. || Respuesta modelo: El informe se construye sobre hallazgos, y todo hallazgo necesita evidencia objetiva. Los papeles de trabajo registran esa evidencia (logs, actas, capturas, resultados de pruebas) y las marcas de auditoría la referencian. Sin ellos, el hallazgo sería una opinión sin sustento y la dirección no tendría base para decidir ni para exigir acciones correctivas. || [rúbrica: Define evidencia, Define papeles de trabajo, Relaciona con el hallazgo, Menciona el informe]
2. Diseña los pasos de una auditoría informática para una empresa que no tiene respaldos ni control de accesos. || Pista: Recorre las 5 fases de la metodología. || Respuesta modelo: 1) Planificación: definir alcance (respaldos y accesos), objetivos y cronograma. 2) Recopilación: entrevistas, observación y pruebas para obtener evidencia. 3) Análisis: identificar debilidades (sin respaldos, contraseñas compartidas) y clasificar por criticidad. 4) Conclusiones: formular hallazgos con condición, criterio, causa y efecto, y proponer acciones. 5) Informe: presentar a la dirección con plan de seguimiento y plazos. || [rúbrica: Cubre las 5 fases, Propone técnicas, Fórmula hallazgos, Incluye recomendaciones]
:::

:::path Diagnostico de auditoría en Comercial del Valle
1 | Inicio | La gerencia te pide auditar el area de TI porque el sistema de inventario falla y no hay respaldos. ¿Cual es tu primer paso? | Planificar alcance, objetivos y cronograma=2; Empezar a cambiar el sistema de inmediato=3
2 | Planificación | Correcto: la auditoría empieza definiendo alcance, objetivos, recursos y cronograma antes de recopilar evidencia. | * | Buen inicio: sin planificación la evidencia se recoge sin rumbo.
3 | Error de enfoque | El auditor no implementa cambios: evalúa y recomienda. Cambiar el sistema de inmediato elimina la evidencia y confunde roles. | * | Riesgo: el auditor pierde independencia y el hallazgo no queda sustentado.
:::

:::arch gobierno-ti
