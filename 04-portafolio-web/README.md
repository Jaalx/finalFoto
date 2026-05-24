# Portafolio web — GitHub Pages

Sitio web personal con **solo las fotos de autoría propia**.

## Requisitos

- Formato página web
- Solo fotos de tu autoría
- Enlace **funcional** (ejecutable) dentro del PDF final
- Recomendado: GitHub Pages (`usuario.github.io`)

## Opciones de implementación

### Opción 1 — HTML/CSS a mano (este template)
Ya tienes `index.html` listo. Edita y sube.

### Opción 2 — Herramientas IA
- v0.dev (Vercel)
- bolt.new
- Lovable
- Pídeles "portafolio fotográfico minimalista"

### Opción 3 — Generadores estáticos
- Astro + tema de portafolio
- Eleventy
- Hugo (tema photogallery)

## Deploy a GitHub Pages

```bash
# 1. Crear repo en GitHub con nombre: tu-usuario.github.io
# 2. Desde esta carpeta:
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
git push -u origin main

# El sitio estará en: https://TU-USUARIO.github.io
```

## Estructura

```
04-portafolio-web/
├── index.html          → página principal
└── assets/
    ├── css/
    │   └── styles.css  → estilos
    └── img/            → todas las fotos del portafolio
```
