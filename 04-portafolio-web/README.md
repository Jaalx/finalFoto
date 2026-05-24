# Portafolio web — El tiempo

Sitio estático del portafolio colectivo (4 integrantes) construido con **Next.js + TypeScript + Tailwind CSS**, publicado en **Netlify**.

Estética editorial clara, secuencia single-column con fotos destacadas, lightbox al click, animaciones suaves al scroll, hover refinado y respeto a `prefers-reduced-motion`.

## Páginas

- `/` — Proyecto autoral **"El tiempo"**: hero, statement, 12 fotografías en secuencia editorial con 4 destacadas (título + intención al lado), sección de autores con bio expandible al click.
- `/primer-corte` — 3 sub-proyectos: Javier individual, Sofía + Jose en pareja, Esteban individual.
- `/segundo-corte` — Serie grupal "Jardín Dorado" + actividad "Escenas urbanas en color" (4 sub-proyectos por integrante).

## Stack

| Pieza | Versión |
|---|---|
| Next.js | 14 (App Router, static export) |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| yet-another-react-lightbox | 3 |
| react-icons | 5 |

## Desarrollo local

```bash
cd 04-portafolio-web
npm install
npm run dev     # arranca en http://localhost:3000
```

## Build de producción

```bash
npm run build   # genera la carpeta out/ (sitio estático)
```

## Dónde poner las fotos

Las imágenes van en `public/img/`. Estructura cableada en `src/lib/data.ts`:

```
public/img/
├── autoral/                    → 12 fotos del proyecto "El tiempo"
│   └── 01.jpg ... 12.jpg
│
├── autores/                    → autorretratos (avatar de cada uno)
│   ├── jav.jpg
│   ├── jos.jpg
│   ├── sof.jpg
│   └── est.jpg
│
├── primer-corte/
│   ├── javier/01.jpg ... 07.jpg            → proyecto individual
│   ├── sofia-jose/01.jpg ... 20.jpg        → proyecto en pareja
│   └── esteban/01.jpg ... 07.jpg           → proyecto individual
│
└── segundo-corte/
    ├── jardin-dorado/01.jpg ... 06.jpg     → serie grupal de los 4
    └── escenas-urbanas/
        ├── javier/01.jpg ... 20.jpg        → color azul
        ├── sofia/                          → (pendiente)
        ├── jose/                           → (pendiente)
        └── esteban/                        → (pendiente)
```

