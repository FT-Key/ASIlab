---
title: Auditoria Informatica
emoji: "🔍"
accent: "#E87C7C"
category: auditoria-ti
difficulty: intermedio
order: 16
description: Conceptos, caracteristicas, clasificacion, entorno auditable, tipos de auditoria, tecnicas, herramientas, controles, papeles de trabajo, etica del auditor, metodologias y metodos de evaluacion de la auditoria informatica. Incluye CRMR y un caso aplicado.
tags: [auditoria-informatica, CRMR, controles, metodologia-auditoria, entorno-auditable, papeles-de-trabajo]
keyTakeaway: La auditoria informatica evalua el entorno tecnologico para encontrar debilidades y amenazas que afectan la calidad de los procesos y la confiabilidad de la informacion. El auditor domina tecnicas, herramientas, controles y papeles de trabajo para llegar a conclusiones fundamentadas.
sources:
  - "Resumen libro auditoria|https://uniagustiniana.edu.co|Universidad Agustiniana|Libro de auditoria informatica"
  - "Resumen primer parcial|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
  - "EXAMEN PARCIAL I DE ADM REC|https://uniagustiniana.edu.co|Universidad Agustiniana|Examen practico"
---

## Que es la Auditoria Informatica?

:::definition Auditoria Informatica
Proceso sistematico de evaluacion del entorno tecnologico de una organizacion para identificar debilidades y amenazas que puedan afectar la calidad de los procesos, la confiabilidad de la informacion y la eficiencia de las operaciones. El auditor busca problemas y propone soluciones.
:::

:::callout info
La auditoria informatica NO es solo revisar computadores. Es evaluar toda la tecnologia: hardware, software, datos, personas, procesos y procedimientos que conforman el entorno informatico.
:::

## Caracteristicas de la Auditoria Informatica

1. **Es un proceso sistematico** — Sigue una metodologia y procedimientos estructurados
2. **Busca debilidades y amenazas** — Identifica vulnerabilidades en el entorno
3. **Evalua la calidad** — Mide si los procesos y la informacion cumplen estandares
4. **Es independiente** — El auditor no debe tener conflicto de intereses
5. **Es continua** — Se realiza de forma periodica, no una sola vez
6. **Genera recomendaciones** — No solo encuentra problemas, propone soluciones

## Clasificacion de la Auditoria Informatica

| Tipo | Enfoque | Que evalua | Ejemplo |
|------|---------|------------|---------|
| **Por areas especificas** | Tecnico | Aplicaciones, desarrollo, produccion | Revisar si una BD esta bien disenada |
| **Por areas generales** | Gerencial | Gestion, estrategia, organizacion | Evaluar si el gerente planifica bien (PODIO) |
| **Global** | Integral | Todos los aspectos tecnicos y gerenciales | Auditoria completa del departamento de TI |
| **Parcial (CRMR)** | Gerencial | Deficiencias organizativas y gerenciales | Revisar la gestion de un area especifica |

:::callout warning
La auditoria global estudia todos los problemas tecnicos, parametros, configuraciones y controles. La auditoria parcial (CRMR) es mas corta porque se enfoca solo en deficiencias gerenciales.
:::

## Tipos de Auditoria Informatica

Ademas de la clasificacion por areas, la auditoria se clasifica segun quien la hace y que evalua.

| Criterio | Tipo | Que significa |
|----------|------|---------------|
| **Por origen** | Interna | La realiza personal de la propia organizacion |
| | Externa | La realiza una firma independiente contratada |
| **Por alcance** | Global | Cubre todos los aspectos tecnicos y gerenciales |
| | Parcial (CRMR) | Se enfoca en un area o en deficiencias gerenciales |
| **Por objeto** | De sistemas | Evalua el entorno tecnologico: hardware, software, datos, redes |
| | Financiera | Evalua la confiabilidad de la informacion contable soportada por TI |
| | Operativa | Evalua eficiencia y eficacia de las operaciones |
| **Por continuidad** | Periodica | Se realiza en ciclos planificados |
| | Continua | Monitoreo permanente del entorno |

