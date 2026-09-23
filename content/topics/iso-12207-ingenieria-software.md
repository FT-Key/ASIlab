---
title: ISO 12207 - Procesos del Ciclo de Vida del Software
emoji: "⚙️"
accent: "#6DD4A0"
category: iso-ingenieria
difficulty: intermedio
order: 17
description: Norma ISO/IEC 12207 que establece un marco comun para los procesos del ciclo de vida del software. Procesos principales (5), de apoyo (8) y organizativos (4), con un caso aplicado. Relacion con la auditoria informatica y la normalizacion de procesos.
tags: [ISO-12207, ciclo-vida-software, procesos, normalizacion, ingenieria-software]
keyTakeaway: ISO 12207 es el marco de referencia mas importante para normalizar los procesos del ciclo de vida del software. Organiza las actividades en 5 procesos principales, 8 de apoyo y 4 organizativos, y no define COMO hacerlos sino QUE deben existir.
sources:
  - "Resumen primer parcial|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "RESUMEN PRIMER PARCIAL|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "EXAMEN PARCIAL I DE ADM REC|https://uniagustiniana.edu.co|Universidad Agustiniana|Examen practico"
---

## Que es ISO 12207?

:::definition ISO/IEC 12207
Norma internacional que establece un marco comun para los procesos del ciclo de vida del software. Define una estructura estandar de procesos que pueden usar organizaciones de cualquier tipo y tamano para desarrollar, mantener y adquirir software de forma consistente y de calidad.
:::

:::callout info
ISO 12207 no define COMO hacer cada proceso, sino QUE procesos deben existir. Cada organizacion adapta los procesos a su contexto, pero la estructura base es la misma.
:::

## Importancia de la Normalizacion

| Beneficio | Que aporta |
|-----------|------------|
| **Comunica un lenguaje comun** | Todos los involucrados hablan el mismo idioma tecnico |
| **Reduce tiempos de desarrollo** | Procesos estandarizados evitan retrabajo |
| **Aumenta la calidad del producto** | Cada paso tiene criterios claros de calidad |
| **Facilita la integracion** | Diferentes equipos pueden trabajar juntos |
| **Reduce costos** | Menos errores = menos correcciones = menor costo |
| **Mejora la satisfaccion del usuario** | Producto final mas cercano a lo que el usuario necesita |

:::callout warning
ISO 12207 no es un metodo de desarrollo. Es un MARCO que organiza los procesos. La organizacion debe definir como implementar cada proceso segun su contexto.
:::

## Estructura de Procesos de ISO 12207

:::flow Tres Categorias de Procesos
- Procesos Principales (5): el core del ciclo de vida del software
- Procesos de Apoyo (8): soportan a los principales
- Procesos Organizativos (4): gestionan la organizacion
:::

## Procesos Principales (5)

Son las actividades fundamentales del ciclo de vida del software.

| Proceso | Que hace | Objetivo principal |
|---------|----------|-------------------|
| **Adquisicion** | Obtener un producto o servicio de un proveedor | Definir requisitos y seleccionar proveedor |
| **Suministro** | Entregar un producto o servicio a un cliente | Cumplir con los requisitos acordados |
| **Desarrollo** | Crear el producto de software | Transformar requisitos en software funcional |
| **Operacion** | Usar y mantener el software en produccion | Asegurar que funcione correctamente |
| **Mantencion** | Corregir errores y mejorar el software | Mantener la calidad y relevancia del software |

:::callout info
Estos 5 procesos se encadenan: Adquisicion → Suministro → Desarrollo → Operacion → Mantencion. Cada uno genera outputs que son inputs del siguiente.
:::

### Detalle de cada Proceso Principal

#### 1. Proceso de Adquisicion
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
- Analisis de requisitos
- Diseno del sistema
- Codificacion
- Pruebas
- Integracion

#### 4. Proceso de Operacion
- Instalacion en produccion
- Monitoreo continuo
- Soporte a usuarios
- Gestion de incidentes

#### 5. Proceso de Mantencion
- Correccion de errores
- Adaptacion a cambios
- Mejora de funcionalidades
- Optimizacion de rendimiento

## Procesos de Apoyo (8)

No son parte del ciclo de vida directo, pero son necesarios para que los procesos principales funcionen bien.

