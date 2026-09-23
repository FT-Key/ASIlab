---
title: ITIL 4 - Gestion de Servicios de TI
emoji: "⚙️"
accent: "#7CB3E8"
category: gobierno-ti
difficulty: intermedio
order: 6
description: Marco de referencia ITIL 4 para la gestion de servicios de TI. Evolucion desde ITIL v3, el Sistema de Valor de Servicio (SVS), la cadena de valor, las 4 dimensiones, los 7 principios guia, las 34 practicas, la mejora continua y casos de empresa reales.
tags: [ITIL, gestion-servicios, SVS, practicas, co-creacion-valor, CSI]
keyTakeaway: ITIL 4 no es un cambio de nombre de ITIL v3. Pasa de procesos y ciclo de vida a practicas y Sistema de Valor de Servicio, donde el valor se co-crea con el consumidor y se integra con Agile, Lean y DevOps.
sources:
  - "ITIL 4 Foundation|https://www.axelos.com/certifications/itil-service-management|Axelos|Marco oficial de gestion de servicios de TI"
  - "PeopleCert - ITIL 4|https://www.peoplecert.org/|PeopleCert|Certificacion oficial ITIL 4"
  - "Que es ITIL (U25)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es ITIL 4?

:::definition ITIL 4
Marco de referencia (no una norma obligatoria) para la gestion de servicios de informacion y tecnologia. Da guia practica para que una organizacion gestione sus servicios, cree valor para los stakeholders y se adapte a un entorno digital cambiante.
:::

:::callout info
ITIL es un marco de **buenas practicas**: no certifica a la empresa ni impone pasos obligatorios. Su valor esta en el vocabulario comun y en las practicas probadas que propone. La certificacion oficial es individual (ITIL 4 Foundation) y la administra PeopleCert/Axelos.
:::

## ITIL v3 vs ITIL 4: no es un cambio de nombre

Muchas organizaciones usan ITIL v3 (o su version 2011) y creen que ITIL 4 es solo una actualizacion cosmetic. No lo es: cambia la forma de pensar el servicio.

| Aspecto | ITIL v3 / 2011 | ITIL 4 |
|---------|----------------|--------|
| Unidad central | **Procesos** agrupados en un **ciclo de vida** | **Practicas** dentro del **Sistema de Valor de Servicio (SVS)** |
| Cantidad | 26 procesos | 34 practicas de gestion |
| Modelo operativo | Ciclo de vida de 5 etapas (Estrategia, Diseno, Transicion, Operacion, Mejora) | Cadena de valor de 6 actividades |
| Origen del valor | El proveedor **entrega** valor al cliente | El valor se **co-crea** entre proveedor y consumidor |
| Metodologias | Enfoque tipo waterfall | Integra **Agile, Lean y DevOps** |
| Gobierno | Procesos separados del resto | Gobierno y controles **dentro** del SVS |
| Mejora | Mejora continua del servicio (CSI) como etapa | Mejora continua como **componente transversal** del SVS |

:::callout warning
El responsable de TI que dice "tenemos 26 procesos documentados y funcionan, ITIL 4 es lo mismo" comete dos errores: (1) confunde procesos con practicas, y (2) ignora que el exito ya no se mide por procesos cumplidos sino por **valor co-creado con el cliente**.
:::

### Por que la migracion es un cambio de paradigma

1. **De procesos a practicas**: un proceso es un conjunto de actividades; una practica es "un conjunto de recursos organizacionales disenados para realizar un trabajo o lograr un objetivo". Una practica incluye personas, tecnologia, informacion y proveedores; es mas amplia y flexible que un proceso.
2. **Integracion con Agile, Lean y DevOps**: ITIL 4 reconoce que el software se construye hoy con iteraciones, flujo continuo y automatizacion. No obliga a un unico metodo: se combina con ellos.
3. **Del ciclo de vida al SVS**: ya no se piensa en etapas rigidas y secuenciales, sino en un sistema donde todo esta conectado y el valor fluye en cualquier direccion.

