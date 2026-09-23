---
title: Gobierno de TI - Introducción a COBIT, ITIL e ISO 38500
emoji: "🏛️"
accent: "#7C61D4"
category: Gobierno de TI
difficulty: principiante
order: 4
unit: "Unidad 2 · Gobierno de TI y Marcos de Referencia"
description: Visión general del gobierno de TI y de los tres marcos de referencia más importantes - COBIT 2019, ITIL 4 e ISO 38500 - con la distinción gobierno vs gestión, como se complementan (que/por que vs como) y un caso de empresa que confunde ambos roles.
tags: [gobierno-TI, COBIT, ITIL, ISO-38500, marcos-referencia, accountability]
keyTakeaway: El gobierno de TI dirige y rinde cuentas (que y por que); la gestión ejecuta (como). COBIT integra gobierno y gestión, ITIL gestiona servicios, e ISO 38500 da los principios para el órgano de gobierno. No son excluyentes, son complementarios.
sources:
  - "COBIT 2019|https://www.isaca.org/resources/cobit|ISACA|Gobierno y gestión de TI"
  - "ITIL 4 Foundation|https://www.axelos.com/certifications/itil-service-management|Axelos|Gestión de servicios de TI"
  - "ISO/IEC 38500:2024 - Governance of IT for the organization|https://www.iso.org/standard/81684.html|ISO|Norma de gobierno corporativo de TI"
  - "Introducción a COBIT, ITIL e ISO 38500 (U22)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es el Gobierno de TI?

:::definition Gobierno de TI
Conjunto de **liderazgo, estructuras organizacionales y procesos** que aseguran que la TI soporte y extienda las estrategias y objetivos de la organización. Provee la dirección estratégica, asegura que los objetivos se alcanzan, gestiona los riesgos y verifica que los recursos se usen de manera responsable.
:::

:::callout info Que vs como
El gobierno de TI **no** es lo mismo que la gestión de TI. El gobierno responde "**¿que debemos hacer y por que?**"; la gestión responde "**¿como lo hacemos?**". Confundirlos es el error más comun: se delegan decisiones estratégicas al nivel operativo o se microgestiona desde la dirección.
:::

## Gobierno vs Gestión: no son lo mismo

| Aspecto | Gobierno | Gestión |
|---------|----------|---------|
| Pregunta | Que y por que | Como |
| Responsable | Directorio o Consejo (accountability indelegable) | CIO, gerentes y equipos |
| Tareas | Evaluar, dirigir y monitorear | Planificar, construir, operar y medir |
| Horizonte | Estratégico | Operativo y táctico |

:::callout danger Accountability indelegable
El órgano de gobierno puede **delegar tareas operativas** en la gestión (por ejemplo, elegir al proveedor), pero **nunca la responsabilidad final**. Si algo falla, el directorio sigue rindiendo cuentas ante los stakeholders y el regulador.
:::

**Ejemplos para fijar la idea:**

- **Exclusiva del gobierno:** aprobar la estrategia de TI y aceptar el riesgo de un proyecto.
- **Exclusiva de la gestión:** seleccionar al proveedor técnico y operar los servicios.

## Los Tres Marcos de Referencia

| Marco | Enfoque | Pregunta que responde | Organismo |
|-------|---------|----------------------|-----------|
| **COBIT 2019** | Gobierno y gestión de TI | ¿Que gobernar y quien lo hace? | ISACA |
| **ITIL 4** | Gestión de servicios de TI | ¿Como gestionar servicios? | Axelos/PeopleCert |
| **ISO 38500** | Gobierno corporativo de TI | ¿Que principios seguir y por que? | ISO |

:::callout warning No son excluyentes
Las organizaciones maduras usan los tres de forma complementaria: **COBIT** para el gobierno y la gestión integral, **ITIL** para la operación de servicios, e **ISO 38500** para establecer los principios del órgano de gobierno.
:::

