---
title: Administración Estratégica de TI y Planificación Estratégica (PETI)
emoji: "🚀"
accent: "#7C61D4"
category: Administración Estratégica
difficulty: intermedio
order: 2
unit: "Unidad 1 · Administración Estratégica y Planificación"
description: Guía completa de administración estratégica de TI. Parte de la administración general (PODIO, estrategia vs táctica, tipos de planificación, modelo de negocio, cadena de valor), desarrolla el análisis estratégico (FODA y PESTEL aplicados a TI, objetivos SMART, benchmarking, deuda técnica), los 3 pilares, la alineación estratégica, la arquitectura empresarial (TOGAF) y la gestión del cambio, y culmina con el PETI (estructura, metodología, cascada estratégica y Balanced Scorecard de TI). Con el ejemplo integrador de Logística Andina.
tags: [estrategia-TI, admin-general, PODIO, FODA, PESTEL, SMART, arquitectura-empresarial, TOGAF, PETI, balanced-scorecard, KPIs, cascada]
keyTakeaway: La administración estratégica de TI convierte la tecnología en ventaja competitiva. La administración (PODIO) y la planificación (estrategia, táctica, operativa) dan el marco; FODA y PESTEL el diagnostico; SMART los objetivos; y el PETI con su cascada y su BSC de TI traduce la estrategia del negocio (PEI) en iniciativas medibles que llegan hasta la operación.
sources:
  - "TOGAF - The Open Group Architecture Framework|https://www.opengroup.org/togaf|The Open Group|Estándar de arquitectura empresarial"
  - "COBIT 2019 (APO02 Estrategia y APO05 Cartera)|https://www.isaca.org/resources/cobit|ISACA|Gobierno, gestión y alineación de TI con el negocio"
  - "The Balanced Scorecard - Kaplan y Norton|https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2|Harvard Business Review|Origen del BSC"
  - "Administración Estratégica (Thompson y Strickland)|https://www.mheducation.com|McGraw-Hill|Texto base de estrategia y ventaja competitiva"
  - "Valor de Negocio en la Administración de TI (U21)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "Plan Estratégico de TI PETI (U23)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "Resumenes y notas de clase de Administración de Recursos|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es la Administración?

:::definition Administración
Ciencia social que estudia como las organizaciones y sus integrantes trabajan en conjunto para alcanzar objetivos de manera eficiente y eficaz. Es el proceso de planificar, organizar, dirigir, integrar y controlar los recursos (humanos, económicos, materiales y tecnologicos) para alcanzar metas.
:::

:::callout info
La administración no es exclusiva de las empresas: también se aplica en hogares, gobiernos y hospitales, en cualquier organización que use recursos para alcanzar objetivos.
:::

## La Función Administrativa: PODIO

1. **P**lanificar
2. **O**rganizar
3. **D**irigir
4. **I**ntegrar
5. **C**ontrolar

| Función | Que hace |
|---------|----------|
| **Planificar** | Define objetivos y traza las estrategias y acciones para alcanzarlos |
| **Organizar** | Estructura los recursos (personas, areas, presupuesto): quien hace que, cuando y como |
| **Dirigir** | Lidera, motiva e influye para ejecutar con compromiso; incluye decisión y comunicación |
| **Integrar** | Conecta las partes para que trabajen coordinadas hacia los objetivos colectivos |
| **Controlar** | Verifica que se cumpla el plan, detecta desviaciones y aplica correctivos |

:::callout warning
PODIO es la base para evaluar el desempeno de un gerente. La auditoría CRMR (Revisión de los Recursos Informáticos de la Dirección) evalúa si el gerente cumple bien estas cinco funciones.
:::

## Estrategia vs Táctica

| Concepto | Horizonte | Pregunta | Ejemplo |
|----------|-----------|----------|---------|
| **Visión** | Largo plazo (5-10 años) | ¿Quienes queremos ser? | Ser líder regional en soluciones de TI |
| **Misión** | Permanente | ¿Para que existimos? | Proveer tecnología que transforme negocios |
| **Estrategia** | Mediano plazo (2-5 años) | ¿Como llegamos alla? | Expandir a 3 países con alianzas locales |
| **Objetivos** | Corto-mediano plazo | ¿Que queremos lograr? | Aumentar ingresos 20% este año |
| **Táctica** | Corto plazo (meses) | ¿Que hacemos hoy? | Capacitar al equipo en nuevas herramientas |
| **Planes operativos** | Día a día | ¿Quien lo hace? | Horarios, tareas, presupuestos asignados |

:::callout idea
La estrategia responde a "hacer las cosas correctas"; la táctica, a "hacer las cosas correctamente". Ambas son necesarias.
:::

## Los 3 Pilares de la Administración Estratégica de TI

:::definition Administración Estratégica de TI
Proceso continuo de planificación, implementación y monitoreo de la tecnología de información alineada con los objetivos estratégicos de la organización. Busca maximizar el valor que la TI genera para el negocio.
:::

:::flow Tres Pilares
- Gobierno de TI: que debemos gobernar (dirección y supervisión)
- Gestión de TI: como lo hacemos (procesos y servicios)
- Arquitectura de TI: con que lo construimos (estructura tecnologica)
:::

- **Gobierno de TI** — Define la dirección estratégica, asigna recursos y supervisa el desempeno.
- **Gestión de TI** — Ejecuta los procesos para entregar servicios de calidad.
- **Arquitectura de TI** — Define la estructura tecnologica que soporta el negocio actual y futuro.

:::callout info
No es comprar la última tecnología. Es decidir **QUE** tecnologías implementar, **COMO** implementarlas y **PARA QUE** propósito, todo alineado con la estrategia del negocio.
:::

## Niveles de Planificación: Estratégica, Táctica y Operativa

