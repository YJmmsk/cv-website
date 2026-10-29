/* Main job (Medical device R&D) — English data
 * Keep the same structure as main.ko.js. [TBC] is highlighted on screen.
 */
window.DATA_MAIN_EN = {
  meta: {
    title: 'CV · Yeoung Jo Jeoung',
    brand: 'R&D PORTFOLIO'
  },
  ui: {
    present: 'Present',
    print: 'Save PDF',
    exit: 'Exit',
    prev: 'Previous',
    next: 'Next',
    tbc: 'TBC',
    period: 'Period',
    org: 'Company',
    item: 'Device type / Class',
    products: 'Products',
    roles: 'My role',
    outcome: 'Outcome',
    overview: 'Overview',
    status: 'Status',
    category: 'Type',
    registered: 'Granted',
    filed: 'Filed',
    keyboardHint: '← → navigate · ESC exit',
    footer: 'Yeoung Jo Jeoung / R&D PORTFOLIO',
    updated: 'Last updated 2026.10.29'
  },
  nav: [
    { id: 'profile', label: 'Profile' },
    { id: 'career', label: 'Career' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Results' },
    { id: 'competencies', label: 'Expertise' },
    { id: 'education', label: 'Education' },
    { id: 'fit', label: 'Role Fit' }
  ],

  profile: {
    eyebrow: 'R&D PORTFOLIO',
    name: 'Yeoung Jo Jeoung',
    role: 'Biopolymer Medical Device R&D',
    tagline: 'A researcher who connects formulation design and product development\nwith testing, regulatory approval and commercialization.',
    summary: 'I have led commercialization-focused R&D for Class 3 and 4 medical devices (tissue-repair biomaterials, intra-articular injections and wound dressings) built on biodegradable and synthetic polymers such as HA, PN, PLLA and recombinant collagen.',
    facts: [
      { label: 'Education', value: 'M.S., Advanced Materials Engineering (Biomaterials), Hannam University' },
      { label: 'Current position', value: 'Assistant Manager, New Business R&D Team, RFBIO' },
      { label: 'Certification', value: 'Medical Device RA Specialist, Level 2 (2026.07)' }
    ],
    stats: [
      { value: '~6 yrs', label: 'Medical device R&D', note: '3 companies · since 2020.09' },
      { value: '4', label: 'Export approvals', note: '2 domestic approvals in progress (clinical)' },
      { value: '2 · 1', label: 'Patents granted · filed', note: 'plus 2 filed during M.S.' },
      { value: '3', label: 'SCI papers', note: '1 first-author · 2 co-author' }
    ],
    strengths: [
      'Hands-on experience with diverse high-performance biomaterials',
      'Testing designed with regulatory approval in mind',
      'Regulatory and design-control (DHF) documentation'
    ]
  },

  career: {
    eyebrow: '01',
    title: 'Career',
    lead: 'Connecting materials, formulation, testing and regulatory data for tissue-regeneration and aesthetic devices.',
    items: [
      {
        period: '2024.11 – Present',
        company: 'RFBIO',
        team: 'New Business R&D Team · Assistant Manager · R&D',
        summary: 'Development and regulatory support for intra-articular injections and aesthetic fillers / skin boosters',
        bullets: [
          'Intra-articular injection based on natural DNA-derived material',
          'Synthetic-polymer microparticle manufacturing for cosmetics and medical devices',
          'Tissue-repair biomaterial based on microbially derived natural polymer'
        ]
      },
      {
        period: '2023.07 – 2024.09',
        company: 'BRPHARM',
        team: 'R&D Center · Assistant Manager · R&D',
        summary: 'Process and formulation research on PN intra-articular injections and PLLA microparticles',
        bullets: []
      },
      {
        period: '2020.09 – 2023.07',
        company: 'TNRBIOFAB',
        team: 'Regenerative Medicine Team 3 · Assistant Manager · R&D',
        summary: 'Development and regulatory support for implantable devices made from natural materials',
        bullets: []
      },
      {
        period: '2018.09 – 2020.08',
        company: 'Hannam University Graduate School',
        team: 'M.S., Advanced Materials Engineering (Biomaterials)',
        summary: 'Microparticle-based 3D cell spheroid research (3 SCI papers, 2 patent applications)',
        bullets: [],
        muted: true
      }
    ]
  },

  projects: {
    eyebrow: '02',
    title: 'Key Projects',
    overview: {
      title: 'Projects at a Glance',
      head: ['Field / Project', 'Company · Period', 'My role', 'Stage / Outcome'],
      rows: [
        ['PN·HA filler · recombinant collagen · PLLA skin booster · intra-articular injection', 'RFBIO · 2024–present', 'Formulation · testing · regulatory documents', '4 export approvals · 2 domestic approvals in progress (clinical)'],
        ['PN injection · PLLA particles · PGA', 'BRPHARM · 2023–2024', 'Formulation · microparticle process', 'Early-stage formulation research'],
        ['Atelocollagen · tissue regeneration · anti-adhesion · wound dressing', 'TNRBIOFAB · 2020–2023', 'Formulation · analysis · regulatory support', 'Contributed to 2 patents and 2 product approvals'],
        ['3D cell spheroids', 'Hannam Univ. · 2018–2020', 'Study design · evaluation', '3 SCI papers · 2 patent applications']
      ],
      caption: 'Linking materials, formulation, testing and regulatory data for tissue-regeneration and aesthetic devices'
    },
    groups: [
      {
        id: 'rf-aesthetic',
        title: 'Aesthetic Fillers & Skin Boosters from High-Performance Biomaterials',
        sub: 'RFBIO · 2024.11 – Present',
        images: [
          { src: 'assets/img/rf-pnfilo.webp', alt: 'PN·HA composite filler product' },
          { src: 'assets/img/rf-recombinant-collagen.webp', alt: 'Recombinant collagen product' }
        ],
        projects: [
          {
            title: 'PN·HA Dermal Filler (PNFilo)',
            period: '2025.01 – 2026.07',
            item: 'Tissue-repair biomaterial [Class 4]',
            overview: 'A dermal filler combining PN (polynucleotide) with non-crosslinked HA for improved properties and safety',
            roles: [
              'Optimized the PN/HA formulation and its physical properties',
              'Transferred the process and authored the Design History File (DHF)',
              'Sourced materials and ran regulatory tests for domestic and export approval'
            ],
            outcome: 'Export approval obtained · domestic approval in progress (confirmatory trial, expected 2027)'
          },
          {
            title: 'Recombinant Collagen Filler & Skin Booster',
            period: '2025.11 – 2026.07',
            item: 'Collagen tissue filler / tissue-repair biomaterial [Class 4]',
            overview: 'Dermal filler and skin booster using microbially produced recombinant collagen',
            roles: [
              'Developed the formulation and evaluated physicochemical properties',
              'Transferred the manufacturing process; wrote development and test specifications',
              'Handled performance and biocompatibility testing for export approval'
            ],
            outcome: 'Export approval obtained · domestic and CE submissions planned'
          },
          {
            title: 'PLLA Microparticle Filler & Skin Booster',
            period: '2025.07 – 2026.07',
            item: 'Tissue-repair biomaterial [Class 4]',
            overview: 'Microparticle formulations combining biodegradable synthetic polymers (PLLA, PGA) with natural polymers',
            roles: [
              'Developed the PLLA microparticle process; controlled particle size and dispersion',
              'Ran cytotoxicity and preliminary efficacy tests on prototypes; secured the supply chain'
            ],
            outcome: 'Established the PLLA manufacturing process and developed a skin booster'
          }
        ]
      },
      {
        id: 'rf-joint',
        title: 'Intra-articular Injection & PGA Skin Booster',
        sub: 'RFBIO · BRPHARM',
        images: [],
        projects: [
          {
            title: 'Thermo-responsive Hydrogel Intra-articular Injection (human & veterinary)',
            period: '2025.01 – 2026.07',
            item: 'Tissue-repair biomaterial [Class 4]',
            overview: 'An injection that gels at body temperature to extend intra-articular residence time and pain relief',
            roles: [
              'Optimized the blend ratio of thermo-responsive and bio-derived polymers',
              'Rheology testing and in vitro sustained-release analysis',
              'Clinical / regulatory testing and technical documentation'
            ],
            outcome: 'Veterinary domestic approval in progress (clinical, expected 2027)'
          },
          {
            title: 'PGA Skin Booster & Dermal Filler Research',
            period: '2023.07 – 2026.07',
            org: 'BRPHARM (2023.07–2024.09) → RFBIO (2024.11–)',
            item: 'Tissue-repair biomaterial [Class 4]',
            overview: 'Filler research using a highly moisturizing biodegradable polymer',
            roles: [
              'Formulation research',
              'Raw-material supply chain'
            ],
            outcome: '[TBC]'
          }
        ]
      },
      {
        id: 'br-pn',
        title: 'PN-based Implantable Device Research',
        sub: 'BRPHARM · 2023.07 – 2024.09',
        images: [
          { src: 'assets/img/br-pn-syringe.webp', alt: 'Prefilled syringe product', wide: true }
        ],
        projects: [
          {
            title: 'PN Injection · PLLA Microparticles · Drug Delivery',
            period: '2023.07 – 2024.09',
            item: '',
            products: [
              'PN-based intra-articular injection',
              'Biodegradable polymer microparticle filler',
              'Thermo-responsive gel drug-delivery carrier'
            ],
            roles: [
              'Formulation research',
              'Set up and ran performance and physicochemical tests'
            ],
            outcome: 'Early-stage formulation research'
          }
        ]
      },
      {
        id: 'tnr-natural',
        title: 'Implantable Devices from Natural Materials',
        sub: 'TNRBIOFAB · 2020.09 – 2023.07',
        note: 'Contributed to 2 patents and 2 product approvals',
        images: [
          { src: 'assets/img/tnr-kit.webp', alt: 'Collagen product kit' },
          { src: 'assets/img/tnr-foam.webp', alt: 'Foam wound dressing' },
          { src: 'assets/img/tnr-gel-syringe.webp', alt: 'Hydrogel syringe' },
          { src: 'assets/img/tnr-collagen-syringe.webp', alt: 'Collagen solution syringe' }
        ],
        projects: [
          {
            title: 'Animal-derived Collagen Soft-tissue Filler (Reproderm [TBC] and others)',
            period: '2020.11 – 2023.02',
            item: 'Tissue-repair biomaterial / absorbable implant mesh [Class 4]',
            overview: 'Collagen sheet and solution formulations from decellularized dermis for soft-tissue reinforcement',
            roles: [
              'Developed a solubilization process for radiation-sterilized collagen sheets',
              'Set up collagen assays (quantitative / qualitative, trypsin resistance) and safety testing'
            ],
            outcome: 'Domestic approval obtained'
          },
          {
            title: 'Regenerative Anti-adhesion Barrier & Drug Delivery Kit',
            period: '2021.04 – 2023.02',
            item: 'Tissue-repair biomaterial / surgical product [Class 4]',
            overview: 'Injectable anti-adhesion barrier and a sustained-release analgesic delivery kit',
            roles: [
              'Optimized natural/synthetic polymer blends and evaluated prototypes',
              'Set up hydrogel viscoelasticity methods; outsourced efficacy and safety tests'
            ],
            outcome: ''
          },
          {
            title: 'Biocompatible Foam Wound Dressing (T&R Foam [TBC] and others)',
            period: '2023.02 – 2023.07',
            item: 'Topical foam [Class 2] / secondary-healing foam [Class 3] wound dressing · class [TBC]',
            overview: 'An exudate-absorbing foam and a drug-loaded secondary-healing foam for infected wounds',
            roles: [
              'Prepared drug-loaded foams; set up absorption and moisture-vapor tests',
              'Preliminary safety (ISO 10993 cytotoxicity) and efficacy reports',
              'Coordinated sterilization / packaging validation; wrote technical files'
            ],
            outcome: 'Domestic approval obtained'
          }
        ]
      },
      {
        id: 'msc-spheroid',
        title: '3D Cell Spheroid Research',
        sub: 'Hannam University Graduate School · 2018 – 2020',
        images: [
          { src: 'assets/img/lab-spheroid-timelapse.webp', alt: 'Time-lapse images of spheroid culture', wide: true }
        ],
        research: [
          { label: 'Problem', text: 'Hypoxia and cell death limiting conventional 3D culture' },
          { label: 'Approach', text: 'Porous microparticle–cell hybrid spheroids; evaluated survival and osteogenic differentiation' },
          { label: 'Results', text: '3 SCI papers · 2 patent applications · 3 conference presentations' }
        ],
        projects: []
      }
    ]
  },

  achievements: {
    eyebrow: '03',
    title: 'Products & Regulatory Results',
    highlights: [
      { value: '4', label: 'Export approvals', note: 'Confirmed: PNFilo, recombinant collagen filler · other 2 [TBC]' },
      { value: '2', label: 'Domestic approvals in progress', note: 'Confirmatory / clinical trials (expected 2027)' },
      { value: '2', label: 'Domestic approvals obtained', note: 'Reproderm, T&R Foam' }
    ],
    head: ['Product', 'Device type / Class', 'Status'],
    products: [
      ['PN/HA dermal filler (PNFilo)', 'Tissue-repair biomaterial · Class 4', 'Export approved / domestic in progress (expected 2027, confirmatory trial)'],
      ['Recombinant collagen dermal filler', 'Collagen tissue filler / tissue-repair biomaterial · Class 4', 'Export approved / domestic & CE planned'],
      ['Xenogeneic dermis collagen surgical product (Reproderm)', 'Absorbable implant mesh · Class 4', 'Domestic approval obtained'],
      ['Polyurethane foam wound dressing (T&R Foam)', 'Topical foam wound dressing · class [TBC]', 'Domestic approval obtained'],
      ['Veterinary thermo-responsive hydrogel intra-articular injection', 'Tissue-repair biomaterial · Class 4', 'Domestic in progress (expected 2027, clinical)']
    ],
    cosmetics: {
      title: 'Skin Boosters · Medical Cosmetics',
      items: [
        'Recombinant collagen skin booster (Youthfill Multi-active collagen and others)',
        'NAD-based antioxidant skin booster'
      ]
    },
    patents: {
      title: 'Intellectual Property',
      company: {
        label: 'Industry patents · 2 granted / 1 filed',
        items: [
          { type: 'Granted', no: 'KR 10-2023-0022018', title: 'Collagen composition for tissue regeneration' },
          { type: 'Granted', no: 'KR 10-2024-0076149', title: 'Anti-adhesion barrier composition promoting tissue regeneration' },
          { type: 'Filed', no: 'KR 10-2025-0162874', title: 'High-purity extraction method for DNA fragments' }
        ]
      },
      academic: {
        label: 'M.S. patents · 2 filed (co-inventor)',
        items: [
          { type: 'Filed', no: '10-2018-0147999', title: 'Polymer–cell hybrid spheroid, its preparation method and method of use' },
          { type: 'Filed', no: '10-2018-0148002', title: 'Bioactive factor-loaded polymer–cell hybrid spheroid and its preparation method' }
        ]
      }
    }
  },

  competencies: {
    eyebrow: '04',
    title: 'Core Expertise',
    flowTitle: 'A development flow from material to approval',
    flow: [
      { step: 'Material', desc: 'Analysis of approved-product dossiers\nand (pre)clinical data; global sourcing' },
      { step: 'Formulation', desc: 'Hydrogels · microparticles · thermo-gels\noptimization and process transfer' },
      { step: 'Testing', desc: 'Performance · physicochemical (KP/USP)\nbiocompatibility (ISO 10993)' },
      { step: 'Approval', desc: 'Technical files · DHF · protocols & reports\nresponses to regulatory / clinical queries' }
    ],
    pillars: [
      {
        title: 'Formulation · Materials',
        items: [
          'Hydrogel formulations: HA, PN, atelocollagen, recombinant collagen, PGA, poloxamer',
          'Biodegradable synthetic polymers and microparticles: PLLA, PDLA, PHA, PCL, PDO'
        ]
      },
      {
        title: 'Testing · Evaluation',
        items: [
          'Rheology (viscoelasticity), injection force, adhesion, particle size, osmolality',
          'HA / PN / collagen identity & assay, trypsin resistance, tensile / burst / suture strength',
          '2D / 3D cell culture and efficacy design; in vivo calvarial defect model'
        ]
      },
      {
        title: 'Regulatory · Safety',
        items: [
          'Physicochemical tests (KP · EP · USP): extractables, residue on evaporation, pH, heavy metals',
          'ISO 10993 cytotoxicity and endotoxin testing',
          'MFDS submission dossiers, DHF, shelf-life and sterilization / packaging validation'
        ]
      },
      {
        title: 'Intellectual Property',
        items: [
          '2 granted and 1 filed patent in industry',
          '2 patent applications during M.S. (co-inventor)'
        ]
      }
    ],
    cases: {
      title: 'Problem-solving Cases',
      items: [
        { problem: 'Precipitation of natural material in a natural/synthetic polymer composite', action: 'Changed raw-material dissolution conditions and added a post-treatment step', result: 'Precipitation resolved' },
        { problem: 'Non-conformity during biocompatibility evaluation', action: 'Analyzed raw materials with the supplier; established an in-house test method', result: 'Approval kept on schedule' },
        { problem: 'Hypoxic cell death and structural instability in 3D culture', action: 'Proposed and validated a porous-microparticle spheroid strategy', result: '3 SCI papers · 2 patent applications' }
      ]
    },
    gallery: [
      { src: 'assets/img/droplet.webp', alt: 'Hydrogel image' },
      { src: 'assets/img/lab-gel.webp', alt: 'Gel electrophoresis image' },
      { src: 'assets/img/lab-vials.webp', alt: 'Sample vials' }
    ]
  },

  skills: {
    eyebrow: '04',
    title: 'Technical Skills',
    groups: [
      { title: 'Benchmarking · Sourcing', items: ['Development strategy from approved-product dossiers, performance and (pre)clinical data', 'Sourcing and purchasing raw materials in Korea and abroad'] },
      { title: 'Formulation Testing Setup', items: ['Hydrogels / fillers: injection force, adhesion, rheology, particle size, osmolality', 'Sheets / meshes: tensile, burst and suture strength, absorption, MVTR, density', 'Collagen / ECM: collagen and elastin assays, trypsin resistance', 'Recombinant collagen: identity and content'] },
      { title: 'Physicochemical · Safety', items: ['KP / USP: residue on evaporation, extractables (pH, appearance, heavy metals, oxidizable substances)', 'ISO 10993: cytotoxicity, endotoxin'] },
      { title: 'Regulatory Documentation', items: ['Technical files; performance and physicochemical test protocols and reports', 'Biocompatibility, shelf-life, sterilization / packaging validation, efficacy testing'] },
      { title: 'In vitro · In vivo', items: ['3D spheroid culture (microconcave wells); hypoxia, cell death and osteogenic assays', 'SEM, ICC, ELISA, ALP, calcium content, qRT-PCR', 'Calvarial defect model, micro-CT, IHC, histology'] }
    ]
  },

  education: {
    eyebrow: '05',
    title: 'Education · Research',
    degrees: [
      { period: '2018.09 – 2020.08', school: 'Hannam University Graduate School', major: 'M.S., Advanced Materials Engineering (Biomaterials)', thesis: 'Growth factor-loaded microparticle-based cell spheroids for effective bone regeneration', optional: 'GPA 4.13 / 4.5' },
      { period: '2011.03 – 2017.02', school: 'Hannam University', major: 'B.S., Advanced Materials Engineering', thesis: 'Retrogradation stability of corn starch with added polysaccharides and monosaccharides', optional: 'GPA 3.03 / 4.5' }
    ],
    papersTitle: 'SCI Papers',
    papers: [
      { year: '2022', role: 'First author · thesis work', title: 'Cell spheroids containing bioactive molecule-immobilized porous particles with a leaf-stacked structure' },
      { year: '2021', role: 'Co-author', title: '3D Spheroid Formation Using BMP-Loaded Microparticles Enhances Odontoblastic Differentiation of Human Dental Pulp Stem Cells' },
      { year: '2020', role: 'Co-author', title: 'Signaling Molecule-Immobilized Porous Particles with a Leaf-Stacked Structure as a Bioactive Filler System' }
    ],
    talksTitle: 'Conference Presentations (2019)',
    talks: [
      '20th Anniversary International Meeting of the Korean Tissue Engineering and Regenerative Medicine Society (Jeju, Jun 2019)',
      'Fall Meeting of the Korean Society for Biomaterials (Pangyo, Sep 2019)',
      'Annual Fall Meeting of the Polymer Society of Korea (Jeju, Oct 2019)'
    ],
    optionalTitle: 'Other (optional)',
    optional: [
      'Busan National Mechanical Technical High School, Metallic Materials (2008–2011)',
      'Hannam University capstone design awards (2016)',
      'Craftsman certificates: materials testing, heat treatment, casting (2009), welding (2010)',
      'Lead player, Hannam University traditional percussion club (2011–2012)'
    ]
  },

  training: {
    eyebrow: '05',
    title: 'Training & Certification',
    head: ['Date', 'Course', 'Provider'],
    rows: [
      ['2026.09', 'Usability of Digital Medical Devices', 'NIDS'],
      ['2026.07', 'Medical Device RA Specialist, Level 2 (certified)', 'Medical Device Information & Technology Assistance Center', true],
      ['2026.06', 'Introduction to Medical Device Clinical Trials', 'Wonju Medical Industry Techno Valley'],
      ['2025.10', 'Pre-market Approval for Medical Supplies', 'KTR'],
      ['2023.10', 'Medical Device RA Specialist Training', 'NIDS'],
      ['2023.05', 'QMS (ISO 13485:2016 & KGMP) Internal Auditor', 'MSP C&T'],
      ['2022.10', 'MDR ISO 14971:2019 & ISO/TR 24971:2020 Risk Management', 'MSP C&T'],
      ['2022.08', 'MDR Design Control & Validation', 'MSP C&T'],
      ['2021.02', 'ISO 13485:2016 QMS Implementation', 'MSP C&T'],
      ['2020.12', 'MDR ISO 14971:2019 & ISO/TR 24971:2020 Risk Management', 'MSP C&T'],
      ['2020.09', 'Design Control & Validation (ISO 13485:2016)', 'MSP C&T']
    ]
  },

  fit: {
    eyebrow: '06',
    title: 'Fit for the Role',
    target: 'META BIOMED · 3D-printed Medical Device R&D',
    points: [
      { title: 'Biodegradable polymers', text: 'Research experience with PN, PLLA, PDO, PLC and PGA — biodegradable polymers used in 3D printing' },
      { title: '3D scaffold evaluation', text: 'Designing in vitro efficacy studies, built on 3D cell spheroid research' },
      { title: 'Regulation-aware development', text: 'Building approval requirements in from the start to minimize trial and error' }
    ],
    goals: [
      'Discovering materials and developing 3D-printed medical devices',
      'Sound regulatory strategy and a faster path to market'
    ]
  },

  closing: {
    title: 'Thanks for\nyour attention',
    sub: 'Yeoung Jo Jeoung / Biopolymer Medical Device R&D'
  }
};
