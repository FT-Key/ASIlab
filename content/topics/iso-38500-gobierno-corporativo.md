---
title: ISO 38500 - Gobierno Corporativo de TI
emoji: "📜"
accent: "#E87C7C"
category: gobierno-ti
difficulty: intermedio
order: 5
description: Norma internacional ISO/IEC 38500 para el gobierno corporativo de TI. Los 6 principios en profundidad con violaciones tipicas, el modelo E-D-M paso a paso, la distincion gobierno vs gestion, ISO 38500 vs ITIL, la alineacion con ISO 37000 (2024) y el monitoreo en agiles. Con casos de financiera y monitoreo invasivo.
tags: [ISO-38500, gobierno-corporativo, norma-internacional, principios, EDM, ISO-37000, accountability]
keyTakeaway: ISO 38500 dice QUE y POR QUE debe cuidar el organo de gobierno (6 principios + ciclo Evaluar-Dirigir-Monitorear), mientras que ITIL dice COMO se opera. La accountability es indelegable; el directorio puede delegar la operacion al CIO, nunca la responsabilidad final.
sources:
  - "ISO 38500 - Gobierno de TI|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U24"
  - "ISO/IEC 38500:2015|https://www.iso.org|ISO|Segunda edicion; base de los 6 principios del curso"
  - "ISO/IEC 38500:2024|https://www.iso.org/standard/81684.html|ISO|Tercera edicion; alineada a ISO 37000"
  - "ISO 37000 - Governance of organizations|https://www.iso.org/standard/65036.html|ISO|Guia de gobierno de organizaciones"
---

## Que es ISO 38500?

:::definition ISO/IEC 38500
Norma internacional que proporciona un marco para el gobierno corporativo de las tecnologias de la informacion (TI). Establece principios, un modelo y un marco de gobierno que ayudan a los organos de gobierno a **evaluar, dirigir y monitorear** el uso de TI en la organizacion.
:::

:::callout info Que y por que, no como
ISO 38500 NO describe como implementar el gobierno de TI: establece **QUE** debe cuidar la alta direccion y **POR QUE**. Es una guia de alto nivel para el directorio o consejo, no un manual operativo. El "COMO" lo aportan marcos como ITIL 4 (servicios) o COBIT (gobierno y gestion integral).
:::

### Dos ediciones que debes distinguir

| Aspecto | ISO/IEC 38500:2015 | ISO/IEC 38500:2024 |
|---------|--------------------|--------------------|
| Edicion | Segunda | Tercera (febrero 2024) |
| Principios | 6 propios | Alineados a ISO 37000: **11 principios** |
| Modelo | E-D-M (Evaluar, Dirigir, Monitorear) | E-D-M + **involucrar partes interesadas** |
| Enfoque | Gobierno corporativo de TI | Gobierno de TI como **dominio del gobierno organizacional** |

:::callout warning Ojo con los numeros
El curso y el evaluativo trabajan con los **6 principios clasicos** (Responsabilidad, Estrategia, Adquisicion, Desempeno, Conformidad, Comportamiento Humano). La version 2024 adopta los 11 principios de ISO 37000, pero mantiene la esencia: los 6 siguen siendo la base para estudiar.
:::

## El modelo E-D-M (Evaluar, Dirigir, Monitorear)

El gobierno de TI se ejerce con tres tareas que el organo de gobierno realiza de forma continua:

| Fase | Que hace | Pregunta que responde | Ejemplo |
|------|----------|-----------------------|---------|
| **E - Evaluar** | Analiza la demanda actual y futura de TI, las opciones, los riesgos, las oportunidades y el desempeno | ¿Estamos haciendo lo correcto y que opciones hay? | El directorio evalua si comprar IA predictiva cumple la estrategia y el perfil de riesgo |
| **D - Dirigir** | Fija la direccion, las politicas, los planes y las responsabilidades; asigna recursos | ¿Que se debe hacer y quien responde? | Aprueba la politica de uso de IA y nombra un responsable |
| **M - Monitorear** | Mide el desempeno contra los objetivos, vigila la conformidad y exige rendicion de cuentas | ¿Se esta cumpliendo lo dirigido? | Revisa informes de auditoria y pide un plan de mitigacion |

