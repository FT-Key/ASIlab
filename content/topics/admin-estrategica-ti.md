---
title: Administracion Estrategica de TI
emoji: "🚀"
accent: "#7C61D4"
category: admin-estrategica
difficulty: intermedio
order: 10
description: Como la administracion estrategica de TI transforma la tecnologia en ventaja competitiva. Los 3 pilares, alineacion estrategica, FODA y PESTEL aplicados a TI, arquitectura empresarial (TOGAF), gestion del cambio y la cascada estrategia -> PETI -> portafolio -> proyecto. Con ejemplo de Logistica Andina.
tags: [estrategia-TI, ventaja-competitiva, FODA-TI, PESTEL, arquitectura-empresarial, TOGAF, cascada]
keyTakeaway: La administracion estrategica de TI convierte la tecnologia en ventaja competitiva cuando se alinea con el negocio, se analiza con FODA/PESTEL aplicados a TI, se ejecuta en cascada hasta el proyecto y se mide de forma continua.
sources:
  - "TOGAF - The Open Group Architecture Framework|https://www.opengroup.org/togaf|The Open Group|Estandar de arquitectura empresarial"
  - "COBIT 2019|https://www.isaca.org/resources/cobit|ISACA|Gobierno y gestion de TI"
  - "Valor de Negocio en la Administracion de TI (U21)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es la Administracion Estrategica de TI?

:::definition Administracion Estrategica de TI
Proceso continuo de planificacion, implementacion y monitoreo de la tecnologia de informacion alineada con los objetivos estrategicos de la organizacion. Busca maximizar el valor que la TI genera para el negocio.
:::

:::callout info
No es comprar la ultima tecnologia. Es decidir **QUE** tecnologias implementar, **COMO** implementarlas y **PARA QUE** proposito, todo alineado con la estrategia del negocio.
:::

## Los 3 Pilares

:::flow Tres Pilares
- Gobierno de TI: que debemos gobernar (direccion y supervision)
- Gestion de TI: como lo hacemos (procesos y servicios)
- Arquitectura de TI: con que lo construimos (estructura tecnologica)
:::

- **Gobierno de TI** — Define la direccion estrategica, asigna recursos y supervisa el desempeno.
- **Gestion de TI** — Ejecuta los procesos para entregar servicios de calidad.
- **Arquitectura de TI** — Define la estructura tecnologica que soporta el negocio actual y futuro.

## Alineacion Estrategica

| Nivel | Pregunta | Herramienta |
|-------|----------|-------------|
| Estrategico | ¿Para que usamos TI? | PEI, PETI, BSC |
| Tactico | ¿Como implementamos? | Portafolio de proyectos |
| Operativo | ¿Que hacemos dia a dia? | Procesos y SLAs |

:::callout warning
La brecha entre estrategia y operacion es donde fracasan las iniciativas de TI. Un PETI bien estructurado cierra esa brecha (ver el tema de PETI para el detalle de la cascada).
:::

## FODA aplicado a TI

El FODA evalua factores **internos** (Fortalezas y Debilidades) y **externos** (Oportunidades y Amenazas). Aplicado a TI, mira la funcion de tecnologia de la organizacion.

| Factor | Interno/Externo | Ejemplo en TI (Logistica Andina) |
|--------|-----------------|----------------------------------|
| **Fortalezas** | Interno | ERP estable, backups probados, equipo con experiencia |
| **Debilidades** | Interno | Deuda tecnica, sistemas aislados, sin API de integracion |
| **Oportunidades** | Externo | Cloud, IA para ruteo, integracion con e-commerce |
| **Amenazas** | Externo | Ransomware, dependencia de un solo proveedor, obsolescencia |

:::callout danger
El error clasico: confundir una **debilidad** interna (deuda tecnica) con una **amenaza** externa (ransomware). La primera la controla la empresa; la segunda, no.
:::

## PESTEL aplicado a TI

El PESTEL analiza el **entorno externo** desde seis dimensiones. Complementa al FODA para entender el contexto donde TI compite.

| Dimension | Que analiza | Ejemplo en TI (Logistica Andina) |
|-----------|-------------|----------------------------------|
| **Politico** | Politicas y gobierno | Incentivos al comercio electronico y a mipymes |
| **Economico** | Costos, inflacion, tipo de cambio | Costo del combustible y de los servicios cloud |
| **Social** | Tendencias de la sociedad | Crecimiento de compras online y entregas a domicilio |
| **Tecnologico** | Avances tecnologicos | IA, IoT para flotas, 5G |
| **Ecologico** | Medio ambiente | Regulacion de emisiones; presion por flota electrica |
| **Legal** | Leyes y regulaciones | Proteccion de datos personales, normativa laboral |

:::callout idea FODA + PESTEL
El **PESTEL** mira afuera (macro-entorno) y el **FODA** combina adentro y afuera para decidir. Juntos alimentan la estrategia de TI.
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

## De la Estrategia a la Ejecucion (cascada)

