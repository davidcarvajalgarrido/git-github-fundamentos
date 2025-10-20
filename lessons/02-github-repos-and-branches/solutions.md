# Lección 2 — Soluciones

## Ejercicio 1: Soluciones

Para publicar desde local:
```bash
echo "# Curso Fundamentos" > README.md
git init
git add README.md
git commit -m "Inicializa repo con README"
git branch -M main
git remote add origin <URL-de-tu-repo>
git push -u origin main
```

Para clonar y ajustar el remoto:
```bash
git clone <URL>
cd curso-fundamentos
git remote -v
git remote set-url origin git@github.com:<usuario>/curso-fundamentos.git
echo "Notas iniciales" > notas.md
git add notas.md
git commit -m "Añade notas"
git push
```

Para la rama de funcionalidad:
```bash
git switch -c feat/intro
echo "## Introducción" >> README.md
git add README.md
git commit -m "Añade sección de introducción"
git commit --allow-empty -m "Pequeño commit de demostración"
git switch main
# Pull Request se crea desde la UI de GitHub mostrando diffs y checks.
```

Estado final esperado: repositorio con `main` publicado, una rama `feat/intro` con commits adicionales y un Pull Request abierto en GitHub listo para revisión.