:::callout info Otros marcos del curso
Acompanan a estos tres: **PMBOK** (gestión de proyectos) e **ISO 27001** (seguridad de la información). No son marcos de gobierno de TI, pero se integran con ellos.
:::

## COBIT 2019 en breve

COBIT (Control Objectives for Information and Related Technologies) es el framework más completo para gobierno y gestión de TI, publicado por ISACA. Su idea central es separar **gobernanza** de **gestión**.

### Los 5 Dominios

| Dominio | Significado | Que hace | Tipo |
|---------|-------------|----------|------|
| **EDM** | Evaluar, Dirigir y Monitorear | La alta dirección evalúa, dirige y monitorea | Gobierno |
| **APO** | Alinear, Planificar y Organizar | Prepara estrategia, presupuesto y recursos | Gestión |
| **BAI** | Construir, Adquirir e Implementar | Desarrolla o compra soluciones | Gestión |
| **DSS** | Entregar, Servir y Soportar | Opera los servicios y atiende usuarios | Gestión |
| **MEA** | Monitorear, Evaluar y Valorar | Mide desempeno y conformidad | Gestión |

:::callout info Dato clave
**EDM** es el único dominio de **gobierno** (lo ejerce la alta dirección). Los otros cuatro (APO, BAI, DSS, MEA) son de **gestión**. COBIT tiene 40 objetivos en total (5 EDM, 14 APO, 11 BAI, 6 DSS, 4 MEA). En la unidad de COBIT se profundiza.
:::

## ITIL 4 en breve

ITIL (Information Technology Infrastructure Library) se enfoca en la **gestión de servicios**: como diseñar, entregar y mejorar los servicios que consumen los usuarios.

### El SVS y las 4 Dimensiones

El **Sistema de Valor de Servicio (SVS)** convierte la demanda en valor mediante la **cadena de valor** (6 actividades), las **prácticas de gestión**, el **gobierno y controles** y la **mejora continua**. Todo servicio se analiza desde **4 dimensiones**: Organización y Personas; Información y Tecnología; Socios y Proveedores; y Flujos de Valor y Procesos.

### Los 7 Principios Guía

Enfoque en el valor, empezar donde estas, progresar iterativamente, colaborar y promover la visibilidad, pensar y trabajar de forma integral, simplificar y practicar, y optimizar y automatizar. En la unidad de ITIL se profundiza.

## ISO 38500 en breve

ISO/IEC 38500 es una norma internacional que establece principios para el gobierno corporativo de TI. Define **que** debe cuidar la alta dirección (no entra en detalles técnicos) con su modelo **E-D-M** (Evaluar, Dirigir, Monitorear). Sus 6 principios clásicos:

1. **Responsabilidad** — Cada directivo responde por el uso de TI en su area
2. **Estrategia** — La TI se planifica para soportar los objetivos del negocio
3. **Adquisición** — Compras justas, transparentes, con análisis de costo, beneficio y riesgo
4. **Desempeno** — La TI debe ser adecuada para su propósito (fit for purpose)
5. **Conformidad** — Cumplir leyes, regulaciones y políticas
6. **Comportamiento Humano** — Diseñar considerando a las personas y su consentimiento

:::callout idea Novedad 2024
La versión 2024 de ISO 38500 se alinea con **ISO 37000** y adopta sus principios, integrando tres resultados del buen gobierno: **desempeno efectivo, gestión responsable y comportamiento ético**. En la unidad de ISO 38500 se profundiza en cada principio.
:::

## ISO 38500 vs ITIL: que/por que vs como

| Aspecto | ISO 38500 | ITIL 4 |
|---------|-----------|--------|
| Pregunta que responde | **Que** y **por que** | **Como** |
| Audiencia | Órgano de gobierno / alta dirección | Operación y gestión de servicios |
| Naturaleza | Norma internacional (principios) | Marco de buenas prácticas (recomendable) |
| Alcance | Gobierno de TI de punta a punta | Gestión de servicios de TI |
| Ejemplo | Aprobar la estrategia y el riesgo de la IA | Definir el flujo de incidentes y cambios |

