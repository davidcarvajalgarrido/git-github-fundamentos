# 01. Introducción al control de versiones con Git

- [Introducción](#introducción)
- [Qué es Git y por qué usarlo](#qué-es-git-y-por-qué-usarlo)
- [Estructura interna: working directory, staging y repositorio](#estructura-interna-working-directory-staging-y-repositorio)
- [Instalación, configuración y primeros comandos](#instalación-configuración-y-primeros-comandos)
- [Buenas prácticas iniciales y errores comunes](#buenas-prácticas-iniciales-y-errores-comunes)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
Entiende qué problema resuelve Git, cómo organiza su información y cuáles son los comandos esenciales para dar tus primeros pasos con seguridad.

## Qué es Git y por qué usarlo
Git es un sistema de control de versiones distribuido. En lugar de depender de un servidor central para conocer el historial, cada clon del proyecto contiene todos los commits, ramas y etiquetas, lo que lo hace rápido, resiliente y adecuado para equipos distribuidos. El valor de Git no está solo en “guardar versiones”, sino en permitir experimentación segura a través de ramas, trazabilidad de cambios y colaboración asíncrona. Entender esta idea te permitirá razonar mejor sobre el flujo de trabajo, interpretar el historial y tomar decisiones cuando aparezcan conflictos.

## Estructura interna: working directory, staging y repositorio
Al trabajar con Git conviene imaginar tres zonas. En el directorio de trabajo editas archivos; el área de preparación (staging) registra exactamente qué cambios quieres confirmar; y el repositorio almacena de forma inmutable los commits que forman el historial. El ciclo cotidiano avanza así: editas, seleccionas cambios, confirmas, y solo entonces esos cambios pasan a formar parte del proyecto oficial. Esta separación evita “sorpresas”: puedes tener cambios locales sin que eso afecte al historial hasta que sean explícitamente confirmados, lo que permite revisar, dividir o descartar partes con control fino. :contentReference[oaicite:0]{index=0}

## Instalación, configuración y primeros comandos
Tras instalar Git, configura tu identidad para que los commits sean atribuibles de forma clara. Un buen primer paso es también definir tu editor por defecto y comprobar el estado del repositorio. Con ello, podrás iniciar un repositorio nuevo o clonar uno existente y empezar a trabajar en un flujo mínimo pero correcto.

```bash
# Configuración global recomendada
git config --global user.name "Tu Nombre"
git config --global user.email "tu@ejemplo.com"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main

# Crear o clonar un repositorio
mkdir demo-git && cd demo-git
git init
echo "hola" > README.md
git add README.md
git commit -m "Inicializa repo con README"

# Clonar uno existente (ejemplo)
# git clone https://github.com/usuario/proyecto.git
```

Observa cómo `git add` no “sube” nada a ningún servidor: solo selecciona cambios locales. El commit captura un snapshot coherente; podrás revisarlo y compartirlo más tarde cuando sincronices con un remoto.

## Buenas prácticas iniciales y errores comunes
La claridad en los mensajes de commit multiplica el valor del historial: usa el modo imperativo (“Añade validación de email”) y enfoca cada commit a una sola intención. Asegúrate de incluir un `.gitignore` para excluir artefactos como dependencias o archivos temporales – las plantillas oficiales ayudan a empezar con buen pie. Evita confirmar secretos o credenciales; Git registra todo el historial y revertir un secreto expuesto no lo elimina de las versiones anteriores. Finalmente, recuerda que “guardar” no es “publicar”: tus commits locales no afectan a nadie hasta que hagas push, lo cual es una gran ventaja para iterar con calma.

## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://git-scm.com/docs" target="_blank">Git – Documentación</a>
- <a href="https://git-scm.com/book/en/v2" target="_blank">Pro Git – Book</a>
- <a href="https://rogerdudler.github.io/git-guide" target="_blank">Git Guide (Conciso)</a>
