---
title: COBIT 2019 - Framework de Gobierno y Gestion
emoji: "🎯"
accent: "#D4A0E8"
category: gobierno-ti
difficulty: avanzado
order: 7
description: Framework COBIT 2019 de ISACA. Distincion entre gobernanza (ciclo EDM) y gestion (ciclo PBRM), los 5 dominios, los 40 objetivos, los 7 componentes del sistema de gobierno, los 6 principios y el modelo de capacidades. Con caso de alineacion negocio-TI.
tags: [COBIT, gobierno-TI, EDM, PBRM, APO, BAI, DSS, MEA, componentes]
keyTakeaway: COBIT 2019 separa la gobernanza (EDM, responsabilidad del Consejo) de la gestion (PBRM: Plan, Build, Run, Monitor = APO, BAI, DSS, MEA) y construye el sistema con 7 componentes que deben funcionar juntos de forma holistica.
sources:
  - "Que es COBIT 2019|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U26"
  - "COBIT 2019 Framework|https://www.isaca.org|ISACA|Marco oficial de gobierno y gestion de TI"
---

## Que es COBIT 2019?

:::definition COBIT 2019
Framework de gobierno y gestion de las tecnologias de informacion de una organizacion, publicado por ISACA. Cubre de forma holistica el gobierno y la gestion de TI, creando valor para las partes interesadas y equilibrando beneficios, optimizacion de recursos y gestion de riesgos.
:::

:::callout info
COBIT 2019 es la evolucion de COBIT 5. Mejora el modelo de diseno de gobierno, las capacidades de proceso y las buenas practicas. No es un manual operativo: es un marco de **que** debe gobernarse y **quien** lo hace.
:::

## Gobernanza vs Gestion: la distincion central

La idea mas importante de COBIT es que **gobernar** y **gestionar** TI son actividades **distintas**, con responsables distintos.

| Aspecto | Gobernanza (EDM) | Gestion (PBRM) |
|---------|------------------|----------------|
| Pregunta que responde | ¿Que debemos lograr y por que? | ¿Como lo hacemos? |
| Responsable | Consejo de Administracion / Alta Direccion | Gerencia ejecutiva / CIO y equipos |
| Ciclo | EDM: Evaluar, Dirigir, Monitorear | PBRM: Plan, Build, Run, Monitor |
| Dominios COBIT | EDM (unico dominio de gobierno) | APO, BAI, DSS, MEA |
| Enfoque | Direccion estrategica, riesgo, valor | Ejecucion, construccion y operacion |

:::callout warning
Error frecuente: delegar decisiones estrategicas al nivel operativo, o microgestionar desde la direccion. La gobernanza **dirige** y **monitorea**; la gestion **planifica, construye, ejecuta y mide** dentro de esa direccion.
:::

## El ciclo EDM (Gobernanza)

EDM es el unico dominio de **gobierno**. Lo lleva a cabo el **Consejo de Administracion o la Alta Direccion**, que es el organo responsable de rendir cuentas. Sus 3 fases:

| Fase | Que hace | Pregunta que responde | Ejemplo |
|------|----------|-----------------------|---------|
| **E - Evaluar** | Analiza necesidades, opciones, riesgos, oportunidades y el desempeno actual y futuro | ¿Estamos donde queremos y que opciones hay? | El directorio evalua si invertir en IA cumple la estrategia y el perfil de riesgo |
| **D - Dirigir** | Define y comunica la direccion, las politicas y las prioridades; asigna responsabilidades | ¿Que se debe hacer y quien responde? | Aprueba la politica de seguridad y nombra al comite de gobierno de TI |
| **M - Monitorear** | Mide el desempeno contra los objetivos, supervisa el cumplimiento y exige rendicion de cuentas | ¿Se esta cumpliendo lo dirigido? | Revisa los reportes de auditoria y pide un plan de mitigacion a la gestion |

:::callout idea
Regla para no equivocarse: si la actividad la hace el Consejo/Alta Direccion (evaluar, dirigir, monitorear), es **gobernanza**. Si la hace el CIO y su equipo (planificar, construir, operar, medir), es **gestion**.
:::

