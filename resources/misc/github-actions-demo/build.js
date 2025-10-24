import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🔨 Iniciando build...');

// Crear directorio dist
try {
  mkdirSync('dist', { recursive: true });
  console.log('✓ Directorio dist creado');
} catch (error) {
  console.error('Error creando directorio:', error);
  process.exit(1);
}

// Crear archivo de información del build
const buildInfo = {
  version: process.env.npm_package_version || '1.0.0',
  buildDate: new Date().toISOString(),
  nodeVersion: process.version,
  status: 'success'
};

writeFileSync(
  join('dist', 'build-info.json'),
  JSON.stringify(buildInfo, null, 2)
);

console.log('✓ Build completado exitosamente');
console.log('📦 Build info:', buildInfo);
