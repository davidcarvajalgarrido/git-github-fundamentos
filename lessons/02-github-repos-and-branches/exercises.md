# Lección 2 — Ejercicios

## Ejercicio 1: Inicializa y publica tu primer repositorio

1. En GitHub, crea un repo privado llamado `curso-fundamentos` (sin archivos iniciales).
2. En local, `git init` en una carpeta vacía; añade un README con una breve descripción.
3. Configura el remoto `origin` apuntando a tu repo de GitHub y haz `git push -u origin main`.
4. Verifica en GitHub que aparece tu commit inicial.

## Ejercicio 2: Clona y ajusta remotos

1. Clona `curso-fundamentos` en otra carpeta distinta.
2. Enumera remotos con `git remote -v` y cambia la URL a SSH si usas llaves.
3. Crea un archivo `notas.md`, confírmalo y súbelo.

## Ejercicio 3: Trabaja con ramas

1. Crea la rama `feat/intro` y añade contenido introductorio al README.
2. Haz uno o dos commits pequeños y vuelve a `main` sin fusionar.
3. Abre un Pull Request desde `feat/intro` hacia `main` (no fusiones aún).