## El Sistema de Valor del Servicio (SVS)

:::definition SVS (Service Value System)
Modelo que describe como TODOS los componentes y actividades de una organizacion trabajan juntos para facilitar la **co-creacion de valor**. Toma una demanda u oportunidad como entrada y produce valor como salida.
:::

:::flow 5 Componentes del SVS
- Estrategia de Servicio (que servicios ofrecer y hacia donde ir)
- Cadena de Valor del Servicio (como transformar la demanda en valor)
- Practicas de Gestion (recursos y procesos para hacer el trabajo)
- Gobierno y Controles (direccion, evaluacion y monitoreo)
- Mejora Continua (evolucion constante, presente en todo el SVS)
:::

La entrada del SVS son **demandas y oportunidades** (un cliente necesita algo). La salida es **valor** para el consumidor, la organizacion y otras partes interesadas. El SVS no es un organigrama: es un modelo mental para no perder de vista que todo lo que hace TI debe terminar en valor.

## La Cadena de Valor del Servicio

Es el modelo operativo del SVS: **6 actividades** que transforman entradas en salidas.

| Actividad | Que hace | Ejemplo en una tienda online |
|-----------|----------|------------------------------|
| **Planificar** | Alinear la cadena con la estrategia | Definir el catalogo de servicios digitales |
| **Mejorar** | Mejora continua en toda la cadena | Reducir el tiempo de carga de la web |
| **Involucrar (Engagement)** | Interactuar con usuarios y stakeholders | Soporte al cliente, solicitudes, quejas |
| **Disenar y Transicionar** | Crear o modificar servicios | Nuevo portal de pagos |
| **Obtener / Construir** | Comprar o desarrollar componentes | Licencias cloud o desarrollo interno |
| **Entregar y Soportar** | Operar el servicio y dar soporte | Mantenimiento y soporte L1/L2/L3 |

:::callout info
La cadena de valor **NO es lineal ni secuencial**. Las actividades se combinan de forma iterativa y paralela, igual que un equipo agil. Un **flujo de valor** es la secuencia concreta de pasos que sigue una demanda hasta convertirse en valor (ejemplo: "de solicitud a servicio entregado").
:::

:::example Flujo de valor de una compra online
Cliente pide soporte (Involucrar) → se disena una mejora del checkout (Disenar y Transicionar) → se construye el cambio (Obtener/Construir) → se despliega (Entregar y Soportar) → se mide la mejora (Mejorar). El valor no aparece en un solo paso: se co-crea a lo largo de todo el flujo.
:::

## Servicios y co-creacion de valor

:::definition Servicio (ITIL 4)
Medio para habilitar la creacion de valor **co-creado con el consumidor**, sin que este tenga que asumir costos o riesgos especificos.
:::

:::definition Oferta de Servicio (Service Offering)
Paquete formal que la organizacion presenta al cliente. Incluye uno o mas servicios y productos, combinados para atender una necesidad concreta (ejemplo: plan de internet + router + soporte 24/7).
:::

La **co-creacion de valor** significa que el proveedor no "entrega" valor en una caja: el valor se define y se realiza **junto con** el consumidor. Un sistema puede funcionar "segun lo especificado" y aun asi no generar valor si el cliente no puede usarlo para mejorar su negocio.

| Concepto | Que es | Ejemplo |
|----------|--------|---------|
| **Output (salida)** | El producto o servicio creado | Instalar un nuevo software de gestion |
| **Outcome (resultado)** | El beneficio real que genera | Procesar datos 30% mas rapido y con menos errores |

:::callout warning
Cumplir el alcance, el tiempo y el presupuesto **no garantiza** valor. Ese es el error clasico del caso de Tienda Andina: el proyecto "salio bien" en plazo y costo, pero el cliente no puede comprar con comodidad y el negocio pierde ventas.
:::

## Las 4 Dimensiones de ITIL