| Tipo | Horizonte | Quien planifica | Ejemplo |
|------|-----------|-----------------|---------|
| **Estratégica** | Largo plazo (3-10 años) | Alta dirección | Expansión a nuevos mercados |
| **Táctica** | Mediano plazo (1-3 años) | Mandos medios | Implementar un ERP |
| **Operativa** | Corto plazo (día a día) | Primer nivel | Horarios de producción |

:::callout warning
La planificación operativa depende de la táctica, que depende de la estratégica. Si la estrategia es débil, todos los planes inferiores fallan.
:::

## Las 4 Etapas de la Planificación Estratégica

1. **Etapa Básica:** definir la razón de ser (misión) y hacia donde vamos (visión)
2. **Etapa de Atención al Tiempo:** analizar el entorno (FODA, PESTEL) y elegir estrategias
3. **Etapa de Potenciación:** analizar factores críticos internos (personal, organización, gerente)
4. **Etapa de Aplicación:** definir políticas, programas, presupuestos y controles

:::callout warning
Las etapas no se saltan. Comenzar sin misión clara o sin análisis del entorno genera planes débiles que fallan en la ejecución.
:::

## Modelo de Negocio y Estrategia

| Concepto | Que es | Ejemplo |
|----------|--------|---------|
| **Modelo de Negocio** | Como la empresa genera ingresos y es sostenible | Vender productos o suscripción |
| **Estrategia del Negocio** | Que ventaja competitiva busca | Liderazgo en costo, diferenciación, enfoque |
| **Estrategia Corporativa** | Como se estructuran las unidades | Diversificacion, integración vertical |
| **Objetivos Estratégicos** | Metas concretas y medibles | Captar 100 clientes nuevos en 6 meses |

### Las 5 Estrategias Competitivas Genericas (Thompson)

1. **Líder en costos totales más bajos** — Operar con costos menores que los competidores
2. **Diferenciación** — Ofrecer algo único que otros no tienen
3. **Concentracion en un segmento (enfoque)** — Enfocarse en un nicho específico
4. **Mejor costo** — Mejor relación calidad-precio
5. **Estrategia híbrida** — Combinar elementos de las anteriores

:::callout idea
Thompson afirma que las 5 estrategias genericas son las que generan exito sostenido; las organizaciones las combinan con sus ventajas y debilidades internas.
:::

## La Cadena de Valor

:::definition Cadena de Valor
Modelo que identifica las actividades principales y de apoyo que agregan valor al producto o servicio desde la concepción hasta la entrega al cliente.
:::

- **Actividades principales:** logística de entrada, operaciones, logística de salida, marketing y ventas, servicio postventa.
- **Actividades de apoyo:** infraestructura, gestión de RRHH, desarrollo tecnologico, adquisiciones.

:::definition Fórmula del Exito
Que las personas perciban más valor en el producto/servicio que lo que les cuesta, más las ventajas sobre la competencia. Utilidades = Ingresos - Costos.
:::

## Alineación Estratégica

| Nivel | Pregunta | Herramienta |
|-------|----------|-------------|
| Estratégico | ¿Para que usamos TI? | PEI, PETI, BSC |
| Táctico | ¿Como implementamos? | Portafolio de proyectos |
| Operativo | ¿Que hacemos día a día? | Procesos y SLAs |

:::callout warning
La brecha entre estrategia y operación es donde fracasan las iniciativas de TI. Un PETI bien estructurado cierra esa brecha (ver la sección del PETI más abajo para el detalle de la cascada).
:::

## Análisis FODA

:::definition FODA
Herramienta de análisis estratégico que evalúa factores internos (Fortalezas y Debilidades) y externos (Oportunidades y Amenazas). También se llama DAFO.
:::

El FODA evalúa factores **internos** (Fortalezas y Debilidades) y **externos** (Oportunidades y Amenazas). La tabla siguiente muestra que evalúa cada cuadrante y lo aplica a la función de TI de Logística Andina:

| Factor | Interno/Externo | Que evalúa | Ejemplo general (Logística Andina) | Ejemplo en TI (Logística Andina) |
|--------|-----------------|------------|------------------------------------|----------------------------------|
| **Fortalezas (F)** | Interno | Que hace bien la organización? | Red de bodegas propia, equipo capacitado | ERP estable, backups probados, equipo con experiencia |
| **Debilidades (D)** | Interno | Donde le falta capacidad? | Deuda técnica, presupuesto de TI limitado | Deuda técnica, sistemas aislados, sin API de integración |
| **Oportunidades (O)** | Externo | Que oportunidades aprovechar? | Auge del e-commerce, cloud, IA | Cloud, IA para ruteo, integración con e-commerce |
| **Amenazas (A)** | Externo | Que la puede perjudicar? | Competencia con mejores apps, regulación | Ransomware, dependencia de un solo proveedor, obsolescencia |

:::callout danger
El error más comun es confundir debilidades con amenazas o fortalezas con oportunidades. Fortalezas y debilidades son **internas** (la empresa las controla); oportunidades y amenazas son **externas** (no las controla). El clásico: confundir una debilidad interna (deuda técnica) con una amenaza externa (ransomware).
:::

## Análisis PESTEL

:::definition PESTEL
Herramienta que analiza el **entorno externo** de la organización en seis dimensiones: Política, Económica, Social, Tecnologica, Ecologica y Legal. Complementa al FODA aportando el contexto macro donde compite la empresa.
:::

