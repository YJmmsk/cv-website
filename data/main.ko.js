/* 메인 잡(의료기기 R&D) — 한국어 데이터
 * 내용 수정은 이 파일만 고치면 됩니다. 영어판은 main.en.js를 같은 구조로 함께 고치세요.
 * 문구 안의 [확인 필요]는 화면에서 노란 표시로 바뀝니다.
 */
window.DATA_MAIN_KO = {
  meta: {
    title: 'CV 웹사이트 · 정영조',
    brand: 'R&D PORTFOLIO'
  },
  ui: {
    present: '발표 모드',
    print: 'PDF 저장',
    exit: '종료',
    prev: '이전',
    next: '다음',
    tbc: '확인 필요',
    period: '기간',
    org: '소속',
    item: '품목 / 등급',
    products: '개발 제품',
    roles: '담당 업무',
    outcome: '주요 성과',
    overview: '개요',
    status: '진행 현황',
    category: '구분',
    registered: '등록',
    filed: '출원',
    keyboardHint: '← → 이동 · ESC 종료',
    footer: '정영조 / R&D PORTFOLIO',
    updated: '최종 수정 2026.10.29'
  },
  nav: [
    { id: 'profile', label: '프로필' },
    { id: 'career', label: '경력' },
    { id: 'projects', label: '프로젝트' },
    { id: 'achievements', label: '성과' },
    { id: 'competencies', label: '역량' },
    { id: 'education', label: '학력·자격' },
    { id: 'fit', label: '직무 적합성' }
  ],

  profile: {
    eyebrow: 'R&D PORTFOLIO',
    name: '정영조',
    role: '생체고분자 의료기기 연구개발',
    tagline: '고기능성 바이오 소재의 제형 설계와 제품 개발,\n평가·허가·제품화를 연계하는 연구원',
    summary: '생분해성·합성고분자(HA, PN, PLLA, 재조합 콜라겐 등) 기반 3·4등급 의료기기(조직수복용생체재료, 관절강주사제, 창상피복재)의 상용화 R&D를 수행해 왔습니다.',
    facts: [
      { label: '최종 학력', value: '한남대학교 대학원 신소재공학(생체재료) 석사' },
      { label: '현 소속', value: '알에프바이오 신사업연구팀 대리' },
      { label: '자격', value: '의료기기 RA 전문가 2급 (2026.07)' }
    ],
    stats: [
      { value: '약 6년', label: '의료기기 R&D 경력', note: '3개사 · 2020.09~' },
      { value: '4건', label: '수출용 허가', note: '내수 허가 2건 진행(임상)' },
      { value: '2 · 1', label: '특허 등록 · 출원', note: '석사 과정 출원 2건 별도' },
      { value: '3편', label: 'SCI 논문', note: '주저자 1편 · 공동저자 2편' }
    ],
    strengths: [
      '다양한 고기능성 바이오 소재 연구 경험',
      '허가 관점의 실험 역량',
      '허가 및 설계개발(DHF) 문서 작성 능력'
    ]
  },

  career: {
    eyebrow: '01',
    title: '경력 이력',
    lead: '조직재생과 에스테틱 의료기기의 소재·제형·시험·허가 자료를 연계해 왔습니다.',
    items: [
      {
        period: '2024.11 – 현재',
        company: '알에프바이오',
        team: '신사업연구팀 · 대리 · 연구개발',
        summary: '관절강주사제 및 에스테틱 필러·스킨부스터 개발과 허가 대응',
        bullets: [
          '천연 DNA 유래물 기반 관절강주사제 개발',
          '합성고분자 기반 미세입자 제조 연구 및 화장품·의료기기 개발',
          '미생물 유래 천연고분자 기반 조직수복용생체재료 개발'
        ]
      },
      {
        period: '2023.07 – 2024.09',
        company: '비알팜',
        team: '연구소 · 대리 · 연구개발',
        summary: 'PN 관절강주사제·PLLA 미세입자 제조 공정 및 제형 연구',
        bullets: []
      },
      {
        period: '2020.09 – 2023.07',
        company: '티앤알바이오팹',
        team: '재생의료 3팀 · 대리 · 연구개발',
        summary: '천연 유래 소재 이식형 의료기기 개발 및 허가 대응',
        bullets: []
      },
      {
        period: '2018.09 – 2020.08',
        company: '한남대학교 대학원',
        team: '신소재공학(생체재료) 석사',
        summary: '미세입자 기반 3D 세포 스페로이드 연구 (SCI 3편, 특허 출원 2건)',
        bullets: [],
        muted: true
      }
    ]
  },

  projects: {
    eyebrow: '02',
    title: '주요 프로젝트',
    overview: {
      title: '프로젝트 한눈에 보기',
      head: ['분야 / 프로젝트', '소속 · 기간', '담당 역할', '개발 단계 / 성과'],
      rows: [
        ['PN·HA 필러 · 재조합 콜라겐 · PLLA 스킨부스터 · 관절강주사제', '알에프바이오 · 2024–현재', '제형 · 평가 · 허가 자료', '수출용 허가 4건 · 내수 허가 2건 진행(임상)'],
        ['PN 주사제 · PLLA 입자 · PGA', '비알팜 · 2023–2024', '제형 · 미세입자 공정', '기초 제형 연구'],
        ['아텔로콜라겐 · 조직재생 · 유착방지제 · 창상피복재', '티앤알바이오팹 · 2020–2023', '제형 · 분석 · 허가 지원', '특허 2건 · 제품 2건 허가 기여'],
        ['3D 세포 스페로이드', '한남대 대학원 · 2018–2020', '연구 설계 · 평가', 'SCI 논문 3편 · 특허 출원 2건']
      ],
      caption: '조직재생·에스테틱 의료기기의 소재 · 제형 · 시험 · 허가 자료를 연계'
    },
    groups: [
      {
        id: 'rf-aesthetic',
        title: '고기능성 바이오 소재 에스테틱 필러·스킨부스터 개발',
        sub: '알에프바이오 · 2024.11 – 현재',
        images: [
          { src: 'assets/img/rf-pnfilo.webp', alt: 'PN·HA 복합 필러 제품 이미지' },
          { src: 'assets/img/rf-recombinant-collagen.webp', alt: '재조합 콜라겐 제품 이미지' }
        ],
        projects: [
          {
            title: 'PN·HA 기반 성형용 필러 (PNFilo)',
            period: '2025.01 – 2026.07',
            item: '조직수복용생체재료 [4등급]',
            overview: 'PN(Polynucleotide)과 비가교 HA를 복합화해 물성과 안전성을 높인 성형용 필러',
            roles: [
              'PN/HA 혼합 제형 최적화 및 물성 개선',
              '제형 공정 이관 및 설계개발 문서(DHF) 작성',
              '내수·수출 허가용 원부자재 조사 및 허가 시험'
            ],
            outcome: '수출용 허가 완료 · 내수 허가 진행(확증임상, 2027 예정)'
          },
          {
            title: '재조합 콜라겐 기반 성형용 필러·스킨부스터',
            period: '2025.11 – 2026.07',
            item: '콜라겐사용조직보충재 / 조직수복용생체재료 [4등급]',
            overview: '미생물 유래 재조합 콜라겐을 활용한 성형용 필러와 스킨부스터',
            roles: [
              '재조합 콜라겐 제형 개발 및 물리화학적 특성 평가',
              '제조 공정 기술이관, 개발 표준서·시험규격서 작성',
              '수출 허가용 성능 및 생물학적 안전성 시험 대응'
            ],
            outcome: '수출용 허가 완료 · 내수 및 CE 진행 예정'
          },
          {
            title: 'PLLA 기반 미세입자 필러·스킨부스터 연구',
            period: '2025.07 – 2026.07',
            item: '조직수복용생체재료 [4등급]',
            overview: 'PLLA·PGA 등 생분해성 합성고분자와 천연고분자를 복합화한 미세입자 제형',
            roles: [
              'PLLA 미세입자 제조 공정 연구, 입도·분산성 제어',
              '시작품 세포독성·사전 유효성 평가, 원부자재 공급망 확보'
            ],
            outcome: 'PLLA 제조 공정 확립 및 스킨부스터 개발'
          }
        ]
      },
      {
        id: 'rf-joint',
        title: '관절강 주사제 · PGA 스킨부스터 연구',
        sub: '알에프바이오 · 비알팜',
        images: [],
        projects: [
          {
            title: '온도감응성 하이드로겔 관절강 주사제 (인체·동물용)',
            period: '2025.01 – 2026.07',
            item: '조직수복용생체재료 [4등급]',
            overview: '체온에서 겔화되는 온도감응성 제형으로 관절 내 체류 시간과 통증 완화 효과를 높인 주사제',
            roles: [
              '온도감응성·생체 유래 고분자 혼합비 선정으로 제형 최적화',
              'Rheology 평가 및 in vitro 서방성 방출 거동 분석',
              '임상·허가용 시험 수행 및 기술문서 작성'
            ],
            outcome: '동물용 내수 허가 진행(임상, 2027 예정)'
          },
          {
            title: 'PGA 기반 스킨부스터·성형용 필러 연구',
            period: '2023.07 – 2026.07',
            org: '비알팜(2023.07–2024.09) → 알에프바이오(2024.11–)',
            item: '조직수복용생체재료 [4등급]',
            overview: '고보습 생분해성 고분자를 활용한 성형용 필러 연구',
            roles: [
              '제형 연구',
              '원부자재 공급망 확보'
            ],
            outcome: '[확인 필요]'
          }
        ]
      },
      {
        id: 'br-pn',
        title: 'PN 기반 이식형 의료기기 제품 연구',
        sub: '비알팜 · 2023.07 – 2024.09',
        images: [
          { src: 'assets/img/br-pn-syringe.webp', alt: '프리필드 시린지 제품 이미지', wide: true }
        ],
        projects: [
          {
            title: 'PN 관절강주사제 · PLLA 미세입자 · 약물전달체',
            period: '2023.07 – 2024.09',
            item: '',
            products: [
              'PN 기반 관절강주사제 개발',
              '생분해성 고분자 미세입자 필러 개발',
              '온도감응형 겔 기반 약물전달체 개발'
            ],
            roles: [
              '제형 연구',
              '성능·물리화학적 시험 설정 및 수행'
            ],
            outcome: '기초 제형 연구'
          }
        ]
      },
      {
        id: 'tnr-natural',
        title: '천연 유래 소재 기반 이식형 의료기기 개발',
        sub: '티앤알바이오팹 · 2020.09 – 2023.07',
        note: '특허 2건 및 제품 2건의 허가에 기여',
        images: [
          { src: 'assets/img/tnr-kit.webp', alt: '콜라겐 제품 키트' },
          { src: 'assets/img/tnr-foam.webp', alt: '폼 창상피복재' },
          { src: 'assets/img/tnr-gel-syringe.webp', alt: '하이드로겔 시린지' },
          { src: 'assets/img/tnr-collagen-syringe.webp', alt: '콜라겐 용액 시린지' }
        ],
        projects: [
          {
            title: '동물 유래 콜라겐 연조직 보충재 (리프로덤 외)',
            period: '2020.11 – 2023.02',
            item: '조직수복용생체재료 / 흡수성이식용메쉬 [4등급]',
            overview: '진피 탈세포화를 통한 연조직 보강용 콜라겐 시트 및 용액형 제형',
            roles: [
              '방사선 멸균 대응 콜라겐 시트의 용액화 공정·제형 연구',
              '콜라겐 정량·정성, 트립신 저항성 분석법 셋업 및 안전성 평가'
            ],
            outcome: '내수 허가 완료'
          },
          {
            title: '조직재생 촉진형 유착방지피복재 · 약물전달체',
            period: '2021.04 – 2023.02',
            item: '조직수복용생체재료 / 외과용품 [4등급]',
            overview: '주사형 유착방지재 및 서방형 통증 완화 약물전달 키트',
            roles: [
              '천연·합성 고분자 배합비 최적화 및 시작품 성능 평가',
              '하이드로겔 점탄성 분석법 설정, 유효성·안전성 시험 의뢰'
            ],
            outcome: ''
          },
          {
            title: '생체적합성 폼제 창상피복재 (티앤알 폼 외)',
            period: '2023.02 – 2023.07',
            item: '국소폼제 [2등급] / 2차치유폼제 [3등급] 창상피복재 · 등급 [확인 필요]',
            overview: '삼출물 흡수 기본 폼제와 약물 함유 감염 치료용 2차치유 폼제',
            roles: [
              '약물 함유 폼 제형 제조, 흡수력·투습도 성능 분석 셋업',
              'ISO 10993 세포독성 등 사전 안전성·유효성 평가 보고서',
              '멸균·포장 밸리데이션 외부 의뢰, 허가용 기술문서 작성'
            ],
            outcome: '내수 허가 완료'
          }
        ]
      },
      {
        id: 'msc-spheroid',
        title: '3D 세포 스페로이드 연구',
        sub: '한남대학교 대학원 · 2018 – 2020',
        images: [
          { src: 'assets/img/lab-spheroid-timelapse.webp', alt: '스페로이드 배양 경시 관찰 이미지', wide: true }
        ],
        research: [
          { label: '연구 주제', text: '기존 3D 배양의 저산소·세포사멸 한계 개선' },
          { label: '연구 설계', text: '다공성 미세입자·세포 복합 스페로이드, 생존·골분화 평가' },
          { label: '주요 성과', text: 'SCI 논문 3편 · 특허 출원 2건 · 학회 발표 3건' }
        ],
        projects: []
      }
    ]
  },

  achievements: {
    eyebrow: '03',
    title: '제품·허가 성과',
    highlights: [
      { value: '4건', label: '수출용 허가', note: '확인된 품목: PNFilo, 재조합 콜라겐 필러 · 나머지 2건 [확인 필요]' },
      { value: '2건', label: '내수 허가 진행', note: '확증임상 · 임상 진행 중 (2027 예정)' },
      { value: '2건', label: '내수 허가 완료', note: '리프로덤, 티앤알 폼' }
    ],
    head: ['제품', '품목 / 등급', '진행 현황'],
    products: [
      ['PN/HA 기반 성형용 필러 (PNFilo)', '조직수복용생체재료 · 4등급', '수출용 허가 완료 / 내수 진행(2027 예정, 확증임상)'],
      ['재조합 콜라겐 기반 성형용 필러', '콜라겐사용조직보충재 / 조직수복용생체재료 · 4등급', '수출용 허가 완료 / 내수·CE 진행 예정'],
      ['이종진피 콜라겐 써지컬 제품 (리프로덤)', '흡수성이식용메쉬 · 4등급', '내수 허가 완료'],
      ['우레탄폼 창상피복재 (티앤알 폼)', '국소폼제창상피복재 · 등급 [확인 필요]', '내수 허가 완료'],
      ['동물용 온도감응성 하이드로겔 관절강 주사제', '조직수복용생체재료 · 4등급', '내수 진행(2027 예정, 임상)']
    ],
    cosmetics: {
      title: '스킨부스터 · 메디컬 코스메틱',
      items: [
        '재조합 콜라겐 기반 스킨부스터 (Youthfill Multi-active collagen 외)',
        'NAD 기반 항산화 스킨부스터'
      ]
    },
    patents: {
      title: '지식재산권',
      company: {
        label: '재직 중 특허 · 등록 2 / 출원 1',
        items: [
          { type: '등록', no: 'KR 10-2023-0022018', title: '조직재생을 위한 콜라겐 조성물' },
          { type: '등록', no: 'KR 10-2024-0076149', title: '조직 재생 촉진형 유착 방지 피복재 조성물' },
          { type: '출원', no: 'KR 10-2025-0162874', title: 'DNA 분절체의 고순도 추출방법' }
        ]
      },
      academic: {
        label: '석사 과정 특허 · 출원 2 (공동 발명)',
        items: [
          { type: '출원', no: '10-2018-0147999', title: '고분자-세포 혼합 스페로이드, 이의 제조방법 및 이를 사용하는 방법' },
          { type: '출원', no: '10-2018-0148002', title: '생리활성인자가 탑재된 고분자-세포 혼합 스페로이드 및 이의 제조방법' }
        ]
      }
    }
  },

  competencies: {
    eyebrow: '04',
    title: '핵심 역량',
    flowTitle: '소재에서 허가까지 연결하는 개발 흐름',
    flow: [
      { step: '소재', desc: '선행 허가자료·(전)임상 데이터 분석\n국내외 원부자재 공급망 발굴' },
      { step: '제형', desc: '하이드로겔 · 미세입자 · 온도감응성 겔\n제형 최적화와 공정 이관' },
      { step: '시험', desc: '성능 · 물리화학(KP/USP)\n생물학적 안전성(ISO 10993)' },
      { step: '허가', desc: '기술문서 · DHF · 시험계획서/보고서\n허가·임상 보완 대응' }
    ],
    pillars: [
      {
        title: '제형 · 소재',
        items: [
          'HA, PN, 아텔로콜라겐, 재조합 콜라겐, PGA, 폴록사머 등 하이드로겔 소재 제형 연구',
          'PLLA, PDLA, PHA, PCL, PDO 등 생분해성 합성고분자·미세입자 제조'
        ]
      },
      {
        title: '시험분석 · 평가',
        items: [
          'Rheology(점탄성), 주입력, 점착력, 입도, 삼투압',
          'HA·PN·콜라겐 확인·함량, 트립신 저항성, 인장·파열·봉합 강도',
          '2D·3D 세포 배양 및 효능 평가 설계, in vivo 두개골 결함 모델'
        ]
      },
      {
        title: 'RA · 안전성',
        items: [
          '물리화학적 시험(KP·EP·USP): 용출물, 증발잔류물, pH, 중금속 등',
          'ISO 10993 세포독성, 엔도톡신 시험',
          '허가 제출 서류(의료기기 허가·신고·심사 등에 관한 규정 제26조제1항), DHF, 유효기간·멸균/포장 밸리데이션'
        ]
      },
      {
        title: '지식재산',
        items: [
          '재직 중 특허 등록 2건 · 출원 1건',
          '석사 과정 특허 출원 2건 (공동 발명)'
        ]
      }
    ],
    cases: {
      title: '문제 해결 사례',
      items: [
        { problem: '천연·합성고분자 융복합 제형에서 천연 소재 침전', action: '원재료 용해 조건 변경, 후처리 공정 신설', result: '침전 이슈 해결' },
        { problem: '생물학적 안전성 평가 중 부적합 발생', action: '제조사 연계 원자재 분석, 자사 규격 분석법 신규 수립', result: '인허가 일정 차질 없이 진행' },
        { problem: '3D 세포 배양의 저산소 세포사멸·구조 불안정', action: '다공성 미세입자 기반 스페로이드 전략 제시·검증', result: 'SCI 논문 3편 · 특허 출원 2건' }
      ]
    },
    gallery: [
      { src: 'assets/img/droplet.webp', alt: '하이드로겔 이미지' },
      { src: 'assets/img/lab-gel.webp', alt: '전기영동 분석 이미지' },
      { src: 'assets/img/lab-vials.webp', alt: '시료 바이알' }
    ]
  },

  skills: {
    eyebrow: '04',
    title: '보유 기술',
    groups: [
      { title: '선행 조사 · SCM', items: ['기허가 제품 허가자료·성능·(전)임상 데이터 분석으로 개발 전략 수립', '국내외 원부자재 공급망 발굴 및 구매'] },
      { title: '제형 분석 · 시험 셋업', items: ['하이드로겔/필러: 주입력, 점착력, Rheology, 입도, 삼투압', '시트형/메쉬: 인장·파열·봉합 강도, 흡수/방수력, 투습도, 밀도', '콜라겐/ECM: 콜라겐·엘라스틴 정량·정성, 트립신 저항성', '재조합 콜라겐: 확인 및 함량 시험'] },
      { title: '물리화학 · 안전성', items: ['KP/USP: 증발잔류물, 용출물(pH, 성상, 중금속, 과망간산칼륨 환원성물질 등)', 'ISO 10993: 세포독성, 엔도톡신'] },
      { title: 'RA · 허가 문서화', items: ['기술문서, 성능·물리화학적 시험계획서 및 보고서', '생물학적 안전성, 유효기간 설정, 멸균·포장 밸리데이션, 유효성 평가'] },
      { title: 'in vitro · in vivo', items: ['3D 세포 스페로이드 배양(microconcave well), hypoxia·cell death·골분화 분석', 'SEM, ICC, ELISA, ALP, calcium contents, qRT-PCR', '두개골 결함 모델, micro-CT, IHC, histology'] }
    ]
  },

  education: {
    eyebrow: '05',
    title: '학력 · 연구 실적',
    degrees: [
      { period: '2018.09 – 2020.08', school: '한남대학교 대학원', major: '신소재공학(생체재료) 석사', thesis: '효과적인 골재생을 위한 성장인자 탑재 미세입자 기반의 세포 스페로이드에 관한 연구', optional: '학점 4.13 / 4.5' },
      { period: '2011.03 – 2017.02', school: '한남대학교', major: '신소재공학과 학사', thesis: '다당류와 단당류 첨가에 따른 옥수수 전분의 노화 안정성 연구', optional: '학점 3.03 / 4.5' }
    ],
    papersTitle: 'SCI 논문',
    papers: [
      { year: '2022', role: '주저자 · 학위논문', title: 'Cell spheroids containing bioactive molecule-immobilized porous particles with a leaf-stacked structure' },
      { year: '2021', role: '공동저자', title: '3D Spheroid Formation Using BMP-Loaded Microparticles Enhances Odontoblastic Differentiation of Human Dental Pulp Stem Cells' },
      { year: '2020', role: '공동저자', title: 'Signaling Molecule-Immobilized Porous Particles with a Leaf-Stacked Structure as a Bioactive Filler System' }
    ],
    talksTitle: '학회 발표 (2019)',
    talks: [
      '한국조직공학·재생의학회 20주년 국제학술대회 (제주, 2019.06)',
      '한국생체재료학회 추계학술대회 (판교, 2019.09)',
      '한국고분자학회 추계학술대회 (제주, 2019.10)'
    ],
    optionalTitle: '기타 (선택 표시)',
    optional: [
      '국립부산기계공업고등학교 금속재료과 (2008–2011)',
      '한남대 캡스톤디자인 경시대회·창의 아이디어 옥션 수상 (2016)',
      '금속재료시험·열처리·주조(2009), 용접(2010) 기능사',
      '한남대 풍물동아리 상쇠 (2011–2012)'
    ]
  },

  training: {
    eyebrow: '05',
    title: '교육 및 자격 이력',
    head: ['일자', '내용', '기관'],
    rows: [
      ['2026.09', '디지털의료기기 사용적합성 교육', 'NIDS'],
      ['2026.07', '의료기기 RA 전문가 2급 자격 취득', '의료기기정보기술지원센터', true],
      ['2026.06', '의료기기 임상 기초 교육', '원주의료기기종합지원센터'],
      ['2025.10', '의료기기 용품 분야 시판 전 인허가 교육', 'KTR'],
      ['2023.10', '의료기기 RA 전문가 양성 교육', 'NIDS'],
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
    title: '지원 직무와의 적합성',
    target: '메타바이오메드 · 3D 프린팅 의료기기 개발 R&D',
    points: [
      { title: '생분해성 고분자 소재 경험', text: 'PN, PLLA, PDO, PLC, PGA 등 3D 프린팅에 사용되는 생분해성 고분자 연구 경험' },
      { title: '3차원 지지체 평가 경험', text: '3D 세포 스페로이드 연구 기반의 in vitro 효능 평가 설계 경험' },
      { title: '허가를 이해한 개발', text: '허가 요건을 개발 초기부터 반영해 시행착오 최소화' }
    ],
    goals: [
      '3D 프린팅 의료기기의 소재 발굴 및 제품 개발',
      '올바른 허가 전략 수립 및 신속한 제품 출시'
    ]
  },

  closing: {
    title: 'Thanks for\nyour attention',
    sub: '정영조 / 생체고분자 의료기기 R&D'
  }
};