Recomendaciones:
- Formato `.jpg` o `.webp`
- Lado largo 1600-2400px (suficiente para lightbox sin pesar de más)
- Comprimir con [Squoosh](https://squoosh.app) o `sharp-cli` si pesan mucho

Cuando falta una foto, el sitio muestra un placeholder rayado con el título. Cuando falta un sub-proyecto entero, muestra un bloque "Por entregar".

## Editar contenido

Todo lo editable vive en **`src/lib/data.ts`**:

| Qué quieres cambiar | Dónde |
|---|---|
| Bio de un integrante | `authors[id].shortBio` |
| Foto de perfil de un autor | `authors[id].image` |
| Redes sociales de un autor (opcional) | `authors[id].social` (descomenta y pega URL) |
| Statement del proyecto autoral | `projectAutoral.statement` (array de párrafos) |
| Lista de fotos del autoral + sus títulos | `autoralPhotos` |
| **Notas editoriales** ("por qué se hizo") | Campo `note` en `autoralPhotos` — solo las fotos con `note` salen como destacadas |
| Proyectos del primer corte | `primerCorteProjects` |
| Proyectos del segundo corte | `segundoCorteProjects` (incluye placeholders de colores) |

## Deploy a Netlify

### Opción A — Git connect (recomendado)

1. Sube el repo a GitHub, GitLab o Bitbucket.

2. En Netlify: **Add new site → Import an existing project** → conecta tu proveedor de Git → elige el repo.

3. Netlify lee `netlify.toml` en la raíz y autodetecta:
   - **Base directory:** `04-portafolio-web`
   - **Build command:** `npm run build`
   - **Publish directory:** `04-portafolio-web/out`
   - **Node:** `20`

   No tienes que tocar nada. Confirma y deploy.

4. URL inicial: `https://nombre-random.netlify.app`. Para cambiarla: **Site configuration → Change site name** → elige uno tipo `el-tiempo-portafolio.netlify.app`.

5. Cada push a `main` redepliega automáticamente.

### Opción B — Deploy manual (Netlify CLI)

```bash
npm install -g netlify-cli
cd 04-portafolio-web
npm run build
netlify deploy --prod --dir=out
```

La primera vez te pedirá login y crear el sitio.

### Dominio propio (opcional)

En Netlify: **Domain management → Add a custom domain** → instrucciones DNS. Si no tienes dominio, el `.netlify.app` funciona perfectamente para el entregable.

## Enlazar el sitio desde el PDF

Una vez publicado:
- URL: `https://[tu-sitio].netlify.app/`
- Incluye esta URL en el PDF final como hipervínculo cliclable en la sección del portafolio.

## Estructura del proyecto

```
04-portafolio-web/
├── public/img/                 → fotos (ver árbol arriba)
├── src/
│   ├── app/
│   │   ├── layout.tsx          → fonts (Fraunces serif, Inter sans), metadata
│   │   ├── globals.css         → estilos base + prefers-reduced-motion
│   │   ├── page.tsx            → home (proyecto autoral)
│   │   ├── primer-corte/page.tsx
│   │   └── segundo-corte/page.tsx
│   ├── components/
│   │   ├── Header.tsx          → navegación
│   │   ├── Footer.tsx          → créditos del grupo
│   │   ├── Hero.tsx            → título + dropcap del autoral
│   │   ├── Statement.tsx       → párrafos del statement
│   │   ├── AuthoralSequence.tsx → secuencia editorial del autoral (single-col, destacadas)
│   │   ├── Gallery.tsx         → grid + lightbox (client) — usado en cortes anteriores
│   │   ├── ProjectSection.tsx  → header (proyecto, modalidad, título, autores) + grid
│   │   ├── PhotoCard.tsx       → tarjeta con caption visible debajo
│   │   ├── FadeIn.tsx          → animación de scroll (framer-motion)
│   │   └── ui/
│   │       └── team-showcase.tsx → sección de autores con hover sincronizado + click-to-expand bio
│   └── lib/
│       ├── data.ts             → ÚNICA fuente de verdad
│       ├── paths.ts            → helper asset(path) para basePath dinámico
│       └── utils.ts            → cn() helper
├── netlify.toml                → config de deploy (en raíz del repo)
├── next.config.mjs             → output 'export' + basePath condicional
├── tailwind.config.ts          → paleta editorial + tipografías
└── package.json
```

## Solución de problemas

**El sitio carga pero las imágenes están rotas (placeholder rayado):**
Las fotos todavía no están en `public/img/` con el nombre exacto. Revisa el árbol de arriba.

**El sitio carga y un sub-proyecto dice "Por entregar":**
Ese proyecto no tiene fotos en su carpeta. Agrégalas y/o edita `data.ts` para llenar el array `photos` y cambiar `title` / `description`.

**El build falla con error de TypeScript:**
Probablemente editaste `data.ts` y un autor referenciado ya no existe. Verifica que cada `author:` apunte a `'jav'`, `'jos'`, `'sof'` o `'est'`.

**Las animaciones se sienten agresivas / con mareo:**
Activa "Reducir movimiento" en accesibilidad del SO. El sitio respeta `prefers-reduced-motion` y deshabilita transiciones.

**Build en Netlify falla con "command not found":**
Verifica que `package-lock.json` está commiteado. Netlify usa `npm ci` que requiere lockfile.

**Quiero volver a GitHub Pages:**
El `next.config.mjs` ya tiene soporte: define la env var `NEXT_PUBLIC_BASE_PATH=/nombre-repo` antes del build y configura GitHub Actions con esa env (workflow eliminado al migrar a Netlify pero se puede regenerar).
