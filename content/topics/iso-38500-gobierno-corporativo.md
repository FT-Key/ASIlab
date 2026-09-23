---
title: ISO 38500 - Gobierno Corporativo de TI
emoji: "📜"
accent: "#E87C7C"
category: Gobierno de TI
difficulty: intermedio
order: 5
unit: "Unidad 2 · Gobierno de TI y Marcos de Referencia"
description: Norma internacional ISO/IEC 38500 para el gobierno corporativo de TI. Los 6 principios en profundidad con violaciones tipicas, el modelo E-D-M paso a paso, la distinción gobierno vs gestión, ISO 38500 vs ITIL, la alineación con ISO 37000 (2024) y el monitoreo en ágiles. Con casos de financiera y monitoreo invasivo.
tags: [ISO-38500, gobierno-corporativo, norma-internacional, principios, EDM, ISO-37000, accountability]
keyTakeaway: ISO 38500 dice QUE y POR QUE debe cuidar el órgano de gobierno (6 principios + ciclo Evaluar-Dirigir-Monitorear), mientras que ITIL dice COMO se opera. La accountability es indelegable; el directorio puede delegar la operación al CIO, nunca la responsabilidad final.
sources:
  - "ISO/IEC 38500:2024 - Governance of IT for the organization|https://www.iso.org/standard/81684.html|ISO|Tercera edición; alineada a ISO 37000"
  - "ISO/IEC 38500:2015 (retirada)|https://www.iso.org/standard/62816.html|ISO|Segunda edición; base de los 6 principios del curso"
  - "ISO 37000:2021 - Governance of organizations|https://www.iso.org/standard/65036.html|ISO|11 principios de gobierno organizacional"
  - "Buen Gobierno de las TI segun ISO/IEC 38500|https://www.coit.es/|COIT (Colegio Oficial de Ingenieros de Telecomunicacion)|Guía de iniciación (material del curso)"
  - "Que es la ISO 38500 (U24)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Que es ISO 38500?

:::definition ISO/IEC 38500
Norma internacional que proporciona un marco para el gobierno corporativo de las tecnologías de la información (TI). Establece principios, un modelo y un marco de gobierno que ayudan a los organos de gobierno a **evaluar, dirigir y monitorear** el uso de TI en la organización.
:::

:::callout info Que y por que, no como
ISO 38500 NO describe como implementar el gobierno de TI: establece **QUE** debe cuidar la alta dirección y **POR QUE**. Es una guía de alto nivel para el directorio o consejo, no un manual operativo. El "COMO" lo aportan marcos como ITIL 4 (servicios) o COBIT (gobierno y gestión integral).
:::

### Dos ediciones que debes distinguir

| Aspecto | ISO/IEC 38500:2015 | ISO/IEC 38500:2024 |
|---------|--------------------|--------------------|
| Edición | Segunda | Tercera (febrero 2024) |
| Principios | 6 propios | Alineados a ISO 37000: **11 principios** |
| Modelo | E-D-M (Evaluar, Dirigir, Monitorear) | E-D-M + **involucrar partes interesadas** |
| Enfoque | Gobierno corporativo de TI | Gobierno de TI como **dominio del gobierno organizacional** |

:::callout warning Ojo con los números
El curso y el evaluativo trabajan con los **6 principios clásicos** (Responsabilidad, Estrategia, Adquisición, Desempeno, Conformidad, Comportamiento Humano). La versión 2024 adopta los 11 principios de ISO 37000, pero mantiene la esencia: los 6 siguen siendo la base para estudiar.
:::

## El modelo E-D-M (Evaluar, Dirigir, Monitorear)

El gobierno de TI se ejerce con tres tareas que el órgano de gobierno realiza de forma continua:

| Fase | Que hace | Pregunta que responde | Ejemplo |
|------|----------|-----------------------|---------|
| **E - Evaluar** | Analiza la demanda actual y futura de TI, las opciones, los riesgos, las oportunidades y el desempeno | ¿Estamos haciendo lo correcto y que opciones hay? | El directorio evalúa si comprar IA predictiva cumple la estrategia y el perfil de riesgo |
| **D - Dirigir** | Fija la dirección, las políticas, los planes y las responsabilidades; asigna recursos | ¿Que se debe hacer y quien responde? | Aprueba la política de uso de IA y nombra un responsable |
| **M - Monitorear** | Mide el desempeno contra los objetivos, vigila la conformidad y exige rendición de cuentas | ¿Se esta cumpliendo lo dirigido? | Revisa informes de auditoría y pide un plan de mitigación |

