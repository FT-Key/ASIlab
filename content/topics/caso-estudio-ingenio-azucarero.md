---
title: Caso de Estudio - Ingenio Azucarero
emoji: "🏭"
accent: "#7C61D4"
category: admin-estrategica
difficulty: intermedio
order: 1
description: Caso real de administracion de SI en un ingenio azucarero de Tucuman (Argentina) con referencia al Valle del Cauca (Colombia). El proceso fabril completo desde la solicitud de caña al productor hasta el azucar, el alcohol y la energia, con el nombre de cada etapa, los subproductos, el flujo de datos y la aplicacion de PMBOK 8, COBIT e ITIL.
tags: [caso-estudio, ingenio, zafra, Tucuman, Colombia, caña, proceso-fabril, subproductos, SCADA, MES, LIMS, PMBOK, COBIT, ITIL]
keyTakeaway: Un ingenio transforma una materia prima perecedera (la caña) en azucar, alcohol y energia en un periodo critico (la zafra). Cada etapa del proceso genera datos criticos; el Administrador de SI convierte esos datos en continuidad, calidad y valor de negocio usando PMBOK 8, COBIT e ITIL.
sources:
  - "Proceso de fabricacion de azucar|https://www.ipaat.gov.ar/nota/279/proceso-de-fabricacion-de-azucar|IPAAT Tucuman|Proceso industrial oficial"
  - "Zafra 2025 Tucuman - record de molienda|https://www.ipaat.gov.ar/nota/677/zafra-2025-tucuman-marco-un-record-al-moler-176-millones-de-toneladas-de-cana|IPAAT|Datos productivos oficiales"
  - "Estacion Experimental Agroindustrial Obispo Colombres|https://www.eeaoc.gob.ar/|EEAOC|Investigacion cañera de Tucuman"
  - "Sector azucarero del Valle del Cauca|https://www.asocana.org/|Asocana|Sector azucarero colombiano"
  - "Centro de Investigacion de la Caña de Azucar de Colombia|https://www.cenicana.org/|Cenicaña|Proceso agroindustrial de Colombia"
  - "PMBOK Guide - Eighth Edition|https://www.pmi.org/standards/pmbok|PMI|Estandar de gestion de proyectos"
  - "Caso de Estudio Ingenio Azucarero (U1, caso Ingenio La Dulzura)|https://uniagustiniana.edu.co|Universidad Agustiniana|Material de clase"
---

## Introduccion al Caso

:::callout info
Este caso analiza un **ingenio azucarero**. Se toma como referencia la industria de **Tucuman (Argentina)**, la principal region azucarera del pais (14 ingenios en actividad y ~17 millones de toneladas de cana molidas por zafra), con el caso del profesor: el **Ingenio La Dulzura**. Se compara con el **Valle del Cauca (Colombia)**, donde 13 ingenios producen azucar, bioetanol y energia.
:::

:::definition Ingenio Azucarero
Organizacion **agroindustrial** que transforma una materia prima perecedera (la cana de azucar) en multiples productos: azucar, alcohol/bioetanol, energia electrica y subproductos. Opera en un periodo critico e intensivo llamado **zafra** (cosecha + molienda), de aproximadamente 200 dias, en el que la planta trabaja 24/7.
:::

El foco de este tema es doble: (1) entender **el proceso fabril completo**, etapa por etapa, desde que se le solicita la cana al productor hasta el producto final; y (2) ver **como el Administrador de SI** convierte los datos de ese proceso en continuidad, calidad y valor de negocio.

:::definition Sistema de Informacion Industrial
Conjunto integrado de hardware, software, datos, personas y procesos que permiten recopilar, almacenar, procesar y distribuir la informacion necesaria para operar y gestionar una planta industrial.
:::

## La cana de azucar y el ciclo productivo

La cana (Saccharum officinarum) es un cultivo tropical y subtropical que crece entre **12 y 14 meses** antes de poder cosecharse. Su tallo almacena el jugo rico en **sacarosa**, la base de todo el proceso.

El ciclo agroindustrial tiene dos grandes mundos:

| Mundo | Que ocurre | Quien |
|-------|------------|-------|
| **Agricola (campo)** | Siembra, riego, control de plagas, maduracion y cosecha | Productor cañero (o fincas propias del ingenio) |
| **Industrial (fabrica)** | Recepcion, molienda, clarificacion, evaporacion, cristalizacion, secado y envasado | El ingenio |

