/* ============================================================
   Yu-Gi-Oh! Forbidden Memories — Application Logic
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput  = document.getElementById('searchInput');
  const cardsGrid    = document.getElementById('cardsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const resultsTotal = document.getElementById('resultsTotal');
  const filterLabel  = document.getElementById('filterLabel');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const filterBtns   = document.querySelectorAll('.filter-btn');

  let currentFilter = 'name';
  let allCards = [];

  /* ── Card-Type from ID (exact rules) ─────────────────────── */
  function getCardType(id) {
    const n = parseInt(id, 10);
    if (n >= 1   && n <= 300) return 'Monster';
    if (n >= 301 && n <= 319) return 'Equip';
    if (n === 320)            return 'Magic';
    if (n >= 321 && n <= 328) return 'Equip';
    if (n === 329)            return 'Magic';
    if (n >= 330 && n <= 335) return 'Field';
    if (n >= 336 && n <= 350) return 'Magic';
    if (n >= 351 && n <= 650) return 'Monster';
    if (n >= 651 && n <= 652) return 'Equip';
    if (n === 653)            return 'Magic';
    if (n === 654)            return 'Equip';
    if (n >= 655 && n <= 656) return 'Magic';
    if (n >= 657 && n <= 659) return 'Equip';
    if (n >= 660 && n <= 664) return 'Magic';
    if (n >= 665 && n <= 667) return 'Ritual';
    if (n === 668)            return 'Equip';
    if (n === 669)            return 'Magic';
    if (n >= 670 && n <= 671) return 'Ritual';
    if (n === 672)            return 'Magic';
    if (n >= 673 && n <= 680) return 'Ritual';
    if (n >= 681 && n <= 690) return 'Trap';
    if (n >= 691 && n <= 700) return 'Ritual';
    if (n >= 701 && n <= 720) return 'Monster';
    if (n === 721)            return 'Ritual';
    if (n === 722)            return 'Monster';
    return 'Monster';
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    if (typeof cardsData === 'undefined') return;
    allCards = cardsData.map(c => {
      const ct = getCardType(c.id);
      const isNonMonster = ['Equip','Magic','Field','Trap','Ritual'].includes(ct);
      return { ...c, cardType: ct, type: isNonMonster ? '' : (c.type || '') };
    });
    if (resultsTotal) resultsTotal.textContent = allCards.length;
    renderCards(allCards);
  }

  /* ── Render ──────────────────────────────────────────────── */
  function renderCards(cards) {
    if (!cardsGrid) return;
    if (resultsCount) resultsCount.textContent = cards.length;
    if (cards.length === 0) {
      cardsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results__icon">🔍</div>
          <div class="no-results__text">NENHUMA CARTA ENCONTRADA</div>
          <div class="no-results__hint">Tente outro termo de pesquisa</div>
        </div>`;
      return;
    }
    cardsGrid.innerHTML = cards.map(createCardHTML).join('');
  }

  /* ── Card HTML ───────────────────────────────────────────── */
  function createCardHTML(c) {
    const badge = c.cardType.toLowerCase();
    const m = c.cardType === 'Monster';
    return `
      <article class="card" data-card-type="${c.cardType}" data-id="${c.id}" id="card-${c.id}">
        <div class="card__header">
          <span class="card__id">Id: ${c.id}</span>
          <span class="card__type-badge card__type-badge--${badge}">${c.cardType}</span>
        </div>
        <div class="card__image-container">
          <img src="images/cards/${c.id}.png" alt="${c.name}" loading="lazy"
               onerror="this.onerror=null;this.parentNode.innerHTML='<div class=\\'card__image-placeholder\\'>${c.id}<small>IMG</small></div>'" />
        </div>
        <div class="card__body">
          <div class="card__name" title="${c.name}">Card: ${c.name}</div>
          <div class="card__stats">
            <div class="card__stat card__stat--atk">
              <span class="card__stat-label">ATK</span>
              <span class="card__stat-value">${m ? c.atk : ''}</span>
            </div>
            <div class="card__stat card__stat--def">
              <span class="card__stat-label">DEF</span>
              <span class="card__stat-value">${m ? c.def : ''}</span>
            </div>
            <div class="card__stat card__stat--level">
              <span class="card__stat-label">Level</span>
              <span class="card__stat-value">${m ? c.level : ''}</span>
            </div>
            <div class="card__stat card__stat--type">
              <span class="card__stat-label">Type</span>
              <span class="card__stat-value">${c.type || ''}</span>
            </div>
            <div class="card__stat card__stat--password">
              <span class="card__stat-label">Password</span>
              <span class="card__stat-value">${c.password || ''}</span>
            </div>
            <div class="card__stat card__stat--cost">
              <span class="card__stat-label">Cost</span>
              <span class="card__stat-value">${c.cost != null ? c.cost : ''}</span>
            </div>
          </div>
        </div>
        <div class="card__color-bar"></div>
      </article>`;
  }

  /* ── Search Logic ────────────────────────────────────────── */
  function performSearch() {
    const q = searchInput.value.trim();
    if (!q) { renderCards(allCards); return; }
    let out = [];

    switch (currentFilter) {

      case 'name': {
        const ql = q.toLowerCase();
        out = allCards.filter(c =>
          c.name.toLowerCase().includes(ql) ||
          c.id.includes(q) ||
          c.id === q.padStart(3, '0')
        );
        // If user typed a pure number, also scroll to that card
        if (/^\d{1,3}$/.test(q)) {
          const tid = q.padStart(3, '0');
          if (allCards.find(c => c.id === tid)) {
            renderCards(allCards);
            requestAnimationFrame(() => {
              const el = document.getElementById('card-' + tid);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('card--highlight');
                setTimeout(() => el.classList.remove('card--highlight'), 3000);
              }
            });
            return;
          }
        }
        break;
      }

      case 'atk':
        if (/^\d+$/.test(q)) {
          out = allCards.filter(c => c.cardType === 'Monster' && String(c.atk).startsWith(q));
        } else { out = allCards; }
        break;

      case 'def':
        if (/^\d+$/.test(q)) {
          out = allCards.filter(c => c.cardType === 'Monster' && String(c.def).startsWith(q));
        } else { out = allCards; }
        break;

      case 'cost':
        if (/^\d+$/.test(q)) {
          out = allCards.filter(c => String(c.cost).startsWith(q));
        } else { out = allCards; }
        break;

      case 'card-type':
        out = allCards.filter(c => c.cardType.toLowerCase().startsWith(q.toLowerCase()));
        break;

      case 'type':
        out = allCards.filter(c => c.type && c.type.toLowerCase().startsWith(q.toLowerCase()));
        break;

      case 'level': {
        if (/^\d+$/.test(q)) {
          const lv = parseInt(q, 10);
          if (lv >= 1 && lv <= 8) {
            out = allCards.filter(c => c.cardType === 'Monster' && c.level === lv);
          } else {
            out = allCards;   // out of range → show all
          }
        } else { out = allCards; }
        break;
      }

      default: out = allCards;
    }
    renderCards(out);
  }

  /* ── Filter Buttons ──────────────────────────────────────── */
  function setFilter(name) {
    currentFilter = name;
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === name));

    const ph = {
      name:       '🔍 Pesquisar por Nome da Carta ou ID...',
      atk:        '⚔️ Digite o valor do ATK...',
      def:        '🛡️ Digite o valor do DEF...',
      cost:       '💰 Digite o valor do Cost (0 - 999999)...',
      'card-type':'📋 Digite o Card-Type (Monster, Equip, Magic, Field, Trap, Ritual)...',
      type:       '🐉 Digite o Type (Dragon, Spellcaster, Warrior, etc.)...',
      level:      '⭐ Digite o Level (1 a 8)...'
    };
    const lb = {
      name:'NOME / ID', atk:'ATK', def:'DEF', cost:'COST',
      'card-type':'CARD-TYPE', type:'TYPE', level:'LEVEL'
    };

    searchInput.placeholder = ph[name] || ph.name;
    if (filterLabel) filterLabel.textContent = 'Filtro: ' + (lb[name] || lb.name);
    searchInput.value = '';
    searchInput.focus();
    renderCards(allCards);
  }

  /* ── Events ──────────────────────────────────────────────── */
  searchInput.addEventListener('input', performSearch);

  filterBtns.forEach(b => {
    b.addEventListener('click', () => {
      setFilter(currentFilter === b.dataset.filter ? 'name' : b.dataset.filter);
    });
  });

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey && e.key === 'f') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault(); searchInput.focus(); searchInput.select();
    }
    if (e.key === 'Escape') { searchInput.value = ''; searchInput.blur(); renderCards(allCards); }
  });

  init();
});
