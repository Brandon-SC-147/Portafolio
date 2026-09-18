(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ======================================================================
     DATOS EDITABLES
     Modifica los proyectos y certificaciones desde aquí sin tocar el HTML.

     Campos de cada proyecto:
       titulo      — nombre del proyecto
       anio        — año
       categoria   — categoría: Web, Mobile, Data, QA o Research (opcional)
       descripcion — descripción breve
       tecnologias — arreglo de tecnologías (opcional)
       logros      — arreglo de aspectos relevantes mostrados como lista (opcional)
       badge       — etiqueta superior tipo "🥇 1.er Puesto" (opcional)
       imagen      — ruta de imagen en assets/images/ (opcional)
       url         — enlace "Ver proyecto" (opcional, omitir si no existe)
       github      — enlace "GitHub" al repositorio (opcional)
       publicacion — enlace "Ver publicación" (opcional)
     ====================================================================== */

  const PROYECTOS = [
    {
      titulo: 'DigiDex Web',
      anio: '2026',
      categoria: 'Web',
      descripcion:
        'Aplicación web interactiva para consultar y explorar información de Digimon mediante el consumo de una API REST.',
      tecnologias: ['Vue 3', 'Quasar', 'JavaScript', 'Axios', 'Pinia', 'REST API'],
      logros: [
        'Consumo y procesamiento de API REST',
        'Gestión de estado mediante Pinia',
        'Filtros dinámicos y navegación entre vistas',
        'Componentes reutilizables'
      ],
      github: 'https://github.com/Brandon-SC-147/DigiDex-Web'
    },
    {
      titulo: 'Currency Converter App',
      anio: '2026',
      categoria: 'Mobile',
      descripcion:
        'Aplicación móvil Android para conversión de monedas con autenticación, persistencia de información e integración de tipos de cambio mediante API externa.',
      tecnologias: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Cloud Firestore', 'Retrofit', 'Gson', 'REST API'],
      logros: [
        'Registro e inicio de sesión con Firebase Authentication',
        'Persistencia de datos en Cloud Firestore',
        'Consumo de API externa de tipos de cambio',
        'Historial de conversiones'
      ],
      github: 'https://github.com/Brandon-SC-147/PC02VALENZUELA22101808'
    },
    {
      titulo: 'Loan Calculator App',
      anio: '2026',
      categoria: 'Mobile',
      descripcion:
        'Aplicación Android desarrollada con Jetpack Compose para calcular la cuota mensual, los intereses y el total a pagar de un préstamo.',
      tecnologias: ['Android', 'Kotlin', 'Jetpack Compose'],
      logros: [
        'Lógica de cálculo financiero',
        'Validación de datos ingresados',
        'Procesamiento de la información del usuario',
        'Interfaz mediante Jetpack Compose'
      ],
      github: 'https://github.com/Brandon-SC-147/Loan-Calculator-App'
    },
    {
      titulo: 'Laboratorios de QA y Automatización',
      categoria: 'QA',
      descripcion:
        'Conjunto de prácticas y laboratorios orientados a pruebas funcionales, automatización web, API y móvil, y validación de aplicaciones en diferentes entornos.',
      tecnologias: ['Cypress', 'Selenium', 'Playwright', 'Appium', 'Postman', 'JMeter'],
      logros: [
        'Pruebas funcionales web, API y móvil',
        'Automatización de escenarios',
        'Validación de servicios REST',
        'Pruebas en distintos navegadores y dispositivos'
      ]
    },
    {
      titulo: 'Proyecto de Análisis y Reportería',
      anio: '2025',
      categoria: 'Data',
      descripcion:
        'Desarrollo de dashboards y reportes para el seguimiento de información académica y operativa, con organización y limpieza de bases de datos.',
      tecnologias: ['Power BI', 'Excel', 'SQL', 'SQL Server'],
      logros: [
        'Organización y limpieza de información',
        'Dashboards e indicadores (KPI)',
        'Tablas dinámicas',
        'Apoyo al análisis y la toma de decisiones'
      ]
    },
    {
      titulo: 'Datatón ESAN — 1.er Puesto',
      anio: '2025',
      categoria: 'Data',
      badge: '🥇 1.er Puesto',
      descripcion:
        'Procesamiento, análisis y visualización de datos para identificar patrones, tendencias e indicadores relevantes. Los resultados fueron presentados ante evaluadores.',
      tecnologias: ['Python', 'Análisis de datos', 'Visualización de datos'],
      logros: [
        'Procesamiento y validación de datos con Python',
        'Identificación de patrones y tendencias',
        'Visualizaciones e indicadores',
        'Presentación de conclusiones ante evaluadores'
      ]
    },
    {
      titulo: 'IEMTRONICS 2024 — Colaborador en investigación',
      anio: '2024',
      categoria: 'Research',
      descripcion:
        'Participación en la organización de información técnica, documentación y estructuración de contenidos para un artículo científico desarrollado por un equipo multidisciplinario.',
      tecnologias: ['Investigación', 'Documentación técnica'],
      logros: [
        'Organización de información técnica',
        'Estructuración de contenidos para artículo científico',
        'Apoyo a un equipo multidisciplinario',
        'Publicación en Springer Nature — Scopus y EI Compendex'
      ],
      publicacion: 'https://link.springer.com/chapter/10.1007/978-981-97-4784-9_34'
    }

    /* Plantilla para agregar un nuevo proyecto (descomenta y completa):
    ,
    {
      titulo: 'QA Automation — Nuevo proyecto',
      anio: '2026',
      categoria: 'QA',
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
     para mostrar el enlace "Ver certificado ↗". Si no tiene URL, no se muestra botón. */
  const CERTIFICACIONES = [
    { titulo: 'Excel Intermedio', organizacion: 'Udemy', anio: '2025', url: null },
    { titulo: 'SQL y Gestión de Bases de Datos', organizacion: 'Udemy', anio: '2025', url: null },
    {
      titulo: 'Iniciación al Desarrollo con IA',
      organizacion: 'BIG School',
      anio: '2025',
      url: 'https://drive.google.com/file/d/1lnTGc2ZAz2Il4zgkq9TO6R46StP3pw4B/view'
    },
    {
      titulo: 'Desarrollo con IA: de 0 a Producción',
      organizacion: 'BIG School',
      anio: '2026',
      url: 'https://drive.google.com/file/d/1z3Q2PAwfbZAa5DmRlRinP52s7aYNTjMq/view'
    },
    {
      titulo: 'Desarrollo con IA: Programa con Agentes',
      organizacion: 'BIG School / MoureDev',
      anio: '2026',
      url: 'https://drive.google.com/file/d/1Y6ACCMYplhl4E1GlTMMR82ZolulJFiZM/view'
    },
    {
      titulo: 'Ciberseguridad y Hacking Ético',
      organizacion: 'BIG School',
      anio: '2026',
      url: 'https://drive.google.com/file/d/1K_X5F_uqB34NpvI4vxi-PYKqMQZ8-SV0/view'
    }
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

      if (proyecto.categoria || proyecto.badge) {
        const meta = el('div', 'project-meta');
        if (proyecto.categoria) {
          meta.appendChild(el('span', 'project-category', proyecto.categoria));
        }
        if (proyecto.badge) {
          meta.appendChild(el('span', 'project-badge', proyecto.badge));
        }
        fragmentBody.appendChild(meta);
      }

      const head = el('div', 'project-head');
      head.appendChild(el('h3', 'project-title', proyecto.titulo));
      if (proyecto.anio) {
        head.appendChild(el('span', 'project-year', proyecto.anio));
      }
      fragmentBody.appendChild(head);

      fragmentBody.appendChild(el('p', 'project-desc', proyecto.descripcion));

      if (proyecto.tecnologias && proyecto.tecnologias.length) {
        const tech = el('ul', 'project-tech');
        proyecto.tecnologias.forEach(function (nombre) {
          tech.appendChild(el('li', 'tech-chip-card', nombre));
        });
        fragmentBody.appendChild(tech);
      }

      if (proyecto.logros && proyecto.logros.length) {
        const list = el('ul', 'project-logros');
        proyecto.logros.forEach(function (logro) {
          list.appendChild(el('li', null, logro));
        });
        fragmentBody.appendChild(list);
      }

      const acciones = el('div', 'project-actions');

      if (proyecto.url) {
        acciones.appendChild(crearEnlace('Ver proyecto', proyecto.url, 'btn-primary'));
      }
      if (proyecto.publicacion) {
        const link = el('a', 'link-subtle');
        link.href = proyecto.publicacion;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', 'Ver publicación de ' + proyecto.titulo);
        link.appendChild(document.createTextNode('Ver publicación '));
        const arrow = el('span', 'link-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        link.appendChild(arrow);
        acciones.appendChild(link);
      }
      if (proyecto.github) {
        const link = crearEnlace('GitHub', proyecto.github, 'btn-outline');
        link.setAttribute('aria-label', 'Ver repositorio de ' + proyecto.titulo);
        acciones.appendChild(link);
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
        const link = el('a', 'cert-link');
        link.href = certificacion.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', 'Ver certificado de ' + certificacion.titulo);
        link.appendChild(document.createTextNode('Ver certificado '));
        const arrow = el('span', 'link-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        link.appendChild(arrow);
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