| Dimensión | Que analiza | Ejemplo en TI (Logística Andina) |
|-----------|-------------|----------------------------------|
| **Político** | Políticas y gobierno | Incentivos al comercio electronico y a mipymes |
| **Económico** | Costos, inflación, tipo de cambio | Costo del combustible y de los servicios cloud |
| **Social** | Tendencias de la sociedad | Crecimiento de compras online y entregas a domicilio |
| **Tecnologico** | Avances tecnologicos | IA, IoT para flotas, 5G |
| **Ecologico** | Medio ambiente | Regulación de emisiones; presión por flota electrica |
| **Legal** | Leyes y regulaciones | Protección de datos personales, normativa laboral |

:::callout idea FODA + PESTEL
El **PESTEL** mira afuera (macro-entorno) y el **FODA** combina adentro y afuera para decidir. Juntos son la base del análisis estratégico: el PESTEL da el escenario y el FODA define como aprovechar o defenderse.
:::

## Objetivos SMART

| Letra | Significado | Pregunta | Ejemplo |
|-------|-------------|----------|---------|
| **S** | Specific (Específico) | ¿Que exactamente se quiere lograr? | Aumentar la base de clientes |
| **M** | Measurable (Medible) | ¿Como se mide el progreso? | En un 15% |
| **A** | Achievable (Alcanzable) | ¿Es realista con los recursos? | Si, con inversión en marketing |
| **R** | Relevant (Relevante) | ¿Por que es importante? | Porque incrementa ingresos |
| **T** | Time-bound (Temporal) | ¿Para cuando? | En los próximos 6 meses |

:::callout info
**NO SMART:** "Mejorar las ventas" o "Mejorar la TI" (no son específicos, medibles ni temporales). **SMART:** "Aumentar las ventas en 15% en el próximo trimestre con campanas de marketing digital", o en TI: "Reducir el tiempo de despacho en 15% en 6 meses automatizando el ruteo".
:::

## Conceptos Clave de la Gestión Estratégica

:::definition Deuda Técnica
Atajos o decisiones de corto plazo en tecnología (código improvisado, infraestructura sin actualizar, documentación omitida) que ahorran tiempo hoy pero generan costos y problemas mayores mañana. Como una deuda financiera, acumula "intereses".
:::

:::definition Benchmarking
Práctica de comparar los procesos, servicios y métricas propias con las mejores prácticas del sector para identificar brechas y fijar metas realistas de mejora.
:::

:::definition Portafolio de Servicios de TI
Conjunto completo de servicios que el area de TI ofrece al negocio. Documenta cada servicio, su público y su valor, permitiendo priorizar inversiones y gestionar expectativas.
:::

## Arquitectura Empresarial

La arquitectura empresarial integra cuatro dominios:

1. **Estrategia del negocio** — Misión, visión y objetivos
2. **Arquitectura de datos** — Información y flujos
3. **Arquitectura de aplicaciones** — Sistemas e integraciones
4. **Arquitectura tecnologica** — Infraestructura y plataformas

:::callout success
El framework **TOGAF** (The Open Group Architecture Framework) es el estándar más utilizado para diseñar arquitectura empresarial.
:::

## Gestión del Cambio

La gestión del cambio es crítica para el exito de las iniciativas de TI:

- **Sensibilizacion** — Comunicar el por que del cambio
- **Participación** — Involucrar a los usuarios desde el inicio
- **Formación** — Capacitar en nuevas herramientas y procesos
- **Refuerzo** — Celebrar exitos y mantener el momentum

## Que es un PETI?

:::definition Plan Estratégico de TI (PETI)
Documento que define la dirección estratégica de la tecnología de información en una organización. Establece la visión de TI, los objetivos estratégicos, las iniciativas clave, los recursos necesarios y los indicadores de desempeno para un horizonte de 3 a 5 años.
:::

:::callout info
El PETI **no** es una lista de compras de hardware. Responde: "¿Como la TI ayuda al negocio a alcanzar sus objetivos?" Traduce el **PEI** (Plan Estratégico Institucional, del negocio) en iniciativas de TI medibles.
:::

## Estructura del PETI

| Componente | Que define | Ejemplo (Logística Andina) |
|------------|-----------|----------------------------|
| **Visión de TI** | Como se ve TI a futuro | "Ser la plataforma digital que entrega en menos de 24h" |
| **Alineación con el PEI** | Como soporta la estrategia del negocio | PEI: crecer 20% en e-commerce -> PETI: plataforma logística integrada |
| **Objetivos SMART** | Metas específicas y medibles | "Integrar 10 clientes de e-commerce al API en 6 meses" |
| **Iniciativas** | Proyectos y programas | Ruteo con IA, portal de clientes, ciberseguridad |
| **Recursos** | Presupuesto, personal, proveedores | 12% del presupuesto corporativo |
| **Indicadores (KPIs)** | Métricas de avance e impacto | Disponibilidad 99.9%, satisfacción 85% |

## Metodología de Desarrollo del PETI

:::flow Desarrollo del PETI
- Fase 1: Diagnostico actual (estado de TI)
- Fase 2: Definición de visión y misión de TI
- Fase 3: Identificación de brechas
- Fase 4: Definición de objetivos e iniciativas
- Fase 5: Asignación de recursos
- Fase 6: Definición de KPIs
- Fase 7: Aprobación e implementación
- Fase 8: Monitoreo y ajuste continuo
:::

:::definition Quick Win
Victoria rapida: mejora de bajo esfuerzo y alto impacto visible que se logra en poco tiempo. Genera confianza y momentum para las iniciativas grandes.
:::

## La Cascada: de la Estrategia al Proyecto

La administración estratégica de TI no termina en el plan: baja en cascada hasta el trabajo diario. Cada nivel tiene su horizonte y su responsable.

