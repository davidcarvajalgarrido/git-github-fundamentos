# Lección 6 — Ejercicios

## Ejercicio 1: Crea un workflow de CI básico

1. En el repo, crea `.github/workflows/ci.yml` con un job que ejecute tests.
2. Provoca la ejecución con un `push` o un PR.
3. Comprueba en la pestaña *Actions* que el job pasa.

## Ejercicio 2: Añade linting al pipeline

1. Agrega un paso de lint (p. ej., `npm run lint` o `flake8`).
2. Configura el workflow para fallar si el lint detecta errores.

## Ejercicio 3: Etiqueta una release y publica artefactos

1. Crea un tag `v0.2.0` y una release en GitHub.
2. Extiende el workflow para subir artefactos de build al apartado de la release.
