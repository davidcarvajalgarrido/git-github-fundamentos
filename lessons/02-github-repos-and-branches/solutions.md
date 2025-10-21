# Lección 2 — Soluciones

## Ejercicio 1: Inicializa tu primer repositorio local

```bash
# 1. Crear carpeta y navegar
mkdir mi-proyecto
cd mi-proyecto

# 2. Inicializar repositorio
git init

# 3. Crear README
echo "# Mi Proyecto" > README.md
echo "Este es un proyecto de prueba para aprender Git." >> README.md

# 4. Ver estado
git status

# 5. Añadir al staging
git add README.md

# 6. Verificar estado nuevamente
git status

# 7. Hacer commit
git commit -m "Añadir README inicial"

# 8. Ver historial
git log
```

## Ejercicio 2: Ciclo básico de cambios

```bash
# 1. Configurar usuario (si es necesario)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# 2. Crear archivo notas.txt
echo "Primera nota" > notas.txt
echo "Segunda nota" >> notas.txt

# 3. Ver estado
git status

# 4. Añadir y hacer commit
git add notas.txt
git commit -m "Añadir archivo de notas"

# 5. Modificar README
echo "" >> README.md
echo "## Descripción" >> README.md
echo "Proyecto para practicar Git." >> README.md

# 6. Ver diferencias antes de add
git diff

# 7. Añadir al staging y comparar
git add README.md
git diff           # No mostrará nada (working directory está limpio)
git diff --staged  # Mostrará los cambios en staging

# 8. Hacer commit
git commit -m "Ampliar descripción en README"

# 9. Ver historial compacto
git log --oneline
```

## Ejercicio 3: Deshacer cambios con restore

```bash
# 1. Modificar archivo con línea incorrecta
echo "Esta línea está mal" >> notas.txt

# 2. Ver estado y diferencias
git status
git diff

# 3. Deshacer cambios (antes de add)
git restore notas.txt

# 4. Verificar que volvió al estado anterior
cat notas.txt
git status

# 5. Modificar nuevamente y añadir al staging
echo "Otra modificación" >> notas.txt
git add notas.txt

# 6. Sacar del staging
git restore --staged notas.txt

# 7. Verificar estado
git status
# El archivo está modificado pero no en staging
```

## Ejercicio 4: Clonando un repositorio existente

```bash
# 1. Clonar un repositorio público (ejemplo)
cd /tmp
git clone https://github.com/torvalds/linux.git
# O cualquier otro repositorio público más pequeño

# 2. Navegar y explorar
cd linux
ls -la

# 3. Ver historial completo
git log

# 4. Ver historial compacto con gráfico
git log --oneline --graph

# 5. Comparar commits (usar hashes reales del log)
# Ejemplo con hashes de ejemplo:
git log --oneline  # Para obtener hashes
git diff abc1234 def5678
```

**Estado final esperado:** 
- Repositorio local `mi-proyecto` inicializado con varios commits
- Comprensión del ciclo básico: modificar → add → commit
- Dominio de `git status`, `git diff`, y `git log`
- Capacidad de deshacer cambios con `git restore`
- Experiencia clonando y explorando repositorios existentes
