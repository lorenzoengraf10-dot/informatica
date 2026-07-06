# Blog personal — proyecto de práctica

Blog mínimo para practicar publicación de contenido y nociones básicas de SEO.
No es un producto ni un servicio ofrecido a terceros: es un espacio propio de
práctica.

## Qué se practica acá

- **Estructura semántica**: un único `h1` por página, `article`, jerarquía de
  encabezados.
- **SEO básico**: `title` y `meta description` únicos en cada página, etiquetas
  Open Graph (`og:title`, `og:description`, `og:type`) para que se vea bien al
  compartir en redes sociales.
- **Organización de contenido**: un `index.html` que lista artículos, y una
  carpeta `articulos/` con una página por artículo (rutas relativas: `../css/`).

## Cómo agregar un artículo nuevo

1. Crear un archivo nuevo en `articulos/` (copiar `primer-post.html` como base).
2. Cambiar `title`, `meta description` y el contenido del `article`.
3. Agregar un `<li>` con el enlace en `index.html`.

## Pendiente (ver también `ROADMAP.md` general)

- `sitemap.xml` y `robots.txt` cuando el blog se publique en un dominio propio.
- Revisar accesibilidad (contraste de colores, tamaño de fuente).
- Eventualmente, apuntar un dominio propio y practicar CDN/DNS (Fase 4 del roadmap).
