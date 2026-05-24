---
phase: 001-revisa-y-ajusta-el-responsive
plan: 001
type: execute
wave: 1
depends_on: []
files_modified:
  - 04-portafolio-web/src/components/ui/team-showcase.tsx
  - 04-portafolio-web/src/components/AuthoralSequence.tsx
  - 04-portafolio-web/src/components/PhotoCard.tsx
  - 04-portafolio-web/src/components/Header.tsx
  - 04-portafolio-web/src/components/MobileNav.tsx
  - 04-portafolio-web/src/lib/data.ts
  - 04-portafolio-web/public/img/**/*.webp
autonomous: false

must_haves:
  truths:
    - "En viewport 320px (iPhone SE) ninguna sección genera scroll horizontal"
    - "El grid de fotos del equipo (team-showcase) cabe completo en 360px sin scroll horizontal"
    - "Todos los textos legibles tienen tamaño minimo 11px en mobile (no 7px)"
    - "Los touch targets clicables (MemberRow, social icons, BentoTile) son tappables comodamente con el pulgar en mobile"
    - "El bento grid de AuthoralSequence se ve balanceado en mobile sin tiles aplastadas"
    - "El diseño desktop (>=768px) se mantiene visualmente identico a la version actual aprobada"
  artifacts:
    - path: "04-portafolio-web/src/components/ui/team-showcase.tsx"
      provides: "Photo grid + names del equipo con dimensiones responsive fluidas"
      contains: "min-h o aspect-square con clases sin px hardcoded en mobile"
    - path: "04-portafolio-web/src/components/AuthoralSequence.tsx"
      provides: "Bento grid con row heights y captions responsive"
      contains: "auto-rows con tamaños mas generosos en mobile"
    - path: "04-portafolio-web/src/components/PhotoCard.tsx"
      provides: "Caption que envuelve sin overflow en mobile"
      contains: "flex-wrap o min-w-0 en figcaption"
  key_links:
    - from: "04-portafolio-web/src/components/ui/team-showcase.tsx"
      to: "Mobile viewport <=375px"
      via: "Dimensiones de PhotoCard recalculadas a fluid (% o aspect-square con basis)"
      pattern: "(basis-|flex-1|aspect-square|grid-cols-3)"
    - from: "04-portafolio-web/src/components/ui/team-showcase.tsx"
      to: "Tamaño minimo legible y tappable"
      via: "Role text >= 10px, social icons >= 14px con padding suficiente"
      pattern: "text-(\\[10px\\]|xs)"
---

<objective>
Auditar y corregir los issues responsive concretos detectados en el portafolio web `04-portafolio-web/`. El diseño desktop ya está aprobado y NO debe cambiar. Solo se ajusta lo que se rompe o se ve mal en tablet/mobile (<= 768px).

Purpose: Garantizar que el sitio funcione correctamente en mobile real (320px-414px) sin scroll horizontal, con texto legible y touch targets cómodos, antes de publicar.

Output: Tres componentes con clases Tailwind ajustadas para mobile, manteniendo intacta la estética editorial en desktop.
</objective>

<execution_context>
Ejecutar siguiendo el patrón estándar de execute-plan. Validar con `npm run build` y prueba manual en DevTools mobile emulation.
</execution_context>

<context>
@.planning/STATE.md
@04-portafolio-web/src/components/ui/team-showcase.tsx
@04-portafolio-web/src/components/AuthoralSequence.tsx
@04-portafolio-web/src/components/PhotoCard.tsx
@04-portafolio-web/tailwind.config.ts
</context>

<audit_summary>

Auditoría realizada antes de proponer fixes. Issues encontrados, agrupados por componente:

## team-showcase.tsx (CRITICO)

