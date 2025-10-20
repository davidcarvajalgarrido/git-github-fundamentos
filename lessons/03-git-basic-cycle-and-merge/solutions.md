# Lección 3 — Soluciones

## Ejercicio 1: Soluciones

Ciclo básico:
```bash
echo "Tu Nombre" > src/saludo.txt
git add src/saludo.txt
git commit -m "Añade saludo"
git push
# Tras cambios remotos
git pull
git log --oneline --graph --decorate -5
```

Conflicto controlado:
```bash
git switch -c hotfix/mensaje
sed -i.bak 's/mensaje=.*/mensaje=Hola!/' config.env || true
git add config.env
git commit -m "Ajusta mensaje con exclamación"
git switch main
git pull
git merge hotfix/mensaje
# Edita los marcadores, decide el valor final (p. ej., 'mensaje=Hola equipo!')
git add config.env
git commit -m "Resuelve conflicto en config.env"
```

Estado final esperado: historial con commit de merge explícito, `config.env` coherente y repositorio compilando/pasando tests (si aplica).
