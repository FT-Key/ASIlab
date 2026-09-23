---
title: ITIL 4 - Gestión de Servicios de TI
emoji: "⚙️"
accent: "#7CB3E8"
category: Gobierno de TI
difficulty: intermedio
order: 6
unit: "Gobierno de TI y Marcos de Referencia"
description: Marco de referencia ITIL 4 para la gestión de servicios de TI. Evolución desde ITIL v3, el Sistema de Valor de Servicio (SVS), la cadena de valor, las 4 dimensiones, los 7 principios guía, las 34 prácticas, la mejora continua y casos de empresa reales.
tags: [ITIL, gestion-servicios, SVS, practicas, co-creacion-valor, CSI]
keyTakeaway: ITIL 4 no es un cambio de nombre de ITIL v3. Pasa de procesos y ciclo de vida a prácticas y Sistema de Valor de Servicio, donde el valor se co-crea con el consumidor y se integra con Agile, Lean y DevOps.
sources:
  - "ITIL 4 Foundation|https://www.axelos.com/certifications/itil-service-management|Axelos|Marco oficial de gestión de servicios de TI"
  - "PeopleCert - ITIL 4|https://www.peoplecert.org/|PeopleCert|Certificación oficial ITIL 4"
  - "Que es ITIL (U25)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es ITIL 4?

:::definition ITIL 4
Marco de referencia (no una norma obligatoria) para la gestión de servicios de información y tecnología. Da guía práctica para que una organización gestione sus servicios, cree valor para los stakeholders y se adapte a un entorno digital cambiante.
:::

:::callout info
ITIL es un marco de **buenas prácticas**: no certifica a la empresa ni impone pasos obligatorios. Su valor esta en el vocabulario comun y en las prácticas probadas que propone. La certificación oficial es individual (ITIL 4 Foundation) y la administra PeopleCert/Axelos.
:::

## ITIL v3 vs ITIL 4: no es un cambio de nombre

Muchas organizaciones usan ITIL v3 (o su versión 2011) y creen que ITIL 4 es solo una actualización cosmetic. No lo es: cambia la forma de pensar el servicio.

| Aspecto | ITIL v3 / 2011 | ITIL 4 |
|---------|----------------|--------|
| Unidad central | **Procesos** agrupados en un **ciclo de vida** | **Prácticas** dentro del **Sistema de Valor de Servicio (SVS)** |
| Cantidad | 26 procesos | 34 prácticas de gestión |
| Modelo operativo | Ciclo de vida de 5 etapas (Estrategia, Diseño, Transición, Operación, Mejora) | Cadena de valor de 6 actividades |
| Origen del valor | El proveedor **entrega** valor al cliente | El valor se **co-crea** entre proveedor y consumidor |
| Metodologías | Enfoque tipo waterfall | Integra **Agile, Lean y DevOps** |
| Gobierno | Procesos separados del resto | Gobierno y controles **dentro** del SVS |
| Mejora | Mejora continua del servicio (CSI) como etapa | Mejora continua como **componente transversal** del SVS |

:::callout warning
El responsable de TI que dice "tenemos 26 procesos documentados y funcionan, ITIL 4 es lo mismo" comete dos errores: (1) confunde procesos con prácticas, y (2) ignora que el exito ya no se mide por procesos cumplidos sino por **valor co-creado con el cliente**.
:::

### Por que la migración es un cambio de paradigma

1. **De procesos a prácticas**: un proceso es un conjunto de actividades; una práctica es "un conjunto de recursos organizacionales diseñados para realizar un trabajo o lograr un objetivo". Una práctica incluye personas, tecnología, información y proveedores; es más amplia y flexible que un proceso.
2. **Integración con Agile, Lean y DevOps**: ITIL 4 reconoce que el software se construye hoy con iteraciones, flujo continuo y automatización. No obliga a un único método: se combina con ellos.
3. **Del ciclo de vida al SVS**: ya no se piensa en etapas rigidas y secuenciales, sino en un sistema donde todo esta conectado y el valor fluye en cualquier dirección.

## El Sistema de Valor del Servicio (SVS)