:::callout warning
La cana empieza a perder sacarosa desde que se corta. Por eso hay una regla de oro: **no deben pasar mas de 24 a 48 horas** entre el corte y la molienda. Esto obliga a una logistica perfecta y a sistemas de informacion confiables.
:::

## El proceso fabril completo, etapa por etapa

:::flow De la cana al producto final
- Solicitud y planificacion de cana
- Recepcion, pesaje y laboratorio
- Preparacion y molienda
- Clarificacion
- Evaporacion
- Cristalizacion
- Centrifugacion
- Refinado
- Secado y clasificacion
- Envasado, almacenamiento y despacho
:::

### Etapa 0 - Solicitud y planificacion de la materia prima

Antes de moler, el ingenio **solicita la cana al productor** y organiza la zafra. No es una compra improvisada: se firma un **Plan de Zafra** con el volumen, la calidad esperada y el calendario de entrega.

- **Contratos con cañeros**: se pacta el cupo (toneladas) y la forma de pago, que depende del **rendimiento** (kg de azucar por tonelada de cana).
- **Programacion de cosecha (turnos de corte)**: se asigna que lote se corta cada dia para que la fabrica reciba cana **fresca y madura** en forma continua.
- **Logistica de transporte**: se coordinan cosechadoras, alzadoras y camiones para minimizar el tiempo entre corte y molienda.

:::callout info
Aqui nace el primer dato estrategico: **cuando y cuanta cana llega**. Si el sistema que programa los turnos falla, la fabrica puede quedarse sin materia prima (parada) o recibir cana vieja (perdida de rendimiento).
:::

### Etapa 1 - Recepcion, pesaje y laboratorio (Canchon y Bascula)

El camion llega al **canchon** (patio de cana) y pasa por la **bascula**: se pesa la carga y se descuenta la tara del vehiculo.

- **Pesaje**: determina las toneladas de cana entregadas.
- **Muestreo**: se toma una muestra representativa de la carga.
- **Laboratorio de sacarosa**: se mide la calidad. Los indicadores clave son:
  - **Brix**: porcentaje de solidos solubles.
  - **Pol**: porcentaje de sacarosa (azucar).
  - **Pureza**: relacion entre ambos → Pureza = (Pol / Brix) x 100.
- **Liquidacion al cañero**: con el peso y la calidad se calcula el pago.

:::callout danger
El dato de bascula y laboratorio define **cuanto se le paga al cañero**. Un error aqui no es solo tecnico: es un problema **legal y financiero**. Por eso este dato debe llegar integro al sistema de contabilidad y de liquidacion.
:::

### Etapa 2 - Preparacion y molienda (Trapiche)

La cana se **prepara** para extraer el jugo:

- **Picado y desfibrado**: se rompen las celdas del tallo con troceadoras y desfibradoras.
- **Molienda (tandem de molinos)**: la cana pasa por una serie de molinos que la comprimen. Se agrega **agua caliente** (proceso de **imbibicion** o maceracion) para arrastrar mas sacarosa.
- **Extraccion**: se obtiene el **jugo diluido** (jugo mezclado) y el residuo solido: el **bagazo**.

:::callout info
El **bagazo** no es basura: es el combustible de las calderas del propio ingenio (y a veces se vende o se usa para papel). Con el se genera el vapor y la energia que mueven toda la planta.
:::

### Etapa 3 - Clarificacion y purificacion

El jugo extraido es **acido y turbio**. Se limpia:

1. **Encalado**: se agrega **lechada de cal** para subir el pH y precipitar impurezas.
2. **Calentamiento**: se eleva la temperatura para acelerar la reaccion.
3. **Sedimentacion**: en grandes clarificadores, las impurezas caen al fondo y forman la **cachaza**; el **jugo claro** queda arriba.
4. **Sulfitacion** (para azucar blanco): se usa azufre como decolorante y se neutraliza con cal.

- **Entrada**: jugo diluido. **Salida**: jugo claro + cachaza.

### Etapa 4 - Evaporacion

El jugo claro tiene **demasiada agua**. Se concentra en **evaporadores de multiple efecto** que trabajan **al vacio** (para hervir a menor temperatura y no quemar el azucar).