| Proceso | Que hace | Para que sirve |
|---------|----------|----------------|
| **Documentacion** | Crea y mantiene documentacion | Que todos tengan informacion clara |
| **Gestion de la configuracion** | Controla versiones y cambios | Que no se pierdan cambios ni versiones |
| **Aseguramiento de la calidad** | Establece marcos para garantizar calidad | Que los procesos y productos cumplan estandares |
| **Verificacion** | Confirma que cumple requisitos | Que el producto sea lo que se pidio |
| **Validacion** | Confirma que satisface la necesidad real | Que el producto sea util para el usuario |
| **Revision conjunta** | Evalua el producto en puntos clave | Detectar problemas temprano |
| **Auditoria** | Evalua el cumplimiento de procesos | Que se sigan los procedimientos |
| **Solucion de problemas** | Resuelve incidencias | Que los problemas se resuelvan rapido |

:::callout idea
La verificacion pregunta "¿hicimos el producto correctamente?". La validacion pregunta "¿hicimos el producto correcto?". Son diferentes: una evalua calidad tecnica, la otra evalua utilidad para el usuario.
:::

## Procesos Organizativos (4)

Gestionan la organizacion como un todo, no un proyecto especifico.

| Proceso | Que hace | Objetivo |
|---------|----------|----------|
| **Gestion** | Define actividades genericas del manager del ciclo de vida | Planificar, ejecutar, controlar y cerrar procesos |
| **Infraestructura** | Establece y mantiene la infraestructura subyacente | Hardware, software, estandares, herramientas e instalaciones |
| **Mejora** | Evalua, mide, controla y mejora los procesos | Mejora continua de procesos a nivel organizacion |
| **Capacitacion** | Identifica y provee habilidades al personal | Personal con competencias adecuadas en tiempo oportuno |

## Separacion de Entornos

Una practica clave que ISO 12207 y la auditoria informatica promueven:

| Entorno | Para que sirve | Quien lo usa |
|---------|----------------|--------------|
| **Desarrollo** | Crear y modificar el software | Programadores |
| **Pruebas** | Validar el software antes de produccion | Equipo de QA |
| **Produccion** | Operar el software para el negocio | Usuarios finales |

:::callout danger
Si no se separan los entornos, un programador puede hacer cambios directamente en produccion y causar fallos en el sistema operativo de la empresa. La separacion de entornos es un control fundamental de seguridad.
:::

### Por que separar entornos?

1. **Seguridad** — Evita que cambios en desarrollo afecten la operacion
2. **Control de cambios** — Permite probar antes de implementar
3. **Estabilidad** — Produccion no se ve afectada por pruebas
4. **Trazabilidad** — Se puede rastrear cada cambio desde su origen

## Caso practico: SoftAndes y el modulo bancario

SoftAndes es una empresa de software a la que un banco le encarga un modulo de pagos. SoftAndes aplica ISO 12207 para ordenar el trabajo.

| Proceso ISO 12207 | Que hace SoftAndes en el caso |
|-------------------|-------------------------------|
| **Adquisicion** | El banco (cliente) define requisitos, evalua ofertas y contrata a SoftAndes |
| **Suministro** | SoftAndes entiende los requisitos del banco y planifica la entrega |
| **Desarrollo** | Analiza requisitos, disena, codifica, prueba e integra el modulo |
| **Operacion** | El modulo se instala en produccion del banco, se monitorea y se da soporte |
| **Mantencion** | Se corrigen errores y se agregan funcionalidades nuevas |
| **Apoyo: Gestion de configuracion** | Se controlan versiones y cambios del codigo |
| **Apoyo: Verificacion / Validacion** | Se prueba que cumple requisitos y que sirve al usuario |
| **Organizativo: Mejora** | Se analizan los retrasos y se mejora el proceso para el proximo proyecto |

:::callout success
Observa que los procesos de apoyo y organizativos no "se ven" en el producto final, pero sin ellos el proyecto se desordena: sin control de versiones se pierden cambios, sin verificacion se entregan defectos, sin mejora se repiten los mismos errores.
:::

## Relacion con la Auditoria Informatica

:::callout info
ISO 12207 proporciona el marco para que la auditoria informatica evalua si la organizacion tiene y sigue procesos estandarizados para el ciclo de vida del software. Un auditor verifica que existan los procesos documentados y que se cumplan.
:::

| Proceso ISO 12207 | Que evalua la auditoria |
|-------------------|------------------------|
| **Gestion de configuracion** | ¿Se controlan los cambios correctamente? |
| **Verificacion** | ¿Se prueban los productos antes de entregar? |
| **Auditoria** | ¿Se evaluan los procesos periodicamente? |
| **Documentacion** | ¿Existe documentacion actualizada? |
| **Gestion** | ¿Se planifican y controlan los proyectos? |