Las dimensiones son perspectivas que deben equilibrarse en **toda** decision sobre servicios. Si ignoras una, el servicio falla.

| Dimension | Que abarca | Ejemplo |
|-----------|------------|---------|
| **Organizacion y Personas** | Estructura, roles, cultura, habilidades | Equipo de TI, capacitacion, comunicacion |
| **Informacion y Tecnologia** | Datos, conocimiento, herramientas, plataformas | ServiceNow, Jira, SAP, base de datos de configuracion |
| **Socios y Proveedores** | Relaciones con terceros, contratos, SLA | SLA con Microsoft, AWS, proveedor de red |
| **Flujos de Valor y Procesos** | Actividades y flujos organizados para entregar valor | Gestion de incidentes, cambios, solicitudes |

:::callout warning
Enfocarse solo en tecnologia ignorando personas, informacion y proveedores es la causa #1 de fracaso en servicios de TI. Las 4 dimensiones se analizan juntas.
:::

## Los 7 Principios Guia de ITIL 4

Son recomendaciones universales que orientan cualquier decision, en cualquier nivel de la organizacion.

| # | Principio | Que significa | Ejemplo | Si se ignora |
|---|-----------|---------------|---------|--------------|
| 1 | **Centrarse en el valor** | Todo lo que se haga debe crear valor para el negocio y el cliente | Medir la experiencia del usuario, no solo las tareas hechas | Se entrega "lo especificado" que nadie usa |
| 2 | **Empezar donde estas** | No reinventar la rueda; evaluar el contexto actual y reutilizar | Aprovechar el sistema de tickets que ya existe | Se gasta en reemplazar lo que funcionaba |
| 3 | **Avanzar de forma iterativa con retroalimentacion** | Avanzar en ciclos pequenos, midiendo cada paso | Mejorar el checkout en sprints con pruebas A/B | Grandes cambios costosos sin validar |
| 4 | **Colaborar y promover la visibilidad** | Trabajar con otros y hacer transparente el estado | Tablero de control con estado, riesgos y dependencias | Silos, sorpresas y decisiones a ciegas |
| 5 | **Pensar y trabajar de forma integral** | Evitar el trabajo en silos; el servicio es un todo | Nadie optimiza su area a costa de otra | Se optimiza una parte y se rompe el conjunto |
| 6 | **Mantenerlo simple y practico** | Procesos simples, eliminar lo que no agrega valor | Un solo formulario de cambio para cambios menores | Tramites que frenan al equipo |
| 7 | **Optimizar y automatizar** | Mejorar continuamente y automatizar donde aporte | Automatizar aprobacion de cambios de bajo riesgo | Trabajo manual repetitivo y errores |

:::callout idea
Los principios guia se aplican **juntos**, no de a uno. Ante un caso, preguntate: ¿esto crea valor? ¿estoy partiendo de lo que ya existe? ¿lo puedo validar en ciclos? ¿es visible para todos? ¿es simple? ¿se puede automatizar?
:::

## Practicas de ITIL 4 (34 Practicas)

Una practica es un conjunto de recursos organizacionales (personas, tecnologia, informacion, proveedores) para realizar un trabajo. ITIL 4 agrupa las 34 practicas en 3 familias:

- **Practicas generales (14)**: gestion de la estrategia, catalogo de servicios, gestion de relaciones, gestion de la satisfaccion, mejora continua, etc.
- **Practicas de servicio (17)**: gestion de incidentes, problemas, cambios, solicitudes, activos de servicio, etc.
- **Practicas tecnicas (3)**: gestion de la disponibilidad, gestion de la capacidad y el rendimiento, gestion de la seguridad de la informacion.

### Practicas clave que debes diferenciar

