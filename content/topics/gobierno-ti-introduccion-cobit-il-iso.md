---
title: Gobierno de TI - Introduccion a COBIT, ITIL e ISO 38500
emoji: "🏛️"
accent: "#7C61D4"
category: gobierno-ti
difficulty: intermedio
order: 3
description: Vision general de los tres marcos de referencia mas importantes para el gobierno y gestion de TI: COBIT 2019, ITIL 4 e ISO 38500. Sus objetivos, alcance y como se complementan.
tags: [gobierno-TI, COBIT, ITIL, ISO-38500, marcos-referencia]
keyTakeaway: COBIT define QUE governar, ITIL define COMO gestionar servicios, e ISO 38500 establece los principios para el gobierno responsable de TI.
sources:
  - "Introduccion a COBIT ITIL e ISO 38500|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U22"
  - "ISO 38500 - IT Governance|https://www.iso.org|ISO|Norma internacional de gobierno corporativo de TI"
  - "COBIT 2019 Framework|https://www.isaca.org|ISACA|Framework de gobierno y gestion de TI"
---

## Que es el Gobierno de TI?

:::definition Gobierno de TI
Proceso de liderazgo, estructuras organizacionales y procesos que aseguran que la TI de la organizacion soporte y extienda sus estrategias y objetivos. El gobierno provee la direccion estrategica, asegura que los objetivos se alcanzan, gestiona los riesgos de forma apropiada y verifica que los recursos de la organizacion se usan de manera responsable.
:::

:::callout info
El gobierno de TI no es lo mismo que la gestion de TI. El gobierno responde a la pregunta "¿que debemos hacer?", mientras que la gestion responde a "¿como lo hacemos?"
:::

## Los Tres Marcos de Referencia

| Marco | Enfoque | Pregunta que responde | Organismo |
|-------|---------|----------------------|-----------|
| **COBIT 2019** | Gobierno y gestion de TI | ¿Que debemos governar? | ISACA |
| **ITIL 4** | Gestion de servicios de TI | ¿Como gestionar servicios? | Axelos/PeopleCert |
| **ISO 38500** | Gobierno corporativo de TI | ¿Que principios seguir? | ISO |

:::callout warning
Estos marcos no son excluyentes. Las organizaciones maduras utilizan los tres de forma complementaria: COBIT para el gobierno, ITIL para la operacion de servicios, e ISO 38500 para establecer principios.
:::

:::callout info
Otros marcos que acompanan estos tres durante el curso: **PMBOK** (gestion de proyectos) e **ISO 27001** (seguridad de la informacion). No son marcos de gobierno de TI, pero se integran con ellos.
:::

## COBIT 2019

COBIT (Control Objectives for Information and Related Technologies) es el framework mas completo para el gobierno y gestion de TI, publicado por ISACA. Sus componentes principales:

### Los 5 Dominios

Los dominios agrupan los procesos por su proposito. Cada sigla indica las actividades que cubre:

| Dominio | Significado | Que hace | Tipo |
|---------|-------------|----------|------|
| **EDM** | Evaluar, Dirigir y Monitorear | El tablero directivo evalua la estrategia, dirige su ejecucion y monitorea los resultados | Gobierno |
| **APO** | Alinear, Planificar y Organizar | Prepara la estrategia de TI, el presupuesto, la organizacion y los recursos para ejecutarla | Gestion |
| **BAI** | Construir, Adquirir e Implementar | Desarrolla o compra soluciones y las pone en operacion | Gestion |
| **DSS** | Entregar, Servir y Soportar | Opera los servicios dia a dia y da soporte a los usuarios | Gestion |
| **MEA** | Monitorear, Evaluar y Valorar | Mide el desempeno, verifica el cumplimiento y reporta al gobierno | Gestion |

:::callout info
Diferencia clave: EDM es el unico dominio de GOBIERNO (lo ejerce la alta direccion). Los otros cuatro son de GESTION (los ejecutan los equipos operativos).
:::

### Otros componentes

- **40 Objetivos de Gobierno y Gestion**: cada uno es un proceso con metas concretas (ejemplo: APO12 Gestionar el riesgo), distribuidos asi: 5 en EDM, 14 en APO, 11 en BAI, 6 en DSS y 4 en MEA.
- **Factores de diseño**: caracteristicas de la organizacion (tamano, estrategia, perfil de riesgo) que determinan COMO configurar el gobierno; no hay una receta unica.
- **Sistema de metricas**: cascada de metas donde cada objetivo tiene metricas (unidades de desempeno) y evidencias que prueban si se cumplio.

## ITIL 4