## Relacion con OTROS Marcos

| Marco | Que define | Como se relaciona con ISO 12207 |
|-------|------------|-------------------------------|
| **COBIT** | Gobierno y gestion de TI | ISO 12207 alimenta los procesos de BAI (Construir, Adquirir e Implementar) |
| **ITIL** | Gestion de servicios | ISO 12207 define como se desarrolla el software que ITIL opera |
| **ISO 38500** | Gobierno corporativo | ISO 12207 implementa los principios de gobierno en procesos de software |
| **PMBOK** | Gestion de proyectos | ISO 12207 complementa con procesos especificos de software |

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz ISO 12207 - Nivel 1 (memoria)
1. ¿Cuantos procesos principales tiene ISO 12207? || 3 || 4 || 5 || 7 || 2 || Tiene 5: Adquisicion, Suministro, Desarrollo, Operacion y Mantencion.
2. ¿Cuantos procesos de apoyo tiene ISO 12207? || 5 || 7 || 8 || 10 || 2 || Tiene 8 procesos de apoyo.
3. ¿Cuantos procesos organizativos tiene ISO 12207? || 3 || 4 || 5 || 6 || 1 || Tiene 4: Gestion, Infraestructura, Mejora y Capacitacion.
4. ¿Que proceso entrega el producto al cliente? || Adquisicion || Suministro || Desarrollo || Mantencion || 1 || El proceso de Suministro entrega el producto al cliente.
5. ¿Que proceso corrige errores y mejora el software ya entregado? || Desarrollo || Operacion || Mantencion || Documentacion || 2 || La Mantencion corrige errores y adapta/mejora el software.
:::

### Nivel 2 - Comprension

:::quiz ISO 12207 - Nivel 2 (comprension)
1. ISO 12207 define: || COMO hacer cada proceso || QUE procesos deben existir || El lenguaje de programacion || El precio del software || 1 || Define que procesos deben existir, no como implementarlos.
2. ¿Cual es la diferencia entre verificacion y validacion? || Verificacion: se construyo correctamente; validacion: es el producto correcto || Son iguales || La validacion es mas rapida || La verificacion solo aplica a hardware || 0 || Verificacion evalua calidad tecnica; validacion evalua utilidad para el usuario.
3. ¿Para que sirve la gestion de la configuracion? || Para vender software || Para controlar versiones y cambios || Para contratar personal || Para disenar la interfaz || 1 || Controla versiones y cambios para no perder trabajo.
4. ¿Por que es importante separar los entornos de desarrollo, pruebas y produccion? || Para gastar mas || Para evitar que cambios sin probar afecten la operacion || Para tener mas servidores || Para cumplir una moda || 1 || La separacion evita que errores de desarrollo lleguen a produccion.
5. Un proceso de apoyo se caracteriza por: || Ser el core del ciclo de vida || Sostener a los procesos principales aunque no produzcan el software || Reemplazar a los procesos organizativos || Aplicarse solo al hardware || 1 || Los procesos de apoyo sostienen a los principales.
6. ¿Que proceso organizativo provee competencias al personal? || Gestion || Infraestructura || Mejora || Capacitacion || 3 || Capacitacion identifica y provee habilidades al personal.
:::

### Nivel 3 - Casos de empresa

:::quiz ISO 12207 - Nivel 3 (escenarios)
1. El banco define requisitos, evalua ofertas y contrata a SoftAndes. ¿Que proceso principal es? || Adquisicion || Suministro || Desarrollo || Operacion || 0 || El banco ejecuta la Adquisicion.
2. SoftAndes codifica y prueba el modulo de pagos. ¿Que proceso principal es? || Adquisicion || Desarrollo || Operacion || Mantencion || 1 || Codificar, probar e integrar es el proceso de Desarrollo.
3. El modulo se instala en produccion del banco y se monitorea. ¿Que proceso principal es? || Desarrollo || Operacion || Mantencion || Suministro || 1 || Instalar, monitorear y dar soporte en produccion es Operacion.
4. Un programador de SoftAndes hace un cambio directo en produccion y tumba el sistema. ¿Que practica se incumplio? || Separacion de entornos || Documentacion || Capacitacion || Adquisicion || 0 || Debe existir separacion de entornos y control de cambios.
5. SoftAndes pierde una version del codigo porque nadie controla versiones. ¿Que proceso de apoyo fallo? || Verificacion || Gestion de la configuracion || Revision conjunta || Capacitacion || 1 || La gestion de la configuracion controla versiones y cambios.
6. Al final del proyecto SoftAndes analiza los retrasos para mejorar el proximo. ¿Que proceso es? || Organizativo: Mejora || Apoyo: Auditoria || Principal: Mantencion || Apoyo: Documentacion || 0 || La Mejora evalua y mejora los procesos organizacionales.
:::

