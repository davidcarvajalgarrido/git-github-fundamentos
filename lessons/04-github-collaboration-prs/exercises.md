# Lección 4 — Ejercicios

## Ejercicio 1: Gestiona un issue de mejora

1. Crea un issue llamado “Mejora: mensaje de bienvenida configurable” con criterios de aceptación.
2. Añade etiquetas `enhancement` y `priority:medium`, y asígnatelo.
3. Enlaza el issue a un PR usando la sintaxis `Closes #<número>` en la descripción del PR.

## Ejercicio 2: Crea y revisa un PR

1. Desde `feat/bienvenida`, modifica el mensaje por defecto e incluye tests (si aplica).
2. Abre un PR a `main` y solicita revisión a un compañero.
3. Aplica los comentarios recibidos y fusiona mediante `Squash and merge`.

## Ejercicio 3: Trazabilidad con commits

1. Realiza un commit que haga referencia al issue: `git commit -m "Permite configurar bienvenida (refs #<número>)"`.
2. Verifica en el issue que aparece la referencia.
