---
title: Auditoria Informatica
emoji: "🔍"
accent: "#E87C7C"
category: auditoria-ti
difficulty: intermedio
order: 16
description: Conceptos, caracteristicas, clasificacion, entorno auditable, tecnicas, herramientas, controles, metodologias de trabajo y metodos de evaluacion de la auditoria informatica. Incluye CRMR y diferencias entre auditoria global y parcial.
tags: [auditoria-informatica, CRMR, controles, metodologia-auditoria, entorno-auditable]
keyTakeaway: La auditoria informatica evalua el entorno tecnologico para encontrar debilidades y amenazas que afectan la calidad de los procesos y la confiabilidad de la informacion. El auditor debe dominar tecnicas, herramientas y metodologias para llegar a conclusiones fundamentadas.
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

## El Entorno Auditable

:::definition Entorno Auditable
Todo aquello que puede ser evaluado por un auditor. Incluye los sistemas, procesos, datos, personas, controles y procedimientos que conforman la infraestructura tecnologica de la organizacion.
:::

### Que es parte del entorno auditable?

| Componente | Que incluye | Que evalua el auditor |
|------------|-------------|----------------------|
| **Aplicaciones** | Software, sistemas, plataformas | Funcionalidad, seguridad, eficiencia |
| **Infraestructura** | Hardware, redes, servidores | Disponibilidad, capacidad, mantenimiento |
| **Datos** | Bases de datos, archivos, respaldos | Integridad, confiabilidad, accesibilidad |
| **Personas** | Personal de TI, usuarios | Competencia, procedimientos, controles |
| **Procesos** | Metodos de trabajo, flujos | Eficiencia, efectividad, cumplimiento |
| **Seguridad** | Politicas, controles de acceso | Proteccion, prevencion, deteccion |

:::callout info
En el examen se pregunta a que area especifica pertenece cada componente. Por ejemplo: "aplicaciones" pertenece a Desarrollo y Produccion, y la fila que necesita de ambos es SISTEMAS.
:::

### Areas Especificas vs Generales

| Area | Enfoque | Ejemplo de evaluacion |
|------|---------|----------------------|
| **Desarrollo** | Creacion de software | Metodologia de desarrollo, calidad del codigo |
| **Produccion** | Operacion de sistemas | Disponibilidad, rendimiento, respaldos |
| **Sistemas** | Integracion de ambos | Arquitectura, integracion, gobierno |
| **Gerencia** | Gestion y estrategia | Planificacion, organizacion, control (PODIO) |

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
El auditor combina tecnicas segun el objetivo. No basta con una sola tecnica; la combinacion da conclusiones mas solidas.
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

### Tipos de Controles

| Tipo | Funcion | Ejemplo |
|------|---------|---------|
| **Preventivos** | Evitan que ocurran problemas | Controles de acceso, autenticacion |
| **Detectivos** | Identifican problemas que ya ocurrieron | Logs de auditoria, alarmas |
| **Correctivos** | Corrigen problemas detectados | Restauracion de respaldos, parches |

### Controles por Area

| Area | Controles tipicos |
|------|-------------------|
| **Seguridad** | Permisos, contraseñas, firewall, cifrado |
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

## Metodos de Evaluacion de Auditoria

| Metodo | Descripcion | Cuando se usa |
|--------|-------------|---------------|
| **Conformidad** | Verifica el cumplimiento de normas y procedimientos | Para evaluar si se siguen las politicas |
| **Sustantivo** | Evalua la exactitud y confiabilidad de los datos | Para validar la informacion |
| **De cumplimiento** | Confirma que los controles estan operativos | Para verificar que los controles funcionan |
| **Integral** | Combina multiples metodos | Para auditorias completas |

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

:::callout info
CRMR se aplica mas a deficiencias organizativas y gerenciales que a problemas tecnicos. Evalua si el gerente sabe planificar, organizar, dirigir integrar y controlar (PODIO).
:::

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

## Areas de Auditoria por Area Especifica

| Area | Que evalua |
|------|------------|
| **Aplicaciones (Desarrollo)** | Metodologia de desarrollo, calidad del software, pruebas |
| **Aplicaciones (Produccion)** | Operacion de sistemas, disponibilidad, rendimiento |
| **Sistemas** | Arquitectura, integracion, gobierno tecnologico |
| **Gerencia** | Gestion, estrategia, planificacion (PODIO) |

:::callout info
En el examen se pregunta a que area especifica pertenece cada componente. Las areas especificas son: Desarrollo, Produccion y Sistemas. La fila que necesita de Desarrollo y Produccion es SISTEMAS.
:::

## Autoevaluacion

:::quiz Auditoria Informatica
1. Que busca la auditoria informatica? || Instalar software nuevo || Encontrar debilidades y amenazas en el entorno tecnologico || Vender computadores || Contratar mas personal || 1 || La auditoria informatica evalua el entorno tecnologico para identificar debilidades y amenazas.
2. Que evalua el CRMR? || Problemas tecnicos de hardware || Deficiencias organizativas y gerenciales || Ventas de la empresa || Satisfaccion del cliente || 1 || CRMR evalua deficiencias organizativas y gerenciales (PODIO), no problemas tecnicos.
3. Que tecnica permite ver como trabajan las personas? || Entrevista || Cuestionario || Observacion directa || Prueba sustantiva || 2 || La observacion directa permite ver como trabajan las personas en su entorno real.
:::

:::truefalse Auditoria Informatica
1. La auditoria global es mas rapida que CRMR. || Falso || La auditoria global es mas lenta porque es abarcadora. CRMR es mas rapida porque es focalizada.
2. Los controles preventivos evitan que ocurran problemas. || Verdadero || Los controles preventivos se aplican antes de que el problema suceda.
3. El informe es el producto final de la auditoria. || Verdadero || El informe documenta hallazgos, conclusiones y recomendaciones.
:::

:::match Tipos de controles
- Preventivos | Evitan que ocurran problemas
- Detectivos | Identifican problemas que ya ocurrieron
- Correctivos | Corrigen problemas detectados
- CRMR | Revision abreviada de gestion gerencial
:::

:::arch gobierno-ti