:::callout idea Regla para no confundirse
Si la tarea la hace el **directorio o consejo** (evaluar, dirigir, monitorear) es **gobierno**. Si la hace el **CIO y su equipo** (planificar, construir, operar, medir el dia a dia) es **gestion**.
:::

## Los 6 principios en profundidad

Cada principio se entiende con tres preguntas: **que exige**, **cual es la violacion tipica** y **un ejemplo concreto**.

| Principio | Que exige | Violacion tipica | Ejemplo |
|-----------|-----------|------------------|---------|
| **1. Responsabilidad** | Que cada persona o grupo entienda y acepte su responsabilidad sobre el uso de TI; quien delega conserva la rendicion de cuentas | Nadie asume el dueno del riesgo ("no es mi culpa") | Comprar IA sin que ningun directivo responda por el riesgo |
| **2. Estrategia** | Que la TI se planifique para soportar los objetivos del negocio; las capacidades deben estar en el plan estrategico | Adquirir tecnologia que no figura en el plan de negocio | Aprobar nube hibrida sin que este contemplada en la estrategia |
| **3. Adquisicion** | Inversiones por razones validas del negocio, con analisis transparente de **costo, beneficio y riesgo** | Comprar solo por menor precio, por moda o por interes particular | Contratar IA sin analisis de costo-beneficio-riesgo |
| **4. Desempeno** | Que la TI sea **adecuada para su proposito** (fit for purpose): satisfacer requisitos actuales y futuros del negocio | Medir solo velocidad tecnica o uptime, no la adecuacion al negocio | Reportar 99.99% de uptime de un sistema que no aporta valor |
| **5. Conformidad** | Cumplir leyes, regulaciones y politicas internas y externas | Omitir el analisis de brechas legales | Desplegar IA sin revisar la ley de proteccion de datos |
| **6. Comportamiento Humano** | Que las soluciones consideren a las personas: consentimiento, ergonomia e impacto en el trabajo | Monitorear o vigilar sin aviso ni consentimiento | Registrar pulsaciones y pantallas de los empleados en secreto |

:::definition Desempeno = fit for purpose
"Fit for purpose" significa que la TI **sirve al proposito del negocio**, no que sea la mas rapida o la mas nueva. Un sistema puede ser tecnicamente perfecto y aun asi fallar el principio de Desempeno si no satisface las necesidades actuales y futuras.
:::

## Gobierno vs Gestion (y la accountability indelegable)

| Aspecto | Gobierno | Gestion |
|---------|----------|---------|
| Pregunta | Que y por que | Como |
| Responsable | Directorio o Consejo | CIO, gerentes y equipos |
| Tareas | E-D-M (evaluar, dirigir, monitorear) | Planificar, construir, operar, medir |
| Horizonte | Estrategico | Operativo y tactico |

:::callout danger Accountability indelegable
El organo de gobierno **puede delegar tareas operativas** en la gestion (por ejemplo, que el CIO seleccione al proveedor o configure el modelo). Lo que **NO puede delegar** es la **responsabilidad final ni la rendicion de cuentas (accountability)**: si algo falla, el directorio sigue siendo el responsable ante los stakeholders y el regulador.
:::

**Decisiones exclusivas (para no confundir roles):**

- **Exclusiva del gobierno:** aprobar la estrategia de TI y aceptar el riesgo de comprar la IA predictiva.
- **Exclusiva de la gestion:** elegir el proveedor tecnico, configurar el modelo y operar los sprints del equipo.

## ISO 38500 vs ITIL: que/por que vs como

| Aspecto | ISO 38500 | ITIL 4 |
|---------|-----------|--------|
| Pregunta que responde | **Que** y **por que** | **Como** |
| Audiencia | Organo de gobierno / alta direccion | Operacion y gestion de servicios |
| Naturaleza | Norma internacional (principios) | Marco de buenas practicas (recomendable) |
| Alcance | Gobierno de TI de punta a punta | Gestion de servicios de TI |
| Ejemplo | Aprobar la estrategia y el riesgo de la IA | Definir el flujo de incidentes y cambios |

:::callout info No son rivales
ISO 38500 no reemplaza a ITIL. El directorio **gobierna** con ISO 38500 (principios y rumbo) y los equipos **gestionan** los servicios con ITIL (practicas detalladas). Uno da la direccion; el otro la ejecuta.
:::