| Issue | Síntoma observable | Fix concreto |
|-------|--------------------|--------------|
| Anchos hardcodeados en PhotoCards (110+122+115 + gaps = ~363px) | En viewport 320px (iPhone SE) hay scroll horizontal interno; en 375px queda al filo, sin padding | Reemplazar `w-[110px] h-[120px]` etc. por sistema fluido: en mobile usar `flex-1 aspect-square` o `basis-[30%]` para que las 3 cards ocupen el ancho disponible proporcionalmente. Mantener px hardcoded solo a partir de `md:` |
| `overflow-x-auto pb-1` en contenedor padre | Permite el scroll horizontal en lugar de prevenirlo, ocultando el bug en lugar de corregirlo | Quitar `overflow-x-auto`; con widths fluidas no se necesita |
| Offsets verticales `mt-[48px] sm:mt-[56px] md:mt-[68px]` | En mobile (~360px) el offset de 48px en columna 2 desperdicia espacio vertical y desbalancea la composición de columnas más angostas | Escalar offsets: `mt-3 sm:mt-[56px] md:mt-[68px]` (col2) y `mt-1.5 sm:mt-[26px] md:mt-[32px]` (col3). Offset proporcional al tamaño |
| Role text `text-[7px] md:text-[10px]` | 7px es ilegible y bajo mínimos de accesibilidad WCAG | Cambiar a `text-[9px] md:text-[10px]` (mínimo legible, mantiene jerarquía visual). El 10px desktop NO cambia |
| Social icons `size={10}` + `p-1` = ~16px touch area | Touch target < 44px recomendado. Difícil de tappear con dedo | En mobile aumentar a `size={12}` con `p-1.5`, mantener `size={10}` desde `md:`. Resultado: ~24px área en mobile (mejorable, balance con estética minimal) |
| MemberRow click area = altura de línea de texto (~24px) | Touch target vertical muy delgado | Añadir `py-1.5 md:py-0` al contenedor `role="button"` para engrosar área tappable sin alterar layout desktop |
| Bio block `pl-[27px] pr-2 max-w-[460px]` | En 320px con padding parent puede comprimirse o overflowear | Cambiar `pl-[27px]` a `pl-6 md:pl-[27px]` (suficiente sangría sin px exactos) |

## AuthoralSequence.tsx (MENOR)

| Issue | Síntoma observable | Fix concreto |
|-------|--------------------|--------------|
| `auto-rows-[140px]` en mobile para bento | Tiles `col-span-2 row-span-1` quedan 140px de alto cubriendo todo el ancho — banner muy chato; tiles `col-span-1` cuadradas 140px en 320px-32px = ~144px (OK pero apretadas) | Cambiar a `auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[180px]`. Solo afecta mobile/sm; md ya está bien |
| `gap-3 md:gap-4` | OK en mobile pero los tiles pequeños quedan demasiado juntos | Mantener (no es crítico, evitar cambios innecesarios) — NO TOCAR |
| Hover-only caption en BentoTile `opacity-0 group-hover:opacity-100` | En mobile (touch) nunca se muestra el título de las fotos del bento | Añadir `sm:opacity-0 sm:group-hover:opacity-100` y por defecto en mobile `opacity-90` (siempre visible). Asegurarse que `bg-ink/55` siga contrastando. Resultado: mobile ve título siempre, desktop hover-revealed igual que antes |

## PhotoCard.tsx (MENOR)

| Issue | Síntoma observable | Fix concreto |
|-------|--------------------|--------------|
| `figcaption flex items-baseline gap-2` sin wrap | Si título es largo + autor + número, en sm (1 col, 320px) puede overflow o forzar truncado | Añadir `flex-wrap` para que envuelva limpio en mobile |
| Caption `text-[11px]` items | OK, ya es legible. No tocar |

## Componentes auditados SIN issues (no se modifican)

- **Header.tsx** — Nav responsive correcto, `hidden sm:inline` para label "Portafolio" funciona
- **Hero.tsx** — `text-[clamp(3rem,10vw,8rem)]` fluido perfecto
- **Statement.tsx** — `md:grid-cols-12` colapsa limpio
- **ProjectSection.tsx** — Grid 12-col colapsa correctamente, título `text-2xl md:text-3xl` apropiado
- **Footer.tsx** — `flex-wrap gap-x-8 gap-y-2` ya responsive
- **Gallery.tsx** — Grid `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` es la progresión correcta
- **globals.css** — Sin issues

</audit_summary>

<tasks>

<task type="auto">
  <name>Task 1: Fix team-showcase.tsx (widths fluid + offsets escalados + touch targets + texto legible)</name>
  <files>04-portafolio-web/src/components/ui/team-showcase.tsx</files>
  <action>
