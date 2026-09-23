---
title: Plan Estrategico de TI - PETI
emoji: "🗺️"
accent: "#6DD4A0"
category: gobierno-ti
difficulty: intermedio
order: 4
description: Como disenar, implementar y evaluar un Plan Estrategico de Tecnologias de Informacion (PETI). Alineacion con el PEI, cascada PETI -> portafolio -> proyecto, Balanced Scorecard de TI con KPIs y ejemplo integrador de la empresa ficticia Logistica Andina.
tags: [PETI, plan-estrategico, balanced-scorecard, KPIs, portafolio, cascada-estrategica]
keyTakeaway: El PETI traduce la vision del negocio (PEI) en iniciativas de TI medibles. La cascada PETI -> portafolio -> programa -> proyecto -> operacion convierte la estrategia en ejecucion con KPIs en las 4 perspectivas del BSC de TI.
sources:
  - "COBIT 2019 (APO02 Estrategia y APO05 Cartera)|https://www.isaca.org/resources/cobit|ISACA|Alineacion de TI con el negocio"
  - "The Balanced Scorecard - Kaplan y Norton|https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2|Harvard Business Review|Origen del BSC"
  - "Plan Estrategico de TI PETI (U23)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

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

### Objetivos SMART

**S**pecific, **M**easurable, **A**chievable, **R**elevant, **T**ime-bound.

- **NO SMART:** "Mejorar la TI".
- **SMART:** "Reducir el tiempo de despacho en 15% en 6 meses automatizando el ruteo".

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

## La cascada: del PETI al proyecto

La estrategia no se ejecuta sola: baja en cascada hasta el trabajo diario. Cada nivel tiene su horizonte y su responsable.

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

## Ejemplo integrador: el PETI de Logistica Andina

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

:::quiz PETI - Nivel 1 (memoria)
1. ¿Que es un PETI? || Un tipo de ERP || Un plan que alinea TI con la estrategia del negocio || Una auditoria tecnica || Un contrato de servicio || 1 || El PETI traduce la estrategia del negocio en iniciativas de TI.
2. ¿Con que plan del negocio se alinea el PETI? || Con el PEI || Con el SLA || Con el WMS || Con el CRM || 0 || Se alinea con el Plan Estrategico Institucional (PEI).
3. ¿Cuantas perspectivas tiene el BSC de TI? || 2 || 3 || 4 || 5 || 2 || Financiera, clientes, procesos y aprendizaje.
4. ¿Que es un Quick Win? || Un error comun || Una mejora de bajo esfuerzo y alto impacto || Un tipo de riesgo || Un estandar ITIL || 1 || Genera confianza y momentum para el plan.
5. ¿Cual es el horizonte tipico del PETI? || 1 mes || 6 meses || 3 a 5 anos || 20 anos || 2 || De 3 a 5 anos.
6. ¿Cual es el ultimo eslabon de la cascada estrategica? || El proyecto || El portafolio || La operacion || El programa || 2 || Termina en la operacion (servicio en produccion).
:::

### Nivel 2 - Comprension

:::quiz PETI - Nivel 2 (comprension)
1. ¿Por que el PETI no es una lista de compras? || Porque no incluye TI || Porque responde como la TI ayuda al negocio, no que comprar || Porque no tiene presupuesto || Porque lo hace el proveedor || 1 || El PETI parte de la estrategia del negocio.
2. ¿Que orden sigue la cascada estrategica? || Proyecto -> estrategia -> PETI || Estrategia -> PETI -> portafolio -> programa -> proyecto -> operacion || Operacion -> proyecto -> PETI || Portafolio -> estrategia -> proyecto || 1 || La estrategia baja en cascada hasta la operacion.
3. Un objetivo "mejorar la TI" es incorrecto porque: || Es muy caro || No es medible ni tiene plazo (no es SMART) || Lo dijo el proveedor || No es de TI || 1 || No es especifico, medible ni temporal.
4. ¿Que mide la perspectiva de Procesos del BSC de TI? || La rentabilidad || La eficiencia de los procesos de TI || Las horas de capacitacion || La marca || 1 || Mide disponibilidad, incidentes y automatizacion.
5. ¿Que relacion hay entre portafolio y proyecto? || Son sinonimos || El portafolio agrupa programas e iniciativas que contienen proyectos || El proyecto contiene al portafolio || No se relacionan || 1 || El portafolio agrupa; los proyectos ejecutan.
6. ¿Para que sirve un Quick Win en el PETI? || Para gastar presupuesto || Para generar confianza y momentum con exitos tempranos || Para retrasar el plan || Para eliminar KPIs || 1 || Demuestra valor rapido y sostiene el apoyo.
7. Si un proyecto no se rastrea hasta la estrategia, ¿que implica? || Que es obligatorio || Que probablemente no deberia existir || Que es un quick win || Que es un KPI || 1 || Todo proyecto debe aportar a la estrategia.
8. ¿Que perspectiva del BSC mide la capacitacion del equipo? || Financiera || Clientes || Procesos || Aprendizaje || 3 || El aprendizaje y desarrollo del equipo.
:::

### Nivel 3 - Escenarios