| Nivel | Que es | Ejemplo (Logística Andina) | Horizonte |
|-------|--------|----------------------------|-----------|
| **Estrategia corporativa (PEI)** | Objetivo del negocio | "Entregas en menos de 24h" | 3-5 años |
| **PETI** | Plan de TI alineado | "Plataforma logística integrada con ruteo por IA" | 3-5 años |
| **Portafolio** | Conjunto de programas e iniciativas | Modernización de plataforma, datos y analítica, ciberseguridad | 1-3 años |
| **Programa** | Grupo de proyectos relacionados | Integración de la plataforma | 1-2 años |
| **Proyecto** | Esfuerzo temporal con alcance y presupuesto | Implementar el API de integración con e-commerce | meses |
| **Operación** | Servicio en producción | Servicio de rastreo en vivo (ITIL) | continuo |

:::callout idea Cascada en una linea
Estrategia del negocio -> PETI -> Portafolio -> Programa -> Proyecto -> Operación. Si un proyecto no se puede rastrear hasta la estrategia, probablemente no debería existir.
:::

:::flow Cascada estratégica
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de iniciativas
- Programa
- Proyecto
- Operación (servicio en producción)
:::

## Balanced Scorecard de TI

El **BSC de TI** adapta la metodología de Kaplan y Norton para medir TI en 4 perspectivas. No basta con medir costos: hay que medir el valor en cada perspectiva.

| Perspectiva | Pregunta clave | Objetivo (LogiAndina) | KPI y meta |
|-------------|----------------|-----------------------|------------|
| **Financiera** | ¿Como contribuye TI a la rentabilidad? | Reducir el costo de TI por entrega | -15% en 12 meses; ROI de proyectos > 20% |
| **Clientes** | ¿Como perciben los usuarios la calidad de TI? | Mejorar la atención al usuario interno | Satisfacción 85%; respuesta < 2h |
| **Procesos** | ¿Que tan eficientes son los procesos de TI? | Asegurar disponibilidad y automatizar | Disponibilidad 99.9%; < 4 incidentes críticos/mes |
| **Aprendizaje** | ¿Como se capacita y desarrolla el equipo? | Fortalecer competencias cloud y datos | 40h capacitación/empleado; 5 certificaciones |

:::callout success
Un BSC de TI bien implementado da a la gerencia un solo tablero con las 4 perspectivas, facilitando decisiones y demostrando el valor de TI (no solo el costo).
:::

## Ejemplo Integrador: el PETI de Logística Andina

Logística Andina quiere crecer 20% en entregas de e-commerce. Su PETI conecta estrategia, iniciativas y medición:

1. **Diagnostico:** ERP estable pero sistemas aislados y deuda técnica; sin API para clientes.
2. **Visión de TI:** plataforma logística integrada que entregue en menos de 24h.
3. **Objetivos SMART:** integrar 10 clientes de e-commerce al API en 6 meses; reducir el tiempo de despacho 15%.
4. **Iniciativas:** API de integración (proyecto), ruteo con IA (proyecto), tablero de KPIs (quick win).
5. **KPIs (BSC):** las 4 perspectivas de la tabla anterior.
6. **Cascada:** estrategia -> PETI -> portafolio de 3 programas -> programa de integración -> proyecto API -> servicio de rastreo en operación.

:::callout warning
Un PETI sin indicadores medibles es solo un documento bonito. Cada iniciativa debe tener KPIs con metas y un responsable.
:::

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz Autoevaluación - Nivel 1 (conceptos base)
1. ¿Que estudia la administración? || Solo las finanzas || Como las organizaciones alcanzan objetivos con eficiencia y eficacia || Solo el marketing || Solo el personal || 1 || Es la ciencia de alcanzar objetivos usando recursos.
2. ¿Que significa PODIO? || Plan, Organizar, Dirigir, Integrar, Operar || Planificar, Organizar, Dirigir, Integrar, Controlar || Producción, Organización, Dirección, Información, Control || Presupuesto, Organización, Desarrollo, Implementación, Control || 1 || PODIO = Planificar, Organizar, Dirigir, Integrar y Controlar.
3. ¿Cuantas etapas tiene la planificación estratégica segun el material? || 2 || 3 || 4 || 5 || 2 || Cuatro: básica, atención al tiempo, potenciación y aplicación.
4. ¿Que significan las siglas SMART? || Simple, Medible, Amplio, Real, Temporal || Específico, Medible, Alcanzable, Relevante, Temporal || Solo, Medible, Actual, Real || Sistema, Meta, Acción, Resultado, Tiempo || 1 || Specific, Measurable, Achievable, Relevant, Time-bound.
5. En el FODA, las amenazas son factores: || Internos || Externos || Ambos || Ninguno || 1 || Son externos: la empresa no los controla.
6. ¿Que analiza el PESTEL? || Solo lo interno || El entorno externo (6 dimensiones) || Solo las finanzas || Solo la competencia || 1 || Político, económico, social, tecnologico, ecologico y legal.
7. ¿Cuantas dimensiones analiza el PESTEL? || 3 || 4 || 5 || 6 || 3 || Político, económico, social, tecnologico, ecologico y legal.
8. ¿Cuantos pilares tiene la administración estratégica de TI? || 2 || 3 || 4 || 5 || 1 || Gobierno, gestión y arquitectura.
9. ¿Que es la deuda técnica? || Prestamos bancarios para TI || Decisiones de corto plazo que generan problemas a largo plazo || El costo de licencias || El presupuesto anual || 1 || Son atajos que ahorran hoy y cuestan más después.
10. ¿Cual es el objetivo del benchmarking en TI? || Copiar a la competencia || Comparar procesos con las mejores prácticas del sector || Reducir personal || Eliminar proveedores || 1 || Identifica brechas frente a líderes.
11. ¿Que es un portafolio de servicios de TI? || Una lista de computadoras || El conjunto de servicios que TI ofrece al negocio || Un directorio de empleados || Un manual de procedimientos || 1 || Documenta y gestiona los servicios de TI.
12. ¿Que framework es el estándar más usado de arquitectura empresarial? || ITIL || TOGAF || PMBOK || ISO 9001 || 1 || TOGAF, de The Open Group.
13. ¿Que es un PETI? || Un tipo de ERP || Un plan que alinea TI con la estrategia del negocio || Una auditoría técnica || Un contrato de servicio || 1 || El PETI traduce la estrategia del negocio en iniciativas de TI.
14. ¿Con que plan del negocio se alinea el PETI? || Con el PEI || Con el SLA || Con el WMS || Con el CRM || 0 || Se alinea con el Plan Estratégico Institucional (PEI).
15. ¿Cual es el horizonte típico del PETI? || 1 mes || 6 meses || 3 a 5 años || 20 años || 2 || De 3 a 5 años.
16. ¿Cuantas perspectivas tiene el BSC de TI? || 2 || 3 || 4 || 5 || 2 || Financiera, clientes, procesos y aprendizaje.
17. ¿Que es un Quick Win? || Un error comun || Una mejora de bajo esfuerzo y alto impacto || Un tipo de riesgo || Un estándar ITIL || 1 || Genera confianza y momentum para el plan.
18. ¿Cual es el último eslabon de la cascada estratégica? || El proyecto || El portafolio || La operación || El programa || 2 || Termina en la operación (servicio en producción).
:::