## El ciclo PBRM (Gestion)

La gestion de TI sigue el ciclo **PBRM**: Plan, Build, Run, Monitor. Cada fase corresponde a un dominio de gestion de COBIT.

| Fase PBRM | Dominio | Que busca lograr | Objetivos ejemplo |
|-----------|---------|------------------|-------------------|
| **Plan (Planificar)** | **APO** - Alinear, Planificar y Organizar | Alinear la estrategia de TI con el negocio y organizar los recursos | APO02 Gestionar la estrategia de TI; APO05 Gestionar la cartera de TI |
| **Build (Construir)** | **BAI** - Construir, Adquirir e Implementar | Construir o adquirir soluciones y ponerlas en operacion | BAI03 Identificar y construir soluciones; BAI11 Gestionar los proyectos |
| **Run (Ejecutar)** | **DSS** - Entregar, Servir y Soportar | Operar los servicios y atender a los usuarios dia a dia | DSS01 Gestionar las operaciones; DSS02 Gestionar las solicitudes de servicio |
| **Monitor (Monitorear)** | **MEA** - Monitorear, Evaluar y Valorar | Medir el desempeno, verificar el cumplimiento y reportar al gobierno | MEA01 Monitorear el desempeno y la conformidad; MEA03 Conformidad con requisitos externos |

:::callout info
Mnemotecnia: **P**lan → **A**PO, **B**uild → **B**AI, **R**un → **D**SS, **M**onitor → **M**EA. Las letras iniciales de las fases coinciden con la idea de cada dominio.
:::

## Los 5 Dominios y los 40 Objetivos

| Dominio | Nombre | Tipo | Objetivos |
|---------|--------|------|-----------|
| **EDM** | Evaluar, Dirigir y Monitorear | Gobierno | 5 |
| **APO** | Alinear, Planificar y Organizar | Gestion | 14 |
| **BAI** | Construir, Adquirir e Implementar | Gestion | 11 |
| **DSS** | Entregar, Servir y Soportar | Gestion | 6 |
| **MEA** | Monitorear, Evaluar y Valorar | Gestion | 4 |
| **Total** | | | **40** |

:::callout warning
EDM es el **unico** dominio de gobierno. Los otros cuatro (APO, BAI, DSS, MEA) son de gestion. Si te preguntan "quien gobierna", la respuesta es EDM, no APO.
:::

## Los 7 Componentes del Sistema de Gobierno

COBIT 2019 dice que un sistema de gobierno funciona con **7 componentes** que son "los engranajes que hacen que el modelo funcione en la realidad". No basta con procesos: hay que considerar personas, cultura y politicas.

| # | Componente | Que aporta | Ejemplo |
|---|------------|------------|---------|
| 1 | **Procesos** | Actividades y practicas que transforman entradas en salidas | Gestion de incidentes, gestion de riesgos |
| 2 | **Estructuras organizacionales** | Roles, comites y jerarquia que toman decisiones | Comite de gobierno de TI, responsable de riesgos |
| 3 | **Principios, politicas y frameworks** | Reglas y guias que orientan el comportamiento | Politica de seguridad de la informacion |
| 4 | **Informacion** | Datos y reportes que sostienen la toma de decisiones | Tablero de KPIs, informes de auditoria |
| 5 | **Cultura, etica y comportamiento** | Valores y conductas que se esperan de las personas | Cultura de transparencia y rendicion de cuentas |
| 6 | **Personas, habilidades y competencias** | Talento y formacion del equipo | Capacitacion en gobierno y riesgos de TI |
| 7 | **Servicios, infraestructura y aplicaciones** | Tecnologia que soporta el trabajo | ERP, sistemas de TI, infraestructura |

### Por que un enfoque holistico (sociotecnico)

El sistema de gobierno es **sociotecnico**: la parte social (personas, cultura, etica) y la tecnica (procesos, infraestructura, informacion) deben funcionar juntas. Optimizar solo la infraestructura y los procesos no sirve si las personas no tienen las habilidades o la cultura no acompana.

