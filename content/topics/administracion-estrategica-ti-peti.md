---
title: Administracion Estrategica de TI y Planificacion Estrategica (PETI)
emoji: "🚀"
accent: "#7C61D4"
category: admin-estrategica
difficulty: intermedio
order: 10
description: Guia completa de administracion estrategica de TI. Parte de la administracion general (PODIO, estrategia vs tactica, tipos de planificacion, modelo de negocio, cadena de valor), desarrolla el analisis estrategico (FODA y PESTEL aplicados a TI, objetivos SMART, benchmarking, deuda tecnica), los 3 pilares, la alineacion estrategica, la arquitectura empresarial (TOGAF) y la gestion del cambio, y culmina con el PETI (estructura, metodologia, cascada estrategica y Balanced Scorecard de TI). Con el ejemplo integrador de Logistica Andina.
tags: [estrategia-TI, admin-general, PODIO, FODA, PESTEL, SMART, arquitectura-empresarial, TOGAF, PETI, balanced-scorecard, KPIs, cascada]
keyTakeaway: La administracion estrategica de TI convierte la tecnologia en ventaja competitiva. La administracion (PODIO) y la planificacion (estrategia, tactica, operativa) dan el marco; FODA y PESTEL el diagnostico; SMART los objetivos; y el PETI con su cascada y su BSC de TI traduce la estrategia del negocio (PEI) en iniciativas medibles que llegan hasta la operacion.
sources:
  - "TOGAF - The Open Group Architecture Framework|https://www.opengroup.org/togaf|The Open Group|Estandar de arquitectura empresarial"
  - "COBIT 2019 (APO02 Estrategia y APO05 Cartera)|https://www.isaca.org/resources/cobit|ISACA|Gobierno, gestion y alineacion de TI con el negocio"
  - "The Balanced Scorecard - Kaplan y Norton|https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2|Harvard Business Review|Origen del BSC"
  - "Administracion Estrategica (Thompson y Strickland)|https://www.mheducation.com|McGraw-Hill|Texto base de estrategia y ventaja competitiva"
  - "Valor de Negocio en la Administracion de TI (U21)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "Plan Estrategico de TI PETI (U23)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "Resumenes y notas de clase de Administracion de Recursos|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es la Administracion?

:::definition Administracion
Ciencia social que estudia como las organizaciones y sus integrantes trabajan en conjunto para alcanzar objetivos de manera eficiente y eficaz. Es el proceso de planificar, organizar, dirigir, integrar y controlar los recursos (humanos, economicos, materiales y tecnologicos) para alcanzar metas.
:::

:::callout info
La administracion no es exclusiva de las empresas: tambien se aplica en hogares, gobiernos y hospitales, en cualquier organizacion que use recursos para alcanzar objetivos.
:::

## La Funcion Administrativa: PODIO

1. **P**lanificar
2. **O**rganizar
3. **D**irigir
4. **I**ntegrar
5. **C**ontrolar

| Funcion | Que hace |
|---------|----------|
| **Planificar** | Define objetivos y traza las estrategias y acciones para alcanzarlos |
| **Organizar** | Estructura los recursos (personas, areas, presupuesto): quien hace que, cuando y como |
| **Dirigir** | Lidera, motiva e influye para ejecutar con compromiso; incluye decision y comunicacion |
| **Integrar** | Conecta las partes para que trabajen coordinadas hacia los objetivos colectivos |
| **Controlar** | Verifica que se cumpla el plan, detecta desviaciones y aplica correctivos |

:::callout warning
PODIO es la base para evaluar el desempeno de un gerente. La auditoria CRMR (Revision de los Recursos Informaticos de la Direccion) evalua si el gerente cumple bien estas cinco funciones.
:::

## Estrategia vs Tactica

| Concepto | Horizonte | Pregunta | Ejemplo |
|----------|-----------|----------|---------|
| **Vision** | Largo plazo (5-10 anos) | ¿Quienes queremos ser? | Ser lider regional en soluciones de TI |
| **Mision** | Permanente | ¿Para que existimos? | Proveer tecnologia que transforme negocios |
| **Estrategia** | Mediano plazo (2-5 anos) | ¿Como llegamos alla? | Expandir a 3 paises con alianzas locales |
| **Objetivos** | Corto-mediano plazo | ¿Que queremos lograr? | Aumentar ingresos 20% este ano |
| **Tactica** | Corto plazo (meses) | ¿Que hacemos hoy? | Capacitar al equipo en nuevas herramientas |
| **Planes operativos** | Dia a dia | ¿Quien lo hace? | Horarios, tareas, presupuestos asignados |

:::callout idea
La estrategia responde a "hacer las cosas correctas"; la tactica, a "hacer las cosas correctamente". Ambas son necesarias.
:::

## Los 3 Pilares de la Administracion Estrategica de TI

:::definition Administracion Estrategica de TI
Proceso continuo de planificacion, implementacion y monitoreo de la tecnologia de informacion alineada con los objetivos estrategicos de la organizacion. Busca maximizar el valor que la TI genera para el negocio.
:::

:::flow Tres Pilares
- Gobierno de TI: que debemos gobernar (direccion y supervision)
- Gestion de TI: como lo hacemos (procesos y servicios)
- Arquitectura de TI: con que lo construimos (estructura tecnologica)
:::

- **Gobierno de TI** — Define la direccion estrategica, asigna recursos y supervisa el desempeno.
- **Gestion de TI** — Ejecuta los procesos para entregar servicios de calidad.
- **Arquitectura de TI** — Define la estructura tecnologica que soporta el negocio actual y futuro.

:::callout info
No es comprar la ultima tecnologia. Es decidir **QUE** tecnologias implementar, **COMO** implementarlas y **PARA QUE** proposito, todo alineado con la estrategia del negocio.
:::

## Niveles de Planificacion: Estrategica, Tactica y Operativa