Aplicar las siguientes correcciones EXACTAS en `04-portafolio-web/src/components/ui/team-showcase.tsx`. NO refactorizar nada más, solo cambiar las clases indicadas:

1. **Contenedor del photo grid (línea ~47)** — quitar `overflow-x-auto pb-1 md:pb-0` y dejar simplemente `flex gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto`. Añadir `w-full md:w-auto` para que en mobile ocupe todo el ancho disponible.

2. **PhotoCard column 1 (línea ~53)** — cambiar className de:
   `w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]`
   a:
   `flex-1 aspect-square md:flex-none md:w-[155px] md:h-[165px]`

3. **PhotoCard column 2 (línea ~65)** — cambiar className de:
   `w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]`
   a:
   `flex-1 aspect-square md:flex-none md:w-[172px] md:h-[182px]`

4. **PhotoCard column 3 (línea ~77)** — cambiar className de:
   `w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]`
   a:
   `flex-1 aspect-square md:flex-none md:w-[162px] md:h-[172px]`

5. **Offset column 2 (línea ~60)** — cambiar `mt-[48px] sm:mt-[56px] md:mt-[68px]` por `mt-3 sm:mt-[56px] md:mt-[68px]`.

6. **Offset column 3 (línea ~72)** — cambiar `mt-[22px] sm:mt-[26px] md:mt-[32px]` por `mt-1.5 sm:mt-[26px] md:mt-[32px]`.

7. **MemberRow contenedor (línea ~206-209)** — añadir `py-1.5 md:py-0` al className para mejorar touch target vertical en mobile.

8. **Role text (línea ~288)** — cambiar `text-[7px] md:text-[10px]` por `text-[9px] md:text-[10px]`. Cambiar también `pl-[27px]` por `pl-6 md:pl-[27px]`.

9. **Bio block (línea ~305)** — cambiar `pl-[27px] pr-2` por `pl-6 pr-2 md:pl-[27px]`.

10. **Social icons size en mobile** — los 4 `<FaTwitter|FaLinkedinIn|FaInstagram|FaBehance size={10} />` quedan igual (size={10}) PERO cambiar el `<a>` que los envuelve de `p-1` a `p-1.5 md:p-1` (incrementa área tappable en mobile sin agrandar el icono visualmente).

NO tocar lógica JS (hover, expand, click handlers). NO tocar estructura de componentes. Solo classNames y un atributo en cada caso.
  </action>
  <verify>
- `npm run build` exitoso desde `04-portafolio-web/`
- DevTools mobile emulator iPhone SE (375x667): el photo grid del equipo cabe sin scroll horizontal y las 3 columnas se reparten el ancho proporcionalmente
- Galaxy S8 (360x740) y iPhone 12 (390x844): mismo resultado
- Role text legible (no 7px) en mobile
- En desktop (>=768px) las cards de equipo lucen IDÉNTICAS a antes (155x165 / 172x182 / 162x172 px con sus offsets originales)
  </verify>
  <done>
- team-showcase.tsx renderiza sin scroll horizontal en viewport 320px-414px
- PhotoCards mobile son cuadradas (aspect-square) ocupando el ancho disponible
- Offsets verticales proporcionales en mobile (3px / 1.5px) y conservados en md+ (68px / 32px)
- Role text >= 9px en mobile, 10px en desktop
- Desktop intacto: dimensiones exactas en px conservadas desde el breakpoint md
  </done>
</task>

<task type="auto">
  <name>Task 2: Fix AuthoralSequence.tsx (bento row heights + captions visibles en mobile) y PhotoCard.tsx (caption wrap)</name>
  <files>04-portafolio-web/src/components/AuthoralSequence.tsx, 04-portafolio-web/src/components/PhotoCard.tsx</files>
  <action>
**En `04-portafolio-web/src/components/AuthoralSequence.tsx`:**

1. **BentoGrid auto-rows (línea ~181)** — cambiar:
   `auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px]`
   por:
   `auto-rows-[160px] sm:auto-rows-[170px] md:auto-rows-[180px]`
   (solo sube las dos primeras franjas; md queda igual).

