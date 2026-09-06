# Portafolio — Brandon Valenzuela Cubas

Portafolio web profesional, moderno y responsive para presentar el perfil académico y profesional de Brandon Valenzuela Cubas, estudiante de Ingeniería de Tecnologías de Información y Sistemas en la Universidad ESAN.

Diseñado para postular a distintas oportunidades en el área de Tecnologías de Información, con un perfil general en **tecnología, datos, procesos y desarrollo**, un tono neutral y enfocado en reclutadores.

## Tecnologías utilizadas

- **HTML5** — estructura semántica y accesible, Open Graph básico y meta tags SEO.
- **CSS3** — variables CSS, Grid, Flexbox, diseño responsive y `prefers-reduced-motion`.
- **JavaScript (Vanilla)** — menú hamburguesa, sección activa en el navbar, animaciones al hacer scroll con `IntersectionObserver` y renderizado de proyectos/certificaciones.
- **Fuente** — Inter (Google Fonts), con fallbacks de sistema.

Sin frameworks ni dependencias pesadas.

## Estructura del proyecto

```
/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── favicon.svg
│   └── documents/
│       └── CV-Brandon-Valenzuela-Cubas.pdf
└── README.md
```

## Secciones

Inicio (hero) · Sobre mí · Experiencia · Proyectos destacados · Tecnologías · Educación y certificaciones · Premios y logros · Contacto · Footer.

## Cómo ejecutarlo

No requiere instalación ni servidor. Opciones:

- **Local:** abre `index.html` con doble clic en tu navegador.
- **Servidor local (opcional):** si usas VS Code, instala *Live Server* y haz clic en "Go Live".
- **Python:** `python -m http.server` dentro de la carpeta del proyecto y abre `http://localhost:8000`.

## Cómo modificar proyectos

Las tarjetas de proyectos y certificaciones se generan desde `js/main.js`.

1. Abre `js/main.js` y localiza el arreglo `PROYECTOS`.
2. Para agregar un proyecto, descomenta la plantilla al final del arreglo y completa los campos (`titulo`, `anio`, `descripcion`, `tecnologias`, `logros`, `badge`, `imagen`, `url`, `github`, `publicacion`).
3. Guarda y recarga la página.

Campos opcionales que se pueden omitir si no aplican:

- `imagen` — ruta de una imagen en `assets/images/`. La tarjeta funciona sin ella.
- `url` — enlace del botón "Ver proyecto".
- `github` — enlace del botón "Código".
- `publicacion` — enlace del botón "Ver publicación".
- `logros` — lista con viñetas (usada en el proyecto IEMTRONICS).
- `badge` — etiqueta tipo `🥇 1.er Puesto`.

Para agregar la URL de una certificación, reemplaza `url: null` por el enlace correspondiente en el arreglo `CERTIFICACIONES`; al tener URL, la tarjeta mostrará "Ver certificado ↗".

## Cómo actualizar el CV

El CV se abre en una nueva pestaña desde Google Drive:

1. Abre `index.html` y reemplaza la URL del Drive en los tres botones "Descargar CV" (navbar y hero).
2. La URL usada debe ser la vista pública del archivo (`https://drive.google.com/file/d/ID/view`).

## Cómo publicarlo mediante GitHub Pages

1. Crea un repositorio en GitHub (si no existe todavía).
2. Sube los archivos del proyecto al repositorio:
   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```
3. Configura GitHub Pages:
   - Ve a **Settings → Pages** del repositorio.
   - En **Source**, elige `Deploy from a branch`.
   - Selecciona la rama `main` y carpeta `/ (root)`.
   - Guarda. Tu sitio quedará disponible en `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.
4. Opcional: actualiza `og:url` y `og:image` en `index.html` con la URL final del sitio publicado.

## Notas de personalización

- **Badge "Disponible para oportunidades profesionales":** se elimina borrando el elemento `<p class="hero-badge">` en `index.html`.
- **Tarjeta de resumen del hero:** se elimina borrando el `<aside class="hero-card">`.
- **Colores:** se ajustan en `:root` de `css/styles.css`, editando las variables `--color-primary`, `--color-accent`, etc.
- **Idiomas:** se editan en la sección "Sobre mí" de `index.html`.