:::callout idea Regla para no confundirse
Si la tarea la hace el **directorio o consejo** (evaluar, dirigir, monitorear) es **gobierno**. Si la hace el **CIO y su equipo** (planificar, construir, operar, medir el día a día) es **gestión**.
:::

## Los 6 principios en profundidad

Cada principio se entiende con tres preguntas: **que exige**, **cual es la violación típica** y **un ejemplo concreto**.

| Principio | Que exige | Violación típica | Ejemplo |
|-----------|-----------|------------------|---------|
| **1. Responsabilidad** | Que cada persona o grupo entienda y acepte su responsabilidad sobre el uso de TI; quien delega conserva la rendición de cuentas | Nadie asume el dueño del riesgo ("no es mi culpa") | Comprar IA sin que ningun directivo responda por el riesgo |
| **2. Estrategia** | Que la TI se planifique para soportar los objetivos del negocio; las capacidades deben estar en el plan estratégico | Adquirir tecnología que no figura en el plan de negocio | Aprobar nube híbrida sin que este contemplada en la estrategia |
| **3. Adquisición** | Inversiones por razones válidas del negocio, con análisis transparente de **costo, beneficio y riesgo** | Comprar solo por menor precio, por moda o por interés particular | Contratar IA sin análisis de costo-beneficio-riesgo |
| **4. Desempeno** | Que la TI sea **adecuada para su propósito** (fit for purpose): satisfacer requisitos actuales y futuros del negocio | Medir solo velocidad técnica o uptime, no la adecuación al negocio | Reportar 99.99% de uptime de un sistema que no aporta valor |
| **5. Conformidad** | Cumplir leyes, regulaciones y políticas internas y externas | Omitir el análisis de brechas legales | Desplegar IA sin revisar la ley de protección de datos |
| **6. Comportamiento Humano** | Que las soluciones consideren a las personas: consentimiento, ergonomía e impacto en el trabajo | Monitorear o vigilar sin aviso ni consentimiento | Registrar pulsaciones y pantallas de los empleados en secreto |

:::definition Desempeno = fit for purpose
"Fit for purpose" significa que la TI **sirve al propósito del negocio**, no que sea la más rapida o la más nueva. Un sistema puede ser tecnicamente perfecto y aun asi fallar el principio de Desempeno si no satisface las necesidades actuales y futuras.
:::

:::callout info Sinonimos segun la fuente
Distintas fuentes del curso usan nombres equivalentes: **Desempeno = Rendimiento (Performance)** y **Comportamiento Humano = Factor humano (Human Behaviour)**. Son el mismo principio; en el evaluativo pueden aparecer con cualquiera de los dos nombres.
:::

## Gobierno vs Gestión (y la accountability indelegable)

| Aspecto | Gobierno | Gestión |
|---------|----------|---------|
| Pregunta | Que y por que | Como |
| Responsable | Directorio o Consejo | CIO, gerentes y equipos |
| Tareas | E-D-M (evaluar, dirigir, monitorear) | Planificar, construir, operar, medir |
| Horizonte | Estratégico | Operativo y táctico |

:::callout danger Accountability indelegable
El órgano de gobierno **puede delegar tareas operativas** en la gestión (por ejemplo, que el CIO seleccione al proveedor o configure el modelo). Lo que **NO puede delegar** es la **responsabilidad final ni la rendición de cuentas (accountability)**: si algo falla, el directorio sigue siendo el responsable ante los stakeholders y el regulador.
:::

**Decisiones exclusivas (para no confundir roles):**

- **Exclusiva del gobierno:** aprobar la estrategia de TI y aceptar el riesgo de comprar la IA predictiva.
- **Exclusiva de la gestión:** elegir el proveedor técnico, configurar el modelo y operar los sprints del equipo.

## ISO 38500 vs ITIL: que/por que vs como

| Aspecto | ISO 38500 | ITIL 4 |
|---------|-----------|--------|
| Pregunta que responde | **Que** y **por que** | **Como** |
| Audiencia | Órgano de gobierno / alta dirección | Operación y gestión de servicios |
| Naturaleza | Norma internacional (principios) | Marco de buenas prácticas (recomendable) |
| Alcance | Gobierno de TI de punta a punta | Gestión de servicios de TI |
| Ejemplo | Aprobar la estrategia y el riesgo de la IA | Definir el flujo de incidentes y cambios |

