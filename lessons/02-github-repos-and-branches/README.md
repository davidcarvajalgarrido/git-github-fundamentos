# 02. Repositorios en GitHub: creación, clonación y ramas

- [Introducción](#introducción)
- [Creación de repositorios en GitHub](#creación-de-repositorios-en-github)
- [Clonación y origen remoto](#clonación-y-origen-remoto)
- [Ramas para aislar trabajo](#ramas-para-aislar-trabajo)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
Crea repositorios en GitHub, clónalos localmente y gestiona ramas para experimentar sin romper la línea principal.

## Creación de repositorios en GitHub
Un repositorio remoto en GitHub actúa como punto de encuentro para el equipo. Al crearlo, defines su visibilidad (público o privado) y puedes inicializar un README, una licencia y un `.gitignore` apropiado para tu tecnología. Aunque es tentador inicializar con todo desde la interfaz, muchas veces conviene crear el repo vacío y hacer el primer push desde local para conservar control total sobre la rama principal y el historial inicial.

## Clonación y origen remoto
Clonar es descargar el proyecto con todo su historial y configurar automáticamente el remoto `origin`. A partir de ahí, cualquier `git fetch` o `git push` sabe a qué URL sincronizar. Es una relación simétrica: tu copia es completa, pero el remoto es la referencia compartida. Mantener esta relación limpia –por ejemplo, usando HTTPS con un token o SSH con llave– reduce fricciones de autenticación.
```bash
# Clonar (HTTPS o SSH)
git clone https://github.com/organizacion/app-ejemplo.git
# o
git clone git@github.com:organizacion/app-ejemplo.git

# Ver y configurar remotos
cd app-ejemplo
git remote -v
git remote set-url origin git@github.com:organizacion/app-ejemplo.git
```

## Ramas para aislar trabajo
Las ramas permiten desarrollar nuevas funcionalidades sin interrumpir la estabilidad de `main`. Crear una rama es barato y fomentado; cambiar de rama reescribe tu “contexto” de trabajo. La práctica saludable es usar ramas descriptivas y cortas, abrir pull requests temprano y borrar ramas ya integradas para mantener el repositorio ordenado.
```bash
# Crear y moverte a una rama
git switch -c feat/pagina-inicio
# Trabajar y confirmar
echo "<h1>Home</h1>" > index.html
git add index.html
git commit -m "Crea página de inicio"
# Volver a main
git switch main
```

## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://docs.github.com" target="_blank">GitHub Docs – Repositories</a>
- <a href="https://git-scm.com/docs/git-branch" target="_blank">Git – Ramas</a>
- <a href="https://git-scm.com/docs/git-clone" target="_blank">Git – Clonar</a>
- <a href="https://github.com/github/gitignore" target="_blank">Plantillas .gitignore</a>
