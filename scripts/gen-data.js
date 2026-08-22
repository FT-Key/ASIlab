import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CSV_DIR = path.resolve(__dirname, '../data/csv')

fs.mkdirSync(CSV_DIR, { recursive: true })

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pick(arr) {
  return arr[randInt(0, arr.length - 1)]
}

function csvRow(cells) {
  return cells.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')
}

// 1. inventario-ti.csv
const sistemas = [
  'SAP ERP', 'Oracle Financials', 'Microsoft 365', 'Servidor Exchange',
  'Firewall FortiGate', 'NAS Synology', 'CRM Salesforce', 'Jira',
  'GitLab CE', 'PostgreSQL Produccion', 'MySQL Reporting', 'Apache Tomcat',
  'Switch Cisco Core', 'Router Mikrotik', 'APs Ubiquiti', 'UPS Eaton',
  'PCs Dell Optiplex', 'Notebooks Lenovo', 'Impresoras HP', 'Scanner Canon',
]
const estados = ['Activo', 'En mantenimiento', 'Obsoleto', 'En implementacion']
const criticos = ['Critico', 'Alto', 'Medio', 'Bajo']
const areas = ['TI', 'Finanzas', 'RRHH', 'Produccion', 'Ventas', 'Logistica', 'Legal', 'Gerencia']
const headers_inv = ['ID', 'Sistema', 'Area', 'Estado', 'Criticidad', 'Version', 'Fecha_Inicio', 'Responsable', 'Costo_Anual']
const rows_inv = sistemas.map((s, i) => csvRow([
  `TI-${String(i + 1).padStart(3, '0')}`,
  s,
  pick(areas),
  pick(estados),
  pick(criticos),
  `v${randInt(1, 12)}.${randInt(0, 9)}`,
  `${randInt(2018, 2025)}-${String(randInt(1, 12)).padStart(2, '0')}-${String(randInt(1, 28)).padStart(2, '0')}`,
  pick(['Juan Perez', 'Maria Garcia', 'Carlos Lopez', 'Ana Martinez', 'Pedro Rodriguez']),
  `$${randInt(500, 50000)}`,
]))
fs.writeFileSync(path.join(CSV_DIR, 'inventario-ti.csv'), [headers_inv.join(','), ...rows_inv].join('\n'))

// 2. incidentes-servicio.csv
const categorias_inc = ['Hardware', 'Software', 'Red', 'Seguridad', 'Acceso', 'Correo', 'Base de datos']
const severidades = ['S1-Critico', 'S2-Alto', 'S3-Medio', 'S4-Bajo']
const estados_inc = ['Abierto', 'En progreso', 'Resuelto', 'Cerrado']
const headers_inc = ['ID', 'Fecha', 'Categoria', 'Severidad', 'Estado', 'Titulo', 'Tiempo_Respuesta_h', 'Tiempo_Resolucion_h', 'Satisfaccion']
const rows_inc = Array.from({ length: 50 }, (_, i) => csvRow([
  `INC-${String(i + 1).padStart(4, '0')}`,
  `${randInt(2025, 2026)}-${String(randInt(1, 12)).padStart(2, '0')}-${String(randInt(1, 28)).padStart(2, '0')}`,
  pick(categorias_inc),
  pick(severidades),
  pick(estados_inc),
  pick(['No enciende PC', 'Error en SAP', 'Lentitud de red', 'Bloqueo de cuenta', 'Falla de impresora', 'Caida de servidor', 'Virus detectado', 'Correo no llega']),
  randInt(0, 48),
  randInt(0, 168),
  randInt(1, 5),
]))
fs.writeFileSync(path.join(CSV_DIR, 'incidentes-servicio.csv'), [headers_inc.join(','), ...rows_inc].join('\n'))