:::callout idea
Interna vs externa no es "buena vs mala": la interna conoce la organizacion pero puede perder objetividad; la externa aporta independencia pero requiere mas tiempo de contextualizacion. Lo importante es la **independencia** del juicio.
:::

## El Entorno Auditable

:::definition Entorno Auditable
Todo aquello que puede ser evaluado por un auditor. Incluye los sistemas, procesos, datos, personas, controles y procedimientos que conforman la infraestructura tecnologica de la organizacion.
:::

| Componente | Que incluye | Que evalua el auditor |
|------------|-------------|----------------------|
| **Aplicaciones** | Software, sistemas, plataformas | Funcionalidad, seguridad, eficiencia |
| **Infraestructura** | Hardware, redes, servidores | Disponibilidad, capacidad, mantenimiento |
| **Datos** | Bases de datos, archivos, respaldos | Integridad, confiabilidad, accesibilidad |
| **Personas** | Personal de TI, usuarios | Competencia, procedimientos, controles |
| **Procesos** | Metodos de trabajo, flujos | Eficiencia, efectividad, cumplimiento |
| **Seguridad** | Politicas, controles de acceso | Proteccion, prevencion, deteccion |

### Areas Especificas vs Generales

| Area | Enfoque | Ejemplo de evaluacion |
|------|---------|----------------------|
| **Desarrollo** | Creacion de software | Metodologia de desarrollo, calidad del codigo |
| **Produccion** | Operacion de sistemas | Disponibilidad, rendimiento, respaldos |
| **Sistemas** | Integracion de ambos | Arquitectura, integracion, gobierno |
| **Gerencia** | Gestion y estrategia | Planificacion, organizacion, control (PODIO) |

:::callout info
Las areas especificas son Desarrollo, Produccion y Sistemas. La fila que necesita de Desarrollo y Produccion a la vez es SISTEMAS.
:::

## Tecnicas de Auditoria

| Tecnica | Que hace | Cuando se usa |
|---------|----------|---------------|
| **Entrevista** | Recopila informacion mediante preguntas directas | Para entender procesos y percepciones |
| **Cuestionario** | Estandariza la recoleccion de datos | Para evaluar multiples areas de forma consistente |
| **Observacion directa** | Ve como trabajan las personas | Para verificar cumplimiento de procedimientos |
| **Inspeccion visual** | Revisa documentacion y registros | Para verificar que existan politicas y registros |
| **Prueba de cumplimiento** | Verifica si se siguen los procedimientos | Para confirmar que los controles funcionan |
| **Prueba sustantiva** | Evalua la exactitud de los datos | Para validar la confiabilidad de la informacion |

:::callout idea
El auditor combina tecnicas segun el objetivo. No basta con una sola; la combinacion da conclusiones mas solidas.
:::

## Herramientas de Auditoria

| Herramienta | Para que sirve | Ejemplo |
|-------------|----------------|---------|
| **Software de auditoria** | Automatiza pruebas y analisis | ACL, IDEA, CAT |
| **Hojas de calculo** | Analiza datos y genera reportes | Excel, Google Sheets |
| **Herramientas de monitoreo** | Supervisa la operacion en tiempo real | Nagios, Zabbix |
| **Simuladores** | Prueban escenarios sin afectar produccion | Entornos de prueba |
| **Generadores de informes** | Documentan hallazgos y recomendaciones | Plantillas de auditoria |

## Controles de Auditoria

:::definition Controles de Auditoria
Mecanismos de prevencion, deteccion y correccion que protegen los activos de TI, aseguran la integridad de la informacion y garantizan el cumplimiento de politicas y procedimientos.
:::

| Tipo | Funcion | Ejemplo |
|------|---------|---------|
| **Preventivos** | Evitan que ocurran problemas | Controles de acceso, autenticacion |
| **Detectivos** | Identifican problemas que ya ocurrieron | Logs de auditoria, alarmas |
| **Correctivos** | Corrigen problemas detectados | Restauracion de respaldos, parches |

### Controles por Area

