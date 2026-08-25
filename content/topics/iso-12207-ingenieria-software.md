---
title: ISO 12207 - Procesos del Ciclo de Vida del Software
emoji: "⚙️"
accent: "#6DD4A0"
category: iso-ingenieria
difficulty: intermedio
order: 17
description: Norma ISO/IEC 12207 que establece un marco comun para los procesos del ciclo de vida del software. Procesos principales, de apoyo y organizativos. Relacion con la auditoria informatica y la normalizacion de procesos.
tags: [ISO-12207, ciclo-vida-software, procesos, normalizacion, ingenieria-software]
keyTakeaway: ISO 12207 es el marco de referencia mas importante para normalizar los procesos del ciclo de vida del software. Organiza las actividades en procesos principales, de apoyo y organizativos, permitiendo que organizaciones de cualquier tamano trabajen con estandares internacionales.
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

## Procesos Principales

Son las actividades fundamentales del ciclo de vida del software. Cada proceso tiene objetivos claros:

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

## Procesos de Apoyo

No son parte del ciclo de vida directo, pero son necesarios para que los procesos principales funcionen bien. ISO 12207 define **8 procesos de apoyo**:

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

## Procesos Organizativos

Gestionan la organizacion como un todo, no un proyecto especifico. ISO 12207 define **4 procesos organizativos**:

| Proceso | Que hace | Objetivo |
|---------|----------|----------|
| **Gestion** | Define actividades genericas del manager del ciclo de vida | Planificar, ejecutar, controlar y cerrar procesos |
| **Infraestructura** | Establece y mantiene la infraestructura subyacente | Hardware, software, estandares, herramientas y instalaciones |
| **Mejora** | Evalua, mide, controla y mejora los procesos del ciclo de vida | Mejora continua de procesos organisation-wide |
| **Capacitacion** | Identifica y provee habilidades y conocimientos al personal | Personal con competencias adecuadas en tiempo oportuno |

## Relacion con la Auditoria Informatica

:::callout info
ISO 12207 proporciona el marco para que la auditoria informatica evalua si la organizacion tiene y sigue procesos estandarizados para el ciclo de vida del software. Un auditor verifica que existan los procesos documentados y que se cumplan.
:::

| Proceso ISO 12207 | Que evalua la auditoria |
|-------------------|------------------------|
| **Gestion de configuracion** | ¿Se controlan los cambios correctamente? |
| **Verificacion** | ¿Se prueban los productos antes de entregar? |
| **Auditoria interna** | ¿Se evaluan los procesos periodicamente? |
| **Documentacion** | ¿Existe documentacion actualizada? |
| **Gestion de proyectos** | ¿Se planifican y controlan los proyectos? |

## Separacion de Entornos

Una práctica clave que ISO 12207 y la auditoria informatica promueven es la separacion de entornos de trabajo:

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

## Relacion con OTROS Marcos

| Marco | Que define | Como se relaciona con ISO 12207 |
|-------|------------|-------------------------------|
| **COBIT** | Gobierno y gestion de TI | ISO 12207 alimenta los procesos de BAI (Construir, Adquirir e Implementar) |
| **ITIL** | Gestion de servicios | ISO 12207 define como se desarrolla el software que ITIL opera |
| **ISO 38500** | Gobierno corporativo | ISO 12207 implementa los principios de gobierno en procesos de software |
| **PMBOK** | Gestion de proyectos | ISO 12207 complementa con procesos especificos de software |

:::callout info
La auditoria informatica puede usar ISO 12207 como referencia para evaluar si la organizacion tiene procesos adecuados de desarrollo y mantenimiento de software.
:::

## Autoevaluacion

:::quiz ISO 12207
1. Cuantos procesos principales tiene ISO 12207? || 3 || 4 || 5 || 7 || 2 || ISO 12207 tiene 5 procesos principales: Adquisicion, Suministro, Desarrollo, Operacion y Mantencion.
2. Cuantos procesos de apoyo tiene ISO 12207? || 5 || 7 || 8 || 10 || 2 || ISO 12207 tiene 8 procesos de apoyo: Documentacion, Configuracion, Aseguramiento de calidad, Verificacion, Validacion, Revision conjunta, Auditoria y Solucion de problemas.
3. Cuantos procesos organizativos tiene ISO 12207? || 3 || 4 || 5 || 6 || 1 || ISO 12207 tiene 4 procesos organizativos: Gestion, Infraestructura, Mejora y Capacitacion.
:::

:::truefalse ISO 12207
1. ISO 12207 define COMO hacer cada proceso. || Falso || ISO 12207 define QUE procesos deben existir, no COMO implementarlos.
2. La verificacion y la validacion son lo mismo. || Falso || Verificacion = ¿lo hicimos correctamente? Validacion = ¿es lo que el usuario necesita?
3. Los procesos de apoyo son opcionales. || Falso || Son necesarios para que los procesos principales funcionen bien.
:::

:::match Categorias de procesos ISO 12207
- Principales (5) | Adquisicion, Suministro, Desarrollo, Operacion, Mantencion
- Apoyo (8) | Documentacion, Configuracion, Aseguramiento de calidad, Verificacion, Validacion, Revision conjunta, Auditoria, Solucion de problemas
- Organizativos (4) | Gestion, Infraestructura, Mejora, Capacitacion
:::

:::path Decisiones de Desarrollo
1 | Situacion | Tu empresa desarrolla software sin procesos estandarizados. Los proyectos siempre se retrasan. Que haces? | Implementar ISO 12207=2; Contratar mas programadores=3; Comprar software listo=4
2 | ISO 12207 | ISO 12207 proporciona un marco de procesos que organiza el ciclo de vida del software, reduciendo retrasos y mejorando calidad. | * | Excelente decision. Establecer procesos claros desde el inicio evita problemas mayores despues.
3 | Mas personal | Contratar mas programadores no resuelve el problema de proceso. Si no hay orden, mas personas generan mas caos. | * | Solucion a corto plazo. Sin procesos, el problema persiste independientemente del tamano del equipo.
4 | Software listo | Comprar software listo puede funcionar si se adapta, pero no resuelve la capacidad interna de desarrollo de la organizacion. | * | Solucion viable para necesidades puntuales, pero no para la capacidad de desarrollo organizacional.
:::

:::arch gobierno-ti
