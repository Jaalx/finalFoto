---
phase: 001-revisa-y-ajusta-el-responsive
plan: 001
subsystem: ui-responsive
tags: [tailwind, responsive, mobile, webp, hamburger-menu, framer-motion]

dependency-graph:
  requires: []
  provides:
    - Mobile-first responsive layout en todos los componentes críticos
    - Hamburger menu accesible para navegación mobile
    - Imágenes WebP con ~30-50% menos peso
  affects:
    - Deploy: imágenes más ligeras reducen LCP en mobile
    - Futuras ediciones de componentes deben mantener el patrón flex-1 aspect-square

tech-stack:
  added: []
  patterns:
    - flex-1 aspect-square para grids fluidos en mobile sin scroll horizontal
    - sm:/md: breakpoint pattern para responsividad progresiva
    - opacity-90 sm:opacity-0 sm:group-hover:opacity-100 para reveal en mobile vs desktop

key-files:
  created:
    - 04-portafolio-web/src/components/MobileNav.tsx
  modified:
    - 04-portafolio-web/src/components/ui/team-showcase.tsx
    - 04-portafolio-web/src/components/AuthoralSequence.tsx
    - 04-portafolio-web/src/components/PhotoCard.tsx
    - 04-portafolio-web/src/components/Header.tsx
    - 04-portafolio-web/src/lib/data.ts
    - 04-portafolio-web/public/img/**/*.webp (63 archivos nuevos)
  deleted:
    - 04-portafolio-web/public/img/**/*.jpg (63 archivos eliminados)

decisions:
  - id: aspect-square-fluid
    choice: "flex-1 aspect-square para PhotoCards en mobile"
    alternatives: ["basis-[30%]", "grid con col fijas"]
    rationale: "aspect-square garantiza cuadrado perfecto sin importar el ancho disponible; flex-1 distribuye equitativamente entre 3 columnas"
  - id: caption-mobile-always-visible
    choice: "opacity-90 en mobile, sm:opacity-0 sm:group-hover en desktop"
    alternatives: ["tap-to-show JS", "siempre visible en todos los viewports"]
    rationale: "Touch devices no tienen hover; mostrar siempre en mobile es el patrón UX correcto. La distinción sm: preserva el hover editorial en desktop"
  - id: webp-quality-82
    choice: "quality=82, method=6 con Pillow"
    alternatives: ["quality=75 (más ahorro)", "quality=90 (mayor fidelidad)"]
    rationale: "82 es el sweet spot calidad/tamaño estándar; method=6 es el más lento/mejor compresión de Pillow"

metrics:
  duration: ~25 min
  completed: "2026-05-24"
  tasks-completed: 4
  tasks-total: 4
  images-converted: 63
  files-modified: 7
  files-created: 1
---

# Quick Task 001: Responsive Audit & Fixes — Summary

**One-liner:** Fixes de responsive en 4 componentes (fluid widths, touch targets, bento heights, hamburger nav) + conversión masiva JPG→WebP en 63 imágenes.

---

## Issues encontrados y cómo se resolvieron

### Task 1 — team-showcase.tsx (CRITICO)

| Issue | Síntoma | Fix aplicado | Línea aprox. |
|-------|---------|--------------|--------------|
| Anchos hardcodeados PhotoCards | Scroll horizontal en 320px (363px total) | `flex-1 aspect-square` en mobile, px fijos desde `md:` | ~53, 65, 77 |
| `overflow-x-auto` en contenedor | Ocultaba el bug en vez de corregirlo | Eliminado; sustituido por `w-full md:w-auto` | ~47 |
| Offset col2 `mt-[48px]` | Desperdicio de espacio vertical en mobile estrecho | `mt-3` en mobile, conservado `md:mt-[68px]` | ~60 |
| Offset col3 `mt-[22px]` | Desbalance en viewports angostos | `mt-1.5` en mobile, conservado `md:mt-[32px]` | ~72 |
| Role text `text-[7px]` | Ilegible, bajo WCAG mínimo | `text-[9px] md:text-[10px]` | ~288 |
| Bio padding `pl-[27px]` hardcoded | Posible overflow en 320px | `pl-6 md:pl-[27px]` | ~305 |
| MemberRow sin touch area | Target vertical ~24px (muy delgado) | `py-1.5 md:py-0` en contenedor | ~206 |
| Social icons `p-1` | Área tappable ~16px | `p-1.5 md:p-1` en los 4 `<a>` | ~242-283 |

### Task 2 — AuthoralSequence.tsx + PhotoCard.tsx (MENOR)

| Issue | Síntoma | Fix aplicado |
|-------|---------|--------------|
| BentoGrid `auto-rows-[140px]` | Tiles de bento aplastadas en mobile (tiles col-span-2 muy chatas) | `auto-rows-[160px]` mobile, `sm:auto-rows-[170px]`, `md:auto-rows-[180px]` conservado |
| BentoTile caption hover-only | En mobile (touch) los títulos nunca se ven | `opacity-90` por defecto; `sm:opacity-0 sm:group-hover:opacity-100` preserva desktop |
| PhotoCard figcaption sin wrap | Overflow posible con título largo + autor en viewport angosto | `flex-wrap gap-x-2 gap-y-1` en figcaption |

