---
title: Caso de Estudio - Ingenio Azucarero
emoji: "🏭"
accent: "#7C61D4"
category: admin-estrategica
difficulty: intermedio
order: 1
description: Caso real de administracion de SI en la industria azucarera colombiana. Los sistemas criticos (SCADA, ERP, MES, LIMS, WMS, BI) y la zafra como proyecto de alta presion, integrando PMBOK 8 (7 dominios y 40 procesos), COBIT e ITIL en el dia a dia (dia 45, 06:00 a 08:15).
tags: [caso-estudio, industria, zafra, PMBOK, COBIT, ITIL, SCADA, transformacion-digital]
keyTakeaway: En la zafra, la TI se gobierna y gestiona con tres marcos a la vez: PMBOK 8 estructura el proyecto, COBIT alinea la estrategia y los riesgos desde la alta direccion, e ITIL opera y responde a incidentes. Ninguno basta solo.
sources:
  - "Caso de Estudio Ingenio Azucarero|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase U1"
  - "Gestion de Proyectos PMBOK 8|https://uniagustiniana.edu.co|Universidad Agustiniana|Documento U31"
---

## Introduccion al Caso

:::callout info
Este caso analiza un ingenio azucarero colombiano donde los sistemas de informacion pasaron de ser herramientas de soporte a componentes estrategicos. El foco es la **zafra**: la temporada de cosecha y molienda, un proyecto de alta presion con una ventana fija de 4 a 6 meses.
:::

:::definition Transformacion Digital
Proceso por el cual una organizacion integra tecnologias digitales en todas sus areas, cambiando como opera y entrega valor. No es solo comprar computadores: es redisenar procesos y cultura alrededor de los datos.
:::

## Contexto del Negocio

Un ingenio transforma la cana en azucar crudo, refinado y subproductos (melaza, bagazo). El proceso:

- **Cosecha y transporte** de cana desde el cultivo hasta el ingenio
- **Molienda** para extraer el jugo
- **Cocina y cristalizacion** del azucar
- **Empaque y distribucion**
- **Generacion electrica** con bagazo (energia renovable)

:::definition Sistema de Informacion Industrial
Conjunto integrado de hardware, software, datos, personas y procesos que permiten recopilar, almacenar, procesar y distribuir la informacion necesaria para la operacion y gestion de una planta industrial.
:::

## Sistemas Clave en el Ingenio

| Sistema | Funcion | Area |
|---------|---------|------|
| SCADA | Control y monitoreo de procesos industriales en tiempo real | Produccion |
| ERP | Gestion empresarial integrada (finanzas, RRHH, compras) | Administracion |
| MES | Gestion de la fabricacion en tiempo real | Produccion |
| LIMS | Control de calidad de laboratorio | Calidad |
| WMS | Gestion de almacen y logistica | Logistica |
| BI | Business Intelligence y analisis de datos | Gerencia |

- **SCADA** — Lee sensores (temperatura, presion, flujo) y permite operar la planta desde pantallas. Si se cae, la planta se detiene.
- **ERP** — Integra finanzas, RRHH, compras, inventarios y contabilidad en una sola base de datos.
- **MES** — Puente entre el piso de planta (SCADA) y la administracion (ERP): ordenes, trazabilidad y rendimiento.
- **LIMS** — Administra muestras, analisis fisicoquimicos y certificaciones de calidad.
- **WMS** — Gestiona ubicaciones, entradas, salidas y despachos de inventario.
- **BI** — Consolida datos para tableros e indicadores de decision gerencial.

:::callout warning
Un fallo en el SCADA puede detener toda la produccion y generar perdidas de miles de dolares por hora. Su disponibilidad es critica.
:::

## La Zafra: el desafio critico

| Elemento | Descripcion |
|----------|-------------|
| Periodo critico | Mayo a octubre (aprox. 180 dias continuos) |
| Operacion | 24/7, 3 turnos, sin dias de descanso |
| Riesgo maximo | Una parada de mas de 4 horas puede significar perder cana por valor de $500,000 USD/dia |
| Sistemas criticos | SCADA (molinos), logistica de cana, laboratorio, ERP de pagos, mantenimiento |