| Tipo | Horizonte | Quien planifica | Ejemplo |
|------|-----------|-----------------|---------|
| **Estrategica** | Largo plazo (3-10 anos) | Alta direccion | Expansion a nuevos mercados |
| **Tactica** | Mediano plazo (1-3 anos) | Mandos medios | Implementar un ERP |
| **Operativa** | Corto plazo (dia a dia) | Primer nivel | Horarios de produccion |

:::callout warning
La planificacion operativa depende de la tactica, que depende de la estrategica. Si la estrategia es debil, todos los planes inferiores fallan.
:::

## Las 4 Etapas de la Planificacion Estrategica

1. **Etapa Basica:** definir la razon de ser (mision) y hacia donde vamos (vision)
2. **Etapa de Atencion al Tiempo:** analizar el entorno (FODA, PESTEL) y elegir estrategias
3. **Etapa de Potenciacion:** analizar factores criticos internos (personal, organizacion, gerente)
4. **Etapa de Aplicacion:** definir politicas, programas, presupuestos y controles

:::callout warning
Las etapas no se saltan. Comenzar sin mision clara o sin analisis del entorno genera planes debiles que fallan en la ejecucion.
:::

## Modelo de Negocio y Estrategia

| Concepto | Que es | Ejemplo |
|----------|--------|---------|
| **Modelo de Negocio** | Como la empresa genera ingresos y es sostenible | Vender productos o suscripcion |
| **Estrategia del Negocio** | Que ventaja competitiva busca | Liderazgo en costo, diferenciacion, enfoque |
| **Estrategia Corporativa** | Como se estructuran las unidades | Diversificacion, integracion vertical |
| **Objetivos Estrategicos** | Metas concretas y medibles | Captar 100 clientes nuevos en 6 meses |

### Las 5 Estrategias Competitivas Genericas (Thompson)

1. **Lider en costos totales mas bajos** — Operar con costos menores que los competidores
2. **Diferenciacion** — Ofrecer algo unico que otros no tienen
3. **Concentracion en un segmento (enfoque)** — Enfocarse en un nicho especifico
4. **Mejor costo** — Mejor relacion calidad-precio
5. **Estrategia hibrida** — Combinar elementos de las anteriores

:::callout idea
Thompson afirma que las 5 estrategias genericas son las que generan exito sostenido; las organizaciones las combinan con sus ventajas y debilidades internas.
:::

## La Cadena de Valor

:::definition Cadena de Valor
Modelo que identifica las actividades principales y de apoyo que agregan valor al producto o servicio desde la concepcion hasta la entrega al cliente.
:::

- **Actividades principales:** logistica de entrada, operaciones, logistica de salida, marketing y ventas, servicio postventa.
- **Actividades de apoyo:** infraestructura, gestion de RRHH, desarrollo tecnologico, adquisiciones.

:::definition Formula del Exito
Que las personas perciban mas valor en el producto/servicio que lo que les cuesta, mas las ventajas sobre la competencia. Utilidades = Ingresos - Costos.
:::

## Alineacion Estrategica

| Nivel | Pregunta | Herramienta |
|-------|----------|-------------|
| Estrategico | ¿Para que usamos TI? | PEI, PETI, BSC |
| Tactico | ¿Como implementamos? | Portafolio de proyectos |
| Operativo | ¿Que hacemos dia a dia? | Procesos y SLAs |

:::callout warning
La brecha entre estrategia y operacion es donde fracasan las iniciativas de TI. Un PETI bien estructurado cierra esa brecha (ver la seccion del PETI mas abajo para el detalle de la cascada).
:::

## Analisis FODA

:::definition FODA
Herramienta de analisis estrategico que evalua factores internos (Fortalezas y Debilidades) y externos (Oportunidades y Amenazas). Tambien se llama DAFO.
:::

El FODA evalua factores **internos** (Fortalezas y Debilidades) y **externos** (Oportunidades y Amenazas). La tabla siguiente muestra que evalua cada cuadrante y lo aplica a la funcion de TI de Logistica Andina:

| Factor | Interno/Externo | Que evalua | Ejemplo general (Logistica Andina) | Ejemplo en TI (Logistica Andina) |
|--------|-----------------|------------|------------------------------------|----------------------------------|
| **Fortalezas (F)** | Interno | Que hace bien la organizacion? | Red de bodegas propia, equipo capacitado | ERP estable, backups probados, equipo con experiencia |
| **Debilidades (D)** | Interno | Donde le falta capacidad? | Deuda tecnica, presupuesto de TI limitado | Deuda tecnica, sistemas aislados, sin API de integracion |
| **Oportunidades (O)** | Externo | Que oportunidades aprovechar? | Auge del e-commerce, cloud, IA | Cloud, IA para ruteo, integracion con e-commerce |
| **Amenazas (A)** | Externo | Que la puede perjudicar? | Competencia con mejores apps, regulacion | Ransomware, dependencia de un solo proveedor, obsolescencia |

:::callout danger
El error mas comun es confundir debilidades con amenazas o fortalezas con oportunidades. Fortalezas y debilidades son **internas** (la empresa las controla); oportunidades y amenazas son **externas** (no las controla). El clasico: confundir una debilidad interna (deuda tecnica) con una amenaza externa (ransomware).
:::

## Analisis PESTEL

:::definition PESTEL
Herramienta que analiza el **entorno externo** de la organizacion en seis dimensiones: Politica, Economica, Social, Tecnologica, Ecologica y Legal. Complementa al FODA aportando el contexto macro donde compite la empresa.
:::

