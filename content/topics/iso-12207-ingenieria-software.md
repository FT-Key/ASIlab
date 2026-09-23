---
title: ISO 12207 - Procesos del Ciclo de Vida del Software
emoji: "⚙️"
accent: "#6DD4A0"
category: Normas y Calidad
difficulty: intermedio
order: 13
unit: "Auditoría y Calidad"
description: Norma ISO/IEC 12207 que establece un marco comun para los procesos del ciclo de vida del software. Procesos principales (5), de apoyo (8) y organizativos (4), con un caso aplicado. Relación con la auditoría informática y la normalización de procesos.
tags: [ISO-12207, ciclo-vida-software, procesos, normalizacion, ingenieria-software]
keyTakeaway: ISO 12207 es el marco de referencia más importante para normalizar los procesos del ciclo de vida del software. Organiza las actividades en 5 procesos principales, 8 de apoyo y 4 organizativos, y no define COMO hacerlos sino QUE deben existir.
sources:
  - "ISO/IEC/IEEE 12207:2017 - Software life cycle processes|https://www.iso.org/standard/63712.html|ISO/IEC/IEEE|Norma oficial del ciclo de vida del software"
  - "IEEE SA - IEEE/ISO/IEC 12207|https://standards.ieee.org/ieee/12207/5672|IEEE|Estándar de ingeniería de software"
  - "Resumenes y material de clase (primer parcial)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es ISO 12207?

:::definition ISO/IEC 12207
Norma internacional que establece un marco comun para los procesos del ciclo de vida del software. Define una estructura estándar de procesos que pueden usar organizaciones de cualquier tipo y tamaño para desarrollar, mantener y adquirir software de forma consistente y de calidad.
:::

:::callout info
ISO 12207 no define COMO hacer cada proceso, sino QUE procesos deben existir. Cada organización adapta los procesos a su contexto, pero la estructura base es la misma.
:::

## Importancia de la Normalización

| Beneficio | Que aporta |
|-----------|------------|
| **Comunica un lenguaje comun** | Todos los involucrados hablan el mismo idioma técnico |
| **Reduce tiempos de desarrollo** | Procesos estandarizados evitan retrabajo |
| **Aumenta la calidad del producto** | Cada paso tiene criterios claros de calidad |
| **Facilita la integración** | Diferentes equipos pueden trabajar juntos |
| **Reduce costos** | Menos errores = menos correcciones = menor costo |
| **Mejora la satisfacción del usuario** | Producto final más cercano a lo que el usuario necesita |

:::callout warning
ISO 12207 no es un método de desarrollo. Es un MARCO que organiza los procesos. La organización debe definir como implementar cada proceso segun su contexto.
:::

## Estructura de Procesos de ISO 12207

:::flow Tres Categorías de Procesos
- Procesos Principales (5): el core del ciclo de vida del software
- Procesos de Apoyo (8): soportan a los principales
- Procesos Organizativos (4): gestionan la organización
:::

## Procesos Principales (5)

Son las actividades fundamentales del ciclo de vida del software.

| Proceso | Que hace | Objetivo principal |
|---------|----------|-------------------|
| **Adquisición** | Obtener un producto o servicio de un proveedor | Definir requisitos y seleccionar proveedor |
| **Suministro** | Entregar un producto o servicio a un cliente | Cumplir con los requisitos acordados |
| **Desarrollo** | Crear el producto de software | Transformar requisitos en software funcional |
| **Operación** | Usar y mantener el software en producción | Asegurar que funcione correctamente |
| **Mantencion** | Corregir errores y mejorar el software | Mantener la calidad y relevancia del software |

:::callout info
Estos 5 procesos se encadenan: Adquisición → Suministro → Desarrollo → Operación → Mantencion. Cada uno genera outputs que son inputs del siguiente.
:::

### Detalle de cada Proceso Principal

#### 1. Proceso de Adquisición
- Definir lo que se necesita comprar o contratar
- Establecer requisitos para el proveedor
- Evaluar ofertas y seleccionar
- Gestionar el contrato

#### 2. Proceso de Suministro
- Entender los requisitos del cliente
- Planificar la entrega
- Desarrollar y entregar el producto
- Soporte post-venta

#### 3. Proceso de Desarrollo
- Análisis de requisitos
- Diseño del sistema
- Codificacion
- Pruebas
- Integración

#### 4. Proceso de Operación
- Instalación en producción
- Monitoreo continuo
- Soporte a usuarios
- Gestión de incidentes