:::definition SVS (Service Value System)
Modelo que describe como TODOS los componentes y actividades de una organización trabajan juntos para facilitar la **co-creación de valor**. Toma una demanda u oportunidad como entrada y produce valor como salida.
:::

:::flow 5 Componentes del SVS
- Estrategia de Servicio (que servicios ofrecer y hacia donde ir)
- Cadena de Valor del Servicio (como transformar la demanda en valor)
- Prácticas de Gestión (recursos y procesos para hacer el trabajo)
- Gobierno y Controles (dirección, evaluación y monitoreo)
- Mejora Continua (evolución constante, presente en todo el SVS)
:::

La entrada del SVS son **demandas y oportunidades** (un cliente necesita algo). La salida es **valor** para el consumidor, la organización y otras partes interesadas. El SVS no es un organigrama: es un modelo mental para no perder de vista que todo lo que hace TI debe terminar en valor.

## La Cadena de Valor del Servicio

Es el modelo operativo del SVS: **6 actividades** que transforman entradas en salidas.

| Actividad | Que hace | Ejemplo en una tienda online |
|-----------|----------|------------------------------|
| **Planificar** | Alinear la cadena con la estrategia | Definir el catalogo de servicios digitales |
| **Mejorar** | Mejora continua en toda la cadena | Reducir el tiempo de carga de la web |
| **Involucrar (Engagement)** | Interactuar con usuarios y stakeholders | Soporte al cliente, solicitudes, quejas |
| **Diseñar y Transicionar** | Crear o modificar servicios | Nuevo portal de pagos |
| **Obtener / Construir** | Comprar o desarrollar componentes | Licencias cloud o desarrollo interno |
| **Entregar y Soportar** | Operar el servicio y dar soporte | Mantenimiento y soporte L1/L2/L3 |

:::callout info
La cadena de valor **NO es lineal ni secuencial**. Las actividades se combinan de forma iterativa y paralela, igual que un equipo ágil. Un **flujo de valor** es la secuencia concreta de pasos que sigue una demanda hasta convertirse en valor (ejemplo: "de solicitud a servicio entregado").
:::

:::example Flujo de valor de una compra online
Cliente pide soporte (Involucrar) → se diseña una mejora del checkout (Diseñar y Transicionar) → se construye el cambio (Obtener/Construir) → se despliega (Entregar y Soportar) → se mide la mejora (Mejorar). El valor no aparece en un solo paso: se co-crea a lo largo de todo el flujo.
:::

## Servicios y co-creación de valor

:::definition Servicio (ITIL 4)
Medio para habilitar la creación de valor **co-creado con el consumidor**, sin que este tenga que asumir costos o riesgos específicos.
:::

:::definition Oferta de Servicio (Service Offering)
Paquete formal que la organización presenta al cliente. Incluye uno o más servicios y productos, combinados para atender una necesidad concreta (ejemplo: plan de internet + router + soporte 24/7).
:::

La **co-creación de valor** significa que el proveedor no "entrega" valor en una caja: el valor se define y se realiza **junto con** el consumidor. Un sistema puede funcionar "segun lo especificado" y aun asi no generar valor si el cliente no puede usarlo para mejorar su negocio.

| Concepto | Que es | Ejemplo |
|----------|--------|---------|
| **Output (salida)** | El producto o servicio creado | Instalar un nuevo software de gestión |
| **Outcome (resultado)** | El beneficio real que genera | Procesar datos 30% más rapido y con menos errores |

:::callout warning
Cumplir el alcance, el tiempo y el presupuesto **no garantiza** valor. Ese es el error clásico del caso de Tienda Andina: el proyecto "salio bien" en plazo y costo, pero el cliente no puede comprar con comodidad y el negocio pierde ventas.
:::

## Las 4 Dimensiones de ITIL

Las dimensiones son perspectivas que deben equilibrarse en **toda** decisión sobre servicios. Si ignoras una, el servicio falla.