:::quiz PETI - Nivel 3 (escenarios)
1. Logistica Andina quiere crecer 20% en e-commerce. ¿Que debe hacer primero el PETI? || Comprar servidores || Alinear la vision de TI con la estrategia del negocio || Contratar mas personal || Implementar un ERP || 1 || La alineacion con el PEI es el punto de partida.
2. La direccion pide reducir costos de TI 20% y los usuarios piden mas funciones. ¿Que hace el PETI? || Ignorar a los usuarios || Balancear ambos objetivos con priorizacion clara || Reducir personal || Comprar mas licencias || 1 || El PETI prioriza y balancea eficiencia e innovacion.
3. El equipo quiere migrar todo a la nube de una vez. ¿Que recomienda el PETI? || Migracion incremental con pilotos || Migracion total inmediata || No migrar nunca || Comprar servidores || 0 || Se recomienda migracion incremental para reducir riesgo.
4. Se logra una mejora rapida de bajo esfuerzo y alto impacto. ¿Que es? || Un KPI || Un Quick Win || Un riesgo || Una deuda tecnica || 1 || Es un Quick Win.
5. Un KPI de disponibilidad del 99.9% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 2 || La disponibilidad es un proceso de TI.
6. El proyecto de API de integracion aporta directamente a: || Un objetivo del PETI (integracion con e-commerce) || Un objetivo personal || Nada || Al presupuesto || 0 || Cada proyecto debe rastrearse a un objetivo del PETI.
7. La satisfaccion del usuario interno al 85% pertenece a la perspectiva: || Clientes || Procesos || Aprendizaje || Financiera || 0 || Los usuarios son "clientes" internos de TI.
8. El ROI de los proyectos de TI mayor a 20% pertenece a la perspectiva: || Financiera || Clientes || Procesos || Aprendizaje || 0 || El ROI es una medida financiera.
:::

### Practica guiada

:::sort Ordena la cascada estrategica
- Estrategia corporativa (PEI)
- PETI (plan de TI alineado)
- Portafolio de programas e iniciativas
- Programa de proyectos relacionados
- Proyecto con alcance y presupuesto
- Operacion (servicio en produccion)
:::

:::match Relaciona conceptos del PETI
- PETI | Plan que alinea TI con la estrategia del negocio
- PEI | Plan Estrategico Institucional del negocio
- BSC de TI | Tablero con 4 perspectivas de indicadores
- Quick Win | Mejora de bajo esfuerzo y alto impacto
- Cascada | Estrategia -> PETI -> portafolio -> proyecto -> operacion
- KPI | Indicador clave de desempeno con meta
:::

:::truefalse PETI
1. El PETI es una lista de compras de hardware. || Falso || Es un plan que alinea TI con la estrategia del negocio.
2. El PETI se alinea con el PEI de la organizacion. || Verdadero || El PEI es su punto de partida.
3. El BSC de TI tiene 4 perspectivas. || Verdadero || Financiera, clientes, procesos y aprendizaje.
4. Un Quick Win es un proyecto de largo plazo. || Falso || Es una mejora rapida de bajo esfuerzo y alto impacto.
5. Todo proyecto debe rastrearse hasta un objetivo del PETI. || Verdadero || Si no aporta a la estrategia, no deberia existir.
6. Un PETI sin KPIs medibles es solo un documento. || Verdadero || Cada iniciativa necesita indicadores con metas.
:::

:::essay PETI
1. Explique que es un PETI, como se alinea con el PEI y describa la cascada estrategica hasta la operacion. Use el ejemplo de Logistica Andina. || Pista: PEI -> PETI -> portafolio -> programa -> proyecto -> operacion. || Respuesta modelo: El PETI es el plan que traduce la estrategia del negocio (PEI) en iniciativas de TI medibles para un horizonte de 3 a 5 anos. En Logistica Andina, el PEI busca crecer 20% en e-commerce; el PETI responde con una plataforma logistica integrada y ruteo por IA. La cascada baja asi: estrategia corporativa (entregas en menos de 24h) -> PETI (plataforma integrada) -> portafolio (modernizacion, datos, ciberseguridad) -> programa de integracion -> proyecto del API con alcance y presupuesto -> operacion del servicio de rastreo. Cada nivel tiene horizonte y responsable, y todo proyecto debe rastrearse hasta la estrategia. || [rúbrica: Define PETI y PEI, Explica la cascada, Usa el ejemplo de Logistica Andina, Redaccion y claridad]
2. Explique que es el BSC de TI, sus 4 perspectivas y de un KPI con meta para cada una usando un ejemplo. || Pista: Financiera, clientes, procesos y aprendizaje; cada KPI con meta. || Respuesta modelo: El BSC de TI adapta el Balanced Scorecard de Kaplan y Norton para medir TI en 4 perspectivas. Financiera: contribucion a la rentabilidad (ej. ROI de proyectos > 20%). Clientes: percepcion de los usuarios internos (ej. satisfaccion 85%). Procesos: eficiencia de los procesos de TI (ej. disponibilidad 99.9%). Aprendizaje: desarrollo del equipo (ej. 40h de capacitacion por empleado). Asi la gerencia mide el valor de TI en un solo tablero y no solo su costo. || [rúbrica: Define el BSC de TI, Nombra las 4 perspectivas, Da KPI con meta por perspectiva, Redaccion y claridad]
:::

:::path Desarrollo del PETI
1 | Inicio | Logistica Andina necesita su PETI. ¿Por donde empiezas? | Diagnosticar el estado actual de TI y entrevistar a la direccion=2; Comprar tecnologia emergente=3
2 | Diagnostico | El diagnostico revela ERP estable pero sistemas aislados y sin API. ¿Que sigue? | Definir vision y objetivos alineados al PEI y priorizar por impacto=4; Migrar todo a la nube de una vez=5
3 | Tecnologia primero | Investigar IA y cloud es util, pero debe partir de las necesidades del negocio, no de la moda. | * | La tecnologia sirve al negocio, no al reves.
4 | Alineacion | Defines vision, objetivos SMART y KPIs (BSC), priorizas quick wins y armas la cascada PETI -> portafolio -> proyecto. | * | Correcto: estrategia alineada y medible.
5 | Migracion total | Migrar todo de una vez es riesgoso: alto costo, interrupciones y resistencia al cambio. Mejor incremental. | * | Riesgo alto: usa pilotos y avanza por fases.
:::