#### 5. Proceso de Mantencion
- Corrección de errores
- Adaptación a cambios
- Mejora de funcionalidades
- Optimización de rendimiento

## Procesos de Apoyo (8)

No son parte del ciclo de vida directo, pero son necesarios para que los procesos principales funcionen bien.

| Proceso | Que hace | Para que sirve |
|---------|----------|----------------|
| **Documentación** | Crea y mantiene documentación | Que todos tengan información clara |
| **Gestión de la configuración** | Controla versiones y cambios | Que no se pierdan cambios ni versiones |
| **Aseguramiento de la calidad** | Establece marcos para garantizar calidad | Que los procesos y productos cumplan estándares |
| **Verificación** | Confirma que cumple requisitos | Que el producto sea lo que se pidio |
| **Validación** | Confirma que satisface la necesidad real | Que el producto sea útil para el usuario |
| **Revisión conjunta** | Evalúa el producto en puntos clave | Detectar problemas temprano |
| **Auditoría** | Evalúa el cumplimiento de procesos | Que se sigan los procedimientos |
| **Solución de problemas** | Resuelve incidencias | Que los problemas se resuelvan rapido |

:::callout idea
La verificación pregunta "¿hicimos el producto correctamente?". La validación pregunta "¿hicimos el producto correcto?". Son diferentes: una evalúa calidad técnica, la otra evalúa utilidad para el usuario.
:::

## Procesos Organizativos (4)

Gestionan la organización como un todo, no un proyecto específico.

| Proceso | Que hace | Objetivo |
|---------|----------|----------|
| **Gestión** | Define actividades genericas del manager del ciclo de vida | Planificar, ejecutar, controlar y cerrar procesos |
| **Infraestructura** | Establece y mantiene la infraestructura subyacente | Hardware, software, estándares, herramientas e instalaciones |
| **Mejora** | Evalúa, mide, controla y mejora los procesos | Mejora continua de procesos a nivel organización |
| **Capacitación** | Identifica y provee habilidades al personal | Personal con competencias adecuadas en tiempo oportuno |

## Separación de Entornos

Una práctica clave que ISO 12207 y la auditoría informática promueven:

| Entorno | Para que sirve | Quien lo usa |
|---------|----------------|--------------|
| **Desarrollo** | Crear y modificar el software | Programadores |
| **Pruebas** | Validar el software antes de producción | Equipo de QA |
| **Producción** | Operar el software para el negocio | Usuarios finales |

:::callout danger
Si no se separan los entornos, un programador puede hacer cambios directamente en producción y causar fallos en el sistema operativo de la empresa. La separación de entornos es un control fundamental de seguridad.
:::

### Por que separar entornos?

1. **Seguridad** — Evita que cambios en desarrollo afecten la operación
2. **Control de cambios** — Permite probar antes de implementar
3. **Estabilidad** — Producción no se ve afectada por pruebas
4. **Trazabilidad** — Se puede rastrear cada cambio desde su origen

## Caso práctico: SoftAndes y el módulo bancario

SoftAndes es una empresa de software a la que un banco le encarga un módulo de pagos. SoftAndes aplica ISO 12207 para ordenar el trabajo.

| Proceso ISO 12207 | Que hace SoftAndes en el caso |
|-------------------|-------------------------------|
| **Adquisición** | El banco (cliente) define requisitos, evalúa ofertas y contrata a SoftAndes |
| **Suministro** | SoftAndes entiende los requisitos del banco y planifica la entrega |
| **Desarrollo** | Analiza requisitos, diseña, codifica, prueba e integra el módulo |
| **Operación** | El módulo se instala en producción del banco, se monitorea y se da soporte |
| **Mantencion** | Se corrigen errores y se agregan funcionalidades nuevas |
| **Apoyo: Gestión de configuración** | Se controlan versiones y cambios del código |
| **Apoyo: Verificación / Validación** | Se prueba que cumple requisitos y que sirve al usuario |
| **Organizativo: Mejora** | Se analizan los retrasos y se mejora el proceso para el próximo proyecto |

:::callout success
Observa que los procesos de apoyo y organizativos no "se ven" en el producto final, pero sin ellos el proyecto se desordena: sin control de versiones se pierden cambios, sin verificación se entregan defectos, sin mejora se repiten los mismos errores.
:::

## Relación con la Auditoría Informática

:::callout info
ISO 12207 proporciona el marco para que la auditoría informática evalúa si la organización tiene y sigue procesos estandarizados para el ciclo de vida del software. Un auditor verifica que existan los procesos documentados y que se cumplan.
:::