// 3. proyecto-pmbok.csv
const proyectos = [
  'Migracion a Cloud', 'Implementacion ERP', 'Renovacion Infraestructura',
  'Desarrollo App Movil', 'Auditoria de Seguridad', 'Capacitacion ITIL',
  'Digitalizacion de Procesos', 'Backup y DR', 'Upgrade Base de Datos',
  'Automatizacion RPA',
]
const fases_pmb = ['Inicio', 'Planificacion', 'Ejecucion', 'Monitoreo', 'Cierre']
const headers_pmb = ['Proyecto', 'Fase', 'Presupuesto', 'Avance_%', 'Riesgo', 'Fecha_Inicio', 'Fecha_Fin_Estimada', 'Gerente']
const rows_pmb = proyectos.map((p) => csvRow([
  p,
  pick(fases_pmb),
  `$${randInt(10000, 500000)}`,
  randInt(0, 100),
  pick(['Bajo', 'Medio', 'Alto', 'Critico']),
  `${randInt(2025, 2026)}-${String(randInt(1, 12)).padStart(2, '0')}-${String(randInt(1, 28)).padStart(2, '0')}`,
  `${randInt(2026, 2027)}-${String(randInt(1, 12)).padStart(2, '0')}-${String(randInt(1, 28)).padStart(2, '0')}`,
  pick(['Juan Perez', 'Maria Garcia', 'Carlos Lopez']),
]))
fs.writeFileSync(path.join(CSV_DIR, 'proyecto-pmbok.csv'), [headers_pmb.join(','), ...rows_pmb].join('\n'))

// 4. auditoria-cobit.csv
const dominios_cobit = ['EDM', 'APO', 'BAI', 'DSS', 'MEA']
const objetivos = [
  'EDM01', 'EDM02', 'EDM03', 'EDM04', 'EDM05',
  'APO01', 'APO02', 'APO07', 'APO12', 'APO13',
  'BAI01', 'BAI02', 'BAI03', 'BAI10', 'BAI11',
  'DSS01', 'DSS02', 'DSS04', 'DSS05', 'DSS06',
  'MEA01', 'MEA02', 'MEA03', 'MEA04',
]
const estados_aud = ['Cumple', 'Cumple Parcial', 'No Cumple', 'No Aplica']
const headers_aud = ['Objetivo', 'Dominio', 'Descripcion', 'Estado', 'Nivel_Madurez', 'Hallazgos', 'Recomendaciones']
const rows_aud = objetivos.map((o) => csvRow([
  o,
  o.substring(0, 3),
  pick(['Gestion de gobierno TI', 'Estrategia de TI', 'Gestion de riesgos', 'Gestion de proyectos', 'Gestion de servicios', 'Seguridad de la informacion', 'Gestion de calidad', 'Gestion de cambios']),
  pick(estados_aud),
  randInt(1, 5),
  pick(['Sin hallazgos criticos', 'Proceso informal detectado', 'Falta documentacion', 'Control incompleto', 'Proceso optimizado']),
  pick(['Estandarizar proceso', 'Capacitar personal', 'Implementar control', 'Documentar procedimiento', 'Mantener nivel actual']),
]))
fs.writeFileSync(path.join(CSV_DIR, 'auditoria-cobit.csv'), [headers_aud.join(','), ...rows_aud].join('\n'))

// 5. evaluacion-personal.csv
const roles_rh = [
  'Analista de Sistemas', 'Desarrollador', 'DBA', 'Administrador de Redes',
  'Project Manager', 'Soporte Tecnico', 'Analista Funcional', 'Arquitecto de Software',
]
const headers_rh = ['ID', 'Nombre', 'Rol', 'Departamento', 'Evaluacion', 'Capacitacion_Horas', 'Certificaciones', 'Antiguedad_Anios']
const rows_rh = Array.from({ length: 20 }, (_, i) => csvRow([
  `EMP-${String(i + 1).padStart(3, '0')}`,
  pick(['Juan Perez', 'Maria Garcia', 'Carlos Lopez', 'Ana Martinez', 'Pedro Rodriguez', 'Laura Sanchez', 'Diego Hernandez', 'Sofia Torres']),
  pick(roles_rh),
  pick(['TI', 'Desarrollo', 'Infraestructura', 'Datos']),
  pick(['Excelente', 'Bueno', 'Regular', 'En mejora']),
  randInt(10, 200),
  pick(['Sin certificaciones', 'ITIL Foundation', 'PMP', 'AWS Solutions Architect', 'COBIT 2019', 'Scrum Master']),
  randInt(1, 15),
]))
fs.writeFileSync(path.join(CSV_DIR, 'evaluacion-personal.csv'), [headers_rh.join(','), ...rows_rh].join('\n'))

console.log(`📊 CSVs generados en ${CSV_DIR}:`)
console.log('  - inventario-ti.csv (20 registros)')
console.log('  - incidentes-servicio.csv (50 registros)')
console.log('  - proyecto-pmbok.csv (10 registros)')
console.log('  - auditoria-cobit.csv (24 registros)')
console.log('  - evaluacion-personal.csv (20 registros)')