| Dimension | Que analiza | Ejemplo en TI (Logistica Andina) |
|-----------|-------------|----------------------------------|
| **Politico** | Politicas y gobierno | Incentivos al comercio electronico y a mipymes |
| **Economico** | Costos, inflacion, tipo de cambio | Costo del combustible y de los servicios cloud |
| **Social** | Tendencias de la sociedad | Crecimiento de compras online y entregas a domicilio |
| **Tecnologico** | Avances tecnologicos | IA, IoT para flotas, 5G |
| **Ecologico** | Medio ambiente | Regulacion de emisiones; presion por flota electrica |
| **Legal** | Leyes y regulaciones | Proteccion de datos personales, normativa laboral |

:::callout idea FODA + PESTEL
El **PESTEL** mira afuera (macro-entorno) y el **FODA** combina adentro y afuera para decidir. Juntos son la base del analisis estrategico: el PESTEL da el escenario y el FODA define como aprovechar o defenderse.
:::

## Objetivos SMART

| Letra | Significado | Pregunta | Ejemplo |
|-------|-------------|----------|---------|
| **S** | Specific (Especifico) | ¿Que exactamente se quiere lograr? | Aumentar la base de clientes |
| **M** | Measurable (Medible) | ¿Como se mide el progreso? | En un 15% |
| **A** | Achievable (Alcanzable) | ¿Es realista con los recursos? | Si, con inversion en marketing |
| **R** | Relevant (Relevante) | ¿Por que es importante? | Porque incrementa ingresos |
| **T** | Time-bound (Temporal) | ¿Para cuando? | En los proximos 6 meses |

:::callout info
**NO SMART:** "Mejorar las ventas" o "Mejorar la TI" (no son especificos, medibles ni temporales). **SMART:** "Aumentar las ventas en 15% en el proximo trimestre con campanas de marketing digital", o en TI: "Reducir el tiempo de despacho en 15% en 6 meses automatizando el ruteo".
:::

## Conceptos Clave de la Gestion Estrategica

:::definition Deuda Tecnica
Atajos o decisiones de corto plazo en tecnologia (codigo improvisado, infraestructura sin actualizar, documentacion omitida) que ahorran tiempo hoy pero generan costos y problemas mayores manana. Como una deuda financiera, acumula "intereses".
:::

:::definition Benchmarking
Practica de comparar los procesos, servicios y metricas propias con las mejores practicas del sector para identificar brechas y fijar metas realistas de mejora.
:::

:::definition Portafolio de Servicios de TI
Conjunto completo de servicios que el area de TI ofrece al negocio. Documenta cada servicio, su publico y su valor, permitiendo priorizar inversiones y gestionar expectativas.
:::

## Arquitectura Empresarial

La arquitectura empresarial integra cuatro dominios:

1. **Estrategia del negocio** — Mision, vision y objetivos
2. **Arquitectura de datos** — Informacion y flujos
3. **Arquitectura de aplicaciones** — Sistemas e integraciones
4. **Arquitectura tecnologica** — Infraestructura y plataformas

:::callout success
El framework **TOGAF** (The Open Group Architecture Framework) es el estandar mas utilizado para disenar arquitectura empresarial.
:::

## Gestion del Cambio

La gestion del cambio es critica para el exito de las iniciativas de TI:

- **Sensibilizacion** — Comunicar el por que del cambio
- **Participacion** — Involucrar a los usuarios desde el inicio
- **Formacion** — Capacitar en nuevas herramientas y procesos
- **Refuerzo** — Celebrar exitos y mantener el momentum

## Que es un PETI?

:::definition Plan Estrategico de TI (PETI)
Documento que define la direccion estrategica de la tecnologia de informacion en una organizacion. Establece la vision de TI, los objetivos estrategicos, las iniciativas clave, los recursos necesarios y los indicadores de desempeno para un horizonte de 3 a 5 anos.
:::

:::callout info
El PETI **no** es una lista de compras de hardware. Responde: "¿Como la TI ayuda al negocio a alcanzar sus objetivos?" Traduce el **PEI** (Plan Estrategico Institucional, del negocio) en iniciativas de TI medibles.
:::

## Estructura del PETI

| Componente | Que define | Ejemplo (Logistica Andina) |
|------------|-----------|----------------------------|
| **Vision de TI** | Como se ve TI a futuro | "Ser la plataforma digital que entrega en menos de 24h" |
| **Alineacion con el PEI** | Como soporta la estrategia del negocio | PEI: crecer 20% en e-commerce -> PETI: plataforma logistica integrada |
| **Objetivos SMART** | Metas especificas y medibles | "Integrar 10 clientes de e-commerce al API en 6 meses" |
| **Iniciativas** | Proyectos y programas | Ruteo con IA, portal de clientes, ciberseguridad |
| **Recursos** | Presupuesto, personal, proveedores | 12% del presupuesto corporativo |
| **Indicadores (KPIs)** | Metricas de avance e impacto | Disponibilidad 99.9%, satisfaccion 85% |

## Metodologia de Desarrollo del PETI

:::flow Desarrollo del PETI
- Fase 1: Diagnostico actual (estado de TI)
- Fase 2: Definicion de vision y mision de TI
- Fase 3: Identificacion de brechas
- Fase 4: Definicion de objetivos e iniciativas
- Fase 5: Asignacion de recursos
- Fase 6: Definicion de KPIs
- Fase 7: Aprobacion e implementacion
- Fase 8: Monitoreo y ajuste continuo
:::

:::definition Quick Win
Victoria rapida: mejora de bajo esfuerzo y alto impacto visible que se logra en poco tiempo. Genera confianza y momentum para las iniciativas grandes.
:::

## La Cascada: de la Estrategia al Proyecto

La administracion estrategica de TI no termina en el plan: baja en cascada hasta el trabajo diario. Cada nivel tiene su horizonte y su responsable.