:::callout info No son rivales
ISO 38500 no reemplaza a ITIL. El directorio **gobierna** con ISO 38500 (principios y rumbo) y los equipos **gestionan** los servicios con ITIL (prácticas detalladas). Uno da la dirección; el otro la ejecuta.
:::

## Novedad 2024: alineación con ISO 37000

ISO/IEC 38500:2024 reconoce que el gobierno de TI es un **dominio del gobierno de la organización** y se alinea con **ISO 37000 (Governance of organizations)**. Esto implica integrar de forma indivisible tres resultados del buen gobierno:

1. **Desempeno efectivo** (effective performance) — cumplir el propósito de forma eficaz y eficiente.
2. **Gestión responsable** (responsible stewardship) — administrar con responsabilidad los recursos y el riesgo.
3. **Comportamiento ético** (ethical behaviour) — actuar con integridad frente a los stakeholders.

:::callout idea Modelo ampliado
Además de E-D-M, la versión 2024 subraya **involucrar a las partes interesadas** (engage stakeholders) y propone un marco de gobierno con elementos como dirección, capacidad, política, delegación, desempeno y accountability. Para el curso, E-D-M sigue siendo el modelo central.
:::

## Monitoreo en entornos ágiles (Scrum/Kanban)

En ágiles, el gobierno **no** debe confundir su rol con el de la gestión. Monitorear **NO** es mirar la *velocity* de los sprints ni el cumplimiento de fechas: eso es gestión operativa.

El **Monitoreo** desde ISO 38500 se centra en:

1. Si el **backlog del producto refleja las prioridades estratégicas** que la dirección evaluo.
2. Si los **entregables generan el valor de negocio esperado** dentro de los parámetros de **riesgo y cumplimiento**.

:::callout warning Velocity no es gobierno
La velocity mide la capacidad interna del equipo. El gobierno mide si el trabajo produce **valor estratégico dentro del riesgo aceptado**. Confundirlos es microgestionar.
:::

## Caso de estudio: Financiera Andina (IA sin comite)

Financiera Andina adquiere **urgentemente** un sistema de **IA predictiva** para su area de riesgos, **sin consultar formalmente al comite de cumplimiento normativo**. La adquisición técnica se concreto, pero se omitio el análisis de brechas legales.

**Principios vulnerados:**

| Principio | Por que se vulnera |
|-----------|--------------------|
| **Conformidad** | No se analizaron las brechas legales ni la protección de datos |
| **Responsabilidad** | No hubo aprobación formal del órgano de gobierno; el riesgo quedo sin dueño claro |
| **Adquisición** | Falto el análisis transparente de riesgos, no solo de costo y beneficio |

**Corrección con el ciclo E-D-M, paso a paso:**

| Fase | Acción correctiva |
|------|-------------------|
| **Evaluar** | Analizar el uso de la IA (datos personales, sesgos, requisitos regulatorios), el riesgo y las brechas legales; consultar al comite de cumplimiento |
| **Dirigir** | El directorio fija la política de uso de IA, exige evaluación de impacto, nombra un responsable y aprueba el plan de mitigación |
| **Monitorear** | Vigilar el cumplimiento legal y el desempeno de la IA con reportes al directorio y auditorías periodicas; ajustar la política |

:::callout success Evitar recurrencia
La lección no es solo corregir el caso: hay que **hacer obligatorio el análisis legal** dentro del proceso de adquisición, para que no vuelva a comprarse tecnología sin pasar por cumplimiento.
:::

## Caso: Monitoreo invasivo sin aviso

Una empresa instala un software que **registra capturas de pantalla y pulsaciones** de teclado **sin aviso ni consentimiento** de los empleados.

- **Principio vulnerado principal:** **Comportamiento Humano** (no se considero a las personas ni su consentimiento).
- **Principio secundario:** **Conformidad** (puede violar leyes de protección de datos laborales).
- **Correctivo:** informar con transparencia, pedir consentimiento informado y evaluar la **proporcionalidad** de la medida (¿es necesaria y mínima?).

## Autoevaluación

### Nivel 1 - Conceptos base