| Area | Controles tipicos |
|------|-------------------|
| **Seguridad** | Permisos, contrasenas, firewall, cifrado |
| **Disponibilidad** | Respaldos, planes de continuidad, redundancia |
| **Integridad** | Validaciones, sumas de verificacion, auditoria de datos |
| **Confidencialidad** | Cifrado, politicas de acceso, NDA |

## Metodologia de Trabajo del Auditor

:::flow Metodologia de Auditoria
1. Planificacion: Definir alcance, objetivos, recursos y cronograma
2. Recopilacion: Aplicar tecnicas y herramientas para obtener evidencia
3. Analisis: Evaluar la evidencia y encontrar debilidades y amenazas
4. Conclusiones: Formular hallazgos, opiniones y recomendaciones
5. Informe: Documentar resultados y presentar a la direccion
:::

### Fase 1: Planificacion
- Definir el alcance de la auditoria
- Establecer objetivos claros
- Asignar recursos (personas, tiempo, herramientas)
- Crear el cronograma de actividades

### Fase 2: Recopilacion de Informacion
- Aplicar entrevistas, cuestionarios y observacion
- Revisar documentacion y registros
- Realizar pruebas de cumplimiento y sustantivas
- Recopilar evidencia objetiva

### Fase 3: Analisis
- Evaluar la evidencia obtenida
- Identificar debilidades y amenazas
- Clasificar los hallazgos por criticidad
- Comparar con estandares y mejores practicas

### Fase 4: Conclusiones
- Formular hallazgos fundamentados
- Emitir opiniones sobre el estado del entorno
- Proponer recomendaciones accionables
- Priorizar acciones correctivas

### Fase 5: Informe de Auditoria
- Documentar hallazgos, conclusiones y recomendaciones
- Presentar a la direccion y areas involucradas
- Establecer plan de seguimiento
- Definir plazos para implementar acciones correctivas

:::callout warning
El informe es el producto final de la auditoria. Debe ser claro, conciso y fundamentado. Un informe sin evidencia no tiene valor.
:::

## Papeles de Trabajo del Auditor

:::definition Papeles de Trabajo
Conjunto ordenado de documentos donde el auditor registra el trabajo realizado y la evidencia obtenida. Son la base que sustenta los hallazgos, conclusiones y el informe final. Pertenecen al auditor o a la firma, son confidenciales y deben custodiarse.
:::

| Elemento | Que es | Ejemplo |
|----------|--------|---------|
| **Evidencia** | Prueba objetiva que sustenta un hallazgo | Logs, capturas, actas, resultados de pruebas |
| **Cedula / hoja de trabajo** | Documento donde se registra el analisis | Checklist de controles de acceso |
| **Marcas de auditoria** | Simbolos que referencian la evidencia | √ verificado, N/A no aplica, ≠ observado |
| **Legajo / archivo** | Conjunto ordenado de los papeles | Carpeta del area auditada |
| **Hallazgo** | Debilidad documentada con causa, efecto y recomendacion | "No hay respaldos: riesgo de perdida de datos" |

:::callout info
Un hallazgo bien redactado tiene 4 partes: **condicion** (que se encontro), **criterio** (que deberia ser), **causa** (por que ocurre) y **efecto** (que riesgo genera). Sin evidencia en el papel de trabajo, el hallazgo no se sostiene.
:::

## Etica y Perfil del Auditor

| Principio | Que exige |
|-----------|-----------|
| **Independencia** | No tener conflicto de intereses con el area auditada |
| **Objetividad** | Juzgar por la evidencia, sin sesgos ni favoritismos |
| **Confidencialidad** | No divulgar la informacion obtenida |
| **Competencia** | Tener los conocimientos tecnicos necesarios |
| **Diligencia (due care)** | Realizar el trabajo con rigor y metodo |
| **Integridad** | Actuar con honestidad en todo momento |

## La Revision de los Recursos Informaticos de la Direccion (CRMR)

:::definition CRMR
Metodologia de auditoria abreviada que se enfoca en evaluar las debilidades y amenazas en la gestion de los directores de area. Es mas corta que la auditoria global porque no busca problemas tecnicos, sino deficiencias organizativas y gerenciales.
:::