| Nivel | Que es | Ejemplo (Logistica Andina) | Horizonte |
|-------|--------|----------------------------|-----------|
| **Estrategia corporativa (PEI)** | Objetivo del negocio | "Entregas en menos de 24h" | 3-5 anos |
| **PETI** | Plan de TI alineado | "Plataforma logistica integrada con ruteo por IA" | 3-5 anos |
| **Portafolio** | Conjunto de programas e iniciativas | Modernizacion de plataforma, datos y analitica, ciberseguridad | 1-3 anos |
| **Programa** | Grupo de proyectos relacionados | Integracion de la plataforma | 1-2 anos |
| **Proyecto** | Esfuerzo temporal con alcance y presupuesto | Implementar el API de integracion con e-commerce | meses |
| **Operacion** | Servicio en produccion | Servicio de rastreo en vivo (ITIL) | continuo |

:::callout idea Cascada en una linea
Estrategia del negocio -> PETI -> Portafolio -> Programa -> Proyecto -> Operacion. Si un proyecto no se puede rastrear hasta la estrategia, probablemente no deberia existir.
:::

:::flow Cascada estrategica
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de iniciativas
- Programa
- Proyecto
- Operacion (servicio en produccion)
:::

## Balanced Scorecard de TI

El **BSC de TI** adapta la metodologia de Kaplan y Norton para medir TI en 4 perspectivas. No basta con medir costos: hay que medir el valor en cada perspectiva.

| Perspectiva | Pregunta clave | Objetivo (LogiAndina) | KPI y meta |
|-------------|----------------|-----------------------|------------|
| **Financiera** | ¿Como contribuye TI a la rentabilidad? | Reducir el costo de TI por entrega | -15% en 12 meses; ROI de proyectos > 20% |
| **Clientes** | ¿Como perciben los usuarios la calidad de TI? | Mejorar la atencion al usuario interno | Satisfaccion 85%; respuesta < 2h |
| **Procesos** | ¿Que tan eficientes son los procesos de TI? | Asegurar disponibilidad y automatizar | Disponibilidad 99.9%; < 4 incidentes criticos/mes |
| **Aprendizaje** | ¿Como se capacita y desarrolla el equipo? | Fortalecer competencias cloud y datos | 40h capacitacion/empleado; 5 certificaciones |

:::callout success
Un BSC de TI bien implementado da a la gerencia un solo tablero con las 4 perspectivas, facilitando decisiones y demostrando el valor de TI (no solo el costo).
:::

## Ejemplo Integrador: el PETI de Logistica Andina

Logistica Andina quiere crecer 20% en entregas de e-commerce. Su PETI conecta estrategia, iniciativas y medicion:

1. **Diagnostico:** ERP estable pero sistemas aislados y deuda tecnica; sin API para clientes.
2. **Vision de TI:** plataforma logistica integrada que entregue en menos de 24h.
3. **Objetivos SMART:** integrar 10 clientes de e-commerce al API en 6 meses; reducir el tiempo de despacho 15%.
4. **Iniciativas:** API de integracion (proyecto), ruteo con IA (proyecto), tablero de KPIs (quick win).
5. **KPIs (BSC):** las 4 perspectivas de la tabla anterior.
6. **Cascada:** estrategia -> PETI -> portafolio de 3 programas -> programa de integracion -> proyecto API -> servicio de rastreo en operacion.

:::callout warning
Un PETI sin indicadores medibles es solo un documento bonito. Cada iniciativa debe tener KPIs con metas y un responsable.
:::

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz Autoevaluacion - Nivel 1 (conceptos base)
1. ¿Que estudia la administracion? || Solo las finanzas || Como las organizaciones alcanzan objetivos con eficiencia y eficacia || Solo el marketing || Solo el personal || 1 || Es la ciencia de alcanzar objetivos usando recursos.
2. ¿Que significa PODIO? || Plan, Organizar, Dirigir, Integrar, Operar || Planificar, Organizar, Dirigir, Integrar, Controlar || Produccion, Organizacion, Direccion, Informacion, Control || Presupuesto, Organizacion, Desarrollo, Implementacion, Control || 1 || PODIO = Planificar, Organizar, Dirigir, Integrar y Controlar.
3. ¿Cuantas etapas tiene la planificacion estrategica segun el material? || 2 || 3 || 4 || 5 || 2 || Cuatro: basica, atencion al tiempo, potenciacion y aplicacion.
4. ¿Que significan las siglas SMART? || Simple, Medible, Amplio, Real, Temporal || Especifico, Medible, Alcanzable, Relevante, Temporal || Solo, Medible, Actual, Real || Sistema, Meta, Accion, Resultado, Tiempo || 1 || Specific, Measurable, Achievable, Relevant, Time-bound.
5. En el FODA, las amenazas son factores: || Internos || Externos || Ambos || Ninguno || 1 || Son externos: la empresa no los controla.
6. ¿Que analiza el PESTEL? || Solo lo interno || El entorno externo (6 dimensiones) || Solo las finanzas || Solo la competencia || 1 || Politico, economico, social, tecnologico, ecologico y legal.
7. ¿Cuantas dimensiones analiza el PESTEL? || 3 || 4 || 5 || 6 || 3 || Politico, economico, social, tecnologico, ecologico y legal.
8. ¿Cuantos pilares tiene la administracion estrategica de TI? || 2 || 3 || 4 || 5 || 1 || Gobierno, gestion y arquitectura.
9. ¿Que es la deuda tecnica? || Prestamos bancarios para TI || Decisiones de corto plazo que generan problemas a largo plazo || El costo de licencias || El presupuesto anual || 1 || Son atajos que ahorran hoy y cuestan mas despues.
10. ¿Cual es el objetivo del benchmarking en TI? || Copiar a la competencia || Comparar procesos con las mejores practicas del sector || Reducir personal || Eliminar proveedores || 1 || Identifica brechas frente a lideres.
11. ¿Que es un portafolio de servicios de TI? || Una lista de computadoras || El conjunto de servicios que TI ofrece al negocio || Un directorio de empleados || Un manual de procedimientos || 1 || Documenta y gestiona los servicios de TI.
12. ¿Que framework es el estandar mas usado de arquitectura empresarial? || ITIL || TOGAF || PMBOK || ISO 9001 || 1 || TOGAF, de The Open Group.
13. ¿Que es un PETI? || Un tipo de ERP || Un plan que alinea TI con la estrategia del negocio || Una auditoria tecnica || Un contrato de servicio || 1 || El PETI traduce la estrategia del negocio en iniciativas de TI.
14. ¿Con que plan del negocio se alinea el PETI? || Con el PEI || Con el SLA || Con el WMS || Con el CRM || 0 || Se alinea con el Plan Estrategico Institucional (PEI).
15. ¿Cual es el horizonte tipico del PETI? || 1 mes || 6 meses || 3 a 5 anos || 20 anos || 2 || De 3 a 5 anos.
16. ¿Cuantas perspectivas tiene el BSC de TI? || 2 || 3 || 4 || 5 || 2 || Financiera, clientes, procesos y aprendizaje.
17. ¿Que es un Quick Win? || Un error comun || Una mejora de bajo esfuerzo y alto impacto || Un tipo de riesgo || Un estandar ITIL || 1 || Genera confianza y momentum para el plan.
18. ¿Cual es el ultimo eslabon de la cascada estrategica? || El proyecto || El portafolio || La operacion || El programa || 2 || Termina en la operacion (servicio en produccion).
:::