- Se extrae alrededor del **75% del agua**.
- El resultado es un jarabe espeso llamado **meladura**.

### Etapa 5 - Cristalizacion (Cocimiento)

La meladura se cocina en **tachos al vacio**. Se **siembran** cristales diminutos de azucar para que crezcan.

- Se forman **masas cocidas** (A, B y C) con distintas proporciones de cristales y miel.
- Se usa el sistema de **tres cocimientos** para agotar la mayor cantidad de sacarosa posible.
- **Entrada**: meladura. **Salida**: masa cocida (cristales + miel).

### Etapa 6 - Centrifugacion

La masa cocida entra en **centrifugas de alta velocidad**. La fuerza centrifuga empuja la miel a traves de una malla y **retiene los cristales de azucar**.

- **Azucar humedo**: cristales retenidos (se lavan y siguen a secado o refinado).
- **Miel**: se recircula a los tachos. Tras el ultimo agotamiento queda la **miel final**, que comercialmente se llama **melaza**.

### Etapa 7 - Refinado

Solo para el **azucar refinado**: el azucar crudo se **disuelve** y se depura con acido y sacarato de calcio para eliminar materias inorganicas, obteniendo un licor de alta pureza que se vuelve a cristalizar.

### Etapa 8 - Secado y clasificacion

El azucar humedo se estabiliza:

- **Secado**: se inyecta **aire caliente** para retirar la humedad residual.
- **Clasificacion (tamizado)**: se separan los cristales por tamano.

### Etapa 9 - Envasado, almacenamiento y despacho

- **Envasado**: sacos de 1 kg, 5 kg, 25 kg, 50 kg o **big bags** de 1.000 kg.
- **Almacenamiento**: por **lotes de produccion** en silos o depositos.
- **Despacho**: distribucion al mercado interno o exportacion, con trazabilidad por lote.

## Subproductos y economia circular

El ingenio es un ejemplo de **economia circular**: casi nada se desperdicia.

| Subproducto | De donde sale | Usos |
|-------------|---------------|------|
| **Bagazo** | Molienda (residuo fibroso) | Combustible de calderas, **cogeneracion de energia electrica** (venta al sistema), papel |
| **Melaza (miel final)** | Ultima centrifugacion | **Bioetanol/alcohol**, alimento para ganado, ron |
| **Cachaza** | Clarificacion (lodos) | **Abono organico** y compost para los campos de cana |
| **Vinaza** | Destileria (residuo del alcohol) | **Fertirriego** de los canaverales |
| **CO2** | Fermentacion para alcohol | Uso industrial (bebidas, hielo seco) |

:::callout success
El mismo ingenio que produce azucar tambien **autogenera energia** con el bagazo (en Tucuman y el Valle del Cauca varios ingenios venden excedentes a la red) y **bioetanol** con la melaza. Eso es valor de negocio adicional que nace de un subproducto.
:::

## El flujo de datos: lo que le interesa al Administrador de SI

Para que el ingenio funcione, la informacion debe fluir **sin errores** por todas las etapas. Este es el mapa que todo Administrador de SI debe conocer:

| Etapa | Sistema / tecnologia | Dato critico | Si falla... |
|-------|----------------------|--------------|-------------|
| Canchon y bascula | Bascula electronica + ERP | Identificacion del camion, lote y peso | La fabrica no sabe que entro: se detiene |
| Laboratorio de sacarosa | LIMS | Brix, Pol, Pureza | Pago al cañero erroneo (problema legal) |
| Trapiche (molienda) | Sensores IoT + SCADA | Presion y flujo del jugo | Molienda ineficiente o parada |
| Fabricacion (clarificacion, evaporacion, coccion) | SCADA + MES | Temperatura, pH, vacio | Perdida de azucar y calidad |
| Centrifugacion y secado | SCADA + MES | Humedad y pureza del cristal | Azucar fuera de norma |
| Destileria | SCADA + MES | Grados de alcohol | Lote de bioetanol perdido |
| Fraccionado y deposito | WMS + ERP | Lote, stock y despacho | Error de inventario y entregas |
| Gerencia | BI / Dashboards | KPIs en tiempo real | Decisiones a ciegas |

