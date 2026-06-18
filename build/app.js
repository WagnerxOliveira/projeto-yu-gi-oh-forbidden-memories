/* ============================================================
   Yu-Gi-Oh! Forbidden Memories — Application Logic
   ============================================================ */

/* ── BANCO DE DADOS DE DROPS E EQUIPAMENTOS ── */
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
    ]
  },
  '003': { 
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'darknite-icon.png' },
      { name: 'High Mage Anubisius', rank: 'POW/TEC: B/C/D', rate: '1.17', fraction: '24 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Anubisius', rank: 'TEC: S/A', rate: '1.03', fraction: '21 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Anubisius', rank: 'POW: S/A', rate: '1.17', fraction: '24 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Kepura', rank: 'TEC: S/A', rate: '4.88', fraction: '100 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW: S/A', rate: '2.93', fraction: '60 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW/TEC: B/C/D', rate: '3.91', fraction: '80 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Martis', rank: 'POW: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'POW/TEC: B/C/D', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'TEC: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'Kaiba', rank: 'POW: S/A', rate: '6.84', fraction: '140 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'POW/TEC: B/C/D', rate: '8.50', fraction: '174 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Pegasus', rank: 'POW: S/A', rate: '1.66', fraction: '34 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Pegasus', rank: 'POW/TEC: B/C/D', rate: '2.15', fraction: '44 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Weevil Underwood', rank: 'POW: S/A', rate: '0.98', fraction: '20 de 2048º', icon: 'weevil-underwood-icon.png' },
      { name: 'Weevil Underwood', rank: 'POW/TEC: B/C/D', rate: '1.61', fraction: '33 de 2048º', icon: 'weevil-underwood-icon.png' }
    ],
    uses: [
      { name: 'Forest Mage', rate: '0.78', fraction: '16 de 2048º', icon: 'forest-mage-icon.png' },
      { name: 'High Mage Anubisius', rate: '0.20', fraction: '4 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Kepura', rate: '0.05', fraction: '1 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Martis', rate: '0.39', fraction: '8 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'Kaiba', rate: '0.05', fraction: '1 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Mage Soldier', rate: '0.59', fraction: '12 de 2048º', icon: 'mage-soldier-icon.png' },
      { name: 'Meadow Mage', rate: '1.17', fraction: '24 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Pegasus', rate: '0.39', fraction: '8 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Seto', rate: '0.59', fraction: '12 de 2048º', icon: 'seto-icon.png' },
      { name: 'Weevil Underwood', rate: '0.78', fraction: '16 de 2048º', icon: 'weevil-underwood-icon.png' }
    ],
    equips: [
      { id: '303', name: 'Dark Energy', img: '303.png' },
      { id: '304', name: 'Axe of Despair', img: '304.png' },
      { id: '305', name: 'Laser Cannon Armor', img: '305.png' },
      { id: '308', name: 'Beast Fangs', img: '308.png' },
      { id: '316', name: 'Electro-whip', img: '316.png' },
      { id: '321', name: 'Malevolent Nuzzler', img: '321.png' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ]
  },
  '004': { 
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'darknite-icon.png' },
      { name: 'Duel Master K', rank: 'TEC: S/A', rate: '0.73', fraction: '15 de 2048º', icon: 'duel-master-k-icon.png' },
      { name: 'Duel Master K', rank: 'POW: S/A', rate: '0.68', fraction: '14 de 2048º', icon: 'duel-master-k-icon.png' },
      { name: 'Duel Master K', rank: 'POW/TEC: B/C/D', rate: '0.88', fraction: '18 de 2048º', icon: 'duel-master-k-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'TEC: S/A', rate: '2.73', fraction: '56 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Martis', rank: 'POW/TEC: B/C/D', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'TEC: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'POW: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'Isis', rank: 'POW: S/A', rate: '2.15', fraction: '44 de 2048º', icon: 'isis-icon.png' },
      { name: 'Isis', rank: 'POW/TEC: B/C/D', rate: '3.13', fraction: '64 de 2048º', icon: 'isis-icon.png' },
      { name: 'Isis', rank: 'TEC: S/A', rate: '2.73', fraction: '56 de 2048º', icon: 'isis-icon.png' },
      { name: 'Jono', rank: 'POW: S/A', rate: '0.98', fraction: '20 de 2048º', icon: 'jono-icon.png' },
      { name: 'Jono 2nd', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'jono-2nd-icon.png' },
      { name: 'Jono 2nd', rank: 'POW/TEC: B/C/D', rate: '1.12', fraction: '23 de 2048º', icon: 'jono-2nd-icon.png' },
      { name: 'Jono 2nd', rank: 'TEC: S/A', rate: '0.88', fraction: '18 de 2048º', icon: 'jono-2nd-icon.png' },
      { name: 'Kaiba', rank: 'POW/TEC: B/C/D', rate: '4.20', fraction: '86 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'TEC: S/A', rate: '4.20', fraction: '86 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'POW: S/A', rate: '3.42', fraction: '70 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Nitemare', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Nitemare', rank: 'POW/TEC: B/C/D', rate: '2.34', fraction: '48 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Nitemare', rank: 'TEC: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Pegasus', rank: 'TEC: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Pegasus', rank: 'POW: S/A', rate: '1.66', fraction: '34 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Pegasus', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Villager3', rank: 'POW: S/A', rate: '0.68', fraction: '14 de 2048º', icon: 'villager3-icon.png' },
      { name: 'Villager3', rank: 'POW/TEC: B/C/D', rate: '0.88', fraction: '18 de 2048º', icon: 'villager3-icon.png' },
      { name: 'Villager3', rank: 'TEC: S/A', rate: '0.73', fraction: '15 de 2048º', icon: 'villager3-icon.png' }
    ],
    uses: [
      { name: 'Isis', rate: '0.49', fraction: '10 de 2048º', icon: 'isis-icon.png' },
      { name: 'Jono', rate: '0.10', fraction: '2 de 2048º', icon: 'jono-icon.png' },
      { name: 'Jono 2nd', rate: '0.39', fraction: '8 de 2048º', icon: 'jono-2nd-icon.png' },
      { name: 'Kaiba', rate: '0.05', fraction: '1 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Mountain Mage', rate: '1.17', fraction: '24 de 2048º', icon: 'mountain-mage-icon.png' },
      { name: 'Pegasus', rate: '0.39', fraction: '8 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Villager3', rate: '0.88', fraction: '18 de 2048º', icon: 'villager3-icon.png' }
    ],
    equips: [
      { id: '305', name: 'Laser Cannon Armor', img: '305.png' },
      { id: '308', name: 'Beast Fangs', img: '308.png' },
      { id: '313', name: 'Horn of Light', img: '313.png' },
      { id: '315', name: 'Dragon Treasure', img: '315.png' },
      { id: '327', name: 'Follow Wind', img: '327.png' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ]
  },
  '005': { guardianStars: ['Saturn', 'Sun'] },
  '006': { guardianStars: ['Moon', 'Jupiter'] },
  '007': { guardianStars: ['Saturn', 'Moon'] },
  '008': { guardianStars: ['Jupiter', 'Sun'] },
  '009': { guardianStars: ['Moon', 'Pluto'] },
  '010': { guardianStars: ['Moon', 'Pluto'] }
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cardsGrid = document.getElementById('cardsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // 🚀 INJEÇÃO DINÂMICA DO BOTÃO SCROLL TO TOP 🚀
  if (!document.getElementById('scrollTopBtn')) {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '&#8679;'; // Código HTML para Seta para cima (⇧)
    btn.title = 'Voltar ao topo';
    document.body.appendChild(btn);
  }
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  let currentFilter = 'name';
  let allCards = [];

  /* ── LÓGICA DE GERENCIAMENTO DE OVERLAY ── */
  document.addEventListener('mouseover', e => {
    const infoIcon = e.target.closest('.info-icon');
    const infoOverlay = e.target.closest('.card-overlay-info');
    const equipIcon = e.target.closest('.equip-icon');
    const equipOverlay = e.target.closest('.card-overlay-equip');

    if (infoIcon || infoOverlay) {
      const card = (infoIcon || infoOverlay).closest('.card');
      if (card) {
         card.classList.remove('show-equip-overlay'); 
         card.classList.add('show-info-overlay'); 
      }
    }
    
    if (equipIcon || equipOverlay) {
      const card = (equipIcon || equipOverlay).closest('.card');
      if (card) {
         card.classList.remove('show-info-overlay'); 
         card.classList.add('show-equip-overlay'); 
      }
    }
  });

  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card');
    if (card) {
      const rel = e.relatedTarget;
      if (!rel || (!rel.closest('.info-icon') && !rel.closest('.card-overlay-info'))) {
        card.classList.remove('show-info-overlay');
      }
      if (!rel || (!rel.closest('.equip-icon') && !rel.closest('.card-overlay-equip'))) {
        card.classList.remove('show-equip-overlay');
      }
    }
  });

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
    if (typeof cardsData === 'undefined') return;
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
      
      let infoIconHTML = '';
      let equipIconHTML = '';
      let infoOverlayHTML = '';
      let equipOverlayHTML = '';
      let gStars = [];

      const isAboveTheFold = index < 12;
      const lazyAttr = isAboveTheFold ? '' : 'loading="lazy"';
      const fetchPrio = isAboveTheFold ? 'fetchpriority="high"' : '';

      const isNonDroppable = (c.cost === 0 || c.cost === "0");
      let ribbonHTML = '';
      let imgWrapperClass = 'card-img-wrapper';

      if (isNonDroppable) {
        ribbonHTML = `<div class="non-droppable-ribbon" title="Item Único: Não obtido via Drop">NÃO DROPÁVEL</div>`;
        imgWrapperClass += ' non-droppable-niche';
      }

      if (extraCardData[c.id]) {
        const x = extraCardData[c.id];
        if (x.guardianStars) gStars = x.guardianStars;

        const sortData = (arr) => [...arr].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
        const sortedDrops = sortData(x.drops || []);
        const sortedUses = sortData(x.uses || []);

        if (sortedDrops.length > 0 || sortedUses.length > 0) {
          infoIconHTML = `<img class="info-icon" src="images/others-icon/info-icon_2.png" alt="Info" title="Ver Drops e Usos">`;
          infoOverlayHTML = `
          <div class="card-overlay card-overlay-info">
            <div class="overlay-header">
              <span class="overlay-header-id">ID: ${c.id}</span>
              <span class="overlay-header-name">${c.name}</span>
            </div>
            <div class="overlay-content">`;

          if (sortedDrops.length > 0) {
             infoOverlayHTML += `<h4 class="overlay-title"><span class="icon">💎</span> QUEM DROPA</h4><div class="overlay-list">`;
             sortedDrops.forEach(d => infoOverlayHTML += `<div class="overlay-item"><img class="char-img" src="images/icons/${d.icon}" ${lazyAttr}><div class="overlay-text"><div class="overlay-row"><strong class="char-name">${d.name}</strong><span class="badge-rank">${d.rank}</span></div><div class="overlay-row rate-row"><span class="rate-pct">${d.rate}%</span> <span class="frac">(${d.fraction})</span></div></div></div>`);
             infoOverlayHTML += `</div>`;
          }

          if (sortedUses.length > 0) {
             infoOverlayHTML += `<h4 class="overlay-title"><span class="icon">⚔️</span> CHANCE DE USAR</h4><div class="overlay-list grid-2">`;
             sortedUses.forEach(u => infoOverlayHTML += `<div class="overlay-item item-small"><img class="char-img-small" src="images/icons/${u.icon}" ${lazyAttr}><div class="overlay-text"><strong class="char-name">${u.name}</strong><div class="rate-row"><span class="rate-pct">${u.rate}%</span></div></div></div>`);
             infoOverlayHTML += `</div>`;
          }
          infoOverlayHTML += `</div></div>`;
        }

        if (x.equips && x.equips.length > 0) {
          equipIconHTML = `<img class="equip-icon" src="images/others-icon/e-icon.png" alt="Equips" title="Ver Cartas de Equipamento">`;
          equipOverlayHTML = `
          <div class="card-overlay card-overlay-equip equip-theme">
            <div class="overlay-header">
              <span class="overlay-header-id">ID: ${c.id}</span>
              <span class="overlay-header-name">${c.name}</span>
            </div>
            <div class="overlay-content">
              <h4 class="overlay-title"><span class="icon">🛡️</span> SE EQUIPA COM:</h4>
              <div class="overlay-list">`;
          
          x.equips.forEach(eq => equipOverlayHTML += `<div class="overlay-item equip-item"><img class="equip-img" src="images/cards/${eq.img}" onerror="this.src='images/cards/placeholder.png'" ${lazyAttr}><div class="overlay-text"><strong class="equip-name">${eq.id} ${eq.name}</strong></div></div>`);
          equipOverlayHTML += `</div></div></div>`;
        }
      }

      const displayType = c.finalType || c.cardType;
      const typeIconFile = getTypeIconName(displayType);
      const typeHtml = typeIconFile 
        ? `${displayType} <img class="type-icon" src="images/card_type_icons/${typeIconFile}" onerror="this.onerror=null; this.src='images/card_type_icons/${displayType.toLowerCase().replace(/\s+/g, '-')}-icon.png';" alt="${displayType}">`
        : displayType;

      const guardianStarRow = m 
        ? `<div class="stat-row full-width-desk stat-gstar"><span class="stat-label">Guardian Star</span><span class="stat-val guardian-stars-container">${getGuardianStarHTML(gStars)}</span></div>` 
        : '';

      return `
      <article class="card" data-type="${c.cardType}" id="card-${c.id}">
        ${infoOverlayHTML}
        ${equipOverlayHTML}

        <div class="card-header">
          <div class="card-id-wrapper">
            <span class="card-id">ID: ${c.id}</span>
            <div class="icon-group">
               ${infoIconHTML}
               ${equipIconHTML}
            </div>
          </div>
          <span class="card-badge">${c.cardType}</span>
        </div>
        
        <div class="${imgWrapperClass}" title="Ver descrição da carta">
          <img class="card-img-front" src="images/cards/${c.id}.png" alt="${c.name}" ${lazyAttr} ${fetchPrio} onerror="this.style.display='none'">
          <img class="card-img-back" src="images/card_descriptions/${c.id}.png" alt="Descrição ${c.name}" loading="lazy" onerror="this.parentElement.classList.add('no-desc'); this.remove();">
          ${ribbonHTML}
        </div>
        
        <div class="card-body">
          <div class="card-title">${c.name}</div>
          <div class="card-stats">
            <div class="stat-row stat-atk"><span class="stat-label">ATK</span><span class="stat-val">${m ? `${c.atk} <img class="atk-def-icon" src="images/card_icon_atk_def/attack-icon.png" alt="ATK">` : '-'}</span></div>
            <div class="stat-row stat-def"><span class="stat-label">DEF</span><span class="stat-val">${m ? `${c.def} <img class="atk-def-icon" src="images/card_icon_atk_def/defense-icon.png" alt="DEF">` : '-'}</span></div>
            ${guardianStarRow}
            <div class="stat-row stat-type"><span class="stat-label">Type</span><span class="stat-val type-with-icon">${typeHtml}</span></div>
            <div class="stat-row stat-level">
              <span class="stat-label">
                <span class="text-desktop">Lv</span><span class="text-mobile">LEVEL</span>
              </span>
              <span class="stat-val">${m && c.level > 0 ? `${c.level} <span class="star-icon">★</span>` : '-'}</span>
            </div>
            <div class="stat-row stat-pass full-width-desk"><span class="stat-label">Password</span><span class="stat-val">${c.password || '-'}</span></div>
            <div class="stat-row stat-cost full-width-desk"><span class="stat-label">Cost</span><span class="stat-val">${c.cost !== null && c.cost !== undefined && c.cost !== '' ? `${c.cost} <span class="star-icon">★</span>` : '-'}</span></div>
          </div>
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
      case 'atk':
        out = allCards.filter(c => c.cardType === 'Monster' && String(c.atk).startsWith(q));
        break;
      case 'def':
        out = allCards.filter(c => c.cardType === 'Monster' && String(c.def).startsWith(q));
        break;
      case 'cost':
        if (/^\d+$/.test(q)) {
          const exactMatches = allCards.filter(c => c.cost !== null && c.cost !== undefined && String(c.cost) === q);
          if (exactMatches.length > 0) { out = exactMatches; } 
          else { out = allCards.filter(c => c.cost !== null && c.cost !== undefined && String(c.cost).startsWith(q)); }
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
          out = allCards.filter(c => c.cardType === 'Monster' && String(c.level) === q);
        } else { out = allCards; }
        break;
    }

    const matchedIds = new Set(out.map(c => c.id));
    const allCardNodes = document.querySelectorAll('.card');
    allCardNodes.forEach(node => {
      const id = node.id.replace('card-', '');
      if (matchedIds.has(id)) {
        node.style.display = 'flex';
      } else {
        node.style.display = 'none';
      }
    });

    let noResultMsg = document.getElementById('no-results-msg');
    if (out.length === 0) {
      if (!noResultMsg) {
        cardsGrid.insertAdjacentHTML('beforeend', `<div id="no-results-msg" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: 'Orbitron'; padding: 50px;"><div style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;">🔍</div><div style="font-size: 0.9rem; letter-spacing: 2px;">NENHUMA CARTA ENCONTRADA</div></div>`);
      }
    } else {
      if (noResultMsg) noResultMsg.remove();
    }
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

  /* Lógica de exibir/ocultar botão Scroll To Top */
  window.addEventListener('scroll', () => { 
    scrollTopBtn.classList.toggle('show', window.scrollY > 400); 
  });
  
  scrollTopBtn.addEventListener('click', () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  });

  init();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('🚀 [PWA] Orquestrador Ativo!', reg.scope))
        .catch(err => console.error('⚠️ [PWA] Erro:', err));
    });
  }
});