# Lección 2 — Ejercicios

## Ejercicio 1: Inicializa tu primer repositorio local

1. Crea una carpeta nueva llamada `mi-proyecto` y navega a ella.
2. Ejecuta `git init` para inicializar un repositorio Git.
3. Crea un archivo `README.md` con una breve descripción del proyecto.
4. Usa `git status` para ver el estado actual del repositorio.
5. Añade el archivo al área de staging con `git add README.md`.
6. Verifica nuevamente con `git status` que el archivo está preparado para commit.
7. Realiza tu primer commit con `git commit -m "Añadir README inicial"`.
8. Comprueba el historial con `git log`.

## Ejercicio 2: Ciclo básico de cambios

1. Configura tu nombre y email si aún no lo has hecho: `git config user.name "Tu Nombre"` y `git config user.email "tu@email.com"`.
2. Crea un archivo nuevo llamado `notas.txt` con algunas líneas de texto.
3. Usa `git status` para verificar que Git detecta el nuevo archivo.
4. Añade el archivo y haz commit con un mensaje descriptivo.
5. Modifica `README.md` añadiendo más contenido.
6. Usa `git diff` para ver los cambios que has realizado (antes de hacer add).
7. Añade los cambios al staging y vuelve a ejecutar `git diff` (sin argumentos) y `git diff --staged` para ver la diferencia.
8. Haz commit de los cambios.
9. Verifica el historial con `git log --oneline`.

## Ejercicio 3: Deshacer cambios con restore

1. Modifica el archivo `notas.txt` añadiendo una línea incorrecta.
2. Usa `git status` y `git diff` para ver el cambio.
3. Deshaz el cambio (antes de hacer add) con `git restore notas.txt`.
4. Verifica que el archivo volvió a su estado anterior.
5. Modifica nuevamente `notas.txt` y esta vez añádelo al staging con `git add`.
6. Usa `git restore --staged notas.txt` para sacarlo del área de staging.
7. Verifica con `git status` que el archivo está modificado pero no en staging.

## Ejercicio 4: Clonando un repositorio existente

1. En otra ubicación de tu sistema, clona un repositorio público (por ejemplo, puedes buscar alguno en GitHub).
2. Navega a la carpeta clonada y explora su contenido.
3. Usa `git log` para ver el historial de commits del repositorio.
4. Usa `git log --oneline --graph` para una vista más compacta.
5. Experimenta con `git diff` entre commits usando sus hashes (por ejemplo, `git diff abc123 def456`).
