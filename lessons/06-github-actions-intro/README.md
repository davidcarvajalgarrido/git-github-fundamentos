# 06. Integración con automatización: GitHub Actions y versionado de testware

- [Introducción](#introducción)
- [Qué es GitHub Actions y cuándo usarlo](#qué-es-github-actions-y-cuándo-usarlo)
- [Tu primer workflow: CI mínima](#tu-primer-workflow-ci-mínima)
- [Versionado de scripts y utilidades de test](#versionado-de-scripts-y-utilidades-de-test)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
Primera toma de contacto con GitHub Actions para automatizar pruebas, linting y empaquetado, versionando scripts y utilidades de test.

## Qué es GitHub Actions y cuándo usarlo
GitHub Actions ejecuta flujos de trabajo (workflows) en respuesta a eventos como `push`, `pull_request` o publicación de una release. Cada workflow define jobs y pasos que corren en máquinas efímeras con un entorno preconfigurado. Para un equipo de pruebas, esto significa validar automáticamente cada PR, ejecutar suites de test y generar artefactos reproducibles.

## Tu primer workflow: CI mínima
Empezar es tan simple como crear un archivo YAML en `.github/workflows/`. Definiremos que se ejecute en cada `push` y `pull_request`, instale dependencias y lance tests. Este es el esqueleto típico; adáptalo a tu stack (Node, Python, Java, etc.).
```yaml
name: ci
on:
  push:
  pull_request:
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
Al abrir un PR, GitHub mostrará el estado de este workflow; es una barrera de calidad automática que mejora la confianza al fusionar.

## Versionado de scripts y utilidades de test
Mantener tus scripts de prueba en una carpeta versionada (p. ej., `test/` o `tools/ci/`) evita duplicidades y hace auditable la evolución de tu testware. Al asociar versiones mediante tags o releases, puedes reproducir entornos pasados y entender por qué fallaron o pasaron ciertas validaciones. Si el testware se comparte entre repos, considera empaquetarlo como módulo y referenciar una versión concreta en los pipelines.

## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.github.com" target="_blank">GitHub Docs – Actions</a>
- <a href="https://git-scm.com/docs/git-tag" target="_blank">Git – Tags y Releases</a>
- <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow" target="_blank">Atlassian – Integración continua con Git</a>
