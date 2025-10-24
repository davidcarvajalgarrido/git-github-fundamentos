# 📝 Ejercicios de GitHub Actions

## Instrucciones Generales

1. Para cada ejercicio, crea una nueva rama
2. Haz los cambios necesarios
3. Crea un pull request
4. Observa cómo se ejecuta el workflow
5. Merge a main cuando todo esté en verde

---

## 🟢 Nivel Básico

### Ejercicio 1: Añadir Badge de Estado
**Objetivo**: Mostrar el estado del workflow en el README

**Pasos**:
1. Ve a la pestaña Actions de tu repositorio
2. Encuentra el badge del workflow
3. Cópialo y pégalo al inicio del README.md

**Resultado esperado**: Un badge que muestre "passing" o "failing"

---

### Ejercicio 2: Ejecutar en Múltiples Sistemas Operativos
**Objetivo**: Probar el código en diferentes sistemas operativos

**Modificación en `ci.yml`**:
```yaml
test:
  runs-on: ${{ matrix.os }}
  strategy:
    matrix:
      os: [ubuntu-latest, windows-latest, macos-latest]
      node-version: [18, 20]
```

**Pregunta**: ¿Cuántos jobs se ejecutarán en total?

---

### Ejercicio 3: Añadir Job de Ejecución
**Objetivo**: Ejecutar la aplicación como parte del workflow

**Añadir al workflow**:
```yaml
run-app:
  name: Run Application
  runs-on: ubuntu-latest
  needs: [lint, test]
  
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
    - run: npm ci
    - run: npm start
```

---

## 🟡 Nivel Intermedio

### Ejercicio 4: Workflow Manual
**Objetivo**: Crear un workflow que se pueda ejecutar manualmente

**Crear `.github/workflows/manual.yml`**:
```yaml
name: Manual Workflow

on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        type: choice
        options:
          - development
          - staging
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Print environment
        run: echo "Deploying to ${{ inputs.environment }}"
```

---

### Ejercicio 5: Conditional Steps
**Objetivo**: Ejecutar steps solo bajo ciertas condiciones

**Añadir al job de build**:
```yaml
- name: Create Release (only on main)
  if: github.ref == 'refs/heads/main'
  run: echo "Creating release..."

- name: Development Build
  if: github.ref != 'refs/heads/main'
  run: echo "Development build"
```

---

### Ejercicio 6: Secrets y Variables de Entorno
**Objetivo**: Trabajar con información sensible

**Pasos**:
1. Ve a Settings > Secrets and variables > Actions
2. Crea un nuevo secret llamado `API_KEY`
3. Úsalo en el workflow:

```yaml
- name: Use Secret
  env:
    API_KEY: ${{ secrets.API_KEY }}
  run: echo "Using API key (hidden)"
```

---

## 🔴 Nivel Avanzado

### Ejercicio 7: Code Coverage
**Objetivo**: Generar reporte de cobertura de código

**Modificar package.json**:
```json
"scripts": {
  "test:coverage": "node --test --experimental-test-coverage"
}
```

**Añadir al workflow**:
```yaml
- name: Run tests with coverage
  run: npm run test:coverage

- name: Upload coverage report
  uses: actions/upload-artifact@v4
  with:
    name: coverage-report
    path: coverage/
```

---

### Ejercicio 8: Caching Avanzado
**Objetivo**: Cachear múltiples directorios para acelerar builds

```yaml
- name: Cache dependencies and build
  uses: actions/cache@v4
  with:
    path: |
      node_modules
      dist
      ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

---

### Ejercicio 9: Workflow Reutilizable
**Objetivo**: Crear un workflow que pueda ser llamado por otros

**Crear `.github/workflows/reusable-test.yml`**:
```yaml
name: Reusable Test

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm ci
      - run: npm test
```

**Usarlo en otro workflow**:
```yaml
jobs:
  call-test:
    uses: ./.github/workflows/reusable-test.yml
    with:
      node-version: '20'
```

---

### Ejercicio 10: Release Automation
**Objetivo**: Crear releases automáticamente con tags

**Crear `.github/workflows/release.yml`**:
```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

**Probar**:
```bash
git tag v1.0.1
git push origin v1.0.1
```

---

## 🏆 Desafío Final

### Super Proyecto: Pipeline Completo

Crea un workflow completo que:
1. ✅ Ejecute lint, test y build en paralelo (donde sea posible)
2. ✅ Solo en main: genere documentación y la suba como artefacto
3. ✅ Solo en tags: cree un release en GitHub
4. ✅ Envíe notificaciones de estado (puedes usar Slack webhook o similar)
5. ✅ Incluya análisis de seguridad con `npm audit`
6. ✅ Tenga timeout configurado para evitar builds colgados
7. ✅ Use secrets y variables de entorno apropiadamente

---

## 📊 Checklist de Verificación

Para cada ejercicio, verifica:
- [ ] El workflow se ejecuta sin errores
- [ ] Los logs son claros y entendibles
- [ ] El tiempo de ejecución es razonable
- [ ] Los pasos condicionales funcionan correctamente
- [ ] Los artefactos se generan cuando corresponde

---

## 💡 Tips Finales

1. **Debugging**: Añade steps con `run: echo` para imprimir variables
2. **Matriz**: Usa `fail-fast: false` para ver todos los errores
3. **Tiempo**: Añade `timeout-minutes` a los jobs
4. **Seguridad**: Nunca hagas commit de secrets
5. **Documentación**: Comenta los workflows complejos

```yaml
# Ejemplo de timeout y fail-fast
jobs:
  test:
    timeout-minutes: 10
    strategy:
      fail-fast: false
      matrix:
        node-version: [18, 20, 22]
```

---

**¡Éxito con los ejercicios!** 🚀
