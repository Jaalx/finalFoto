---
quick-id: 260526-u1f
date: 2026-05-26
description: Agregar fotos autorales (Esteban, José, Sofía) y completar todos los textos placeholder
status: complete
mode: direct (sin orquestación — TodoWrite + commits atómicos)
tags: [autoral, fotos, webp, bio-esteban, content]

commits:
  - 15ea379 — fix(team-showcase): guard undefined bio in paragraph split
  - 094a7c8 — feat(autoral): add 11 photos + real Esteban bio + clean placeholders

files-created:
  - 04-portafolio-web/public/img/autoral/01.webp  (Sofía · «Aleteo» · destacada)
  - 04-portafolio-web/public/img/autoral/02.webp  (Sofía · «Dos relojes» · destacada)
  - 04-portafolio-web/public/img/autoral/03.webp  (José · «Luna entre ramas» · destacada)
  - 04-portafolio-web/public/img/autoral/04.webp  (Sofía · «Refugio»)
  - 04-portafolio-web/public/img/autoral/05.webp  (Sofía · «Manos que cosen»)
  - 04-portafolio-web/public/img/autoral/06.webp  (Sofía · «Luz que se cuela»)
  - 04-portafolio-web/public/img/autoral/07.webp  (José · «Gota»)
  - 04-portafolio-web/public/img/autoral/08.webp  (José · «Después del día»)
  - 04-portafolio-web/public/img/autoral/09.webp  (Esteban · «Hora dorada»)
  - 04-portafolio-web/public/img/autoral/10.webp  (Esteban · «Una ciudad luz»)
  - 04-portafolio-web/public/img/autoral/11.webp  (Esteban · «Caudal»)

files-modified:
  - 04-portafolio-web/src/lib/data.ts
  - 04-portafolio-web/src/components/AuthoralSequence.tsx
  - 04-portafolio-web/src/components/ui/team-showcase.tsx
  - .gitignore
  - .planning/STATE.md
---

## One-liner

11 fotos autorales WebP (15.5 MB → 1.3 MB, 91% reducción), bio real de Esteban, statements ajustados a 11 fotos, placeholder de segundo-corte de Esteban removido.

## Decisiones

- **Conteo: 11, no 12.** Los archivos enviados contenían un duplicado idéntico
  (`IMG_20260319_144035.jpg.jpeg` en Sofia y Jose, mismo MD5). Asignado a
  Sofía por afinidad con su bio (naturaleza/aves). Statement y copy de
  AuthoralSequence ajustados a "once".
- **Sin fotos de Javier en autoral.** El usuario envió 3 carpetas (Esteban,
  Jose, Sofía). Javier no entregó autorales; el statement pasa de "cuatro
  autores" a "tres autores".
- **Orden destacadas-primero.** Componente `AuthoralSequence` ya soporta el
  patrón "fotos con `note` → frames grandes; resto → bento grid". Las 3
  destacadas tienen `note` real escrito; las otras 8 sólo `title`.
- **Esteban segundo-corte removido.** El entry `sc-eu-est` en
  `segundoCorteProjects` era `[Temática]` con `[Pendiente: ...]` y `photos: []`.
  Como el usuario pidió "no dejes ningún placeholder" y no entregó material
  de esa actividad, se eliminó el entry completo en lugar de mostrar el
  fallback "Por entregar".
- **Type guard en team-showcase.** El build estaba fallando porque
  `TeamMember.bio` es opcional y se llamaba `.split()` directo. Arreglado
  con `(member.bio ?? '').split(...)` — atómico, en commit separado.

## Verificación

- `npm run build` ✓ — 4 rutas estáticas, sin errores TS, 152 KB First Load.
- Distribución final de fotos:
  - Sofía: 5 (incluye 2 destacadas)
  - José: 3 (incluye 1 destacada)
  - Esteban: 3
  - Javier: 0
- Bios placeholder eliminados: ya no hay Lorem ipsum en el repo (`grep -r
  Lorem 04-portafolio-web/src/` ↦ 0 matches).
- Placeholders `[Temática]` / `[Pendiente]` eliminados.

## Siguientes pasos sugeridos (no incluidos)

- Push a `origin/main` para que Netlify dispare deploy.
- Si Javier entrega sus 3 fotos autorales más adelante, revertir statement a
  "doce miradas" + "cuatro autores" y reinsertar las fotos preservando el
  orden destacadas-primero.