## Los 7 Dominios PMBOK aplicados a la zafra

El proyecto se llama "Asegurar la operacion continua de TI durante la zafra".

| Dominio PMBOK | Aplicacion en la zafra |
|---------------|------------------------|
| **Gobernanza** | Comite de Gobierno de Zafra presidido por el Gerente Industrial; se reune cada dia a las 7:00 AM y aprueba cambios |
| **Alcance** | Congelamiento de alcance firmado: solo disponibilidad 99.95% de SCADA, logistica y laboratorio |
| **Cronograma** | Hitos fijos: T-30 pruebas de redundancia, T-14 simulacro, T-7 inventario de repuestos, T-0 modo zafra |
| **Finanzas** | Presupuesto de operacion + fondo de contingencia; gastos sobre $5,000 los aprueba el comite |
| **Interesados** | Reporte diario al Gerente Industrial; encuesta semanal a operadores de molinos |
| **Recursos** | 3 turnos + guardia 24/7; repuestos criticos en rack de acceso restringido |
| **Riesgo** | Matriz con dueno y respuesta por riesgo (SCADA, ransomware, corte de energia, fuga de personal) |

:::callout idea Enfoque holistico en la zafra
Los dominios estan interconectados: aprobar un cambio de software (Gobernanza) afecta el Cronograma y consume el fondo de contingencia (Finanzas), y a la vez toca los Riesgos y los Interesados. Gestionar la zafra es gestionar ese sistema completo.
:::

## Integracion COBIT + ITIL + PMBOK en la zafra

| Situacion real | COBIT (gobierno) | ITIL (operacion) | PMBOK 8 (proyecto) |
|----------------|------------------|------------------|--------------------|
| Error en SCADA que para un molino | EDM03: evaluar la gestion de riesgos | Incident Management: restaurar el servicio | Monitor Risks: actualizar la matriz |
| Actualizar el software de logistica | APO01: portafolio de cambios | Change Management: evaluar, aprobar, programar | Evaluar e Implementar Cambios |
| El laboratorio reporta datos erroneos | MEA01: monitorear el desempeno | Problem Management: causa raiz | Monitorear y Controlar el Alcance |
| Fin de zafra: entregar a operacion normal | APO06: documentacion y cierre | Service Transition: modo post-zafra | Cerrar Proyecto o Fase |

:::callout success Por que los tres
**PMBOK 8** da la estructura de gobierno y ejecucion diaria del proyecto. **COBIT** da el alineamiento estrategico y la gestion de riesgos desde la alta direccion. **ITIL** da el manual de operaciones y respuesta a incidentes. Uno solo no basta: ITIL sin COBIT opera bien pero se desalinea; COBIT sin ITIL tiene estrategia pero falla en ejecucion; PMBOK sin ITIL gestiona el proyecto pero no la operacion continua.
:::

## Un dia cualquiera en la zafra (dia 45)

| Hora | Que ocurre | Marco que actua |
|------|-----------|-----------------|
| 06:00 | El sistema de logistica va lento; los proveedores de cana no pueden registrar entregas | ITIL (Incident) |
| 06:15 | El tecnico de turno detecta que la base de datos crece mas de lo esperado | ITIL (Incident) |
| 06:30 | Se activa el escalamiento; el lider de TI informa al comite y propone purgar registros antiguos | PMBOK (Escalamiento) |
| 07:00 | Reunion del comite: analiza riesgo de perder datos, aprobacion del cambio e impacto en la operacion | PMBOK + COBIT (EDM03, APO01) |
| 07:15 | Se aprueba la purga controlada, con supervision | COBIT (Gobernanza) |
| 07:30 | TI ejecuta el cambio | ITIL (Change Management) |
| 08:00 | El sistema vuelve a la normalidad; se registra el incidente y se programa causa raiz | ITIL (Problem Management) |
| 08:15 | El lider de TI actualiza cronograma y presupuesto con el costo de las horas extra | PMBOK (Finance y Schedule) |

## Conceptos Financieros y de Gestion