| Practica | Objetivo principal | Ejemplo |
|----------|--------------------|---------|
| **Gestion de Incidentes** | Restaurar el funcionamiento normal **lo mas rapido posible** y minimizar el impacto | Se cae la web: se reinicia el servicio y se atiende al cliente |
| **Gestion de Problemas** | Encontrar y eliminar la **causa raiz** de los incidentes recurrentes | Tras varias caidas, se descubre un bug de memoria y se corrige |
| **Gestion de Cambios** | Evaluar, aprobar y programar cambios con riesgo controlado | Cambios estandar se automatizan; los de alto impacto pasan por comite |
| **Gestion de Solicitudes de Servicio** | Atender peticiones de usuarios (no fallas) | Pedir acceso a una carpeta, instalar una aplicacion |
| **Gestion de la Disponibilidad** | Asegurar que el servicio este disponible cuando se necesita | Cumplir el 99.95% de disponibilidad acordado |

:::callout success
ITIL 4 **no exige** implementar las 34 practicas. Cada organizacion selecciona las que mejor se adapten a su contexto. Lo importante es entender que practica resuelve que problema.
:::

## Mejora Continua

La mejora continua es un componente del SVS que atraviesa todo. ITIL 4 la organiza en un **modelo de 7 pasos** (las primeras 4 son las preguntas clasicas):

:::flow Modelo de mejora continua de ITIL 4 (7 pasos)
- 1. ¿Cual es la vision? (que queremos lograr)
- 2. ¿Donde estamos ahora? (estado actual medido)
- 3. ¿Donde queremos estar? (meta concreta)
- 4. ¿Como llegamos ahi? (plan de acciones)
- 5. Tomar accion (ejecutar el plan)
- 6. ¿Llegamos? (medir si se cumplio la meta)
- 7. ¿Como mantenemos el impulso? (estandarizar y mejorar de nuevo)
:::

## Casos de estudio

### Caso 1: Tienda Andina (retail)

Tienda Andina lanzo una nueva plataforma de comercio electronico. El proyecto **termino a tiempo y dentro del presupuesto**, y el equipo de desarrollo afirma que el sistema "funciona segun lo especificado". Sin embargo, los clientes reportan una experiencia de compra confusa y lenta, y el negocio esta perdiendo ventas. La direccion piensa invertir en una costosa reingenieria de la interfaz.

:::callout danger
Esto es un **fracaso en la co-creacion de valor**: se cumplio el alcance, pero el cliente no puede obtener valor. No se aplicaron bien los principios de centrarse en el valor, colaborar y promover la visibilidad, ni avanzar de forma iterativa con retroalimentacion. La solucion no es gastar a ciegas: es medir la experiencia del usuario, realinear el flujo de valor y validar cada mejora en ciclos.
:::

### Caso 2: NubeNova (proveedor de servicios cloud)

NubeNova ve caer la satisfaccion de sus clientes: el tiempo de resolucion de incidentes subio 40% en un trimestre. El equipo esta bien capacitado y usa herramientas de monitoreo de ultima generacion, pero la documentacion de procedimientos esta desactualizada, los SLA no se revisan desde hace dos anios y los clientes dicen que la comunicacion durante las interrupciones es confusa y poco empatica.

