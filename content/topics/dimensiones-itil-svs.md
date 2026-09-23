---
title: Las 4 Dimensiones de ITIL y el SVS
emoji: "🔮"
accent: "#7CB3E8"
category: Gobierno de TI
difficulty: intermedio
order: 7
unit: "Gobierno de TI y Marcos de Referencia"
description: Análisis profundo de las 4 dimensiones de ITIL 4 y los 5 componentes del Sistema de Valor de Servicio (SVS). Como se integran para crear valor, con diagnostico por dimensión aplicado a una empresa de logística.
tags: [ITIL, 4-dimensiones, SVS, cadena-valor, practicas, co-creacion-valor]
keyTakeaway: Las 4 dimensiones (Organización y Personas, Información y Tecnología, Socios y Proveedores, Flujos de Valor y Procesos) se analizan juntas en cada decisión; el SVS conecta esos recursos con la cadena de valor para co-crear valor con el cliente.
sources:
  - "ITIL 4 Foundation|https://www.axelos.com/certifications/itil-service-management|Axelos|Marco oficial de gestión de servicios"
  - "PeopleCert - ITIL 4|https://www.peoplecert.org/|PeopleCert|Certificación oficial ITIL 4"
  - "ITIL: las 4 dimensiones y 5 componentes del SVS (U25)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## El Sistema de Valor de Servicio (SVS)

:::definition SVS (Service Value System)
Modelo que describe como las organizaciones crean valor al combinar componentes y actividades. Toma demandas y oportunidades como entrada y produce valor como salida. Integra estrategia, cadena de valor, prácticas, gobierno y mejora continua.
:::

:::flow 5 Componentes del SVS
- Estrategia de Servicio (que servicios ofrecemos y por que)
- Cadena de Valor (como transformamos la demanda en valor)
- Prácticas de Gestión (recursos y procesos para hacer el trabajo)
- Gobierno y Controles (dirección, evaluación y monitoreo)
- Mejora Continua (evolución constante, presente en todo el SVS)
:::

Cada componente cumple un papel distinto:

| Componente | Pregunta que responde | Ejemplo |
|------------|-----------------------|---------|
| Estrategia de Servicio | ¿Que servicios ofrecemos y a quien? | Decidir ofrecer soporte 24/7 |
| Cadena de Valor | ¿Como producimos valor? | Flujo de una solicitud hasta su entrega |
| Prácticas de Gestión | ¿Con que recursos trabajamos? | Gestión de incidentes, cambios, problemas |
| Gobierno y Controles | ¿Quien decide y como se supervisa? | Políticas, comites, controles |
| Mejora Continua | ¿Como mejoramos siempre? | Ciclo de 4 preguntas de mejora |

## La Cadena de Valor

Transforma las entradas (demanda) en salidas (valor). Sus 6 actividades nunca actuan aisladas: se combinan de forma iterativa y paralela.

| Actividad | Que hace | Ejemplo |
|-----------|----------|---------|
| **Planificar** | Definir estrategia y objetivos | Definir el catalogo de servicios |
| **Mejorar** | Mejora continua de servicios y prácticas | Reducir el tiempo de respuesta |
| **Involucrar (Engagement)** | Interactuar con usuarios y stakeholders | Soporte, solicitudes, quejas |
| **Diseñar y Transicionar** | Crear o cambiar servicios | Lanzar un nuevo portal |
| **Obtener / Construir** | Adquirir o desarrollar componentes | Licencias, desarrollo interno |
| **Entregar y Soportar** | Operar y soportar el servicio | Mantenimiento, soporte L1/L2/L3 |

:::callout info
Un **flujo de valor** es la secuencia concreta de pasos que sigue una demanda hasta convertirse en valor. Ejemplo: el cliente pide una mejora (Involucrar) → se diseña (Diseñar) → se construye (Obtener/Construir) → se entrega (Entregar y Soportar) → se mide (Mejorar).
:::

## Las 4 Dimensiones de ITIL

Las dimensiones son perspectivas que deben equilibrarse en **cada** decisión sobre un servicio. Si una queda débil, el servicio falla aunque la tecnología sea excelente.

### Dimensión 1: Organización y Personas

