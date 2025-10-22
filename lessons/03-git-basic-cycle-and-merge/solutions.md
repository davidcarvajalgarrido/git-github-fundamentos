# Lección 3 — Soluciones

## Ejercicio 1: Trabaja con ramas y fusiones simples

```bash
# 1. Crear nueva rama
git branch feature/nueva-funcionalidad

# 2. Cambiar a esa rama
git checkout feature/nueva-funcionalidad
# O usar: git switch feature/nueva-funcionalidad

# Crear archivo con contenido
echo "Nueva funcionalidad del proyecto" > funcionalidad.txt
echo "Esta característica añade..." >> funcionalidad.txt

# 3. Hacer commit
git add funcionalidad.txt
git commit -m "Añadir descripción de nueva funcionalidad"

# 4. Volver a main y verificar
git checkout main
ls funcionalidad.txt  # No existe en main
git status

# 5. Fusionar la rama
git merge feature/nueva-funcionalidad

# 6. Verificar el historial
git log --oneline --graph

# 7. Borrar la rama
git branch -d feature/nueva-funcionalidad
```

## Ejercicio 2: Resuelve un conflicto de merge

```bash
# 1. Crear archivo en main
echo "version=1.0" > config.txt

# 2. Hacer commit
git add config.txt
git commit -m "Añadir configuración inicial"

# 3. Crear nueva rama
git branch feature/version-update

# 4. Cambiar a la rama y modificar
git checkout feature/version-update
echo "version=2.0" > config.txt

# 5. Hacer commit en la rama
git add config.txt
git commit -m "Actualizar versión a 2.0"

# 6. Volver a main y modificar la misma línea
git checkout main
echo "version=1.5" > config.txt

# 7. Hacer commit en main
git add config.txt
git commit -m "Actualizar versión a 1.5"

# 8. Intentar fusionar (generará conflicto)
git merge feature/version-update
# Git indicará: CONFLICT (content): Merge conflict in config.txt

# 9. Abrir config.txt y verás algo como:
# <<<<<<< HEAD
# version=1.5
# =======
# version=2.0
# >>>>>>> feature/version-update

# Editar el archivo y decidir la versión final, por ejemplo:
echo "version=2.0" > config.txt

# 10. Marcar como resuelto y completar merge
git add config.txt
git commit -m "Resolver conflicto: mantener versión 2.0"

# 11. Verificar historial
git log --oneline --graph --all
```

## Ejercicio 3: Navega por el historial con checkout

```bash
# 1. Ver historial
git log --oneline

# 2. Copiar hash de un commit antiguo (ejemplo: abc1234)
# Supongamos que el hash es abc1234

# 3. Moverse a ese commit
git checkout abc1234

# Verás un mensaje sobre "detached HEAD"

# 4. Explorar contenido
ls
cat README.md  # Verás el contenido de ese momento

# 5. Ver el log desde ese punto
git log --oneline

# 6. Volver a main
git checkout main
# O: git switch main

# 7. Verificar que todo está de vuelta
ls
git status
```

## Ejercicio 4: Sincroniza con GitHub (remoto)

```bash
# 1-2. Crear repositorio en GitHub (desde la web)
# Ir a github.com → New repository → nombre: mi-proyecto-git
# NO marcar ninguna opción de inicialización

# 3. Añadir remoto en local
git remote add origin https://github.com/tu-usuario/mi-proyecto-git.git

# 4. Verificar remoto
git remote -v
# Debe mostrar:
# origin  https://github.com/tu-usuario/mi-proyecto-git.git (fetch)
# origin  https://github.com/tu-usuario/mi-proyecto-git.git (push)

# 5. Subir main a GitHub
git push -u origin main

# 6. Verificar en GitHub (desde el navegador)
# Ve a tu repositorio y verifica que están todos los commits

# 7. Hacer cambio en GitHub
# Desde la web, edita un archivo (ej: README.md)
# Haz commit del cambio desde la interfaz web

# 8. Traer cambios a local
git pull

# 9. Verificar que el commit remoto está en local
git log --oneline
# Deberías ver el commit que hiciste desde GitHub
```

## Ejercicio 5: Practica el ciclo completo

