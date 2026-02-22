/*
 * Harbor LEGAL — site-config.js
 * Treści i struktura strony. Edycja tego pliku aktualizuje wszystkie podstrony.
 * Cennik → server-side (Cloudflare Worker), tutaj go nie ma.
 */

var SITE = {

  // ── Dane kancelarii ──
  brand: {
    name: 'Harbor Legal',
    fullName: {
      pl: 'Kancelaria Radcy Prawnego Przemysław Kołakowski',
      en: 'Przemysław Kołakowski Legal Counsel'
    },
    title: { pl: 'Radca Prawny', en: 'Legal Counsel' },
    founder: 'Przemysław Kołakowski',
    nip: '952 198 35 01',
    oirp: 'WA-13427',
    phone: '+48 453 390 849',
    phoneRaw: '+48453390849',
    email: 'pk@harbor.legal',
    address: { pl: 'Warszawa, Polska', en: 'Warsaw, Poland' },
    linkedin: 'https://www.linkedin.com/in/przemys%C5%82aw-ko%C5%82akowski-10477960/',
    url: 'https://harbor.legal',
  },


  // ── Nawigacja ──
  nav: {
    pl: {
      items: [
        {
          label: 'Usługi',
          href: '/uslugi/',
          megamenu: true,
          groups: [
            {
              title: 'Technologie & Fintech',
              href: '/uslugi/technologie-fintech/',
              items: [
                { label: 'Fintech & Płatności', anchor: '#fintech' },
                { label: 'Startup & Scale-up', anchor: '#startup' },
                { label: 'Ochrona danych / GDPR', anchor: '#gdpr' },
                { label: 'Regulacje tech', anchor: '#regulacje' },
                { label: 'Transakcje M&A', anchor: '#ma' },
                { label: 'Cross-border', anchor: '#crossborder' },
              ]
            },
            {
              title: 'Obsługa prawna firm',
              href: '/uslugi/obsluga-prawna-firm/',
              items: [
                { label: 'Umowy handlowe', anchor: '#umowy' },
                { label: 'Prawo pracy', anchor: '#praca' },
                { label: 'Prawo korporacyjne', anchor: '#korporacyjne' },
                { label: 'Compliance', anchor: '#compliance' },
                { label: 'Windykacja', anchor: '#windykacja' },
              ]
            },
            {
              title: 'Spory & Postępowania',
              href: '/uslugi/spory-i-postepowania/',
              items: [
                { label: 'Spory gospodarcze', anchor: '#spory-gosp' },
                { label: 'Arbitraż & mediacje', anchor: '#arbitraz' },
                { label: 'Postępowania regulacyjne', anchor: '#regulacyjne' },
              ]
            }
          ]
        },
        { label: 'Współpraca', href: '/wspolpraca/' },
        { label: 'O\u00a0kancelarii', href: '/o-kancelarii/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Kontakt', href: '/kontakt/', cta: true },
      ],
      langSwitch: [
        { label: 'PL', href: '/', active: true },
        { label: 'EN', href: '/en' },
      ]
    },
    en: {
      items: [
        {
          label: 'Services',
          href: '/en/services/',
          megamenu: true,
          groups: [
            {
              title: 'Technology & Fintech',
              href: '/en/services/technology-fintech/',
              items: [
                { label: 'Fintech & Payments', anchor: '#fintech' },
                { label: 'Startup & Scale-up', anchor: '#startup' },
                { label: 'Data Protection / GDPR', anchor: '#gdpr' },
                { label: 'Tech Regulations', anchor: '#regulations' },
                { label: 'M&A Transactions', anchor: '#ma' },
                { label: 'Cross-border', anchor: '#crossborder' },
              ]
            },
            {
              title: 'Business Legal Services',
              href: '/en/services/business-legal-services/',
              items: [
                { label: 'Commercial Contracts', anchor: '#contracts' },
                { label: 'Employment Law', anchor: '#employment' },
                { label: 'Corporate Law', anchor: '#corporate' },
                { label: 'Compliance', anchor: '#compliance' },
                { label: 'Debt Recovery', anchor: '#recovery' },
              ]
            },
            {
              title: 'Disputes & Litigation',
              href: '/en/services/disputes-litigation/',
              items: [
                { label: 'Commercial Disputes', anchor: '#disputes' },
                { label: 'Arbitration & Mediation', anchor: '#arbitration' },
                { label: 'Regulatory Proceedings', anchor: '#regulatory' },
              ]
            }
          ]
        },
        { label: 'Cooperation', href: '/en/cooperation/' },
        { label: 'About', href: '/en/about/' },
        { label: 'Blog', href: '/en/blog/' },
        { label: 'Contact', href: '/en/contact/', cta: true },
      ],
      langSwitch: [
        { label: 'PL', href: '/' },
        { label: 'EN', href: '/en', active: true },
      ]
    }
  },


  // ── Obszary usługowe ──
  pillars: {
    pl: [
      {
        id: 'tech-fintech',
        title: 'Technologie & Fintech',
        subtitle: 'Obsługa prawna firm technologicznych, fintechów i\u00a0startupów',
        tags: 'MiCA \u00b7 PSD2/3 \u00b7 AML \u00b7 GDPR \u00b7 AI Act \u00b7 ESOP \u00b7 M&A',
        geo: 'EOG \u00b7 ZEA \u00b7 Hongkong',
        href: '/uslugi/technologie-fintech/',
        blogCategory: 'fintech-regulacje',
      },
      {
        id: 'obsluga-firm',
        title: 'Obsługa prawna firm',
        subtitle: 'Bieżące wsparcie prawne dla MŚP i\u00a0spółek',
        tags: 'Umowy \u00b7 Prawo pracy \u00b7 KRS \u00b7 Compliance \u00b7 Windykacja',
        href: '/uslugi/obsluga-prawna-firm/',
        blogCategory: 'prawo-gospodarcze',
      },
      {
        id: 'spory',
        title: 'Spory & Postępowania',
        subtitle: 'Reprezentacja w\u00a0sporach cywilnych, gospodarczych i\u00a0regulacyjnych',
        tags: 'Spory gospodarcze \u00b7 Arbitraż \u00b7 KNF \u00b7 UOKiK',
        href: '/uslugi/spory-i-postepowania/',
        blogCategory: 'spory-gospodarcze',
      },
    ],
    en: [
      {
        id: 'tech-fintech',
        title: 'Technology & Fintech',
        subtitle: 'Legal services for tech companies, fintechs and startups',
        tags: 'MiCA \u00b7 PSD2/3 \u00b7 AML \u00b7 GDPR \u00b7 AI Act \u00b7 ESOP \u00b7 M&A',
        geo: 'EEA \u00b7 UAE \u00b7 Hong Kong',
        href: '/en/services/technology-fintech/',
        blogCategory: 'fintech-regulacje',
      },
      {
        id: 'obsluga-firm',
        title: 'Business Legal Services',
        subtitle: 'Ongoing legal support for SMEs and corporations',
        tags: 'Contracts \u00b7 Employment \u00b7 Corporate \u00b7 Compliance \u00b7 Debt Recovery',
        href: '/en/services/business-legal-services/',
        blogCategory: 'prawo-gospodarcze',
      },
      {
        id: 'spory',
        title: 'Disputes & Litigation',
        subtitle: 'Representation in civil, commercial and regulatory proceedings',
        tags: 'Commercial Disputes \u00b7 Arbitration \u00b7 Regulatory',
        href: '/en/services/disputes-litigation/',
        blogCategory: 'spory-gospodarcze',
      },
    ]
  },


  // ── Specjalizacje (karty na landing pages) ──
  services: {
    pl: {
      'tech-fintech': [
        { num: '01', name: 'Fintech & Płatności', desc: 'Licencjonowanie instytucji płatniczych, systemy zgodne z\u00a0PSD2/PSD3, wdrażanie procedur AML/KYC, rejestracja VASP i\u00a0compliance MiCA.', tags: 'PSD2/3 \u00b7 AML/KYC \u00b7 KNF \u00b7 MiCA \u00b7 EMI' },
        { num: '02', name: 'Startup & Scale-up', desc: 'Obsługa prawna od incorporacji przez rundy finansowania VC po exit. Umowy inwestycyjne, programy ESOP, corporate governance.', tags: 'SHA \u00b7 ESOP \u00b7 VC \u00b7 M&A \u00b7 Cap Table' },
        { num: '03', name: 'Ochrona danych', desc: 'Kompleksowe wdrożenia GDPR, polityki prywatności, umowy powierzenia, procedury naruszeń danych, DPO as a\u00a0Service.', tags: 'GDPR \u00b7 DPIA \u00b7 DPO \u00b7 Cookie Policy' },
        { num: '04', name: 'Transakcje M&A', desc: 'Due diligence prawne, strukturyzacja transakcji, negocjacje SPA/APA, reorganizacje korporacyjne.', tags: 'SPA \u00b7 APA \u00b7 Due Diligence \u00b7 Closing' },
        { num: '05', name: 'Regulacje Tech', desc: 'Compliance z\u00a0AI Act, DSA/DMA, regulacje platform marketplace, e-commerce, umowy SaaS i\u00a0licencje.', tags: 'AI Act \u00b7 DSA \u00b7 DMA \u00b7 SaaS \u00b7 E-commerce' },
        { num: '06', name: 'Cross-Border', desc: 'Obsługa transgraniczna: EOG, ZEA, Hongkong. Kontrakty międzynarodowe, structuring, wybór jurysdykcji.', tags: 'EOG \u00b7 ZEA \u00b7 Hongkong' },
      ],
      'obsluga-firm': [
        { num: '01', name: 'Umowy handlowe', desc: 'Drafting, negocjacje i\u00a0weryfikacja umów handlowych, ramowych, NDA, SLA. Wzorce umowne i\u00a0regulaminy.', tags: 'Drafting \u00b7 Negocjacje \u00b7 NDA \u00b7 Regulaminy' },
        { num: '02', name: 'Prawo pracy', desc: 'Umowy o\u00a0pracę i\u00a0B2B, regulaminy pracy, zwolnienia indywidualne i\u00a0grupowe, spory pracownicze.', tags: 'KP \u00b7 B2B \u00b7 Regulaminy \u00b7 Zwolnienia' },
        { num: '03', name: 'Prawo korporacyjne', desc: 'Obsługa KRS, zgromadzenia wspólników, uchwały, zmiany umowy spółki, podwyższenia kapitału.', tags: 'KRS \u00b7 Uchwały \u00b7 Kapitał \u00b7 Governance' },
        { num: '04', name: 'Compliance', desc: 'Wdrożenia AML, procedury whistleblowing, polityki antykorupcyjne, audyty zgodności.', tags: 'AML \u00b7 Whistleblowing \u00b7 Audyt' },
        { num: '05', name: 'Windykacja', desc: 'Windykacja przedsądowa i\u00a0sądowa, zabezpieczenie roszczeń, postępowania egzekucyjne.', tags: 'Przedsądowa \u00b7 Sądowa \u00b7 Egzekucja' },
      ],
      'spory': [
        { num: '01', name: 'Spory gospodarcze', desc: 'Reprezentacja w\u00a0sporach kontraktowych, o\u00a0zapłatę, odszkodowawczych, korporacyjnych. Postępowania przed sądami powszechnymi.', tags: 'Kontraktowe \u00b7 Odszkodowania \u00b7 Korporacyjne' },
        { num: '02', name: 'Arbitraż & mediacje', desc: 'Postępowania arbitrażowe krajowe i\u00a0międzynarodowe, mediacje gospodarcze, ADR.', tags: 'Arbitraż \u00b7 Mediacja \u00b7 ADR' },
        { num: '03', name: 'Postępowania regulacyjne', desc: 'Reprezentacja przed KNF, UOKiK, UODO, GIIF. Kontrole, postępowania administracyjne, odwołania.', tags: 'KNF \u00b7 UOKiK \u00b7 UODO \u00b7 GIIF' },
      ]
    },
    en: {} // Phase 3
  },


  // ── Modele współpracy (bez kwot — cennik jest server-side) ──
  models: {
    pl: [
      {
        id: 'consultation',
        name: 'Konsultacja',
        desc: 'Jednorazowa porada lub audyt prawny. Idealna na start, gdy potrzebujesz szybkiej odpowiedzi na konkretne pytanie.',
        icon: '/images/icon-consultation.svg',
        highlighted: false,
      },
      {
        id: 'subscription',
        name: 'Abonament',
        desc: 'Stały pakiet godzin miesięcznie. Elastyczny zakres, priorytetowy czas reakcji, pełna ciągłość obsługi prawnej.',
        icon: '/images/icon-subscription.svg',
        highlighted: true,
        badge: 'Rekomendowany',
      },
      {
        id: 'fgc',
        name: 'Fractional GC',
        desc: 'Pełna rola zewnętrznego General Counsel. Zarządzanie ryzykiem, governance, udział w\u00a0board meetings, nadzór nad compliance.',
        icon: '/images/icon-fractional-gc.svg',
        highlighted: false,
      }
    ],
    en: [
      {
        id: 'consultation',
        name: 'Consultation',
        desc: 'One-off advice or legal audit. Ideal when you need a quick answer to a specific regulatory question.',
        icon: '/images/icon-consultation.svg',
        highlighted: false,
      },
      {
        id: 'subscription',
        name: 'Subscription',
        desc: 'Fixed monthly hours package. Flexible scope, priority response, full continuity of legal support.',
        icon: '/images/icon-subscription.svg',
        highlighted: true,
        badge: 'Recommended',
      },
      {
        id: 'fgc',
        name: 'Fractional GC',
        desc: 'Full external General Counsel role. Risk management, governance, board meetings, compliance oversight.',
        icon: '/images/icon-fractional-gc.svg',
        highlighted: false,
      }
    ]
  },


  // ── Modele wyceny sporów (same nazwy, bez kwot) ──
  disputeModels: {
    pl: [
      { name: 'Stawka godzinowa z limitem', desc: 'Rozliczenie godzinowe z ustalonym cap miesięcznym.' },
      { name: 'Ryczałt za etap', desc: 'Ustalana indywidualnie kwota za każdy etap postępowania.' },
      { name: 'Success fee', desc: 'Niższa stawka bazowa + procent od wygranej. Dotyczy spraw cywilnych.' },
    ],
    en: [
      { name: 'Hourly rate with cap', desc: 'Time-based billing with an agreed monthly ceiling.' },
      { name: 'Flat fee per stage', desc: 'Individually agreed amount for each stage of proceedings.' },
      { name: 'Success fee', desc: 'Lower base rate plus a percentage of recovered amount. Civil cases only.' },
    ]
  },


  // ── Artykuły ──
  // Nowe wpisy na początku. Kategorie: fintech-regulacje, prawo-gospodarcze, spory-gospodarcze
  articles: [
    {
      slug: 'drugie-weto-polska-implementacja-mica',
      title: 'Drugie weto \u2014 Polska wciąż bez implementacji MiCA',
      excerpt: 'Prezydent Nawrocki po raz drugi zawetował ustawę o\u00a0rynku kryptoaktywów. Okres przejściowy MiCA kończy się 1\u00a0lipca 2026\u00a0r.',
      date: '2026-02-15',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: true,
      lang: 'pl',
      url: '/blog/drugie-weto-polska-implementacja-mica/'
    },
    {
      slug: 'umowa-saas-b2b-kluczowe-klauzule',
      title: 'Umowa SaaS B2B \u2014 kluczowe klauzule do negocjacji',
      excerpt: 'SLA, limity odpowiedzialności, DPA, przenoszenie danych \u2014 przewodnik po klauzulach umowy SaaS B2B.',
      date: '2026-02-03',
      tag: 'Prawo tech',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-saas-b2b-kluczowe-klauzule/'
    },
    {
      slug: 'platnosci-transgraniczne-regulacje-polskie-fintechy',
      title: 'Płatności transgraniczne \u2014 regulacje dla polskich fintechów',
      excerpt: 'Od PSD2 do PSD3/PSR \u2014 jak zmieniający się krajobraz regulacyjny wpływa na polskie fintechy.',
      date: '2026-01-20',
      tag: 'Fintech',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/platnosci-transgraniczne-regulacje-polskie-fintechy/'
    },
    {
      slug: 'fractional-gc-vs-kancelaria-porownanie-kosztow',
      title: 'Fractional GC vs. kancelaria \u2014 porównanie kosztów',
      excerpt: 'Trzy modele obsługi prawnej startupu: ad hoc, Fractional GC i\u00a0in-house. Porównanie na każdym etapie rozwoju.',
      date: '2026-01-05',
      tag: 'Startup',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/fractional-gc-vs-kancelaria-porownanie-kosztow/'
    },
    {
      slug: 'dsa-pierwsza-kara-x-twitter-120-milionow',
      title: 'Pierwsza duża kara DSA \u2014 \u20ac120 mln dla X (Twitter)',
      excerpt: 'Komisja Europejska nałożyła na X pierwszą poważną karę na podstawie DSA. Analiza trzech naruszeń.',
      date: '2025-12-18',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/dsa-pierwsza-kara-x-twitter-120-milionow/'
    },
    {
      slug: 'polska-weto-mica-wplyw-rynek-krypto',
      title: 'Weto MiCA w Polsce \u2014 wpływ na rynek kryptoaktywów',
      excerpt: 'Prezydent zawetował ustawę o\u00a0kryptoaktywach. Konsekwencje dla polskich CASP i\u00a0opcje strategiczne.',
      date: '2025-12-08',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/polska-weto-mica-wplyw-rynek-krypto/'
    },
    {
      slug: 'audyt-gdpr-startup-przed-seria-a',
      title: 'Audyt GDPR startupu przed Seri\u0105 A',
      excerpt: 'Jak przygotowa\u0107 startup do audytu GDPR przed rund\u0105 inwestycyjn\u0105. Praktyczny przewodnik.',
      date: '2025-11-25',
      tag: 'GDPR',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/audyt-gdpr-startup-przed-seria-a/'
    },
    {
      slug: 'digital-omnibus-uproszczenie-ai-gdpr',
      title: 'Digital Omnibus \u2014 uproszczenie AI i\u00a0GDPR',
      excerpt: 'Propozycja Digital Omnibus w\u00a0kontek\u015bcie uproszczenia regulacji AI i\u00a0GDPR dla firm technologicznych.',
      date: '2025-11-15',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/digital-omnibus-uproszczenie-ai-gdpr/'
    },
    {
      slug: 'dsa-raportowanie-przejrzystosci-nowe-zasady-2025',
      title: 'DSA \u2014 raportowanie przejrzysto\u015bci, nowe zasady 2025',
      excerpt: 'Nowe obowi\u0105zki raportowania przejrzysto\u015bci w\u00a0ramach DSA. Co musz\u0105 wiedzie\u0107 platformy cyfrowe.',
      date: '2025-11-05',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/dsa-raportowanie-przejrzystosci-nowe-zasady-2025/'
    },
    {
      slug: 'esop-polska-spolka-praktyczny-przewodnik',
      title: 'ESOP w\u00a0polskiej sp\u00f3\u0142ce \u2014 praktyczny przewodnik',
      excerpt: 'Jak wdro\u017cy\u0107 program opcji mened\u017cerskich (ESOP) w\u00a0polskiej sp\u00f3\u0142ce z\u00a0o.o. i\u00a0S.A.',
      date: '2025-10-28',
      tag: 'Startup',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/esop-polska-spolka-praktyczny-przewodnik/'
    },
    {
      slug: 'eu-ai-act-gpai-obowiazki-sierpien-2025',
      title: 'EU AI Act \u2014 obowi\u0105zki GPAI od sierpnia 2025',
      excerpt: 'Obowi\u0105zki dostawc\u00f3w modeli AI og\u00f3lnego przeznaczenia (GPAI) wchodz\u0105ce w\u00a0\u017cycie w\u00a0sierpniu 2025.',
      date: '2025-10-18',
      tag: 'Regulacje',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/eu-ai-act-gpai-obowiazki-sierpien-2025/'
    },
    {
      slug: 'fractional-gc-startup-dyrektor-prawny',
      title: 'Fractional GC \u2014 dyrektor prawny dla startupu',
      excerpt: 'Czym jest Fractional General Counsel i\u00a0dlaczego startupy wybieraj\u0105 ten model obs\u0142ugi prawnej.',
      date: '2025-10-08',
      tag: 'Startup',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/fractional-gc-startup-dyrektor-prawny/'
    },
    {
      slug: 'gdpr-transfery-danych-panstwa-trzecie-schrems',
      title: 'GDPR \u2014 transfery danych do pa\u0144stw trzecich po Schrems\u00a0II',
      excerpt: 'Jak legalnie transferowa\u0107 dane osobowe poza EOG po wyroku Schrems\u00a0II.',
      date: '2025-09-28',
      tag: 'GDPR',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/gdpr-transfery-danych-panstwa-trzecie-schrems/'
    },
    {
      slug: 'mica-2025-co-musi-wiedziec-kazdy-fintech',
      title: 'MiCA 2025 \u2014 co musi wiedzie\u0107 ka\u017cdy fintech',
      excerpt: 'Kluczowe obowi\u0105zki wynikaj\u0105ce z\u00a0rozporz\u0105dzenia MiCA dla firm z\u00a0bran\u017cy kryptoaktyw\u00f3w i\u00a0p\u0142atno\u015bci.',
      date: '2025-09-18',
      tag: 'Fintech',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/mica-2025-co-musi-wiedziec-kazdy-fintech/'
    },
    {
      slug: 'mica-okres-przejsciowy-przygotowanie-casp',
      title: 'Okres przej\u015bciowy MiCA \u2014 przygotowanie CASP',
      excerpt: 'Jak CASP powinny przygotowa\u0107 si\u0119 do ko\u0144ca okresu przej\u015bciowego MiCA w\u00a0lipcu 2026.',
      date: '2025-09-08',
      tag: 'Fintech',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/mica-okres-przejsciowy-przygotowanie-casp/'
    },
    {
      slug: 'psd3-psr-rewolucja-europejskie-platnosci',
      title: 'PSD3/PSR \u2014 rewolucja w\u00a0europejskich p\u0142atno\u015bciach',
      excerpt: 'Przegl\u0105d propozycji PSD3 i\u00a0PSR \u2014 co zmieni si\u0119 w\u00a0regulacji p\u0142atno\u015bci w\u00a0Europie.',
      date: '2025-08-28',
      tag: 'Fintech',
      pillar: 'tech-fintech',
      category: 'fintech-regulacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/psd3-psr-rewolucja-europejskie-platnosci/'
    },
  ],


  // ── Statystyki ──
  stats: {
    pl: [
      { num: '13+', label: 'lat doświadczenia' },
      { num: '6+', label: 'jurysdykcji' },
      { num: '100+', label: 'zrealizowanych projektów' },
      { num: '50+', label: 'obsłużonych klientów' },
    ],
    en: [
      { num: '13+', label: 'years of experience' },
      { num: '6+', label: 'jurisdictions' },
      { num: '100+', label: 'completed projects' },
      { num: '50+', label: 'clients served' },
    ]
  },


  // ── Zasięg geograficzny (przy tech/fintech) ──
  jurisdictions: {
    pl: {
      inline: 'Europejski Obszar Gospodarczy \u00b7 ZEA \u00b7 Hongkong',
      subtitle: 'Z siecią lokalnych partnerów zapewniających pełne pokrycie regulacyjne.',
      tags: ['Polska', 'Unia Europejska / EOG', 'Hongkong', 'ZEA', 'Cypr', 'Niemcy', 'Francja', 'Bałkany'],
    },
    en: {
      inline: 'European Economic Area \u00b7 UAE \u00b7 Hong Kong',
      subtitle: 'With a network of local partners ensuring full regulatory coverage.',
      tags: ['Poland', 'European Union / EEA', 'Hong Kong', 'UAE', 'Cyprus', 'Germany', 'France', 'Balkans'],
    }
  },


  // ── Etapy współpracy ──
  process: {
    pl: [
      { num: '01', title: 'Bezpłatna rozmowa wstępna', desc: '20-minutowa rozmowa, podczas której poznaję Twój biznes, identyfikuję kluczowe ryzyka i\u00a0proponuję zakres współpracy.' },
      { num: '02', title: 'Audyt i roadmapa', desc: 'Przegląd stanu prawnego firmy i przygotowanie priorytetyzowanej mapy działań \u2014 od quick wins po długoterminowy compliance.' },
      { num: '03', title: 'Wdrożenie i bieżąca obsługa', desc: 'Realizacja uzgodnionych działań w wybranym modelu współpracy. Regularne raporty, szybki czas reakcji, pełna dyspozycyjność.' },
    ],
    en: [
      { num: '01', title: 'Free initial call', desc: '20-minute call where I learn about your business, identify key risks and propose scope of cooperation.' },
      { num: '02', title: 'Audit & roadmap', desc: 'Legal status review and preparation of a prioritised action plan \u2014 from quick wins to long-term compliance.' },
      { num: '03', title: 'Implementation & ongoing support', desc: 'Delivery within your chosen cooperation model. Regular reports, fast response, full availability.' },
    ]
  },


  // ── Helpers ──

  getArticlesByPillar: function(pillarId, lang, max) {
    lang = lang || 'pl'; max = max || 3;
    return this.articles
      .filter(function(a) { return a.pillar === pillarId && (a.lang === lang || a.lang === 'both'); })
      .slice(0, max);
  },

  getArticlesByCategory: function(category, lang, max) {
    lang = lang || 'pl'; max = max || 6;
    return this.articles
      .filter(function(a) { return a.category === category && (a.lang === lang || a.lang === 'both'); })
      .slice(0, max);
  },

  getAllArticles: function(lang, max) {
    lang = lang || 'pl'; max = max || 100;
    return this.articles
      .filter(function(a) { return a.lang === lang || a.lang === 'both'; })
      .slice(0, max);
  },

  getPillar: function(pillarId, lang) {
    lang = lang || 'pl';
    var list = this.pillars[lang] || this.pillars.pl;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === pillarId) return list[i];
    }
    return null;
  },

  getLang: function() {
    return window.location.pathname.indexOf('/en') === 0 ? 'en' : 'pl';
  }
};

var SITE_CONFIG = SITE;
