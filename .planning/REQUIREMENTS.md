# REQUIREMENTS — Portafolio Web "El tiempo"

## v1 Requirements

### Contenido

- [ ] **CONT-01**: Mostrar las 12 fotografías del proyecto autoral en grilla, con crédito visible del autor por imagen
- [ ] **CONT-02**: Mostrar el statement del proyecto autoral "El tiempo" en la página principal
- [ ] **CONT-03**: Mostrar bios breves de los 4 integrantes con foto/avatar opcional (placeholders Lorem ipsum)
- [ ] **CONT-04**: Sección dedicada con trabajos del primer corte y autoría por imagen
- [ ] **CONT-05**: Sección dedicada con trabajos del segundo corte y autoría por imagen
- [ ] **CONT-06**: Header con navegación entre las tres vistas (autoral, primer corte, segundo corte)
- [ ] **CONT-07**: Footer con créditos del grupo y año

### Experiencia de Usuario

- [ ] **UX-01**: Lightbox al hacer click en cualquier foto, con navegación prev/next y cierre con ESC
- [ ] **UX-02**: Animaciones de fade-in/translate al scroll cuando una sección o imagen entra al viewport
- [ ] **UX-03**: Hover refinado en thumbnails (zoom sutil, transición de opacidad o detalle)
- [ ] **UX-04**: Diseño responsive funcional desde 320px hasta desktop ancho
- [ ] **UX-05**: Respetar `prefers-reduced-motion: reduce` (sin animaciones cuando el usuario lo pide)
- [ ] **UX-06**: Tipografía editorial con serif para títulos y sans para texto corrido
- [ ] **UX-07**: Paleta clara (blanco/crema, negro, gris suave) consistente

### Deploy

- [ ] **DEP-01**: Build estático compatible con GitHub Pages (`next export` / `output: 'export'`)
- [ ] **DEP-02**: Sitio accesible vía URL pública (GitHub Pages)
- [ ] **DEP-03**: GitHub Actions workflow para auto-deploy al hacer push a `main` (opcional pero recomendado)

### Documentación

- [ ] **DOC-01**: README con instrucciones de desarrollo local (npm install, npm run dev)
- [ ] **DOC-02**: README con guía paso a paso para deploy a GitHub Pages
- [ ] **DOC-03**: Convención clara de dónde subir las fotos (nombres de archivo, carpetas)
- [ ] **DOC-04**: Guía rápida para que cada integrante rellene su bio

## v2 (deferidos)

- Multiidioma (ES/EN) — el curso es en español, no necesario ahora
- Optimización avanzada de imágenes (sharp + next/image) — `unoptimized: true` en static export
- Animaciones complejas (parallax, scroll-driven) — fuera del scope de "Quick"
- SEO avanzado (OpenGraph dinámico) — meta básica es suficiente

## Out of Scope (no se hacen)

- **Login / autenticación** — sitio público
- **CMS / backend** — datos en archivos
- **Comentarios / redes sociales** — no es objetivo del entregable
- **Analytics** — privacidad y simplicidad académica
- **PWA / offline / service worker** — no es requisito

## Traceability

| Phase | Requirements |
|-------|--------------|
| 1. Setup Next.js + base | UX-04, UX-06, UX-07 |
| 2. Home: proyecto autoral | CONT-01, CONT-02, CONT-03, CONT-06, CONT-07 |
| 3. Cortes anteriores | CONT-04, CONT-05 |
| 4. Interacción y pulido | UX-01, UX-02, UX-03, UX-05 |
| 5. Deploy GitHub Pages | DEP-01, DEP-02, DEP-03, DOC-01, DOC-02, DOC-03, DOC-04 |