### Nivel 2 - Comprensión

:::quiz Autoevaluación - Nivel 2 (comprensión)
1. ¿Cual es la diferencia entre estrategia y táctica? || Son iguales || La estrategia define que hacer (correcto); la táctica, como hacerlo (correctamente) || La táctica es de largo plazo || La estrategia es operativa || 1 || Estrategia = que; táctica = como.
2. ¿Que función administrativa define objetivos y estrategias? || Controlar || Planificar || Organizar || Dirigir || 1 || Planificar es la primera función.
3. La estrategia responde a: || Hacer las cosas correctamente || Hacer las cosas correctas || Controlar || Organizar || 1 || La estrategia define que es lo correcto.
4. ¿Cual es una estrategia competitiva generica de Thompson? || Liderazgo en costos || Duplicar precios || Reducir personal || Eliminar la competencia || 0 || Liderazgo en costos totales más bajos.
5. ¿Que tipo de planificación hace la alta dirección a largo plazo? || Operativa || Táctica || Estratégica || Diaria || 2 || La estratégica es de largo plazo y alta dirección.
6. ¿Por que el PESTEL complementa al FODA? || Porque son iguales || Porque el PESTEL analiza el macro-entorno externo que alimenta el análisis FODA || Porque reemplaza al FODA || Porque es financiero || 1 || PESTEL da el contexto externo.
7. ¿Que diferencia hay entre FODA y PESTEL? || Son iguales || PESTEL mira el macro-entorno externo; FODA combina lo interno y externo || El FODA es solo financiero || El PESTEL es solo interno || 1 || PESTEL = entorno externo; FODA = interno + externo.
8. Un objetivo "mejorar la calidad del servicio" NO es SMART porque: || Es muy caro || No es medible ni temporal || Es de TI || Lo dijo el gerente || 1 || Le faltan medición y plazo.
9. Un objetivo "mejorar la TI" es incorrecto porque: || Es muy caro || No es medible ni tiene plazo (no es SMART) || Lo dijo el proveedor || No es de TI || 1 || No es específico, medible ni temporal.
10. La deuda técnica es una: || Oportunidad externa || Debilidad interna || Amenaza externa || Fortaleza interna || 1 || La empresa la controla: es interna.
11. Un ataque de ransomware es: || Una fortaleza || Una debilidad || Una amenaza externa || Una oportunidad || 2 || Viene del entorno y no lo controla la empresa.
12. La alineación estratégica busca: || Reducir personal || Sincronizar TI con los objetivos del negocio || Comprar hardware || Eliminar el gobierno || 1 || TI alineada con el negocio.
13. ¿Para que sirve el portafolio de servicios de TI? || Para listar empleados || Para priorizar inversiones y gestionar expectativas || Para comprar software || Para auditar cuentas || 1 || Ordena la demanda y prioriza.
14. La gestión del cambio es importante porque: || La tecnología sola no basta: las personas deben adoptar el cambio || Reduce costos automaticamente || Elimina riesgos || Reemplaza al PETI || 0 || Sin adopción, la mejor tecnología falla.
15. ¿Que herramienta sirve para diseñar la arquitectura empresarial? || ITIL || TOGAF || PMBOK || PESTEL || 1 || TOGAF.
16. La cascada estratégica termina en: || El proyecto || La operación (servicio en producción) || El portafolio || El PETI || 1 || Termina en la operación del servicio.
17. ¿Por que el PETI no es una lista de compras? || Porque no incluye TI || Porque responde como la TI ayuda al negocio, no que comprar || Porque no tiene presupuesto || Porque lo hace el proveedor || 1 || El PETI parte de la estrategia del negocio.
18. ¿Que orden sigue la cascada estratégica? || Proyecto -> estrategia -> PETI || Estrategia -> PETI -> portafolio -> programa -> proyecto -> operación || Operación -> proyecto -> PETI || Portafolio -> estrategia -> proyecto || 1 || La estrategia baja en cascada hasta la operación.
19. ¿Que mide la perspectiva de Procesos del BSC de TI? || La rentabilidad || La eficiencia de los procesos de TI || Las horas de capacitación || La marca || 1 || Mide disponibilidad, incidentes y automatización.
20. ¿Que relación hay entre portafolio y proyecto? || Son sinonimos || El portafolio agrupa programas e iniciativas que contienen proyectos || El proyecto contiene al portafolio || No se relacionan || 1 || El portafolio agrupa; los proyectos ejecutan.
21. ¿Para que sirve un Quick Win en el PETI? || Para gastar presupuesto || Para generar confianza y momentum con exitos tempranos || Para retrasar el plan || Para eliminar KPIs || 1 || Demuestra valor rapido y sostiene el apoyo.
22. Si un proyecto no se rastrea hasta la estrategia, ¿que implica? || Que es obligatorio || Que probablemente no debería existir || Que es un quick win || Que es un KPI || 1 || Todo proyecto debe aportar a la estrategia.
23. ¿Que perspectiva del BSC mide la capacitación del equipo? || Financiera || Clientes || Procesos || Aprendizaje || 3 || El aprendizaje y desarrollo del equipo.
:::

