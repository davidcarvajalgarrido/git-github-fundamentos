# Lección 3 — Ejercicios

## Ejercicio 1: Trabaja con ramas y fusiones simples

1. En el repositorio `mi-proyecto` (del ejercicio anterior), crea una nueva rama llamada `feature/nueva-funcionalidad`.
2. Cambia a esa rama y crea un archivo `funcionalidad.txt` con algunas líneas de descripción.
3. Haz commit de los cambios en la rama.
4. Vuelve a la rama `main` y verifica que el archivo `funcionalidad.txt` no existe allí.
5. Fusiona la rama `feature/nueva-funcionalidad` en `main` usando `git merge`.
6. Verifica con `git log --oneline --graph` que la fusión se realizó correctamente.
7. Borra la rama `feature/nueva-funcionalidad` ya que ya no la necesitas.

## Ejercicio 2: Resuelve un conflicto de merge

1. En la rama `main`, crea un archivo `config.txt` con la línea `version=1.0`.
2. Haz commit del archivo.
3. Crea una nueva rama llamada `feature/version-update`.
4. En la rama `feature/version-update`, modifica `config.txt` cambiando la línea a `version=2.0`.
5. Haz commit de ese cambio.
6. Vuelve a la rama `main` y modifica la misma línea de `config.txt` a `version=1.5`.
7. Haz commit en `main`.
8. Intenta fusionar `feature/version-update` en `main`. Git te indicará que hay un conflicto.
9. Abre `config.txt`, resuelve el conflicto manualmente (decide qué versión mantener o crear una nueva).
10. Marca el conflicto como resuelto con `git add config.txt` y completa el merge con `git commit`.
11. Verifica el historial con `git log --oneline --graph --all`.

## Ejercicio 3: Navega por el historial con checkout

1. Usa `git log --oneline` para ver el historial de commits en tu repositorio.
2. Copia el hash de un commit antiguo (por ejemplo, el segundo o tercer commit).
3. Usa `git checkout <hash>` para moverte a ese commit específico.
4. Explora el contenido del repositorio en ese punto del tiempo (verás que falta contenido más reciente).
5. Usa `git log --oneline` para ver que estás en un estado "detached HEAD".
6. Vuelve a la rama `main` con `git checkout main` o `git switch main`.
7. Verifica que todo el contenido reciente ha vuelto.

## Ejercicio 4: Sincroniza con GitHub (remoto)

1. Ve a GitHub y crea un nuevo repositorio vacío llamado `mi-proyecto-git`.
2. No añadas README, .gitignore ni licencia (debe estar completamente vacío).
3. En tu repositorio local `mi-proyecto`, añade el remoto con `git remote add origin <URL-del-repo>`.
4. Verifica que el remoto se añadió correctamente con `git remote -v`.
5. Sube tu rama `main` a GitHub con `git push -u origin main`.
6. Verifica en GitHub que todos tus commits aparecen en el repositorio.
7. Haz un cambio en GitHub directamente (edita un archivo desde la web y haz commit).
8. En local, trae los cambios con `git pull`.
9. Verifica con `git log` que el commit de GitHub ahora está en tu repositorio local.

## Ejercicio 5: Practica el ciclo completo

1. Crea una nueva rama llamada `feature/mejora`.
2. Añade o modifica algunos archivos y haz varios commits (mínimo 2).
3. Sube la rama a GitHub con `git push -u origin feature/mejora`.
4. Cambia a `main` y fusiona la rama `feature/mejora` localmente.
5. Sube los cambios de `main` a GitHub con `git push`.
6. Verifica en GitHub que todo el historial está sincronizado.

