/* ============================================================
   Yu-Gi-Oh! Forbidden Memories — Application Logic & QA Master
   ============================================================ */

const extraCardData = {
  '001': {
    guardianStars: ['Sun', 'Mars'],
    drops: [
      { name: 'Seto 3rd', rank: 'POW: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'seto-kaiba-third-icon.png' }
    ],
    uses: [
      { name: 'Seto 3rd', rate: '5.86', fraction: '120 de 2048º', icon: 'seto-kaiba-third-icon.png' },
      { name: 'Seto 2nd', rate: '2.34', fraction: '48 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Kaiba', rate: '2.20', fraction: '45 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'DarkNite', rate: '1.56', fraction: '32 de 2048º', icon: 'darknite-icon.png' },
      { name: 'Heishin 2nd', rate: '1.56', fraction: '32 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Nitemare', rate: '1.56', fraction: '32 de 2048º', icon: 'nightmare-icon.png' }
    ],
    equips: [
      { id: '315', name: 'Dragon Treasure', img: '315.png' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ],
    rituals: [
      {
        materials: [{ id: '001', name: 'Blue-Eyes White Dragon', count: 3 }],
        ritualCard: { id: '675', name: 'Ultimate Dragon' },
        result: { id: '380', name: 'Blue-Eyes Ultimate Dragon' },
        description: 'É necessário ter 3 "Blue-Eyes White Dragon" em campo. Ative a carta mágica de ritual "Ultimate Dragon".'
      }
    ]
  },
  '002': {
    guardianStars: ['Sun', 'Moon'],
    drops: [
      { name: 'Bandit Keith', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'bandit-keith-icon.png' },
      { name: 'High Mage Atenza', rank: 'POW/TEC: B/C/D', rate: '1.46', fraction: '30 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'High Mage Atenza', rank: 'TEC: S/A', rate: '1.37', fraction: '28 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'Meadow Mage', rank: 'POW: S/A', rate: '2.15', fraction: '44 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Meadow Mage', rank: 'POW/TEC: B/C/D', rate: '2.44', fraction: '50 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Meadow Mage', rank: 'TEC: S/A', rate: '2.25', fraction: '46 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'High Mage Secmeton', rank: 'TEC: S/A', rate: '2.05', fraction: '42 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'High Mage Secmeton', rank: 'POW/TEC: B/C/D', rate: '1.61', fraction: '33 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Seto 2nd', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Yami Bakura', rank: 'POW: S/A', rate: '2.44', fraction: '50 de 2048º', icon: 'yami-bakura-icon.png' }
    ],
    uses: [
      { name: 'Yami Bakura', rate: '1.56', fraction: '32 de 2048º', icon: 'yami-bakura-icon.png' },
      { name: 'Bandit Keith', rate: '1.22', fraction: '25 de 2048º', icon: 'bandit-keith-icon.png' },
      { name: 'High Mage Secmeton', rate: '0.39', fraction: '8 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Mai Valentine', rate: '0.39', fraction: '8 de 2048º', icon: 'mai-valentine-icon.png' },
      { name: 'Neku', rate: '0.39', fraction: '8 de 2048º', icon: 'neku-icon.png' },
      { name: 'Sebek', rate: '0.20', fraction: '4 de 2048º', icon: 'sebek-icon.png' },
      { name: 'High Mage Martis', rate: '0.10', fraction: '2 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'Seto 2nd', rate: '0.10', fraction: '2 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'High Mage Atenza', rate: '0.05', fraction: '1 de 2048º', icon: 'high-mage-atenza-icon.png' }
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
    ],
    fusions: [
      {
        rule: [
          { label: 'ELF', icon: 'spellcaster-icon.png' },
          { label: 'FAIRY', icon: 'fairy-icon.png' }
        ],
        material1: [
          { id: '264', name: 'Wing Egg Elf' },
          { id: '395', name: 'Dancing Elf' }
        ],
        material2: [
          { id: '130', name: 'Weather Control' },
          { id: '134', name: 'Mystical Capture Chain' },
          { id: '183', name: 'Lucky Trinket' },
          { id: '192', name: 'Key Mace' },
          { id: '208', name: 'Petit Angel' },
          { id: '229', name: 'Hourglass of Life' },
          { id: '260', name: 'Lunar Queen Elzaim' },
          { id: '264', name: 'Wing Egg Elf' },
          { id: '428', name: 'Magician of Faith' },
          { id: '486', name: 'Boo Koo' },
          { id: '492', name: 'Hoshiningen' },
          { id: '601', name: 'Tenderness' }
        ],
        result: { id: '002', name: 'Mystical Elf' }
      }
    ]
  },
  '003': { 
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'darknite-icon.png' },
      { name: 'High Mage Anubisius', rank: 'POW/TEC: B/C/D', rate: '1.17', fraction: '24 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Anubisius', rank: 'TEC: S/A', rate: '1.03', fraction: '21 de 2048º', icon: 'high-mage-anubisius-icon.png' }
    ],
    uses: [
      { name: 'Forest Mage', rate: '0.78', fraction: '16 de 2048º', icon: 'forest-mage-icon.png' }
    ],
    equips: [
      { id: '303', name: 'Dark Energy', img: '303.png' },
      { id: '304', name: 'Axe of Despair', img: '304.png' }
    ]
  },
  '004': { 
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' }
    ],
    uses: [
      { name: 'Isis', rate: '0.49', fraction: '10 de 2048º', icon: 'isis-icon.png' }
    ],
    equips: [
      { id: '305', name: 'Laser Cannon Armor', img: '305.png' }
    ]
  },
  '005': {
    guardianStars: ['Saturn', 'Sun'],
    drops: [
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' }
    ],
    uses: [
      { name: 'Forest Mage', rate: '0.78', fraction: '16 de 2048º', icon: 'forest-mage-icon.png' }
    ],
    equips: [
      { id: '303', name: 'Dark Energy', img: '303.png' }
    ]
  },
  '006': { 
    guardianStars: ['Moon', 'Jupiter'],
    drops: [
      { name: 'High Mage Atenza', rank: 'TEC: S/A', rate: '1.37', fraction: '28 de 2048º', icon: 'high-mage-atenza-icon.png' }
    ],
    uses: [
      { name: 'Bandit Keith', rate: '0.98', fraction: '20 de 2048º', icon: 'bandit-keith-icon.png' }
    ],
    equips: [
      { id: '303', name: 'Dark Energy', img: '303.png' }
    ]
  },
  '007': { guardianStars: ['Saturn', 'Moon'] },
  '008': { guardianStars: ['Jupiter', 'Sun'] },
  '009': { guardianStars: ['Moon', 'Pluto'] },
  '010': { guardianStars: ['Moon', 'Pluto'] }
};

document.addEventListener('DOMContentLoaded', () => {
  const cardsGrid = document.getElementById('cardsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (!document.getElementById('scrollTopBtn')) {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '&#8679;'; 
    btn.title = 'Voltar ao topo';
    document.body.appendChild(btn);
  }
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  /* 🔥 UX SÊNIOR: INJEÇÃO DO PREVIEW FLUTUANTE GLOBAL 🔥 */
  let globalPreview = document.getElementById('globalCardPreview');
  if (!globalPreview) {
    globalPreview = document.createElement('img');
    globalPreview.id = 'globalCardPreview';
    globalPreview.className = 'global-card-preview';
    document.body.appendChild(globalPreview);
  }

  /* Exibe Tooltip nas Pílulas Textuais */
  document.addEventListener('mouseover', e => {
    const link = e.target.closest('.fusion-text-link');
    if (link) {
      globalPreview.src = link.dataset.preview;
      globalPreview.classList.add('show');
    }
  });

  /* Segue o cursor limitando bordas */
  document.addEventListener('mousemove', e => {
    if (globalPreview.classList.contains('show')) {
      let leftPos = e.clientX + 15;
      let topPos = e.clientY + 15;
      if (leftPos + 130 > window.innerWidth) leftPos = e.clientX - 145;
      if (topPos + 185 > window.innerHeight) topPos = e.clientY - 200;
      globalPreview.style.left = leftPos + 'px';
      globalPreview.style.top = topPos + 'px';
    }
  });

  document.addEventListener('mouseout', e => {
    const link = e.target.closest('.fusion-text-link');
    if (link) globalPreview.classList.remove('show');
  });

  /* 🔥 GESTÃO BLINDADA DE ABAS NO CARD 🔥 */
  document.addEventListener('mouseover', e => {
    const icon = e.target.closest('.tab-icon');
    if (icon) {
      const card = icon.closest('.card');
      const tabName = icon.dataset.tab;
      card.setAttribute('data-active-tab', tabName);
    }
  });

  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card');
    if (card) {
      const rel = e.relatedTarget;
      if (!rel || (!card.contains(rel))) {
         card.setAttribute('data-active-tab', 'none');
      }
    }
  });

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

  function getTypeIconName(type) {
    if (!type) return '';
    const t = type.toLowerCase().trim();
    switch (t) {
      case 'fiend': return 'fiend_icon.png';
      case 'zombie': return 'zombie.png';
      case 'sea serpent': return 'sea-serpent-icon.png';
      case 'winged beast': return 'winged-beast-icon.png';
      case 'beast-warrior': return 'beast-warrior-icon.png';
      default: return `${t}-icon.png`;
    }
  }

  function getGuardianStarHTML(stars) {
    if (!stars || stars.length === 0) return '-';
    const gsMap = {
      'jupiter': 'jupter', 'jupter': 'jupter', 'mars': 'mars', 'mercury': 'mercury',
      'moon': 'moon', 'neptune': 'neptune', 'pluto': 'pluto', 'saturn': 'saturn',
      'sun': 'sun', 'uranus': 'uranus', 'venus': 'venus'
    };
    return stars.map(star => {
      const cleanStar = star.toLowerCase().trim();
      const iconPrefix = gsMap[cleanStar] || cleanStar;
      return `<span class="g-star-item">${star} <img class="g-star-icon" src="images/guardian_star_icon/${iconPrefix}-icon.png" alt="${star}" onerror="this.style.display='none'"></span>`;
    }).join('');
  }

  function init() {
    if (typeof cardsData === 'undefined') {
        console.error("ERRO QA: cardsData indefinido.");
        return;
    }
    allCards = cardsData.map(c => {
      const ct = getCardType(c.id);
      const isNonMonster = ['Equip','Magic','Field','Trap','Ritual'].includes(ct);
      return { ...c, cardType: ct, finalType: isNonMonster ? '' : (c.type || '') };
    });
    renderAllCardsOnce();
  }

  function renderAllCardsOnce() {
    if (!cardsGrid) return;
    
    cardsGrid.innerHTML = allCards.map((c, index) => {
      const m = c.cardType === 'Monster';
      const lazyAttr = index < 12 ? '' : 'loading="lazy"';
      
      let infoIconHTML = ''; let fusionIconHTML = ''; let equipIconHTML = ''; let ritualIconHTML = '';
      let infoOverlayHTML = ''; let fusionOverlayHTML = ''; let equipOverlayHTML = ''; let ritualOverlayHTML = '';
      let gStars = [];

      const isNonDroppable = (c.cost === 0 || c.cost === "0");
      let ribbonHTML = '';
      let imgWrapperClass = 'card-img-wrapper';

      if (isNonDroppable) {
        ribbonHTML = `<div class="non-droppable-ribbon">NÃO DROPÁVEL</div>`;
        imgWrapperClass += ' non-droppable-niche';
      }

      if (extraCardData[c.id]) {
        const x = extraCardData[c.id];
        if (x.guardianStars) gStars = x.guardianStars;

        /* PAINEL INTERNO: DROPS E USES */
        if (x.drops && x.drops.length > 0 || x.uses && x.uses.length > 0) {
          const sortData = (arr) => [...arr].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
          const sortedDrops = sortData(x.drops || []);
          const sortedUses = sortData(x.uses || []);

          infoIconHTML = `<img class="tab-icon icon-info" src="images/others-icon/info-icon_2.png" data-tab="info" title="Info/Drops">`;
          infoOverlayHTML = `<div class="card-overlay overlay-info"><div class="overlay-content">`;

          if (sortedDrops.length > 0) {
             infoOverlayHTML += `<h4 class="overlay-title">💎 QUEM DROPA</h4><div class="overlay-list">`;
             sortedDrops.forEach(d => {
                 infoOverlayHTML += `<div class="overlay-item">
                     <img class="char-img" src="images/icons/${d.icon}" ${lazyAttr}>
                     <div class="overlay-text">
                         <div class="overlay-row"><strong class="char-name">${d.name}</strong><span class="badge-rank">${d.rank}</span></div>
                         <div class="overlay-row rate-row"><span class="rate-pct">${d.rate}%</span> <span class="frac">(${d.fraction})</span></div>
                     </div>
                 </div>`;
             });
             infoOverlayHTML += `</div>`;
          }
          if (sortedUses.length > 0) {
             infoOverlayHTML += `<h4 class="overlay-title">⚔️ CHANCE DE USAR</h4><div class="overlay-list grid-2">`;
             sortedUses.forEach(u => {
                 infoOverlayHTML += `<div class="overlay-item item-small">
                     <img class="char-img-small" src="images/icons/${u.icon}" ${lazyAttr}>
                     <div class="overlay-text">
                         <strong class="char-name">${u.name}</strong>
                         <div class="rate-row"><span class="rate-pct">${u.rate}%</span></div>
                     </div>
                 </div>`;
             });
             infoOverlayHTML += `</div>`;
          }
          infoOverlayHTML += `</div></div>`;
        }

        /* PAINEL INTERNO: FUSÕES */
        if (x.fusions && x.fusions.length > 0) {
          fusionIconHTML = `<img class="tab-icon icon-fusion" src="images/others-icon/f-icon.png" data-tab="fusion" title="Fusões">`;
          fusionOverlayHTML = `<div class="card-overlay overlay-fusion"><div class="overlay-content">`;
          fusionOverlayHTML += `<h4 class="overlay-title">⚡ FUSÕES</h4><div class="fusion-matrix">`;

          x.fusions.forEach(f => {
            let ruleHTML = '';
            if (f.rule) {
              ruleHTML = `
                <div class="fusion-rule-banner">
                  <div class="fusion-type-block"><img class="fusion-type-icon" src="images/card_type_icons/${f.rule[0].icon}"><span class="fusion-type-title">${f.rule[0].label}</span></div>
                  <div class="fusion-operator">+</div>
                  <div class="fusion-type-block"><img class="fusion-type-icon" src="images/card_type_icons/${f.rule[1].icon}"><span class="fusion-type-title">${f.rule[1].label}</span></div>
                </div>`;
            }

            const buildTextLink = (card) => `
              <a href="#card-${card.id}" class="fusion-text-link" data-preview="images/cards/${card.id}.png">
                <span class="ft-id">#${card.id}</span><span class="ft-name">${card.name}</span>
              </a>`;

            let mat1HTML = '';
            if (c.id === '002' && f.material1) {
                mat1HTML = `<div class="ft-or-group-QA">${f.material1.map(buildTextLink).join('')}</div>`;
            } else if (f.material1) {
                mat1HTML = f.material1.map(buildTextLink).join('');
            }

            const mat2HTML = f.material2 ? f.material2.map(buildTextLink).join('') : '';
            const resHTML = f.result ? buildTextLink(f.result) : '';

            fusionOverlayHTML += `
              <div class="fusion-group">
                ${ruleHTML}
                <div class="fusion-tree-layout-QA">
                  <div class="fusion-col-QA mat1-col-QA">${mat1HTML}</div>
                  <div class="fusion-operator">+</div>
                  <div class="fusion-col-QA mat2-col-QA"><div class="fusion-scroll-grid-QA">${mat2HTML}</div></div>
                  <div class="fusion-operator">=</div>
                  <div class="fusion-col-QA res-col-QA">${resHTML}</div>
                </div>
              </div>`;
          });
          fusionOverlayHTML += `</div></div></div>`;
        }

        /* PAINEL INTERNO: EQUIPAMENTOS */
        if (x.equips && x.equips.length > 0) {
          equipIconHTML = `<img class="tab-icon icon-equip" src="images/others-icon/e-icon.png" data-tab="equip" title="Equipamentos">`;
          equipOverlayHTML = `
          <div class="card-overlay overlay-equip">
            <div class="overlay-content">
              <h4 class="overlay-title">🛡️ SE EQUIPA COM:</h4>
              <div class="overlay-list equip-grid">`;
          x.equips.forEach(eq => {
              equipOverlayHTML += `<div class="overlay-item equip-item">
                  <img class="equip-img" src="images/cards/${eq.img}" onerror="this.src='images/cards/placeholder.png'" ${lazyAttr}>
                  <div class="overlay-text"><strong class="equip-name">${eq.id} ${eq.name}</strong></div>
              </div>`;
          });
          equipOverlayHTML += `</div></div></div>`;
        }

        /* PAINEL INTERNO: RITUAIS */
        if (x.rituals && x.rituals.length > 0) {
          ritualIconHTML = `<img class="tab-icon icon-ritual" src="images/others-icon/r-icon.png" data-tab="ritual" title="Rituais">`;
          ritualOverlayHTML = `
          <div class="card-overlay overlay-ritual">
            <div class="overlay-content">
              <h4 class="overlay-title">🔥 SÍNTESE DE RITUAL</h4>
              <div class="ritual-list">`;
          x.rituals.forEach(r => {
             ritualOverlayHTML += `
               <div class="ritual-container">
                 <div class="ritual-equation">
                   <div class="ritual-part material-part focos">
                     <span class="ritual-qty focos-badge">${r.materials[0].count}x</span>
                     <img class="ritual-card-img focos-img" src="images/cards/${r.materials[0].id}.png" loading="lazy">
                     <span class="focos-id focos-badge">#${r.materials[0].id}</span>
                   </div>
                   <div class="ritual-math">+</div>
                   <div class="ritual-part ritual-spell focos">
                     <img class="ritual-card-img focos-img" src="images/cards/${r.ritualCard.id}.png" loading="lazy">
                     <span class="focos-id focos-badge spell-badge">#${r.ritualCard.id}</span>
                   </div>
                   <div class="ritual-math">=</div>
                   <div class="ritual-part result-part focos result-focos">
                     <img class="ritual-card-img result-img result-img-focos" src="images/cards/${r.result.id}.png" loading="lazy">
                     <span class="focos-id focos-badge result-badge">#${r.result.id}</span>
                   </div>
                 </div>
                 <p class="ritual-desc">${r.description}</p>
               </div>`;
          });
          ritualOverlayHTML += `</div></div></div>`;
        }
      }

      const displayType = c.finalType || c.cardType;
      const typeIconFile = getTypeIconName(displayType);
      const typeHtml = typeIconFile 
        ? `${displayType} <img class="type-icon" src="images/card_type_icons/${typeIconFile}" onerror="this.onerror=null; this.src='images/card_type_icons/${displayType.toLowerCase().replace(/\s+/g, '-')}-icon.png';" alt="${displayType}">`
        : displayType;

      const guardianStarRow = m 
        ? `<div class="stat-row full-width-desk stat-gstar"><span class="stat-label">GUARDIAN STAR</span><span class="stat-val guardian-stars-container">${getGuardianStarHTML(gStars)}</span></div>` 
        : '';

      return `
      <article class="card" data-type="${c.cardType}" id="card-${c.id}" data-active-tab="none">
        <div class="card-header">
          <div class="card-id-wrapper">
            <span class="card-id">ID: ${c.id}</span>
            <div class="icon-group">
               ${infoIconHTML}
               ${fusionIconHTML}
               ${equipIconHTML}
               ${ritualIconHTML}
            </div>
          </div>
          <span class="card-badge">${c.cardType}</span>
        </div>
        
        <div class="card-content-wrapper">
            <div class="card-default-view">
                <div class="${imgWrapperClass}">
                  <div class="glass-showcase">
                    <img class="card-img-front" src="images/cards/${c.id}.png" alt="${c.name}" ${lazyAttr} onerror="this.style.display='none'">
                    <img class="card-img-back" src="images/card_descriptions/${c.id}.png" alt="Descrição" loading="lazy" onerror="this.parentElement.classList.add('no-desc'); this.remove();">
                  </div>
                  ${ribbonHTML}
                </div>
                
                <div class="card-body">
                  <div class="card-title">${c.name}</div>
                  <div class="card-stats">
                    <div class="stat-row stat-atk"><span class="stat-label">ATK</span><span class="stat-val">${m ? `${c.atk} <img class="atk-def-icon" src="images/card_icon_atk_def/attack-icon.png">` : '-'}</span></div>
                    <div class="stat-row stat-def"><span class="stat-label">DEF</span><span class="stat-val">${m ? `${c.def} <img class="atk-def-icon" src="images/card_icon_atk_def/defense-icon.png">` : '-'}</span></div>
                    ${guardianStarRow}
                    <div class="stat-row stat-type"><span class="stat-label">TYPE</span><span class="stat-val type-with-icon">${typeHtml}</span></div>
                    <div class="stat-row stat-level">
                      <span class="stat-label">LEVEL</span>
                      <span class="stat-val">${m && c.level > 0 ? `${c.level} <span class="star-icon">★</span>` : '-'}</span>
                    </div>
                    <div class="stat-row stat-pass full-width-desk"><span class="stat-label">PASSWORD</span><span class="stat-val">${c.password || '-'}</span></div>
                    <div class="stat-row stat-cost full-width-desk"><span class="stat-label">COST</span><span class="stat-val">${c.cost !== null && c.cost !== undefined && c.cost !== '' ? `${c.cost} <span class="star-icon">★</span>` : '-'}</span></div>
                  </div>
                </div>
            </div>

            ${infoOverlayHTML}
            ${fusionOverlayHTML}
            ${equipOverlayHTML}
            ${ritualOverlayHTML}
        </div>
      </article>`;
    }).join('');
  }

  function performSearch() {
    const q = searchInput.value.trim().toLowerCase();
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
      case 'atk': out = allCards.filter(c => c.cardType === 'Monster' && String(c.atk).startsWith(q)); break;
      case 'def': out = allCards.filter(c => c.cardType === 'Monster' && String(c.def).startsWith(q)); break;
      case 'cost':
        if (/^\d+$/.test(q)) {
          const exactMatches = allCards.filter(c => c.cost !== null && c.cost !== undefined && String(c.cost) === q);
          out = exactMatches.length > 0 ? exactMatches : allCards.filter(c => c.cost !== null && c.cost !== undefined && String(c.cost).startsWith(q));
        } else { out = allCards; }
        break;
      case 'card-type': out = allCards.filter(c => c.cardType.toLowerCase().startsWith(q)); break;
      case 'type': out = allCards.filter(c => c.finalType.toLowerCase().startsWith(q)); break;
      case 'level': out = /^\d+$/.test(q) ? allCards.filter(c => c.cardType === 'Monster' && String(c.level) === q) : allCards; break;
    }

    const matchedIds = new Set(out.map(c => c.id));
    document.querySelectorAll('.card').forEach(node => {
      const id = node.id.replace('card-', '');
      node.style.display = matchedIds.has(id) ? 'flex' : 'none';
    });

    let noResultMsg = document.getElementById('no-results-msg');
    if (out.length === 0) {
      if (!noResultMsg) cardsGrid.insertAdjacentHTML('beforeend', `<div id="no-results-msg" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: 'Orbitron'; padding: 50px;"><div style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;">🔍</div><div style="font-size: 0.9rem; letter-spacing: 2px;">NENHUMA CARTA ENCONTRADA</div></div>`);
    } else if (noResultMsg) noResultMsg.remove();
  }

  function setFilter(name) {
    currentFilter = name;
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === name));
    const ph = {
      name: 'Digite o nome da carta ou o ID, de 001 à 722.', atk: '⚔️ Digite o valor do ATK...',
      def: '🛡️ Digite o valor do DEF...', cost: '💰 Digite o valor de Cost desejado...',
      'card-type': '📋 Digite o Card-Type (Monster, Equip...)...', type: '🐉 Digite o Type...', level: '⭐ Digite o Level (1 a 8)...'
    };
    searchInput.placeholder = ph[currentFilter];
    searchInput.value = '';
    searchInput.focus();
    performSearch(); 
  }

  searchInput.addEventListener('input', performSearch);
  filterBtns.forEach(b => {
    b.addEventListener('click', () => setFilter(currentFilter === b.dataset.filter ? 'name' : b.dataset.filter));
  });

  init();
});