:::quiz ISO 38500 - Nivel 1 (memoria)
1. ¿Cuantos principios tiene ISO 38500 en su versión clasica (2015)? || 4 || 5 || 6 || 11 || 2 || La versión 2015 tiene 6 principios.
2. ¿Cuantos principios adopta la versión 2024 alineada a ISO 37000? || 6 || 8 || 10 || 11 || 3 || La versión 2024 adopta los 11 principios de ISO 37000.
3. ¿Cual es el modelo de gobierno de ISO 38500? || P-D-C-A || E-D-M (Evaluar, Dirigir, Monitorear) || PBRM || SVS || 1 || El modelo es E-D-M: Evaluar, Dirigir y Monitorear.
4. ¿Con que norma se alinea ISO/IEC 38500:2024? || ISO 27001 || ISO 9001 || ISO 37000 || ITIL 4 || 2 || Se alinea con ISO 37000, gobierno de organizaciones.
5. ¿Cual de estos NO es un principio de ISO 38500? || Responsabilidad || Estrategia || Rentabilidad || Conformidad || 2 || Los 6 principios son Responsabilidad, Estrategia, Adquisición, Desempeno, Conformidad y Comportamiento Humano.
6. ¿A quien esta dirigida principalmente ISO 38500? || A los programadores || Al órgano de gobierno (directorio o consejo) || A los proveedores de nube || A la mesa de ayuda || 1 || Esta dirigida al órgano de gobierno y a quienes lo apoyan.
:::

### Nivel 2 - Comprensión

:::quiz ISO 38500 - Nivel 2 (comprensión)
1. El principio de Desempeno exige fundamentalmente que: || La TI sea la más nueva del mercado || La TI sea adecuada para su propósito (fit for purpose) || El uptime sea 99.99% || El costo sea el menor posible || 1 || Desempeno es "fit for purpose": satisfacer requisitos actuales y futuros del negocio.
2. El principio de Adquisición exige decisiones de inversión: || Tomadas solo por compras || Basadas solo en el menor precio || Con análisis transparente de costos, beneficios y riesgos por razones válidas || Aprobadas solo por arquitectura || 2 || Adquisición exige transparencia de costo, beneficio y riesgo.
3. La diferencia central entre gobierno y gestión es: || Son sinonimos || El gobierno define que y por que; la gestión ejecuta el como || La gestión reemplaza al gobierno || El gobierno opera los servicios || 1 || Gobierno = que/por que; gestión = como.
4. Que significa que la accountability sea indelegable: || El directorio transfiere toda la responsabilidad al CIO || El directorio puede delegar tareas operativas, pero la responsabilidad final sigue siendo suya || La responsabilidad se reparte entre todos || La asume el auditor externo || 1 || La responsabilidad final no se transfiere.
5. ISO 38500 se distingue de ITIL porque: || ISO es obligatoria e ITIL opcional || ISO da el que/por que a la alta dirección; ITIL da el como operativo || ITIL solo sirve para telecomunicaciones || ISO reemplaza a ITIL || 1 || ISO 38500 = principios de gobierno; ITIL = prácticas de gestión de servicios.
6. Los tres resultados de ISO 37000 que integra la versión 2024 son: || Velocidad, costo y calidad || Desempeno efectivo, gestión responsable y comportamiento ético || Uptime, latencia y disponibilidad || Plan, build y run || 1 || Son desempeno efectivo, gestión responsable y comportamiento ético.
7. En ágiles, el Monitoreo del gobierno debe centrarse en: || La velocity de los sprints || Si el backlog refleja las prioridades estratégicas y el valor dentro del riesgo || El número de incidencias resueltas || La cobertura de pruebas || 1 || El gobierno mira estrategia y valor, no velocity.
8. La fase Dirigir del E-D-M implica principalmente: || Ejecutar consultas SQL || Establecer políticas, aprobar planes y asignar responsabilidades || Supervisar la temperatura del datacenter || Programar las aplicaciones || 1 || Dirigir = fijar políticas, planes y responsabilidades.
:::

### Nivel 3 - Escenarios (espejo del evaluativo)