:::callout success Como se complementan
El directorio **gobierna** con ISO 38500 (principios y rumbo); los equipos **gestionan** los servicios con ITIL (prácticas). COBIT actua como puente: integra gobierno (EDM) y gestión (APO, BAI, DSS, MEA) en un solo sistema. Uno da la dirección, los otros la ejecutan.
:::

## Caso de estudio: Comercial Pacifico (roles confundidos)

Comercial Pacifico es una cadena de retail en crecimiento. Dos errores se repiten:

1. El **gerente de TI** decide por su cuenta **comprar un ERP millonario** — una decisión estratégica que corresponde al **gobierno**.
2. El **directorio** dedica sus reuniones a **microgestionar** las tareas de soporte y las fechas de los sprints — que corresponde a la **gestión**.

| Rol | Decisión que le corresponde | Que hizo mal |
|-----|------------------------------|--------------|
| **Gobierno (directorio)** | Evaluar, dirigir y monitorear; aprobar la estrategia y el riesgo del ERP | Microgestiono la operación en lugar de gobernar |
| **Gestión (CIO y equipos)** | Planificar, construir, operar y medir; elegir proveedor y operar servicios | Asumio una decisión estratégica que no le correspondía |

:::callout success Correctivo
El directorio retoma su rol: **evalúa** si el ERP soporta la estrategia, **dirige** aprobando la inversión y el riesgo, y **monitorea** con reportes. El CIO **gestiona**: selecciona al proveedor, construye e implementa y opera el servicio, reportando resultados al gobierno.
:::

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz Gobierno TI - Nivel 1 (memoria)
1. ¿Cual de estos marcos se enfoca en la gestión de servicios? || COBIT || ITIL || ISO 38500 || PMBOK || 1 || ITIL 4 se enfoca en la gestión de servicios de TI.
2. ¿Cuantos dominios tiene COBIT 2019? || 3 || 4 || 5 || 6 || 2 || Tiene 5 dominios: EDM, APO, BAI, DSS y MEA.
3. ¿Cuantos principios clásicos establece ISO 38500? || 4 || 5 || 6 || 11 || 2 || Establece 6 principios clásicos.
4. ¿Cual es el modelo de gobierno de ISO 38500? || PBRM || E-D-M || SVS || PDCA || 1 || El modelo es E-D-M: Evaluar, Dirigir y Monitorear.
5. ¿Que marco publica ISACA? || ITIL || COBIT || ISO 38500 || PMBOK || 1 || COBIT lo publica ISACA.
6. ¿Que organismo publica ISO 38500? || ISACA || Axelos || ISO/IEC || PMI || 2 || Lo publica ISO/IEC.
:::

### Nivel 2 - Comprensión

