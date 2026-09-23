---
title: Mapa de Procesos COBIT 2019
emoji: "🗺️"
accent: "#D4A0E8"
category: gobierno-ti
difficulty: avanzado
order: 12
description: Mapa completo de los 40 objetivos de COBIT 2019 con su nombre y funcion, organizados por dominio (EDM, APO, BAI, DSS, MEA) y su correspondencia con el ciclo PBRM. Incluye interrelaciones con ITIL, ISO 27001 y PMBOK.
tags: [COBIT, mapa-procesos, EDM, APO, BAI, DSS, MEA, PBRM]
keyTakeaway: Los 40 objetivos de COBIT 2019 se reparten en 5 dominios: 5 de gobierno (EDM) y 35 de gestion (APO 14, BAI 11, DSS 6, MEA 4), que siguen el ciclo Plan-Build-Run-Monitor.
sources:
  - "COBIT 2019 Framework: Governance and Management Objectives|https://www.isaca.org/resources/cobit|ISACA|Los 40 objetivos oficiales"
  - "COBIT 2019 Design Guide|https://www.isaca.org/resources/cobit|ISACA|Guia de diseno del sistema de gobierno"
  - "Que es COBIT 2019 (U26)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Estructura del Mapa de Procesos

:::definition Mapa de Procesos COBIT
Taxonomia que organiza los 40 objetivos de gobierno y gestion de TI en 5 dominios. No es un diagrama de flujo: es una clasificacion logica que indica **que** se hace y **en que** dominio.
:::

| Dominio | Tipo | Ciclo PBRM | Objetivos |
|---------|------|------------|-----------|
| EDM | Gobierno | (Gobernanza: Evaluar, Dirigir, Monitorear) | 5 |
| APO | Gestion | Plan | 14 |
| BAI | Gestion | Build | 11 |
| DSS | Gestion | Run | 6 |
| MEA | Gestion | Monitor | 4 |
| **Total** | | | **40** |

## Dominio EDM - Gobierno (5 objetivos)

Es el **unico dominio de gobierno**. Lo ejerce el Consejo/Alta Direccion: evalua, dirige y monitorea.

| Objetivo | Nombre | Funcion |
|----------|--------|---------|
| EDM01 | Asegurar el marco de gobierno | Establecer y mantener el marco de gobierno de TI |
| EDM02 | Asegurar la entrega de beneficios | Optimizar el valor de las iniciativas de TI |
| EDM03 | Asegurar la optimizacion del riesgo | Definir la tolerancia al riesgo y vigilarla |
| EDM04 | Asegurar la optimizacion de los recursos | Usar de forma optima los recursos de TI |
| EDM05 | Asegurar la transparencia | Informar a las partes interesadas |

:::callout warning
EDM no tiene procesos operativos: son actividades del tablero directivo. Si ejecutas EDM01, actúas como **gobierno**, no como gestion.
:::

## Dominio APO - Alinear, Planificar y Organizar (14 objetivos)

Corresponde a la fase **Plan** del PBRM. Alinea TI con el negocio y organiza los recursos.

| Objetivo | Nombre | Funcion clave |
|----------|--------|---------------|
| APO01 | Gestionar el marco de gestion de TI | Politicas, estandares y estructura de gestion |
| APO02 | Gestionar la estrategia | Alinear la estrategia de TI con la del negocio |
| APO03 | Gestionar la arquitectura empresarial | Definir la estructura de TI |
| APO04 | Gestionar la innovacion | Promover la innovacion tecnologica |
| APO05 | Gestionar la cartera | Priorizar programas y proyectos de TI |
| APO06 | Gestionar el presupuesto y los costos | Controlar las finanzas de TI |
| APO07 | Gestionar los recursos humanos | Desarrollar el talento de TI |
| APO08 | Gestionar las relaciones | Relacion con el negocio y stakeholders |
| APO09 | Gestionar los acuerdos de servicio | Definir y mantener SLAs |
| APO10 | Gestionar los proveedores | Administrar relaciones con terceros |
| APO11 | Gestionar la calidad | Asegurar calidad de servicios y procesos |
| APO12 | Gestionar el riesgo | Evaluar y mitigar riesgos |
| APO13 | Gestionar la seguridad | Seguridad de la informacion |
| APO14 | Gestionar los datos | Tratar los datos como activo corporativo |

## Dominio BAI - Construir, Adquirir e Implementar (11 objetivos)

Corresponde a la fase **Build** del PBRM. Construye o adquiere soluciones y las pone en operacion.