:::example Dos componentes que explican el enfoque holistico
1. **Cultura, etica y comportamiento**: puedes tener el mejor comite de gobierno (estructura) y los mejores procesos, pero si la cultura premia ocultar errores, el gobierno fracasa. El comportamiento humano es un engranaje real.
2. **Informacion**: sin datos confiables y oportunos, el Consejo no puede evaluar ni monitorear; tomaria decisiones a ciegas. La informacion conecta la gobernanza con la gestion.
:::

## Los 6 Principios del Sistema de Gobierno

Los 6 principios son la base conceptual del sistema (no confundir con los 7 componentes, que son los "engranajes").

### 1. Proporcionar valor a las partes interesadas
El proposito del gobierno es crear valor para los stakeholders, equilibrando **beneficios, riesgo y recursos**. Conecta las necesidades de las partes interesadas con metas empresariales y luego con metas de TI (cascada de metas).

### 2. Enfoque holistico
El sistema funciona solo si los componentes trabajan **juntos**: procesos, estructuras, politicas, informacion, cultura y personas. Optimizar uno aislado no sirve.

### 3. Sistema de gobierno dinamico
El gobierno no es estatico: Evaluar, Dirigir y Monitorear interactuan continuamente con la gestion. Cambios externos (regulaciones, tecnologia) o internos (estrategia) obligan a reajustar.

### 4. Gobierno separado de la gestion
Son actividades **distintas** con responsables **distintos**: el gobierno evalua, dirige y monitorea; la gestion planifica, construye, ejecuta y mide.

### 5. Sistema de gobierno de extremo a extremo (end-to-end)
El gobierno cubre **toda** la organizacion, no solo el area de TI. Los procesos de negocio dependen de TI y viceversa.

### 6. Enfoque basado en informacion
La informacion sostiene las decisiones. Cada proceso produce y consume informacion, por eso es un componente clave.

## Metas en Cascada (Goals Cascade)

:::definition Goals Cascade
Mecanismo de COBIT para traducir las necesidades de las partes interesadas en metas empresariales, luego en metas de TI y finalmente en objetivos de proceso. Garantiza que cada proceso de TI sirva a un objetivo real del negocio.
:::

Ejemplo: el stakeholder quiere "crecer ingresos" → el negocio define "expandir el canal digital" → TI define "e-commerce disponible 24/7" → se activan procesos de continuidad y seguridad (DSS04, APO13).

## Modelo de Diseno de Gobierno

COBIT 2019 no es "una talla unica": los **factores de diseno** determinan como configurar el gobierno segun el contexto.

- **Estrategia empresarial** — Como la organizacion planea competir
- **Metas de valor** — Que buscan lograr los stakeholders
- **Perfil de riesgo** — Tolerancia al riesgo
- **Requisitos de cumplimiento** — Obligaciones legales y regulatorias
- **Tamano de la empresa** — Recursos disponibles
- **Complejidad de TI** — Diversidad de tecnologias
- **Estrategia de TI** — Enfoque centralizado o descentralizado

## Niveles de Capacidad

| Nivel | Nombre | Descripcion |
|-------|--------|-------------|
| 0 | Incompleto | El proceso no se realiza o esta incompleto |
| 1 | Realizado | El proceso se realiza de forma basica |
| 2 | Gestionado | Se planifica, monitorea y mide |
| 3 | Establecido | Esta documentado y estandarizado |
| 4 | Administrado | Se gestiona de forma proactiva |
| 5 | En optimizacion | Se mejora continuamente |

:::callout warning
COBIT 2019 **no exige** alcanzar nivel 5 en todos los procesos. El nivel objetivo depende de las necesidades del negocio y su contexto.
:::

## Caso de estudio: Banco Regional

Banco Regional crecio rapido en banca digital, pero la TI quedo desalineada del negocio: el area de negocio lanza productos sin consultar a TI, no existe un comite de gobierno de TI, los reportes de desempeno nunca llegan al directorio y cada area compra tecnologia por su cuenta. El nuevo CIO debe implementar COBIT para alinear negocio y TI.

