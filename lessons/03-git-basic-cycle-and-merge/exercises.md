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

## Ejercicio 6: Entiende fetch vs pull

1. Haz un cambio en GitHub directamente (edita cualquier archivo desde la web y haz commit).
2. En local, NO hagas `git pull` todavía. En su lugar, usa `git fetch origin`.
3. Usa `git log --oneline --all --graph` para ver que hay commits en `origin/main` que no están en tu `main` local.
4. Verifica con `git status` que tu rama local está "detrás" de la remota.
5. Revisa el contenido de tus archivos locales y confirma que AÚN NO han cambiado (fetch solo descarga, no fusiona).
6. Ahora fusiona manualmente con `git merge origin/main` para integrar los cambios.
7. Compara este proceso con hacer directamente `git pull` (que es `fetch + merge` automático).
8. Repite el ejercicio: haz otro cambio en GitHub, pero esta vez usa directamente `git pull` y observa la diferencia.

## Ejercicio 7: Rebase vs Merge con squash

1. Crea una rama `feature/rebase-test` y haz 3 commits pequeños (ej: añadir líneas a un archivo).
2. Vuelve a `main` y haz un commit diferente (ej: modificar otro archivo).
3. Cambia a `feature/rebase-test` y haz `git rebase main` para "mover" tu rama encima de main.
4. Observa con `git log --oneline --graph` que el historial es lineal (sin commit de merge).
5. Haz push de la rama (puede que necesites `--force` si ya existía en remoto).
6. Ahora crea otra rama `feature/squash-test` y haz 3 commits pequeños.
7. Vuelve a `main` y haz `git merge --squash feature/squash-test`.
8. Completa el squash con `git commit -m "Añadir feature squash-test"`.
9. Observa con `git log` que los 3 commits se convirtieron en uno solo.
10. Compara ambos enfoques: rebase mantiene commits individuales pero reescribe historia, squash los agrupa en uno.

## Ejercicio 8: Experimenta con reset (soft, mixed, hard)

1. Crea un archivo `test-reset.txt` con contenido y haz commit.
2. Modifica el archivo y haz un segundo commit.
3. Modifica el archivo nuevamente y haz un tercer commit.
4. Usa `git log --oneline` para ver los 3 commits.
5. Haz `git reset --soft HEAD~1` para deshacer el último commit manteniendo cambios en staging.
6. Verifica con `git status` que los cambios están en staging (verde).
7. Vuelve a hacer commit si quieres, o haz `git reset --mixed HEAD~1` (o simplemente `git reset HEAD~1`).
8. Verifica con `git status` que ahora los cambios están en el working directory (rojo), no en staging.
9. Vuelve a hacer commit y luego prueba `git reset --hard HEAD~1`.
10. Verifica que los cambios se perdieron completamente (el archivo volvió al estado anterior).
11. **Cuidado**: `--hard` elimina cambios permanentemente. Úsalo solo cuando estés seguro.

## Ejercicio 9: Deshaz cambios públicos con revert

1. Crea un archivo `feature.txt` con la línea `funcionalidad activa` y haz commit.
2. Sube el commit a GitHub con `git push`.
3. Crea otro commit modificando el archivo a `funcionalidad mejorada` y súbelo también.
4. Te das cuenta de que el último cambio fue un error y necesitas deshacerlo.
5. NO uses `git reset` (porque ya está en el historial público de GitHub).
6. En su lugar, usa `git revert HEAD` para crear un nuevo commit que deshace el último.
7. Git abrirá un editor para el mensaje de commit, guárdalo y cierra.
8. Verifica con `git log` que hay un nuevo commit de "Revert".
9. Verifica que el archivo volvió a `funcionalidad activa`.
10. Sube el revert a GitHub con `git push`.
11. Observa en GitHub que el historial está completo: commit original → commit erróneo → commit de revert.

## Ejercicio 10: Configura SSH para GitHub

1. En tu terminal, genera un par de claves SSH con `ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"`.
2. Cuando te pregunte dónde guardar la clave, presiona Enter para aceptar la ubicación por defecto (`~/.ssh/id_ed25519`).
3. Opcionalmente, establece una passphrase (contraseña) para mayor seguridad, o déjala vacía.
4. Verifica que se crearon dos archivos: `~/.ssh/id_ed25519` (privada) y `~/.ssh/id_ed25519.pub` (pública).
5. Muestra tu clave pública con `cat ~/.ssh/id_ed25519.pub` y cópiala al portapapeles.
6. Ve a GitHub → Settings → SSH and GPG keys → New SSH key.
7. Pega tu clave pública, dale un título descriptivo (ej: "Mi laptop") y guárdala.
8. Prueba la conexión con `ssh -T git@github.com` (debe decir "Hi usuario! You've successfully authenticated").
9. Cambia la URL de tu remoto a SSH: `git remote set-url origin git@github.com:tu-usuario/mi-proyecto-git.git`.
10. Verifica con `git remote -v` que ahora usa SSH en lugar de HTTPS.
11. Haz un cambio, commit y `git push` para verificar que funciona sin pedir contraseña.