| Dimension | Deficiencia | Accion correctiva |
|-----------|-------------|-------------------|
| Organizacion y Personas | Comunicacion poco empatica con el cliente | Capacitar al equipo en comunicacion de crisis y asignar un responsable de informacion |
| Informacion y Tecnologia | Documentacion de procedimientos desactualizada | Base de conocimiento viva, revisada y versionada |
| Socios y Proveedores | SLA sin revisar desde hace dos anios | Revisar y renegociar SLA segun la realidad del servicio |
| Flujos de Valor y Procesos | No hay un flujo claro de escalamiento y resolucion | Redisenar el flujo de incidentes y medir tiempos por etapa |

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz ITIL 4 - Nivel 1 (memoria)
1. ¿Cuantas dimensiones tiene ITIL 4? || 2 || 3 || 4 || 5 || 2 || Son 4: Organizacion y Personas, Informacion y Tecnologia, Socios y Proveedores, y Flujos de Valor y Procesos.
2. ¿Cuantas practicas de gestion tiene ITIL 4? || 26 || 30 || 34 || 40 || 2 || ITIL 4 tiene 34 practicas (14 generales, 17 de servicio, 3 tecnicas).
3. ¿Cuantas actividades tiene la Cadena de Valor del Servicio? || 4 || 5 || 6 || 7 || 2 || Son 6: Planificar, Mejorar, Involucrar, Disenar y Transicionar, Obtener/Construir, y Entregar y Soportar.
4. ¿Cuantos componentes tiene el SVS? || 3 || 4 || 5 || 6 || 2 || El SVS tiene 5 componentes: Estrategia de Servicio, Cadena de Valor, Practicas, Gobierno y Controles, y Mejora Continua.
5. ¿Cuantos principios guia tiene ITIL 4? || 4 || 5 || 7 || 9 || 2 || Tiene 7 principios guia.
6. ¿Que reemplaza ITIL 4 respecto a ITIL v3? || El ciclo de vida por el SVS || Los procesos por areas de conocimiento || Las practicas por herramientas || El gobierno por auditoria || 0 || ITIL 4 reemplaza el ciclo de vida del servicio por el Sistema de Valor del Servicio (SVS).
:::

### Nivel 2 - Comprension

:::quiz ITIL 4 - Nivel 2 (comprension)
1. ¿Cual de los siguientes NO es uno de los 7 principios guia de ITIL 4? || Centrarse en el valor || Externalizar para optimizar || Avanzar de forma iterativa con retroalimentacion || Mantenerlo simple y practico || 1 || "Externalizar para optimizar" no existe. El principio es "Optimizar y automatizar".
2. En ITIL 4, el Sistema de Valor del Servicio (SVS) se describe como: || Un modelo que describe como todos los componentes y actividades trabajan juntos para la co-creacion de valor || Un conjunto de 26 procesos del ciclo de vida || Una herramienta de software para incidentes || Un modelo de madurez de 5 niveles || 0 || El SVS explica como todo el sistema coopera para co-crear valor a partir de una demanda.
3. La co-creacion de valor se logra cuando: || El proveedor define el valor de forma unilateral || El valor se define y se realiza conjuntamente entre proveedor y consumidor || El valor se mide solo por el ROI || El valor se entrega solo con automatizacion || 1 || El valor no se entrega: se co-crea junto con el consumidor.
4. La transicion de ITIL v3 a ITIL 4 implica pasar de un enfoque basado en: || Procesos a un enfoque basado en practicas || Servicios a productos || Mejora continua a proyectos || Personas a tecnologia || 0 || El cambio central es de procesos (v3) a practicas (v4).
5. ¿Que actividad de la cadena de valor se encarga de operar el servicio en produccion? || Planificar || Disenar y Transicionar || Entregar y Soportar || Mejorar || 2 || Entregar y Soportar opera el servicio y da soporte.
6. ¿Cual es la diferencia principal entre gestion de incidentes y gestion de problemas? || El incidente busca la causa raiz y el problema restaura el servicio || El incidente restaura el servicio rapido y el problema busca la causa raiz || Ambos son sinonimos || El incidente solo aplica a hardware || 1 || El incidente restaura el servicio cuanto antes; el problema elimina la causa raiz.
7. Segun ITIL 4, combinar Agile para el desarrollo con gobernanza tradicional para los cambios es: || Incorrecto, ITIL 4 exige un unico metodo || Posible, porque ITIL 4 se integra con Agile, Lean y DevOps || Desaconsejable, son incompatibles || Obligatorio en todos los servicios || 1 || ITIL 4 esta disenado para integrarse con enfoques modernos.
8. ¿Que dimension cubre los contratos y relaciones con terceros? || Organizacion y Personas || Informacion y Tecnologia || Socios y Proveedores || Flujos de Valor y Procesos || 2 || Socios y Proveedores cubre contratos, SLA y relaciones con terceros.
:::

