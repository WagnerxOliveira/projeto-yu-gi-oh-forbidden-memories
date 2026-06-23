/* ============================================================
   Yu-Gi-Oh! Forbidden Memories - Application Logic & QA Master
   extraCardData carregado via extra-card-data.js
   ============================================================ */
/* ============================================================
   🎵 TRILHA SONORA — DADOS DAS MÚSICAS DO JOGO
   ============================================================ */
const MUSIC_BASE_PATH = '../music-themes/';
const musicTracks = [
  { name: 'Title', file: '01. Title.mp3' },
  { name: 'Input Name', file: '02. Input Name.mp3' },
  { name: 'Tournament Announcement', file: '03. Tournament Announcement.mp3' },
  { name: 'Modern Times', file: '04. Modern Times.mp3' },
  { name: "Shadi's Message", file: "05. Shadi's Message.mp3" },
  { name: 'Inside the Puzzle', file: '06. Inside the Puzzle.mp3' },
  { name: 'Preliminary Face-Off', file: '07. Preliminary Face-Off.mp3' },
  { name: 'Finals Face-Off', file: '08. Finals Face-Off.mp3' },
  { name: 'Seto Kaiba Face-Off', file: '09. Seto Kaiba Face-Off.mp3' },
  { name: 'Card Shop', file: '10. Card Shop.mp3' },
  { name: 'Metropolis', file: '11. Metropolis.mp3' },
  { name: 'Metropolis 2', file: '12. Metropolis 2.mp3' },
  { name: "Pharaoh's Palace", file: "13. Pharaoh's Palace.mp3" },
  { name: 'Egypt in Ruins', file: '14. Egypt in Ruins.mp3' },
  { name: 'Deck Setup', file: '15. Deck Setup.mp3' },
  { name: 'Duel Ground', file: '16. Duel Ground.mp3' },
  { name: "King's Valley", file: "17. King's Valley.mp3" },
  { name: 'Sea Shrine', file: '18. Sea Shrine.mp3' },
  { name: 'Forest Shrine', file: '19. Forest Shrine.mp3' },
  { name: 'Desert Shrine', file: '20. Desert Shrine.mp3' },
  { name: 'Meadow Shrine', file: '21. Meadow Shrine.mp3' },
  { name: 'Mountain Shrine', file: '22. Mountain Shrine.mp3' },
  { name: 'Vast Shrine', file: '23. Vast Shrine.mp3' },
  { name: 'Dark Shrine', file: '24. Dark Shrine.mp3' },
  { name: "Seto's Betrayal", file: "25. Seto's Betrayal.mp3" },
  { name: 'Forbidden Ruins', file: '26. Forbidden Ruins.mp3' },
  { name: "Heishin's Millennium Puzzle", file: "27. Heishin's Millennium Puzzle Confrontation.mp3" },
  { name: "Heishin's Invasion", file: "28. Heishin's Invasion.mp3" },
  { name: "Darknite's Arrival", file: "29. Darknite's Arrival.mp3" },
  { name: 'Preliminaries', file: '30. Preliminaries.mp3' },
  { name: 'Finals', file: '31. Finals.mp3' },
  { name: 'Seto Kaiba (Tournament Final)', file: '32. Seto Kaiba (Tournament Final).mp3' },
  { name: 'Egyptian Duel', file: '33. Egyptian Duel.mp3' },
  { name: 'Mages Duel', file: '34. Mages Duel.mp3' },
  { name: 'High Mages', file: '35. High Mages.mp3' },
  { name: 'Heishin', file: '36. Heishin.mp3' },
  { name: 'Seto', file: '37. Seto.mp3' },
  { name: 'Darknite - Nitemare', file: '38. Darknite - Nitemare.mp3' },
  { name: 'Free Duel', file: '39. Free Duel.mp3' },
  { name: 'Free Duel (3D)', file: '40. Free Duel (3D).mp3' },
  { name: 'Seto Kaiba Duel (3D)', file: '41. Seto Kaiba Duel (3D Tournament Final).mp3' },
  { name: 'Egyptian Duel (3D)', file: '42. Egyptian Duel (3D).mp3' },
  { name: 'Darknite - Nitemare (3D)', file: '43. Darknite - Nitemare (3D).mp3' },
  { name: 'Free Duel Menu', file: '44. Free Duel Menu.mp3' },
  { name: 'Library', file: '45. Library.mp3' },
  { name: 'Victory', file: '46. Victory.mp3' },
  { name: 'Defeat', file: '47. Defeat.mp3' },
  { name: 'Results of Duel', file: '48. Results of Duel.mp3' },
  { name: 'Game Over', file: '49. Game Over.mp3' },
  { name: 'Exodia', file: '50. Exodia.mp3' },
  { name: 'Epilogue', file: '51. Epilogue.mp3' },
  { name: 'Credits', file: '52. Credits.mp3' },
  { name: 'Town Plaza', file: '53. Town Plaza.mp3' },
  { name: 'Password', file: '54. Password.mp3' },
  { name: 'Millennium Item Found', file: '55. Millennium Item Found.mp3' }
];