```bash
# 1. Crear nueva rama
git checkout -b feature/mejora
# O: git switch -c feature/mejora

# 2. Hacer varios commits
echo "Mejora 1: optimización" >> mejoras.txt
git add mejoras.txt
git commit -m "Añadir primera mejora"

echo "Mejora 2: nueva característica" >> mejoras.txt
git add mejoras.txt
git commit -m "Añadir segunda mejora"

# 3. Subir la rama a GitHub
git push -u origin feature/mejora

# 4. Cambiar a main y fusionar
git checkout main
git merge feature/mejora

# 5. Subir main actualizado
git push

# 6. Verificar en GitHub
# Navega a tu repositorio en GitHub
# Ve a "Insights" → "Network" para ver el gráfico de ramas
# O usa la pestaña "Commits" para ver el historial completo
```

**Estado final esperado:**
- Dominio de creación, cambio y fusión de ramas
- Capacidad para resolver conflictos de merge manualmente
- Comprensión del historial y navegación con checkout
- Sincronización bidireccional con GitHub (push y pull)
- Flujo completo de trabajo con ramas locales y remotas

## Ejercicio 6: Entiende fetch vs pull

```bash
# 1. Hacer cambio en GitHub (desde la web)
# Edita un archivo, por ejemplo README.md, y haz commit

# 2. Usar fetch en lugar de pull
git fetch origin

# 3. Ver el estado de las ramas
git log --oneline --all --graph
# Verás que origin/main está adelante de main

# 4. Verificar el status
git status
# Dirá algo como: "Your branch is behind 'origin/main' by 1 commit"

# 5. Verificar que los archivos locales NO cambiaron aún
cat README.md
# El contenido es el antiguo

# 6. Fusionar manualmente
git merge origin/main
# Ahora sí se integran los cambios

# 7-8. Comparar con pull directo
# Hacer otro cambio en GitHub
git pull
# Esto hace fetch + merge automáticamente en un solo paso
```

**Cuándo usar cada uno:**
- `git fetch`: Cuando quieres revisar cambios antes de integrarlos
- `git pull`: Cuando confías en los cambios y quieres integrarlos directamente

## Ejercicio 7: Rebase vs Merge con squash

```bash
# 1. Crear rama y hacer 3 commits
git checkout -b feature/rebase-test
echo "Línea 1" >> rebase-file.txt
git add rebase-file.txt
git commit -m "Añadir línea 1"

echo "Línea 2" >> rebase-file.txt
git add rebase-file.txt
git commit -m "Añadir línea 2"

echo "Línea 3" >> rebase-file.txt
git add rebase-file.txt
git commit -m "Añadir línea 3"

# 2. Volver a main y hacer un commit diferente
git checkout main
echo "Cambio en main" >> otro-archivo.txt
git add otro-archivo.txt
git commit -m "Cambio en main mientras tanto"

# 3. Hacer rebase
git checkout feature/rebase-test
git rebase main

# 4. Observar historial lineal
git log --oneline --graph
# No hay commit de merge, los commits se "movieron" encima de main

# 5. Push (puede necesitar force)
git push -u origin feature/rebase-test --force-with-lease

# 6. Crear otra rama para squash
git checkout main
git checkout -b feature/squash-test
echo "Feature A" >> squash-file.txt
git add squash-file.txt
git commit -m "Implementar parte A"

echo "Feature B" >> squash-file.txt
git add squash-file.txt
git commit -m "Implementar parte B"

echo "Feature C" >> squash-file.txt
git add squash-file.txt
git commit -m "Implementar parte C"

# 7. Volver a main y hacer merge squash
git checkout main
git merge --squash feature/squash-test

# 8. Completar el squash
git commit -m "Añadir feature squash-test"

# 9. Observar que los 3 commits son ahora 1
git log --oneline
# Solo ves un commit, no los 3 individuales
```

**Diferencias:**
- **Rebase**: Mantiene commits individuales pero reescribe historia (lineal, limpia)
- **Squash**: Agrupa múltiples commits en uno solo (útil para features con muchos commits pequeños)
- **Merge normal**: Preserva historia completa con commit de merge

## Ejercicio 8: Experimenta con reset (soft, mixed, hard)

