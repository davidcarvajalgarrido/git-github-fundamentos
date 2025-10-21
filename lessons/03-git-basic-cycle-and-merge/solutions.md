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