document.addEventListener('DOMContentLoaded', () => {
  /* =========================================
     REFERÊNCIAS DO DOM
     ========================================= */
  const cardsGrid = document.getElementById('cardsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resultNumber = document.getElementById('resultNumber');
  const resultCount = document.getElementById('resultCount');
  const progressBar = document.getElementById('scrollProgressBar');
  const toastEl = document.getElementById('toastNotification');

  /* =========================================
     UTILITÁRIOS
     ========================================= */
  function debounce(fn, delay) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
  }

  function showToast(msg, duration = 2000) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), duration);
  }

  /* 🔥 UX SÊNIOR: INJEÇÃO DO PREVIEW FLUTUANTE GLOBAL 🔥 */
  let globalPreview = document.getElementById('globalCardPreview');
  if (!globalPreview) {
    globalPreview = document.createElement('img');
    globalPreview.id = 'globalCardPreview';
    globalPreview.className = 'global-card-preview';
    document.body.appendChild(globalPreview);
  }

  /* Exibe Tooltip nas Pílulas Textuais, Equips e Rituais */
  document.addEventListener('mouseover', e => {
    const link = e.target.closest('[data-preview]');
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
    const link = e.target.closest('[data-preview]');
    if (link) globalPreview.classList.remove('show');
  });

  /* 📱 MOBILE TOUCH: pressionar para preview flutuante */
  let touchPreviewTimer = null;
  document.addEventListener('touchstart', e => {
    const link = e.target.closest('[data-preview]');
    if (link) {
      touchPreviewTimer = setTimeout(() => {
        globalPreview.src = link.dataset.preview;
        const touch = e.touches[0];
        let leftPos = touch.clientX - 65;
        let topPos = touch.clientY - 200;
        if (leftPos < 5) leftPos = 5;
        if (topPos < 5) topPos = touch.clientY + 30;
        globalPreview.style.left = leftPos + 'px';
        globalPreview.style.top = topPos + 'px';
        globalPreview.classList.add('show');
      }, 200);
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    clearTimeout(touchPreviewTimer);
    globalPreview.classList.remove('show');
  }, { passive: true });

  document.addEventListener('touchcancel', () => {
    clearTimeout(touchPreviewTimer);
    globalPreview.classList.remove('show');
  }, { passive: true });

  /* =========================================
     🔥 GESTÃO DE ABAS (DESKTOP + MOBILE TOUCH) 🔥
     ========================================= */
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    /* Mobile: Toggle por toque nos ícones */
    document.addEventListener('click', e => {
      const icon = e.target.closest('.tab-icon');
      if (icon) {
        e.preventDefault();
        e.stopPropagation();
        const card = icon.closest('.card');
        const tabName = icon.dataset.tab;
        const currentTab = card.getAttribute('data-active-tab');
        /* Fecha todos os outros cards abertos */
        document.querySelectorAll('.card[data-active-tab]:not([data-active-tab="none"])').forEach(c => {
          if (c !== card) c.setAttribute('data-active-tab', 'none');
        });
        /* Toggle: se já está aberto nesta aba, fecha; senão, abre */
        card.setAttribute('data-active-tab', currentTab === tabName ? 'none' : tabName);
      }
    });

    /* Fechar overlay ao tocar fora do card */
    document.addEventListener('click', e => {
      if (!e.target.closest('.card')) {
        document.querySelectorAll('.card[data-active-tab]:not([data-active-tab="none"])').forEach(c => {
          c.setAttribute('data-active-tab', 'none');
        });
      }
    });
  } else {
    /* Desktop: Hover nos ícones */
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
  }

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
    setupIntersectionObserver();
    handleDeepLink();
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
                     <img class="char-img" src="images/characters_icons/${d.icon}" ${lazyAttr} onerror="this.style.display='none'">
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
                     <img class="char-img-small" src="images/characters_icons/${u.icon}" ${lazyAttr} onerror="this.style.display='none'">
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

        /* PAINEL INTERNO: FUSÕES (principal + otherFusions) */
        const hasFusions = x.fusions && x.fusions.length > 0;
        const hasOtherFusions = x.otherFusions && x.otherFusions.list && x.otherFusions.list.length > 0;

        if (hasFusions || hasOtherFusions) {
          fusionIconHTML = `<img class="tab-icon icon-fusion" src="images/others-icon/f-icon.png" data-tab="fusion" title="Fusões">`;
          fusionOverlayHTML = `<div class="card-overlay overlay-fusion"><div class="overlay-content">`;
          fusionOverlayHTML += `<h4 class="overlay-title">⚡ FUSÕES</h4>`;

          const buildTextLink = (card, isResult = false) => `
            <a href="#card-${card.id}" class="fusion-text-link ${isResult ? 'fusion-result-gold' : ''}" data-preview="images/cards/${card.id}.png">
              <span class="ft-id">#${card.id}</span><span class="ft-name">${card.name}</span>
            </a>`;

          /* Nota de fusão (ex: "Nenhuma carta origina...") */
          if (x.fusionNote) {
            fusionOverlayHTML += `<p class="fusion-note-text">${x.fusionNote}</p>`;
          }

          /* Fusões principais (que produzem esta carta) */
          if (hasFusions) {
            fusionOverlayHTML += `<div class="fusion-matrix">`;
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

              const mat1HTML = f.material1 ? f.material1.map(c => buildTextLink(c, false)).join('') : '';
              const mat2HTML = f.material2 ? f.material2.map(c => buildTextLink(c, false)).join('') : '';
              const resHTML = f.result ? buildTextLink(f.result, true) : '';

              fusionOverlayHTML += `
                <div class="fusion-group">
                  ${ruleHTML}
                  <div class="fusion-tree-layout-QA">
                    <div class="fusion-mat-section">
                      <div class="fusion-scroll-grid-QA">${mat1HTML}</div>
                    </div>
                    <div class="fusion-divider-row"><span class="fusion-divider-icon">+</span></div>
                    <div class="fusion-mat-section">
                      <div class="fusion-scroll-grid-QA">${mat2HTML}</div>
                    </div>
                    <div class="fusion-divider-row"><span class="fusion-divider-icon">=</span></div>
                    <div class="fusion-result-section">${resHTML}</div>
                  </div>
                </div>`;
            });
            fusionOverlayHTML += `</div>`;
          }

          /* OUTRAS FUSÕES (onde esta carta é material para gerar outras) */
          if (hasOtherFusions) {
            fusionOverlayHTML += `<div class="fusion-other-section">`;
            fusionOverlayHTML += `<h4 class="overlay-title fusion-other-title">🔄 OUTRAS FUSÕES</h4>`;
            if (x.otherFusions.description) {
              fusionOverlayHTML += `<p class="fusion-other-desc">${x.otherFusions.description}</p>`;
            }

            x.otherFusions.list.forEach(of => {
              const ruleTag = of.ruleText ? ` <span class="fusion-rule-tag">(${of.ruleText})</span>` : '';
              const noteHTML = of.note ? `<span class="fusion-mat-note">${of.note}</span>` : '';
              const mat2HTML = of.material2.map(c => buildTextLink(c, false)).join('');

              fusionOverlayHTML += `
                <div class="other-fusion-group">
                  <div class="other-fusion-header">Forma a ${buildTextLink(of.result, true)}${ruleTag}</div>
                  <div class="fusion-tree-layout-QA">
                    <div class="fusion-mat-section fusion-mat-self">
                      ${buildTextLink({id: c.id, name: c.name}, false)}${noteHTML}
                    </div>
                    <div class="fusion-divider-row"><span class="fusion-divider-icon">+</span></div>
                    <div class="fusion-mat-section">
                      <div class="fusion-scroll-grid-QA">${mat2HTML}</div>
                    </div>
                    <div class="fusion-divider-row"><span class="fusion-divider-icon">=</span></div>
                    <div class="fusion-result-section">${buildTextLink(of.result, true)}</div>
                  </div>
                </div>`;
            });

            fusionOverlayHTML += `</div>`;
          }

          fusionOverlayHTML += `</div></div>`;
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
                  <a href="#card-${eq.id}" class="equip-link-wrapper" data-preview="images/cards/${eq.img}">
                    <img class="equip-img" src="images/cards/${eq.img}" onerror="this.src='images/cards/placeholder.png'" ${lazyAttr}>
                    <div class="overlay-text"><strong class="equip-name">${eq.id} ${eq.name}</strong></div>
                  </a>
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
             const matPreview = `data-preview="images/cards/${r.materials[0].id}.png"`;
             const spellPreview = `data-preview="images/cards/${r.ritualCard.id}.png"`;
             const resPreview = `data-preview="images/cards/${r.result.id}.png"`;
             
             ritualOverlayHTML += `
               <div class="ritual-container">
                 <div class="ritual-equation">
                   <div class="ritual-part material-part focos">
                     <span class="ritual-qty focos-badge">${r.materials[0].count}x</span>
                     <a href="#card-${r.materials[0].id}" class="ritual-link-wrapper" ${matPreview}>
                       <img class="ritual-card-img focos-img" src="images/cards/${r.materials[0].id}.png" loading="lazy">
                       <span class="focos-id focos-badge">#${r.materials[0].id}</span>
                     </a>
                   </div>
                   <div class="ritual-math">+</div>
                   <div class="ritual-part ritual-spell focos">
                     <a href="#card-${r.ritualCard.id}" class="ritual-link-wrapper" ${spellPreview}>
                       <img class="ritual-card-img focos-img" src="images/cards/${r.ritualCard.id}.png" loading="lazy">
                       <span class="focos-id focos-badge spell-badge">#${r.ritualCard.id}</span>
                     </a>
                   </div>
                   <div class="ritual-math">=</div>
                   <div class="ritual-part result-part focos result-focos">
                     <a href="#card-${r.result.id}" class="ritual-link-wrapper" ${resPreview}>
                       <img class="ritual-card-img result-img result-img-focos fusion-result-gold" src="images/cards/${r.result.id}.png" loading="lazy">
                       <span class="focos-id focos-badge result-badge">#${r.result.id}</span>
                     </a>
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
                    <div class="stat-row stat-pass full-width-desk"><span class="stat-label">PASSWORD</span><span class="stat-val" data-password="${c.password || ''}" title="Clique para copiar">${c.password || '-'}</span></div>
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

  /* =========================================
     🔍 PESQUISA COM DEBOUNCE & CONTAGEM
     ========================================= */
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

    /* Atualizar contagem de resultados */
    if (resultNumber) {
      resultNumber.textContent = out.length;
      resultCount.classList.toggle('filtered', q.length > 0);
    }

    /* Botão clear search */
    if (clearSearchBtn) {
      clearSearchBtn.style.display = q.length > 0 ? 'flex' : 'none';
    }

    let noResultMsg = document.getElementById('no-results-msg');
    if (out.length === 0) {
      if (!noResultMsg) cardsGrid.insertAdjacentHTML('beforeend', `<div id="no-results-msg" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: 'Orbitron'; padding: 50px;"><div style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;">🔍</div><div style="font-size: 0.9rem; letter-spacing: 2px;">NENHUMA CARTA ENCONTRADA</div></div>`);
    } else if (noResultMsg) noResultMsg.remove();
  }

  const debouncedSearch = debounce(performSearch, 150);

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
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    searchInput.focus();
    performSearch(); 
  }

  /* =========================================
     📋 COPY PASSWORD AO CLICAR
     ========================================= */
  document.addEventListener('click', e => {
    const passVal = e.target.closest('.stat-pass .stat-val');
    if (passVal) {
      const pw = passVal.dataset.password;
      if (pw && pw !== '') {
        navigator.clipboard.writeText(pw).then(() => {
          showToast(`📋 Senha copiada: ${pw}`);
        }).catch(() => {
          /* Fallback para navegadores sem clipboard API */
          const textArea = document.createElement('textarea');
          textArea.value = pw;
          textArea.style.cssText = 'position:fixed;left:-9999px;';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          showToast(`📋 Senha copiada: ${pw}`);
        });
      }
    }
  });

  /* =========================================
     ⬆️ SCROLL TO TOP + PROGRESS BAR
     ========================================= */
  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    /* Botão scroll-to-top */
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('show', scrollY > 400);
    }

    /* Barra de progresso */
    if (progressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================
     🔗 DEEP LINKING (#card-XXX)
     ========================================= */
  function handleDeepLink() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#card-')) {
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.transition = 'box-shadow 0.3s ease';
          el.style.boxShadow = '0 0 40px rgba(0, 245, 255, 0.6), 0 20px 40px rgba(0,0,0,0.85)';
          setTimeout(() => { el.style.boxShadow = ''; }, 2000);
        }
      }, 300);
    }
  }

  window.addEventListener('hashchange', handleDeepLink);

  /* =========================================
     ⌨️ KEYBOARD SHORTCUTS
     ========================================= */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      performSearch();
      searchInput.blur();
    }
    /* Ctrl+K ou / para focar na busca */
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  /* =========================================
     👁️ INTERSECTION OBSERVER (ENTRADA ANIMADA)
     ========================================= */
  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
  }

  /* =========================================
     🎵 MUSIC PLAYER
     ========================================= */
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicPanel = document.getElementById('musicPanel');
  const musicPanelClose = document.getElementById('musicPanelClose');
  const musicPlayPauseBtn = document.getElementById('musicPlayPauseBtn');
  const musicStopBtn = document.getElementById('musicStopBtn');
  const musicVolumeSlider = document.getElementById('musicVolumeSlider');
  const musicTrackList = document.getElementById('musicTrackList');
  const musicAudio = document.getElementById('musicAudio');
  const musicNowPlaying = document.getElementById('musicNowPlaying');

  let currentTrackIndex = -1;
  let isPlaying = false;

  /* Renderizar lista de tracks */
  if (musicTrackList) {
    musicTrackList.innerHTML = musicTracks.map((t, i) => `
      <div class="music-track" data-index="${i}">
        <span class="music-track-number">${String(i + 1).padStart(2, '0')}</span>
        <span class="music-track-name">${t.name}</span>
        <span class="music-track-playing-icon">🔊</span>
      </div>
    `).join('');
  }

  /* Toggle do painel */
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      musicPanel.classList.toggle('open');
    });
  }

  if (musicPanelClose) {
    musicPanelClose.addEventListener('click', () => {
      musicPanel.classList.remove('open');
    });
  }

  /* Selecionar e tocar track */
  if (musicTrackList) {
    musicTrackList.addEventListener('click', e => {
      const track = e.target.closest('.music-track');
      if (!track) return;
      const index = parseInt(track.dataset.index, 10);
      playTrack(index);
    });
  }

  function playTrack(index) {
    if (index < 0 || index >= musicTracks.length) return;
    
    currentTrackIndex = index;
    const track = musicTracks[index];
    
    musicAudio.src = MUSIC_BASE_PATH + encodeURIComponent(track.file);
    musicAudio.volume = musicVolumeSlider.value / 100;
    musicAudio.play().catch(err => {
      console.warn('Erro ao tocar música:', err);
      showToast('⚠️ Não foi possível carregar a música');
    });
    
    isPlaying = true;
    musicPlayPauseBtn.textContent = '⏸';
    musicPlayPauseBtn.disabled = false;
    musicStopBtn.disabled = false;
    musicToggleBtn.classList.add('playing');
    
    /* Atualizar UI */
    musicNowPlaying.innerHTML = `<span class="now-playing-label active">🎵 ${track.name}</span>`;
    document.querySelectorAll('.music-track').forEach(t => t.classList.remove('active'));
    document.querySelector(`.music-track[data-index="${index}"]`)?.classList.add('active');
  }

  /* Play/Pause */
  if (musicPlayPauseBtn) {
    musicPlayPauseBtn.addEventListener('click', () => {
      if (!musicAudio.src) return;
      if (isPlaying) {
        musicAudio.pause();
        musicPlayPauseBtn.textContent = '▶️';
        musicToggleBtn.classList.remove('playing');
      } else {
        musicAudio.play();
        musicPlayPauseBtn.textContent = '⏸';
        musicToggleBtn.classList.add('playing');
      }
      isPlaying = !isPlaying;
    });
  }

  /* Stop */
  if (musicStopBtn) {
    musicStopBtn.addEventListener('click', () => {
      musicAudio.pause();
      musicAudio.currentTime = 0;
      isPlaying = false;
      musicPlayPauseBtn.textContent = '▶️';
      musicToggleBtn.classList.remove('playing');
      musicNowPlaying.innerHTML = `<span class="now-playing-label">Nenhuma música tocando</span>`;
      document.querySelectorAll('.music-track').forEach(t => t.classList.remove('active'));
    });
  }

  /* Volume */
  if (musicVolumeSlider) {
    musicVolumeSlider.addEventListener('input', () => {
      musicAudio.volume = musicVolumeSlider.value / 100;
    });
  }

  /* Quando a música termina, toca a próxima */
  if (musicAudio) {
    musicAudio.addEventListener('ended', () => {
      if (currentTrackIndex < musicTracks.length - 1) {
        playTrack(currentTrackIndex + 1);
      } else {
        /* Fim da playlist */
        isPlaying = false;
        musicPlayPauseBtn.textContent = '▶️';
        musicToggleBtn.classList.remove('playing');
        musicNowPlaying.innerHTML = `<span class="now-playing-label">Playlist finalizada</span>`;
        document.querySelectorAll('.music-track').forEach(t => t.classList.remove('active'));
      }
    });
  }

  /* =========================================
     🔌 EVENT LISTENERS
     ========================================= */
  searchInput.addEventListener('input', debouncedSearch);
  
  filterBtns.forEach(b => {
    b.addEventListener('click', () => setFilter(currentFilter === b.dataset.filter ? 'name' : b.dataset.filter));
  });

  /* Clear Search Button */
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      performSearch();
      searchInput.focus();
    });
  }

  /* =========================================
     🔌 SERVICE WORKER REGISTRATION
     ========================================= */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('[App] Service Worker registrado:', reg.scope);
    }).catch(err => {
      console.warn('[App] Service Worker falhou:', err);
    });
  }

  /* =========================================
     🚀 INICIALIZAÇÃO
     ========================================= */
  init();
});