### Practica guiada

:::sort Ordena el ciclo de vida segun ISO 12207
- Adquisicion
- Suministro
- Desarrollo
- Operacion
- Mantencion
:::

:::match Categorias de procesos ISO 12207
- Principales (5) | Adquisicion, Suministro, Desarrollo, Operacion, Mantencion
- Apoyo (8) | Documentacion, Configuracion, Calidad, Verificacion, Validacion, Revision, Auditoria, Solucion de problemas
- Organizativos (4) | Gestion, Infraestructura, Mejora, Capacitacion
:::

:::truefalse ISO 12207
1. ISO 12207 define COMO hacer cada proceso. || Falso || Define QUE procesos deben existir, no como implementarlos.
2. La verificacion y la validacion son lo mismo. || Falso || Verificacion = ¿lo hicimos correctamente? Validacion = ¿es lo que el usuario necesita?
3. Los procesos de apoyo son opcionales. || Falso || Son necesarios para que los procesos principales funcionen bien.
4. La separacion de entornos es un control de seguridad. || Verdadero || Evita que cambios sin probar afecten produccion.
5. ISO 12207 tiene 5 procesos principales. || Verdadero || Adquisicion, Suministro, Desarrollo, Operacion y Mantencion.
6. La gestion de la configuracion controla versiones y cambios. || Verdadero || Es un proceso de apoyo clave.
:::

:::essay Analisis ISO 12207
1. Explica como ISO 12207 ordena el ciclo de vida del software y por que es un marco y no un metodo. || Pista: Distingue "que" de "como" y menciona las 3 categorias. || Respuesta modelo: ISO 12207 organiza el ciclo de vida en 5 procesos principales (Adquisicion, Suministro, Desarrollo, Operacion, Mantencion), 8 de apoyo y 4 organizativos. Es un marco porque define QUE procesos deben existir y como se relacionan, pero no prescribe COMO implementarlos: cada organizacion adapta los procesos a su contexto. Su valor es normalizar el lenguaje y dar una estructura comun. || [rubrica: Menciona las 3 categorias, Distingue que y como, Da el objetivo del marco, Usa terminologia correcta]
2. Analiza por que la separacion de entornos es fundamental y que riesgo existe si no se aplica. Usa un ejemplo. || Pista: Piensa en desarrollo, pruebas y produccion. || Respuesta modelo: La separacion de entornos (desarrollo, pruebas, produccion) es un control que evita que cambios sin probar afecten la operacion. Si no existe, un programador puede modificar produccion directamente: por ejemplo, en SoftAndes un cambio directo tumbo el sistema del banco y afecto a los usuarios. La separacion permite probar antes de implementar, mantener estabilidad, dar trazabilidad y controlar los cambios. || [rubrica: Define los entornos, Explica el riesgo, Da un ejemplo, Menciona controles]
:::

:::path Decisiones de Desarrollo
1 | Situacion | Tu empresa desarrolla software sin procesos estandarizados. Los proyectos siempre se retrasan. Que haces? | Implementar ISO 12207=2; Contratar mas programadores=3; Comprar software listo=4
2 | ISO 12207 | ISO 12207 proporciona un marco de procesos que organiza el ciclo de vida del software, reduciendo retrasos y mejorando calidad. | * | Excelente decision. Establecer procesos claros desde el inicio evita problemas mayores despues.
3 | Mas personal | Contratar mas programadores no resuelve el problema de proceso. Si no hay orden, mas personas generan mas caos. | * | Solucion a corto plazo. Sin procesos, el problema persiste sin importar el tamano del equipo.
4 | Software listo | Comprar software listo puede funcionar si se adapta, pero no resuelve la capacidad interna de desarrollo de la organizacion. | * | Solucion viable para necesidades puntuales, pero no para la capacidad de desarrollo organizacional.
:::

:::arch gobierno-ti
