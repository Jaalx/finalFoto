# PROJECT — Portafolio Web "El tiempo"

## What This Is

Portafolio web colectivo del grupo (4 integrantes) para acompañar el PDF del tercer corte del curso de fotografía. Muestra el proyecto autoral grupal "El tiempo" (12 fotos con autoría por imagen), trabajos previos (primer y segundo corte) y bios de los 4 integrantes.

El enlace al sitio se incluye dentro del PDF final como requisito obligatorio del entregable.

## Core Value

**Una página web ejecutable que muestra el trabajo fotográfico del grupo con autoría clara por imagen, lista para enlazarse desde el PDF de entrega.**

Si esta página funciona en GitHub Pages y el enlace abre correctamente con las fotos del grupo bien presentadas, el portafolio web cumple su función.

## Quien

- **Javier Alejandro Álvarez Marín** — 20202020028
- **Jose Jesús Céspedes Rivera** — 20211020118
- **Sofía Lozano Martínez** — 20211020088
- **Esteban Alexander Bautista Solano** — 20221020089

## El Proyecto Autoral

**Tema:** El tiempo.

Concepto flexible y profundo, explorado desde múltiples perspectivas: envejecimiento, relojes, rutinas, lugares vacíos, transiciones día/noche, objetos deteriorados, movimiento congelado. Todas las imágenes hablan del paso del tiempo, cada una desde un ángulo distinto, manteniendo coherencia visual y conceptual.

- 12 fotografías
- 3 por integrante (autoría individual marcada en el sitio)
- Statement común del proyecto

## Decisión Importante

⚠️ El curso pide portafolio web **individual** ("solo fotos de tu autoría"). El grupo eligió hacer **un sitio colectivo** con autoría por imagen. Decisión consciente del usuario; documentada para que cada integrante confirme la entrega con su docente o adicionalmente incluya el enlace en su PDF individual reconociendo la autoría compartida.

## Constraints

- **Stack:** Next.js + React + TypeScript + Tailwind CSS (elección del usuario)
- **Deploy:** GitHub Pages — debe ser sitio estático (`next.config.js` con `output: 'export'`)
- **Estética:** Minimalista claro / editorial (blanco/crema, serif para títulos, sensación revista impresa)
- **Interacción:** Lightbox al click, animaciones suaves al scroll, hover refinado — todo respetando `prefers-reduced-motion`
- **Plazo:** Tercer corte del semestre (entrega por WhatsApp con enlace funcional)
- **Fotos:** Cada integrante envía las suyas — la web arranca con placeholders nombrados por convención

## Requirements

### Validated

(None yet — sitio nuevo)

### Active

- [ ] **CONT-01**: Mostrar 12 fotografías del proyecto autoral con crédito por imagen
- [ ] **CONT-02**: Mostrar statement del proyecto autoral "El tiempo"
- [ ] **CONT-03**: Mostrar bios de los 4 integrantes (placeholders Lorem ipsum iniciales)
- [ ] **CONT-04**: Sección con trabajos del primer corte (autoría por imagen)
- [ ] **CONT-05**: Sección con trabajos del segundo corte (autoría por imagen)
- [ ] **UX-01**: Lightbox al hacer click en una foto, con navegación entre imágenes
- [ ] **UX-02**: Animaciones de fade-in al scroll en secciones e imágenes
- [ ] **UX-03**: Hover refinado en thumbnails (transición sutil)
- [ ] **UX-04**: Diseño responsive (móvil y desktop)
- [ ] **UX-05**: Respetar `prefers-reduced-motion` (cero animaciones si el usuario lo pide)
- [ ] **DEP-01**: Build estático compatible con GitHub Pages
- [ ] **DEP-02**: Enlace público funcional para enlazar desde el PDF
- [ ] **DOC-01**: README con guía de uso, dónde poner fotos, y comandos de deploy

### Out of Scope

- **Login / autenticación** — sitio público estático
- **CMS / backend** — los datos viven en archivos TS/JSON
- **Comentarios / interacción social** — no es necesario para el entregable
- **Multiidioma** — solo español
- **PWA / offline** — no es requisito
- **Analytics / tracking** — no es requisito (y mejor para el contexto académico)

## Key Decisions

| Decisión | Razón | Estado |
|----------|-------|--------|
| Next.js sobre HTML vanilla | Usuario lo eligió; queda como base extensible | ✓ Aceptada |
| Sitio colectivo en lugar de individual | Decisión del grupo; pendiente confirmar con docente | ⚠️ Pendiente confirmar |
| 3 fotos por integrante × 4 = 12 | Distribución equitativa de autoría | ✓ Aceptada |
| Bios con placeholder Lorem ipsum | Cada integrante completa la suya después | ✓ Aceptada |
| Estética editorial clara | Contraste con el género "portafolio oscuro genérico"; resalta tema "el tiempo" en sensación de revista impresa | ✓ Aceptada |

---

*Last updated: 2026-05-24 after initialization*