| Dimensión | Que abarca | Ejemplo |
|-----------|------------|---------|
| **Organización y Personas** | Estructura, roles, cultura, habilidades | Equipo de TI, capacitación, comunicación |
| **Información y Tecnología** | Datos, conocimiento, herramientas, plataformas | ServiceNow, Jira, SAP, base de datos de configuración |
| **Socios y Proveedores** | Relaciones con terceros, contratos, SLA | SLA con Microsoft, AWS, proveedor de red |
| **Flujos de Valor y Procesos** | Actividades y flujos organizados para entregar valor | Gestión de incidentes, cambios, solicitudes |

:::callout warning
Enfocarse solo en tecnología ignorando personas, información y proveedores es la causa #1 de fracaso en servicios de TI. Las 4 dimensiones se analizan juntas.
:::

## Los 7 Principios Guía de ITIL 4

Son recomendaciones universales que orientan cualquier decisión, en cualquier nivel de la organización.

| # | Principio | Que significa | Ejemplo | Si se ignora |
|---|-----------|---------------|---------|--------------|
| 1 | **Centrarse en el valor** | Todo lo que se haga debe crear valor para el negocio y el cliente | Medir la experiencia del usuario, no solo las tareas hechas | Se entrega "lo especificado" que nadie usa |
| 2 | **Empezar donde estas** | No reinventar la rueda; evaluar el contexto actual y reutilizar | Aprovechar el sistema de tickets que ya existe | Se gasta en reemplazar lo que funcionaba |
| 3 | **Avanzar de forma iterativa con retroalimentación** | Avanzar en ciclos pequeños, midiendo cada paso | Mejorar el checkout en sprints con pruebas A/B | Grandes cambios costosos sin validar |
| 4 | **Colaborar y promover la visibilidad** | Trabajar con otros y hacer transparente el estado | Tablero de control con estado, riesgos y dependencias | Silos, sorpresas y decisiones a ciegas |
| 5 | **Pensar y trabajar de forma integral** | Evitar el trabajo en silos; el servicio es un todo | Nadie optimiza su area a costa de otra | Se optimiza una parte y se rompe el conjunto |
| 6 | **Mantenerlo simple y práctico** | Procesos simples, eliminar lo que no agrega valor | Un solo formulario de cambio para cambios menores | Tramites que frenan al equipo |
| 7 | **Optimizar y automatizar** | Mejorar continuamente y automatizar donde aporte | Automatizar aprobación de cambios de bajo riesgo | Trabajo manual repetitivo y errores |

:::callout idea
Los principios guía se aplican **juntos**, no de a uno. Ante un caso, preguntate: ¿esto crea valor? ¿estoy partiendo de lo que ya existe? ¿lo puedo validar en ciclos? ¿es visible para todos? ¿es simple? ¿se puede automatizar?
:::

## Prácticas de ITIL 4 (34 Prácticas)

Una práctica es un conjunto de recursos organizacionales (personas, tecnología, información, proveedores) para realizar un trabajo. ITIL 4 agrupa las **34 prácticas** en 3 familias. Conviene conocerlas todas: en una evaluación pueden pedirte reconocer cual pertenece a cada familia o cual resuelve un problema.

**Prácticas generales (14)** — aplicables a toda la organización:

1. Gestión de la arquitectura (architecture management)
2. Mejora continua (continual improvement)
3. Gestión de la seguridad de la información (information security management)
4. Gestión del conocimiento (knowledge management)
5. Medición y reporte (measurement and reporting)
6. Gestión del cambio organizacional (organizational change management)
7. Gestión del portafolio (portfolio management)
8. Gestión de proyectos (project management)
9. Gestión de relaciones (relationship management)
10. Gestión de riesgos (risk management)
11. Gestión financiera de servicios (service financial management)
12. Gestión de la estrategia (strategy management)
13. Gestión de proveedores (supplier management)
14. Gestión de la fuerza laboral y el talento (workforce and talent management)

**Prácticas de servicio (17)** — aplicables a los servicios concretos:

