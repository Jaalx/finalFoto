# STATE — Portafolio Web "El tiempo"

## Current Phase

**All phases completed** ✓ — Sitio con fotos autorales reales. Pendiente: push a GitHub para que Netlify dispare deploy.

## Progress

| Phase | Status |
|-------|--------|
| 1. Setup Next.js + base | ✅ Completed |
| 2. Home: proyecto autoral | ✅ Completed |
| 3. Cortes anteriores | ✅ Completed |
| 4. Interacción y pulido | ✅ Completed |
| 5. Deploy GitHub Pages | ✅ Completed |

## Build validation

`npm run build` exitoso. 3 páginas estáticas generadas:
- `/` (home con proyecto autoral)
- `/primer-corte`
- `/segundo-corte`

First Load JS: 152 KB en home (incluye framer-motion + lightbox), 148 KB en cortes.

## Last Updated

2026-05-26 — Completed quick task 260526-u1f: Agregar fotos autorales (Esteban, José, Sofía) y completar todos los textos placeholder

## Open Questions / Notes

- Usuario de GitHub: Jaalx (repo: https://github.com/Jaalx/finalFoto, branch main). Deploy en Netlify.
- Bios: 4 de 4 reales (Javier, Sofía, José, Esteban). Lorem ipsum eliminado.
- Decisión sitio colectivo: confirmada por el usuario. Cada foto firma su autor solo en proyectos individuales; en grupales el header lista los autores.
- Vulnerabilidad de seguridad de Next.js 14.2.15: ya actualizado a ^14.2.35 (parcheada).
- Imágenes en formato WebP (quality 82, ~40-50% más livianas que JPG).
- **Autoral pasa de 12 a 11 fotos.** Un archivo (`IMG_20260319_144035`) llegó duplicado en las carpetas de Sofía y José; asignado a Sofía. Javier no entregó fotos autorales. Distribución final: Sofía 5, José 3, Esteban 3. Statement y AuthoralSequence ajustados a "once" / "tres autores". Si Javier entrega más adelante, revertir conteo.
- **Esteban segundo-corte (escenas urbanas)**: no entregado, entry `sc-eu-est` removido de `segundoCorteProjects` para no mostrar "Por entregar". Si entrega luego, reinsertar.

### Blockers/Concerns

(ninguno)

### Quick Tasks Completed

| # | Description | Date | Commit | Directory |
|---|-------------|------|--------|-----------|
| 001 | Revisa y ajusta el responsive (+ hamburger menu mobile + WebP) | 2026-05-24 | 4e953de | [001-revisa-y-ajusta-el-responsive](./quick/001-revisa-y-ajusta-el-responsive/) |
| 260526-u1f | Agregar fotos autorales (Esteban, José, Sofía) y completar todos los textos placeholder | 2026-05-26 | 094a7c8 | [260526-u1f-agregar-fotos-autorales-y-completar-text](./quick/260526-u1f-agregar-fotos-autorales-y-completar-text/) |