### Objetivos de CRMR
1. Evaluar el grado de bondad o ineficiencia de los procedimientos y metodos de gestion
2. Identificar y fijar responsabilidades
3. Mejorar la flexibilidad de realizacion de actividades
4. Aumentar la productividad
5. Disminuir costes
6. Mejorar los metodos y procedimientos de direccion

### Alcance del CRMR

| Nivel | Descripcion | Que incluye |
|-------|-------------|-------------|
| **Reducido** | Senala areas con potencialidad de beneficios | Identificacion de oportunidades |
| **Medio** | Establece conclusiones y recomendaciones | Como la auditoria ordinaria |
| **Amplio** | Incluye planes de accion e implementacion | Tecnicas de implementacion |

### Auditoria Global vs CRMR

| Aspecto | Auditoria Global | CRMR |
|---------|------------------|------|
| **Alcance** | Todos los aspectos tecnicos y gerenciales | Solo deficiencias gerenciales |
| **Profundidad** | Alta (estudia todos los problemas) | Menor (enfoque en gestion) |
| **Velocidad** | Lenta (abarcadora) | Rapida (focalizada) |
| **Resultado** | Informe completo con recomendaciones tecnicas | Soluciones rapidas a problemas concretos |

## Clasificacion de Auditoria por Funcion

| Funcion | Que evalua | Ejemplo |
|---------|------------|---------|
| **Funcion de Direccion** | Planificacion, organizacion, integracion | Si el gerente planifica y organiza bien |
| **Funcion de Operacion** | Ejecucion de procesos operativos | Si los sistemas funcionan correctamente |
| **Funcion de Produccion** | Generacion de servicios y productos | Si la produccion es eficiente |
| **Funcion de Soporte** | Servicio tecnico y ayuda al usuario | Si el soporte resuelve problemas a tiempo |

:::callout info
Para la funcion de produccion se busca: operatividad, confiabilidad, seguridad y disponibilidad.
:::

## Caso de estudio: Comercial del Valle

Comercial del Valle es una cadena de tiendas que depende de su sistema de inventario y facturacion. La gerencia sospecha que hay problemas: no existen respaldos documentados, los cajeros comparten una sola contrasena, y los cambios al sistema se hacen directamente en produccion sin pruebas. Se contrata una auditoria informatica externa.

| Hallazgo | Condicion | Criterio | Causa | Efecto |
|----------|-----------|----------|-------|--------|
| Sin respaldos | No hay respaldos ni plan de recuperacion | Debe existir respaldo y plan de continuidad | Falta de politica de TI | Riesgo de perdida total de datos |
| Contrasenas compartidas | Todos los cajeros usan la misma cuenta | Cada usuario debe tener credencial propia | Comodidad operativa | No hay trazabilidad ni responsabilidad |
| Cambios en produccion | Se modifica el sistema sin pasar por pruebas | Debe existir separacion de entornos y control de cambios | Ausencia de proceso de cambios | Fallos e interrupciones del servicio |

:::callout success
El informe del auditor no se limita a senalar: prioriza por criticidad y propone acciones (respaldos automaticos, cuentas individuales, entorno de pruebas y control de cambios). Cada hallazgo queda sustentado en un papel de trabajo con evidencia.
:::

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz Auditoria Informatica - Nivel 1 (memoria)
1. ¿Que busca la auditoria informatica? || Instalar software nuevo || Encontrar debilidades y amenazas en el entorno tecnologico || Vender computadores || Contratar mas personal || 1 || Evalua el entorno tecnologico para identificar debilidades y amenazas.
2. ¿Cuantas fases tiene la metodologia de auditoria? || 3 || 4 || 5 || 7 || 2 || Cinco: Planificacion, Recopilacion, Analisis, Conclusiones e Informe.
3. ¿Que evalua el CRMR? || Problemas tecnicos de hardware || Deficiencias organizativas y gerenciales || Ventas de la empresa || Satisfaccion del cliente || 1 || CRMR evalua deficiencias organizativas y gerenciales (PODIO), no problemas tecnicos.
4. ¿Que tecnica permite ver como trabajan las personas? || Entrevista || Cuestionario || Observacion directa || Prueba sustantiva || 2 || La observacion directa permite ver el trabajo en su entorno real.
5. ¿A quien pertenecen los papeles de trabajo? || A la empresa auditada || Al auditor o a la firma de auditoria || Al publico || Al proveedor de software || 1 || Pertenecen al auditor o la firma, son confidenciales y se custodian.
:::