:::callout idea Control de procesos: Brix, Pol y Pureza
El laboratorio es el **oraculo** del proceso: si conoce la calidad de la cana que entra (Brix, Pol, Pureza), puede **anticipar** la demanda de cal, de vapor y de tiempo de coccion en las etapas siguientes. Con MES + ERP integrados, el ingenio deja de ser reactivo ("se tapo el filtro, veamos que paso") y pasa a ser **proactivo** (ajustar el proceso antes de que falle).
:::

:::callout info Industria 4.0 en el ingenio
Con suficientes datos historicos, la **IA y la analitica predictiva** permiten anticipar cuellos de botella, dosificar quimicos exactos, prever excedentes de bagazo y optimizar la velocidad de molienda. Es el mismo principio de PMBOK 8: decidir con datos, no con intuicion.
:::

## Sistemas clave del ingenio

| Sistema | Funcion | Area |
|---------|---------|------|
| SCADA | Control y monitoreo de procesos industriales en tiempo real | Produccion |
| MES | Gestion de la fabricacion en tiempo real (puente planta-ERP) | Produccion |
| LIMS | Control de calidad de laboratorio (Brix, Pol, Pureza) | Calidad |
| ERP | Gestion empresarial integrada (finanzas, RRHH, compras) | Administracion |
| WMS | Gestion de almacen y logistica | Logistica |
| BI | Business Intelligence y tableros de decision | Gerencia |

:::callout warning
Un fallo en el **SCADA** puede detener toda la produccion. Un fallo en el **LIMS** afecta el pago al cañero. Un fallo en el **ERP** detiene el negocio. La disponibilidad es critica, y el ambiente es hostil: calor, humedad, polvillo de bagazo y vibraciones.
:::

## La zafra: el desafio critico

| Elemento | Descripcion |
|----------|-------------|
| Periodo critico | Aproximadamente 200 dias continuos (Tucuman: inicia entre abril y junio, termina entre septiembre y diciembre) |
| Operacion | 24/7, 3 turnos, sin dias de descanso |
| Riesgo maximo | Una parada no planificada detiene la molienda; la cana cortada pierde sacarosa y se pierde produccion y dinero |
| Sistemas criticos | SCADA (molinos), LIMS (laboratorio), logistica de cana, ERP de pagos, mantenimiento |

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

## Caso del profesor: Ingenio La Dulzura (Tucuman)

El **Ingenio La Dulzura** es una empresa tradicional de Tucuman con 80 anos de historia. Produce **azucar, bioetanol y energia** a partir del bagazo. Su problema no es la tecnologia: es que el area de TI es vista solo como un "gasto necesario" que arregla impresoras.

- **Recursos**: centro de computos antiguo; el **pesaje** de camiones se registra en un software local que **no se comunica con el laboratorio**.
- **Estructura**: el Jefe de Sistemas reporta al **Gerente de Mantenimiento Mecanico** (no tiene voz estrategica).
- **Incidente**: una caida del servidor central detuvo la **recepcion de cana por 6 horas**, generando una fila de camiones de 3 km y perdidas millonarias por la inversion del azucar en el tallo.

| Sintoma | Causa raiz (SI) | Accion de valor |
|---------|-----------------|-----------------|
| TI no tiene voz estrategica | El area reporta a Mantenimiento, no a la Gerencia General | Reubicar TI como **socio estrategico** (reporte a la Gerencia General) |
| Pesaje no integrado con laboratorio | Sistemas aislados (silos de informacion) | Integrar bascula, LIMS y ERP en un solo flujo de datos |
| 6 horas de recepcion detenida | Falta de continuidad y de servidor redundante | Plan de continuidad, redundancia y monitoreo (ITIL + PMBOK Riesgo) |