1. Gestión de la disponibilidad (availability management)
2. Análisis de negocio (business analysis)
3. Gestión de la capacidad y el rendimiento (capacity and performance management)
4. Habilitacion del cambio (change enablement)
5. Gestión de incidentes (incident management)
6. Gestión de activos de TI (IT asset management)
7. Monitoreo y gestión de eventos (monitoring and event management)
8. Gestión de problemas (problem management)
9. Gestión de versiones (release management)
10. Gestión del catalogo de servicios (service catalogue management)
11. Gestión de la configuración de servicios (service configuration management)
12. Gestión de la continuidad del servicio (service continuity management)
13. Diseño de servicios (service design)
14. Mesa de servicio (service desk)
15. Gestión de niveles de servicio (service level management)
16. Gestión de solicitudes de servicio (service request management)
17. Validación y pruebas de servicios (service validation and testing)

**Prácticas técnicas (3)** — adaptadas de dominios de tecnología:

1. Gestión del despliegue (deployment management)
2. Gestión de la infraestructura y plataformas (infrastructure and platform management)
3. Desarrollo y gestión de software (software development and management)

### Prácticas clave que debes diferenciar

| Práctica | Objetivo principal | Ejemplo |
|----------|--------------------|---------|
| **Gestión de Incidentes** | Restaurar el funcionamiento normal **lo más rapido posible** y minimizar el impacto | Se cae la web: se reinicia el servicio y se atiende al cliente |
| **Gestión de Problemas** | Encontrar y eliminar la **causa raíz** de los incidentes recurrentes | Tras varias caidas, se descubre un bug de memoria y se corrige |
| **Gestión de Cambios** | Evaluar, aprobar y programar cambios con riesgo controlado | Cambios estándar se automatizan; los de alto impacto pasan por comite |
| **Gestión de Solicitudes de Servicio** | Atender peticiones de usuarios (no fallas) | Pedir acceso a una carpeta, instalar una aplicación |
| **Gestión de la Disponibilidad** | Asegurar que el servicio este disponible cuando se necesita | Cumplir el 99.95% de disponibilidad acordado |

:::callout success
ITIL 4 **no exige** implementar las 34 prácticas. Cada organización selecciona las que mejor se adapten a su contexto. Lo importante es entender que práctica resuelve que problema.
:::

## Mejora Continua

La mejora continua es un componente del SVS que atraviesa todo. ITIL 4 la organiza en un **modelo de 7 pasos** (las primeras 4 son las preguntas clasicas):

:::flow Modelo de mejora continua de ITIL 4 (7 pasos)
- 1. ¿Cual es la visión? (que queremos lograr)
- 2. ¿Donde estamos ahora? (estado actual medido)
- 3. ¿Donde queremos estar? (meta concreta)
- 4. ¿Como llegamos ahi? (plan de acciones)
- 5. Tomar acción (ejecutar el plan)
- 6. ¿Llegamos? (medir si se cumplio la meta)
- 7. ¿Como mantenemos el impulso? (estandarizar y mejorar de nuevo)
:::

## Casos de estudio

### Caso 1: Tienda Andina (retail)

Tienda Andina lanzo una nueva plataforma de comercio electronico. El proyecto **terminó a tiempo y dentro del presupuesto**, y el equipo de desarrollo afirma que el sistema "funciona segun lo especificado". Sin embargo, los clientes reportan una experiencia de compra confusa y lenta, y el negocio esta perdiendo ventas. La dirección piensa invertir en una costosa reingeniería de la interfaz.

:::callout danger
Esto es un **fracaso en la co-creación de valor**: se cumplio el alcance, pero el cliente no puede obtener valor. No se aplicaron bien los principios de centrarse en el valor, colaborar y promover la visibilidad, ni avanzar de forma iterativa con retroalimentación. La solución no es gastar a ciegas: es medir la experiencia del usuario, realinear el flujo de valor y validar cada mejora en ciclos.
:::

### Caso 2: NubeNova (proveedor de servicios cloud)

NubeNova ve caer la satisfacción de sus clientes: el tiempo de resolución de incidentes subio 40% en un trimestre. El equipo esta bien capacitado y usa herramientas de monitoreo de última generación, pero la documentación de procedimientos esta desactualizada, los SLA no se revisan desde hace dos años y los clientes dicen que la comunicación durante las interrupciones es confusa y poco empatica.