:::quiz Gobierno TI - Nivel 2 (comprensión)
1. La diferencia central entre gobierno y gestión de TI es: || Son sinonimos || El gobierno define que y por que; la gestión ejecuta el como || La gestión reemplaza al gobierno || El gobierno opera los servicios || 1 || Gobierno = que/por que; gestión = como.
2. COBIT se enfoca en: || Solo seguridad || Gobierno y gestión de TI de forma integral || Solo proyectos || Solo servicios || 1 || COBIT cubre gobierno y gestión integrales.
3. ITIL 4 introdujo: || El ciclo de vida de servicio || La cadena de valor del servicio (SVS) || Los 40 objetivos || El ciclo E-D-M || 1 || ITIL 4 reemplaza el ciclo de vida por el SVS y la cadena de valor.
4. ISO 38500 se distingue de ITIL porque: || ISO es obligatoria e ITIL opcional || ISO da el que/por que a la alta dirección; ITIL da el como operativo || ITIL solo sirve a telecomunicaciones || ISO reemplaza a ITIL || 1 || ISO 38500 = principios de gobierno; ITIL = prácticas de gestión.
5. Que significa que la accountability del gobierno sea indelegable: || El directorio transfiere toda la responsabilidad al CIO || El directorio delega tareas operativas, pero la responsabilidad final sigue siendo suya || La responsabilidad se reparte entre todos || La asume el auditor externo || 1 || La responsabilidad final no se transfiere.
6. Los tres marcos son: || Excluyentes entre si || Complementarios: COBIT gobierna, ITIL gestiona servicios, ISO da principios || Iguales entre si || Solo aplicables a banca || 1 || Son complementarios.
7. COBIT, ITIL e ISO 38500 se complementan porque: || Cada uno cubre un nivel distinto: principios, gobierno integral y operación || Todos hacen lo mismo || Solo sirven para certificar || Reemplazan a PMBOK || 0 || Cada uno aporta en su nivel.
8. La versión 2024 de ISO 38500 se alinea con: || ISO 27001 || ISO 37000 || ITIL 4 || PMBOK || 1 || Se alinea con ISO 37000 (gobierno de organizaciones).
:::

### Nivel 3 - Escenarios

:::quiz Gobierno TI - Nivel 3 (escenarios)
1. El directorio de Comercial Pacifico aprueba la estrategia de TI y acepta el riesgo del ERP. ¿Que rol ejerce? || Gestión || Gobierno || Operación || Auditoría || 1 || Aprobar estrategia y riesgo es gobierno.
2. El CIO elige al proveedor del ERP y opera el servicio. ¿Que rol ejerce? || Gobierno || Gestión || Consejo || Regulador || 1 || Elegir proveedor y operar es gestión.
3. El directorio pasa sus reuniones revisando fechas de sprints. ¿Que error comete? || Gobierna bien || Microgestiona desde la dirección || Delega correctamente || Audita || 1 || Revisar sprints es microgestión, no gobierno.
4. El gerente de TI compra el ERP sin consultar al directorio. ¿Que error comete? || Gobierna bien || Asume una decisión estratégica que corresponde al gobierno || Delega bien || Monitorea || 1 || Esa decisión es estratégica y corresponde al gobierno.
5. La empresa quiere definir el flujo de incidentes y cambios. ¿Que marco le conviene? || ISO 38500 || ITIL 4 || ISO 37000 || PMBOK || 1 || ITIL gestiona servicios (incidentes y cambios).
6. La empresa quiere que el directorio fije principios de gobierno de TI. ¿Que marco le conviene? || ITIL || COBIT || ISO 38500 || PMBOK || 2 || ISO 38500 da los principios al órgano de gobierno.
7. La empresa quiere un marco que integre gobierno y gestión de TI en un solo sistema. ¿Que marco le conviene? || ISO 38500 || ITIL || COBIT || PMBOK || 2 || COBIT integra gobierno (EDM) y gestión (APO, BAI, DSS, MEA).
8. Un auditor pregunta quien responde si la estrategia de TI falla. ¿A quien le corresponde? || Al CIO || Al órgano de gobierno (directorio o consejo) || A los proveedores || A la mesa de ayuda || 1 || La accountability final es del órgano de gobierno.
:::

### Práctica guiada

:::sort Ordena los marcos de lo más estratégico a lo más operativo
- ISO 38500: principios de gobierno (que y por que)
- COBIT: gobierno y gestión integrados (EDM + APO/BAI/DSS/MEA)
- ITIL 4: prácticas de gestión de servicios (como)
:::

:::match Relaciona marcos con su enfoque
- COBIT 2019 | Gobierno y gestión de TI empresarial
- ITIL 4 | Gestión de servicios de TI
- ISO 38500 | Gobierno corporativo de TI
- PMBOK | Gestión de proyectos
:::