## Novedad 2024: alineacion con ISO 37000

ISO/IEC 38500:2024 reconoce que el gobierno de TI es un **dominio del gobierno de la organizacion** y se alinea con **ISO 37000 (Governance of organizations)**. Esto implica integrar de forma indivisible tres resultados del buen gobierno:

1. **Desempeno efectivo** (effective performance) — cumplir el proposito de forma eficaz y eficiente.
2. **Gestion responsable** (responsible stewardship) — administrar con responsabilidad los recursos y el riesgo.
3. **Comportamiento etico** (ethical behaviour) — actuar con integridad frente a los stakeholders.

:::callout idea Modelo ampliado
Ademas de E-D-M, la version 2024 subraya **involucrar a las partes interesadas** (engage stakeholders) y propone un marco de gobierno con elementos como direccion, capacidad, politica, delegacion, desempeno y accountability. Para el curso, E-D-M sigue siendo el modelo central.
:::

## Monitoreo en entornos agiles (Scrum/Kanban)

En agiles, el gobierno **no** debe confundir su rol con el de la gestion. Monitorear **NO** es mirar la *velocity* de los sprints ni el cumplimiento de fechas: eso es gestion operativa.

El **Monitoreo** desde ISO 38500 se centra en:

1. Si el **backlog del producto refleja las prioridades estrategicas** que la direccion evaluo.
2. Si los **entregables generan el valor de negocio esperado** dentro de los parametros de **riesgo y cumplimiento**.

:::callout warning Velocity no es gobierno
La velocity mide la capacidad interna del equipo. El gobierno mide si el trabajo produce **valor estrategico dentro del riesgo aceptado**. Confundirlos es microgestionar.
:::

## Caso de estudio: Financiera Andina (IA sin comite)

Financiera Andina adquiere **urgentemente** un sistema de **IA predictiva** para su area de riesgos, **sin consultar formalmente al comite de cumplimiento normativo**. La adquisicion tecnica se concreto, pero se omitio el analisis de brechas legales.

**Principios vulnerados:**

| Principio | Por que se vulnera |
|-----------|--------------------|
| **Conformidad** | No se analizaron las brechas legales ni la proteccion de datos |
| **Responsabilidad** | No hubo aprobacion formal del organo de gobierno; el riesgo quedo sin dueno claro |
| **Adquisicion** | Falto el analisis transparente de riesgos, no solo de costo y beneficio |

**Correccion con el ciclo E-D-M, paso a paso:**

| Fase | Accion correctiva |
|------|-------------------|
| **Evaluar** | Analizar el uso de la IA (datos personales, sesgos, requisitos regulatorios), el riesgo y las brechas legales; consultar al comite de cumplimiento |
| **Dirigir** | El directorio fija la politica de uso de IA, exige evaluacion de impacto, nombra un responsable y aprueba el plan de mitigacion |
| **Monitorear** | Vigilar el cumplimiento legal y el desempeno de la IA con reportes al directorio y auditorias periodicas; ajustar la politica |

:::callout success Evitar recurrencia
La leccion no es solo corregir el caso: hay que **hacer obligatorio el analisis legal** dentro del proceso de adquisicion, para que no vuelva a comprarse tecnologia sin pasar por cumplimiento.
:::

## Caso: Monitoreo invasivo sin aviso

Una empresa instala un software que **registra capturas de pantalla y pulsaciones** de teclado **sin aviso ni consentimiento** de los empleados.