:::callout success
La mision del area de TI deja de ser "arreglar PCs": pasa a ser "**garantizar la continuidad operativa y la integridad de los datos de la zafra**". Eso es valor de negocio: ingresos (mas produccion), costos (menos horas hombre) y riesgos (cero paradas).
:::

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
4. **Sostenibilidad** con generacion electrica a partir de bagazo
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
1. ¿Que es un ingenio azucarero? || Una tienda de azucar || Una organizacion agroindustrial que transforma la cana en azucar, alcohol y energia || Un banco || Una empresa de transporte || 1 || Transforma la cana en multiples productos durante la zafra.
2. ¿Cuanto dura aproximadamente la zafra? || 30 dias || 90 dias || 200 dias || 365 dias || 2 || Aproximadamente 200 dias continuos de cosecha y molienda.
3. ¿Cuantas horas como maximo deberian pasar entre el corte y la molienda? || 24 a 48 horas || 7 dias || 15 dias || 1 mes || 0 || La cana pierde sacarosa rapido: no mas de 24 a 48 horas.
4. ¿Que se obtiene en la etapa de molienda ademas del jugo? || Melaza || Bagazo || Azucar refinada || Alcohol || 1 || Se obtiene jugo y el residuo fibroso llamado bagazo.
5. ¿Que sistema mide Brix, Pol y Pureza? || SCADA || LIMS (laboratorio) || WMS || BI || 1 || El laboratorio (LIMS) mide la calidad de la cana.
6. ¿Que producto se obtiene de la melaza (miel final)? || Papel || Bioetanol/alcohol || Vidrio || Cemento || 1 || La melaza se usa para producir alcohol/bioetanol y alimento animal.
7. ¿Que sistema controla en tiempo real los procesos industriales? || ERP || SCADA || WMS || CRM || 1 || El SCADA controla y monitorea el proceso industrial.
8. ¿Que documento define el volumen y calendario de entrega de cana? || El Plan de Zafra || El SLA || El WMS || El organigrama || 0 || El Plan de Zafra organiza la solicitud y entrega de la materia prima.
:::

### Nivel 2 - Comprension

:::quiz Ingenio - Nivel 2 (comprension)
1. ¿Por que el pesaje y el laboratorio son datos criticos? || Porque definen cuanto se le paga al cañero || Porque son baratos || Porque no importan || Porque los pide el proveedor || 0 || El peso y la calidad determinan el pago: un error es legal y financiero.
2. ¿Que pasa con el bagazo en la economia circular del ingenio? || Se tira || Se usa como combustible y para cogenerar energia || Se vende como azucar || Se convierte en melaza || 1 || El bagazo alimenta las calderas y genera energia.
3. ¿Para que sirve la imbibicion (agua caliente) en la molienda? || Para enfriar el jugo || Para arrastrar mas sacarosa del bagazo || Para pintar el azucar || Para secar la cana || 1 || El agua caliente extrae mas sacarosa.
4. ¿Que se obtiene al final de la evaporacion? || Jugo claro || Meladura (jarabe espeso) || Masa cocida || Bagazo || 1 || La evaporacion concentra el jugo hasta obtener meladura.
5. ¿Que relacion mide la Pureza de la cana? || Peso/volumen || Pol/Brix x 100 || Costo/beneficio || Presion/temperatura || 1 || Pureza = (Pol / Brix) x 100.
6. ¿Que hace la centrifugacion? || Disuelve el azucar || Separa los cristales de azucar de la miel || Muele la cana || Enfria el bagazo || 1 || La fuerza centrifuga separa cristales y miel.
7. ¿Por que el MES es clave para el Administrador de SI? || Porque es un juego || Porque conecta el piso de planta (SCADA) con el ERP y permite ajustar el proceso con datos || Porque reemplaza al laboratorio || Porque compra insumos || 1 || El MES integra planta y administracion para decidir en tiempo real.
8. ¿Que muestra que un ingenio sea circular? || Que no recicla nada || Que reutiliza subproductos: bagazo, melaza, cachaza y vinaza || Que solo vende azucar || Que importa toda la materia prima || 1 || Aprovecha casi todos sus residuos como insumos o energia.
:::

### Nivel 3 - Escenarios