:::definition ROI (Return on Investment)
Retorno de la inversion. Mide cuanto gana un proyecto respecto a lo que costo: ROI = (Beneficios - Costos) / Costos x 100.
:::

:::definition KPI (Key Performance Indicator)
Indicador clave de desempeno. Metrica que mide que tan bien se logran los objetivos (ej. toneladas de azucar por dia, disponibilidad del sistema).
:::

:::definition SLA (Service Level Agreement)
Acuerdo de nivel de servicio. Compromiso formal sobre niveles esperados (disponibilidad, tiempos de respuesta) y sanciones si no se cumplen.
:::

## Beneficios de la Administracion Estrategica de TI

1. **Reduccion de costos operativos** con automatizacion
2. **Mejor toma de decisiones** con datos en tiempo real
3. **Cumplimiento normativo** ambiental y de seguridad
4. **Sostenibilidad** con generacion electrica a partir de bagazo (80-90% de autobastecimiento)
5. **Competitividad** en mercados internacionales

:::flow Proceso de Transformacion Digital
- Diagnostico del estado actual de TI
- Definicion de la estrategia digital
- Implementacion de sistemas criticos
- Capacitacion del personal
- Monitoreo y mejora continua
:::

## Autoevaluacion

### Nivel 1 - Conceptos base

:::quiz Ingenio - Nivel 1 (memoria)
1. ¿Cual es el sistema mas critico en un ingenio? || SCADA || ERP || MES || LIMS || 0 || El SCADA controla los procesos industriales; si se cae, la planta se detiene.
2. ¿Cuanto dura aproximadamente la zafra? || 30 dias || 90 dias || 180 dias || 365 dias || 2 || La zafra dura de 4 a 6 meses (aprox. 180 dias continuos).
3. ¿Que porcentaje de energia puede autogenerar un ingenio con bagazo? || 20-30% || 50-60% || 80-90% || 100% || 2 || Puede autobastecerse entre 80% y 90% con bagazo.
4. ¿Que sistema es el puente entre el piso de planta y la administracion? || WMS || MES || BI || LIMS || 1 || El MES conecta SCADA (planta) con ERP (administracion).
5. ¿Cada cuanto se reune el Comite de Gobierno de Zafra? || Cada hora || Cada manana a las 7:00 AM || Cada semana || Cada mes || 1 || Se reune cada manana a las 7:00 AM durante la zafra.
6. ¿Que marco da el manual de operacion y respuesta a incidentes? || PMBOK || COBIT || ITIL || ISO 9001 || 2 || ITIL aporta la operacion (incidentes, cambios, problemas).
:::

### Nivel 2 - Comprension

:::quiz Ingenio - Nivel 2 (comprension)
1. ¿Que dominio PMBOK agrupa el Comite de Gobierno de Zafra? || Alcance || Gobernanza || Recursos || Riesgo || 1 || El comite decide y supervisa: es Gobernanza.
2. El "congelamiento de alcance" firmado corresponde al dominio: || Alcance || Finanzas || Cronograma || Interesados || 0 || Define que incluye y que no incluye: Alcance.
3. Aprobar cambios al plan de TI durante la zafra es funcion de: || ITIL Change Management y COBIT APO01 || Solo el tecnico de turno || El proveedor de cana || El area de compras || 0 || La gobernanza aprueba; ITIL ejecuta el cambio y COBIT alinea.
4. ¿Por que la zafra es un caso de gestion de proyectos? || Porque no tiene fecha fija || Porque es un esfuerzo temporal con alcance, plazo y presupuesto definidos || Porque no tiene riesgos || Porque no necesita equipo || 1 || Es temporal, con ventana fija y presupuesto: un proyecto.
5. La matriz de riesgos con un "dueno" por riesgo corresponde a: || Riesgo || Recursos || Finanzas || Interesados || 0 || Cada riesgo tiene responsable y respuesta: Riesgo.
6. ¿Que marco alinea la estrategia y los riesgos desde la alta direccion? || ITIL || COBIT || PMBOK || WMS || 1 || COBIT da el gobierno y la alineacion estrategica.
7. Que la base de datos crezca y ralentice el sistema es un: || Cambio planificado || Incidente || Problema resuelto || Nuevo requisito || 1 || Es un incidente: algo que interrumpe o degrada el servicio.
8. Registrar el incidente y buscar la causa raiz corresponde a: || Problem Management (ITIL) || Change Management (ITIL) || ROI || SCADA || 0 || La causa raiz es Problem Management.
:::