- **Principio vulnerado principal:** **Comportamiento Humano** (no se considero a las personas ni su consentimiento).
- **Principio secundario:** **Conformidad** (puede violar leyes de proteccion de datos laborales).
- **Correctivo:** informar con transparencia, pedir consentimiento informado y evaluar la **proporcionalidad** de la medida (¿es necesaria y minima?).

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz ISO 38500 - Nivel 1 (memoria)
1. ¿Cuantos principios tiene ISO 38500 en su version clasica (2015)? || 4 || 5 || 6 || 11 || 2 || La version 2015 tiene 6 principios.
2. ¿Cuantos principios adopta la version 2024 alineada a ISO 37000? || 6 || 8 || 10 || 11 || 3 || La version 2024 adopta los 11 principios de ISO 37000.
3. ¿Cual es el modelo de gobierno de ISO 38500? || P-D-C-A || E-D-M (Evaluar, Dirigir, Monitorear) || PBRM || SVS || 1 || El modelo es E-D-M: Evaluar, Dirigir y Monitorear.
4. ¿Con que norma se alinea ISO/IEC 38500:2024? || ISO 27001 || ISO 9001 || ISO 37000 || ITIL 4 || 2 || Se alinea con ISO 37000, gobierno de organizaciones.
5. ¿Cual de estos NO es un principio de ISO 38500? || Responsabilidad || Estrategia || Rentabilidad || Conformidad || 2 || Los 6 principios son Responsabilidad, Estrategia, Adquisicion, Desempeno, Conformidad y Comportamiento Humano.
6. ¿A quien esta dirigida principalmente ISO 38500? || A los programadores || Al organo de gobierno (directorio o consejo) || A los proveedores de nube || A la mesa de ayuda || 1 || Esta dirigida al organo de gobierno y a quienes lo apoyan.
:::

### Nivel 2 - Comprension

:::quiz ISO 38500 - Nivel 2 (comprension)
1. El principio de Desempeno exige fundamentalmente que: || La TI sea la mas nueva del mercado || La TI sea adecuada para su proposito (fit for purpose) || El uptime sea 99.99% || El costo sea el menor posible || 1 || Desempeno es "fit for purpose": satisfacer requisitos actuales y futuros del negocio.
2. El principio de Adquisicion exige decisiones de inversion: || Tomadas solo por compras || Basadas solo en el menor precio || Con analisis transparente de costos, beneficios y riesgos por razones validas || Aprobadas solo por arquitectura || 2 || Adquisicion exige transparencia de costo, beneficio y riesgo.
3. La diferencia central entre gobierno y gestion es: || Son sinonimos || El gobierno define que y por que; la gestion ejecuta el como || La gestion reemplaza al gobierno || El gobierno opera los servicios || 1 || Gobierno = que/por que; gestion = como.
4. Que significa que la accountability sea indelegable: || El directorio transfiere toda la responsabilidad al CIO || El directorio puede delegar tareas operativas, pero la responsabilidad final sigue siendo suya || La responsabilidad se reparte entre todos || La asume el auditor externo || 1 || La responsabilidad final no se transfiere.
5. ISO 38500 se distingue de ITIL porque: || ISO es obligatoria e ITIL opcional || ISO da el que/por que a la alta direccion; ITIL da el como operativo || ITIL solo sirve para telecomunicaciones || ISO reemplaza a ITIL || 1 || ISO 38500 = principios de gobierno; ITIL = practicas de gestion de servicios.
6. Los tres resultados de ISO 37000 que integra la version 2024 son: || Velocidad, costo y calidad || Desempeno efectivo, gestion responsable y comportamiento etico || Uptime, latencia y disponibilidad || Plan, build y run || 1 || Son desempeno efectivo, gestion responsable y comportamiento etico.
7. En agiles, el Monitoreo del gobierno debe centrarse en: || La velocity de los sprints || Si el backlog refleja las prioridades estrategicas y el valor dentro del riesgo || El numero de incidencias resueltas || La cobertura de pruebas || 1 || El gobierno mira estrategia y valor, no velocity.
8. La fase Dirigir del E-D-M implica principalmente: || Ejecutar consultas SQL || Establecer politicas, aprobar planes y asignar responsabilidades || Supervisar la temperatura del datacenter || Programar las aplicaciones || 1 || Dirigir = fijar politicas, planes y responsabilidades.
:::

### Nivel 3 - Escenarios (espejo del evaluativo)