| Dimensión | Deficiencia | Acción correctiva |
|-----------|-------------|-------------------|
| Organización y Personas | Comunicación poco empatica con el cliente | Capacitar al equipo en comunicación de crisis y asignar un responsable de información |
| Información y Tecnología | Documentación de procedimientos desactualizada | Base de conocimiento viva, revisada y versionada |
| Socios y Proveedores | SLA sin revisar desde hace dos años | Revisar y renegociar SLA segun la realidad del servicio |
| Flujos de Valor y Procesos | No hay un flujo claro de escalamiento y resolución | Redisenar el flujo de incidentes y medir tiempos por etapa |

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz ITIL 4 - Nivel 1 (memoria)
1. ¿Cuantas dimensiones tiene ITIL 4? || 2 || 3 || 4 || 5 || 2 || Son 4: Organización y Personas, Información y Tecnología, Socios y Proveedores, y Flujos de Valor y Procesos.
2. ¿Cuantas prácticas de gestión tiene ITIL 4? || 26 || 30 || 34 || 40 || 2 || ITIL 4 tiene 34 prácticas (14 generales, 17 de servicio, 3 técnicas).
3. ¿Cuantas actividades tiene la Cadena de Valor del Servicio? || 4 || 5 || 6 || 7 || 2 || Son 6: Planificar, Mejorar, Involucrar, Diseñar y Transicionar, Obtener/Construir, y Entregar y Soportar.
4. ¿Cuantos componentes tiene el SVS? || 3 || 4 || 5 || 6 || 2 || El SVS tiene 5 componentes: Estrategia de Servicio, Cadena de Valor, Prácticas, Gobierno y Controles, y Mejora Continua.
5. ¿Cuantos principios guía tiene ITIL 4? || 4 || 5 || 7 || 9 || 2 || Tiene 7 principios guía.
6. ¿Que reemplaza ITIL 4 respecto a ITIL v3? || El ciclo de vida por el SVS || Los procesos por areas de conocimiento || Las prácticas por herramientas || El gobierno por auditoría || 0 || ITIL 4 reemplaza el ciclo de vida del servicio por el Sistema de Valor del Servicio (SVS).
:::

### Nivel 2 - Comprensión

:::quiz ITIL 4 - Nivel 2 (comprensión)
1. ¿Cual de los siguientes NO es uno de los 7 principios guía de ITIL 4? || Centrarse en el valor || Externalizar para optimizar || Avanzar de forma iterativa con retroalimentación || Mantenerlo simple y práctico || 1 || "Externalizar para optimizar" no existe. El principio es "Optimizar y automatizar".
2. En ITIL 4, el Sistema de Valor del Servicio (SVS) se describe como: || Un modelo que describe como todos los componentes y actividades trabajan juntos para la co-creación de valor || Un conjunto de 26 procesos del ciclo de vida || Una herramienta de software para incidentes || Un modelo de madurez de 5 niveles || 0 || El SVS explica como todo el sistema coopera para co-crear valor a partir de una demanda.
3. La co-creación de valor se logra cuando: || El proveedor define el valor de forma unilateral || El valor se define y se realiza conjuntamente entre proveedor y consumidor || El valor se mide solo por el ROI || El valor se entrega solo con automatización || 1 || El valor no se entrega: se co-crea junto con el consumidor.
4. La transición de ITIL v3 a ITIL 4 implica pasar de un enfoque basado en: || Procesos a un enfoque basado en prácticas || Servicios a productos || Mejora continua a proyectos || Personas a tecnología || 0 || El cambio central es de procesos (v3) a prácticas (v4).
5. ¿Que actividad de la cadena de valor se encarga de operar el servicio en producción? || Planificar || Diseñar y Transicionar || Entregar y Soportar || Mejorar || 2 || Entregar y Soportar opera el servicio y da soporte.
6. ¿Cual es la diferencia principal entre gestión de incidentes y gestión de problemas? || El incidente busca la causa raíz y el problema restaura el servicio || El incidente restaura el servicio rapido y el problema busca la causa raíz || Ambos son sinonimos || El incidente solo aplica a hardware || 1 || El incidente restaura el servicio cuanto antes; el problema elimina la causa raíz.
7. Segun ITIL 4, combinar Agile para el desarrollo con gobernanza tradicional para los cambios es: || Incorrecto, ITIL 4 exige un único método || Posible, porque ITIL 4 se integra con Agile, Lean y DevOps || Desaconsejable, son incompatibles || Obligatorio en todos los servicios || 1 || ITIL 4 esta diseñado para integrarse con enfoques modernos.
8. ¿Que dimensión cubre los contratos y relaciones con terceros? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Flujos de Valor y Procesos || 2 || Socios y Proveedores cubre contratos, SLA y relaciones con terceros.
:::

