/* ═══════════════════════════════════════════
   HARBOR LEGAL — Main Scripts v3.0
   Scroll reveal, cookie, forms, blog, pillars
   ═══════════════════════════════════════════ */

(function() {
  'use strict';

  var lang = SITE.getLang();


  // ═══════════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════════
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el) { io.observe(el); });
  }


  // ═══════════════════════════════════════
  // COOKIE BANNER
  // ═══════════════════════════════════════
  function initCookie() {
    var banner = document.getElementById('cookieBanner');
    if (!banner) return;
    try {
      if (!localStorage.getItem('harbor_cookies')) {
        setTimeout(function() { banner.classList.add('show'); }, 2000);
      }
    } catch(e) {
      setTimeout(function() { banner.classList.add('show'); }, 2000);
    }
  }

  // Global close function
  window.closeCookie = function() {
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.remove('show');
    try { localStorage.setItem('harbor_cookies', 'accepted'); } catch(e) {}
  };


  // ═══════════════════════════════════════
  // CONTACT FORM (Formspree)
  // ═══════════════════════════════════════
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = lang === 'pl' ? 'Wysyłanie...' : 'Sending...';
      btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function(response) {
        if (response.ok) {
          btn.textContent = lang === 'pl' ? 'Wysłano! ✓' : 'Sent! ✓';
          btn.style.background = '#4A7C59';
          form.reset();
        } else {
          btn.textContent = lang === 'pl' ? 'Błąd — spróbuj ponownie' : 'Error — try again';
          btn.style.background = '#A0522D';
        }
        btn.disabled = false;
        setTimeout(function() {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      }).catch(function() {
        btn.textContent = lang === 'pl' ? 'Błąd sieci' : 'Network error';
        btn.style.background = '#A0522D';
        btn.disabled = false;
        setTimeout(function() {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      });
    });
  }


  // ═══════════════════════════════════════
  // SERVICE AREAS (strona główna — naturalny rozkład, nie "3 filary")
  // ═══════════════════════════════════════
  function buildPillarCards() {
    var container = document.getElementById('pillarCards');
    if (!container) return;

    var pillars = SITE.pillars[lang] || SITE.pillars.pl;
    var html = '';

    pillars.forEach(function(p) {
      html += '<a href="' + p.href + '" class="pillar-card reveal" style="text-decoration:none;color:inherit;">';
      html += '<div class="pillar-card-title">' + p.title + '</div>';
      html += '<div class="pillar-card-subtitle">' + p.subtitle + '</div>';
      html += '<div class="pillar-card-tags">' + p.tags + '</div>';
      // Geo only for tech/fintech pillar — for others it's implicit
      if (p.id === 'tech-fintech') {
        html += '<div class="pillar-card-geo">' + p.geo + '</div>';
      }
      html += '<span class="pillar-card-link">' + (lang === 'pl' ? 'Dowiedz się więcej \u2192' : 'Learn more \u2192') + '</span>';
      html += '</a>';
    });

    container.innerHTML = html;
  }


  // ═══════════════════════════════════════
  // BLOG GRID — renders article cards
  // ═══════════════════════════════════════
  function renderBlogCard(a) {
    var d = new Date(a.date);
    var dateStr = d.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    var pinnedClass = a.pinned ? ' pinned' : '';
    return '<a href="' + a.url + '" class="blog-card' + pinnedClass + '" style="text-decoration:none;color:inherit;">' +
      '<div class="blog-meta"><span class="blog-tag">' + a.tag + '</span><span class="blog-date">' + dateStr + '</span></div>' +
      '<div class="blog-title">' + a.title + '</div>' +
      '<div class="blog-excerpt">' + a.excerpt + '</div>' +
      '<span class="blog-link">' + (lang === 'pl' ? 'Czytaj dalej →' : 'Read more →') + '</span></a>';
  }

  /**
   * Build blog grid from config
   * @param {string} containerId - ID of grid container
   * @param {object} options - { pillar, category, max, showFilters }
   */
  function buildBlogGrid(containerId, options) {
    var container = document.getElementById(containerId);
    if (!container) return;

    options = options || {};
    var articles;

    if (options.pillar) {
      articles = SITE.getArticlesByPillar(options.pillar, lang, options.max || 3);
    } else if (options.category) {
      articles = SITE.getArticlesByCategory(options.category, lang, options.max || 6);
    } else {
      articles = SITE.getAllArticles(lang, options.max || 100);
    }

    if (!articles.length) {
      container.innerHTML = '<p style="color:var(--ink-muted);font-size:14px;">' +
        (lang === 'pl' ? 'Artykuły w przygotowaniu.' : 'Articles coming soon.') + '</p>';
      return;
    }

    container.innerHTML = articles.map(renderBlogCard).join('');
  }

  // Expose for use in page-specific scripts
  window.HarborBlog = {
    buildGrid: buildBlogGrid,
    renderCard: renderBlogCard,
  };


  // ═══════════════════════════════════════
  // BLOG FILTERS (hub /blog/)
  // ═══════════════════════════════════════
  function initBlogFilters() {
    var filtersContainer = document.getElementById('blogFilters');
    var gridContainer = document.getElementById('blogGrid');
    if (!filtersContainer || !gridContainer) return;

    var categories = [
      { id: 'all', label: { pl: 'Wszystkie', en: 'All' } },
      { id: 'fintech-regulacje', label: { pl: 'Fintech & Tech', en: 'Fintech & Tech' } },
      { id: 'prawo-gospodarcze', label: { pl: 'Prawo firm', en: 'Business Law' } },
      { id: 'spory-gospodarcze', label: { pl: 'Spory', en: 'Disputes' } },
    ];

    // Build filter buttons
    var html = '';
    categories.forEach(function(cat) {
      var activeClass = cat.id === 'all' ? ' active' : '';
      html += '<button class="blog-filter-btn' + activeClass + '" data-filter="' + cat.id + '">' +
        (cat.label[lang] || cat.label.pl) + '</button>';
    });
    filtersContainer.innerHTML = html;

    // Check URL params for pre-selected filter
    var params = new URLSearchParams(window.location.search);
    var preFilter = params.get('f');
    if (preFilter) {
      var btns = filtersContainer.querySelectorAll('.blog-filter-btn');
      btns.forEach(function(b) { b.classList.remove('active'); });
      var target = filtersContainer.querySelector('[data-filter="' + preFilter + '"]');
      if (target) target.classList.add('active');
    }

    // Render initial grid
    var activeFilter = preFilter || 'all';
    renderFilteredBlog(gridContainer, activeFilter);

    // Click handler
    filtersContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('.blog-filter-btn');
      if (!btn) return;
      filtersContainer.querySelectorAll('.blog-filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      renderFilteredBlog(gridContainer, btn.dataset.filter);
    });
  }

  function renderFilteredBlog(container, filter) {
    var articles;
    if (filter === 'all') {
      articles = SITE.getAllArticles(lang);
    } else {
      articles = SITE.getArticlesByCategory(filter, lang, 100);
    }
    container.innerHTML = articles.map(renderBlogCard).join('');
  }


  // ═══════════════════════════════════════
  // BREADCRUMBS
  // ═══════════════════════════════════════
  function buildBreadcrumbs() {
    var container = document.getElementById('breadcrumbs');
    if (!container) return;

    var crumbs = [];
    try {
      crumbs = JSON.parse(container.dataset.crumbs || '[]');
    } catch(e) { return; }

    var html = '<a href="' + (lang === 'en' ? '/en' : '/') + '">' +
      (lang === 'pl' ? 'Strona główna' : 'Home') + '</a>';

    crumbs.forEach(function(crumb, i) {
      html += ' <span class="sep">/</span> ';
      if (i === crumbs.length - 1) {
        html += '<span class="current">' + crumb.label + '</span>';
      } else {
        html += '<a href="' + crumb.href + '">' + crumb.label + '</a>';
      }
    });

    container.innerHTML = html;
  }


  // ═══════════════════════════════════════
  // ARTICLE OVERLAY (for inline content)
  // ═══════════════════════════════════════
  function initArticleOverlay() {
    var overlay = document.getElementById('articleOverlay');
    var closeBtn = document.getElementById('articleClose');
    if (!overlay || !closeBtn) return;

    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });
  }


  // ═══════════════════════════════════════
  // STATS (sekcja O mnie)
  // ═══════════════════════════════════════
  function buildStats() {
    var container = document.getElementById('statsGrid');
    if (!container) return;

    var stats = SITE.stats[lang] || SITE.stats.pl;
    container.innerHTML = stats.map(function(s) {
      return '<div class="stat"><div class="stat-num">' + s.num + '</div>' +
        '<div class="stat-label">' + s.label + '</div></div>';
    }).join('');
  }


  // ═══════════════════════════════════════
  // AUTO-REDIRECT (non-PL → EN)
  // ═══════════════════════════════════════
  function initLangRedirect() {
    if (lang !== 'pl') return; // only redirect from PL pages
    try {
      if (sessionStorage.getItem('harbor_lang_chosen')) return;
      var userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (!userLang.startsWith('pl')) {
        sessionStorage.setItem('harbor_lang_chosen', 'auto');
        window.location.replace('/en');
      }
    } catch(e) {}
  }


  // ═══════════════════════════════════════
  // FOOTER (build from config)
  // ═══════════════════════════════════════
  function buildFooter() {
    var el = document.getElementById('footerLegal');
    if (!el) return;
    var b = SITE.brand;
    el.innerHTML = (b.fullName[lang] || b.fullName.pl) + '<br>NIP: ' + b.nip + ' \u00b7 OIRP Warszawa ' + b.oirp;
  }


  // ═══════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════
  function init() {
    initLangRedirect();
    initReveal();
    initCookie();
    initContactForm();
    initArticleOverlay();
    buildPillarCards();
    buildBreadcrumbs();
    buildStats();
    buildFooter();
    initBlogFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