:::quiz ISO 38500 - Nivel 3 (escenarios)
1. En ISO/IEC 38500:2024, el principio de Rendimiento (Performance) exige fundamentalmente que: || Los costos de infraestructura esten bajo el promedio || Las TIC sean adecuadas para su proposito, satisfaciendo requisitos actuales y futuros || El uptime sea 99.99% || Se usen las ultimas versiones de software || 1 || Performance es fit for purpose: adecuacion a los requisitos actuales y futuros.
2. El cambio estructural de la version 2024 es su alineacion con ISO 37000, que implica integrar de forma indivisible: || Transformacion digital y obsolescencia || Desempeno efectivo, gestion responsable y comportamiento etico || Externalizar ciberseguridad y backup || Eliminar los roles de gestion || 1 || Son los tres resultados de ISO 37000.
3. El consejo detecta que un proyecto no genera el valor esperado y se superan los riesgos aceptados. La accion que corresponde a "Monitorear" es: || Reasignar manualmente a los desarrolladores || Evaluar informes de auditoria y redefinir directrices o pedir un plan de mitigacion a la gestion || Detener el proyecto y cancelar contratos || Aumentar el presupuesto sin cambiar la estrategia || 1 || Monitorear = evaluar informes y exigir correccion, sin microgestionar.
4. La distincion entre ISO 38500 e ITIL radica en que: || ISO es obligatoria e ITIL opcional || ISO da principios de gobierno (que/por que) a la alta direccion; ITIL da practicas de gestion de servicios (como) || ITIL solo sirve a telecomunicaciones || ISO reemplaza a ITIL || 1 || Esa es la diferencia esencial.
5. El principio de Adquisicion exige que las inversiones en TI sean: || Tomadas unilateralmente por compras || Basadas solo en el menor costo || Con analisis transparente de costos, beneficios y riesgos y por razones validas || Aprobadas solo por arquitectura || 2 || Adquisicion = transparencia costo-beneficio-riesgo.
6. Que escenario viola directamente el principio de Comportamiento Humano: || Actualizar sistemas el fin de semana || Monitorear actividad con capturas y pulsaciones sin aviso ni consentimiento || Reducir licencias para ahorrar || Contratar personal externo || 1 || Vigilar sin consentimiento informado viola el principio humano.
7. La tarea de "Dirigir" implica principalmente: || Ejecutar consultas SQL || Establecer politicas, aprobar planes estrategicos y asignar responsabilidades || Supervisar el consumo electrico || Desarrollar el codigo fuente || 1 || Dirigir = politicas, planes y responsabilidades.
8. El directorio aprueba una nube hibrida. Bajo el principio de Estrategia, antes debe verificar prioritariamente que: || El proveedor tenga ISO 27001 || Las capacidades esten contempladas en el plan estrategico de negocio y el plan de TI alineado || La interfaz sea intuitiva || El costo sea menor que la competencia || 1 || Estrategia exige alineacion con el plan de negocio.
9. Si el organo de gobierno delega tareas operativas en la gestion, la norma enfatiza que: || La responsabilidad se transfiere al CIO || La responsabilidad final y la accountability siguen siendo indelegables del organo de gobierno || La responsabilidad se diluye entre todos || La asume el auditor externo || 1 || La accountability es indelegable.
10. En una organizacion agil, el Monitoreo desde ISO 38500 debe centrarse en: || La velocity y el cumplimiento de fechas || Si el backlog refleja las prioridades estrategicas y si los entregables generan valor dentro del riesgo y cumplimiento || El numero de incidencias resueltas || La cobertura de pruebas unitarias || 1 || Gobierno mira estrategia, valor, riesgo y cumplimiento.
:::

### Practica guiada

:::sort Ordena el ciclo de gobierno E-D-M
- Evaluar: analizar demanda, opciones, riesgos y desempeno
- Dirigir: fijar politicas, planes y responsabilidades
- Monitorear: medir desempeno, vigilar conformidad y exigir cuentas
:::

:::match Principio ISO 38500 y su violacion tipica
- Responsabilidad | Nadie asume el dueno del riesgo
- Estrategia | Adquirir tecnologia que no esta en el plan de negocio
- Adquisicion | Comprar por menor precio sin analizar riesgos
- Desempeno | Medir solo uptime y no la adecuacion al negocio
- Conformidad | Desplegar IA sin revisar la ley de proteccion de datos
- Comportamiento Humano | Vigilar a los empleados sin consentimiento
:::

:::truefalse ISO 38500
1. ISO 38500 describe paso a paso como implementar el gobierno de TI. || Falso || Establece que y por que, no el como detallado.
2. La accountability del gobierno de TI es indelegable. || Verdadero || El directorio puede delegar operacion, nunca la responsabilidad final.
3. La version 2024 de ISO 38500 se alinea con ISO 37000. || Verdadero || Adopta sus principios y los tres resultados del buen gobierno.
4. ITIL y ISO 38500 son marcos excluyentes. || Falso || Son complementarios: ISO da el que/por que e ITIL el como.
5. El principio de Desempeno exige que la TI sea la mas nueva del mercado. || Falso || Exige que sea adecuada para su proposito (fit for purpose).
6. En agiles, el gobierno debe monitorear la velocity de los sprints. || Falso || Debe monitorear el backlog estrategico y el valor dentro del riesgo.
:::

