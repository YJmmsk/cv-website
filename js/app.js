/* CV 웹사이트 — 화면 코드
 * 데이터(data/*.js)를 읽어 화면을 그리기만 합니다. 내용은 데이터 파일에서 고치세요.
 * 외부 라이브러리·네트워크 요청 없음 → file:// 더블클릭과 정적 호스팅 모두 동작.
 */
(function () {
  'use strict';

  var CONFIG = window.CV_CONFIG || {};
  var LANGS = ['ko', 'en'];
  var STORE_KEY = 'cv-lang';
  var routes = {};          // 추가 화면(확장 스크립트가 등록)
  var renderers = [];       // 언어 전환 시 다시 그릴 함수들
  var state = { lang: 'ko', view: 'main', deck: null };

  /* ---------- 유틸 ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // 이스케이프 + 줄바꿈 + [확인 필요]/[TBC] 표시
  function rich(s) {
    return esc(s)
      .replace(/\n/g, '<br>')
      .replace(/\[(확인 필요|TBC)\]/g, '<mark class="tbc">$1</mark>');
  }
  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function data() { return window['DATA_MAIN_' + state.lang.toUpperCase()] || window.DATA_MAIN_KO; }
  function list(items, cls) {
    if (!items || !items.length) return '';
    return '<ul class="' + (cls || 'list') + '">' + items.map(function (i) { return '<li>' + rich(i) + '</li>'; }).join('') + '</ul>';
  }
  function head(eyebrow, title, lead) {
    return '<header class="sec__head">' +
      (eyebrow ? '<span class="eyebrow">' + esc(eyebrow) + '</span>' : '') +
      '<h2 class="sec__title">' + rich(title) + '</h2>' +
      (lead ? '<p class="sec__lead">' + rich(lead) + '</p>' : '') +
      '</header>';
  }
  function section(id, cls, title, inner) {
    return '<section class="sec ' + (cls || '') + '" id="' + id + '" data-slide data-title="' + esc(title) + '">' +
      '<div class="sec__inner">' + inner + '</div></section>';
  }
  function img(o, cls) {
    return '<figure class="ph ' + (cls || '') + (o.wide ? ' ph--wide' : '') + '"><img src="' + esc(o.src) + '" alt="' + esc(o.alt || '') + '" loading="lazy" decoding="async"></figure>';
  }

  /* ---------- 연락처 ---------- */
  function contactHTML(cls) {
    var c = CONFIG.contact || {};
    var parts = [];
    if (c.showEmail && c.email) parts.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
    if (c.showPhone && c.phone) parts.push('<a href="tel:' + esc(c.phone.replace(/[^0-9+]/g, '')) + '">' + esc(c.phone) + '</a>');
    return parts.length ? '<p class="' + (cls || 'contact') + '">' + parts.join('<span class="sep">/</span>') + '</p>' : '';
  }

  /* ---------- 메인 섹션 렌더링 ---------- */
  function renderProfile(d) {
    var p = d.profile;
    var inner =
      '<div class="hero__text">' +
        '<span class="eyebrow eyebrow--plain">' + esc(p.eyebrow) + '</span>' +
        '<h1 class="hero__name">' + esc(p.name) + '</h1>' +
        '<p class="hero__role">' + rich(p.role) + '</p>' +
        '<p class="hero__tagline">' + rich(p.tagline) + '</p>' +
        '<p class="hero__summary">' + rich(p.summary) + '</p>' +
        '<ul class="hero__strengths">' + p.strengths.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ul>' +
        contactHTML('contact hero__contact') +
      '</div>' +
      '<div class="hero__side">' +
        '<dl class="facts">' + p.facts.map(function (f) {
          return '<div><dt>' + rich(f.label) + '</dt><dd>' + rich(f.value) + '</dd></div>';
        }).join('') + '</dl>' +
      '</div>' +
      '<div class="stats">' + p.stats.map(function (s) {
        return '<div class="stat"><strong>' + rich(s.value) + '</strong><span>' + rich(s.label) + '</span><small>' + rich(s.note) + '</small></div>';
      }).join('') + '</div>';
    return section('profile', 'sec--hero', p.name, inner);
  }

  function renderCareer(d) {
    var c = d.career;
    var inner = head(c.eyebrow, c.title, c.lead) +
      '<ol class="timeline">' + c.items.map(function (it) {
        return '<li class="tl' + (it.muted ? ' tl--muted' : '') + '">' +
          '<span class="tl__period">' + rich(it.period) + '</span>' +
          '<div class="tl__body">' +
            '<h3 class="tl__company">' + rich(it.company) + '</h3>' +
            '<p class="tl__team">' + rich(it.team) + '</p>' +
            '<p class="tl__summary">' + rich(it.summary) + '</p>' +
            list(it.bullets, 'list list--dot') +
          '</div></li>';
      }).join('') + '</ol>';
    return section('career', 'sec--career', c.title, inner);
  }

  function renderOverview(d) {
    var o = d.projects.overview;
    var inner = head(d.projects.eyebrow, o.title) +
      '<div class="table-wrap"><table class="table table--overview"><thead><tr>' +
      o.head.map(function (h) { return '<th>' + rich(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      o.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return (i === 0 ? '<th scope="row">' : '<td>') + rich(c) + (i === 0 ? '</th>' : '</td>'); }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>' +
      '<p class="caption-strong">' + rich(o.caption) + '</p>';
    return section('projects', 'sec--overview', o.title, inner);
  }

  function projectCard(p, ui) {
    var rows = '';
    if (p.org) rows += '<div class="kv"><dt>' + esc(ui.org) + '</dt><dd>' + rich(p.org) + '</dd></div>';
    if (p.item) rows += '<div class="kv"><dt>' + esc(ui.item) + '</dt><dd>' + rich(p.item) + '</dd></div>';
    return '<article class="card project">' +
      '<header><span class="project__period">' + rich(p.period) + '</span><h4 class="project__title">' + rich(p.title) + '</h4></header>' +
      (p.overview ? '<p class="project__overview">' + rich(p.overview) + '</p>' : '') +
      (rows ? '<dl class="kvs">' + rows + '</dl>' : '') +
      (p.products ? '<h5 class="label">' + esc(ui.products) + '</h5>' + list(p.products, 'list list--dot') : '') +
      '<h5 class="label">' + esc(ui.roles) + '</h5>' + list(p.roles, 'list list--dot') +
      (p.outcome ? '<p class="project__outcome"><span>' + esc(ui.outcome) + '</span>' + rich(p.outcome) + '</p>' : '') +
      '</article>';
  }

  function renderGroup(g, d) {
    var ui = d.ui;
    var media = g.images && g.images.length
      ? '<div class="group__media group__media--' + Math.min(g.images.length, 4) + '">' + g.images.map(function (i) { return img(i); }).join('') + '</div>'
      : '';
    var body;
    if (g.research) {
      body = '<div class="research">' + g.research.map(function (r) {
        return '<div class="research__item"><h5 class="label">' + rich(r.label) + '</h5><p>' + rich(r.text) + '</p></div>';
      }).join('') + '</div>';
    } else {
      body = '<div class="projects projects--' + g.projects.length + '">' + g.projects.map(function (p) { return projectCard(p, ui); }).join('') + '</div>';
    }
    var inner = head(d.projects.eyebrow, g.title, g.sub) +
      (g.note ? '<p class="group__note">' + esc(ui.outcome) + ' · ' + rich(g.note) + '</p>' : '') +
      '<div class="group' + (media ? ' group--media' : '') + (g.research ? ' group--research' : '') + ' group--n' + g.projects.length + '">' + media + body + '</div>';
    return section('pg-' + g.id, 'sec--group', g.title, inner);
  }

  function renderAchievements(d) {
    var a = d.achievements;
    var inner = head(a.eyebrow, a.title) +
      '<div class="stats stats--3">' + a.highlights.map(function (h) {
        return '<div class="stat"><strong>' + rich(h.value) + '</strong><span>' + rich(h.label) + '</span><small>' + rich(h.note) + '</small></div>';
      }).join('') + '</div>' +
      '<div class="table-wrap"><table class="table"><thead><tr>' + a.head.map(function (h) { return '<th>' + rich(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      a.products.map(function (r) { return '<tr><th scope="row">' + rich(r[0]) + '</th><td>' + rich(r[1]) + '</td><td>' + rich(r[2]) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '<div class="note-box"><h5 class="label">' + rich(a.cosmetics.title) + '</h5>' + list(a.cosmetics.items, 'list list--inline') + '</div>';
    var pt = a.patents;
    function patentList(block) {
      return '<div class="card patents"><h4 class="card__title">' + rich(block.label) + '</h4><ul class="patent-list">' +
        block.items.map(function (p) {
          return '<li><span class="badge badge--' + (/등록|Granted/i.test(p.type) ? 'ok' : 'soft') + '">' + rich(p.type) + '</span>' +
            '<div><strong>' + rich(p.title) + '</strong><small>' + rich(p.no) + '</small></div></li>';
        }).join('') + '</ul></div>';
    }
    var inner2 = head(a.eyebrow, pt.title) + '<div class="two-col">' + patentList(pt.company) + patentList(pt.academic) + '</div>';
    return section('achievements', 'sec--achievements', a.title, inner) +
      section('patents', 'sec--patents', pt.title, inner2);
  }

  function renderCompetencies(d) {
    var c = d.competencies;
    var flow = '<div class="flow" aria-label="' + esc(c.flowTitle) + '">' + c.flow.map(function (f, i) {
      return '<div class="flow__step"><span class="flow__num">' + (i + 1) + '</span><strong>' + rich(f.step) + '</strong><p>' + rich(f.desc) + '</p></div>' +
        (i < c.flow.length - 1 ? '<span class="flow__arrow" aria-hidden="true"></span>' : '');
    }).join('') + '</div>';
    var inner = head(c.eyebrow, c.title, c.flowTitle) + flow +
      '<div class="pillars">' + c.pillars.map(function (p) {
        return '<div class="card pillar"><h4 class="card__title">' + rich(p.title) + '</h4>' + list(p.items, 'list list--dot') + '</div>';
      }).join('') + '</div>';
    var cases = c.cases;
    var inner2 = head(c.eyebrow, cases.title) +
      '<div class="cases">' + cases.items.map(function (it, i) {
        return '<div class="case"><span class="case__num">0' + (i + 1) + '</span>' +
          '<p class="case__problem">' + rich(it.problem) + '</p>' +
          '<p class="case__action">' + rich(it.action) + '</p>' +
          '<p class="case__result">' + rich(it.result) + '</p></div>';
      }).join('') + '</div>' +
      '<div class="gallery gallery--3">' + c.gallery.map(function (g) { return img(g); }).join('') + '</div>';
    return section('competencies', 'sec--competencies', c.title, inner) +
      section('cases', 'sec--cases', cases.title, inner2);
  }

  function renderSkills(d) {
    var s = d.skills;
    var inner = head(s.eyebrow, s.title) +
      '<div class="skills">' + s.groups.map(function (g) {
        return '<div class="card skill"><h4 class="card__title">' + rich(g.title) + '</h4>' + list(g.items, 'list list--dot') + '</div>';
      }).join('') + '</div>';
    return section('skills', 'sec--skills', s.title, inner);
  }

  function renderEducation(d) {
    var e = d.education;
    var showOpt = !!CONFIG.showOptionalEducation;
    var inner = head(e.eyebrow, e.title) +
      '<div class="edu">' +
        '<div class="edu__degrees">' + e.degrees.map(function (g) {
          return '<div class="card degree"><span class="degree__period">' + rich(g.period) + '</span>' +
            '<h4 class="card__title">' + rich(g.school) + '</h4><p class="degree__major">' + rich(g.major) + '</p>' +
            '<p class="degree__thesis">' + rich(g.thesis) + '</p>' +
            (showOpt && g.optional ? '<p class="degree__opt">' + rich(g.optional) + '</p>' : '') + '</div>';
        }).join('') + '</div>' +
        '<div class="edu__research">' +
          '<h5 class="label">' + rich(e.papersTitle) + '</h5>' +
          '<ol class="papers">' + e.papers.map(function (p) {
            return '<li><span class="papers__meta">' + rich(p.year) + ' · ' + rich(p.role) + '</span><span class="papers__title">' + rich(p.title) + '</span></li>';
          }).join('') + '</ol>' +
          '<h5 class="label">' + rich(e.talksTitle) + '</h5>' + list(e.talks, 'list list--dot') +
          (showOpt ? '<h5 class="label">' + rich(e.optionalTitle) + '</h5>' + list(e.optional, 'list list--dot') : '') +
        '</div>' +
      '</div>';
    return section('education', 'sec--education', e.title, inner);
  }

  function renderTraining(d) {
    var t = d.training;
    var inner = head(t.eyebrow, t.title) +
      '<div class="table-wrap"><table class="table table--compact"><thead><tr>' + t.head.map(function (h) { return '<th>' + rich(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rows.map(function (r) {
        return '<tr' + (r[3] ? ' class="is-key"' : '') + '><td class="nowrap">' + rich(r[0]) + '</td><td>' + rich(r[1]) + '</td><td>' + rich(r[2]) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
    return section('training', 'sec--training', t.title, inner);
  }

  function renderFit(d) {
    if (CONFIG.showFit === false) return '';
    var f = d.fit;
    var inner = head(f.eyebrow, f.title, f.target) +
      '<div class="fit">' + f.points.map(function (p, i) {
        return '<div class="card fit__point"><span class="fit__num">0' + (i + 1) + '</span><h4 class="card__title">' + rich(p.title) + '</h4><p>' + rich(p.text) + '</p></div>';
      }).join('') + '</div>' +
      '<div class="goals">' + f.goals.map(function (g) { return '<p>“' + rich(g) + '”</p>'; }).join('') + '</div>';
    return section('fit', 'sec--fit', f.title, inner);
  }

  function renderClosing(d) {
    var c = d.closing;
    var inner = '<span class="eyebrow eyebrow--plain">THANK YOU</span>' +
      '<h2 class="closing__title">' + rich(c.title) + '</h2>' +
      '<p class="closing__sub">' + rich(c.sub) + '</p>' + contactHTML('contact closing__contact');
    return section('closing', 'sec--closing', 'Thank you', inner);
  }

  function renderMain() {
    var d = data();
    var html = renderProfile(d) + renderCareer(d) + renderOverview(d) +
      d.projects.groups.map(function (g) { return renderGroup(g, d); }).join('') +
      renderAchievements(d) + renderCompetencies(d) + renderSkills(d) +
      renderEducation(d) + renderTraining(d) + renderFit(d) + renderClosing(d);
    $('#view-main').innerHTML = html;

    // 상단 바 / 푸터
    document.title = d.meta.title;
    $('#brandText').textContent = d.meta.brand;
    $('#presentBtn').textContent = d.ui.present;
    $('#printBtn').textContent = d.ui.print;
    $('#topnav').innerHTML = d.nav.filter(function (n) { return n.id !== 'fit' || CONFIG.showFit !== false; })
      .map(function (n) { return '<a href="#' + n.id + '">' + esc(n.label) + '</a>'; }).join('');
    $('#siteFooter').innerHTML = '<div class="site-footer__inner"><span>' + esc(d.ui.footer) + '</span>' + contactHTML('contact') + '<span>' + esc(d.ui.updated) + '</span></div>';
    observeNav();
  }

  /* ---------- 상단 내비 강조 ---------- */
  var navObserver = null;
  function observeNav() {
    if (navObserver) navObserver.disconnect();
    if (!('IntersectionObserver' in window)) return;
    var links = {};
    $all('#topnav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var groupOf = {}; // 세부 섹션 → 상위 내비 항목
    var current = null;
    $all('#view-main .sec').forEach(function (s) {
      if (links[s.id]) current = s.id;
      groupOf[s.id] = current;
    });
    navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var key = groupOf[en.target.id];
        Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === key); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $all('#view-main .sec').forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- 언어 ---------- */
  function initialLang() {
    var q = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.indexOf(q) > -1) return q;
    var saved = store(STORE_KEY);
    if (LANGS.indexOf(saved) > -1) return saved;
    return LANGS.indexOf(CONFIG.defaultLang) > -1 ? CONFIG.defaultLang : 'ko';
  }
  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) return;
    state.lang = lang;
    store(STORE_KEY, lang);
    document.documentElement.lang = lang;
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url.toString());
    } catch (e) { /* file:// 일부 환경 */ }
    $all('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    renderMain();
    renderers.forEach(function (fn) { fn(lang); });
    if (state.deck) state.deck.rebuild();
  }

  /* ---------- 화면 전환(라우팅) ---------- */
  function activate(name) {
    state.view = name;
    $all('#views > .view').forEach(function (v) { v.hidden = v.dataset.view !== name; });
    document.body.dataset.view = name;
  }
  function route() {
    var h = decodeURIComponent(window.location.hash.slice(1));
    if (routes[h]) {
      var ok = routes[h].enter();
      if (ok !== false) { activate(h); return; }
    }
    Object.keys(routes).forEach(function (k) { if (state.view === k && routes[k].leave) routes[k].leave(); });
    activate('main');
    if (h) {
      var t = document.getElementById(h);
      if (t) t.scrollIntoView();
    }
  }

  /* ---------- 발표 모드 ---------- */
  var STAGE_W = 1920, STAGE_H = 1080, STAGE_PAD_Y = 76;
  function Deck(startIndex) {
    var self = this;
    var root = document.createElement('div');
    root.className = 'deck';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.innerHTML =
      '<div class="deck__viewport"><div class="deck__stage" aria-live="polite"></div></div>' +
      '<div class="deck__bar">' +
        '<div class="deck__progress"><span></span></div>' +
        '<div class="deck__controls">' +
          '<span class="deck__title"></span>' +
          '<div class="deck__right">' +
            '<span class="deck__hint"></span>' +
            '<div class="lang lang--deck" role="group" aria-label="Language"><button type="button" data-lang="ko">KO</button><button type="button" data-lang="en">EN</button></div>' +
            '<button type="button" class="deck__btn" data-act="prev" aria-label="prev">‹</button>' +
            '<span class="deck__page"></span>' +
            '<button type="button" class="deck__btn" data-act="next" aria-label="next">›</button>' +
            '<button type="button" class="deck__btn deck__btn--exit" data-act="exit"></button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);
    document.body.classList.add('is-presenting');
    var stage = $('.deck__stage', root);
    var slides = [];
    var index = startIndex || 0;

    function collect() {
      var view = document.querySelector('#views > .view[data-view="' + state.view + '"]');
      slides = $all('[data-slide]', view);
    }
    function fit() {
      var bar = $('.deck__bar', root).offsetHeight;
      var s = Math.min(window.innerWidth / STAGE_W, (window.innerHeight - bar) / STAGE_H);
      stage.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
    }
    function autoFit(slide) {
      var inner = $('.sec__inner', slide);
      if (!inner) return;
      inner.style.transform = '';
      inner.style.width = '';
      inner.style.marginBottom = '';
      var avail = STAGE_H - STAGE_PAD_Y * 2;
      var h = inner.scrollHeight;
      if (h > avail) {
        var k = Math.max(avail / h, 0.6);
        inner.style.transformOrigin = 'top left';
        inner.style.transform = 'scale(' + k + ')';
        inner.style.width = (100 / k) + '%';
        inner.style.marginBottom = (-(h * (1 - k))) + 'px';  // 축소된 만큼 레이아웃 높이도 줄여 가운데 정렬 유지
      }
    }
    function show(i) {
      if (!slides.length) return;
      index = Math.max(0, Math.min(slides.length - 1, i));
      var clone = slides[index].cloneNode(true);
      clone.removeAttribute('id');
      $all('[id]', clone).forEach(function (n) { n.removeAttribute('id'); });
      clone.classList.add('slide');
      $all('img[loading]', clone).forEach(function (im) { im.removeAttribute('loading'); });
      stage.innerHTML = '';
      stage.appendChild(clone);
      autoFit(clone);
      $all('img', clone).forEach(function (im) { if (!im.complete) im.addEventListener('load', function () { autoFit(clone); }, { once: true }); });
      var d = data();
      $('.deck__page', root).textContent = (index + 1) + ' / ' + slides.length;
      $('.deck__title', root).textContent = d.ui.footer + ' · ' + (slides[index].dataset.title || '');
      $('.deck__progress span', root).style.width = ((index + 1) / slides.length * 100) + '%';
      $('.deck__hint', root).textContent = d.ui.keyboardHint;
      $('[data-act="exit"]', root).textContent = d.ui.exit + ' (ESC)';
      $('[data-act="prev"]', root).setAttribute('aria-label', d.ui.prev);
      $('[data-act="next"]', root).setAttribute('aria-label', d.ui.next);
      $all('.lang--deck button', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)); });
    }
    function onKey(e) {
      if (e.defaultPrevented) return;
      var k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') { e.preventDefault(); show(index + 1); }
      else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); show(index - 1); }
      else if (k === 'Home') { e.preventDefault(); show(0); }
      else if (k === 'End') { e.preventDefault(); show(slides.length - 1); }
      else if (k === 'Escape') { e.preventDefault(); self.close(); }
    }
    var touchX = null;
    root.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      touchX = null;
    });
    root.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      if (btn.dataset.lang) { setLang(btn.dataset.lang); return; }
      var act = btn.dataset.act;
      if (act === 'prev') show(index - 1);
      if (act === 'next') show(index + 1);
      if (act === 'exit') self.close();
    });
    function onFs() { if (!document.fullscreenElement && self.wentFullscreen) self.close(); }
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', fit);
    document.addEventListener('fullscreenchange', onFs);

    this.rebuild = function () { collect(); show(index); };
    this.isOpen = true;
    this.close = function () {
      if (!self.isOpen) return;
      self.isOpen = false;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', fit);
      document.removeEventListener('fullscreenchange', onFs);
      if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () {});
      root.remove();
      document.body.classList.remove('is-presenting');
      state.deck = null;
      var target = slides[index];
      if (target && target.id) target.scrollIntoView();
    };
    collect();
    fit();
    show(index);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(function () { self.wentFullscreen = true; fit(); }).catch(function () {});
    }
  }

  function currentSlideIndex() {
    var view = document.querySelector('#views > .view[data-view="' + state.view + '"]');
    var slides = $all('[data-slide]', view);
    var mid = window.innerHeight * 0.35;
    for (var i = slides.length - 1; i >= 0; i--) {
      if (slides[i].getBoundingClientRect().top <= mid) return i;
    }
    return 0;
  }
  function present(start) {
    if (state.deck) return;
    state.deck = new Deck(typeof start === 'number' ? start : currentSlideIndex());
  }

  /* ---------- 확장용 공개 API ---------- */
  window.CV = {
    lang: function () { return state.lang; },
    esc: esc,
    rich: rich,
    registerRoute: function (name, handlers) { routes[name] = handlers; },
    onRender: function (fn) { renderers.push(fn); },
    go: function (hash) { window.location.hash = hash; },
    goMain: function () {
      if (window.location.hash) window.history.pushState(null, '', window.location.pathname + window.location.search);
      route();
      window.scrollTo(0, 0);
    },
    activate: activate,
    present: present,
    isPresenting: function () { return !!state.deck; },
    closePresent: function () { if (state.deck) state.deck.close(); }
  };

  /* ---------- 시작 ---------- */
  function init() {
    state.lang = initialLang();
    $all('.topbar .lang button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
    $('#presentBtn').addEventListener('click', function () { present(); });
    $('#printBtn').addEventListener('click', function () { window.print(); });
    $('#brand').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('hashchange', route);
    setLang(state.lang);
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