### Nivel 2 - Comprension

:::quiz Autoevaluacion - Nivel 2 (comprension)
1. ¿Cual es la diferencia entre estrategia y tactica? || Son iguales || La estrategia define que hacer (correcto); la tactica, como hacerlo (correctamente) || La tactica es de largo plazo || La estrategia es operativa || 1 || Estrategia = que; tactica = como.
2. ¿Que funcion administrativa define objetivos y estrategias? || Controlar || Planificar || Organizar || Dirigir || 1 || Planificar es la primera funcion.
3. La estrategia responde a: || Hacer las cosas correctamente || Hacer las cosas correctas || Controlar || Organizar || 1 || La estrategia define que es lo correcto.
4. ¿Cual es una estrategia competitiva generica de Thompson? || Liderazgo en costos || Duplicar precios || Reducir personal || Eliminar la competencia || 0 || Liderazgo en costos totales mas bajos.
5. ¿Que tipo de planificacion hace la alta direccion a largo plazo? || Operativa || Tactica || Estrategica || Diaria || 2 || La estrategica es de largo plazo y alta direccion.
6. ¿Por que el PESTEL complementa al FODA? || Porque son iguales || Porque el PESTEL analiza el macro-entorno externo que alimenta el analisis FODA || Porque reemplaza al FODA || Porque es financiero || 1 || PESTEL da el contexto externo.
7. ¿Que diferencia hay entre FODA y PESTEL? || Son iguales || PESTEL mira el macro-entorno externo; FODA combina lo interno y externo || El FODA es solo financiero || El PESTEL es solo interno || 1 || PESTEL = entorno externo; FODA = interno + externo.
8. Un objetivo "mejorar la calidad del servicio" NO es SMART porque: || Es muy caro || No es medible ni temporal || Es de TI || Lo dijo el gerente || 1 || Le faltan medicion y plazo.
9. Un objetivo "mejorar la TI" es incorrecto porque: || Es muy caro || No es medible ni tiene plazo (no es SMART) || Lo dijo el proveedor || No es de TI || 1 || No es especifico, medible ni temporal.
10. La deuda tecnica es una: || Oportunidad externa || Debilidad interna || Amenaza externa || Fortaleza interna || 1 || La empresa la controla: es interna.
11. Un ataque de ransomware es: || Una fortaleza || Una debilidad || Una amenaza externa || Una oportunidad || 2 || Viene del entorno y no lo controla la empresa.
12. La alineacion estrategica busca: || Reducir personal || Sincronizar TI con los objetivos del negocio || Comprar hardware || Eliminar el gobierno || 1 || TI alineada con el negocio.
13. ¿Para que sirve el portafolio de servicios de TI? || Para listar empleados || Para priorizar inversiones y gestionar expectativas || Para comprar software || Para auditar cuentas || 1 || Ordena la demanda y prioriza.
14. La gestion del cambio es importante porque: || La tecnologia sola no basta: las personas deben adoptar el cambio || Reduce costos automaticamente || Elimina riesgos || Reemplaza al PETI || 0 || Sin adopcion, la mejor tecnologia falla.
15. ¿Que herramienta sirve para disenar la arquitectura empresarial? || ITIL || TOGAF || PMBOK || PESTEL || 1 || TOGAF.
16. La cascada estrategica termina en: || El proyecto || La operacion (servicio en produccion) || El portafolio || El PETI || 1 || Termina en la operacion del servicio.
17. ¿Por que el PETI no es una lista de compras? || Porque no incluye TI || Porque responde como la TI ayuda al negocio, no que comprar || Porque no tiene presupuesto || Porque lo hace el proveedor || 1 || El PETI parte de la estrategia del negocio.
18. ¿Que orden sigue la cascada estrategica? || Proyecto -> estrategia -> PETI || Estrategia -> PETI -> portafolio -> programa -> proyecto -> operacion || Operacion -> proyecto -> PETI || Portafolio -> estrategia -> proyecto || 1 || La estrategia baja en cascada hasta la operacion.
19. ¿Que mide la perspectiva de Procesos del BSC de TI? || La rentabilidad || La eficiencia de los procesos de TI || Las horas de capacitacion || La marca || 1 || Mide disponibilidad, incidentes y automatizacion.
20. ¿Que relacion hay entre portafolio y proyecto? || Son sinonimos || El portafolio agrupa programas e iniciativas que contienen proyectos || El proyecto contiene al portafolio || No se relacionan || 1 || El portafolio agrupa; los proyectos ejecutan.
21. ¿Para que sirve un Quick Win en el PETI? || Para gastar presupuesto || Para generar confianza y momentum con exitos tempranos || Para retrasar el plan || Para eliminar KPIs || 1 || Demuestra valor rapido y sostiene el apoyo.
22. Si un proyecto no se rastrea hasta la estrategia, ¿que implica? || Que es obligatorio || Que probablemente no deberia existir || Que es un quick win || Que es un KPI || 1 || Todo proyecto debe aportar a la estrategia.
23. ¿Que perspectiva del BSC mide la capacitacion del equipo? || Financiera || Clientes || Procesos || Aprendizaje || 3 || El aprendizaje y desarrollo del equipo.
:::