:::quiz Ingenio - Nivel 3 (escenarios)
1. En plena zafra, el SCADA falla y detiene un molino. ¿Que hace primero ITIL? || Buscar la causa raiz || Restaurar el servicio lo antes posible (Incident Management) || Actualizar el software || Cerrar el proyecto || 1 || Primero restaurar (incidente); luego la causa raiz (problema).
2. El comite aprueba un cambio de software en plena zafra. ¿Que proceso COBIT lo alinea? || APO01 portafolio de cambios || DSS02 solicitudes || MEA03 conformidad || BAI11 proyectos || 0 || APO01 evalua si el cambio esta alineado con la zafra.
3. La bascula registra mal el peso de un camion. ¿Que consecuencia tiene? || Nada || Un error en el pago al cañero y en el inventario de cana || Mejora el rendimiento || Aumenta la energia || 1 || El peso define el pago y el control de materia prima.
4. El laboratorio detecta baja Pureza en la cana que entra. ¿Que se anticipa? || Que la cristalizacion sera mas lenta y habra mas melaza || Que el azucar sera mas blanca || Que no habra bagazo || Que baja la energia || 0 || Menor pureza = cristalizacion lenta y mas melaza.
5. Un proyecto de TI de la zafra entrega todo a tiempo pero la operacion no mejora. ¿Que principio PMBOK se vulnero? || Foco en el valor || Vision holistica || Sostenibilidad || Entorno empoderado || 0 || Entregar a tiempo es output; el valor (outcome) no se logro.
6. En el Ingenio La Dulzura, el pesaje no se comunica con el laboratorio. ¿Que problema de SI es? || Silos de informacion / falta de integracion || Exceso de servidores || Falta de cana || Problema legal || 0 || Sistemas aislados: el dato no fluye entre areas.
7. Al terminar la zafra, se entregan los sistemas a operacion normal. ¿Que proceso PMBOK cierra? || Iniciar Proyecto || Cerrar Proyecto o Fase || Identificar Riesgos || Adquirir Recursos || 1 || Cerrar Proyecto o Fase finaliza formalmente.
8. Una parada de 5 horas en la zafra. ¿Que dominio PMBOK debe actualizarse con el costo? || Finanzas y Cronograma || Solo Recursos || Solo Interesados || No se actualiza || 0 || El costo y el tiempo afectan Finanzas y Cronograma.
:::

### Practica guiada

:::sort Ordena las etapas del proceso fabril del azucar
- Solicitud y planificacion de cana
- Recepcion, pesaje y laboratorio
- Preparacion y molienda
- Clarificacion
- Evaporacion
- Cristalizacion
- Centrifugacion
- Secado y clasificacion
- Envasado y despacho
:::

:::sort Ordena los hitos previos a la zafra
- T-30: Pruebas de redundancia de servidores SCADA
- T-14: Simulacro de caida del sistema de logistica
- T-7: Inventario fisico de repuestos criticos
- T-0: Pase a modo zafra (sin cambios no esenciales)
:::

:::match Subproductos del ingenio y su uso
- Bagazo | Combustible de calderas y cogeneracion de energia
- Melaza | Bioetanol/alcohol y alimento animal
- Cachaza | Abono organico para los campos de cana
- Vinaza | Fertirriego de los canaverales
- CO2 | Uso industrial (bebidas, hielo seco)
:::

:::match Sistemas del ingenio y su funcion
- SCADA | Control y monitoreo de procesos industriales
- MES | Puente entre el piso de planta y el ERP
- LIMS | Laboratorio: mide Brix, Pol y Pureza
- ERP | Gestion empresarial integrada
- WMS | Gestion de almacen y despacho
:::

:::truefalse Ingenio Azucarero
1. La cana puede esperar semanas entre el corte y la molienda. || Falso || Pierde sacarosa: no deben pasar mas de 24 a 48 horas.
2. El bagazo se usa como combustible para las calderas. || Verdadero || Genera vapor y energia (cogeneracion).
3. La melaza es la miel final que ya no cristaliza. || Verdadero || Se usa para alcohol/bioetanol y alimento animal.
4. El SCADA mide Brix, Pol y Pureza. || Falso || Eso lo hace el laboratorio (LIMS).
5. La pureza se calcula como Pol/Brix x 100. || Verdadero || Relaciona sacarosa sobre solidos solubles.
6. PMBOK, COBIT e ITIL son excluyentes en la zafra. || Falso || Se complementan: proyecto, gobierno y operacion.
:::