| Objetivo | Nombre | Funcion clave |
|----------|--------|---------------|
| BAI01 | Gestionar los programas | Coordinar programas de cambio |
| BAI02 | Gestionar la definicion de requisitos | Capturar necesidades |
| BAI03 | Identificar y construir soluciones | Disenar y construir soluciones |
| BAI04 | Gestionar la disponibilidad y la capacidad | Asegurar recursos suficientes |
| BAI05 | Gestionar el cambio organizacional | Facilitar la adopcion |
| BAI06 | Gestionar los cambios de TI | Controlar cambios en sistemas |
| BAI07 | Gestionar la aceptacion y transicion de cambios | Poner en produccion lo cambiado |
| BAI08 | Gestionar el conocimiento | Capturar y compartir aprendizajes |
| BAI09 | Gestionar los activos | Administrar activos de TI |
| BAI10 | Gestionar la configuracion | Registro exacto de configuraciones |
| BAI11 | Gestionar los proyectos | Ejecutar proyectos de TI |

## Dominio DSS - Entregar, Servir y Soportar (6 objetivos)

Corresponde a la fase **Run** del PBRM. Opera los servicios y atiende a los usuarios.

| Objetivo | Nombre | Funcion clave |
|----------|--------|---------------|
| DSS01 | Gestionar las operaciones | Operar la infraestructura de TI |
| DSS02 | Gestionar las solicitudes de servicio y los incidentes | Atender peticiones y restaurar el servicio |
| DSS03 | Gestionar los problemas | Identificar y resolver la causa raiz |
| DSS04 | Gestionar la continuidad | Asegurar continuidad del negocio |
| DSS05 | Gestionar los servicios de seguridad | Operar controles de seguridad |
| DSS06 | Gestionar los controles de proceso de negocio | Soportar procesos del negocio |

## Dominio MEA - Monitorear, Evaluar y Valorar (4 objetivos)

Corresponde a la fase **Monitor** del PBRM. Mide el desempeno, verifica el cumplimiento y reporta.

| Objetivo | Nombre | Funcion clave |
|----------|--------|---------------|
| MEA01 | Monitorear, evaluar y valorar el desempeno y la conformidad | Medir resultados y cumplimiento |
| MEA02 | Monitorear, evaluar y valorar el sistema de gobierno | Evaluar el propio gobierno |
| MEA03 | Monitorear, evaluar y valorar la conformidad externa | Cumplir leyes y regulaciones |
| MEA04 | Proporcionar aseguramiento | Dar aseguramiento independiente |

### Evaluate vs Assess (Evaluar vs Valorar)

En MEA conviven dos verbos que suenan parecidos pero no son iguales: **Evaluate (Evaluar)** y **Assess (Valorar)**. Uno complementa al otro.

| Aspecto | Evaluate (Evaluar) | Assess (Valorar / evaluar integralmente) |
|---------|--------------------|------------------------------------------|
| Enfoque | Metricó y cuantitativo | Holístico y cualitativo |
| Qué mide | Rendimiento y cumplimiento frente a metas y estándares | Eficacia general, idoneidad y salud del sistema de control/gobierno |
| Pregunta | ¿Cumplimos los objetivos y métricas fijados? | ¿El sistema de control es el adecuado y funciona bien en conjunto? |
| Herramientas | KPIs, métricas de desempeño, indicadores de cumplimiento | Auditorías, revisiones independientes, juicio experto, madurez, entrevistas |
| Frecuencia | Continua o periódica (mensual, trimestral) | Periódica o puntual (anual o ante revisión profunda) |
| Resultado | Un número o indicador (ej. 99.5% de disponibilidad) | Un juicio o conclusión (ej. "el control es adecuado pero falta automatizar") |
| Quién lo hace | Gestores, responsables de TI, equipos operativos | Auditores, consultores externos, comités de gobierno, aseguramiento |
| Palabra clave | **Medir** | **Juzgar** |

:::example Diferencia con un control de contraseñas
**Evaluate:** revisas los registros y ves que el **95%** de usuarios cambió su contraseña en los últimos 90 días (un dato duro). **Assess:** un auditor revisa **cómo** se gestiona el cambio (si el procedimiento está documentado, si hay excepciones, si el sistema fuerza el cambio) y emite un **juicio**: "el control es adecuado, pero hay riesgo en el 5% incumplidor; se recomienda automatizar".
:::