Cubre la estructura, los roles, la cultura, las habilidades y la comunicación del equipo.

| Elemento | Que abarca |
|----------|------------|
| Estructura organizacional | Jerarquía, departamentos, roles |
| Capacidad | Habilidades y competencias |
| Cultura | Valores, normas, comportamientos |
| Gestión del conocimiento | Documentación, capacitación |
| Comunicación | Colaboración, trato con el usuario |

Pregunta clave: ¿las personas tienen las habilidades, la actitud y los roles claros para entregar el servicio?

### Dimensión 2: Información y Tecnología

Incluye tanto la información que gestiona el servicio como la tecnología que lo soporta.

| Capa | Ejemplos |
|------|----------|
| Herramientas de gestión | ServiceNow, Jira, Zendesk |
| Automatización | Ansible, Terraform, scripts |
| Monitoreo | Nagios, Datadog, Grafana |
| Conocimiento | Base de conocimiento, documentación, datos |
| Seguridad | Firewalls, SIEM, gestión de identidades |

Pregunta clave: ¿la información esta actualizada y disponible, y la tecnología habilita (no estorba) al servicio?

### Dimensión 3: Socios y Proveedores

Cubre las relaciones con terceros, contratos, acuerdos de nivel de servicio (SLA) y estrategia de abastecimiento.

| Elemento | Que abarca |
|----------|------------|
| Tipos de relación | Contratos, alianzas, SLA |
| Gestión de proveedores | Evaluación, selección, monitoreo |
| Estrategia | Hacer o comprar, multi-proveedor, alianza |

Pregunta clave: ¿los acuerdos con terceros siguen vigentes y reflejan la realidad del servicio?

### Dimensión 4: Flujos de Valor y Procesos

Cubre los flujos y procesos necesarios para gestionar el servicio, y como se organizan para entregar valor.

- **Flujos de valor** — Secuencia de pasos que transforma una demanda en un resultado con valor.
- **Procesos de soporte** — Incidente, problema, cambio, solicitud de servicio.
- **Flujos de trabajo** — Actividades ordenadas con reglas y responsables definidos.

Pregunta clave: ¿existe un flujo claro, con responsables y tiempos definidos, para atender cada tipo de demanda?

:::callout success
Las 4 dimensiones se analizan **juntas**. Un enfoque solo en tecnología, sin personas, información ni proveedores, garantiza el fracaso del servicio.
:::

## Como se integran dimensiones y cadena de valor

Una misma actividad de la cadena de valor se apoya en las 4 dimensiones a la vez. Ejemplo con la actividad **Entregar y Soportar** en una mesa de ayuda:

| Dimensión | Aporte concreto |
|-----------|-----------------|
| Organización y Personas | Analistas de soporte capacitados y turnos definidos |
| Información y Tecnología | Sistema de tickets y base de conocimiento |
| Socios y Proveedores | Proveedor de nube con SLA de disponibilidad |
| Flujos de Valor y Procesos | Flujo de escalamiento L1 → L2 → L3 |

## Caso de estudio: LogiTrans Cargo

LogiTrans Cargo es una empresa de logística con un servicio de rastreo de envios para sus clientes. El servicio funciona, pero la satisfacción cayo: los clientes no entienden los estados del envío, el personal responde tarde, la documentación del sistema no esta actualizada, el proveedor de mapas ya no ofrece soporte en su plan actual y no existe un flujo formal para escalar reclamos.

| Dimensión | Deficiencia detectada | Acción correctiva |
|-----------|-----------------------|-------------------|
| Organización y Personas | Respuestas tardias y poco claras al cliente | Definir turnos, capacitar en comunicación y asignar responsables |
| Información y Tecnología | Documentación del sistema desactualizada | Base de conocimiento viva y versionada |
| Socios y Proveedores | Plan del proveedor de mapas sin soporte | Renegociar o migrar de proveedor segun el SLA |
| Flujos de Valor y Procesos | No hay flujo de escalamiento de reclamos | Diseñar el flujo y medir tiempos por etapa |