### Nivel 3 - Casos de empresa

:::quiz ITIL 4 - Nivel 3 (escenarios)
1. Tienda Andina entrego su e-commerce a tiempo y en presupuesto, pero los clientes reportan una compra confusa y lenta y el negocio pierde ventas. ¿Que principio se descuido principalmente? || Centrarse en el valor || Empezar donde estas || Mantenerlo simple y practico || Optimizar y automatizar || 0 || Se cumplio el alcance pero no se genero valor para el cliente: fallo "Centrarse en el valor".
2. En NubeNova la documentacion de procedimientos esta desactualizada. ¿Que dimension se ve afectada? || Organizacion y Personas || Informacion y Tecnologia || Socios y Proveedores || Finanzas y Presupuesto || 1 || La documentacion y el conocimiento son parte de Informacion y Tecnologia.
3. En NubeNova los SLA no se revisan desde hace dos anios. ¿Que dimension es la causa raiz? || Organizacion y Personas || Informacion y Tecnologia || Socios y Proveedores || Flujos de Valor y Procesos || 2 || Los SLA pertenecen a la gestion de Socios y Proveedores.
4. Los clientes de NubeNova reportan comunicacion confusa y poco empatica durante las caidas. ¿Que dimension falla? || Organizacion y Personas || Informacion y Tecnologia || Socios y Proveedores || Gobierno y Controles || 0 || La comunicacion y la cultura del equipo son parte de Organizacion y Personas.
5. Un panel de control que muestra estado, riesgos y dependencias de un proyecto es un ejemplo del principio de: || Centrarse en el valor || Colaborar y promover la visibilidad || Mantenerlo simple y practico || Optimizar y automatizar || 1 || Un tablero compartido hace visible el estado para todos: visibilidad.
6. Una empresa automatiza la aprobacion de cambios de bajo riesgo y reserva un comite para los de alto impacto. Esto refleja el principio de: || Centrarse en el valor || Avanzar de forma iterativa || Mantenerlo simple y practico || Optimizar y automatizar || 3 || Se automatiza lo repetitivo y se deja control humano para lo riesgoso: optimizar y automatizar.
:::

### Practica guiada

:::sort Ordena los 7 principios guia de ITIL 4
- Centrarse en el valor
- Empezar donde estas
- Avanzar de forma iterativa con retroalimentacion
- Colaborar y promover la visibilidad
- Pensar y trabajar de forma integral
- Mantenerlo simple y practico
- Optimizar y automatizar
:::

:::match Practicas y dimensiones de ITIL 4
- Gestion de Incidentes | Restaurar el servicio lo mas rapido posible
- Gestion de Problemas | Encontrar y eliminar la causa raiz
- Socios y Proveedores | Contratos y SLA con terceros
- Informacion y Tecnologia | Datos, conocimiento y herramientas
- Cadena de Valor | 6 actividades que transforman demanda en valor
:::

:::truefalse ITIL 4
1. El SVS tiene 4 componentes. || Falso || El SVS tiene 5 componentes. Lo que tiene 4 son las dimensiones.
2. ITIL 4 tiene 34 practicas de gestion. || Verdadero || 14 generales, 17 de servicio y 3 tecnicas.
3. La gestion de incidentes busca la causa raiz. || Falso || Eso es la gestion de problemas. El incidente restaura el servicio rapido.
4. La cadena de valor es lineal y estrictamente secuencial. || Falso || Sus actividades se combinan de forma iterativa y paralela.
5. ITIL 4 se integra con Agile, Lean y DevOps. || Verdadero || Es uno de sus cambios de paradigma frente a v3.
6. La co-creacion implica que el proveedor define el valor de forma unilateral. || Falso || El valor se define y se realiza conjuntamente con el consumidor.
:::

