/* ═══════════════════════════════════════════
   HARBOR LEGAL — Navigation v3.0
   Builds mega-menu from SITE config
   Handles mobile toggle + scroll effects
   ═══════════════════════════════════════════ */

(function() {
  'use strict';

  var lang = SITE.getLang();
  var navConfig = SITE.nav[lang] || SITE.nav.pl;

  // ─── Build navigation HTML ───
  function buildNav() {
    var navLinks = document.getElementById('navLinks');
    if (!navLinks) return;

    var html = '';

    navConfig.items.forEach(function(item) {
      if (item.megamenu && item.groups) {
        // Mega-menu item
        html += '<div class="nav-item">';
        html += '<a href="' + item.href + '">' + item.label + ' <span style="font-size:8px;vertical-align:1px;">▾</span></a>';
        html += '<div class="megamenu">';

        item.groups.forEach(function(group) {
          html += '<div class="megamenu-group">';
          html += '<a href="' + group.href + '" class="megamenu-title">' + group.title + '</a>';

          // Find pillar for geo tag
          var pillar = null;
          var pillars = SITE.pillars[lang] || SITE.pillars.pl;
          for (var i = 0; i < pillars.length; i++) {
            if (group.href.indexOf(pillars[i].href) > -1 || pillars[i].href.indexOf(group.href) > -1) {
              pillar = pillars[i];
              break;
            }
          }
          if (pillar) {
            html += '<span class="megamenu-geo">' + pillar.geo + '</span>';
          }

          html += '<ul class="megamenu-links">';
          group.items.forEach(function(sub) {
            html += '<li><a href="' + group.href + (sub.anchor || '') + '">' + sub.label + '</a></li>';
          });
          html += '</ul>';
          html += '<a href="' + group.href + '" class="megamenu-all">' + (lang === 'pl' ? 'Wszystkie →' : 'View all →') + '</a>';
          html += '</div>';
        });

        html += '</div>'; // .megamenu
        html += '</div>'; // .nav-item
      } else if (item.cta) {
        html += '<a href="' + item.href + '" class="nav-cta">' + item.label + '</a>';
      } else {
        html += '<a href="' + item.href + '">' + item.label + '</a>';
      }
    });

    // Language switcher
    html += '<div class="lang-switch">';
    navConfig.langSwitch.forEach(function(ls) {
      html += '<a href="' + ls.href + '"' + (ls.active ? ' class="active"' : '') + '>' + ls.label + '</a>';
    });
    html += '</div>';

    navLinks.innerHTML = html;
  }


  // ─── Scroll effect ───
  function initScroll() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }


  // ─── Mobile menu toggle ───
  function initMobileMenu() {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    // Close on link click (but not on mega-menu parent)
    navLinks.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (link && !link.closest('.nav-item')) {
        navLinks.classList.remove('open');
      }
    });

    // Toggle mega-menu groups on mobile
    navLinks.addEventListener('click', function(e) {
      var navItem = e.target.closest('.nav-item');
      if (navItem && window.innerWidth <= 900) {
        var link = e.target.closest('.nav-item > a');
        if (link) {
          e.preventDefault();
          navItem.classList.toggle('open');
        }
      }
    });
  }


  // ─── Init ───
  function init() {
    buildNav();
    initScroll();
    initMobileMenu();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