### Nivel 3 - Escenarios

:::quiz Autoevaluación - Nivel 3 (escenarios)
1. Logística Andina tiene sistemas aislados y sin API. En el FODA de TI, esto es: || Fortaleza || Debilidad || Oportunidad || Amenaza || 1 || Es interna y limita: debilidad.
2. La aparición de IA para ruteo es, para Logística Andina: || Fortaleza || Debilidad || Oportunidad || Amenaza || 2 || Viene del entorno y se puede aprovechar: oportunidad.
3. Una nueva ley de protección de datos es: || Fortaleza || Debilidad || Oportunidad || Amenaza (o factor legal del PESTEL) || 3 || Es un factor externo legal que puede afectar.
4. La empresa quiere comparar su disponibilidad con el líder del sector. ¿Que usa? || Deuda técnica || Benchmarking || Quick Win || CRM || 1 || Compararse con las mejores prácticas es benchmarking.
5. El equipo pospone actualizar un sistema para "salir rapido". ¿Que acumula? || Deuda técnica || Oportunidad || Fortaleza || KPI || 0 || Ese atajo genera deuda técnica.
6. Los usuarios rechazan el nuevo sistema. ¿Que se descuido? || La gestión del cambio || La arquitectura || El PESTEL || El presupuesto || 0 || Falto sensibilizar, formar e involucrar.
7. El directorio define como TI soporta el negocio a 3 años. ¿Que pilar ejerce? || Gestión || Gobierno || Arquitectura || Operación || 1 || Definir dirección y supervisar es gobierno.
8. Logística Andina analiza el auge del e-commerce. En el FODA es: || Fortaleza || Debilidad || Oportunidad || Amenaza || 2 || Viene del entorno y se puede aprovechar.
9. Una nueva ley de protección de datos es, en el PESTEL: || Factor político || Factor legal || Factor social || Factor tecnologico || 1 || Es la dimensión Legal.
10. La empresa define "aumentar ventas 15% en 6 meses". ¿Que aplico? || Un objetivo SMART || Una amenaza || Una debilidad || Un plan operativo || 0 || Específico, medible, alcanzable, relevante y temporal.
11. El gerente define horarios y tareas del día. ¿Que planificación aplica? || Estratégica || Táctica || Operativa || Visión || 2 || Es planificación operativa.
12. La empresa decide operar con los costos más bajos del sector. ¿Que estrategia usa? || Diferenciación || Liderazgo en costos || Enfoque || Híbrida || 1 || Liderazgo en costos totales más bajos.
13. Se define la razón de ser y hacia donde va la empresa. ¿Que etapa es? || Básica || Atención al tiempo || Potenciación || Aplicación || 0 || La etapa básica define misión y visión.
14. Un objetivo que no se puede medir ni tiene plazo es: || SMART || No SMART || Una fortaleza || Un KPI || 1 || Le faltan M y T.
15. La empresa capacita al equipo en nuevas herramientas. ¿Estrategia o táctica? || Estrategia || Táctica || Visión || Misión || 1 || Es una acción de corto plazo: táctica.
16. Logística Andina quiere crecer 20% en e-commerce. ¿Que debe hacer primero el PETI? || Comprar servidores || Alinear la visión de TI con la estrategia del negocio || Contratar más personal || Implementar un ERP || 1 || La alineación con el PEI es el punto de partida.
17. La dirección pide reducir costos de TI 20% y los usuarios piden más funciones. ¿Que hace el PETI? || Ignorar a los usuarios || Balancear ambos objetivos con priorización clara || Reducir personal || Comprar más licencias || 1 || El PETI prioriza y balancea eficiencia e innovación.
18. El equipo quiere migrar todo a la nube de una vez. ¿Que recomienda el PETI? || Migración incremental con pilotos || Migración total inmediata || No migrar nunca || Comprar servidores || 0 || Se recomienda migración incremental para reducir riesgo.
19. Se logra una mejora rapida de bajo esfuerzo y alto impacto. ¿Que es? || Un KPI || Un Quick Win || Un riesgo || Una deuda técnica || 1 || Es un Quick Win.
20. Un KPI de disponibilidad del 99.9% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 2 || La disponibilidad es un proceso de TI.
21. El proyecto de API de integración aporta directamente a: || Un objetivo del PETI (integración con e-commerce) || Un objetivo personal || Nada || Al presupuesto || 0 || Cada proyecto debe rastrearse a un objetivo del PETI.
22. La satisfacción del usuario interno al 85% pertenece a la perspectiva: || Clientes || Procesos || Aprendizaje || Financiera || 0 || Los usuarios son "clientes" internos de TI.
23. El ROI de los proyectos de TI mayor a 20% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 0 || El ROI es una medida financiera.
:::

### Práctica guiada

:::sort Ordena la cascada de la estrategia a la ejecución
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de programas e iniciativas
- Programa de proyectos relacionados
- Proyecto con alcance y presupuesto
- Operación (servicio en producción)
:::