2. **BentoTile caption (línea ~231-234)** — cambiar className del `<span>` del título de:
   `absolute bottom-2 left-2 text-[10px] uppercase tracking-editorial text-paper bg-ink/55 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`
   a:
   `absolute bottom-2 left-2 text-[10px] uppercase tracking-editorial text-paper bg-ink/55 px-2 py-1 rounded-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300`
   (mobile siempre visible al 90%, desktop conserva el hover-reveal).

**En `04-portafolio-web/src/components/PhotoCard.tsx`:**

3. **figcaption (línea ~49)** — cambiar:
   `flex items-baseline gap-2 text-[11px] uppercase tracking-editorial text-muted`
   por:
   `flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[11px] uppercase tracking-editorial text-muted`
   (permite wrap limpio si título largo + autor no caben en una línea).

NO tocar nada más en estos archivos. NO modificar componentes Frame, Placeholder ni Lightbox.
  </action>
  <verify>
- `npm run build` exitoso desde `04-portafolio-web/`
- DevTools mobile (iPhone SE 375px): bento grid renderiza con tiles 160px de alto, títulos de fotos visibles permanentemente al 90% opacity
- Desktop (>=640px sm): comportamiento idéntico al anterior — títulos aparecen solo en hover
- Gallery: con un título largo en cualquier PhotoCard, el caption wrap-ea sin overflow horizontal
  </verify>
  <done>
- BentoGrid mobile usa `auto-rows-[160px]` (no 140px aplastado)
- Captions del bento visibles en mobile sin hover, hover-only en desktop preservado
- figcaption de PhotoCard envuelve en múltiples líneas si es necesario sin causar overflow
  </done>
</task>

<task type="auto">
  <name>Task 3: Hamburger menu en Header.tsx para navegación mobile</name>
  <files>04-portafolio-web/src/components/Header.tsx, 04-portafolio-web/src/components/MobileNav.tsx</files>
  <action>
El Header actual muestra los 3 links de nav en línea (Autoral / Primer corte / Segundo corte). En mobile (<640px) los links se ven apretados y no hay affordance clara de navegación. Añadir hamburger menu para mobile, conservando nav inline en desktop.

**Paso 1: Crear nuevo client component `MobileNav.tsx`:**

Crear archivo `04-portafolio-web/src/components/MobileNav.tsx` con:

```tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { href } from '@/lib/paths';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Cierra el menu al cambiar de ruta (escapes accidentales)
  // y al presionar Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    // bloquear scroll del body cuando el drawer está abierto
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="6" x2="19" y2="6" className={cn('transition-transform origin-center', open && 'translate-y-[5px] rotate-45')} />
          <line x1="3" y1="11" x2="19" y2="11" className={cn('transition-opacity', open && 'opacity-0')} />
          <line x1="3" y1="16" x2="19" y2="16" className={cn('transition-transform origin-center', open && '-translate-y-[5px] -rotate-45')} />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-paper/95 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.nav
            key="drawer"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-[60px] z-50 bg-paper border-t border-rule px-6 py-8"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-2xl text-ink/90 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
```

**Paso 2: Modificar `Header.tsx`:**

En el `<nav>` actual (que muestra los links en `<ul>` inline), añadir `hidden md:block` al `<nav>` desktop y renderizar `<MobileNav />` al lado para que aparezca solo en mobile.

Resultado:
```tsx
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { href } from '@/lib/paths';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="max-w-page mx-auto px-6 py-5 flex items-center justify-between">
        <Link href={href('/')} className="group inline-flex items-baseline gap-3">
          <span className="font-serif text-lg tracking-tight">El tiempo</span>
          <span className="text-[10px] uppercase tracking-editorial text-muted hidden sm:inline">
            Portafolio
          </span>
        </Link>

        {/* Desktop nav (md+) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs uppercase tracking-editorial">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={href(link.href)}
                  className="text-ink/70 hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav (<md) */}
        <MobileNav />
      </div>
    </header>
  );
}
```

NO cambiar ninguna otra parte del Header (logo, estructura, padding desktop intacto).
  </action>
  <verify>