:::quiz ISO 38500 - Nivel 3 (escenarios)
1. En ISO/IEC 38500:2024, el principio de Rendimiento (Performance) exige fundamentalmente que: || Los costos de infraestructura esten bajo el promedio || Las TIC sean adecuadas para su propósito, satisfaciendo requisitos actuales y futuros || El uptime sea 99.99% || Se usen las últimas versiones de software || 1 || Performance es fit for purpose: adecuación a los requisitos actuales y futuros.
2. El cambio estructural de la versión 2024 es su alineación con ISO 37000, que implica integrar de forma indivisible: || Transformación digital y obsolescencia || Desempeno efectivo, gestión responsable y comportamiento ético || Externalizar ciberseguridad y backup || Eliminar los roles de gestión || 1 || Son los tres resultados de ISO 37000.
3. El consejo detecta que un proyecto no genera el valor esperado y se superan los riesgos aceptados. La acción que corresponde a "Monitorear" es: || Reasignar manualmente a los desarrolladores || Evaluar informes de auditoría y redefinir directrices o pedir un plan de mitigación a la gestión || Detener el proyecto y cancelar contratos || Aumentar el presupuesto sin cambiar la estrategia || 1 || Monitorear = evaluar informes y exigir corrección, sin microgestionar.
4. La distinción entre ISO 38500 e ITIL radica en que: || ISO es obligatoria e ITIL opcional || ISO da principios de gobierno (que/por que) a la alta dirección; ITIL da prácticas de gestión de servicios (como) || ITIL solo sirve a telecomunicaciones || ISO reemplaza a ITIL || 1 || Esa es la diferencia esencial.
5. El principio de Adquisición exige que las inversiones en TI sean: || Tomadas unilateralmente por compras || Basadas solo en el menor costo || Con análisis transparente de costos, beneficios y riesgos y por razones válidas || Aprobadas solo por arquitectura || 2 || Adquisición = transparencia costo-beneficio-riesgo.
6. Que escenario viola directamente el principio de Comportamiento Humano: || Actualizar sistemas el fin de semana || Monitorear actividad con capturas y pulsaciones sin aviso ni consentimiento || Reducir licencias para ahorrar || Contratar personal externo || 1 || Vigilar sin consentimiento informado viola el principio humano.
7. La tarea de "Dirigir" implica principalmente: || Ejecutar consultas SQL || Establecer políticas, aprobar planes estratégicos y asignar responsabilidades || Supervisar el consumo electrico || Desarrollar el código fuente || 1 || Dirigir = políticas, planes y responsabilidades.
8. El directorio aprueba una nube híbrida. Bajo el principio de Estrategia, antes debe verificar prioritariamente que: || El proveedor tenga ISO 27001 || Las capacidades esten contempladas en el plan estratégico de negocio y el plan de TI alineado || La interfaz sea intuitiva || El costo sea menor que la competencia || 1 || Estrategia exige alineación con el plan de negocio.
9. Si el órgano de gobierno delega tareas operativas en la gestión, la norma enfatiza que: || La responsabilidad se transfiere al CIO || La responsabilidad final y la accountability siguen siendo indelegables del órgano de gobierno || La responsabilidad se diluye entre todos || La asume el auditor externo || 1 || La accountability es indelegable.
10. En una organización ágil, el Monitoreo desde ISO 38500 debe centrarse en: || La velocity y el cumplimiento de fechas || Si el backlog refleja las prioridades estratégicas y si los entregables generan valor dentro del riesgo y cumplimiento || El número de incidencias resueltas || La cobertura de pruebas unitarias || 1 || Gobierno mira estrategia, valor, riesgo y cumplimiento.
:::

### Práctica guiada

:::sort Ordena el ciclo de gobierno E-D-M
- Evaluar: analizar demanda, opciones, riesgos y desempeno
- Dirigir: fijar políticas, planes y responsabilidades
- Monitorear: medir desempeno, vigilar conformidad y exigir cuentas
:::

:::match Principio ISO 38500 y su violación típica
- Responsabilidad | Nadie asume el dueño del riesgo
- Estrategia | Adquirir tecnología que no esta en el plan de negocio
- Adquisición | Comprar por menor precio sin analizar riesgos
- Desempeno | Medir solo uptime y no la adecuación al negocio
- Conformidad | Desplegar IA sin revisar la ley de protección de datos
- Comportamiento Humano | Vigilar a los empleados sin consentimiento
:::