| Proceso ISO 12207 | Que evalúa la auditoría |
|-------------------|------------------------|
| **Gestión de configuración** | ¿Se controlan los cambios correctamente? |
| **Verificación** | ¿Se prueban los productos antes de entregar? |
| **Auditoría** | ¿Se evalúan los procesos periodicamente? |
| **Documentación** | ¿Existe documentación actualizada? |
| **Gestión** | ¿Se planifican y controlan los proyectos? |

## Relación con OTROS Marcos

| Marco | Que define | Como se relaciona con ISO 12207 |
|-------|------------|-------------------------------|
| **COBIT** | Gobierno y gestión de TI | ISO 12207 alimenta los procesos de BAI (Construir, Adquirir e Implementar) |
| **ITIL** | Gestión de servicios | ISO 12207 define como se desarrolla el software que ITIL opera |
| **ISO 38500** | Gobierno corporativo | ISO 12207 implementa los principios de gobierno en procesos de software |
| **PMBOK** | Gestión de proyectos | ISO 12207 complementa con procesos específicos de software |

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz ISO 12207 - Nivel 1 (memoria)
1. ¿Cuantos procesos principales tiene ISO 12207? || 3 || 4 || 5 || 7 || 2 || Tiene 5: Adquisición, Suministro, Desarrollo, Operación y Mantencion.
2. ¿Cuantos procesos de apoyo tiene ISO 12207? || 5 || 7 || 8 || 10 || 2 || Tiene 8 procesos de apoyo.
3. ¿Cuantos procesos organizativos tiene ISO 12207? || 3 || 4 || 5 || 6 || 1 || Tiene 4: Gestión, Infraestructura, Mejora y Capacitación.
4. ¿Que proceso entrega el producto al cliente? || Adquisición || Suministro || Desarrollo || Mantencion || 1 || El proceso de Suministro entrega el producto al cliente.
5. ¿Que proceso corrige errores y mejora el software ya entregado? || Desarrollo || Operación || Mantencion || Documentación || 2 || La Mantencion corrige errores y adapta/mejora el software.
:::

### Nivel 2 - Comprensión

:::quiz ISO 12207 - Nivel 2 (comprensión)
1. ISO 12207 define: || COMO hacer cada proceso || QUE procesos deben existir || El lenguaje de programación || El precio del software || 1 || Define que procesos deben existir, no como implementarlos.
2. ¿Cual es la diferencia entre verificación y validación? || Verificación: se construyo correctamente; validación: es el producto correcto || Son iguales || La validación es más rapida || La verificación solo aplica a hardware || 0 || Verificación evalúa calidad técnica; validación evalúa utilidad para el usuario.
3. ¿Para que sirve la gestión de la configuración? || Para vender software || Para controlar versiones y cambios || Para contratar personal || Para diseñar la interfaz || 1 || Controla versiones y cambios para no perder trabajo.
4. ¿Por que es importante separar los entornos de desarrollo, pruebas y producción? || Para gastar más || Para evitar que cambios sin probar afecten la operación || Para tener más servidores || Para cumplir una moda || 1 || La separación evita que errores de desarrollo lleguen a producción.
5. Un proceso de apoyo se caracteriza por: || Ser el core del ciclo de vida || Sostener a los procesos principales aunque no produzcan el software || Reemplazar a los procesos organizativos || Aplicarse solo al hardware || 1 || Los procesos de apoyo sostienen a los principales.
6. ¿Que proceso organizativo provee competencias al personal? || Gestión || Infraestructura || Mejora || Capacitación || 3 || Capacitación identifica y provee habilidades al personal.
:::

### Nivel 3 - Casos de empresa

:::quiz ISO 12207 - Nivel 3 (escenarios)
1. El banco define requisitos, evalúa ofertas y contrata a SoftAndes. ¿Que proceso principal es? || Adquisición || Suministro || Desarrollo || Operación || 0 || El banco ejecuta la Adquisición.
2. SoftAndes codifica y prueba el módulo de pagos. ¿Que proceso principal es? || Adquisición || Desarrollo || Operación || Mantencion || 1 || Codificar, probar e integrar es el proceso de Desarrollo.
3. El módulo se instala en producción del banco y se monitorea. ¿Que proceso principal es? || Desarrollo || Operación || Mantencion || Suministro || 1 || Instalar, monitorear y dar soporte en producción es Operación.
4. Un programador de SoftAndes hace un cambio directo en producción y tumba el sistema. ¿Que práctica se incumplio? || Separación de entornos || Documentación || Capacitación || Adquisición || 0 || Debe existir separación de entornos y control de cambios.
5. SoftAndes pierde una versión del código porque nadie controla versiones. ¿Que proceso de apoyo fallo? || Verificación || Gestión de la configuración || Revisión conjunta || Capacitación || 1 || La gestión de la configuración controla versiones y cambios.
6. Al final del proyecto SoftAndes analiza los retrasos para mejorar el próximo. ¿Que proceso es? || Organizativo: Mejora || Apoyo: Auditoría || Principal: Mantencion || Apoyo: Documentación || 0 || La Mejora evalúa y mejora los procesos organizacionales.
:::

