# Lección 3 — Ejercicios

## Ejercicio 1: Ciclo básico con sincronización

1. Crea `src/saludo.txt` con tu nombre, confírmalo y haz `push`.
2. En otra copia del repo (o un compañero), añade otra línea y sube cambios.
3. Vuelve a tu copia y trae cambios (`pull`); verifica el resultado con `git log --oneline`.

## Ejercicio 2: Simula y resuelve un conflicto

1. En `main`, añade la línea `mensaje=Hola` en `config.env` y súbelo.
2. Crea la rama `hotfix/mensaje` y cambia esa misma línea a `mensaje=Hola!`.
3. Desde otra copia, en `main`, cambia la misma línea a `mensaje=Hola equipo` y sube.
4. Intenta fusionar `hotfix/mensaje` en `main` y resuelve el conflicto manualmente.