:::callout idea No puedes valorar sin evaluar
Primero **evalúas** (necesitas datos), luego **valoras** (interpretas con criterio). Los números no cuentan toda la historia, y el juicio sin datos es una opinión. Por eso MEA incluye ambos.
:::

## Interrelaciones con Otros Marcos

COBIT se integra con otros marcos: **ITIL** aporta la operacion de servicios, **ISO 27001** la seguridad de la informacion (sus controles "A.") y **PMBOK** la gestion de proyectos.

| COBIT | ITIL | ISO 27001 | PMBOK |
|-------|------|-----------|-------|
| APO11 | Gestion de proyectos | - | Gestion de proyectos |
| APO12 | Gestion de riesgos | A.12 Gestion de riesgos | Gestion de riesgos |
| DSS01 | Entregar y soportar | A.12 Operaciones | - |
| DSS02 | Gestion de incidentes | - | - |
| MEA01 | Monitorear y revisar | A.18 Revision | Monitoreo |

:::callout info
Una misma realidad se ve con tres lentes: COBIT dice **que** gobernar y quien responde (gobierno vs gestion); ITIL dice **como** operar el servicio; PMBOK dice **como** ejecutar el proyecto. No compiten: se complementan.
:::

## Autoevaluacion

### Nivel 1 - Ubicacion de objetivos

:::quiz Mapa COBIT - Nivel 1
1. ¿Cuantos objetivos tiene el dominio APO? || 5 || 11 || 14 || 6 || 2 || APO tiene 14 objetivos.
2. ¿Cuantos objetivos tiene el dominio BAI? || 5 || 6 || 11 || 14 || 2 || BAI tiene 11 objetivos.
3. ¿Cuantos objetivos tiene el dominio DSS? || 4 || 6 || 11 || 14 || 1 || DSS tiene 6 objetivos.
4. ¿Cuantos objetivos tiene el dominio MEA? || 4 || 5 || 6 || 11 || 0 || MEA tiene 4 objetivos.
5. ¿A que fase del PBRM corresponde BAI? || Plan || Build || Run || Monitor || 1 || BAI corresponde a Build.
6. ¿A que fase del PBRM corresponde MEA? || Plan || Build || Run || Monitor || 3 || MEA corresponde a Monitor.
:::

### Nivel 2 - Comprension

:::quiz Mapa COBIT - Nivel 2
1. ¿Que objetivo gestiona la causa raiz de los incidentes? || DSS01 || DSS02 || DSS03 || DSS04 || 2 || DSS03 Gestionar los problemas busca la causa raiz.
2. ¿Que objetivo define la tolerancia al riesgo a nivel de gobierno? || APO12 || EDM03 || DSS05 || MEA01 || 1 || EDM03 Asegurar la optimizacion del riesgo es de gobierno.
3. ¿Que objetivo se encarga de priorizar la cartera de proyectos? || APO05 || BAI11 || DSS06 || MEA02 || 0 || APO05 Gestionar la cartera prioriza programas y proyectos.
4. ¿Que objetivo captura las necesidades del negocio? || BAI02 || BAI03 || APO02 || DSS02 || 0 || BAI02 Gestiona la definicion de requisitos.
5. ¿Que objetivo evalua el propio sistema de gobierno? || MEA01 || MEA02 || MEA03 || MEA04 || 1 || MEA02 evalua el sistema de gobierno.
6. ¿Que objetivo asegura el cumplimiento de leyes y regulaciones externas? || MEA01 || MEA03 || APO13 || DSS05 || 1 || MEA03 cubre la conformidad con requisitos externos.
:::

### Nivel 3 - Casos de empresa

:::quiz Mapa COBIT - Nivel 3
1. En Banco Regional el directorio define la tolerancia al riesgo. ¿Que objetivo es? || EDM03 || APO12 || DSS03 || MEA01 || 0 || EDM03 (gobierno) asegura la optimizacion del riesgo.
2. El equipo de TI construye una nueva app de pagos. ¿Que objetivo aplica directamente? || APO05 || BAI03 || DSS01 || MEA04 || 1 || BAI03 identifica y construye soluciones.
3. La mesa de ayuda recibe un reporte de caida del sistema. ¿Que objetivo aplica primero? || DSS01 || DSS02 || BAI08 || APO09 || 1 || DSS02 gestiona incidentes y solicitudes: restaurar el servicio.
4. Se revisa el SLA con un proveedor de nube. ¿Que objetivo aplica? || APO09 || DSS06 || BAI09 || MEA03 || 0 || APO09 gestiona los acuerdos de servicio.
5. Auditoria interna verifica que TI cumpla la normativa externa. ¿Que objetivo aplica? || MEA02 || MEA03 || EDM05 || APO13 || 1 || MEA03 verifica la conformidad con requisitos externos.
6. El directorio informa a los accionistas el desempeno de TI. ¿Que objetivo aplica? || EDM05 || MEA01 || APO08 || DSS06 || 0 || EDM05 asegura la transparencia con las partes interesadas.
:::

