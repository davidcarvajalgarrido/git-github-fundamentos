# Lección 4 — Soluciones

## Ejercicio 1: Soluciones

Issue y etiquetas: usa la UI de GitHub para crear y etiquetar el issue; al abrir el PR, incluye en la descripción:
```
Closes #<número>
```
Esto cerrará el issue automáticamente al fusionar.

Flujo de PR:
```bash
git switch -c feat/bienvenida
echo 'mensaje=Bienvenido/a' > config.env
git add config.env
git commit -m "Permite configurar bienvenida (refs #<número>)"
git push -u origin feat/bienvenida
# Abre PR desde GitHub, solicita revisión, aplica sugerencias y fusiona con "Squash and merge".
```

Estado final esperado: issue cerrado de forma automática, PR fusionado con un commit limpio en `main` y referencias cruzadas visibles entre issue, PR y commits.