La administracion estrategica de TI no termina en el plan: baja en cascada hasta la operacion.

:::flow Cascada estrategica
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de iniciativas
- Programa
- Proyecto
- Operacion (servicio en produccion)
:::

:::callout info
El detalle de la cascada y del BSC de TI se desarrolla en el tema **PETI**. Aqui basta entender que cada proyecto debe rastrearse hasta la estrategia.
:::

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz Admin Estrategica TI - Nivel 1 (memoria)
1. ¿Que es la deuda tecnica? || Prestamos bancarios para TI || Decisiones de corto plazo que generan problemas a largo plazo || El costo de licencias || El presupuesto anual || 1 || Son atajos que ahorran hoy y cuestan mas despues.
2. ¿Cual es el objetivo del benchmarking en TI? || Copiar a la competencia || Comparar procesos con las mejores practicas del sector || Reducir personal || Eliminar proveedores || 1 || Identifica brechas frente a lideres.
3. ¿Que es un portafolio de servicios de TI? || Una lista de computadoras || El conjunto de servicios que TI ofrece al negocio || Un directorio de empleados || Un manual de procedimientos || 1 || Documenta y gestiona los servicios de TI.
4. ¿Cuantos pilares tiene la administracion estrategica de TI? || 2 || 3 || 4 || 5 || 1 || Gobierno, gestion y arquitectura.
5. ¿Que framework es el estandar mas usado de arquitectura empresarial? || ITIL || TOGAF || PMBOK || ISO 9001 || 1 || TOGAF, de The Open Group.
6. ¿Que analiza el PESTEL? || Solo lo interno || El entorno externo (6 dimensiones) || Solo las finanzas || Solo la competencia || 1 || Politico, economico, social, tecnologico, ecologico y legal.
:::

### Nivel 2 - Comprension

:::quiz Admin Estrategica TI - Nivel 2 (comprension)
1. ¿Que diferencia hay entre FODA y PESTEL? || Son iguales || PESTEL mira el macro-entorno externo; FODA combina lo interno y externo || El FODA es solo financiero || El PESTEL es solo interno || 1 || PESTEL = entorno externo; FODA = interno + externo.
2. La deuda tecnica es una: || Oportunidad externa || Debilidad interna || Amenaza externa || Fortaleza interna || 1 || La empresa la controla: es interna.
3. Un ataque de ransomware es: || Una fortaleza || Una debilidad || Una amenaza externa || Una oportunidad || 2 || Viene del entorno y no lo controla la empresa.
4. La alineacion estrategica busca: || Reducir personal || Sincronizar TI con los objetivos del negocio || Comprar hardware || Eliminar el gobierno || 1 || TI alineada con el negocio.
5. ¿Para que sirve el portafolio de servicios de TI? || Para listar empleados || Para priorizar inversiones y gestionar expectativas || Para comprar software || Para auditar cuentas || 1 || Ordena la demanda y prioriza.
6. La gestion del cambio es importante porque: || La tecnologia sola no basta: las personas deben adoptar el cambio || Reduce costos automaticamente || Elimina riesgos || Reemplaza al PETI || 0 || Sin adopcion, la mejor tecnologia falla.
7. ¿Que herramienta sirve para disenar la arquitectura empresarial? || ITIL || TOGAF || PMBOK || PESTEL || 1 || TOGAF.
8. La cascada estrategica termina en: || El proyecto || La operacion (servicio en produccion) || El portafolio || El PETI || 1 || Termina en la operacion del servicio.
:::

### Nivel 3 - Escenarios

:::quiz Admin Estrategica TI - Nivel 3 (escenarios)
1. Logistica Andina tiene sistemas aislados y sin API. En el FODA de TI, esto es: || Fortaleza || Debilidad || Oportunidad || Amenaza || 1 || Es interna y limita: debilidad.
2. La aparicion de IA para ruteo es, para Logistica Andina: || Fortaleza || Debilidad || Oportunidad || Amenaza || 2 || Viene del entorno y se puede aprovechar: oportunidad.
3. Una nueva ley de proteccion de datos es: || Fortaleza || Debilidad || Oportunidad || Amenaza (o factor legal del PESTEL) || 3 || Es un factor externo legal que puede afectar.
4. La empresa quiere comparar su disponibilidad con el lider del sector. ¿Que usa? || Deuda tecnica || Benchmarking || Quick Win || CRM || 1 || Compararse con las mejores practicas es benchmarking.
5. El equipo pospone actualizar un sistema para "salir rapido". ¿Que acumula? || Deuda tecnica || Oportunidad || Fortaleza || KPI || 0 || Ese atajo genera deuda tecnica.
6. Los usuarios rechazan el nuevo sistema. ¿Que se descuido? || La gestion del cambio || La arquitectura || El PESTEL || El presupuesto || 0 || Falto sensibilizar, formar e involucrar.
7. Se decide que el proyecto de API aporta al objetivo del PETI. ¿Que se esta haciendo? || Rastrear el proyecto hasta la estrategia || Gastar presupuesto || Reducir personal || Auditar || 0 || Todo proyecto debe aportar a la estrategia.
8. El directorio define como TI soporta el negocio a 3 anos. ¿Que pilar ejerce? || Gestion || Gobierno || Arquitectura || Operacion || 1 || Definir direccion y supervisar es gobierno.
:::