### Práctica guiada

:::sort Ordena el ciclo de vida segun ISO 12207
- Adquisición
- Suministro
- Desarrollo
- Operación
- Mantencion
:::

:::match Categorías de procesos ISO 12207
- Principales (5) | Adquisición, Suministro, Desarrollo, Operación, Mantencion
- Apoyo (8) | Documentación, Configuración, Calidad, Verificación, Validación, Revisión, Auditoría, Solución de problemas
- Organizativos (4) | Gestión, Infraestructura, Mejora, Capacitación
:::

:::truefalse ISO 12207
1. ISO 12207 define COMO hacer cada proceso. || Falso || Define QUE procesos deben existir, no como implementarlos.
2. La verificación y la validación son lo mismo. || Falso || Verificación = ¿lo hicimos correctamente? Validación = ¿es lo que el usuario necesita?
3. Los procesos de apoyo son opcionales. || Falso || Son necesarios para que los procesos principales funcionen bien.
4. La separación de entornos es un control de seguridad. || Verdadero || Evita que cambios sin probar afecten producción.
5. ISO 12207 tiene 5 procesos principales. || Verdadero || Adquisición, Suministro, Desarrollo, Operación y Mantencion.
6. La gestión de la configuración controla versiones y cambios. || Verdadero || Es un proceso de apoyo clave.
:::

:::essay Análisis ISO 12207
1. Explica como ISO 12207 ordena el ciclo de vida del software y por que es un marco y no un método. || Pista: Distingue "que" de "como" y menciona las 3 categorías. || Respuesta modelo: ISO 12207 organiza el ciclo de vida en 5 procesos principales (Adquisición, Suministro, Desarrollo, Operación, Mantencion), 8 de apoyo y 4 organizativos. Es un marco porque define QUE procesos deben existir y como se relacionan, pero no prescribe COMO implementarlos: cada organización adapta los procesos a su contexto. Su valor es normalizar el lenguaje y dar una estructura comun. || [rúbrica: Menciona las 3 categorías, Distingue que y como, Da el objetivo del marco, Usa terminología correcta]
2. Analiza por que la separación de entornos es fundamental y que riesgo existe si no se aplica. Usa un ejemplo. || Pista: Piensa en desarrollo, pruebas y producción. || Respuesta modelo: La separación de entornos (desarrollo, pruebas, producción) es un control que evita que cambios sin probar afecten la operación. Si no existe, un programador puede modificar producción directamente: por ejemplo, en SoftAndes un cambio directo tumbo el sistema del banco y afecto a los usuarios. La separación permite probar antes de implementar, mantener estabilidad, dar trazabilidad y controlar los cambios. || [rúbrica: Define los entornos, Explica el riesgo, Da un ejemplo, Menciona controles]
:::

:::path Decisiones de Desarrollo
1 | Situación | Tu empresa desarrolla software sin procesos estandarizados. Los proyectos siempre se retrasan. Que haces? | Implementar ISO 12207=2; Contratar más programadores=3; Comprar software listo=4
2 | ISO 12207 | ISO 12207 proporciona un marco de procesos que organiza el ciclo de vida del software, reduciendo retrasos y mejorando calidad. | * | Excelente decisión. Establecer procesos claros desde el inicio evita problemas mayores después.
3 | Más personal | Contratar más programadores no resuelve el problema de proceso. Si no hay orden, más personas generan más caos. | * | Solución a corto plazo. Sin procesos, el problema persiste sin importar el tamaño del equipo.
4 | Software listo | Comprar software listo puede funcionar si se adapta, pero no resuelve la capacidad interna de desarrollo de la organización. | * | Solución viable para necesidades puntuales, pero no para la capacidad de desarrollo organizacional.
:::

:::arch gobierno-ti
