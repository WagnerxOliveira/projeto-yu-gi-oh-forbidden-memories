/* ============================================================
   Yu-Gi-Oh! Forbidden Memories — Application Logic
   ============================================================ */

/* ── BANCO DE DADOS DE DROPS E EQUIPAMENTOS ── */
const extraCardData = {
  '001': {
    drops: [
      { name: 'Seto 3rd', rank: 'POW: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'seto-kaiba-third-icon.png' }
    ],
    uses: [
      { name: 'DarkNite', rate: '1.56', fraction: '32 de 2048º', icon: 'darknite-icon.png' },
      { name: 'Heishin 2nd', rate: '1.56', fraction: '32 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Kaiba', rate: '2.20', fraction: '45 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Nitemare', rate: '1.56', fraction: '32 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Seto 2nd', rate: '2.34', fraction: '48 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Seto 3rd', rate: '5.86', fraction: '120 de 2048º', icon: 'seto-kaiba-third-icon.png' }
    ],
    equips: [
      { id: '315', name: 'Dragon Treasure', img: '315.jpg' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ]
  },
  '002': {
    drops: [
      { name: 'Bandit Keith', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'bandit-keith-icon.png' },
      { name: 'Heishin', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin', rank: 'TEC: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin 2nd', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Heishin 2nd', rank: 'TEC: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Heishin 2nd', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'High Mage Atenza', rank: 'POW/TEC: B/C/D', rate: '1.46', fraction: '30 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'High Mage Atenza', rank: 'TEC: S/A', rate: '1.37', fraction: '28 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'High Mage Atenza', rank: 'POW: S/A', rate: '1.22', fraction: '25 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'High Mage Secmeton', rank: 'POW/TEC: B/C/D', rate: '1.61', fraction: '33 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'High Mage Secmeton', rank: 'TEC: S/A', rate: '2.05', fraction: '42 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'High Mage Secmeton', rank: 'POW: S/A', rate: '1.22', fraction: '25 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Mai Valentine', rank: 'POW: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'mai-valentine-icon.png' },
      { name: 'Meadow Mage', rank: 'POW: S/A', rate: '2.15', fraction: '44 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Meadow Mage', rank: 'POW/TEC: B/C/D', rate: '2.44', fraction: '50 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Meadow Mage', rank: 'TEC: S/A', rate: '2.25', fraction: '46 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Sebek', rank: 'POW: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Sebek', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Sebek', rank: 'TEC: S/A', rate: '1.17', fraction: '24 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Seto 2nd', rank: 'POW: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Seto 2nd', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Seto 2nd', rank: 'TEC: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Simon Muran', rank: 'POW: S/A', rate: '1.32', fraction: '27 de 2048º', icon: 'simon-muran-icon.png' },
      { name: 'Yami Bakura', rank: 'POW: S/A', rate: '2.44', fraction: '50 de 2048º', icon: 'yami-bakura-icon.png' }
    ],
    uses: [
      { name: 'Bandit Keith', rate: '1.22', fraction: '25 de 2048º', icon: 'bandit-keith-icon.png' },
      { name: 'High Mage Atenza', rate: '0.05', fraction: '1 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'High Mage Martis', rate: '0.10', fraction: '2 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Secmeton', rate: '0.39', fraction: '8 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Mai Valentine', rate: '0.39', fraction: '8 de 2048º', icon: 'mai-valentine-icon.png' },
      { name: 'Neku', rate: '0.39', fraction: '8 de 2048º', icon: 'neku-icon.png' },
      { name: 'Sebek', rate: '0.20', fraction: '4 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Seto 2nd', rate: '0.10', fraction: '2 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Yami Bakura', rate: '1.56', fraction: '32 de 2048º', icon: 'yami-bakura-icon.png' }
    ],
    equips: [
      { id: '307', name: "Elf's Light", img: '307.png' },
      { id: '312', name: 'Silver Bow and Arrow', img: '312.png' },
      { id: '316', name: 'Electro-whip', img: '316.png' },
      { id: '317', name: 'Cyber Shield', img: '317.png' },
      { id: '321', name: 'Malevolent Nuzzler', img: '321.png' },
      { id: '323', name: 'Book of Secret Arts', img: '323.png' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput  = document.getElementById('searchInput');
  const cardsGrid    = document.getElementById('cardsGrid');
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  let currentFilter = 'name';
  let allCards = [];

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

  function init() {
    if (typeof cardsData === 'undefined') return;
    allCards = cardsData.map(c => {
      const ct = getCardType(c.id);
      const isNonMonster = ['Equip','Magic','Field','Trap','Ritual'].includes(ct);
      return { ...c, cardType: ct, finalType: isNonMonster ? '' : (c.type || '') };
    });
    renderCards(allCards);
  }

  function renderCards(cards) {
    if (!cardsGrid) return;
    if (cards.length === 0) {
      cardsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: 'Orbitron'; padding: 50px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;">🔍</div>
          <div style="font-size: 0.9rem; letter-spacing: 2px;">NENHUMA CARTA ENCONTRADA</div>
        </div>`;
      return;
    }

    cardsGrid.innerHTML = cards.map(c => {
      const m = c.cardType === 'Monster';
      let infoIconHTML = '';

      if (extraCardData[c.id]) {
        const x = extraCardData[c.id];
        
        let overlayHTML = `
        <div class="card-overlay">
          <div class="overlay-header">
            <span class="overlay-header-id">ID: ${c.id}</span>
            <span class="overlay-header-name">${c.name}</span>
          </div>
          <div class="overlay-content">`;

        // 1. Quem Dropa (Ordenado Decrescente)
        if (x.drops && x.drops.length > 0) {
           const sortedDrops = [...x.drops].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
           overlayHTML += `<h4 class="overlay-title"><span class="icon">💎</span> QUEM DROPA</h4><div class="overlay-list">`;
           sortedDrops.forEach(d => {
             overlayHTML += `
              <div class="overlay-item">
                <img class="char-img" src="images/icons/${d.icon}" alt="${d.name}" loading="lazy">
                <div class="overlay-text">
                  <div class="overlay-row">
                    <strong class="char-name">${d.name}</strong>
                    <span class="badge-rank">${d.rank}</span>
                  </div>
                  <div class="overlay-row rate-row">
                    <span class="rate-pct">${d.rate}%</span> <span class="frac">(${d.fraction})</span>
                  </div>
                </div>
              </div>`;
           });
           overlayHTML += `</div>`;
        }

        // 2. Quem Usa (Ordenado Decrescente)
        if (x.uses && x.uses.length > 0) {
           const sortedUses = [...x.uses].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
           overlayHTML += `<h4 class="overlay-title"><span class="icon">⚔️</span> CHANCE DE USAR</h4><div class="overlay-list grid-2">`;
           sortedUses.forEach(u => {
              overlayHTML += `
              <div class="overlay-item item-small">
                <img class="char-img-small" src="images/icons/${u.icon}" alt="${u.name}" loading="lazy">
                <div class="overlay-text">
                  <strong class="char-name">${u.name}</strong>
                  <div class="rate-row"><span class="rate-pct">${u.rate}%</span></div>
                </div>
              </div>`;
           });
           overlayHTML += `</div>`;
        }

        // 3. Equipamentos
        if (x.equips && x.equips.length > 0) {
           overlayHTML += `<h4 class="overlay-title"><span class="icon">🛡️</span> SE EQUIPA COM:</h4><div class="overlay-list">`;
           x.equips.forEach(eq => {
              overlayHTML += `
              <div class="overlay-item equip-item">
                <img class="equip-img" src="images/cards/${eq.img}" alt="${eq.name}" loading="lazy" onerror="this.src='images/cards/placeholder.png'">
                <div class="overlay-text">
                  <strong class="equip-name">${eq.id} — ${eq.name}</strong>
                </div>
              </div>`;
           });
           overlayHTML += `</div>`;
        }
        overlayHTML += `</div></div>`;

        infoIconHTML = `<div class="info-icon" title="Ver Informações Extras">i${overlayHTML}</div>`;
      }

      return `
      <article class="card" data-type="${c.cardType}" id="card-${c.id}">
        <div class="card-header">
          <div class="card-id-wrapper">
            <span class="card-id">ID: ${c.id}</span>
            ${infoIconHTML}
          </div>
          <span class="card-badge">${c.cardType}</span>
        </div>
        <div class="card-img-wrapper">
          <img src="images/cards/${c.id}.png" alt="${c.name}" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="card-body">
          <div class="card-title">${c.name}</div>
          <div class="card-stats">
            <div class="stat-row stat-atk"><span class="stat-label">ATK</span><span class="stat-val">${m ? c.atk : '-'}</span></div>
            <div class="stat-row stat-def"><span class="stat-label">DEF</span><span class="stat-val">${m ? c.def : '-'}</span></div>
            <div class="stat-row stat-type"><span class="stat-label">Type</span><span class="stat-val">${c.finalType || '-'}</span></div>
            <div class="stat-row stat-level"><span class="stat-label">Level</span><span class="stat-val">${m && c.level > 0 ? c.level : '-'}</span></div>
            <div class="stat-row stat-pass full-width"><span class="stat-label">Password</span><span class="stat-val">${c.password || '-'}</span></div>
            <div class="stat-row stat-cost full-width"><span class="stat-label">Cost</span><span class="stat-val">${c.cost > 0 ? c.cost : '-'}</span></div>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  function performSearch() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { renderCards(allCards); return; }
    let out = [];

    switch (currentFilter) {
      case 'name':
        out = allCards.filter(c => c.name.toLowerCase().includes(q) || c.id.includes(q) || c.id === q.padStart(3, '0'));
        if (/^\d{1,3}$/.test(q)) {
          const tid = q.padStart(3, '0');
          setTimeout(() => {
            const el = document.getElementById('card-' + tid);
            if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
        break;
      case 'atk':
        out = allCards.filter(c => c.cardType === 'Monster' && String(c.atk).startsWith(q));
        break;
      case 'def':
        out = allCards.filter(c => c.cardType === 'Monster' && String(c.def).startsWith(q));
        break;
      case 'cost':
        if (/^\d+$/.test(q)) {
          const lastChar = q.slice(-1);
          out = (lastChar === '0' || lastChar === '5') ? allCards.filter(c => String(c.cost).startsWith(q)) : allCards;
        } else { out = allCards; }
        break;
      case 'card-type':
        out = allCards.filter(c => c.cardType.toLowerCase().startsWith(q));
        break;
      case 'type':
        out = allCards.filter(c => c.finalType.toLowerCase().startsWith(q));
        break;
      case 'level':
        if (/^\d+$/.test(q)) {
          const lv = parseInt(q, 10);
          out = (lv >= 1 && lv <= 8) ? allCards.filter(c => c.cardType === 'Monster' && c.level === lv) : allCards;
        } else { out = allCards; }
        break;
    }
    renderCards(out);
  }

  function setFilter(name) {
    currentFilter = name;
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === name));
    const ph = {
      name: '🔍 Pesquisar por Nome da Carta ou ID...', atk: '⚔️ Digite o valor do ATK...',
      def: '🛡️ Digite o valor do DEF...', cost: '💰 Digite o Cost (Terminado em 0 ou 5)...',
      'card-type': '📋 Digite o Card-Type (Monster, Equip...)...', type: '🐉 Digite o Type...', level: '⭐ Digite o Level (1 a 8)...'
    };
    searchInput.placeholder = ph[currentFilter];
    searchInput.value = '';
    searchInput.focus();
    renderCards(allCards);
  }

  searchInput.addEventListener('input', performSearch);
  filterBtns.forEach(b => {
    b.addEventListener('click', () => setFilter(currentFilter === b.dataset.filter ? 'name' : b.dataset.filter));
  });

  window.addEventListener('scroll', () => { scrollTopBtn.classList.toggle('show', window.scrollY > 400); });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  init();
});