### Nivel 3 - Escenarios

:::quiz Ingenio - Nivel 3 (escenarios)
1. En plena zafra, el SCADA falla y detiene un molino. ¿Que hace primero ITIL? || Buscar la causa raiz || Restaurar el servicio lo antes posible (Incident Management) || Actualizar el software || Cerrar el proyecto || 1 || Primero restaurar (incidente); luego la causa raiz (problema).
2. El comite aprueba un cambio de software en plena zafra. ¿Que proceso COBIT lo alinea? || APO01 portafolio de cambios || DSS02 solicitudes || MEA03 conformidad || BAI11 proyectos || 0 || APO01 evalua si el cambio esta alineado con la zafra.
3. Un proyecto de TI de la zafra entrega todo a tiempo pero la operacion no mejora. ¿Que principio PMBOK se vulnero? || Foco en el valor || Vision holistica || Sostenibilidad || Entorno empoderado || 0 || Entregar a tiempo es output; el valor (outcome) no se logro.
4. El sistema de laboratorio reporta datos erroneos. ¿Que proceso COBIT vigila que los KPIs fallen? || MEA01 monitorear desempeno || APO02 estrategia || EDM01 marco de gobierno || BAI03 soluciones || 0 || MEA01 monitorea el desempeno y la conformidad.
5. Al terminar la zafra, se entregan los sistemas a operacion normal. ¿Que proceso PMBOK cierra? || Iniciar Proyecto || Cerrar Proyecto o Fase || Identificar Riesgos || Adquirir Recursos || 1 || Cerrar Proyecto o Fase finaliza formalmente.
6. Una parada de 5 horas en la zafra. ¿Que dominio PMBOK debe actualizarse con el costo? || Finanzas y Cronograma || Solo Recursos || Solo Interesados || No se actualiza || 0 || El costo y el tiempo afectan Finanzas y Cronograma.
7. El equipo de TI responde un incidente sin escalar porque tiene autoridad definida. ¿Que proceso PMBOK lo respalda? || Liderar al Equipo (liderazgo situacional) || Desarrollar el Presupuesto || Validar el Alcance || Planificar Comunicaciones || 0 || El liderazgo situacional da autoridad operativa acotada.
8. Se decide aceptar el riesgo de fuga de personal clave con un plan de contingencia. ¿Que proceso PMBOK se aplico? || Planificar Respuestas a los Riesgos || Estimar Costos || Definir el Alcance || Gestionar el Conocimiento || 0 || Planificar respuestas define la accion para cada riesgo.
:::

### Practica guiada

:::sort Ordena los hitos previos a la zafra
- T-30: Pruebas de redundancia de servidores SCADA
- T-14: Simulacro de caida del sistema de logistica
- T-7: Inventario fisico de repuestos criticos
- T-0: Pase a modo zafra (sin cambios no esenciales)
:::

:::match Relaciona conceptos del caso
- ERP | Sistema de planificacion de recursos empresariales (finanzas, RRHH, compras)
- ROI | Retorno de inversion: ganancia respecto a lo invertido
- KPI | Indicador clave de desempeno
- SLA | Acuerdo de nivel de servicio
- SCADA | Control y monitoreo de procesos industriales
- MES | Gestion de la fabricacion en tiempo real
:::

:::truefalse Ingenio Azucarero
1. El SCADA es el sistema de control y monitoreo de procesos industriales. || Verdadero || Si se cae, la planta se detiene.
2. La zafra es una operacion 24/7 con ventana de tiempo fija. || Verdadero || 180 dias continuos, 3 turnos.
3. PMBOK, COBIT e ITIL son excluyentes en la zafra. || Falso || Se complementan: proyecto, gobierno y operacion.
4. El MES conecta el piso de planta (SCADA) con la administracion (ERP). || Verdadero || Es el puente entre ambos.
5. Una parada de mas de 4 horas es un riesgo menor en la zafra. || Falso || Puede costar $500,000 USD/dia: es critico.
6. ITIL se encarga de la respuesta a incidentes y cambios en operacion. || Verdadero || Incident, Change y Problem Management son ITIL.
:::

