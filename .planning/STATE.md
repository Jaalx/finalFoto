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

2026-05-24 — Las 5 fases construidas y validadas con build. GSD workflow completo. Próximos pasos manuales del usuario:
1. Subir fotos a `04-portafolio-web/public/img/{autoral,primer-corte,segundo-corte}/`
2. Editar bios reales en `04-portafolio-web/src/lib/data.ts`
3. Crear repo en GitHub y `git push`
4. Activar GitHub Pages en Settings → Pages → Source: GitHub Actions
5. Incluir URL del sitio en el PDF final

## Open Questions / Notes

- Usuario de GitHub: pendiente. El workflow detecta User Pages vs Project Pages automáticamente.
- Bios: placeholders Lorem ipsum por integrante. Cada uno completa la suya.
- Decisión sitio colectivo: confirmada por el usuario. Cada foto firma su autor en el lightbox y hover.
- Vulnerabilidad de seguridad de Next.js 14.2.15: ya actualizado a ^14.2.35 (parcheada).