### Nivel 3 - Casos de empresa

:::quiz ITIL 4 - Nivel 3 (escenarios)
1. Tienda Andina entrego su e-commerce a tiempo y en presupuesto, pero los clientes reportan una compra confusa y lenta y el negocio pierde ventas. ¿Que principio se descuido principalmente? || Centrarse en el valor || Empezar donde estas || Mantenerlo simple y práctico || Optimizar y automatizar || 0 || Se cumplio el alcance pero no se genero valor para el cliente: fallo "Centrarse en el valor".
2. En NubeNova la documentación de procedimientos esta desactualizada. ¿Que dimensión se ve afectada? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Finanzas y Presupuesto || 1 || La documentación y el conocimiento son parte de Información y Tecnología.
3. En NubeNova los SLA no se revisan desde hace dos años. ¿Que dimensión es la causa raíz? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Flujos de Valor y Procesos || 2 || Los SLA pertenecen a la gestión de Socios y Proveedores.
4. Los clientes de NubeNova reportan comunicación confusa y poco empatica durante las caidas. ¿Que dimensión falla? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Gobierno y Controles || 0 || La comunicación y la cultura del equipo son parte de Organización y Personas.
5. Un panel de control que muestra estado, riesgos y dependencias de un proyecto es un ejemplo del principio de: || Centrarse en el valor || Colaborar y promover la visibilidad || Mantenerlo simple y práctico || Optimizar y automatizar || 1 || Un tablero compartido hace visible el estado para todos: visibilidad.
6. Una empresa automatiza la aprobación de cambios de bajo riesgo y reserva un comite para los de alto impacto. Esto refleja el principio de: || Centrarse en el valor || Avanzar de forma iterativa || Mantenerlo simple y práctico || Optimizar y automatizar || 3 || Se automatiza lo repetitivo y se deja control humano para lo riesgoso: optimizar y automatizar.
:::

### Práctica guiada

:::sort Ordena los 7 principios guía de ITIL 4
- Centrarse en el valor
- Empezar donde estas
- Avanzar de forma iterativa con retroalimentación
- Colaborar y promover la visibilidad
- Pensar y trabajar de forma integral
- Mantenerlo simple y práctico
- Optimizar y automatizar
:::

:::match Prácticas y dimensiones de ITIL 4
- Gestión de Incidentes | Restaurar el servicio lo más rapido posible
- Gestión de Problemas | Encontrar y eliminar la causa raíz
- Socios y Proveedores | Contratos y SLA con terceros
- Información y Tecnología | Datos, conocimiento y herramientas
- Cadena de Valor | 6 actividades que transforman demanda en valor
:::

:::truefalse ITIL 4
1. El SVS tiene 4 componentes. || Falso || El SVS tiene 5 componentes. Lo que tiene 4 son las dimensiones.
2. ITIL 4 tiene 34 prácticas de gestión. || Verdadero || 14 generales, 17 de servicio y 3 técnicas.
3. La gestión de incidentes busca la causa raíz. || Falso || Eso es la gestión de problemas. El incidente restaura el servicio rapido.
4. La cadena de valor es lineal y estrictamente secuencial. || Falso || Sus actividades se combinan de forma iterativa y paralela.
5. ITIL 4 se integra con Agile, Lean y DevOps. || Verdadero || Es uno de sus cambios de paradigma frente a v3.
6. La co-creación implica que el proveedor define el valor de forma unilateral. || Falso || El valor se define y se realiza conjuntamente con el consumidor.
:::