ITIL (Information Technology Infrastructure Library) se enfoca en la gestion de servicios de TI: como diseñar, entregar y mejorar los servicios que los usuarios consumen.

### Las 4 Dimensiones

Son las perspectivas que SIEMPRE debes considerar al gestionar un servicio; omitir una causa fallas:

1. **Organizacion y Personas** — estructura, roles, cultura y habilidades del equipo
2. **Informacion y Tecnologia** — datos, conocimiento y herramientas necesarias
3. **Socios y Proveedores** — contratos y relaciones con terceros
4. **Flujos de Valor y Procesos** — actividades organizadas para entregar el servicio

### Los 5 Componentes del SVS (Sistema de Valor de Servicio)

El SVS describe como la organizacion convierte la demanda en valor:

1. **Estrategia de Servicio** — decide que servicios ofrecer y hacia donde ir
2. **Cadena de Valor del Servicio** — modelo operativo con las actividades para crear y entregar el valor
3. **Practicas de Gestion** — conjuntos de recursos y procesos para realizar el trabajo (ejemplo: gestion de incidentes)
4. **Gobierno y Controles** — direccion, evaluacion y monitoreo del sistema
5. **Mejora Continua** — evolucion constante de productos, servicios y practicas

### Los Principios Guia

Recomendaciones universales que orientan las decisiones:

1. **Enfoque en el valor** — Todo lo que hagamos debe crear valor para el negocio y los clientes
2. **Empezar donde estas** — No reinventar la rueda; evaluar el contexto actual
3. **Progresar de forma iterativa** — Avanzar en ciclos con retroalimentacion, no en grandes saltos
4. **Colaborar y promover la visibilidad** — Trabajar con otros y hacer transparentes los resultados
5. **Pensar y trabajar de forma integral** — Evitar el trabajo en silos; el servicio es un todo
6. **Simplificar y practicar** — Procesos simples y practicos, eliminar lo que no agrega valor
7. **Optimizar y automatizar** — Mejorar continuamente y automatizar donde sea posible

## ISO 38500

ISO/IEC 38500 es una norma internacional que establece principios para el gobierno corporativo de TI. Define QUE debe cuidar la alta direccion al usar TI (no entra en detalles tecnicos). Sus 6 principios, explicados brevemente (en la unidad de ISO 38500 se profundiza en cada uno):

1. **Responsabilidad** — Cada directivo responde por el uso de TI en su area y debe rendir cuentas de forma transparente
2. **Estrategia** — La TI debe planificarse para soportar los objetivos del negocio
3. **Adquisicion** — Las compras de TI deben ser justas, transparentes y basadas en necesidades reales
4. **Desempeno** — Los sistemas deben funcionar de forma eficiente y efectiva para el negocio
5. **Conformidad** — El uso de TI debe cumplir leyes, regulaciones y politicas aplicables
6. **Comportamiento Humano** — Los sistemas deben disenarse considerando a las personas que los usaran

:::callout idea
ISO 38500 es ideal para Tableros Directivos porque ofrece principios claros y ejecutables sin entrar en detalle operativo.
:::

## Autoevaluacion

:::quiz
1. ¿Que marco se enfoca en la gestion de servicios? || COBIT || ITIL || ISO 38500 || PMBOK || 1 || ITIL 4 se enfoca especificamente en la gestion de servicios de TI.
2. ¿Cuantos dominios tiene COBIT 2019? || 3 || 4 || 5 || 6 || 2 || COBIT 2019 tiene 5 dominios: EDM, APO, BAI, DSS, MEA.
3. ¿Cuantos principios establece ISO 38500? || 4 || 5 || 6 || 8 || 2 || ISO 38500 establece 6 principios para el gobierno corporativo de TI.
:::

:::match Relaciona marcos con su enfoque
- COBIT 2019 | Gobierno y gestion de TI empresarial
- ITIL 4 | Gestion de servicios de TI
- ISO 38500 | Gobierno corporativo de TI
- PMBOK | Gestion de proyectos
:::

:::truefalse Marcos de Gobierno TI
1. COBIT se enfoca exclusivamente en seguridad. || Falso || COBIT cubre gobierno y gestion de TI de forma integral.
2. ITIL 4 introdujo el concepto de cadena de valor del servicio. || Verdadero || ITIL 4 reemplaza el ciclo de vida por la cadena de valor.
3. ISO 38500 es un estandar de gestion, no un marco de implementacion. || Verdadero || ISO 38500 establece principios, no prescribe como implementarlos.
4. COBIT, ITIL e ISO son excluyentes entre si. || Falso || Son complementarios: COBIT gobierna, ITIL gestiona, ISO estandariza.
:::
