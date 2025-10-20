# Lección 6 — Soluciones

## Ejercicio 1: Soluciones

CI básico para Node:
```yaml
name: ci
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test -- --ci
```

Añadir linting:
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --ci
```

Etiquetado y publicación:
```bash
git tag -a v0.2.0 -m "Release 0.2.0"
git push origin v0.2.0
# Crea la release desde GitHub (UI).
```

Ejemplo de subida de artefactos (en un job de build):
```yaml
- name: Build
  run: npm run build
- name: Upload artifact
  uses: actions/upload-artifact@v4
  with:
    name: app-build
    path: dist/
```
Estado final esperado: workflow verde en PRs, lint activo y una release `v0.2.0` con artefactos adjuntos en GitHub.