:::truefalse ISO 38500
1. ISO 38500 describe paso a paso como implementar el gobierno de TI. || Falso || Establece que y por que, no el como detallado.
2. La accountability del gobierno de TI es indelegable. || Verdadero || El directorio puede delegar operación, nunca la responsabilidad final.
3. La versión 2024 de ISO 38500 se alinea con ISO 37000. || Verdadero || Adopta sus principios y los tres resultados del buen gobierno.
4. ITIL y ISO 38500 son marcos excluyentes. || Falso || Son complementarios: ISO da el que/por que e ITIL el como.
5. El principio de Desempeno exige que la TI sea la más nueva del mercado. || Falso || Exige que sea adecuada para su propósito (fit for purpose).
6. En ágiles, el gobierno debe monitorear la velocity de los sprints. || Falso || Debe monitorear el backlog estratégico y el valor dentro del riesgo.
:::

:::essay Evaluativo ISO 38500
1. Una empresa del sector financiero adquiere urgentemente un sistema de IA predictiva para riesgos, sin consulta formal al comite de cumplimiento normativo (cumple la adquisición técnica, omite el análisis de brechas legales). Identifique explicitamente que principios de ISO 38500 se vulneran y explique paso a paso como el órgano de gobierno aplicaría el ciclo Evaluar, Dirigir y Monitorear para corregir el rumbo y evitar recurrencias. || Pista: Nombra los principios (Conformidad, Responsabilidad, Adquisición) y luego desarrolla E, D y M uno por uno. || Respuesta modelo: Se vulneran Conformidad (no se analizaron las brechas legales), Responsabilidad (no hubo aprobación formal del órgano de gobierno y el riesgo quedo sin dueño) y Adquisición (falto el análisis transparente de riesgos). Corrección con E-D-M: Evaluar el uso de la IA, el riesgo y las brechas legales, consultando al comite de cumplimiento; Dirigir fijando la política de uso de IA, nombrando un responsable y aprobando el plan de mitigación; Monitorear el cumplimiento legal y el desempeno con reportes al directorio y auditorías. Para evitar recurrencias, el análisis legal se vuelve un paso obligatorio del proceso de adquisición. || [rúbrica: Identifica los principios correctos, Aplica E-D-M paso a paso, Propone medida anti-recurrencia, Terminología y redacción]
2. Desarrolle la diferencia entre Gobierno y Gestión segun ISO/IEC 38500. Argumente por que la correcta separación (y no aislamiento) de estos roles es crítica para la alineación estratégica, y de un ejemplo de una decisión exclusiva del gobierno y otra exclusiva de la gestión. || Pista: Gobierno = que/por que (accountability indelegable); gestión = como; da un ejemplo de cada uno. || Respuesta modelo: El gobierno (directorio o consejo) define que y por que: evalúa, dirige y monitorea, y su accountability es indelegable. La gestión (CIO y equipos) define el como: planifica, construye, opera y mide. Separarlos evita dos errores: delegar decisiones estratégicas al nivel operativo y microgestionar desde la dirección; además mantiene la alineación porque el gobierno fija el rumbo y la gestión lo ejecuta y retroalimenta con información. Ejemplo exclusivo del gobierno: aprobar la estrategia de TI y aceptar el riesgo de comprar IA predictiva. Ejemplo exclusivo de la gestión: seleccionar al proveedor técnico y configurar el modelo. || [rúbrica: Diferencia gobierno/gestión, Argumenta la separación, Ejemplos correctos, Terminología y redacción]
:::

:::path Corrección E-D-M en Financiera Andina
1 | Inicio | Financiera Andina compra IA predictiva sin consultar al comite de cumplimiento. ¿Que principios vulnera principalmente? | Conformidad, Responsabilidad y Adquisición=2; Desempeno y Estrategia unicamente=3
2 | Correcto | Bien: omitir el análisis legal golpea Conformidad, Responsabilidad y Adquisición. ¿Cual es el primer paso del E-D-M correctivo? | Evaluar el uso de la IA, el riesgo y las brechas legales=4; Detener el proyecto y despedir al CIO=5
3 | Parcial | Desempeno y Estrategia pueden verse afectados, pero la omisión del comite de cumplimiento golpea de lleno Conformidad, Responsabilidad y Adquisición. | * | Revisa los principios: no analizar leyes es Conformidad.
4 | Corrección | Evalúa, luego el directorio dirige (política de IA + responsable) y monitorea con auditoría. La recurrencia se evita haciendo obligatorio el análisis legal en la adquisición. | * | Ciclo E-D-M completo aplicado correctamente.
5 | Exceso | Cancelar o despedir sin evaluar no es gobernar: el E-D-M empieza por Evaluar, con criterio y datos. | * | Gobernar es evaluar, dirigir y monitorear, no reaccionar.
:::