- `npm run build` exitoso desde `04-portafolio-web/`
- En desktop (>=768px) el Header se ve EXACTAMENTE igual que antes (nav inline con 3 links)
- En mobile (<768px) los 3 links desaparecen, aparece el botón hamburguesa a la derecha
- Tap en hamburguesa abre overlay full-screen con links grandes (font-serif text-2xl)
- Click en un link cierra el menú y navega
- ESC cierra el menú
- Click en el overlay cierra el menú
- Body scroll está bloqueado mientras el menú está abierto
- El icono hamburguesa se transforma en X cuando está abierto
  </verify>
  <done>
- MobileNav.tsx creado como client component con state, Escape handler y body scroll lock
- Header.tsx renderiza nav desktop (hidden md:block) + MobileNav (md:hidden)
- Hamburger icon animado con transición a X (con prefers-reduced-motion respetado)
- Navegación mobile funcional, accesible (aria-label, aria-expanded) y desktop intacto
  </done>
</task>

<task type="auto">
  <name>Task 4: Convertir fotos JPG → WebP y actualizar referencias</name>
  <files>04-portafolio-web/public/img/**/*.webp, 04-portafolio-web/src/lib/data.ts</files>
  <action>
Convertir todas las fotos `.jpg` del sitio a `.webp` para reducir peso (~30-50%) manteniendo calidad. WebP tiene soporte universal en browsers modernos (Safari 14+, Chrome 23+, Firefox 65+).

**Paso 1: Conversión con Python + Pillow (ya disponible):**

Desde la raíz del proyecto (`/c/Users/Javier Álvarez/dev/proyecto foto`), ejecutar:

```bash
python -c "
from PIL import Image
import os, glob

BASE = '04-portafolio-web/public/img'
total_before = 0
total_after = 0
count = 0

for jpg in glob.glob(f'{BASE}/**/*.jpg', recursive=True):
    webp = jpg[:-4] + '.webp'
    if os.path.exists(webp):
        continue
    img = Image.open(jpg).convert('RGB')
    img.save(webp, 'WEBP', quality=82, method=6)
    size_jpg = os.path.getsize(jpg)
    size_webp = os.path.getsize(webp)
    total_before += size_jpg
    total_after += size_webp
    count += 1

print(f'{count} archivos convertidos')
print(f'Antes: {total_before/1024/1024:.2f} MB')
print(f'Despues: {total_after/1024/1024:.2f} MB')
print(f'Ahorro: {(1 - total_after/total_before)*100:.1f}%' if total_before else 'n/a')

# Eliminar los JPG originales DESPUES de confirmar que sus WebP existen
removed = 0
for jpg in glob.glob(f'{BASE}/**/*.jpg', recursive=True):
    webp = jpg[:-4] + '.webp'
    if os.path.exists(webp):
        os.remove(jpg)
        removed += 1
print(f'{removed} JPG originales eliminados')
"
```

**Paso 2: Actualizar `src/lib/data.ts`:**

Reemplazar TODAS las ocurrencias de `.jpg` por `.webp` en data.ts. Específicamente:
- `image: '/img/autores/jav.jpg'` → `image: '/img/autores/jav.webp'` (los 4 autores)
- `src: '/img/autoral/01.jpg'` → `src: '/img/autoral/01.webp'` (las 12 fotos del autoral)
- En el helper `makePhotos`: `src: \`/img/${folder}/${n}.jpg\`` → `src: \`/img/${folder}/${n}.webp\``
- El segundo array de sofia-jose (jos): `src: \`/img/primer-corte/sofia-jose/${n}.jpg\`` → `.webp`

Usar `Edit` con `replace_all: true` para reemplazar `.jpg` por `.webp` globalmente en data.ts (verificar primero que no haya otros usos de `.jpg` que deban quedarse).

NO modificar ningún otro archivo. Los componentes (PhotoCard, BentoTile, Frame, etc.) usan `asset(photo.src)` que ya consume la ruta desde data.ts, no necesitan cambios.
  </action>
  <verify>
