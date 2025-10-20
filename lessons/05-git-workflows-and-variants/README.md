# 05. Flujos de trabajo recomendados: Git Flow y variantes

- [Introducción](#introducción)
- [Git Flow: releases previsibles](#git-flow-releases-previsibles)
- [GitHub Flow y Trunk-Based: simplicidad y despliegues frecuentes](#github-flow-y-trunk-based-simplicidad-y-despliegues-frecuentes)
- [Versionado y tags](#versionado-y-tags)
- [Recursos adicionales](#recursos-adicionales)

## Introducción
Compara modelos de branching como Git Flow, GitHub Flow y Trunk-Based, y aprende a escoger el que encaja con tu equipo.

## Git Flow: releases previsibles
Git Flow propone ramas largas para `develop`, `release`, `feature`, `hotfix` y `main`. Brilla cuando hay ciclos de release planificados y QA formal. A cambio, puede volverse pesado si el equipo es pequeño o necesita desplegar a menudo. La clave está en mantener reglas claras: qué va en cada rama, quién puede fusionar, y cuándo etiquetar versiones.

## GitHub Flow y Trunk-Based: simplicidad y despliegues frecuentes
GitHub Flow simplifica a `main` + ramas cortas de funcionalidad con PRs y despliegues continuos. Trunk-Based va aún más lejos: ramas muy breves y feature flags para integrar a diario. Ambos reducen “bola de nieve” de merges y favorecen feedback rápido. Requieren automatización sólida y tests que den confianza para desplegar a menudo.

## Versionado y tags
Etiquetar commits con tags semánticos (`v1.2.0`) facilita liberar artefactos y rastrear cambios. La disciplina de versionado (p. ej., SemVer) ayuda a comunicar compatibilidad. Integrar el etiquetado en el flujo evita que se olvide durante la prisa del release.
```bash
git tag -a v1.0.0 -m "Primera versión estable"
git push origin v1.0.0
```

## Recursos adicionales
> **Enlaces externos**: Los enlaces se abren en la misma pestaña. Usa Ctrl+Click (Windows/Linux) o Cmd+Click (Mac) para abrirlos en pestaña nueva.

- <a href="https://www.atlassian.com/git/tutorials/comparing-workflows" target="_blank">Atlassian – Comparativa de flujos</a>
- <a href="https://git-scm.com/docs/git-branch" target="_blank">Git – Branching y Merging</a>
- <a href="https://git-scm.com/docs/git-tag" target="_blank">Git – Tags</a>