### Nivel 2 - Comprension

:::quiz Auditoria Informatica - Nivel 2 (comprension)
1. ¿Cual es la diferencia entre auditoria interna y externa? || La interna la hace personal propio y la externa una firma independiente || La interna es mas cara || La externa no usa evidencia || Son iguales || 0 || Interna: personal de la organizacion. Externa: firma independiente contratada.
2. ¿Que diferencia hay entre auditoria global y CRMR? || La global cubre todo lo tecnico y gerencial; CRMR solo lo gerencial || CRMR es mas lenta || La global no usa tecnicas || Son sinonimos || 0 || La global es abarcadora; CRMR es abreviada y enfocada en gestion.
3. ¿Que hace un control preventivo? || Detecta problemas ya ocurridos || Evita que ocurran problemas || Corrige problemas detectados || Documenta el informe || 1 || Los preventivos actuan antes de que el problema ocurra.
4. ¿Que diferencia una prueba de cumplimiento de una sustantiva? || La de cumplimiento verifica si se siguen los procedimientos; la sustantiva valida la exactitud de los datos || La sustantiva es mas rapida || La de cumplimiento no usa evidencia || Son iguales || 0 || Cumplimiento: se siguen los controles. Sustantiva: los datos son exactos.
5. Un hallazgo bien redactado incluye: || Solo la queja del auditor || Condicion, criterio, causa y efecto || El nombre del responsable || El costo del software || 1 || Un hallazgo tiene condicion, criterio, causa y efecto, sustentado en evidencia.
6. ¿Que principio obliga al auditor a no tener conflicto de intereses? || Confidencialidad || Independencia || Diligencia || Competencia || 1 || La independencia exige ausencia de conflicto de intereses con el area auditada.
:::

### Nivel 3 - Casos de empresa

:::quiz Auditoria Informatica - Nivel 3 (escenarios)
1. En Comercial del Valle no existen respaldos ni plan de recuperacion. ¿Que control falta principalmente? || Preventivo de disponibilidad || Correctivo de seguridad || Detectivo de integridad || Preventivo de confidencialidad || 0 || El respaldo y el plan de continuidad son controles preventivos de disponibilidad.
2. Todos los cajeros usan la misma contrasena. ¿Que problema genera? || Mejora el rendimiento || No hay trazabilidad ni responsabilidad individual || Reduce costos || Aumenta la disponibilidad || 1 || Sin credenciales individuales no se puede rastrear quien hizo que.
3. Los cambios al sistema se hacen directo en produccion sin pruebas. ¿Que control fundamental falta? || Separacion de entornos y control de cambios || Cifrado de disco || Balanceo de carga || Respaldo de correo || 0 || Sin separacion de entornos ni control de cambios, un error afecta produccion.
4. La gerencia pide evaluar solo si los directores de area gestionan bien (PODIO). ¿Que tipo de auditoria corresponde? || Global || CRMR (parcial) || Financiera || De sistemas || 1 || CRMR se enfoca en deficiencias organizativas y gerenciales.
5. El auditor toma capturas de pantalla y actas como sustento de un hallazgo. ¿Como se llama ese respaldo? || Marca de auditoria || Evidencia en el papel de trabajo || Informe final || Cronograma || 1 || La evidencia registrada en los papeles de trabajo sustenta el hallazgo.
6. Se contrata una firma independiente para auditar el area de TI. ¿Que tipo de auditoria es por su origen? || Interna || Externa || Continua || Financiera || 1 || Una firma independiente contratada realiza auditoria externa.
:::