:::truefalse Marcos de Gobierno TI
1. COBIT se enfoca exclusivamente en seguridad. || Falso || COBIT cubre gobierno y gestión de TI de forma integral.
2. ITIL 4 introdujo el concepto de cadena de valor del servicio. || Verdadero || ITIL 4 reemplaza el ciclo de vida por el SVS y la cadena de valor.
3. ISO 38500 es un estándar de gestión, no un marco de implementación. || Verdadero || Establece principios, no prescribe como implementarlos.
4. COBIT, ITIL e ISO son excluyentes entre si. || Falso || Son complementarios: COBIT gobierna, ITIL gestiona, ISO estandariza.
5. La accountability del gobierno de TI es indelegable. || Verdadero || El directorio puede delegar operación, nunca la responsabilidad final.
6. En ágiles, el gobierno debe monitorear la velocity de los sprints. || Falso || Debe monitorear el backlog estratégico y el valor dentro del riesgo.
:::

:::essay Gobierno de TI - Introducción
1. Explique la diferencia entre gobierno y gestión de TI y por que es crítico no confundirlos. De un ejemplo de una decisión exclusiva de cada uno. || Pista: Gobierno = que/por que con accountability indelegable; gestión = como; da un ejemplo de cada uno. || Respuesta modelo: El gobierno (directorio o consejo) define que y por que, evalúa, dirige y monitorea, y su responsabilidad final es indelegable. La gestión (CIO y equipos) define el como, planifica, construye, opera y mide. Confundirlos lleva a dos errores: delegar decisiones estratégicas al nivel operativo o microgestionar desde la dirección, y ambos rompen la alineación estratégica. Ejemplo de gobierno: aprobar la estrategia de TI y aceptar el riesgo del ERP. Ejemplo de gestión: seleccionar al proveedor y operar el servicio. || [rúbrica: Diferencia gobierno/gestión, Explica el riesgo de confundirlos, Ejemplos correctos, Terminología y redacción]
2. Explique como se complementan COBIT, ITIL e ISO 38500 en una organización y que pregunta responde cada uno. || Pista: Que/por que, gobierno integral y como; no son rivales. || Respuesta modelo: ISO 38500 da los principios y el modelo E-D-M para que el órgano de gobierno sepa que cuidar y por que. COBIT integra gobierno (EDM) y gestión (APO, BAI, DSS, MEA) en un solo sistema de gobierno, con objetivos y componentes. ITIL aporta el como de la gestión de servicios mediante el SVS, la cadena de valor y las prácticas. No son excluyentes: el directorio gobierna con ISO 38500, la organización articula gobierno y gestión con COBIT y los equipos operan servicios con ITIL. || [rúbrica: Explica los tres marcos, Menciona que/por que vs como, Argumenta complementariedad, Terminología y redacción]
:::

:::path Roles confundidos en Comercial Pacifico
1 | Inicio | El gerente de TI compro un ERP millonario sin consultar al directorio. ¿Que corresponde? | Detenerlo: es una decisión estratégica del gobierno=2; Dejarlo: es una decisión operativa de la gestión=3
2 | Correcto | La decisión de comprar el ERP es estratégica y corresponde al gobierno. ¿Que debe hacer el directorio? | Evaluar, dirigir y monitorear la inversión y el riesgo=4; Encargarse también de operar el soporte diario=5
3 | Error de rol | La compra de un ERP es estratégica: no es una simple decisión operativa de la gestión. | * | Confundir gobierno y gestión fue el problema de la empresa.
4 | Alineación | El directorio gobierna (aprueba estrategia y riesgo) y el CIO gestiona (proveedor, implementación, operación). Cada rol en su lugar. | * | Solución correcta: gobierno dirige, gestión ejecuta.
5 | Microgestión | Si el directorio opera el soporte diario, cae en microgestión y descuida su rol de gobierno. | * | Gobernar no es operar: es evaluar, dirigir y monitorear.
:::