:::essay Evaluativo ISO 38500
1. Una empresa del sector financiero adquiere urgentemente un sistema de IA predictiva para riesgos, sin consulta formal al comite de cumplimiento normativo (cumple la adquisicion tecnica, omite el analisis de brechas legales). Identifique explicitamente que principios de ISO 38500 se vulneran y explique paso a paso como el organo de gobierno aplicaria el ciclo Evaluar, Dirigir y Monitorear para corregir el rumbo y evitar recurrencias. || Pista: Nombra los principios (Conformidad, Responsabilidad, Adquisicion) y luego desarrolla E, D y M uno por uno. || Respuesta modelo: Se vulneran Conformidad (no se analizaron las brechas legales), Responsabilidad (no hubo aprobacion formal del organo de gobierno y el riesgo quedo sin dueno) y Adquisicion (falto el analisis transparente de riesgos). Correccion con E-D-M: Evaluar el uso de la IA, el riesgo y las brechas legales, consultando al comite de cumplimiento; Dirigir fijando la politica de uso de IA, nombrando un responsable y aprobando el plan de mitigacion; Monitorear el cumplimiento legal y el desempeno con reportes al directorio y auditorias. Para evitar recurrencias, el analisis legal se vuelve un paso obligatorio del proceso de adquisicion. || [rúbrica: Identifica los principios correctos, Aplica E-D-M paso a paso, Propone medida anti-recurrencia, Terminologia y redaccion]
2. Desarrolle la diferencia entre Gobierno y Gestion segun ISO/IEC 38500. Argumente por que la correcta separacion (y no aislamiento) de estos roles es critica para la alineacion estrategica, y de un ejemplo de una decision exclusiva del gobierno y otra exclusiva de la gestion. || Pista: Gobierno = que/por que (accountability indelegable); gestion = como; da un ejemplo de cada uno. || Respuesta modelo: El gobierno (directorio o consejo) define que y por que: evalua, dirige y monitorea, y su accountability es indelegable. La gestion (CIO y equipos) define el como: planifica, construye, opera y mide. Separarlos evita dos errores: delegar decisiones estrategicas al nivel operativo y microgestionar desde la direccion; ademas mantiene la alineacion porque el gobierno fija el rumbo y la gestion lo ejecuta y retroalimenta con informacion. Ejemplo exclusivo del gobierno: aprobar la estrategia de TI y aceptar el riesgo de comprar IA predictiva. Ejemplo exclusivo de la gestion: seleccionar al proveedor tecnico y configurar el modelo. || [rúbrica: Diferencia gobierno/gestion, Argumenta la separacion, Ejemplos correctos, Terminologia y redaccion]
:::

:::path Correccion E-D-M en Financiera Andina
1 | Inicio | Financiera Andina compra IA predictiva sin consultar al comite de cumplimiento. ¿Que principios vulnera principalmente? | Conformidad, Responsabilidad y Adquisicion=2; Desempeno y Estrategia unicamente=3
2 | Correcto | Bien: omitir el analisis legal golpea Conformidad, Responsabilidad y Adquisicion. ¿Cual es el primer paso del E-D-M correctivo? | Evaluar el uso de la IA, el riesgo y las brechas legales=4; Detener el proyecto y despedir al CIO=5
3 | Parcial | Desempeno y Estrategia pueden verse afectados, pero la omision del comite de cumplimiento golpea de lleno Conformidad, Responsabilidad y Adquisicion. | * | Revisa los principios: no analizar leyes es Conformidad.
4 | Correccion | Evalua, luego el directorio dirige (politica de IA + responsable) y monitorea con auditoria. La recurrencia se evita haciendo obligatorio el analisis legal en la adquisicion. | * | Ciclo E-D-M completo aplicado correctamente.
5 | Exceso | Cancelar o despedir sin evaluar no es gobernar: el E-D-M empieza por Evaluar, con criterio y datos. | * | Gobernar es evaluar, dirigir y monitorear, no reaccionar.
:::
