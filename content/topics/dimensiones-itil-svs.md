---
title: Las 4 Dimensiones de ITIL y el SVS
emoji: "🔮"
accent: "#7CB3E8"
category: gobierno-ti
difficulty: intermedio
order: 11
description: Analisis profundo de las 4 dimensiones de ITIL 4 y los 5 componentes del Sistema de Valor de Servicio (SVS). Como se integran para crear valor en organizaciones de TI.
tags: [ITIL, 4-dimensiones, SVS, cadena-valor, practicas]
keyTakeaway: Las 4 dimensiones y el SVS de ITIL 4 proporcionan un marco holistico que asegura que todos los aspectos de la gestion de servicios esten considerados para crear valor.
sources:
  - "ITIL las 4 dimensiones y 5 componentes del SVS|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento de clase"
  - "ITIL 4 Foundation|https://www.axelos.com|Axelos/PeopleCert|Certificacion oficial"
---

## El Sistema de Valor de Servicio (SVS)

:::definition SVS (Service Value System)
Modelo que describe como las organizaciones crean valor al combinar componentes y actividades del sistema de gestion de servicios de TI. Integra la estrategia, la cadena de valor, las practicas de gestion, el gobierno y la mejora continua.
:::

:::flow 5 Componentes del SVS
- Estrategia de Servicio (que servicios ofrecemos)
- Cadena de Valor (como entregar valor)
- Practicas de Gestion (herramientas y procesos)
- Gobierno y Controles (direccion y regulacion)
- Mejora Continua (evolucion constante)
:::

## La Cadena de Valor

La cadena de valor transforma los inputs en outputs que generan valor:

| Actividad | Descripcion | Ejemplo |
|-----------|-------------|---------|
| **Planificar** | Definir estrategia y objetivos | Definir catalogo de servicios |
| **Mejorar** | Mejora continua de servicios | Optimizar tiempos de respuesta |
| **Engagement** | Interaccion con stakeholders | Soporte tecnico, solicitudes |
| **Diseñar y Transicionar** | Crear o cambiar servicios | Nuevo portal web |
| **Obtener/Construir** | Adquirir o desarrollar componentes | Licencias, desarrollo interno |
| **Entregar y Soportar** | Operar y soportar servicios | Mantenimiento, soporte L1/L2/L3 |

:::callout info
La cadena de valor NO es lineal. Las actividades se ejecutan de forma iterativa y paralela, similar a como funciona un equipo de desarrollo agil.
:::

## Las 4 Dimensiones de ITIL

### Dimension 1: Organizacion y Personas

| Elemento | Que abarca |
|----------|------------|
| Estructura organizacional | Jerarquia, departamentos, roles |
| Capacidad | Habilidades y competencias |
| Cultura | Valores, normas, comportamientos |
| Gestion del conocimiento | Documentacion, capacitacion |
| Trabajo en equipo | Colaboracion, comunicacion |

:::callout warning
La dimension de personas es la mas subestimada en proyectos de TI. El 70% de las fallas en servicios de TI se deben a factores humanos, no tecnicos.
:::

### Dimension 2: Informacion y Tecnologia

Incluye tanto la informacion que gestiona el servicio como la tecnologia que lo soporta:

- **Informacion y conocimiento** — Datos del negocio, bases de conocimiento, seguridad de la informacion, cumplimiento de proteccion de datos
- **Tecnologia y herramientas** — Aplicaciones, infraestructura y plataformas necesarias para el servicio

| Capa | Ejemplos |
|------|----------|
| Herramientas de gestion | ServiceNow, Jira, Zendesk |
| Automatizacion | Ansible, Terraform, scripts |
| Monitoreo | Nagios, Datadog, Grafana |
| Comunicacion | Teams, Slack, email |
| Seguridad | Firewalls, SIEM, IAM |

### Dimension 3: Socios y Proveedores

- **Tipos de relacion**: Contratos, alianzas, acuerdos de nivel de servicio (SLA)
- **Gestion de proveedores**: Evaluacion, seleccion, monitoreo, desempeno
- **Estrategia de abastecimiento**: Hacer o comprar (make or buy), multi-proveedor, asociacion (partner)

### Dimension 4: Flujos de Valor y Procesos

Incluye todos los flujos y procesos necesarios para gestionar servicios:

- **Flujos de valor** — Secuencia de pasos que transforma una demanda en un resultado con valor (ejemplo: de solicitud a servicio entregado)
- **Procesos de soporte** — Incidente, problema, cambio, solicitud de servicio
- **Flujos de trabajo** — Actividades ordenadas con reglas de negocio y responsables definidos

:::callout success
Las 4 dimensiones deben considerarse de forma equilibrada. Un enfoque solo en tecnologia sin considerar personas, procesos y proveedores garantiza el fracaso.
:::

## Autoevaluacion

:::quiz
1. ¿Cuantos componentes tiene el SVS? || 3 || 4 || 5 || 6 || 2 || El SVS tiene 5 componentes: Estrategia, Cadena de Valor, Practicas, Gobierno, Mejora Continua.
2. ¿Que dimension incluye la cultura organizacional? || Procesos || Tecnologia || Organizacion y Personas || Socios y Proveedores || 2 || La dimension Organizacion y Personas incluye la cultura, estructura y capacidades del equipo.
3. ¿Que actividad de la cadena de valor se enfoca en operar servicios? || Planificar || Disenar y Transicionar || Entregar y Soportar || Mejorar || 2 || Entregar y Soportar es la actividad que opera y soporta los servicios en produccion.
:::

:::arch itil-lifecycle

:::truefalse Dimensiones del SVS
1. El SVS tiene 4 componentes. || Falso || El SVS tiene 5 componentes: Estrategia de Servicio, Cadena de Valor del Servicio, Practicas de Gestion, Gobierno y Controles, y Mejora Continua. Lo que SI tiene 4 son las dimensiones del modelo.
2. La cultura organizacional afecta la entrega de servicios. || Verdadero || La cultura es un factor critico en la dimension de organizacion y personas.
3. Los socios y proveedores no forman parte del modelo. || Falso || Socios y Proveedores es una de las 4 dimensiones de ITIL.
4. La mejora continua es un componente del SVS. || Verdadero || La mejora continua es uno de los 5 componentes centrales del SVS.
:::