- Ningún `.jpg` queda en `04-portafolio-web/public/img/` (todo es `.webp`)
- `data.ts` no contiene ninguna referencia a `.jpg`
- `npm run build` exitoso desde `04-portafolio-web/`
- El sitio carga las imágenes correctamente en el browser (sin 404s en console)
- Peso total de `public/img/` reducido significativamente (verificar con `du -sh`)
  </verify>
  <done>
- Todas las imágenes están en formato WebP con quality 82
- JPG originales eliminados del repo
- data.ts referencia rutas `.webp`
- Build exitoso sin warnings
- Sitio funciona idéntico visualmente, con menos peso de transferencia
  </done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 5: Verificación visual responsive en navegador real</name>
  <what-built>
Cambios aplicados a 3 componentes:
- `team-showcase.tsx`: widths fluidas (aspect-square + flex-1) en mobile, offsets escalados, role text 9px, touch targets engordados, padding sin px hardcoded
- `AuthoralSequence.tsx`: bento auto-rows 160px en mobile, captions visibles en mobile, hover-reveal en desktop
- `PhotoCard.tsx`: figcaption con flex-wrap
  </what-built>
  <how-to-verify>
1. Desde `04-portafolio-web/` correr `npm run dev`
2. Abrir `http://localhost:3000` en Chrome/Firefox
3. Abrir DevTools → Toggle device toolbar (Ctrl+Shift+M)
4. Probar estos viewports SECUENCIALMENTE:
   - **iPhone SE (375x667)**: scrollear la home completa. NO debe haber scroll horizontal en NINGUNA sección. Hacer scroll hasta "Quienes miran" — las 9 fotos del equipo deben caber en 3 columnas sin scroll lateral. Los nombres a la derecha deben leerse claramente. El role text bajo cada nombre debe ser legible (no diminuto).
   - **Galaxy S8 (360x740)**: igual chequeo, especialmente que team grid se vea balanceado.
   - **iPad Mini (768x1024)**: verificar que SE MANTIENE el diseño desktop aprobado — cards de equipo en sus dimensiones originales (155x165 / 172x182 / 162x172 px) con offsets de 68px y 32px.
   - **Desktop 1280px**: idéntico a la versión actual aprobada — sin cambios visuales perceptibles.
5. En mobile, hacer tap en un nombre del equipo → debe abrirse la bio (touch target debe responder cómodo).
6. En mobile, hacer scroll a la sección "Resto de la serie" (bento) → los títulos de las fotos deben verse SIEMPRE (overlay bg-ink/55 al 90%).
7. Navegar a `/primer-corte` y `/segundo-corte` → grids de Gallery deben funcionar correctamente en mobile.

Si algo se ve mal, describir qué viewport y qué componente.
  </how-to-verify>
  <resume-signal>Type "approved" si todo se ve correcto, o describir issues encontrados con viewport + componente para iterar</resume-signal>
</task>

</tasks>

<verification>
- `npm run build` exitoso (3 páginas estáticas: `/`, `/primer-corte`, `/segundo-corte`)
- En viewports 320px-414px ninguna sección genera scroll horizontal
- team-showcase grid de fotos ocupa el ancho completo con 3 columnas fluid en mobile
- Bento grid de AuthoralSequence muestra títulos en mobile (always-on), hover-reveal en desktop
- Touch targets (MemberRow, social icons) más cómodos en mobile sin cambiar look desktop
- Desktop (>=768px) visualmente idéntico a la versión aprobada
</verification>

<success_criteria>
- Sin scroll horizontal en mobile (probado en iPhone SE 375px y Galaxy S8 360px)
- Todos los textos legibles tienen al menos 9px en mobile
- Bento grid mobile con tiles de 160px alto (no 140px aplastado)
- Captions del bento siempre visibles en mobile, hover en desktop preservado
- Desktop sin cambios visuales perceptibles
- Build exitoso sin errores ni warnings nuevos
</success_criteria>

<output>
After completion, create `.planning/quick/001-revisa-y-ajusta-el-responsive/001-SUMMARY.md` documentando:
- Issues encontrados y cómo se resolvieron (referencia a la tabla de audit_summary)
- Archivos modificados con líneas exactas tocadas
- Viewports probados y resultado
- Cualquier issue residual (si lo hubiere) para seguimiento
</output>
