---
title: Mapa de Procesos COBIT 2019
emoji: "🗺️"
accent: "#D4A0E8"
category: gobierno-ti
difficulty: avanzado
order: 12
description: Mapa detallado de los 40 procesos de COBIT 2019, su ubicacion en los 5 dominios, interrelaciones y como se mapean con otros marcos como ITIL e ISO 27001.
tags: [COBIT, mapa-procesos, dominios, interrelaciones]
keyTakeaway: El mapa de procesos de COBIT 2019 muestra como los 40 objetivos se distribuyen en 5 dominios y como se interrelacionan para cubrir toda la cadena de valor de gobierno y gestion de TI.
sources:
  - "Que es COBIT 2019|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U26"
  - "COBIT 2019 Core Framework|https://www.isaca.org|ISACA|Documentacion oficial"
---

## Estructura del Mapa de Procesos

:::definition Mapa de Procesos COBIT
Representacion visual de los 40 procesos de COBIT 2019 organizados en 5 dominios. Cada proceso tiene un nombre, descripcion, objetivos y un nivel de capacidad objetivo.
:::

:::callout info
El mapa de procesos NO es un diagrama de flujo. Es una taxonomia que organiza todas las actividades de gobierno y gestion de TI en categorias logicas.
:::

## Dominio EDM - Evaluar, Dirigir y Monitorear

Este dominio es de **gobierno** (no de gestion). Establece la direccion y supervision.

| Proceso | Nombre | Funcion |
|---------|--------|---------|
| EDM01 | Mantener el marco de gobierno | Establecer y mantener el marco de gobierno |
| EDM02 | Asegurar la entrega de beneficios | Evaluar y priorizar iniciativas |
| EDM03 | Optimizar el riesgo | Establecer tolerancia al riesgo |
| EDM04 | Optimizar los recursos | Asignar recursos de TI eficientemente |
| EDM05 | Gestionar la transparencia | Comunicar a las partes interesadas |

:::callout warning
EDM no tiene procesos operativos. Son actividades de gobierno del tablero directivo. Si ejecutas EDM01, estas actuando como gobierno, no como gestion.
:::

## Dominio APO - Alinear, Planificar y Organizar

| Proceso | Nombre | Funcion clave |
|---------|--------|---------------|
| APO01 | Gestionar el marco de gestion | Establecer politicas y estandares |
| APO02 | Gestionar la estrategia de TI | Alinear TI con el negocio |
| APO03 | Gestionar la arquitectura empresarial | Definir la estructura de TI |
| APO04 | Gestionar la innovacion | Promover la innovacion tecnologica |
| APO05 | Gestionar la cartera | Priorizar proyectos de TI |
| APO06 | Gestionar el presupuesto y costos | Controlar finanzas de TI |
| APO07 | Gestionar los recursos humanos | Desarrollar talento de TI |
| APO08 | Gestionar las relaciones | Gestionar la relacion con el negocio y stakeholders |
| APO09 | Gestionar acuerdos de servicio | Definir y mantener SLAs con clientes internos y externos |
| APO10 | Gestionar proveedores | Administrar relaciones con terceros |
| APO11 | Gestionar la calidad | Asegurar calidad de servicios y procesos |
| APO12 | Gestionar el riesgo | Evaluar y mitigar riesgos |
| APO13 | Gestionar la seguridad | Seguridad de la informacion |
| APO14 | Gestionar los datos | Administrar datos corporativos como activo |

## Dominio BAI - Construir, Adquirir e Implementar

| Proceso | Nombre | Funcion clave |
|---------|--------|---------------|
| BAI01 | Gestionar el programa de cambios | Evaluar e implementar programas de cambio |
| BAI02 | Gestionar definicion de requisitos | Capturar necesidades |
| BAI03 | Gestionar la identificacion y construccion de soluciones | Disenar y construir soluciones |
| BAI04 | Gestionar la disponibilidad y capacidad | Asegurar recursos suficientes |
| BAI05 | Gestionar el cambio organizacional | Facilitar la adopcion |
| BAI06 | Gestionar los cambios de TI | Controlar cambios individuales en sistemas |
| BAI07 | Gestionar la aceptacion y transicion de cambios | Poner en produccion lo cambiado |
| BAI08 | Gestionar el conocimiento | Capturar aprendizajes y compartirlos |
| BAI09 | Gestionar los activos | Administrar activos de TI |
| BAI10 | Gestionar la configuracion | Mantener registro exacto de configuraciones |
| BAI11 | Gestionar proyectos | Ejecutar proyectos de TI |

## Dominio DSS - Entregar, Servir y Soportar

| Proceso | Nombre | Funcion clave |
|---------|--------|---------------|
| DSS01 | Gestionar las operaciones | Operar infraestructura de TI |
| DSS02 | Gestionar solicitudes de servicio | Atender peticiones de usuarios |
| DSS03 | Gestionar problemas | Identificar y resolver problemas |
| DSS04 | Gestionar la continuidad | Asegurar continuidad del negocio |
| DSS05 | Gestionar servicios de seguridad | Operar controles de seguridad |
| DSS06 | Gestionar procesos de negocio | Soportar procesos del negocio |

## Dominio MEA - Monitorear, Evaluar y Valorar

| Proceso | Nombre | Funcion clave |
|---------|--------|---------------|
| MEA01 | Monitorear desempeno y conformidad | Medir resultados de TI |
| MEA02 | Monitorear sistema de gobierno | Evaluar gobierno de TI |
| MEA03 | Monitorear conformidad externa | Cumplir leyes y regulaciones |
| MEA04 | Proporcionar gobierno de TI | Asegurar gobierno efectivo |

## Interrelaciones con Otros Marcos

COBIT se integra con otros marcos: **ITIL** aporta la operacion de servicios, **ISO 27001** es la norma de seguridad de la informacion (sus controles "A." son medidas de seguridad) y **PMBOK** organiza los proyectos. Ejemplos de correspondencia:

| COBIT | ITIL | ISO 27001 | PMBOK |
|-------|------|-----------|-------|
| APO11 | Practica de gestion de proyectos | - | Gestion de proyectos |
| APO12 | Practica de gestion de riesgos | A.12 Gestion de riesgos | Gestion de riesgos |
| DSS01 | Entregar y soportar | A.12 Operaciones | - |
| MEA01 | Monitorear y revisar | A.18 Revision | Monitoreo |

## Autoevaluacion

:::sort Ordena los dominios de proceso de COBIT
- EDM: Evaluar, Dirigir y Monitorear
- APO: Alinear, Planificar y Organizar
- BAI: Construir, Adquirir e Implementar
- DSS: Entregar, Servir y Soportar
- MEA: Monitorear, Evaluar y Valorar
:::

:::match Procesos COBIT por dominio
- EDM01 | Gestion del marco de gobierno
- APO01 | Gestion de la estrategia de TI
- BAI01 | Gestion de programas de cambio
- DSS01 | Gestion de operaciones
- MEA01 | Monitoreo y evaluacion del desempeno
:::

:::truefalse Mapa de Procesos COBIT
1. COBIT tiene 5 dominios de proceso. || Verdadero || EDM, APO, BAI, DSS y MEA.
2. El dominio EDM es operativo. || Falso || EDM es de gobierno, no operativo. Evalua, dirige y monitorea.
3. APO contiene procesos de gestion de riesgos. || Verdadero || APO incluye APO12 (Gestion de riesgos) entre otros.
4. DSS se enfoca en planificacion. || Falso || DSS se enfoca en entrega de servicios, no en planificacion.
:::
