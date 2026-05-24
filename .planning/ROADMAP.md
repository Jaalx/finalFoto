# ROADMAP — Portafolio Web "El tiempo"

5 fases | 18 requisitos mapeados | Coverage 100%

## Phase Summary

| # | Fase | Goal | Requirements | Success Criteria |
|---|------|------|--------------|------------------|
| 1 | Setup Next.js + base | Tener un proyecto Next.js + Tailwind funcionando con layout editorial básico | UX-04, UX-06, UX-07 | 3 |
| 2 | Home: proyecto autoral | Página principal con statement + 12 fotos del proyecto "El tiempo" + bios de los 4 integrantes | CONT-01, CONT-02, CONT-03, CONT-06, CONT-07 | 4 |
| 3 | Cortes anteriores | Subpáginas con trabajos del primer y segundo corte, navegables desde el header | CONT-04, CONT-05 | 3 |
| 4 | Interacción y pulido | Lightbox, animaciones al scroll, hover refinado, accesibilidad de motion | UX-01, UX-02, UX-03, UX-05 | 4 |
| 5 | Deploy GitHub Pages | Sitio publicado en URL pública lista para enlazar desde el PDF | DEP-01, DEP-02, DEP-03, DOC-01, DOC-02, DOC-03, DOC-04 | 4 |

---

## Phase 1: Setup Next.js + base

**Goal:** Tener un proyecto Next.js + Tailwind funcionando con layout editorial básico.

**Requirements:** UX-04, UX-06, UX-07

**Success criteria:**
1. `npm run dev` arranca el sitio en `localhost:3000` sin errores
2. Tailwind aplica estilos (verificable con una clase utilitaria visible)
3. Tipografía editorial cargada: serif para títulos, sans para body, paleta clara configurada

---

## Phase 2: Home: proyecto autoral

**Goal:** Página principal con statement + 12 fotos del proyecto "El tiempo" + bios de los 4 integrantes.

**Requirements:** CONT-01, CONT-02, CONT-03, CONT-06, CONT-07

**Success criteria:**
1. Hero con título del proyecto y nombre del grupo visible al cargar
2. Statement renderizado debajo del hero con el texto del proyecto
3. Grilla con 12 placeholders nombrados (01.jpg–12.jpg) y crédito visible por imagen
4. 4 bios renderizadas (una por integrante) con Lorem ipsum y nombre completo

---

## Phase 3: Cortes anteriores

**Goal:** Subpáginas navegables con trabajos del primer y segundo corte.

**Requirements:** CONT-04, CONT-05

**Success criteria:**
1. Header con links: Autoral / Primer corte / Segundo corte funcionan
2. `/primer-corte` y `/segundo-corte` cargan con grilla y autoría por imagen
3. Navegación entre páginas mantiene estilo consistente

---

## Phase 4: Interacción y pulido

**Goal:** Lightbox, animaciones al scroll, hover refinado, accesibilidad de motion.

**Requirements:** UX-01, UX-02, UX-03, UX-05

**Success criteria:**
1. Click en una foto abre lightbox con prev/next funcionales; ESC cierra
2. Secciones e imágenes hacen fade-in al entrar en viewport
3. Hover en thumbnails tiene transición sutil (no agresiva)
4. Con `prefers-reduced-motion: reduce` activo, no hay animaciones de scroll/transición

---

## Phase 5: Deploy GitHub Pages

**Goal:** Sitio publicado en URL pública lista para enlazar desde el PDF.

**Requirements:** DEP-01, DEP-02, DEP-03, DOC-01, DOC-02, DOC-03, DOC-04

**Success criteria:**
1. `npm run build` genera `out/` sin errores con `output: 'export'`
2. README explica los 3 comandos clave: install, dev, build/deploy
3. Workflow `.github/workflows/deploy.yml` despliega al hacer push a `main` (o documentación clara para deploy manual)
4. README incluye convención de archivos de fotos y cómo cada integrante rellena su bio