:::callout warning
Observa que ninguna dimensión aislada explica el problema. Si solo se "arregla el sistema" (tecnología) sin tocar personas, proveedores ni procesos, la insatisfacción vuelve.
:::

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz Dimensiones y SVS - Nivel 1
1. ¿Cuantos componentes tiene el SVS? || 3 || 4 || 5 || 6 || 2 || Son 5: Estrategia, Cadena de Valor, Prácticas, Gobierno y Controles, y Mejora Continua.
2. ¿Cuantas dimensiones tiene ITIL 4? || 3 || 4 || 5 || 7 || 1 || Son 4 dimensiones.
3. ¿Que dimensión incluye la cultura organizacional? || Procesos || Tecnología || Organización y Personas || Socios y Proveedores || 2 || La cultura, la estructura y las capacidades están en Organización y Personas.
4. ¿Que actividad de la cadena de valor opera el servicio? || Planificar || Diseñar y Transicionar || Entregar y Soportar || Mejorar || 2 || Entregar y Soportar opera y da soporte al servicio.
5. ¿Que componente del SVS decide que servicios ofrecer? || Cadena de Valor || Estrategia de Servicio || Prácticas || Mejora Continua || 1 || La Estrategia de Servicio decide que ofrecer y hacia donde ir.
:::

### Nivel 2 - Comprensión

:::quiz Dimensiones y SVS - Nivel 2
1. ¿Por que se dice que las 4 dimensiones deben equilibrarse? || Porque son obligatorias por ley || Porque ignorar una causa fallas en el servicio || Porque solo aplican a empresas grandes || Porque reemplazan al SVS || 1 || Un servicio falla si una dimensión queda débil, aunque la tecnología sea buena.
2. Un flujo de valor es: || Un organigrama del area de TI || La secuencia de pasos que transforma una demanda en valor || Un listado de proveedores || Un tipo de contrato || 1 || El flujo de valor describe como la demanda se convierte en valor paso a paso.
3. ¿Que dimensión cubre una base de conocimiento desactualizada? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Gobierno y Controles || 1 || La documentación y el conocimiento pertenecen a Información y Tecnología.
4. La mejora continua en el SVS se caracteriza por: || Ser una etapa final del ciclo || Atravesar todo el SVS de forma continua || Aplicarse solo a la tecnología || Reemplazar al gobierno || 1 || La mejora continua es transversal y permanente en el SVS.
5. ¿Que actividad de la cadena de valor se relaciona con soporte, solicitudes y quejas? || Planificar || Involucrar (Engagement) || Obtener / Construir || Diseñar y Transicionar || 1 || Involucrar cubre la interacción directa con usuarios y stakeholders.
6. ¿Cual es la relación entre el SVS y las prácticas? || Las prácticas reemplazan al SVS || Las prácticas son uno de los 5 componentes del SVS || El SVS es una práctica técnica || No tienen relación || 1 || Las prácticas de gestión son uno de los componentes del SVS.
:::

### Nivel 3 - Casos de empresa

:::quiz Dimensiones y SVS - Nivel 3 (LogiTrans)
1. En LogiTrans el personal responde tarde y de forma poco clara. ¿Que dimensión es la causa raíz? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Flujos de Valor y Procesos || 0 || La atención y comunicación del personal son parte de Organización y Personas.
2. En LogiTrans la documentación del sistema no esta actualizada. ¿Que dimensión falla? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Gobierno y Controles || 1 || La documentación es información y conocimiento.
3. En LogiTrans el proveedor de mapas ya no da soporte en su plan actual. ¿Que dimensión lo cubre? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Flujos de Valor y Procesos || 2 || Los contratos y el soporte de terceros son Socios y Proveedores.
4. En LogiTrans no existe un flujo formal para escalar reclamos. ¿Que dimensión es la causa raíz? || Organización y Personas || Información y Tecnología || Socios y Proveedores || Flujos de Valor y Procesos || 3 || La ausencia de un flujo de escalamiento es un problema de procesos.
5. Si LogiTrans solo actualiza el sistema de rastreo sin tocar personas, proveedores ni procesos, ¿que ocurrira? || Se resuelve todo || La insatisfacción probablemente vuelve || Baja el costo del proveedor || Aumenta la disponibilidad al 100% || 1 || Arreglar una sola dimensión no corrige el servicio como un todo.
6. ¿Que principio guía se relaciona con analizar las 4 dimensiones como un todo? || Empezar donde estas || Pensar y trabajar de forma integral || Optimizar y automatizar || Mantenerlo simple y práctico || 1 || Pensar integralmente evita optimizar una parte a costa del conjunto.
:::

