# Lección 5 — Ejercicios

## Ejercicio 1: Aplica GitHub Flow en pequeño

1. Trabaja solo con `main` y ramas cortas `feat/*` y `fix/*`.
2. Abre PRs pequeños (≤ 200 líneas cambiadas) y fusiona a diario.
3. Elimina la rama tras fusionar para mantener el repo limpio.

## Ejercicio 2: Simula un ciclo Git Flow

1. Crea `develop` desde `main` y una rama `feature/login` desde `develop`.
2. Fusiona `feature/login` en `develop`; luego crea `release/1.0.0`.
3. Desde `release/1.0.0`, corrige un texto y etiqueta `v1.0.0`; fusiona en `main` y `develop`.

## Ejercicio 3: Publica una versión con tag

1. Crea un tag anotado `v0.1.0` en el commit más reciente.
2. Empuja el tag y verifica su aparición en GitHub (sección Releases).
