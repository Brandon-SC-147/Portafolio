(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ======================================================================
     DATOS EDITABLES
     Modifica los proyectos y certificaciones desde aquí sin tocar el HTML.

     Campos de cada proyecto:
       titulo      — nombre del proyecto
       anio        — año
       descripcion — descripción breve
       tecnologias — arreglo de tecnologías (opcional)
       logros      — arreglo de logros mostrados como lista (opcional)
       badge       — etiqueta superior tipo "🥇 1.er Puesto" (opcional)
       imagen      — ruta de imagen en assets/images/ (opcional)
       url         — enlace "Ver proyecto" (opcional, omitir si no existe)
       github      — enlace "Código" al repositorio (opcional)
       publicacion — enlace "Ver publicación" (opcional)
     ====================================================================== */

  const PROYECTOS = [
    {
      titulo: 'Datatón ESAN — 1.er Puesto',
      anio: '2025',
      descripcion:
        'Procesamiento, análisis y visualización de datos para identificar patrones, tendencias e indicadores relevantes. Los resultados fueron presentados ante evaluadores y el proyecto obtuvo el primer puesto.',
      tecnologias: ['Python', 'Data Analysis', 'Visualización de datos'],
      badge: '🥇 1.er Puesto',
      imagen: null
    },
    {
      titulo: 'Proyecto de Reportería y Seguimiento de Indicadores',
      anio: '2025',
      descripcion:
        'Desarrollo de dashboards y reportes para seguimiento de información académica y operativa. Organización, limpieza y estructuración de bases de datos utilizando Excel y SQL.',
      tecnologias: ['Power BI', 'Excel', 'SQL']
    },
    {
      titulo: 'Investigación IEMTRONICS',
      anio: '2024',
      descripcion:
        'Participación en la organización de información técnica, documentación y coordinación de aportes para un trabajo científico desarrollado por un equipo multidisciplinario.',
      logros: [
        'Publicación aceptada en Springer Nature',
        'Indexada en Scopus',
        'Indexada en EI Compendex'
      ],
      publicacion: 'https://link.springer.com/chapter/10.1007/978-981-97-4784-9_34'
    }

    /* Plantilla para agregar un nuevo proyecto (descomenta y completa):
    ,
    {
      titulo: 'QA Automation — Nuevo proyecto',
      anio: '2026',
      descripcion: 'Descripción breve del proyecto.',
      tecnologias: ['Selenium', 'Python'],
      logros: [],
      badge: null,
      imagen: 'assets/images/nombre-imagen.jpg',
      url: null,
      github: 'https://github.com/Brandon-SC-147',
      publicacion: null
    }
    */
  ];

  /* Cada certificación puede incluir una URL en el campo 'url'
     para mostrar el enlace "Ver credencial". */
  const CERTIFICACIONES = [
    { titulo: 'Excel Intermedio', organizacion: 'Udemy', anio: '2025', url: null },
    { titulo: 'SQL y Gestión de Bases de Datos', organizacion: 'Udemy', anio: '2025', url: null },
    { titulo: 'Iniciación al Desarrollo con IA', organizacion: 'BIG School', anio: '2025', url: null },
    { titulo: 'Desarrollo con IA: de 0 a Producción', organizacion: 'BIG School', anio: '2026', url: null },
    { titulo: 'Desarrollo con IA: Programa con Agentes', organizacion: 'BIG School / MoureDev', anio: '2026', url: null }
  ];

  /* ======================================================================
     HELPER: creación segura de elementos
     ====================================================================== */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  /* ======================================================================
     RENDERIZADO DE PROYECTOS
     ====================================================================== */

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    PROYECTOS.forEach(function (proyecto) {
      const card = el('article', 'project-card');

      if (proyecto.imagen) {
        const img = el('img', 'project-img');
        img.src = proyecto.imagen;
        img.alt = proyecto.titulo;
        img.loading = 'lazy';
        card.appendChild(img);
      }

      const body = el('div', 'project-body');
      const fragmentBody = document.createDocumentFragment();

      if (proyecto.badge) {
        fragmentBody.appendChild(el('span', 'project-badge', proyecto.badge));
      }

      const head = el('div', 'project-head');
      head.appendChild(el('h3', 'project-title', proyecto.titulo));
      head.appendChild(el('span', 'project-year', proyecto.anio));
      fragmentBody.appendChild(head);

      fragmentBody.appendChild(el('p', 'project-desc', proyecto.descripcion));

      if (proyecto.logros && proyecto.logros.length) {
        const list = el('ul', 'project-logros');
        proyecto.logros.forEach(function (logro) {
          list.appendChild(el('li', null, logro));
        });
        fragmentBody.appendChild(list);
      }

      if (proyecto.tecnologias && proyecto.tecnologias.length) {
        const tech = el('ul', 'project-tech');
        proyecto.tecnologias.forEach(function (nombre) {
          tech.appendChild(el('li', 'tech-chip-card', nombre));
        });
        fragmentBody.appendChild(tech);
      }

      const acciones = el('div', 'project-actions');

      if (proyecto.url) {
        acciones.appendChild(crearEnlace('Ver proyecto', proyecto.url, 'btn-primary'));
      }
      if (proyecto.publicacion) {
        acciones.appendChild(crearEnlace('Ver publicación', proyecto.publicacion, 'btn-primary'));
      }
      if (proyecto.github) {
        acciones.appendChild(crearEnlace('Código', proyecto.github, 'btn-outline'));
      }

      if (acciones.children.length) {
        fragmentBody.appendChild(acciones);
      }

      body.appendChild(fragmentBody);
      card.appendChild(body);
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
  }

  function crearEnlace(texto, href, clase) {
    const link = el('a', 'btn ' + clase, texto);
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }

  /* ======================================================================
     RENDERIZADO DE CERTIFICACIONES
     ====================================================================== */

  function renderCertificaciones() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;

    CERTIFICACIONES.forEach(function (certificacion) {
      const card = el('article', 'cert-card');
      card.appendChild(el('span', 'cert-year', certificacion.anio));
      card.appendChild(el('h4', 'cert-title', certificacion.titulo));
      card.appendChild(el('p', 'cert-org', certificacion.organizacion));

      if (certificacion.url) {
        const link = el('a', 'cert-link', 'Ver credencial →');
        link.href = certificacion.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', 'Ver certificado de ' + certificacion.titulo);
        card.appendChild(link);
      }

      grid.appendChild(card);
    });
  }

  /* ======================================================================
     NAVBAR: menú hamburguesa
     ====================================================================== */

  function initNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navLinks');

    if (!toggle || !menu) return;

    function setMenu(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('is-active', open);
      menu.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('click', function (event) {
      if (menu.classList.contains('is-open') && !menu.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  /* ======================================================================
     NAVBAR: sombra al hacer scroll + sección activa
     ====================================================================== */

  function initScroll() {
    const navbar = document.getElementById('navbar');

    const navItems = Array.prototype.slice.call(document.querySelectorAll('.nav-link[data-nav]'));
    const sections = navItems
      .map(function (link) {
        return document.getElementById(link.getAttribute('data-nav'));
      })
      .filter(Boolean);

    function onScroll() {
      if (navbar && window.scrollY > 12) {
        navbar.classList.add('scrolled');
      } else if (navbar) {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          navItems.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('data-nav') === entry.target.id);
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ======================================================================
     ANIMACIONES AL HACER SCROLL (IntersectionObserver)
     ====================================================================== */

  function initReveal() {
    const items = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  /* ======================================================================
     AÑO AUTOMÁTICO EN EL FOOTER
     ====================================================================== */

  function initYear() {
    const year = document.getElementById('footerYear');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ======================================================================
     INICIALIZACIÓN
     ====================================================================== */

  renderProjects();
  renderCertificaciones();
  initReveal();
  initNav();
  initScroll();
  initYear();
})();