### Práctica guiada

:::sort Ordena las actividades de la Cadena de Valor del Servicio
- Planificar
- Mejorar
- Involucrar
- Diseñar y Transicionar
- Obtener / Construir
- Entregar y Soportar
:::

:::match Dimensiones y componentes de ITIL 4
- Organización y Personas | Estructura, cultura, habilidades y comunicación
- Información y Tecnología | Datos, conocimiento, herramientas y plataformas
- Socios y Proveedores | Contratos, SLA y relaciones con terceros
- Flujos de Valor y Procesos | Actividades y flujos para entregar el servicio
- Estrategia de Servicio | Decide que servicios ofrecer
:::

:::truefalse Dimensiones y SVS
1. La cultura organizacional afecta la entrega del servicio. || Verdadero || La cultura es un factor crítico de la dimensión Organización y Personas.
2. Los socios y proveedores no forman parte del modelo ITIL 4. || Falso || Socios y Proveedores es una de las 4 dimensiones.
3. La mejora continua es un componente del SVS. || Verdadero || Es uno de los 5 componentes y atraviesa todo el sistema.
4. La cadena de valor tiene actividades que se ejecutan solo una vez y en orden. || Falso || Se combinan de forma iterativa y paralela.
5. Una base de conocimiento desactualizada afecta a Información y Tecnología. || Verdadero || El conocimiento y los datos son parte de esa dimensión.
6. Las 4 dimensiones solo importan durante el diseño del servicio. || Falso || Se consideran en cada decisión a lo largo de todo el servicio.
:::

:::essay Análisis por dimensiones
1. Explica por que analizar solo la tecnología es insuficiente para resolver un problema de servicio. Usa el caso LogiTrans. || Pista: Recorre las 4 dimensiones y muestra que el problema tiene varias causas. || Respuesta modelo: El problema de LogiTrans no es solo tecnologico: hay comunicación tardía (Organización y Personas), documentación desactualizada (Información y Tecnología), un proveedor sin soporte (Socios y Proveedores) y falta de un flujo de escalamiento (Flujos de Valor y Procesos). Optimizar solo el sistema de rastreo dejaría intactas las otras causas y la insatisfacción volvería. Las 4 dimensiones deben equilibrarse. || [rúbrica: Menciona las 4 dimensiones, Da evidencia del caso por dimensión, Explica el riesgo de optimizar una sola, Propone enfoque holístico]
2. Describe como las 4 dimensiones sostienen la actividad Entregar y Soportar en una mesa de ayuda. || Pista: Da un aporte concreto de cada dimensión. || Respuesta modelo: Organización y Personas: analistas capacitados y turnos definidos. Información y Tecnología: sistema de tickets y base de conocimiento. Socios y Proveedores: proveedor de nube con SLA de disponibilidad. Flujos de Valor y Procesos: flujo de escalamiento L1 a L2 a L3. Sin cualquiera de los cuatro, la entrega del soporte se degrada. || [rúbrica: Cubre las 4 dimensiones, Aportes concretos, Relaciona con cadena de valor, Terminología correcta]
:::

:::path Diagnostico por dimensiones en LogiTrans
1 | Inicio | La satisfacción de LogiTrans cayo y el equipo propone solo actualizar el sistema de rastreo. ¿Que haces? | Diagnosticar las 4 dimensiones antes de invertir=2; Aprobar la actualización del sistema=3
2 | Diagnostico integral | Correcto: revisas personas, información, proveedores y procesos antes de decidir. | * | Enfoque alineado con ITIL 4: el servicio es un todo.
3 | Solución parcial | Actualizar solo el sistema deja intactas la comunicación, el proveedor y el flujo de escalamiento. La insatisfacción probablemente vuelve. | * | Riesgo alto: optimizas una dimensión y descuidas las otras.
:::

:::arch itil-lifecycle