### Nivel 3 - Escenarios

:::quiz Autoevaluacion - Nivel 3 (escenarios)
1. Logistica Andina tiene sistemas aislados y sin API. En el FODA de TI, esto es: || Fortaleza || Debilidad || Oportunidad || Amenaza || 1 || Es interna y limita: debilidad.
2. La aparicion de IA para ruteo es, para Logistica Andina: || Fortaleza || Debilidad || Oportunidad || Amenaza || 2 || Viene del entorno y se puede aprovechar: oportunidad.
3. Una nueva ley de proteccion de datos es: || Fortaleza || Debilidad || Oportunidad || Amenaza (o factor legal del PESTEL) || 3 || Es un factor externo legal que puede afectar.
4. La empresa quiere comparar su disponibilidad con el lider del sector. ¿Que usa? || Deuda tecnica || Benchmarking || Quick Win || CRM || 1 || Compararse con las mejores practicas es benchmarking.
5. El equipo pospone actualizar un sistema para "salir rapido". ¿Que acumula? || Deuda tecnica || Oportunidad || Fortaleza || KPI || 0 || Ese atajo genera deuda tecnica.
6. Los usuarios rechazan el nuevo sistema. ¿Que se descuido? || La gestion del cambio || La arquitectura || El PESTEL || El presupuesto || 0 || Falto sensibilizar, formar e involucrar.
7. El directorio define como TI soporta el negocio a 3 anos. ¿Que pilar ejerce? || Gestion || Gobierno || Arquitectura || Operacion || 1 || Definir direccion y supervisar es gobierno.
8. Logistica Andina analiza el auge del e-commerce. En el FODA es: || Fortaleza || Debilidad || Oportunidad || Amenaza || 2 || Viene del entorno y se puede aprovechar.
9. Una nueva ley de proteccion de datos es, en el PESTEL: || Factor politico || Factor legal || Factor social || Factor tecnologico || 1 || Es la dimension Legal.
10. La empresa define "aumentar ventas 15% en 6 meses". ¿Que aplico? || Un objetivo SMART || Una amenaza || Una debilidad || Un plan operativo || 0 || Especifico, medible, alcanzable, relevante y temporal.
11. El gerente define horarios y tareas del dia. ¿Que planificacion aplica? || Estrategica || Tactica || Operativa || Vision || 2 || Es planificacion operativa.
12. La empresa decide operar con los costos mas bajos del sector. ¿Que estrategia usa? || Diferenciacion || Liderazgo en costos || Enfoque || Hibrida || 1 || Liderazgo en costos totales mas bajos.
13. Se define la razon de ser y hacia donde va la empresa. ¿Que etapa es? || Basica || Atencion al tiempo || Potenciacion || Aplicacion || 0 || La etapa basica define mision y vision.
14. Un objetivo que no se puede medir ni tiene plazo es: || SMART || No SMART || Una fortaleza || Un KPI || 1 || Le faltan M y T.
15. La empresa capacita al equipo en nuevas herramientas. ¿Estrategia o tactica? || Estrategia || Tactica || Vision || Mision || 1 || Es una accion de corto plazo: tactica.
16. Logistica Andina quiere crecer 20% en e-commerce. ¿Que debe hacer primero el PETI? || Comprar servidores || Alinear la vision de TI con la estrategia del negocio || Contratar mas personal || Implementar un ERP || 1 || La alineacion con el PEI es el punto de partida.
17. La direccion pide reducir costos de TI 20% y los usuarios piden mas funciones. ¿Que hace el PETI? || Ignorar a los usuarios || Balancear ambos objetivos con priorizacion clara || Reducir personal || Comprar mas licencias || 1 || El PETI prioriza y balancea eficiencia e innovacion.
18. El equipo quiere migrar todo a la nube de una vez. ¿Que recomienda el PETI? || Migracion incremental con pilotos || Migracion total inmediata || No migrar nunca || Comprar servidores || 0 || Se recomienda migracion incremental para reducir riesgo.
19. Se logra una mejora rapida de bajo esfuerzo y alto impacto. ¿Que es? || Un KPI || Un Quick Win || Un riesgo || Una deuda tecnica || 1 || Es un Quick Win.
20. Un KPI de disponibilidad del 99.9% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 2 || La disponibilidad es un proceso de TI.
21. El proyecto de API de integracion aporta directamente a: || Un objetivo del PETI (integracion con e-commerce) || Un objetivo personal || Nada || Al presupuesto || 0 || Cada proyecto debe rastrearse a un objetivo del PETI.
22. La satisfaccion del usuario interno al 85% pertenece a la perspectiva: || Clientes || Procesos || Aprendizaje || Financiera || 0 || Los usuarios son "clientes" internos de TI.
23. El ROI de los proyectos de TI mayor a 20% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 0 || El ROI es una medida financiera.
:::

### Practica guiada

:::sort Ordena la cascada de la estrategia a la ejecucion
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de programas e iniciativas
- Programa de proyectos relacionados
- Proyecto con alcance y presupuesto
- Operacion (servicio en produccion)
:::

