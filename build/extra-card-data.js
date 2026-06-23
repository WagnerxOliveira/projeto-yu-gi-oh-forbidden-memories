/* ============================================================
   Yu-Gi-Oh! Forbidden Memories — Extra Card Data (Drops, Uses, Equips, Fusions, Rituals)
   Arquivo separado para manutenção dos dados complementares de cada carta.
   Ícones de personagens: images/characters_icons/
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
        description: 'É necessário ter 3 "Blue-Eyes White Dragon" em campo. Ative a carta mágica de ritual "Ultimate Dragon" para fundi-las e invocar o Blue-Eyes Ultimate Dragon.'
      }
    ]
  },

  '002': {
    guardianStars: ['Sun', 'Moon'],
    drops: [
      { name: 'Meadow Mage', rank: 'POW/TEC: B/C/D', rate: '2.44', fraction: '50 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Yami Bakura', rank: 'POW: S/A', rate: '2.44', fraction: '50 de 2048º', icon: 'yami-bakura-icon.png' },
      { name: 'Meadow Mage', rank: 'TEC: S/A', rate: '2.25', fraction: '46 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Meadow Mage', rank: 'POW: S/A', rate: '2.15', fraction: '44 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'High Mage Secmeton', rank: 'TEC: S/A', rate: '2.05', fraction: '42 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Seto 2nd', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'High Mage Secmeton', rank: 'POW/TEC: B/C/D', rate: '1.61', fraction: '33 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'Seto 2nd', rank: 'POW: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Seto 2nd', rank: 'TEC: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'seto-kaiba-second-icon.png' },
      { name: 'Mai Valentine', rank: 'POW: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'mai-valentine-icon.png' },
      { name: 'High Mage Atenza', rank: 'POW/TEC: B/C/D', rate: '1.46', fraction: '30 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'Bandit Keith', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'bandit-keith-icon.png' },
      { name: 'High Mage Atenza', rank: 'TEC: S/A', rate: '1.37', fraction: '28 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'Simon Muran', rank: 'POW: S/A', rate: '1.32', fraction: '27 de 2048º', icon: 'simon-muran-icon.png' },
      { name: 'Heishin', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin', rank: 'TEC: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin 2nd', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Heishin 2nd', rank: 'TEC: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'heishin-second-icon.png' },
      { name: 'Sebek', rank: 'POW: S/A', rate: '1.27', fraction: '26 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Sebek', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'sebek-icon.png' },
      { name: 'High Mage Secmeton', rank: 'POW: S/A', rate: '1.22', fraction: '25 de 2048º', icon: 'high-mage-secmeton-icon.png' },
      { name: 'High Mage Atenza', rank: 'POW: S/A', rate: '1.22', fraction: '25 de 2048º', icon: 'high-mage-atenza-icon.png' },
      { name: 'Sebek', rank: 'TEC: S/A', rate: '1.17', fraction: '24 de 2048º', icon: 'sebek-icon.png' },
      { name: 'Heishin', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'heishin-icon.png' },
      { name: 'Heishin 2nd', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'heishin-second-icon.png' }
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
          { id: '395', name: 'Dancing Elf' },
          { id: '264', name: 'Wing Egg Elf' }
        ],
        material2: [
          { id: '192', name: 'Key Mace' },
          { id: '428', name: 'Magician of Faith' },
          { id: '130', name: 'Weather Control' },
          { id: '486', name: 'Boo Koo' },
          { id: '492', name: 'Hoshiningen' },
          { id: '134', name: 'Mystical Capture Chain' },
          { id: '208', name: 'Petit Angel' },
          { id: '229', name: 'Hourglass of Life' },
          { id: '260', name: 'Lunar Queen Elzaim' },
          { id: '264', name: 'Wing Egg Elf' },
          { id: '601', name: 'Tenderness' },
          { id: '183', name: 'Lucky Trinket' }
        ],
        result: { id: '002', name: 'Mystical Elf' }
      }
    ],
    otherFusions: {
      description: 'Cartas que a 002 - Mystical Elf forma quando fundida com outras cartas:',
      list: [
        {
          result: { id: '041', name: 'Celtic Guardian' },
          ruleText: 'Elf + Warrior',
          material2: [
            { id: '100', name: 'Battle Warrior' },{ id: '469', name: 'Armed Ninja' },{ id: '635', name: "Queen's Double" },{ id: '185', name: 'Eyearmor' },{ id: '214', name: 'Kagemusha of the Blue Flame' },{ id: '399', name: 'Swordsman from a Foreign Land' },{ id: '110', name: 'Hero of the East' },{ id: '118', name: 'Supporter in the Shadows' },{ id: '120', name: 'Dream Clown' },{ id: '138', name: 'Dragon Statue' },{ id: '172', name: 'Armaill' },{ id: '250', name: 'Hyo' },{ id: '256', name: 'Dimensional Warrior' },{ id: '262', name: 'The Little Swordsman of Aile' },{ id: '290', name: 'Moon Envoy' },{ id: '293', name: 'Masaki the Legendary Swordsman' },{ id: '294', name: 'Dragoness the Wicked Knight' },{ id: '151', name: 'Rhaimundos of the Red Sword' },{ id: '166', name: 'Mysterious Puppeteer' },{ id: '226', name: 'Skull Stalker' },{ id: '235', name: 'Wodan the Resident of the Forest' },{ id: '266', name: 'Princess of Tsurugi' },{ id: '280', name: 'Protector of the Throne' },{ id: '299', name: 'Sonic Maid' },{ id: '354', name: 'Stuffed Animal' },{ id: '362', name: 'Millennium Shield' },{ id: '502', name: 'D. Human' },{ id: '553', name: 'Mushroom Man #2' },{ id: '559', name: 'Oscillo Hero' },{ id: '641', name: 'Invader of the Throne' },{ id: '107', name: 'Kageningen' },{ id: '147', name: 'Monster Egg' },{ id: '156', name: 'Hard Armor' },{ id: '160', name: 'M-warrior #1' },{ id: '161', name: 'M-warrior #2' },{ id: '195', name: 'Doron' },{ id: '586', name: 'Greenkappa' }
          ]
        },
        {
          result: { id: '431', name: 'Ice Water' },
          material2: [
            { id: '436', name: 'White Dolphin' },{ id: '247', name: 'Root Water' }
          ]
        },
        {
          result: { id: '449', name: '30,000-Year White Turtle' },
          ruleText: 'Turtle + Spellcaster',
          material2: [
            { id: '177', name: 'Monsturtle' },{ id: '503', name: 'Turtle Raccoon' },{ id: '089', name: 'Catapult Turtle' },{ id: '193', name: 'Turtle Tiger' }
          ]
        },
        {
          result: { id: '458', name: 'Kaminari Attack' },
          material2: [
            { id: '425', name: 'Thunder Dragon' },{ id: '462', name: 'The Immortal of Thunder' },{ id: '448', name: 'Spike Seadra' }
          ]
        },
        {
          result: { id: '462', name: 'The Immortal of Thunder' },
          material2: [
            { id: '191', name: 'LALA Li-oon' },{ id: '045', name: 'Oscillo Hero #2' },{ id: '211', name: 'Kaminarikozou' },{ id: '461', name: 'Bolt Penguin' },{ id: '463', name: 'Electric Snake' },{ id: '459', name: 'Tripwire Beast' },{ id: '460', name: 'Bolt Escargot' },{ id: '610', name: 'Electric Lizard' },{ id: '537', name: 'Mega Thunderball' }
          ]
        },
        {
          result: { id: '470', name: 'Magical Ghost' },
          material2: [
            { id: '009', name: 'Shadow Specter' },{ id: '548', name: 'Bone Mouse' },{ id: '135', name: "Fiend's Hand" },{ id: '154', name: 'Fire Reaper' },{ id: '197', name: 'Mech Mole Zombie' },{ id: '024', name: 'Skull Servant' },{ id: '030', name: 'Zombie Warrior' },{ id: '132', name: 'The 13th Grave' },{ id: '139', name: 'Blue-eyed Silver Zombie' },{ id: '203', name: 'Phantom Ghost' },{ id: '215', name: 'Flame Ghost' },{ id: '228', name: 'Wood Remains' },{ id: '556', name: 'The Wandering Doomed' },{ id: '106', name: 'Spirit of the Winds' },{ id: '153', name: 'Dokuroizo the Grim Reaper' },{ id: '241', name: 'Dark Assailant' },{ id: '359', name: 'Three-legged Zombies' },{ id: '539', name: 'Corroding Shark' }
          ]
        },
        {
          result: { id: '531', name: 'Mystical Sand' },
          material2: [
            { id: '167', name: 'Ancient Jar' },{ id: '558', name: 'Pot the Trick' },{ id: '028', name: 'Rock Ogre Grotto #1' },{ id: '237', name: 'Haniwa' },{ id: '516', name: 'Muka Muka' },{ id: '257', name: 'Stone Armadiller' },{ id: '263', name: 'Rock Ogre Grotto #2' },{ id: '591', name: 'Morphing Jar' },{ id: '074', name: 'Giant Soldier of Stone' },{ id: '366', name: 'Labyrinth Wall' },{ id: '632', name: 'Stone Ogre Grotto' },{ id: '454', name: 'Destroyer Golem' },{ id: '456', name: 'Minomushi Warrior' },{ id: '515', name: 'The Statue of Easter Island' },{ id: '623', name: 'The Thing That Hides In the Mud' },{ id: '453', name: 'Millennium Golem' },{ id: '455', name: 'Barrel Rock' },{ id: '457', name: 'Stone Ghost' },{ id: '517', name: 'Sand Stone' },{ id: '505', name: 'Prisman' },{ id: '244', name: 'Dissolverock' },{ id: '426', name: 'Stone D.' }
          ]
        },
        {
          result: { id: '551', name: 'Dark Elf' },
          material2: [
            { id: '387', name: 'Mystic Lamp' },{ id: '012', name: 'Swamp Battleguard' },{ id: '020', name: 'Left Arm of the Forbidden One' },{ id: '104', name: 'Curtain of the Dark Ones' },{ id: '182', name: 'Masked Clown' },{ id: '268', name: 'Sectarian of Secrets' },{ id: '563', name: 'Wretched Ghost of the Attic' },{ id: '111', name: 'Doma The Angel of Silence' },{ id: '019', name: 'Right Arm of the Forbidden One' },{ id: '102', name: 'Mask of Darkness' },{ id: '034', name: 'Saggi the Dark Clown' },{ id: '103', name: 'Job-Change Mirror' },{ id: '169', name: 'Dark King of the Abyss' },{ id: '178', name: 'Claw Reacher' },{ id: '190', name: 'Akakieisu' },{ id: '231', name: 'Wood Clown' },{ id: '236', name: 'Guardian of the Labyrinth' },{ id: '253', name: 'Angelwitch' },{ id: '269', name: 'Versago the Destroyer' },{ id: '279', name: 'King Fog' },{ id: '127', name: 'Ansatsu' },{ id: '234', name: 'Beautiful Headhuntress' },{ id: '239', name: 'Vishwar Randi' },{ id: '554', name: 'Lava Battleguard' },{ id: '618', name: 'Warrior of Tradition' },{ id: '621', name: 'Succubus Knight' },{ id: '649', name: 'Hibikime' },{ id: '010', name: 'Blackland Fire Dragon' },{ id: '286', name: 'Gatekeeper' },{ id: '379', name: 'La Jinn the Mystical Genie' },{ id: '112', name: 'That Which Feeds on Life' },{ id: '146', name: 'Temple of Skulls' },{ id: '115', name: 'Kamion Wizard' },{ id: '136', name: 'Witty Phantom' },{ id: '149', name: 'Lord of the Lamp' },{ id: '233', name: 'Dark Titan of Terror' },{ id: '281', name: 'Mystic Clown' },{ id: '578', name: 'Leo Wizard' },{ id: '083', name: 'Castle of Dark Illusions' },{ id: '164', name: 'Lord of Zemia' },{ id: '220', name: 'Masked Sorcerer' },{ id: '259', name: 'Ancient Sorcerer' },{ id: '129', name: 'Nemuriko' },{ id: '148', name: 'The Shadow Who Controls the Dark' },{ id: '173', name: 'Dark Prisoner' },{ id: '175', name: 'Ancient Brain' },{ id: '224', name: 'Trap Master' },{ id: '267', name: 'Unknown Warrior of Fiend' },{ id: '271', name: 'Megirus Light' },{ id: '288', name: 'Dark Artist' },{ id: '574', name: 'Witch of the Black Forest' },{ id: '600', name: 'Key Mace #2' },{ id: '179', name: 'Phantom Dewan' },{ id: '388', name: 'Pendulum Machine' },{ id: '530', name: 'Eldeen' },{ id: '017', name: 'Right Leg of the Forbidden One' },{ id: '018', name: 'Left Leg of the Forbidden One' },{ id: '021', name: 'Exodia the Forbidden' },{ id: '628', name: "Witch's Apprentice" }
          ]
        },
        {
          result: { id: '582', name: 'Dark Witch' },
          material2: [
            { id: '395', name: 'Dancing Elf' },{ id: '192', name: 'Key Mace' },{ id: '109', name: 'Goddess with the Third Eye' },{ id: '260', name: 'Lunar Queen Elzaim' },{ id: '429', name: 'Goddess of Whim' },{ id: '592', name: 'Muse-A' },{ id: '492', name: 'Hoshiningen' },{ id: '130', name: 'Weather Control' },{ id: '134', name: 'Mystical Capture Chain' },{ id: '208', name: 'Petit Angel' },{ id: '229', name: 'Hourglass of Life' },{ id: '601', name: 'Tenderness' },{ id: '616', name: 'Hourglass of Courage' },{ id: '170', name: 'Spirit of the Harp' },{ id: '198', name: 'Happy Lover' },{ id: '540', name: 'Skelengel' },{ id: '584', name: 'Binding Chain' },{ id: '608', name: 'Shining Friendship' },{ id: '633', name: 'Winged Egg of New Life' },{ id: '264', name: 'Wing Egg Elf' },{ id: '276', name: 'Ray & Temperature' },{ id: '396', name: 'Ocubeam' }
          ]
        },
        {
          result: { id: '626', name: 'Amazon of the Seas' },
          material2: [
            { id: '251', name: 'Enchanting Mermaid' },{ id: '546', name: 'Wow Warrior' }
          ]
        },
        {
          result: { id: '627', name: 'Nekogal #2' },
          material2: [
            { id: '061', name: 'Wolf' },{ id: '202', name: 'Air Marmot of Nefariousness' },{ id: '598', name: 'Little Chimera' },{ id: '527', name: 'Milus Radiant' },{ id: '047', name: 'Torike' },{ id: '065', name: 'Silver Fang' },{ id: '201', name: 'Frenzied Panda' },{ id: '248', name: 'Master & Expert' },{ id: '282', name: 'Mystical Sheep #2' },{ id: '629', name: 'Armored Rat' },{ id: '642', name: 'Mystical Sheep #1' },{ id: '046', name: 'Griffore' },{ id: '487', name: 'Flower Wolf' },{ id: '091', name: 'Mystic Horseman' },{ id: '403', name: 'Leogun' },{ id: '528', name: 'Togex' },{ id: '604', name: 'Obese Marmot of Nefariousness' },{ id: '121', name: 'Sleeping Lion' },{ id: '255', name: 'Prevent Rat' },{ id: '597', name: 'Pale Beast' },{ id: '113', name: 'Dark Gray' },{ id: '188', name: 'Synchar' },{ id: '189', name: 'Fusionist' },{ id: '481', name: 'Burglar' },{ id: '575', name: 'Ancient One of the Deep Forest' }
          ]
        },
        {
          result: { id: '638', name: 'Queen of Autumn Leaves' },
          material2: [
            { id: '123', name: 'Dark Plant' },{ id: '547', name: 'Griggle' },{ id: '488', name: 'Rainbow Flower' },{ id: '579', name: 'Abyss Flower' },{ id: '588', name: 'Living Vase' },{ id: '589', name: 'Tentacle Plant' },{ id: '180', name: 'Arlownay' },{ id: '273', name: 'Ancient Tree of Enlightenment' },{ id: '274', name: 'Green Phantom King' },{ id: '567', name: 'Darkworld Thorns' },{ id: '620', name: 'Snakeyashi' },{ id: '238', name: 'Yashinoki' },{ id: '637', name: 'Trent' },{ id: '511', name: 'Bean Soldier' },{ id: '008', name: 'Mushroom Man' },{ id: '075', name: 'Man-eating Plant' },{ id: '158', name: 'Man Eater' },{ id: '489', name: 'Barrel Lily' },{ id: '510', name: 'Laughing Flower' },{ id: '157', name: 'Firegrass' }
          ]
        }
      ]
    }
  },

  '003': {
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'Kaiba', rank: 'POW/TEC: B/C/D', rate: '8.50', fraction: '174 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'POW: S/A', rate: '6.84', fraction: '140 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'High Mage Kepura', rank: 'TEC: S/A', rate: '4.88', fraction: '100 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW/TEC: B/C/D', rate: '3.91', fraction: '80 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW: S/A', rate: '2.93', fraction: '60 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'Pegasus', rank: 'POW/TEC: B/C/D', rate: '2.15', fraction: '44 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Pegasus', rank: 'POW: S/A', rate: '1.66', fraction: '34 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Weevil Underwood', rank: 'POW/TEC: B/C/D', rate: '1.61', fraction: '33 de 2048º', icon: 'weevil-underwood-icon.png' },
      { name: 'DarkNite', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'darknite-icon.png' },
      { name: 'High Mage Anubisius', rank: 'POW/TEC: B/C/D', rate: '1.17', fraction: '24 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Anubisius', rank: 'POW: S/A', rate: '1.17', fraction: '24 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'High Mage Anubisius', rank: 'TEC: S/A', rate: '1.03', fraction: '21 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'Weevil Underwood', rank: 'POW: S/A', rate: '0.98', fraction: '20 de 2048º', icon: 'weevil-underwood-icon.png' },
      { name: 'High Mage Martis', rank: 'POW: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'POW/TEC: B/C/D', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'TEC: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' }
    ],
    uses: [
      { name: 'Meadow Mage', rate: '1.17', fraction: '24 de 2048º', icon: 'meadow-mage-icon.png' },
      { name: 'Forest Mage', rate: '0.78', fraction: '16 de 2048º', icon: 'forest-mage-icon.png' },
      { name: 'Weevil Underwood', rate: '0.78', fraction: '16 de 2048º', icon: 'weevil-underwood-icon.png' },
      { name: 'Seto', rate: '0.59', fraction: '12 de 2048º', icon: 'seto-icon.png' },
      { name: 'Mage Soldier', rate: '0.59', fraction: '12 de 2048º', icon: 'mage-soldier-icon.png' },
      { name: 'Pegasus', rate: '0.39', fraction: '8 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'High Mage Martis', rate: '0.39', fraction: '8 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Anubisius', rate: '0.20', fraction: '4 de 2048º', icon: 'high-mage-anubisius-icon.png' },
      { name: 'High Mage Kepura', rate: '0.05', fraction: '1 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'Kaiba', rate: '0.05', fraction: '1 de 2048º', icon: 'kaiba-icon.png' }
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
    ],
    fusionNote: 'Nenhuma carta do jogo origina o 003 - Hitotsu-me Giant, mas se funde com as cartas abaixo para originar outras:',
    otherFusions: {
      list: [
        {
          result: { id: '031', name: 'Koumori Dragon' },
          ruleText: 'Dragon + Fiend',
          material2: [
            { id: '004', name: 'Baby Dragon' },{ id: '122', name: 'Yamatano Dragon Scroll' },{ id: '296', name: 'One-eyed Shield Dragon' },{ id: '298', name: 'Wicked Dragon with the Ersatz Head' },{ id: '007', name: 'Winged Dragon #1' },{ id: '561', name: 'Lesser Dragon' },{ id: '603', name: 'Fairy Dragon' },{ id: '200', name: 'Petit Dragon' },{ id: '138', name: 'Dragon Statue' }
          ]
        }
      ]
    }
  },

  '004': {
    guardianStars: ['Moon', 'Mars'],
    drops: [
      { name: 'Kaiba', rank: 'POW/TEC: B/C/D', rate: '4.20', fraction: '86 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'TEC: S/A', rate: '4.20', fraction: '86 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Kaiba', rank: 'POW: S/A', rate: '3.42', fraction: '70 de 2048º', icon: 'kaiba-icon.png' },
      { name: 'Isis', rank: 'POW/TEC: B/C/D', rate: '3.13', fraction: '64 de 2048º', icon: 'isis-icon.png' },
      { name: 'Isis', rank: 'TEC: S/A', rate: '2.73', fraction: '56 de 2048º', icon: 'isis-icon.png' },
      { name: 'High Mage Kepura', rank: 'TEC: S/A', rate: '2.73', fraction: '56 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'Nitemare', rank: 'POW/TEC: B/C/D', rate: '2.34', fraction: '48 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Isis', rank: 'POW: S/A', rate: '2.15', fraction: '44 de 2048º', icon: 'isis-icon.png' },
      { name: 'Pegasus', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW/TEC: B/C/D', rate: '1.95', fraction: '40 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'Pegasus', rank: 'POW: S/A', rate: '1.66', fraction: '34 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Pegasus', rank: 'TEC: S/A', rate: '1.56', fraction: '32 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'High Mage Kepura', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'high-mage-kepura-icon.png' },
      { name: 'Nitemare', rank: 'POW: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'Nitemare', rank: 'TEC: S/A', rate: '1.46', fraction: '30 de 2048º', icon: 'nightmare-icon.png' },
      { name: 'DarkNite', rank: 'POW/TEC: B/C/D', rate: '1.27', fraction: '26 de 2048º', icon: 'darknite-icon.png' },
      { name: 'Jono 2nd', rank: 'POW/TEC: B/C/D', rate: '1.12', fraction: '23 de 2048º', icon: 'jono-icon.png' },
      { name: 'DarkNite', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'DarkNite', rank: 'TEC: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'darknite-icon.png' },
      { name: 'Jono 2nd', rank: 'POW: S/A', rate: '1.07', fraction: '22 de 2048º', icon: 'jono-icon.png' },
      { name: 'Jono', rank: 'POW: S/A', rate: '0.98', fraction: '20 de 2048º', icon: 'jono-icon.png' },
      { name: 'Jono 2nd', rank: 'TEC: S/A', rate: '0.88', fraction: '18 de 2048º', icon: 'jono-icon.png' },
      { name: 'Duel Master K', rank: 'POW/TEC: B/C/D', rate: '0.88', fraction: '18 de 2048º', icon: 'master-k-icon.png' },
      { name: 'Villager3', rank: 'POW/TEC: B/C/D', rate: '0.88', fraction: '18 de 2048º', icon: 'villager-3-icon.png' },
      { name: 'Duel Master K', rank: 'TEC: S/A', rate: '0.73', fraction: '15 de 2048º', icon: 'master-k-icon.png' },
      { name: 'Villager3', rank: 'TEC: S/A', rate: '0.73', fraction: '15 de 2048º', icon: 'villager-3-icon.png' },
      { name: 'Duel Master K', rank: 'POW: S/A', rate: '0.68', fraction: '14 de 2048º', icon: 'master-k-icon.png' },
      { name: 'Villager3', rank: 'POW: S/A', rate: '0.68', fraction: '14 de 2048º', icon: 'villager-3-icon.png' },
      { name: 'High Mage Martis', rank: 'POW/TEC: B/C/D', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'TEC: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' },
      { name: 'High Mage Martis', rank: 'POW: S/A', rate: '0.59', fraction: '12 de 2048º', icon: 'high-mage-martis-icon.png' }
    ],
    uses: [
      { name: 'Mountain Mage', rate: '1.17', fraction: '24 de 2048º', icon: 'mountain-mage-icon.png' },
      { name: 'Villager3', rate: '0.88', fraction: '18 de 2048º', icon: 'villager-3-icon.png' },
      { name: 'Isis', rate: '0.49', fraction: '10 de 2048º', icon: 'isis-icon.png' },
      { name: 'Pegasus', rate: '0.39', fraction: '8 de 2048º', icon: 'pegasus-icon.png' },
      { name: 'Jono 2nd', rate: '0.39', fraction: '8 de 2048º', icon: 'jono-icon.png' },
      { name: 'Jono', rate: '0.10', fraction: '2 de 2048º', icon: 'jono-icon.png' },
      { name: 'Kaiba', rate: '0.05', fraction: '1 de 2048º', icon: 'kaiba-icon.png' }
    ],
    equips: [
      { id: '305', name: 'Laser Cannon Armor', img: '305.png' },
      { id: '308', name: 'Beast Fangs', img: '308.png' },
      { id: '313', name: 'Horn of Light', img: '313.png' },
      { id: '315', name: 'Dragon Treasure', img: '315.png' },
      { id: '327', name: 'Follow Wind', img: '327.png' },
      { id: '657', name: 'Megamorph', img: '657.png' },
      { id: '668', name: 'Bright Castle', img: '668.png' }
    ],
    fusions: [
      {
        material1: [
          { id: '023', name: 'The Wicked Worm Beast' },
          { id: '026', name: 'Battle Ox' },
          { id: '040', name: 'Dragon Piper' }
        ],
        material2: [
          { id: '147', name: 'Monster Egg' },
          { id: '138', name: 'Dragon Statue' },
          { id: '126', name: 'Orion the Battle King' }
        ],
        result: { id: '004', name: 'Baby Dragon' }
      }
    ],
    otherFusions: {
      description: 'Cartas que a 004 - Baby Dragon forma quando fundida com outras cartas:',
      list: [
        {
          result: { id: '010', name: 'Blackland Fire Dragon' },
          material2: [
            { id: '387', name: 'Mystic Lamp' },{ id: '020', name: 'Left Arm of the Forbidden One' },{ id: '104', name: 'Curtain of the Dark Ones' },{ id: '268', name: 'Sectarian of Secrets' },{ id: '563', name: 'Wretched Ghost of the Attic' },{ id: '019', name: 'Right Arm of the Forbidden One' },{ id: '102', name: 'Mask of Darkness' },{ id: '034', name: 'Saggi the Dark Clown' },{ id: '103', name: 'Job-Change Mirror' },{ id: '169', name: 'Dark King of the Abyss' },{ id: '178', name: 'Claw Reacher' },{ id: '190', name: 'Akakieisu' },{ id: '253', name: 'Angelwitch' },{ id: '269', name: 'Versago the Destroyer' },{ id: '279', name: 'King Fog' },{ id: '112', name: 'That Which Feeds on Life' },{ id: '115', name: 'Kamion Wizard' },{ id: '136', name: 'Witty Phantom' },{ id: '149', name: 'Lord of the Lamp' },{ id: '233', name: 'Dark Titan of Terror' },{ id: '578', name: 'Leo Wizard' },{ id: '083', name: 'Castle of Dark Illusions' },{ id: '164', name: 'Lord of Zemia' },{ id: '220', name: 'Masked Sorcerer' },{ id: '259', name: 'Ancient Sorcerer' },{ id: '129', name: 'Nemuriko' },{ id: '148', name: 'The Shadow Who Controls the Dark' },{ id: '173', name: 'Dark Prisoner' },{ id: '175', name: 'Ancient Brain' },{ id: '271', name: 'Megirus Light' },{ id: '288', name: 'Dark Artist' },{ id: '574', name: 'Witch of the Black Forest' },{ id: '600', name: 'Key Mace #2' },{ id: '179', name: 'Phantom Dewan' },{ id: '530', name: 'Eldeen' },{ id: '017', name: 'Right Leg of the Forbidden One' },{ id: '018', name: 'Left Leg of the Forbidden One' },{ id: '021', name: 'Exodia the Forbidden' },{ id: '628', name: "Witch's Apprentice" }
          ]
        },
        {
          result: { id: '011', name: 'Sword Arm of Dragon' },
          material2: [
            { id: '043', name: 'Karbonala Warrior' },{ id: '078', name: 'Axe Raider' },{ id: '225', name: 'Fiend Sword' },{ id: '041', name: 'Celtic Guardian' },{ id: '066', name: 'Kojikocy' },{ id: '093', name: 'Zanki' },{ id: '127', name: 'Ansatsu' },{ id: '165', name: 'The Judgement Hand' },{ id: '234', name: 'Beautiful Headhuntress' },{ id: '352', name: 'Kanan the Swordmistress' },{ id: '502', name: 'D. Human' },{ id: '554', name: 'Lava Battleguard' },{ id: '621', name: 'Succubus Knight' },{ id: '641', name: 'Invader of the Throne' },{ id: '649', name: 'Hibikime' },{ id: '369', name: 'Wall Shadow' }
          ]
        },
        {
          result: { id: '031', name: 'Koumori Dragon' },
          ruleText: 'Dragon + Fiend',
          material2: [
            { id: '402', name: 'Monster Eye' },{ id: '137', name: 'Mystery Hand' },{ id: '202', name: 'Air Marmot of Nefariousness' },{ id: '245', name: 'Meda Bat' },{ id: '611', name: "Hiro's Shadow Scout" },{ id: '058', name: 'Kuriboh' },{ id: '059', name: 'Mammoth Graveyard' },{ id: '119', name: 'Trial of Nightmares' },{ id: '141', name: 'Spiked Snail' },{ id: '162', name: 'Tainted Wisdom' },{ id: '219', name: 'Solitude' },{ id: '246', name: 'One Who Hunts Souls' },{ id: '298', name: 'Wicked Dragon with the Ersatz Head' },{ id: '003', name: 'Hitotsu-Me Giant' },{ id: '287', name: 'Ogre of the Black Shadow' },{ id: '006', name: 'Feral Imp' },{ id: '025', name: 'Horn Imp' },{ id: '048', name: 'Sangan' },{ id: '084', name: 'Reaper of the Cards' },{ id: '088', name: 'Metal Guardian' },{ id: '561', name: 'Lesser Dragon' },{ id: '604', name: 'Obese Marmot of Nefariousness' },{ id: '384', name: 'Dark Rabbit' },{ id: '194', name: 'Terra the Terrible' },{ id: '187', name: 'Gate Deeg' },{ id: '218', name: 'Two-mouth Darkruler' },{ id: '222', name: 'Midnight Fiend' },{ id: '232', name: 'Madjinn Gunn' },{ id: '240', name: 'The Drdek' },{ id: '277', name: 'Gorgon Egg' },{ id: '490', name: 'Needle Ball' },{ id: '534', name: 'Minar' },{ id: '254', name: 'Embryonic Beast' },{ id: '212', name: 'Meotoko' }
          ]
        },
        {
          result: { id: '039', name: 'Curse of Dragon' },
          ruleText: 'Dragon + Zombie',
          material2: [
            { id: '099', name: 'Pumpking the King of Ghosts' },{ id: '545', name: 'Skelgon' },{ id: '719', name: 'Dokurorider' }
          ]
        },
        {
          result: { id: '069', name: 'Thousand Dragon' },
          ruleText: 'Time Wizard + Dragon',
          note: 'Ou qualquer Dragão do jogo',
          material2: [
            { id: '016', name: 'Time Wizard' }
          ]
        },
        {
          result: { id: '073', name: 'Kairyu-Shin' },
          ruleText: 'Dragon + Aqua',
          material2: [
            { id: '131', name: 'Octoberser' },{ id: '150', name: 'Akihiron' },{ id: '519', name: 'Fire Kraken' },{ id: '625', name: 'Fairy of the Fountain' },{ id: '624', name: 'High Tide Gyojin' }
          ]
        },
        {
          result: { id: '097', name: 'Dragon Zombie' },
          ruleText: 'Dragon + Zombie',
          material2: [
            { id: '009', name: 'Shadow Specter' },{ id: '548', name: 'Bone Mouse' },{ id: '135', name: "Fiend's Hand" },{ id: '154', name: 'Fire Reaper' },{ id: '197', name: 'Mech Mole Zombie' },{ id: '024', name: 'Skull Servant' },{ id: '030', name: 'Zombie Warrior' },{ id: '096', name: 'Armored Zombie' },{ id: '098', name: 'Clown Zombie' },{ id: '108', name: 'Graveyard and the Hand of Invitation' },{ id: '132', name: 'The 13th Grave' },{ id: '139', name: 'Blue-eyed Silver Zombie' },{ id: '203', name: 'Phantom Ghost' },{ id: '215', name: 'Flame Ghost' },{ id: '556', name: 'The Wandering Doomed' },{ id: '146', name: 'Temple of Skulls' },{ id: '153', name: 'Dokuroizo the Grim Reaper' },{ id: '036', name: 'The Snake Hair' },{ id: '470', name: 'Magical Ghost' },{ id: '539', name: 'Corroding Shark' }
          ]
        },
        {
          result: { id: '386', name: "Harpie's Pet Dragon" },
          ruleText: 'Harpie Lady + Dragon',
          note: 'Ou qualquer Dragão',
          material2: [
            { id: '062', name: 'Harpie Lady' }
          ]
        },
        {
          result: { id: '409', name: 'Metal Dragon' },
          ruleText: 'Dragon + Machine',
          material2: [
            { id: '411', name: 'Bat' },{ id: '410', name: 'Mechanical Spider' },{ id: '420', name: 'Cyber-Stein' },{ id: '422', name: 'Jinzo #7' },{ id: '580', name: 'Patrol Robo' },{ id: '394', name: 'Steel Scorpion' },{ id: '283', name: 'Holograh' },{ id: '414', name: 'Shovel Crusher' },{ id: '585', name: 'Mechanical Snail' },{ id: '408', name: 'Giant Mech-soldier' },{ id: '557', name: 'Steel Ogre Grotto #1' },{ id: '124', name: 'Ancient Tool' },{ id: '286', name: 'Gatekeeper' },{ id: '355', name: 'Megasonic Eye' },{ id: '413', name: 'Cyber Soldier' },{ id: '419', name: 'Giganto' },{ id: '423', name: 'Dice Armadillo' },{ id: '438', name: 'Metal Fish' },{ id: '441', name: 'Mech Bass' },{ id: '508', name: 'Cyber Saurus' },{ id: '513', name: 'Guardian of the Throne Room' },{ id: '275', name: 'Ground Attacker Bugroth' },{ id: '297', name: 'Cyber Soldier of Darkworld' },{ id: '412', name: 'Giga-tech Wolf' },{ id: '416', name: 'Blocker' },{ id: '418', name: 'Golgoil' },{ id: '512', name: 'Cannon Soldier' },{ id: '405', name: 'Saber Slasher' },{ id: '648', name: 'Machine Attacker' },{ id: '406', name: 'Yaiba Robo' },{ id: '514', name: 'Brave Scizzar' },{ id: '643', name: 'Disk Magician' },{ id: '417', name: 'Blast Juggler' },{ id: '421', name: 'Cyber Commander' },{ id: '544', name: 'Dharma Cannon' },{ id: '388', name: 'Pendulum Machine' },{ id: '658', name: 'Metalmorph' }
          ]
        },
        {
          result: { id: '425', name: 'Thunder Dragon' },
          ruleText: 'Thunder + Dragon',
          note: 'Ou qualquer Dragão',
          material2: [
            { id: '191', name: 'LALA Li-oon' },{ id: '045', name: 'Oscillo Hero #2' },{ id: '211', name: 'Kaminarikozou' },{ id: '461', name: 'Bolt Penguin' },{ id: '463', name: 'Electric Snake' },{ id: '459', name: 'Tripwire Beast' },{ id: '460', name: 'Bolt Escargot' },{ id: '462', name: 'The Immortal of Thunder' },{ id: '610', name: 'Electric Lizard' },{ id: '537', name: 'Mega Thunderball' }
          ]
        },
        {
          result: { id: '426', name: 'Stone D.' },
          ruleText: 'Rock + Dragon',
          note: 'Ou qualquer Dragão',
          material2: [
            { id: '167', name: 'Ancient Jar' },{ id: '558', name: 'Pot the Trick' },{ id: '028', name: 'Rock Ogre Grotto #1' },{ id: '237', name: 'Haniwa' },{ id: '516', name: 'Muka Muka' },{ id: '257', name: 'Stone Armadiller' },{ id: '263', name: 'Rock Ogre Grotto #2' },{ id: '591', name: 'Morphing Jar' },{ id: '074', name: 'Giant Soldier of Stone' },{ id: '366', name: 'Labyrinth Wall' },{ id: '632', name: 'Stone Ogre Grotto' },{ id: '454', name: 'Destroyer Golem' },{ id: '456', name: 'Minomushi Warrior' },{ id: '515', name: 'The Statue of Easter Island' },{ id: '623', name: 'The Thing That Hides In the Mud' },{ id: '455', name: 'Barrel Rock' },{ id: '457', name: 'Stone Ghost' },{ id: '517', name: 'Sand Stone' },{ id: '505', name: 'Prisman' },{ id: '244', name: 'Dissolverock' }
          ]
        },
        {
          result: { id: '443', name: 'Sea King Dragon' },
          material2: [
            { id: '520', name: 'Turtle Bird' }
          ]
        },
        {
          result: { id: '448', name: 'Spike Seadra' },
          ruleText: 'Dragon + Aqua',
          material2: [
            { id: '289', name: 'Change Slime' },{ id: '484', name: 'Ameba' },{ id: '152', name: 'The Melting Red Shadow' },{ id: '444', name: 'Turu-Purun' },{ id: '524', name: 'Star Boy' },{ id: '549', name: 'Frog The Jam' },{ id: '393', name: 'Zone Eater' },{ id: '398', name: 'Ooguchi' },{ id: '140', name: 'Toad Master' },{ id: '177', name: 'Monsturtle' },{ id: '196', name: 'Arma Knight' },{ id: '199', name: 'Penguin Knight' },{ id: '205', name: 'Dorover' },{ id: '206', name: 'Twin Long Rods #1' },{ id: '227', name: 'Hitodenchak' },{ id: '243', name: 'Water Element' },{ id: '258', name: 'Beastking of the Swamps' },{ id: '265', name: 'The Furious Sea King' },{ id: '270', name: 'Wetha' },{ id: '292', name: 'Psychic Kappa' },{ id: '432', name: 'Waterdragon Fairy' },{ id: '446', name: 'Aqua Snake' },{ id: '451', name: 'Kanikabuto' },{ id: '452', name: 'Zarigun' },{ id: '503', name: 'Turtle Raccoon' },{ id: '602', name: 'Penguin Soldier' },{ id: '605', name: 'Liquid Beast' },{ id: '606', name: 'Twin Long Rods #2' },{ id: '089', name: 'Catapult Turtle' },{ id: '449', name: '30,000-Year White Turtle' },{ id: '593', name: 'Giant Turtle Who Feeds on Flames' },{ id: '435', name: 'Water Girl' },{ id: '450', name: 'Kappa Avenger' },{ id: '070', name: 'Fiend Kraken' },{ id: '071', name: 'Jellyfish' },{ id: '193', name: 'Turtle Tiger' },{ id: '249', name: 'Water Omotics' },{ id: '430', name: 'Water Magician' },{ id: '474', name: 'Sea Kamen' },{ id: '497', name: 'Yado Karu' },{ id: '583', name: 'Weather Report' },{ id: '634', name: 'Night Lizard' },{ id: '647', name: 'Hyosube' },{ id: '361', name: 'Flying Penguin' },{ id: '431', name: 'Ice Water' },{ id: '445', name: 'Guardian of the Sea' },{ id: '518', name: 'Boulder Tortoise' },{ id: '550', name: 'Behegon' },{ id: '599', name: 'Violent Rain' },{ id: '615', name: 'Armored Starfish' },{ id: '646', name: 'Gruesome Goo' }
          ]
        },
        {
          result: { id: '502', name: 'D. Human' },
          ruleText: 'Dragon + Warrior',
          material2: [
            { id: '100', name: 'Battle Warrior' },{ id: '469', name: 'Armed Ninja' },{ id: '635', name: "Queen's Double" },{ id: '182', name: 'Masked Clown' },{ id: '185', name: 'Eyearmor' },{ id: '214', name: 'Kagemusha of the Blue Flame' },{ id: '399', name: 'Swordsman from a Foreign Land' },{ id: '110', name: 'Hero of the East' },{ id: '118', name: 'Supporter in the Shadows' },{ id: '120', name: 'Dream Clown' },{ id: '138', name: 'Dragon Statue' },{ id: '172', name: 'Armaill' },{ id: '231', name: 'Wood Clown' },{ id: '236', name: 'Guardian of the Labyrinth' },{ id: '250', name: 'Hyo' },{ id: '256', name: 'Dimensional Warrior' },{ id: '262', name: 'The Little Swordsman of Aile' },{ id: '290', name: 'Moon Envoy' },{ id: '293', name: 'Masaki the Legendary Swordsman' },{ id: '294', name: 'Dragoness the Wicked Knight' },{ id: '151', name: 'Rhaimundos of the Red Sword' },{ id: '166', name: 'Mysterious Puppeteer' },{ id: '226', name: 'Skull Stalker' },{ id: '235', name: 'Wodan the Resident of the Forest' },{ id: '239', name: 'Vishwar Randi' },{ id: '266', name: 'Princess of Tsurugi' },{ id: '280', name: 'Protector of the Throne' },{ id: '299', name: 'Sonic Maid' },{ id: '354', name: 'Stuffed Animal' },{ id: '362', name: 'Millennium Shield' },{ id: '553', name: 'Mushroom Man #2' },{ id: '559', name: 'Oscillo Hero' },{ id: '107', name: 'Kageningen' },{ id: '147', name: 'Monster Egg' },{ id: '156', name: 'Hard Armor' },{ id: '160', name: 'M-warrior #1' },{ id: '161', name: 'M-warrior #2' },{ id: '195', name: 'Doron' },{ id: '224', name: 'Trap Master' },{ id: '267', name: 'Unknown Warrior of Fiend' },{ id: '586', name: 'Greenkappa' }
          ]
        },
        {
          result: { id: '545', name: 'Skelgon' },
          material2: [
            { id: '097', name: 'Dragon Zombie' },{ id: '596', name: 'Ghoul with an Appetite' },{ id: '368', name: 'Shadow Ghoul' }
          ]
        },
        {
          result: { id: '571', name: 'B. Dragon Jungle King' },
          material2: [
            { id: '123', name: 'Dark Plant' },{ id: '547', name: 'Griggle' },{ id: '488', name: 'Rainbow Flower' },{ id: '579', name: 'Abyss Flower' },{ id: '588', name: 'Living Vase' },{ id: '589', name: 'Tentacle Plant' },{ id: '180', name: 'Arlownay' },{ id: '273', name: 'Ancient Tree of Enlightenment' },{ id: '274', name: 'Green Phantom King' },{ id: '567', name: 'Darkworld Thorns' },{ id: '620', name: 'Snakeyashi' },{ id: '238', name: 'Yashinoki' },{ id: '637', name: 'Trent' },{ id: '638', name: 'Queen of Autumn Leaves' },{ id: '511', name: 'Bean Soldier' },{ id: '008', name: 'Mushroom Man' },{ id: '075', name: 'Man-eating Plant' },{ id: '158', name: 'Man Eater' },{ id: '489', name: 'Barrel Lily' },{ id: '510', name: 'Laughing Flower' },{ id: '594', name: 'Rose Spectre of Dunn' },{ id: '157', name: 'Firegrass' }
          ]
        },
        {
          result: { id: '613', name: 'Twin-headed Thunder Dragon' },
          material2: [
            { id: '458', name: 'Kaminari Attack' },{ id: '371', name: 'Sanga of the Thunder' },{ id: '425', name: 'Thunder Dragon' }
          ]
        }
      ]
    }
  },

  '005': { guardianStars: ['Saturn', 'Sun'] },
  '006': { guardianStars: ['Moon', 'Jupiter'] },
  '007': { guardianStars: ['Saturn', 'Moon'] },
  '008': { guardianStars: ['Jupiter', 'Sun'] },
  '009': { guardianStars: ['Moon', 'Pluto'] },
  '010': { guardianStars: ['Moon', 'Pluto'] }
};