```bash
# 1. Crear archivo y hacer commit
echo "Versión 1" > test-reset.txt
git add test-reset.txt
git commit -m "Commit 1: versión inicial"

# 2. Segundo commit
echo "Versión 2" > test-reset.txt
git add test-reset.txt
git commit -m "Commit 2: segunda versión"

# 3. Tercer commit
echo "Versión 3" > test-reset.txt
git add test-reset.txt
git commit -m "Commit 3: tercera versión"

# 4. Ver los commits
git log --oneline
# Verás los 3 commits

# 5. Reset SOFT (deshace commit, mantiene en staging)
git reset --soft HEAD~1

# 6. Verificar estado
git status
# Archivo en verde (staging area)
cat test-reset.txt
# Todavía tiene "Versión 3"

# 7. Hacer commit nuevamente o probar MIXED
git commit -m "Commit 3 de nuevo"
git reset --mixed HEAD~1
# O simplemente: git reset HEAD~1

# 8. Verificar estado
git status
# Archivo en rojo (working directory)
cat test-reset.txt
# Todavía tiene "Versión 3"

# 9. Hacer commit y probar HARD
git add test-reset.txt
git commit -m "Commit 3 otra vez"
git reset --hard HEAD~1

# 10. Verificar que los cambios se perdieron
git status
# Working directory limpio
cat test-reset.txt
# Ahora tiene "Versión 2" (se perdió la versión 3)
```

**Resumen:**
- `--soft`: Mueve HEAD, mantiene cambios en staging
- `--mixed` (default): Mueve HEAD, mantiene cambios en working directory
- `--hard`: Mueve HEAD, ELIMINA cambios (¡peligroso!)

## Ejercicio 9: Deshaz cambios públicos con revert

```bash
# 1. Crear archivo y hacer commit
echo "funcionalidad activa" > feature.txt
git add feature.txt
git commit -m "Activar nueva funcionalidad"

# 2. Subir a GitHub
git push

# 3. Hacer otro commit con error
echo "funcionalidad mejorada" > feature.txt
git add feature.txt
git commit -m "Mejorar funcionalidad"
git push

# 4. Te das cuenta del error
# NO uses reset porque ya está en GitHub (público)

# 5-6-7. Usar revert
git revert HEAD
# Se abrirá un editor con mensaje por defecto:
# "Revert 'Mejorar funcionalidad'"
# Guarda y cierra el editor

# 8. Ver el historial
git log --oneline
# Verás: commit original → commit error → commit revert

# 9. Verificar el contenido
cat feature.txt
# Ha vuelto a "funcionalidad activa"

# 10. Subir el revert
git push

# 11. Verificar en GitHub
# El historial completo está visible, nada se eliminó
```

**Diferencias con reset:**
- **Reset**: Reescribe historia (mueve HEAD hacia atrás). Peligroso en ramas públicas.
- **Revert**: Crea un nuevo commit que deshace cambios. Seguro para ramas públicas.

## Ejercicio 10: Configura SSH para GitHub

```bash
# 1. Generar par de claves SSH
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# 2. Aceptar ubicación por defecto
# Presiona Enter cuando pregunte: "Enter file in which to save the key"

# 3. Opcional: establecer passphrase
# Presiona Enter dos veces para sin passphrase, o escribe una contraseña

# 4. Verificar que se crearon las claves
ls -la ~/.ssh/
# Debes ver: id_ed25519 (privada) e id_ed25519.pub (pública)

# 5. Mostrar y copiar clave pública
cat ~/.ssh/id_ed25519.pub
# Copia todo el contenido (empieza con "ssh-ed25519 ...")

# 6-7. Añadir a GitHub
# Ve a: https://github.com/settings/keys
# Click en "New SSH key"
# Title: "Mi laptop" (o lo que prefieras)
# Key: pega la clave pública
# Click en "Add SSH key"

# 8. Probar la conexión
ssh -T git@github.com
# Debe responder: "Hi tu-usuario! You've successfully authenticated..."

# 9. Cambiar URL del remoto a SSH
git remote set-url origin git@github.com:tu-usuario/mi-proyecto-git.git

# 10. Verificar
git remote -v
# Debe mostrar: git@github.com:tu-usuario/... en lugar de https://

# 11. Probar push sin contraseña
echo "Test SSH" >> README.md
git add README.md
git commit -m "Probar SSH"
git push
# No debe pedir contraseña (solo passphrase si la configuraste)
```

**Ventajas de SSH:**
- No necesitas escribir usuario/contraseña en cada push
- Más seguro que HTTPS con contraseña
- Requerido para algunas operaciones avanzadas

**Estado final esperado:**
- Comprensión profunda de fetch vs pull
- Dominio de rebase y squash para mantener historial limpio
- Conocimiento de reset (soft/mixed/hard) y sus peligros
- Uso de revert para deshacer cambios en ramas públicas
- Autenticación SSH configurada para trabajar con GitHub sin contraseñas