| Elemento COBIT | Como se aplica en Banco Regional |
|----------------|----------------------------------|
| Gobernanza (EDM) | El directorio **evalua** el alineamiento estrategico, **dirige** creando el comite de gobierno de TI y **monitorea** con reportes trimestrales |
| Gestion (PBRM) | El CIO **planifica** (APO) el portafolio, **construye** (BAI) las soluciones digitales, **opera** (DSS) los servicios y **mide** (MEA) con KPIs |
| Estructuras (componente 2) | Se crea un comite de gobierno de TI y se definen roles con una matriz RACI |
| Informacion (componente 4) | Se establece un tablero de KPIs que llega al directorio para decidir con datos |
| Cultura, etica y comportamiento (componente 5) | Se promueve transparencia: los incidentes se reportan, no se ocultan |

:::callout success
Resultado esperado: la gobernanza **dirige** (que TI soporte la estrategia) y la gestion **ejecuta** (construir y operar), conectadas por **Estructuras** (comites y roles) e **Informacion** (reportes y KPIs). Asi se cierra la brecha negocio-TI.
:::

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz COBIT 2019 - Nivel 1 (memoria)
1. ¿Cuantos dominios tiene COBIT 2019? || 3 || 4 || 5 || 6 || 2 || Tiene 5 dominios: EDM, APO, BAI, DSS y MEA.
2. ¿Cuantos objetivos de gobierno y gestion tiene COBIT 2019? || 26 || 34 || 40 || 49 || 2 || Tiene 40 objetivos (5 EDM, 14 APO, 11 BAI, 6 DSS, 4 MEA).
3. ¿Cual es el unico dominio de gobierno? || APO || EDM || BAI || MEA || 1 || EDM (Evaluar, Dirigir y Monitorear) es el unico dominio de gobierno.
4. ¿Cuantos componentes tiene el sistema de gobierno? || 5 || 6 || 7 || 9 || 2 || Son 7 componentes: procesos, estructuras, politicas, informacion, cultura, personas y servicios/infraestructura.
5. ¿Cuantos principios tiene el sistema de gobierno de COBIT? || 4 || 5 || 6 || 7 || 2 || Son 6 principios del sistema de gobierno.
6. ¿Cual es el rango de niveles de capacidad en COBIT? || 0-5 || 1-10 || A-F || No tiene escala || 0 || Va del nivel 0 (Incompleto) al 5 (En optimizacion).
:::

### Nivel 2 - Comprension

:::quiz COBIT 2019 - Nivel 2 (comprension)
1. ¿Quien es responsable de llevar a cabo el ciclo EDM? || El CIO y su equipo || El Consejo de Administracion o Alta Direccion || La mesa de ayuda || Los proveedores || 1 || El EDM lo ejerce el organo de gobierno: el Consejo o la Alta Direccion.
2. La fase "Evaluar" del EDM consiste en: || Construir soluciones || Analizar necesidades, opciones, riesgos y desempeno || Operar los servicios || Medir el cumplimiento || 1 || Evaluar es analizar necesidades, opciones, riesgos, oportunidades y desempeno actual y futuro.
3. La fase "Dirigir" del EDM consiste en: || Definir la direccion, politicas, prioridades y responsabilidades || Atender solicitudes de usuarios || Desarrollar software || Auditar cuentas || 0 || Dirigir es fijar la direccion, las politicas y las prioridades y asignar responsabilidades.
4. La fase "Monitorear" del EDM consiste en: || Construir la estrategia || Operar la infraestructura || Medir el desempeno contra objetivos y exigir rendicion de cuentas || Comprar licencias || 2 || Monitorear es medir desempeno, supervisar cumplimiento y exigir cuentas.
5. ¿A que dominio corresponde la fase "Plan" del ciclo PBRM? || APO || BAI || DSS || MEA || 0 || Plan (planificar) corresponde a APO.
6. ¿A que dominio corresponde la fase "Build" (construir) del ciclo PBRM? || APO || BAI || DSS || MEA || 1 || Build corresponde a BAI (Construir, Adquirir e Implementar).
7. ¿A que dominio corresponde la fase "Run" (ejecutar) del ciclo PBRM? || APO || BAI || DSS || MEA || 2 || Run corresponde a DSS (Entregar, Servir y Soportar).
8. ¿Por que COBIT separa el gobierno de la gestion? || Porque son sinonimos || Porque son actividades distintas con responsables distintos || Porque la gestion reemplaza al gobierno || Porque lo exige la ley || 1 || Gobernar y gestionar son actividades diferentes con responsables diferentes.
:::