### Practica guiada

:::sort Ordena la cascada de la estrategia a la ejecucion
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de iniciativas
- Programa
- Proyecto
- Operacion
:::

:::match Relaciona conceptos estrategicos
- Deuda tecnica | Atajos de corto plazo que cuestan a largo plazo
- Benchmarking | Compararse con las mejores practicas del sector
- Portafolio de servicios | Conjunto de servicios que TI ofrece al negocio
- TOGAF | Framework de arquitectura empresarial
- PESTEL | Analisis del entorno externo en 6 dimensiones
- Cascada | Estrategia -> PETI -> portafolio -> proyecto -> operacion
:::

:::truefalse Administracion Estrategica de TI
1. La deuda tecnica es una amenaza externa. || Falso || Es una debilidad interna: la empresa la controla.
2. El PESTEL analiza solo factores internos. || Falso || Analiza el entorno externo (6 dimensiones).
3. TOGAF es el framework mas usado de arquitectura empresarial. || Verdadero || Lo publica The Open Group.
4. La gestion del cambio es opcional si la tecnologia es buena. || Falso || Sin adopcion de las personas, la tecnologia falla.
5. Un ataque de ransomware es una amenaza externa. || Verdadero || Viene del entorno y no se controla directamente.
6. Todo proyecto debe rastrearse hasta la estrategia del PETI. || Verdadero || Si no aporta a la estrategia, no deberia existir.
:::

:::essay Administracion Estrategica de TI
1. Explique como se aplican el FODA y el PESTEL a la estrategia de TI. De un ejemplo de cada cuadrante del FODA y una dimension del PESTEL para una empresa de logistica. || Pista: FODA = interno (F/D) + externo (O/A); PESTEL = entorno externo en 6 dimensiones. || Respuesta modelo: El FODA aplicado a TI evalua factores internos y externos: Fortalezas (ERP estable, equipo capacitado), Debilidades (deuda tecnica, sistemas aislados), Oportunidades (cloud, IA para ruteo) y Amenazas (ransomware, dependencia de un proveedor). El PESTEL complementa analizando el entorno externo: Politico (incentivos al e-commerce), Economico (costo del cloud y combustible), Social (auge de compras online), Tecnologico (IA, IoT, 5G), Ecologico (regulacion de emisiones) y Legal (proteccion de datos). Ambos alimentan la estrategia de TI: el PESTEL da el contexto y el FODA define como aprovechar o defenderse. || [rúbrica: Diferencia FODA y PESTEL, Da ejemplo por cuadrante, Da una dimension PESTEL, Redaccion y claridad]
2. Explique los 3 pilares de la administracion estrategica de TI y como la estrategia baja en cascada hasta la operacion. || Pista: Gobierno, gestion y arquitectura; cascada PETI -> portafolio -> proyecto -> operacion. || Respuesta modelo: Los 3 pilares son Gobierno de TI (define la direccion, asigna recursos y supervisa), Gestion de TI (ejecuta los procesos y entrega servicios) y Arquitectura de TI (define la estructura tecnologica que soporta el negocio actual y futuro). La estrategia baja en cascada: la estrategia corporativa (PEI) se traduce en el PETI, que se organiza en un portafolio de iniciativas, luego en programas y proyectos, y finalmente en servicios en operacion. Asi cada proyecto se rastrea hasta la estrategia y la organizacion cierra la brecha entre el plan y el dia a dia. || [rúbrica: Nombra los 3 pilares, Explica la cascada, Conecta estrategia y operacion, Redaccion y claridad]
:::

:::path Decision estrategica en Logistica Andina
1 | Situacion | Logistica Andina crece 30% anual y los sistemas no escalan. ¿Que haces? | Analizar con FODA/PESTEL y alinear con el PETI=2; Comprar mas servidores sin analisis=3
2 | Alineado | El analisis muestra deuda tecnica y oportunidad en cloud e IA. ¿Que sigue? | Definir objetivos SMART y una hoja de ruta por fases con quick wins=4; Migrar todo de una vez=5
3 | Reactivo | Comprar servidores sin analisis resuelve lo inmediato pero genera costos fijos y subutilizacion. | * | Primero analiza el contexto y alinea con la estrategia.
4 | Estrategico | Defines la vision de TI alineada al PEI, priorizas por impacto y avanzas con pilotos. La estrategia baja en cascada a proyectos medibles. | * | Correcto: analisis, alineacion y ejecucion por fases.
5 | Riesgo alto | Migrar todo de una vez es costoso, interrumpe la operacion y genera resistencia al cambio. | * | Mejor migracion incremental con pilotos controlados.
:::

:::arch gobierno-ti
