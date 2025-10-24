# GitHub Actions Demo 🚀

Proyecto de demostración para aprender y practicar GitHub Actions con Node.js.

## 📋 Descripción

Este es un proyecto simple de Node.js que incluye:
- ✅ Una calculadora básica con operaciones matemáticas
- ✅ Tests unitarios con el test runner nativo de Node.js
- ✅ Configuración de ESLint para linting
- ✅ Script de build
- ✅ Workflow de CI/CD configurado con GitHub Actions

## 🎯 Propósito

Este proyecto está diseñado para que estudiantes practiquen:
- Configurar GitHub Actions desde cero
- Implementar pipelines de CI/CD
- Ejecutar linters, tests y builds automáticamente
- Trabajar con matrices de versiones de Node.js
- Gestionar artefactos de build

## 🛠️ Instalación

```bash
npm install
```

## 📦 Scripts Disponibles

```bash
# Ejecutar la aplicación
npm start

# Ejecutar tests
npm test

# Ejecutar linter
npm run lint

# Corregir problemas de linting automáticamente
npm run lint:fix

# Ejecutar build
npm run build
```

## 🔄 GitHub Actions Workflow

El proyecto incluye un workflow de CI que se ejecuta en cada push y pull request:

### Jobs configurados:

1. **Lint** - Verifica la calidad del código con ESLint
2. **Test** - Ejecuta los tests en múltiples versiones de Node.js (18, 20, 22)
3. **Build** - Construye el proyecto y guarda los artefactos

### 📝 Ejercicios Propuestos

#### Nivel Básico
1. Modifica el workflow para que se ejecute también en la rama `develop`
2. Añade un badge de estado del workflow al README
3. Cambia la versión de Node.js en el job de build

#### Nivel Intermedio
4. Añade un nuevo job que ejecute la aplicación con `npm start`
5. Configura el workflow para que envíe notificaciones en caso de fallo
6. Añade cache de dependencias para acelerar el workflow
7. Crea un workflow separado para releases

#### Nivel Avanzado
8. Implementa un job de deployment condicional (solo en main)
9. Añade análisis de cobertura de código
10. Configura semantic-release para versionado automático
11. Implementa un workflow para crear releases automáticamente con tags

## 🧪 Tests

Los tests están escritos usando el test runner nativo de Node.js (disponible desde v18). No requiere dependencias externas.

```javascript
// Ejemplo de test
describe('sumar', () => {
  it('debe sumar dos números positivos', () => {
    assert.equal(sumar(2, 3), 5);
  });
});
```

## 🎨 Linting

El proyecto usa ESLint con configuración básica. Las reglas incluyen:
- Indentación de 2 espacios
- Comillas simples
- Punto y coma obligatorio
- Line breaks tipo Unix

## 📁 Estructura del Proyecto

```
github-actions-demo/
├── .github/
│   └── workflows/
│       └── ci.yml          # Workflow principal de CI
├── src/
│   ├── calculator.js       # Código de la calculadora
│   ├── calculator.test.js  # Tests unitarios
│   └── index.js           # Punto de entrada
├── build.js               # Script de build
├── package.json           # Configuración del proyecto
├── .eslintrc.json        # Configuración de ESLint
└── README.md             # Este archivo
```

## 🚀 Próximos Pasos

1. Haz fork de este repositorio
2. Clona tu fork localmente
3. Haz cambios en el código
4. Observa cómo se ejecuta el workflow en GitHub
5. Experimenta modificando el archivo `.github/workflows/ci.yml`

## 💡 Tips

- Revisa la pestaña "Actions" en GitHub para ver los workflows en ejecución
- Los workflows se ejecutan en runners de GitHub (máquinas virtuales)
- Puedes ver logs detallados de cada step
- Los artefactos generados se guardan por 7 días

## 📚 Recursos

- [Documentación de GitHub Actions](https://docs.github.com/es/actions)
- [Node.js Test Runner](https://nodejs.org/api/test.html)
- [ESLint Documentation](https://eslint.org/docs/latest/)

## 🤝 Contribuciones

Este es un proyecto educativo. Siéntete libre de:
- Reportar issues
- Proponer mejoras
- Hacer pull requests con nuevos ejercicios

---

**¡Feliz aprendizaje con GitHub Actions!** 🎓