### Nivel 3 - Casos de empresa

:::quiz COBIT 2019 - Nivel 3 (escenarios)
1. El directorio de Banco Regional evalua si invertir en IA cumple la estrategia y el perfil de riesgo. ¿Que fase del EDM ejecuta? || Evaluar || Dirigir || Monitorear || Construir || 0 || Analizar opciones, riesgos y alineacion estrategica es la fase Evaluar.
2. La gerencia construye una nueva solucion digital. ¿A que dominio de gestion pertenece? || APO || BAI || DSS || MEA || 1 || Construir/adquirir soluciones es BAI.
3. El CIO mide los KPIs de desempeno de TI y verifica el cumplimiento. ¿A que dominio pertenece? || APO || BAI || DSS || MEA || 3 || Medir desempeno y conformidad es MEA.
4. La mesa de ayuda atiende las solicitudes de los usuarios. ¿A que dominio pertenece? || APO || BAI || DSS || MEA || 2 || Operar servicios y atender solicitudes es DSS.
5. Se define el presupuesto y la estrategia de TI alineada al negocio. ¿A que dominio pertenece? || APO || BAI || DSS || MEA || 0 || Alinear, planificar y organizar es APO.
6. En Banco Regional la cultura premia ocultar errores y eso impide que el gobierno funcione. ¿Que componente del sistema falla? || Procesos || Estructuras || Cultura, etica y comportamiento || Servicios e infraestructura || 2 || La conducta y los valores del equipo son el componente de cultura, etica y comportamiento.
:::

### Practica guiada

:::sort Ordena el ciclo PBRM de la gestion de TI
- Plan: APO - Alinear, Planificar y Organizar
- Build: BAI - Construir, Adquirir e Implementar
- Run: DSS - Entregar, Servir y Soportar
- Monitor: MEA - Monitorear, Evaluar y Valorar
:::

:::match Objetivos COBIT y su dominio
- EDM01 | Mantener el marco de gobierno
- APO02 | Gestionar la estrategia de TI
- BAI11 | Gestionar los proyectos
- DSS02 | Gestionar las solicitudes de servicio
- MEA01 | Monitorear el desempeno y la conformidad
:::

:::truefalse COBIT 2019
1. EDM es el unico dominio de gobierno. || Verdadero || Los otros cuatro dominios son de gestion.
2. La fase "Plan" del PBRM corresponde al dominio DSS. || Falso || Plan corresponde a APO; Run corresponde a DSS.
3. El gobierno y la gestion son lo mismo. || Falso || Son actividades distintas con responsables distintos.
4. Los 7 componentes incluyen cultura, etica y comportamiento. || Verdadero || Es uno de los 7 componentes del sistema de gobierno.
5. COBIT exige nivel 5 de capacidad en todos los procesos. || Falso || El nivel objetivo depende del contexto; no es obligatorio llegar a 5.
6. El ciclo EDM lo lleva a cabo la Alta Direccion o el Consejo. || Verdadero || La gobernanza es responsabilidad del organo de gobierno.
:::