:::essay Caso Ingenio Azucarero
1. Describa el proceso fabril completo del azucar, desde la solicitud de la cana al productor hasta el producto final, nombrando cada etapa y sus salidas. || Pista: Plan de Zafra, recepcion/pesaje, molienda, clarificacion, evaporacion, cristalizacion, centrifugacion, secado y envasado. || Respuesta modelo: Se planifica la solicitud de cana (Plan de Zafra) con el cañero. En la recepcion se pesa (bascula) y se analiza la calidad (LIMS: Brix, Pol, Pureza), lo que define el pago. En la molienda se prepara y desfibra la cana y se extrae el jugo con imbibicion, generando bagazo. En la clarificacion se encala y sedimenta, obteniendo jugo claro y cachaza. En la evaporacion se concentra el jugo hasta la meladura. En la cristalizacion (tachos al vacio) se forman los cristales (masa cocida). En la centrifugacion se separan los cristales de la miel (melaza). El azucar pasa por refinado (si es refinado), secado y clasificacion, y finalmente envasado, almacenamiento y despacho. || [rúbrica: Nombra todas las etapas en orden, Describe la salida de cada una, Menciona subproductos, Terminologia y redaccion]
2. Explique como el Administrador de SI aporta valor de negocio en un ingenio y que riesgos debe controlar. Use el caso Ingenio La Dulzura. || Pista: Valor = ingresos, costos y riesgos; usa el flujo de datos y el caso. || Respuesta modelo: El Administrador de SI aporta valor de negocio en tres frentes: ingresos (garantizar que el pesaje y el laboratorio no paren, para que la cana entre fresca y se produzca mas), costos (automatizar el reporte de laboratorio y eliminar carga manual de planillas) y riesgos (plan de continuidad para que una caida no detenga la recepcion). En el Ingenio La Dulzura, la caida del servidor detuvo la recepcion 6 horas y genero perdidas millonarias; ademas el pesaje no se comunicaba con el laboratorio (silos de informacion) y TI reportaba a Mantenimiento en lugar de a la Gerencia General. Las acciones son: integrar bascula-LIMS-ERP, dar continuidad y redundancia, y reubicar TI como socio estrategico. || [rúbrica: Explica los 3 frentes de valor, Aplica el caso La Dulzura, Menciona integracion de datos, Menciona continuidad y rol estrategico]
3. Explique como se integran PMBOK 8, COBIT e ITIL para asegurar la operacion continua durante la zafra. Use un ejemplo del dia 45 (06:00 a 08:15). || Pista: PMBOK estructura el proyecto; COBIT gobierna y alinea riesgos; ITIL opera y responde a incidentes. || Respuesta modelo: PMBOK 8 estructura el proyecto con sus 7 dominios y procesos. COBIT da el gobierno y la alineacion estrategica (EDM03 evalua riesgos, APO01 gestiona el portafolio de cambios). ITIL da la operacion y respuesta a incidentes (Incident, Change y Problem Management). En el dia 45: a las 06:00 ITIL detecta la lentitud del sistema de logistica (incidente); a las 06:30 el lider escala al comite (PMBOK); a las 07:00 el comite evalua riesgo y aprueba el cambio (PMBOK y COBIT); a las 07:30 se ejecuta el cambio (ITIL); a las 08:00 se restaura y se programa la causa raiz (ITIL); a las 08:15 se actualizan cronograma y presupuesto (PMBOK). Ninguno basta solo. || [rúbrica: Explica el rol de cada marco, Aplica el ejemplo del dia 45, Muestra la complementariedad, Terminologia y redaccion]
:::

:::path Crisis en plena zafra
1 | Inicio | A las 06:00 el sistema de logistica se ralentiza y los proveedores no registran entregas. ¿Que haces primero? | Activar ITIL: restaurar el servicio (Incident Management)=2; Esperar a la reunion de las 7:00 sin hacer nada=3
2 | Correcto | Primero se restaura el servicio y se escala al comite. ¿Que sigue tras estabilizar? | Registrar el incidente y programar la causa raiz (Problem Management)=4; Cerrar el proyecto de zafra=5
3 | Riesgo alto | Esperar deja a los proveedores sin registrar entregas y agrava la perdida. Se debe actuar de inmediato (ITIL). | * | La operacion no espera: primero restaurar.
4 | Mejora | Registrar el incidente y analizar la causa raiz evita que se repita. El comite actualiza riesgos y presupuesto (PMBOK/COBIT). | * | Ciclo completo: ITIL opera, COBIT gobierna, PMBOK estructura.
5 | Error | Cerrar la zafra por un incidente es un error: el proyecto sigue y la operacion debe continuar. | * | Un incidente se gestiona, no se cierra el proyecto.
:::

:::arch gobierno-ti
