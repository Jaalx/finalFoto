# Portafolio web — El tiempo

Sitio estático del portafolio colectivo (4 integrantes) construido con **Next.js + TypeScript + Tailwind CSS**, publicado en **GitHub Pages**.

Estética editorial clara, lightbox al click, animaciones suaves al scroll, hover refinado y respeto a `prefers-reduced-motion`.

## Páginas

- `/` — Proyecto autoral "El tiempo" (12 fotos + statement + bios de los 4 integrantes)
- `/primer-corte` — Trabajos del primer corte
- `/segundo-corte` — Trabajos del segundo corte

## Stack

| Pieza | Versión |
|---|---|
| Next.js | 14 (App Router, static export) |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| yet-another-react-lightbox | 3 |

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

Las imágenes van en `public/img/`. El sitio espera estas rutas (ya cableadas en `src/lib/data.ts`):

```
public/img/
├── autoral/
│   ├── 01.jpg  → Javier
│   ├── 02.jpg  → Javier
│   ├── 03.jpg  → Javier
│   ├── 04.jpg  → Jose
│   ├── 05.jpg  → Jose
│   ├── 06.jpg  → Jose
│   ├── 07.jpg  → Sofía
│   ├── 08.jpg  → Sofía
│   ├── 09.jpg  → Sofía
│   ├── 10.jpg  → Esteban
│   ├── 11.jpg  → Esteban
│   └── 12.jpg  → Esteban
├── primer-corte/
│   └── 01.jpg ... 06.jpg
└── segundo-corte/
    └── 01.jpg ... 06.jpg
```

Recomendaciones:
- Formato `.jpg` o `.webp`
- Lado largo de 1600-2400px (suficiente para lightbox sin que el sitio pese demasiado)
- Comprimir con [Squoosh](https://squoosh.app) o `sharp-cli`

Mientras una imagen no exista, el sitio muestra un placeholder rayado con el título de la foto — útil para ver el layout antes de subir el material final.

## Cambiar las bios y los créditos

Todo se edita en un solo archivo: **`src/lib/data.ts`**

- `authors` — nombre, código y bio breve de cada integrante
- `projectAutoral.statement` — array de párrafos del statement (el primero hace el hero, el resto bajan a la sección statement)
- `autoralPhotos`, `primerCortePhotos`, `segundoCortePhotos` — listas de fotos con su autor

Cada integrante puede rellenar **su propia bio** reemplazando el Lorem ipsum del entry correspondiente en `authors`.

## Deploy a GitHub Pages

### Opción A — Auto-deploy con GitHub Actions (recomendado)

Ya hay un workflow en `.github/workflows/deploy.yml` que builda y publica al hacer push.

1. Crear repo en GitHub. Dos opciones:
   - **User Pages**: repo llamado `TU-USUARIO.github.io` → sitio en `https://TU-USUARIO.github.io`
   - **Project Pages**: repo con otro nombre, por ejemplo `portafolio-tiempo` → sitio en `https://TU-USUARIO.github.io/portafolio-tiempo`

2. Desde la raíz del proyecto (`proyecto foto/`, no este subdirectorio):

   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: GitHub Actions**

4. Hacer push a `main`. El workflow buildea y deploya. El sitio queda en la URL que GitHub te dará.

   El workflow detecta automáticamente si es User Pages (`TU-USUARIO.github.io`) o Project Pages y ajusta el `basePath` por ti.

### Opción B — Deploy manual

```bash
cd 04-portafolio-web
NEXT_PUBLIC_BASE_PATH=/nombre-del-repo npm run build
# Sube el contenido de out/ a la rama gh-pages, o publícalo donde quieras
```

Si el repo es `TU-USUARIO.github.io`, omite la env var:

```bash
npm run build
```

## Enlazar el sitio desde el PDF

Una vez publicado, el sitio tiene URL pública (`https://TU-USUARIO.github.io/...`). Inclúyela en el PDF final como hipervínculo cliclable en la sección del portafolio.

## Estructura del proyecto

```
04-portafolio-web/
├── public/                 → assets estáticos (fotos, favicon)
│   └── img/
│       ├── autoral/
│       ├── primer-corte/
│       └── segundo-corte/
├── src/
│   ├── app/
│   │   ├── layout.tsx      → layout raíz (fonts, metadata)
│   │   ├── page.tsx        → home (proyecto autoral)
│   │   ├── globals.css     → estilos base + prefers-reduced-motion
│   │   ├── primer-corte/page.tsx
│   │   └── segundo-corte/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Statement.tsx
│   │   ├── Gallery.tsx     → grid + lightbox (client)
│   │   ├── PhotoCard.tsx   → tarjeta con crédito al hover
│   │   ├── BioSection.tsx
│   │   └── FadeIn.tsx      → animación al scroll (client)
│   └── lib/
│       ├── data.ts         → ÚNICA fuente de verdad: autores, fotos, statement
│       └── paths.ts        → helper para basePath en GitHub Pages
├── next.config.mjs         → output: 'export' + basePath dinámico
├── tailwind.config.ts      → paleta editorial + tipografías
└── package.json
```

## Solución de problemas

**El sitio carga pero las imágenes están rotas (placeholder rayado):**
Las fotos todavía no están subidas a `public/img/`. Súbelas con los nombres exactos listados arriba.

**El build falla con error de TypeScript:**
Probablemente editaste `data.ts` y dejaste un autor referenciado que ya no existe. Revisa que todos los `author:` en los arrays apunten a `'jav'`, `'jos'`, `'sof'` o `'est'`.

**El sitio carga en GitHub Pages pero los enlaces internos rompen:**
El `basePath` está mal. Si es Project Pages (repo no llamado `usuario.github.io`), el workflow lo maneja automáticamente. Si deployas manualmente, exporta `NEXT_PUBLIC_BASE_PATH=/nombre-repo` antes de `npm run build`.

**Las animaciones se sienten agresivas / con mareo:**
Activa "Reducir movimiento" en las preferencias de accesibilidad del SO. El sitio respeta `prefers-reduced-motion` y deshabilita transiciones y fade-ins.