:::essay Analisis de casos ITIL 4
1. Analiza por que el caso de Tienda Andina representa un fracaso en la co-creacion de valor. Identifica al menos 3 principios guia descuidados y propone una solucion realineada con el flujo de valor. || Pista: Cumplir alcance no es generar valor; piensa en medicion, colaboracion y ciclos. || Respuesta modelo: El valor se co-crea con el cliente; entregar "segun lo especificado" sin que el usuario pueda comprar bien no genera valor. Principios descuidados: centrarse en el valor (no se midio la experiencia), colaborar y promover la visibilidad (no se involucro al usuario ni al negocio), y avanzar de forma iterativa con retroalimentacion (se hizo una entrega grande sin validar). Solucion: medir la experiencia de compra, priorizar mejoras por impacto, validarlas en ciclos con pruebas reales y realinear el flujo de valor de la compra. || [rubrica: Explica co-creacion de valor, Identifica 3 principios correctos, Propone solucion con flujo de valor, Usa terminologia ITIL]
2. Explica las diferencias fundamentales entre ITIL v3 e ITIL 4 abordando el paso de procesos a practicas, la incorporacion de Agile/Lean/DevOps y el cambio del ciclo de vida al SVS. || Pista: No es un cambio de nombre, es un cambio de paradigma. || Respuesta modelo: ITIL v3 se organizaba en 26 procesos dentro de un ciclo de vida de 5 etapas y el proveedor entregaba valor. ITIL 4 usa 34 practicas (conjuntos de personas, tecnologia, informacion y proveedores) dentro del SVS, donde el valor se co-crea. Integra Agile, Lean y DevOps para el trabajo iterativo y continuo. El SVS reemplaza el ciclo de vida por un sistema donde estrategia, cadena de valor, practicas, gobierno y mejora continua trabajan juntos. || [rubrica: Procesos vs practicas, Menciona Agile/Lean/DevOps, Ciclo de vida vs SVS, Argumenta cambio de paradigma]
3. Aplica el modelo de las 4 dimensiones al caso NubeNova: identifica una deficiencia y una accion correctiva por dimension. || Pista: Recorre las 4 dimensiones una por una con evidencia del caso. || Respuesta modelo: Organizacion y Personas: comunicacion poco empatica, corregir con capacitacion en comunicacion de crisis y un responsable de informacion. Informacion y Tecnologia: documentacion desactualizada, corregir con una base de conocimiento viva y versionada. Socios y Proveedores: SLA sin revisar, corregir revisando y renegociando acuerdos. Flujos de Valor y Procesos: falta de un flujo claro de escalamiento, corregir redisenando el flujo de incidentes y midiendo tiempos por etapa. || [rubrica: Cubre las 4 dimensiones, Una deficiencia por dimension, Una accion correctiva por dimension, Alinea con ITIL 4]
:::

:::path Diagnostico del caso Tienda Andina
1 | Inicio | El e-commerce se entrego a tiempo y en presupuesto, pero los clientes reportan una compra confusa y lenta y el negocio pierde ventas. ¿Cual es tu primer diagnostico? | Co-creacion de valor fallida=2; El proyecto fracaso por retrasos=3
2 | Valor | Correcto: el valor se co-crea con el cliente y cumplir el alcance no basta. ¿Que haces ahora? | Aplicar los principios guia y realinear con el flujo de valor=4; Invertir de inmediato en reingenieria de UI sin datos=5
3 | Error de diagnostico | El proyecto SI cumplio tiempo y presupuesto. El problema no fue el cronograma sino el valor entregado. | * | Vuelve a analizar: el fracaso es de co-creacion de valor, no de plazos.
4 | Plan de accion | Aplicas centrarse en el valor, colaborar y promover la visibilidad, y avanzar de forma iterativa con retroalimentacion: mides la experiencia real antes de invertir. | * | Decision alineada con ITIL 4: primero medir y validar, luego mejorar el flujo de valor.
5 | Accion apresurada | Una reingenieria costosa sin medir repite el error: optimizas una suposicion, no una necesidad real. | * | Riesgo alto: gasto sin evidencia de valor.
:::