:::sort Ordena las 4 etapas de la planificación estratégica
- Etapa Básica: misión y visión
- Etapa de Atención al Tiempo: análisis del entorno (FODA, PESTEL)
- Etapa de Potenciación: factores críticos internos
- Etapa de Aplicación: políticas, programas y controles
:::

:::match Relaciona los conceptos estratégicos
- FODA | Análisis de fortalezas, debilidades, oportunidades y amenazas
- PESTEL | Análisis del entorno externo en 6 dimensiones
- PODIO | Planificar, organizar, dirigir, integrar y controlar
- SMART | Criterio para objetivos específicos, medibles, alcanzables, relevantes y temporales
- Cadena de Valor | Actividades que agregan valor al producto o servicio
- Misión | Razón de ser de la organización
- Deuda técnica | Atajos de corto plazo que cuestan a largo plazo
- Benchmarking | Compararse con las mejores prácticas del sector
- Portafolio de servicios | Conjunto de servicios que TI ofrece al negocio
- TOGAF | Framework de arquitectura empresarial
- Cascada | Estrategia -> PETI -> portafolio -> proyecto -> operación
- PETI | Plan que alinea TI con la estrategia del negocio
- PEI | Plan Estratégico Institucional del negocio
- BSC de TI | Tablero con 4 perspectivas de indicadores
- Quick Win | Mejora de bajo esfuerzo y alto impacto
- KPI | Indicador clave de desempeno con meta
:::

:::truefalse Administración Estratégica de TI y PETI
1. La estrategia se define después de la misión y visión. || Verdadero || La misión y visión son la base.
2. La táctica responde a "hacer las cosas correctas". || Falso || La táctica es "hacer las cosas correctamente"; la estrategia es "las correctas".
3. PODIO significa Planificar, Organizar, Dirigir, Integrar y Controlar. || Verdadero || Es la función administrativa.
4. Las amenazas del FODA son internas. || Falso || Son externas.
5. El PESTEL analiza el entorno externo. || Verdadero || Seis dimensiones del macro-entorno.
6. La planificación operativa es de largo plazo. || Falso || Es de corto plazo (día a día).
7. La deuda técnica es una amenaza externa. || Falso || Es una debilidad interna: la empresa la controla.
8. El PESTEL analiza solo factores internos. || Falso || Analiza el entorno externo (6 dimensiones).
9. TOGAF es el framework más usado de arquitectura empresarial. || Verdadero || Lo publica The Open Group.
10. La gestión del cambio es opcional si la tecnología es buena. || Falso || Sin adopción de las personas, la tecnología falla.
11. Un ataque de ransomware es una amenaza externa. || Verdadero || Viene del entorno y no se controla directamente.
12. El PETI es una lista de compras de hardware. || Falso || Es un plan que alinea TI con la estrategia del negocio.
13. El PETI se alinea con el PEI de la organización. || Verdadero || El PEI es su punto de partida.
14. El BSC de TI tiene 4 perspectivas. || Verdadero || Financiera, clientes, procesos y aprendizaje.
15. Un Quick Win es un proyecto de largo plazo. || Falso || Es una mejora rapida de bajo esfuerzo y alto impacto.
16. Todo proyecto debe rastrearse hasta un objetivo del PETI. || Verdadero || Si no aporta a la estrategia, no debería existir.
17. Un PETI sin KPIs medibles es solo un documento. || Verdadero || Cada iniciativa necesita indicadores con metas.
:::