:::essay Caso Ingenio Azucarero
1. Explique como se integran PMBOK 8, COBIT e ITIL para asegurar la operacion continua durante la zafra. Use un ejemplo del dia 45 (06:00 a 08:15) para ilustrar la participacion de cada marco. || Pista: PMBOK estructura el proyecto; COBIT gobierna y alinea riesgos; ITIL opera y responde a incidentes. || Respuesta modelo: En la zafra los tres marcos actuan juntos. PMBOK 8 estructura el proyecto con sus 7 dominios (gobernanza, alcance, cronograma, finanzas, interesados, recursos, riesgo) y sus procesos. COBIT da el gobierno y la alineacion estrategica desde la alta direccion (EDM03 evalua riesgos, APO01 gestiona el portafolio de cambios). ITIL da la operacion y respuesta a incidentes (Incident, Change y Problem Management). En el dia 45: a las 06:00 ITIL detecta la lentitud del sistema de logistica (incidente); a las 06:30 el lider escala al comite (PMBOK); a las 07:00 el comite evalua riesgo y aprueba el cambio (PMBOK y COBIT); a las 07:30 se ejecuta el cambio (ITIL); a las 08:00 se restaura el servicio y se programa la causa raiz (ITIL); a las 08:15 se actualizan cronograma y presupuesto (PMBOK). Ninguno basta solo. || [rúbrica: Explica el rol de cada marco, Aplica el ejemplo del dia 45, Muestra la complementariedad, Terminologia y redaccion]
2. ¿Por que la zafra se puede gestionar como un proyecto y que dominios PMBOK son mas criticos? Ejemplifique con al menos tres dominios. || Pista: Es temporal, con ventana fija, alcance y presupuesto; elige dominios y da ejemplos del caso. || Respuesta modelo: La zafra es un esfuerzo temporal con una ventana fija (180 dias), un alcance definido (asegurar disponibilidad 99.95% de los sistemas criticos) y un presupuesto con fondo de contingencia; por eso se gestiona como proyecto. Dominios criticos: Gobernanza (comite diario a las 7:00 AM que aprueba cambios), Cronograma (hitos T-30, T-14, T-7, T-0 sincronizados con el inicio de zafra) y Riesgo (matriz con dueno y respuesta para SCADA, ransomware, energia y personal). Tambien son clave Alcance (congelamiento firmado) y Finanzas (contingencia y aprobacion de gastos). || [rúbrica: Justifica por que es un proyecto, Elige dominios pertinentes, Ejemplifica con el caso, Terminologia y redaccion]
:::

:::path Crisis en plena zafra
1 | Inicio | A las 06:00 el sistema de logistica se ralentiza y los proveedores no registran entregas. ¿Que haces primero? | Activar ITIL: restaurar el servicio (Incident Management)=2; Esperar a la reunion de las 7:00 sin hacer nada=3
2 | Correcto | Primero se restaura el servicio y se escala al comite. ¿Que sigue tras estabilizar? | Registrar el incidente y programar la causa raiz (Problem Management)=4; Cerrar el proyecto de zafra=5
3 | Riesgo alto | Esperar deja a los proveedores sin registrar entregas y agrava la perdida. Se debe actuar de inmediato (ITIL). | * | La operacion no espera: primero restaurar.
4 | Mejora | Registrar el incidente y analizar la causa raiz evita que se repita. El comite actualiza riesgos y presupuesto (PMBOK/COBIT). | * | Ciclo completo: ITIL opera, COBIT gobierna, PMBOK estructura.
5 | Error | Cerrar la zafra por un incidente es un error: el proyecto sigue y la operacion debe continuar. | * | Un incidente se gestiona, no se cierra el proyecto.
:::