:::sort Ordena las 4 etapas de la planificacion estrategica
- Etapa Basica: mision y vision
- Etapa de Atencion al Tiempo: analisis del entorno (FODA, PESTEL)
- Etapa de Potenciacion: factores criticos internos
- Etapa de Aplicacion: politicas, programas y controles
:::

:::match Relaciona los conceptos estrategicos
- FODA | Analisis de fortalezas, debilidades, oportunidades y amenazas
- PESTEL | Analisis del entorno externo en 6 dimensiones
- PODIO | Planificar, organizar, dirigir, integrar y controlar
- SMART | Criterio para objetivos especificos, medibles, alcanzables, relevantes y temporales
- Cadena de Valor | Actividades que agregan valor al producto o servicio
- Mision | Razon de ser de la organizacion
- Deuda tecnica | Atajos de corto plazo que cuestan a largo plazo
- Benchmarking | Compararse con las mejores practicas del sector
- Portafolio de servicios | Conjunto de servicios que TI ofrece al negocio
- TOGAF | Framework de arquitectura empresarial
- Cascada | Estrategia -> PETI -> portafolio -> proyecto -> operacion
- PETI | Plan que alinea TI con la estrategia del negocio
- PEI | Plan Estrategico Institucional del negocio
- BSC de TI | Tablero con 4 perspectivas de indicadores
- Quick Win | Mejora de bajo esfuerzo y alto impacto
- KPI | Indicador clave de desempeno con meta
:::

:::truefalse Administracion Estrategica de TI y PETI
1. La estrategia se define despues de la mision y vision. || Verdadero || La mision y vision son la base.
2. La tactica responde a "hacer las cosas correctas". || Falso || La tactica es "hacer las cosas correctamente"; la estrategia es "las correctas".
3. PODIO significa Planificar, Organizar, Dirigir, Integrar y Controlar. || Verdadero || Es la funcion administrativa.
4. Las amenazas del FODA son internas. || Falso || Son externas.
5. El PESTEL analiza el entorno externo. || Verdadero || Seis dimensiones del macro-entorno.
6. La planificacion operativa es de largo plazo. || Falso || Es de corto plazo (dia a dia).
7. La deuda tecnica es una amenaza externa. || Falso || Es una debilidad interna: la empresa la controla.
8. El PESTEL analiza solo factores internos. || Falso || Analiza el entorno externo (6 dimensiones).
9. TOGAF es el framework mas usado de arquitectura empresarial. || Verdadero || Lo publica The Open Group.
10. La gestion del cambio es opcional si la tecnologia es buena. || Falso || Sin adopcion de las personas, la tecnologia falla.
11. Un ataque de ransomware es una amenaza externa. || Verdadero || Viene del entorno y no se controla directamente.
12. El PETI es una lista de compras de hardware. || Falso || Es un plan que alinea TI con la estrategia del negocio.
13. El PETI se alinea con el PEI de la organizacion. || Verdadero || El PEI es su punto de partida.
14. El BSC de TI tiene 4 perspectivas. || Verdadero || Financiera, clientes, procesos y aprendizaje.
15. Un Quick Win es un proyecto de largo plazo. || Falso || Es una mejora rapida de bajo esfuerzo y alto impacto.
16. Todo proyecto debe rastrearse hasta un objetivo del PETI. || Verdadero || Si no aporta a la estrategia, no deberia existir.
17. Un PETI sin KPIs medibles es solo un documento. || Verdadero || Cada iniciativa necesita indicadores con metas.
:::