### Practica guiada

:::sort Ordena los dominios COBIT por tipo y ciclo PBRM
- EDM: Gobierno (Evaluar, Dirigir, Monitorear)
- APO: Plan (Alinear, Planificar y Organizar)
- BAI: Build (Construir, Adquirir e Implementar)
- DSS: Run (Entregar, Servir y Soportar)
- MEA: Monitor (Monitorear, Evaluar y Valorar)
:::

:::match Objetivos COBIT y su funcion
- EDM02 | Asegurar la entrega de beneficios
- APO12 | Gestionar el riesgo
- BAI11 | Gestionar los proyectos
- DSS03 | Gestionar los problemas
- MEA04 | Proporcionar aseguramiento
:::

:::truefalse Mapa de Procesos COBIT
1. COBIT 2019 tiene 5 dominios y 40 objetivos. || Verdadero || EDM, APO, BAI, DSS y MEA; 40 objetivos en total.
2. El dominio EDM es operativo. || Falso || EDM es de gobierno: evalua, dirige y monitorea.
3. APO contiene el objetivo de gestion de riesgos. || Verdadero || APO12 Gestionar el riesgo.
4. DSS se enfoca en planificacion. || Falso || DSS se enfoca en entregar y soportar servicios (Run).
5. BAI corresponde a la fase Build del PBRM. || Verdadero || BAI construye, adquiere e implementa.
6. MEA solo audita cuentas financieras. || Falso || MEA mide desempeno, evalua el gobierno y verifica conformidad.
:::

:::essay Mapa de procesos COBIT
1. Explique la diferencia entre Evaluate (Evaluar) y Assess (Valorar) en el dominio MEA y por que se necesitan ambos. || Pista: Uno mide datos duros; el otro emite un juicio con criterio profesional. || Respuesta modelo: Evaluate es métrico y cuantitativo: mide el rendimiento y el cumplimiento frente a metas (ej. 95% de usuarios cambio su contrasena). Assess es holístico y cualitativo: evalua la eficacia e idoneidad del sistema de control con auditorias y juicio experto, y emite una conclusion (ej. "el control es adecuado pero conviene automatizar"). Se necesitan ambos porque no puedes valorar sin evaluar (necesitas datos) y no basta con evaluar (los numeros no cuentan toda la historia). || [rúbrica: Define Evaluate, Define Assess, Explica la complementariedad, Da un ejemplo]
2. Un objetivo de COBIT no tiene claro su dominio. Explique como ubicarlo usando el ciclo PBRM y de un ejemplo con un objetivo de riesgo o de incidentes. || Pista: PBRM = Plan/APO, Build/BAI, Run/DSS, Monitor/MEA; y EDM es gobierno. || Respuesta modelo: Primero se pregunta si la actividad la hace el organo de gobierno (EDM) o la gestion (APO/BAI/DSS/MEA). Si es gestion, se ubica por la fase del PBRM: si alinea y planifica, APO; si construye o adquiere, BAI; si opera y soporta, DSS; si mide y verifica, MEA. Ejemplo: "gestionar los problemas" (causa raiz de incidentes) es Run, por lo tanto DSS03. "Gestionar el riesgo" a nivel de gestion es APO12 (Plan), mientras que asegurar la optimizacion del riesgo a nivel de gobierno es EDM03. || [rúbrica: Usa la distincion gobierno/gestion, Aplica el PBRM, Ubica correctamente los ejemplos, Terminologia correcta]
:::

:::path Ubicar un objetivo en COBIT
1 | Inicio | Te piden clasificar la actividad "identificar y construir una solucion" en el mapa de COBIT. ¿Como lo ubicas? | Es gestion y construye: BAI=2; Es gobierno: EDM=3
2 | Correcto | BAI es la fase Build (Construir, Adquirir e Implementar): corresponde a BAI03. | * | Ubicacion correcta: gobierno es solo EDM.
3 | Error | EDM es gobierno (evaluar, dirigir, monitorear). Construir soluciones es gestion, no gobierno. | * | Repasa: EDM es el unico dominio de gobierno.
:::