### Task 3 — MobileNav.tsx + Header.tsx (NUEVA FUNCIONALIDAD)

**Creado `MobileNav.tsx`** como client component con:
- Estado `open/close` con botón hamburguesa (22×22 SVG)
- Icono transiciona a X via clases Tailwind (`translate-y + rotate`)
- `useEffect` para Escape handler + `document.body.style.overflow = 'hidden'` cuando abierto
- Overlay semi-opaco (`bg-paper/95 backdrop-blur-sm`) que cierra al click
- Drawer animado (`framer-motion`: opacity + y: -8 → 0)
- `useReducedMotion()` respetado
- Links del drawer: `font-serif text-2xl` con `onClick={() => setOpen(false)}`
- Accesibilidad: `aria-label`, `aria-expanded` en el botón

**Modificado `Header.tsx`:**
- Nav desktop: añadido `hidden md:block`
- Añadido `<MobileNav />` al lado derecho del header (visible solo `<md`)

### Task 4 — Conversión WebP

- **63 imágenes** convertidas de `.jpg` a `.webp` con Pillow `quality=82, method=6`
- JPGs originales eliminados del repositorio
- `data.ts`: 18 reemplazos de `.jpg` → `.webp` (autores, autoralPhotos individuales, `makePhotos` helper, array sofia-jose)

---

## Archivos modificados — líneas exactas tocadas

### `team-showcase.tsx`
- L47: contenedor photo grid — eliminado `overflow-x-auto pb-1 md:pb-0`, añadido `w-full md:w-auto`
- L53: PhotoCard col1 className — `flex-1 aspect-square md:flex-none md:w-[155px] md:h-[165px]`
- L60: div col2 — `mt-3 sm:mt-[56px]` (era `mt-[48px]`)
- L65: PhotoCard col2 className — `flex-1 aspect-square md:flex-none md:w-[172px] md:h-[182px]`
- L72: div col3 — `mt-1.5 sm:mt-[26px]` (era `mt-[22px]`)
- L77: PhotoCard col3 className — `flex-1 aspect-square md:flex-none md:w-[162px] md:h-[172px]`
- L207: MemberRow div — añadido `py-1.5 md:py-0`
- L288: role `<p>` — `pl-6 md:pl-[27px] text-[9px] md:text-[10px]`
- L305: bio div — `pl-6 pr-2 md:pl-[27px]`
- L242/252/262/272: social `<a>` — `p-1.5 md:p-1` (los 4 iconos)

### `AuthoralSequence.tsx`
- L181: BentoGrid div — `auto-rows-[160px] sm:auto-rows-[170px]` (era `[140px] sm:[160px]`)
- L232: BentoTile caption span — `opacity-90 sm:opacity-0 sm:group-hover:opacity-100`

### `PhotoCard.tsx`
- L49: figcaption — `flex flex-wrap items-baseline gap-x-2 gap-y-1`

### `Header.tsx`
- L15: nav — añadido `hidden md:block`
- L28: añadido `<MobileNav />` import y render

### `data.ts`
- 18 ocurrencias de `.jpg` → `.webp` (global replace)

---

## Commits generados

| Hash | Tarea | Descripción |
|------|-------|-------------|
| `1ff5662` | Task 1 | fix(001-responsive): team-showcase widths fluid + touch targets + legibilidad mobile |
| `cb955d2` | Task 2 | fix(001-responsive): bento row heights + captions mobile + caption wrap |
| `e1ebf84` | Task 3 | feat(001-responsive): hamburger menu mobile con MobileNav |
| `4e953de` | Task 4 | feat(001-responsive): convierte imágenes JPG → WebP (quality 82) |

---

## Validación de compilación

- TypeScript check (`npx tsc --noEmit`) exitoso tras cada task — 0 errores
- Dev server (localhost:3001) mostraba `✓ Compiled in Xms` sin errores durante toda la ejecución

## Task 5 — Pendiente (checkpoint humano)

Task 5 es verificación visual manual en navegador. El orquestador la gestiona.

**Instrucciones para verificar:**
1. Abrir `http://localhost:3001` (dev server corriendo)
2. DevTools → Toggle device toolbar (Ctrl+Shift+M)
3. Probar iPhone SE (375x667): sin scroll horizontal, team grid en 3 col fluid, role text legible
4. Galaxy S8 (360x740): mismos checks
5. iPad Mini (768x1024): cards en dimensiones originales (155/172/162px), offsets 68px/32px preservados
6. Desktop 1280px: idéntico a versión aprobada
7. Mobile: tap en hamburguesa → drawer con 3 links font-serif grandes
8. Mobile: bento captions visibles permanentemente (opacity-90)
9. Navegar `/primer-corte` y `/segundo-corte`: Gallery grids funcionales

## Issues residuales / Notas

- Los `.jpg` en las fotos que el usuario aún no ha subido (autoral/01-12, etc.) ya tienen su placeholder de WebP esperándolos. Al subir fotos nuevas, deben subirse directamente como `.webp`.
- El hamburger icon usa inline SVG en lugar de react-icons para evitar dependencia adicional y tener control total de la animación de líneas.
- `navLinks` viene de `data.ts` — si se añaden secciones futuras, el MobileNav las recoge automáticamente.
