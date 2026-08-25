---
title: ITIL 4 - Gestion de Servicios de TI
emoji: "⚙️"
accent: "#7CB3E8"
category: gobierno-ti
difficulty: intermedio
order: 6
description: Marco de referencia ITIL 4 para la gestion de servicios de TI. Las 4 dimensiones, el Sistema de Valor de Servicio (SVS), las 7 guias de principio y las 34 practicas de gestion.
tags: [ITIL, gestion-servicios, SVS, practicas, CSI]
keyTakeaway: ITIL 4 ofrece un enfoque holistico para la gestion de servicios de TI, centrado en el valor, la co-creacion con el cliente y la mejora continua.
sources:
  - "Que es ITIL|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U25"
  - "ITIL las 4 dimensiones y 5 componentes del SVS|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "ITIL 4 Foundation|https://www.axelos.com|Axelos/PeopleCert|Certificacion oficial ITIL"
---

## Que es ITIL 4?

:::definition ITIL 4
Framework de referencia para la gestion de servicios de informacion y tecnologia (TI). Proporciona una guia practica para las organizaciones que buscan gestionar sus servicios de TI de manera efectiva, crear valor para los stakeholders y adaptarse a un entorno digital en constante cambio.
:::

:::callout info
ITIL 4 reemplaza a ITIL v3/2011. Su principal cambio es el enfoque en la co-creacion de valor y la integracion con marcos agiles como DevOps y Lean.
:::

## El Sistema de Valor de Servicio (SVS)

El SVS describe como las organizaciones crean valor al combinar componentes y actividades:

:::flow 5 Componentes del SVS
- Estrategia de Servicio (que servicios ofrecer)
- Cadena de Valor del Servicio (como entregar valor)
- Practicas de Gestion (herramientas y procesos)
- Gobierno y Controles (direccion y regulacion)
- Mejora Continua (evolucion constante)
:::

### La Cadena de Valor del Servicio

Es el modelo operativo del SVS: un conjunto interconectado de **6 actividades** que transforman las demandas (inputs) en productos y servicios (outputs):

| Actividad | Que hace |
|-----------|----------|
| **Planificar** | Alinear la cadena con la estrategia |
| **Mejorar** | Mejora continua en toda la cadena |
| **Involucrar (Engagement)** | Interactuar con usuarios y stakeholders |
| **Disenar y Transicionar** | Crear o modificar servicios |
| **Obtener/Construir** | Comprar o desarrollar componentes |
| **Entregar y Soportar** | Operar el servicio y dar soporte |

### Servicios y Ofertas de Servicio

:::definition Servicio (ITIL 4)
Medio para habilitar la creacion de valor co-creado con el consumidor, sin que este tenga que asumir costos o riesgos especificos.
:::

:::definition Oferta de Servicio (Service Offering)
Paquete formal que la organizacion presenta al cliente e incluye uno o mas servicios y productos, combinados para atender una necesidad concreta. Puede incluir bienes, acceso a recursos y acciones de servicio (ejemplo: plan de internet + router + soporte 24/7).
:::

## Las 4 Dimensiones de ITIL

Las dimensiones son perspectivas que deben equilibrarse en TODA decision sobre servicios:

| Dimension | Que abarca | Ejemplo |
|-----------|------------|---------|
| **Organizacion y Personas** | Estructura, roles, cultura, habilidades | Departamento de TI, capacitacion |
| **Informacion y Tecnologia** | Datos, conocimiento, herramientas y plataformas | ServiceNow, Jira, SAP, base de datos de configuracion |
| **Socios y Proveedores** | Relaciones con proveedores, contratos | SLA con Microsoft, AWS |
| **Flujos de Valor y Procesos** | Actividades y flujos organizados para entregar valor | Gestion de incidentes, cambios |

:::callout warning
Las 4 dimensiones deben considerarse de forma equilibrada. Enfocarse solo en tecnologia ignorando personas y procesos es la causa #1 de fracaso en proyectos de TI.
:::

## Las 7 Guia de Principios de ITIL

1. **Enfoque en el valor** — Todo lo que hagamos debe crear valor para el negocio y los clientes
2. **Empezar donde estas** — No reinventar la rueda; evaluar el contexto actual
3. **Progresar de forma iterativa** — Avanzar en ciclos, no en grandes saltos
4. **Visibilidad y transparencia** — Los resultados deben ser visibles para todos
5. **Trabajar y pensar de forma integral** — Evitar el trabajo en silos
6. **Simplificar y practicar** — Procesos simples y practicos
7. **Optimizar y automatizar** — Mejorar continuamente y automatizar donde sea posible

## Practicas de ITIL 4 (34 Practicas)

### Practicas Generales (14)
Incluyen: Gestion de la estrategia de servicio, Gestion del catalogo de servicios, Gestion de la relacion, Gestion de la satisfaccion, etc.

### Practicas de Servicio (17)
Incluyen: Gestion de incidentes, Gestion de problemas, Gestion de cambios, Gestion de activos de servicio, etc.

### Practicas de Soporte (3)
Incluyen: Gestion de la disponibilidad, Gestion de la capacidad, Gestion de la seguridad de la informacion.

:::callout success
ITIL 4 no exige implementar todas las practicas. Las organizaciones deben seleccionar las que mejor se adapten a sus necesidades y contexto.
:::

## Autoevaluacion

:::quiz
1. ¿Cuantas dimensiones tiene ITIL 4? || 2 || 3 || 4 || 5 || 2 || ITIL 4 tiene 4 dimensiones: Organizacion y Personas, Informacion y Tecnologia, Socios y Proveedores, y Flujos de Valor y Procesos.
2. ¿Cuantas practicas tiene ITIL 4? || 26 || 30 || 34 || 40 || 2 || ITIL 4 tiene 34 practicas de gestion.
3. ¿Cuantas actividades tiene la Cadena de Valor del Servicio? || 4 || 5 || 6 || 7 || 2 || Son 6: Planificar, Mejorar, Involucrar, Disenar y Transicionar, Obtener/Construir, y Entregar y Soportar.
:::

:::sort Principios Guia de ITIL 4 (en orden)
- Enfoque en el valor
- Empezar donde estas
- Progresar de forma iterativa
- Colaborar y promover la visibilidad
- Pensar y trabajar de forma integral
- Simplificar y practicar
- Optimizar y automatizar
:::

:::quiz ITIL 4 Fundamentos
1. Que reemplaza el ciclo de vida de ITIL v3? || Procesos || Cadena de valor del servicio || Governance || Matriz RACI || 1 || ITIL 4 introduce la cadena de valor como modelo operativo.
2. Cuantos componentes tiene el SVS? || 4 || 5 || 8 || 10 || 1 || 5 componentes: Estrategia de Servicio, Cadena de Valor del Servicio, Practicas de Gestion, Gobierno y Controles, y Mejora Continua.
3. Que es un service offering en ITIL 4? || Un ticket de soporte || Un paquete formal de servicios y productos que se ofrece al cliente || Una auditoria || Un contrato || 1 || Un service offering combina servicios, productos y acciones de servicio para atender una necesidad concreta.
:::