:::essay Administración Estratégica de TI y PETI
1. Explique como se aplican el FODA y el PESTEL a la estrategia de TI. De un ejemplo de cada cuadrante del FODA y una dimensión del PESTEL para una empresa de logística. || Pista: FODA = interno (F/D) + externo (O/A); PESTEL = entorno externo en 6 dimensiones. || Respuesta modelo: El FODA aplicado a TI evalúa factores internos y externos: Fortalezas (ERP estable, equipo capacitado), Debilidades (deuda técnica, sistemas aislados), Oportunidades (cloud, IA para ruteo) y Amenazas (ransomware, dependencia de un proveedor). El PESTEL complementa analizando el entorno externo: Político (incentivos al e-commerce), Económico (costo del cloud y combustible), Social (auge de compras online), Tecnologico (IA, IoT, 5G), Ecologico (regulación de emisiones) y Legal (protección de datos). Ambos alimentan la estrategia de TI: el PESTEL da el contexto y el FODA define como aprovechar o defenderse. || [rúbrica: Diferencia FODA y PESTEL, Da ejemplo por cuadrante, Da una dimensión PESTEL, Redacción y claridad]
2. Explique que es PODIO y por que la planificación es la primera función administrativa. Relacione PODIO con la evaluación del desempeno de un gerente. || Pista: Planificar, organizar, dirigir, integrar y controlar; sin plan no hay rumbo. || Respuesta modelo: PODIO es la función administrativa: Planificar (definir objetivos y estrategias), Organizar (estructurar recursos), Dirigir (liderar y motivar), Integrar (coordinar las partes) y Controlar (verificar y corregir). La planificación es la primera porque sin un plan no hay rumbo claro ni criterios para organizar, dirigir y controlar. PODIO es la base para evaluar a un gerente: la auditoría CRMR revisa si cumple bien estas cinco funciones, de modo que el desempeno se mide por como planifica, organiza, dirige, integra y controla. || [rúbrica: Define PODIO, Justifica la prioridad de planificar, Relaciona con la evaluación del gerente, Redacción y claridad]
3. Explique los 3 pilares de la administración estratégica de TI y como la estrategia baja en cascada hasta la operación. || Pista: Gobierno, gestión y arquitectura; cascada PETI -> portafolio -> proyecto -> operación. || Respuesta modelo: Los 3 pilares son Gobierno de TI (define la dirección, asigna recursos y supervisa), Gestión de TI (ejecuta los procesos y entrega servicios) y Arquitectura de TI (define la estructura tecnologica que soporta el negocio actual y futuro). La estrategia baja en cascada: la estrategia corporativa (PEI) se traduce en el PETI, que se organiza en un portafolio de iniciativas, luego en programas y proyectos, y finalmente en servicios en operación. Asi cada proyecto se rastrea hasta la estrategia y la organización cierra la brecha entre el plan y el día a día. || [rúbrica: Nombra los 3 pilares, Explica la cascada, Conecta estrategia y operación, Redacción y claridad]
4. Explique que es un PETI, como se alinea con el PEI y describa la cascada estratégica hasta la operación. Use el ejemplo de Logística Andina. || Pista: PEI -> PETI -> portafolio -> programa -> proyecto -> operación. || Respuesta modelo: El PETI es el plan que traduce la estrategia del negocio (PEI) en iniciativas de TI medibles para un horizonte de 3 a 5 años. En Logística Andina, el PEI busca crecer 20% en e-commerce; el PETI responde con una plataforma logística integrada y ruteo por IA. La cascada baja asi: estrategia corporativa (entregas en menos de 24h) -> PETI (plataforma integrada) -> portafolio (modernización, datos, ciberseguridad) -> programa de integración -> proyecto del API con alcance y presupuesto -> operación del servicio de rastreo. Cada nivel tiene horizonte y responsable, y todo proyecto debe rastrearse hasta la estrategia. || [rúbrica: Define PETI y PEI, Explica la cascada, Usa el ejemplo de Logística Andina, Redacción y claridad]
5. Explique que es el BSC de TI, sus 4 perspectivas y de un KPI con meta para cada una usando un ejemplo. || Pista: Financiera, clientes, procesos y aprendizaje; cada KPI con meta. || Respuesta modelo: El BSC de TI adapta el Balanced Scorecard de Kaplan y Norton para medir TI en 4 perspectivas. Financiera: contribución a la rentabilidad (ej. ROI de proyectos > 20%). Clientes: percepción de los usuarios internos (ej. satisfacción 85%). Procesos: eficiencia de los procesos de TI (ej. disponibilidad 99.9%). Aprendizaje: desarrollo del equipo (ej. 40h de capacitación por empleado). Asi la gerencia mide el valor de TI en un solo tablero y no solo su costo. || [rúbrica: Define el BSC de TI, Nombra las 4 perspectivas, Da KPI con meta por perspectiva, Redacción y claridad]
:::

:::path Decisión estratégica en Logística Andina
1 | Situación | Logística Andina crece 30% anual y los sistemas no escalan. ¿Que haces? | Analizar con FODA/PESTEL y alinear con el PETI=2; Comprar más servidores sin análisis=3
2 | Alineado | El análisis muestra deuda técnica y oportunidad en cloud e IA. ¿Que sigue? | Definir objetivos SMART y una hoja de ruta por fases con quick wins=4; Migrar todo de una vez=5
3 | Reactivo | Comprar servidores sin análisis resuelve lo inmediato pero genera costos fijos y subutilización. | * | Primero analiza el contexto y alinea con la estrategia.
4 | Estratégico | Defines la visión de TI alineada al PEI, priorizas por impacto y avanzas con pilotos. La estrategia baja en cascada a proyectos medibles. | * | Correcto: análisis, alineación y ejecución por fases.
5 | Riesgo alto | Migrar todo de una vez es costoso, interrumpe la operación y genera resistencia al cambio. | * | Mejor migración incremental con pilotos controlados.
:::

:::path Planificación en Logística Andina
1 | Inicio | Logística Andina quiere crecer pero no tiene rumbo claro. ¿Que haces primero? | Definir misión y visión, y analizar el entorno (FODA/PESTEL)=2; Comprar software de inmediato=3
2 | Correcto | Con la misión, visión y el análisis del entorno defines estrategias y objetivos SMART. ¿Que sigue? | Traducir la estrategia en planes tacticos y operativos=4; Ejecutar sin medir=5
3 | Reactivo | Comprar software sin estrategia es partir de la solución, no de la necesidad. | * | La tecnología sirve al negocio, no al revés.
4 | Alineado | Defines políticas, programas, presupuestos y controles (etapa de aplicación) y mides con KPIs. | * | Correcto: la estrategia baja a la ejecución con control.
5 | Sin control | Ejecutar sin medir impide detectar desviaciones y corregir: falta la función Controlar. | * | Sin control no se sabe si se cumple el plan.
:::

:::path Desarrollo del PETI
1 | Inicio | Logística Andina necesita su PETI. ¿Por donde empiezas? | Diagnosticar el estado actual de TI y entrevistar a la dirección=2; Comprar tecnología emergente=3
2 | Diagnostico | El diagnostico revela ERP estable pero sistemas aislados y sin API. ¿Que sigue? | Definir visión y objetivos alineados al PEI y priorizar por impacto=4; Migrar todo a la nube de una vez=5
3 | Tecnología primero | Investigar IA y cloud es útil, pero debe partir de las necesidades del negocio, no de la moda. | * | La tecnología sirve al negocio, no al revés.
4 | Alineación | Defines visión, objetivos SMART y KPIs (BSC), priorizas quick wins y armas la cascada PETI -> portafolio -> proyecto. | * | Correcto: estrategia alineada y medible.
5 | Migración total | Migrar todo de una vez es riesgoso: alto costo, interrupciones y resistencia al cambio. Mejor incremental. | * | Riesgo alto: usa pilotos y avanza por fases.
:::

:::arch gobierno-ti
