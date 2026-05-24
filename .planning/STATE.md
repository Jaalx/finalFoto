# STATE — Portafolio Web "El tiempo"

## Current Phase

**All phases completed** ✓ — Sitio listo para publicar. Pendiente: usuario sube fotos y hace push a GitHub.

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

First Load JS: ~143 KB por ruta (incluye framer-motion + lightbox).

## Last Updated

2026-05-24 — Completed quick task 001: Revisa y ajusta el responsive (incluyendo hamburger menu mobile y conversión a WebP)

## Open Questions / Notes

- Usuario de GitHub: Jaalx (repo: https://github.com/Jaalx/finalFoto, branch main). Deploy en Netlify.
- Bios: 3 de 4 reales (Javier, Sofía, José). Esteban sigue con placeholder Lorem ipsum.
- Decisión sitio colectivo: confirmada por el usuario. Cada foto firma su autor solo en proyectos individuales; en grupales el header lista los autores.
- Vulnerabilidad de seguridad de Next.js 14.2.15: ya actualizado a ^14.2.35 (parcheada).
- Imágenes en formato WebP (quality 82, ~40-50% más livianas que JPG).

### Blockers/Concerns

(ninguno)

### Quick Tasks Completed

| # | Description | Date | Commit | Directory |
|---|-------------|------|--------|-----------|
| 001 | Revisa y ajusta el responsive (+ hamburger menu mobile + WebP) | 2026-05-24 | 4e953de | [001-revisa-y-ajusta-el-responsive](./quick/001-revisa-y-ajusta-el-responsive/) |