:::essay Análisis de casos ITIL 4
1. Analiza por que el caso de Tienda Andina representa un fracaso en la co-creación de valor. Identifica al menos 3 principios guía descuidados y propone una solución realineada con el flujo de valor. || Pista: Cumplir alcance no es generar valor; piensa en medición, colaboración y ciclos. || Respuesta modelo: El valor se co-crea con el cliente; entregar "segun lo especificado" sin que el usuario pueda comprar bien no genera valor. Principios descuidados: centrarse en el valor (no se midio la experiencia), colaborar y promover la visibilidad (no se involucro al usuario ni al negocio), y avanzar de forma iterativa con retroalimentación (se hizo una entrega grande sin validar). Solución: medir la experiencia de compra, priorizar mejoras por impacto, validarlas en ciclos con pruebas reales y realinear el flujo de valor de la compra. || [rúbrica: Explica co-creación de valor, Identifica 3 principios correctos, Propone solución con flujo de valor, Usa terminología ITIL]
2. Explica las diferencias fundamentales entre ITIL v3 e ITIL 4 abordando el paso de procesos a prácticas, la incorporación de Agile/Lean/DevOps y el cambio del ciclo de vida al SVS. || Pista: No es un cambio de nombre, es un cambio de paradigma. || Respuesta modelo: ITIL v3 se organizaba en 26 procesos dentro de un ciclo de vida de 5 etapas y el proveedor entregaba valor. ITIL 4 usa 34 prácticas (conjuntos de personas, tecnología, información y proveedores) dentro del SVS, donde el valor se co-crea. Integra Agile, Lean y DevOps para el trabajo iterativo y continuo. El SVS reemplaza el ciclo de vida por un sistema donde estrategia, cadena de valor, prácticas, gobierno y mejora continua trabajan juntos. || [rúbrica: Procesos vs prácticas, Menciona Agile/Lean/DevOps, Ciclo de vida vs SVS, Argumenta cambio de paradigma]
3. Aplica el modelo de las 4 dimensiones al caso NubeNova: identifica una deficiencia y una acción correctiva por dimensión. || Pista: Recorre las 4 dimensiones una por una con evidencia del caso. || Respuesta modelo: Organización y Personas: comunicación poco empatica, corregir con capacitación en comunicación de crisis y un responsable de información. Información y Tecnología: documentación desactualizada, corregir con una base de conocimiento viva y versionada. Socios y Proveedores: SLA sin revisar, corregir revisando y renegociando acuerdos. Flujos de Valor y Procesos: falta de un flujo claro de escalamiento, corregir redisenando el flujo de incidentes y midiendo tiempos por etapa. || [rúbrica: Cubre las 4 dimensiones, Una deficiencia por dimensión, Una acción correctiva por dimensión, Alinea con ITIL 4]
:::

:::path Diagnostico del caso Tienda Andina
1 | Inicio | El e-commerce se entrego a tiempo y en presupuesto, pero los clientes reportan una compra confusa y lenta y el negocio pierde ventas. ¿Cual es tu primer diagnostico? | Co-creación de valor fallida=2; El proyecto fracaso por retrasos=3
2 | Valor | Correcto: el valor se co-crea con el cliente y cumplir el alcance no basta. ¿Que haces ahora? | Aplicar los principios guía y realinear con el flujo de valor=4; Invertir de inmediato en reingeniería de UI sin datos=5
3 | Error de diagnostico | El proyecto SI cumplio tiempo y presupuesto. El problema no fue el cronograma sino el valor entregado. | * | Vuelve a analizar: el fracaso es de co-creación de valor, no de plazos.
4 | Plan de acción | Aplicas centrarse en el valor, colaborar y promover la visibilidad, y avanzar de forma iterativa con retroalimentación: mides la experiencia real antes de invertir. | * | Decisión alineada con ITIL 4: primero medir y validar, luego mejorar el flujo de valor.
5 | Acción apresurada | Una reingeniería costosa sin medir repite el error: optimizas una suposición, no una necesidad real. | * | Riesgo alto: gasto sin evidencia de valor.
:::