:::essay Evaluativo COBIT
1. Explique la funcion principal de la Gobernanza de TI segun COBIT. Detalle que significa el ciclo EDM, quien es el responsable de llevarlo a cabo y el proposito de cada fase. || Pista: Distingue gobernanza de gestion y explica E, D y M una por una. || Respuesta modelo: La gobernanza de TI asegura que TI cree valor y se alinee con la estrategia, equilibrando beneficios, riesgo y recursos. El ciclo EDM es su forma de operar: Evaluar (analizar necesidades, opciones, riesgos y desempeno actual y futuro), Dirigir (definir direccion, politicas, prioridades y asignar responsabilidades) y Monitorear (medir desempeno contra objetivos y exigir rendicion de cuentas). El responsable es el Consejo de Administracion o la Alta Direccion, que no delega la accountability. || [rubrica: Comprension conceptual, Aplicacion y relacion, Terminologia tecnica, Redaccion y claridad]
2. Describa el ciclo PBRM que rige la Gestion de TI. Relacione cada una de las cuatro fases con su dominio (APO, BAI, DSS, MEA) y explique que busca lograr cada una. || Pista: P-B-R-M en orden y con su dominio. || Respuesta modelo: La gestion sigue el ciclo PBRM. Plan (APO) alinea la estrategia de TI con el negocio y organiza recursos. Build (BAI) construye o adquiere soluciones y las pone en operacion. Run (DSS) opera los servicios y atiende a los usuarios. Monitor (MEA) mide el desempeno, verifica el cumplimiento y reporta al gobierno. || [rubrica: Comprension conceptual, Aplicacion y relacion, Terminologia tecnica, Redaccion y claridad]
3. Explique por que los 7 componentes exigen un enfoque holistico (personas, cultura y politicas) y no solo infraestructura y procesos. Ejemplifique con dos componentes. || Pista: El sistema es sociotecnico; da dos componentes concretos. || Respuesta modelo: El sistema de gobierno es sociotecnico: la parte social (personas, cultura, etica) y la tecnica (procesos, informacion, infraestructura) deben funcionar juntas. Ejemplo 1: cultura, etica y comportamiento: sin una cultura de transparencia, los mejores procesos fallan porque los errores se ocultan. Ejemplo 2: informacion: sin datos confiables el Consejo no puede evaluar ni monitorear y decide a ciegas. Optimizar solo infraestructura y procesos deja el sistema incompleto. || [rubrica: Comprension conceptual, Aplicacion y relacion, Terminologia tecnica, Redaccion y claridad]
4. Una organizacion quiere implementar COBIT para resolver la desalineacion entre negocio y TI. Explique como deberian interactuar la Alta Direccion (Gobernanza) y la Gerencia/CIO (Gestion) usando los componentes "Estructuras" e "Informacion". || Pista: Gobernanza dirige; gestion ejecuta; conectalas con comites/roles y con reportes/KPIs. || Respuesta modelo: La Alta Direccion (gobernanza) evalua el alineamiento, dirige creando el comite de gobierno de TI y monitorea con reportes. La Gerencia/CIO (gestion) planifica, construye, opera y mide dentro de esa direccion. El componente Estructuras aporta el comite de gobierno y los roles definidos (RACI) que conectan ambos niveles. El componente Informacion aporta el tablero de KPIs y los informes que fluyen de la gestion al gobierno y permiten decidir con datos. Asi la gobernanza dirige y la gestion ejecuta, conectadas por estructuras e informacion. || [rubrica: Comprension conceptual, Aplicacion y relacion, Terminologia tecnica, Redaccion y claridad]
:::

:::path Diagnostico COBIT en Banco Regional
1 | Inicio | Banco Regional tiene TI desalineada del negocio y no existe comite de gobierno de TI. ¿Cual es el primer paso segun COBIT? | Fortalecer la gobernanza con el directorio (EDM)=2; Encargar al area de TI que compre mas tecnologia=3
2 | Gobernanza primero | Correcto: la gobernanza (EDM) evalua, dirige y monitorea; el directorio crea el comite y fija la direccion. ¿Que sigue? | Conectar gobernanza y gestion con Estructuras e Informacion=4; Que cada gerencia decida por su cuenta=5
3 | Error de enfoque | Comprar tecnologia sin gobernanza repite la desalineacion: no hay direccion ni prioridades. | * | La desalineacion es de gobierno, no de tecnologia.
4 | Alineacion | Defines el comite de gobierno (Estructura) y un tablero de KPIs que llega al directorio (Informacion). La gestion ejecuta el PBRM dentro de esa direccion. | * | Solucion alineada con COBIT: gobernanza dirige, gestion ejecuta, conectadas por estructuras e informacion.
5 | Silos | Sin direccion comun, cada area optimiza su parte y la desalineacion negocio-TI se mantiene. | * | Riesgo alto: la gestion sin gobernanza no corrige la brecha.
:::
