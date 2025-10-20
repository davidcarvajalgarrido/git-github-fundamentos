# 03. Ciclo de trabajo: commit, push, pull y merge

- [Introducción](#introducción)
- [Del cambio local al historial](#del-cambio-local-al-historial)
- [Actualizar tu rama: fetch, pull y rebase](#actualizar-tu-rama-fetch-pull-y-rebase)
- [Fusiones y resolución de conflictos](#fusiones-y-resolución-de-conflictos)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
Domina el bucle diario: preparar, confirmar y sincronizar cambios, y fusionarlos con seguridad.

## Del cambio local al historial
El paso de edición a commit convierte trabajo en progreso en una unidad de cambio con intención. Conviene agrupar commits por tema y evitar “mega-commits”. Cuando empujas (`push`), sincronizas tu historial local con el remoto; al traer cambios (`pull`), integras el trabajo de otros en tu copia. Mantener commits pequeños y frecuentes facilita las revisiones y reduce conflictos.
```bash
git status
git add src/app.js
git commit -m "Valida formulario antes de enviar"
git push
```

## Actualizar tu rama: fetch, pull y rebase
`git fetch` descarga referencias sin tocar tu rama actual; `git pull` combina fetch + merge (o rebase, si se configura). En equipos que priorizan un historial lineal, se usa pull con rebase para “reaplicar” tus commits sobre la punta remota y evitar merges triviales. Sea cual sea tu preferencia, lo importante es entender qué cambia y revisar el resultado antes de publicar.
```bash
# Recomendación: rebase al hacer pull en ramas de trabajo
git config --global pull.rebase false   # o true si tu equipo lo adopta
git fetch origin
git pull
```

## Fusiones y resolución de conflictos
Un conflicto surge cuando dos commits modifican la misma región de un archivo de manera incompatible. Git inserta marcadores y te pide decidir. La clave es: 1) entender la intención de cada cambio; 2) verificar la compilación o tests; 3) crear un commit de merge claro. Nunca resuelvas “a ciegas”; revisa con calma y apóyate en la historia del PR y los comentarios.
```bash
git merge feat/intro
# Si hay conflictos, edita los archivos con marcadores <<<<<<<, =======, >>>>>>>
git add archivos-resueltos
git commit -m "Resuelve conflictos al fusionar feat/intro en main"
```

## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://git-scm.com/docs/git-commit" target="_blank">Git – Commit</a>
- <a href="https://git-scm.com/docs/git-pull" target="_blank">Git – Pull</a>
- <a href="https://git-scm.com/docs/git-merge" target="_blank">Git – Merge</a>
- <a href="https://git-scm.com/docs/git-restore" target="_blank">Git – Reset / Restore</a>
