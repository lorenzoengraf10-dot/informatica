# Roadmap de aprendizaje

Plan de estudio autodidacta, organizado por fases. Cada fase se apoya en un
proyecto real y concreto, no en ejercicios sueltos sin contexto.

## Fase 1 — Fundamentos de HTML, CSS y JavaScript

Proyecto de apoyo: [`aprender/`](aprender/) (18 lecciones interactivas con
solución sugerida) y `proyectos-practica/pagina-pruebas/`.

- [x] Estructura semántica de HTML (`header`, `main`, `section`, `footer`, etc.).
- [x] HTML: listas, tablas, formularios completos, imágenes y accesibilidad (`alt`).
- [x] CSS: modelo de caja, Flexbox, Grid, diseño responsive (media queries),
      transiciones y estados (`:hover`).
- [x] JavaScript: variables, funciones, condicionales, arrays y sus métodos
      (`forEach`, `filter`), objetos, DOM, eventos y formularios, JSON,
      `localStorage`, manejo de errores (`try/catch`).
- [ ] Resolver los 18 desafíos de `aprender/` sin mirar la solución sugerida
      antes de intentarlo (usarla para comparar, no para copiar directo).
- [ ] Practicar accesibilidad más a fondo (contraste de colores, navegación
      solo con teclado).

## Fase 2 — Organización de proyectos y control de versiones

- [x] Un repositorio por proyecto, con README explicando qué es y cómo se usa.
- [x] Registrar cambios y decisiones (`CHANGELOG.md`, `DECISIONES.md`) además del código.
- [ ] Practicar ramas (`branch`) y pull requests incluso trabajando solo, para
      acostumbrarse al flujo antes de programar en equipo.
- [ ] Escribir al menos un test automatizado simple (aunque sea manual al principio,
      registrar "casos de prueba" por escrito).

## Fase 3 — Backend, PHP y bases de datos

- [ ] Armar un backend simple en PHP que responda JSON ante pedidos GET/POST.
- [ ] Conectar ese backend a una base de datos (empezar con SQLite, más simple que
      MySQL para practicar en la propia computadora).
- [ ] Migrar el panel de gestión de Productos Patagónicos de `localStorage` a este
      backend.
- [ ] Entender qué es una inyección SQL y por qué se usan consultas preparadas.

## Fase 4 — Dominio, DNS y CDN

- [ ] Entender qué hace cada tipo de registro DNS (A, CNAME, MX, TXT).
- [ ] Apuntar un dominio de prueba (o subdominio gratuito) a `pagina-pruebas`.
- [ ] Entender qué es un CDN y para qué sirve (latencia, caché de contenido estático).
- [ ] Publicar `blog-personal` detrás de ese dominio y revisar tiempos de carga
      antes/después de sumar CDN.

## Fase 5 — Contenido, SEO y publicación

Proyecto de apoyo: `proyectos-practica/blog-personal/`.

- [ ] Escribir contenido propio (no de relleno) y publicarlo.
- [ ] Etiquetas `title` y `meta description` únicas por página.
- [ ] Estructura de encabezados (`h1` único por página, jerarquía `h2`/`h3`).
- [ ] `sitemap.xml` y `robots.txt` básicos.
- [ ] Revisar cómo se ve la página compartida en redes sociales (metadatos Open Graph).

## Fase 6 — Seguridad en capas

Esta fase se hace en paralelo con Productos Patagónicos cuando ese proyecto llegue
a tener un backend real expuesto en internet.

- [ ] HTTPS en todos los dominios propios.
- [ ] Cabeceras de seguridad básicas (CSP, X-Content-Type-Options).
- [ ] Firewall / reglas de un CDN (WAF).
- [ ] Backups automáticos de la base de datos.
- [ ] Registro de qué se protegió y por qué, en `BITACORA.md`.

## Cómo avanzar sin ansiedad

- No hay fecha límite para terminar una fase.
- Una fase se considera "en progreso" mientras se sigan anotando entradas nuevas en
  `BITACORA.md` sobre ella, no hace falta terminarla al 100% antes de anotar algo
  de la siguiente si surge la curiosidad.
- El objetivo no es "tener todo listo", es entender cada pieza y poder explicar por
  qué se hizo de una forma y no de otra.