:::essay Administracion Estrategica de TI y PETI
1. Explique como se aplican el FODA y el PESTEL a la estrategia de TI. De un ejemplo de cada cuadrante del FODA y una dimension del PESTEL para una empresa de logistica. || Pista: FODA = interno (F/D) + externo (O/A); PESTEL = entorno externo en 6 dimensiones. || Respuesta modelo: El FODA aplicado a TI evalua factores internos y externos: Fortalezas (ERP estable, equipo capacitado), Debilidades (deuda tecnica, sistemas aislados), Oportunidades (cloud, IA para ruteo) y Amenazas (ransomware, dependencia de un proveedor). El PESTEL complementa analizando el entorno externo: Politico (incentivos al e-commerce), Economico (costo del cloud y combustible), Social (auge de compras online), Tecnologico (IA, IoT, 5G), Ecologico (regulacion de emisiones) y Legal (proteccion de datos). Ambos alimentan la estrategia de TI: el PESTEL da el contexto y el FODA define como aprovechar o defenderse. || [rúbrica: Diferencia FODA y PESTEL, Da ejemplo por cuadrante, Da una dimension PESTEL, Redaccion y claridad]
2. Explique que es PODIO y por que la planificacion es la primera funcion administrativa. Relacione PODIO con la evaluacion del desempeno de un gerente. || Pista: Planificar, organizar, dirigir, integrar y controlar; sin plan no hay rumbo. || Respuesta modelo: PODIO es la funcion administrativa: Planificar (definir objetivos y estrategias), Organizar (estructurar recursos), Dirigir (liderar y motivar), Integrar (coordinar las partes) y Controlar (verificar y corregir). La planificacion es la primera porque sin un plan no hay rumbo claro ni criterios para organizar, dirigir y controlar. PODIO es la base para evaluar a un gerente: la auditoria CRMR revisa si cumple bien estas cinco funciones, de modo que el desempeno se mide por como planifica, organiza, dirige, integra y controla. || [rúbrica: Define PODIO, Justifica la prioridad de planificar, Relaciona con la evaluacion del gerente, Redaccion y claridad]
3. Explique los 3 pilares de la administracion estrategica de TI y como la estrategia baja en cascada hasta la operacion. || Pista: Gobierno, gestion y arquitectura; cascada PETI -> portafolio -> proyecto -> operacion. || Respuesta modelo: Los 3 pilares son Gobierno de TI (define la direccion, asigna recursos y supervisa), Gestion de TI (ejecuta los procesos y entrega servicios) y Arquitectura de TI (define la estructura tecnologica que soporta el negocio actual y futuro). La estrategia baja en cascada: la estrategia corporativa (PEI) se traduce en el PETI, que se organiza en un portafolio de iniciativas, luego en programas y proyectos, y finalmente en servicios en operacion. Asi cada proyecto se rastrea hasta la estrategia y la organizacion cierra la brecha entre el plan y el dia a dia. || [rúbrica: Nombra los 3 pilares, Explica la cascada, Conecta estrategia y operacion, Redaccion y claridad]
4. Explique que es un PETI, como se alinea con el PEI y describa la cascada estrategica hasta la operacion. Use el ejemplo de Logistica Andina. || Pista: PEI -> PETI -> portafolio -> programa -> proyecto -> operacion. || Respuesta modelo: El PETI es el plan que traduce la estrategia del negocio (PEI) en iniciativas de TI medibles para un horizonte de 3 a 5 anos. En Logistica Andina, el PEI busca crecer 20% en e-commerce; el PETI responde con una plataforma logistica integrada y ruteo por IA. La cascada baja asi: estrategia corporativa (entregas en menos de 24h) -> PETI (plataforma integrada) -> portafolio (modernizacion, datos, ciberseguridad) -> programa de integracion -> proyecto del API con alcance y presupuesto -> operacion del servicio de rastreo. Cada nivel tiene horizonte y responsable, y todo proyecto debe rastrearse hasta la estrategia. || [rúbrica: Define PETI y PEI, Explica la cascada, Usa el ejemplo de Logistica Andina, Redaccion y claridad]
5. Explique que es el BSC de TI, sus 4 perspectivas y de un KPI con meta para cada una usando un ejemplo. || Pista: Financiera, clientes, procesos y aprendizaje; cada KPI con meta. || Respuesta modelo: El BSC de TI adapta el Balanced Scorecard de Kaplan y Norton para medir TI en 4 perspectivas. Financiera: contribucion a la rentabilidad (ej. ROI de proyectos > 20%). Clientes: percepcion de los usuarios internos (ej. satisfaccion 85%). Procesos: eficiencia de los procesos de TI (ej. disponibilidad 99.9%). Aprendizaje: desarrollo del equipo (ej. 40h de capacitacion por empleado). Asi la gerencia mide el valor de TI en un solo tablero y no solo su costo. || [rúbrica: Define el BSC de TI, Nombra las 4 perspectivas, Da KPI con meta por perspectiva, Redaccion y claridad]
:::

:::path Decision estrategica en Logistica Andina
1 | Situacion | Logistica Andina crece 30% anual y los sistemas no escalan. ¿Que haces? | Analizar con FODA/PESTEL y alinear con el PETI=2; Comprar mas servidores sin analisis=3
2 | Alineado | El analisis muestra deuda tecnica y oportunidad en cloud e IA. ¿Que sigue? | Definir objetivos SMART y una hoja de ruta por fases con quick wins=4; Migrar todo de una vez=5
3 | Reactivo | Comprar servidores sin analisis resuelve lo inmediato pero genera costos fijos y subutilizacion. | * | Primero analiza el contexto y alinea con la estrategia.
4 | Estrategico | Defines la vision de TI alineada al PEI, priorizas por impacto y avanzas con pilotos. La estrategia baja en cascada a proyectos medibles. | * | Correcto: analisis, alineacion y ejecucion por fases.
5 | Riesgo alto | Migrar todo de una vez es costoso, interrumpe la operacion y genera resistencia al cambio. | * | Mejor migracion incremental con pilotos controlados.
:::

:::path Planificacion en Logistica Andina
1 | Inicio | Logistica Andina quiere crecer pero no tiene rumbo claro. ¿Que haces primero? | Definir mision y vision, y analizar el entorno (FODA/PESTEL)=2; Comprar software de inmediato=3
2 | Correcto | Con la mision, vision y el analisis del entorno defines estrategias y objetivos SMART. ¿Que sigue? | Traducir la estrategia en planes tacticos y operativos=4; Ejecutar sin medir=5
3 | Reactivo | Comprar software sin estrategia es partir de la solucion, no de la necesidad. | * | La tecnologia sirve al negocio, no al reves.
4 | Alineado | Defines politicas, programas, presupuestos y controles (etapa de aplicacion) y mides con KPIs. | * | Correcto: la estrategia baja a la ejecucion con control.
5 | Sin control | Ejecutar sin medir impide detectar desviaciones y corregir: falta la funcion Controlar. | * | Sin control no se sabe si se cumple el plan.
:::

:::path Desarrollo del PETI
1 | Inicio | Logistica Andina necesita su PETI. ¿Por donde empiezas? | Diagnosticar el estado actual de TI y entrevistar a la direccion=2; Comprar tecnologia emergente=3
2 | Diagnostico | El diagnostico revela ERP estable pero sistemas aislados y sin API. ¿Que sigue? | Definir vision y objetivos alineados al PEI y priorizar por impacto=4; Migrar todo a la nube de una vez=5
3 | Tecnologia primero | Investigar IA y cloud es util, pero debe partir de las necesidades del negocio, no de la moda. | * | La tecnologia sirve al negocio, no al reves.
4 | Alineacion | Defines vision, objetivos SMART y KPIs (BSC), priorizas quick wins y armas la cascada PETI -> portafolio -> proyecto. | * | Correcto: estrategia alineada y medible.
5 | Migracion total | Migrar todo de una vez es riesgoso: alto costo, interrupciones y resistencia al cambio. Mejor incremental. | * | Riesgo alto: usa pilotos y avanza por fases.
:::

:::arch gobierno-ti
