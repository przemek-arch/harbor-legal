/* ═══════════════════════════════════════════
   HARBOR LEGAL — Navigation v3.1
   Mega-menu, mobile toggle, scroll effects
   ═══════════════════════════════════════════ */
(function() {
  'use strict';
  var lang = SITE.getLang();
  var navConfig = SITE.nav[lang] || SITE.nav.pl;

  function buildNav() {
    var navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
    var html = '';
    navConfig.items.forEach(function(item) {
      if (item.megamenu && item.groups) {
        html += '<div class="nav-item">';
        html += '<a href="' + item.href + '">' + item.label + ' <span style="font-size:8px;vertical-align:middle;margin-left:2px;">▾</span></a>';
        html += '<div class="megamenu">';
        item.groups.forEach(function(group) {
          html += '<div class="megamenu-group">';
          html += '<a href="' + group.href + '" class="megamenu-title">' + group.title + '</a>';
          html += '<ul class="megamenu-links">';
          group.items.forEach(function(sub) {
            html += '<li><a href="' + group.href + (sub.anchor || '') + '">' + sub.label + '</a></li>';
          });
          html += '</ul>';
          html += '</div>';
        });
        html += '</div></div>';
      } else if (item.cta) {
        html += '<a href="' + item.href + '" class="nav-cta">' + item.label + '</a>';
      } else {
        html += '<a href="' + item.href + '">' + item.label + '</a>';
      }
    });
    html += '<div class="lang-switch">';
    navConfig.langSwitch.forEach(function(ls) {
      html += '<a href="' + ls.href + '"' + (ls.active ? ' class="active"' : '') + '>' + ls.label + '</a>';
    });
    html += '</div>';
    navLinks.innerHTML = html;
  }

  function initScroll() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  function initMobileMenu() {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (!navToggle || !navLinks) return;
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    navLinks.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (link && !link.closest('.nav-item')) {
        navLinks.classList.remove('open');
      }
    });
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

  function init() {
    buildNav();
    initScroll();
    initMobileMenu();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