### Practica guiada

:::sort Ordena las fases de la metodologia de auditoria
- Planificacion: definir alcance, objetivos y recursos
- Recopilacion: aplicar tecnicas y obtener evidencia
- Analisis: evaluar evidencia y encontrar debilidades
- Conclusiones: formular hallazgos y recomendaciones
- Informe: documentar y presentar a la direccion
:::

:::match Tipos de controles
- Preventivos | Evitan que ocurran problemas
- Detectivos | Identifican problemas que ya ocurrieron
- Correctivos | Corrigen problemas detectados
- CRMR | Revision abreviada de gestion gerencial
:::

:::match Tipos de auditoria por objeto
- De sistemas | Evalua el entorno tecnologico
- Financiera | Evalua la confiabilidad de la informacion contable soportada por TI
- Operativa | Evalua eficiencia y eficacia de las operaciones
- Global | Cubre todos los aspectos tecnicos y gerenciales
:::

:::truefalse Auditoria Informatica
1. La auditoria global es mas rapida que CRMR. || Falso || La global es mas lenta porque es abarcadora; CRMR es focalizada.
2. Los controles preventivos evitan que ocurran problemas. || Verdadero || Actuan antes de que el problema suceda.
3. El informe es el producto final de la auditoria. || Verdadero || Documenta hallazgos, conclusiones y recomendaciones.
4. Los papeles de trabajo son publicos. || Falso || Son confidenciales y pertenecen al auditor o la firma.
5. Un hallazgo sin evidencia sigue siendo valido. || Falso || Sin evidencia registrada el hallazgo no se sostiene.
6. La independencia del auditor es un requisito etico. || Verdadero || No debe tener conflicto de intereses con el area auditada.
:::

:::essay Analisis de auditoria
1. Explica por que la evidencia y los papeles de trabajo son la base del informe de auditoria. || Pista: Piensa en como se sostiene un hallazgo frente a la direccion. || Respuesta modelo: El informe se construye sobre hallazgos, y todo hallazgo necesita evidencia objetiva. Los papeles de trabajo registran esa evidencia (logs, actas, capturas, resultados de pruebas) y las marcas de auditoria la referencian. Sin ellos, el hallazgo seria una opinion sin sustento y la direccion no tendria base para decidir ni para exigir acciones correctivas. || [rubrica: Define evidencia, Define papeles de trabajo, Relaciona con el hallazgo, Menciona el informe]
2. Disena los pasos de una auditoria informatica para una empresa que no tiene respaldos ni control de accesos. || Pista: Recorre las 5 fases de la metodologia. || Respuesta modelo: 1) Planificacion: definir alcance (respaldos y accesos), objetivos y cronograma. 2) Recopilacion: entrevistas, observacion y pruebas para obtener evidencia. 3) Analisis: identificar debilidades (sin respaldos, contrasenas compartidas) y clasificar por criticidad. 4) Conclusiones: formular hallazgos con condicion, criterio, causa y efecto, y proponer acciones. 5) Informe: presentar a la direccion con plan de seguimiento y plazos. || [rubrica: Cubre las 5 fases, Propone tecnicas, Formula hallazgos, Incluye recomendaciones]
:::

:::path Diagnostico de auditoria en Comercial del Valle
1 | Inicio | La gerencia te pide auditar el area de TI porque el sistema de inventario falla y no hay respaldos. ¿Cual es tu primer paso? | Planificar alcance, objetivos y cronograma=2; Empezar a cambiar el sistema de inmediato=3
2 | Planificacion | Correcto: la auditoria empieza definiendo alcance, objetivos, recursos y cronograma antes de recopilar evidencia. | * | Buen inicio: sin planificacion la evidencia se recoge sin rumbo.
3 | Error de enfoque | El auditor no implementa cambios: evalua y recomienda. Cambiar el sistema de inmediato elimina la evidencia y confunde roles. | * | Riesgo: el auditor pierde independencia y el hallazgo no queda sustentado.
:::

:::arch gobierno-ti
