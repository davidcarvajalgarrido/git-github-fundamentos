# Lección 5 — Soluciones

## Ejercicio 1: Soluciones

GitHub Flow disciplinado:
```bash
git switch -c feat/cabecera
# Cambios pequeños...
git add .
git commit -m "Añade cabecera responsive"
git push -u origin feat/cabecera
# Abre PR, revisa y fusiona; luego elimina rama desde GitHub.
```

Ciclo Git Flow resumido:
```bash
git switch main
git switch -c develop
git push -u origin develop

git switch -c feature/login
# Implementa login...
git commit -m "Implementa flujo de login"
git switch develop
git merge --no-ff feature/login
git branch -d feature/login

git switch -c release/1.0.0
# Corrección menor...
git commit -m "Ajusta mensajes de release"
git tag -a v1.0.0 -m "Release 1.0.0"
git switch main
git merge --no-ff release/1.0.0
git switch develop
git merge --no-ff release/1.0.0
git push --all
git push --tags
```

Publicación con tag:
```bash
git tag -a v0.1.0 -m "Pre-release 0.1.0"
git push origin v0.1.0
```
Estado final esperado: historial coherente con el flujo elegido, PRs cerrados y tags visibles en GitHub.
