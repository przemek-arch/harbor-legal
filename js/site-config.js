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
        { label: 'Wycena', href: '/wycena/' },
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
        desc: 'Przeprowadzam firmy technologiczne przez regulacje — od licencjonowania instytucji płatniczych, przez compliance MiCA i\u00a0AI Act, po rundy VC i\u00a0transakcje M&A. Pracuję z\u00a0fintechami, SaaS i\u00a0platformami marketplace w\u00a0EOG, ZEA i\u00a0Hongkongu.',
        tags: 'MiCA \u00b7 PSD2/3 \u00b7 AML \u00b7 GDPR \u00b7 AI Act \u00b7 ESOP \u00b7 M&A',
        geo: 'EOG \u00b7 ZEA \u00b7 Hongkong',
        href: '/uslugi/technologie-fintech/',
        blogCategory: 'fintech-regulacje',
        highlights: ['Licencje KNF i\u00a0rejestracja VASP', 'Rundy VC i\u00a0umowy inwestycyjne', 'Wdrożenia GDPR i\u00a0DPO as a\u00a0Service', 'Compliance AI Act, DSA/DMA', 'Obsługa transgraniczna w\u00a09+ jurysdykcjach'],
      },
      {
        id: 'obsluga-firm',
        title: 'Obsługa prawna firm',
        subtitle: 'Bieżące wsparcie prawne dla MŚP i\u00a0spółek',
        desc: 'Jeden prawnik zamiast trzech kancelarii. Obsługuję firmy od codziennych umów, przez prawo pracy i\u00a0korporacyjne, po compliance i\u00a0windykację — na abonament lub jednorazowo, z\u00a0priorytetowym czasem reakcji.',
        tags: 'Umowy \u00b7 Prawo pracy \u00b7 KRS \u00b7 Compliance \u00b7 Windykacja',
        href: '/uslugi/obsluga-prawna-firm/',
        blogCategory: 'prawo-gospodarcze',
        highlights: ['Umowy handlowe, NDA, regulaminy', 'Prawo pracy i\u00a0kontrakty B2B', 'Obsługa KRS i\u00a0corporate governance', 'Wdrożenia AML i\u00a0procedury compliance', 'Windykacja przedsądowa i\u00a0sądowa'],
      },
      {
        id: 'spory',
        title: 'Spory & Postępowania',
        subtitle: 'Reprezentacja w\u00a0sporach cywilnych, gospodarczych i\u00a0regulacyjnych',
        desc: 'Strategia procesowa nastawiona na wynik. Reprezentuję klientów w\u00a0sporach gospodarczych przed sądami powszechnymi, w\u00a0arbitrażu (SA KIG, ICC) oraz w\u00a0postępowaniach przed KNF, UOKiK i\u00a0UODO.',
        tags: 'Spory gospodarcze \u00b7 Arbitraż \u00b7 KNF \u00b7 UOKiK',
        href: '/uslugi/spory-i-postepowania/',
        blogCategory: 'spory-gospodarcze',
        highlights: ['Spory kontraktowe i\u00a0odszkodowawcze', 'Arbitraż krajowy i\u00a0międzynarodowy', 'Postępowania przed KNF, UOKiK, UODO', 'Zabezpieczenie roszczeń', 'Mediacje gospodarcze'],
      },
    ],
    en: [
      {
        id: 'tech-fintech',
        title: 'Technology & Fintech',
        subtitle: 'Legal services for tech companies, fintechs and startups',
        desc: 'I guide technology companies through regulations — from payment institution licensing, through MiCA and AI Act compliance, to VC rounds and M&A transactions.',
        tags: 'MiCA \u00b7 PSD2/3 \u00b7 AML \u00b7 GDPR \u00b7 AI Act \u00b7 ESOP \u00b7 M&A',
        geo: 'EEA \u00b7 UAE \u00b7 Hong Kong',
        href: '/en/services/technology-fintech/',
        blogCategory: 'fintech-regulacje',
        highlights: ['KNF licences & VASP registration', 'VC rounds & investment agreements', 'GDPR implementation & DPO as a Service', 'AI Act, DSA/DMA compliance', 'Cross-border operations in 9+ jurisdictions'],
      },
      {
        id: 'obsluga-firm',
        title: 'Business Legal Services',
        subtitle: 'Ongoing legal support for SMEs and corporations',
        desc: 'One lawyer instead of three firms. I handle everything from daily contracts, employment and corporate law, to compliance and debt recovery.',
        tags: 'Contracts \u00b7 Employment \u00b7 Corporate \u00b7 Compliance \u00b7 Debt Recovery',
        href: '/en/services/business-legal-services/',
        blogCategory: 'prawo-gospodarcze',
        highlights: ['Commercial contracts, NDAs, T&Cs', 'Employment law & B2B contracts', 'Corporate governance & KRS filings', 'AML implementation & compliance procedures', 'Pre-litigation & court debt recovery'],
      },
      {
        id: 'spory',
        title: 'Disputes & Litigation',
        subtitle: 'Representation in civil, commercial and regulatory proceedings',
        desc: 'Litigation strategy focused on results. I represent clients in commercial disputes, arbitration (SA KIG, ICC) and regulatory proceedings before KNF, UOKiK and UODO.',
        tags: 'Commercial Disputes \u00b7 Arbitration \u00b7 Regulatory',
        href: '/en/services/disputes-litigation/',
        blogCategory: 'spory-gospodarcze',
        highlights: ['Contractual & damages disputes', 'Domestic & international arbitration', 'Proceedings before KNF, UOKiK, UODO', 'Interim measures & injunctions', 'Commercial mediation'],
      },
    ]
  },


  // ── Specjalizacje (karty na landing pages) ──
  services: {
    pl: {
      'tech-fintech': [
        { num: '01', anchor: 'fintech', name: 'Fintech & Płatności', desc: 'Licencjonowanie instytucji płatniczych i\u00a0EMI, budowanie systemów zgodnych z\u00a0PSD2/PSD3, wdrażanie procedur AML/KYC, rejestracja VASP i\u00a0compliance MiCA. Przeprowadzam fintechy przez cały proces regulacyjny — od wniosku do KNF po bieżący nadzór.', tags: 'PSD2/3 \u00b7 AML/KYC \u00b7 KNF \u00b7 MiCA \u00b7 EMI', details: ['Przygotowanie i\u00a0złożenie wniosków o\u00a0licencję KIP/MIP do KNF', 'Wdrożenie procedur AML/KYC zgodnych z\u00a0ustawą o\u00a0przeciwdziałaniu praniu pieniędzy', 'Rejestracja VASP i\u00a0compliance z\u00a0rozporządzeniem MiCA', 'Audyt i\u00a0dostosowanie systemów płatniczych do PSD2/PSD3', 'Bieżący nadzór regulacyjny i\u00a0raportowanie do organów'] },
        { num: '02', anchor: 'startup', name: 'Startup & Scale-up', desc: 'Obsługa prawna od incorporacji przez rundy finansowania VC po exit. Przygotowuję umowy inwestycyjne (SHA, term sheet), programy ESOP i\u00a0struktury corporate governance, które skalują się razem z\u00a0firmą.', tags: 'SHA \u00b7 ESOP \u00b7 VC \u00b7 M&A \u00b7 Cap Table', details: ['Umowy inwestycyjne: SHA, term sheet, convertible notes', 'Projektowanie i\u00a0wdrażanie programów ESOP/VSOP', 'Strukturyzacja cap table i\u00a0corporate governance', 'Obsługa rund finansowania od pre-seed po Series B+', 'Przygotowanie prawne do exit (trade sale, IPO)'] },
        { num: '03', anchor: 'gdpr', name: 'Ochrona danych', desc: 'Kompleksowe wdrożenia GDPR: polityki prywatności, umowy powierzenia, DPIA, procedury naruszeń danych, szkolenia zespołów. Oferuję też DPO as a\u00a0Service — pełnię funkcję inspektora ochrony danych bez obciążania Twojego budżetu etatem.', tags: 'GDPR \u00b7 DPIA \u00b7 DPO \u00b7 Cookie Policy \u00b7 Szkolenia', details: ['Pełne wdrożenie GDPR: dokumentacja, procedury, szkolenia', 'DPIA dla systemów wysokiego ryzyka (AI, profilowanie, biometria)', 'DPO as a\u00a0Service — zewnętrzny inspektor ochrony danych', 'Umowy powierzenia przetwarzania i\u00a0transfery do państw trzecich', 'Obsługa naruszeń danych i\u00a0zgłoszenia do UODO'] },
        { num: '04', anchor: 'ma', name: 'Transakcje M&A', desc: 'Due diligence prawne, strukturyzacja transakcji, negocjacje SPA/APA, reorganizacje korporacyjne i\u00a0post-merger integration. Prowadzę transakcje od first look po closing — z\u00a0dbałością o\u00a0detale, które chronią Twoje interesy.', tags: 'SPA \u00b7 APA \u00b7 Due Diligence \u00b7 Closing \u00b7 PMI', details: ['Due diligence prawne: korporacyjne, regulacyjne, IP, umowy', 'Negocjacje i\u00a0przygotowanie SPA/APA/merger agreements', 'Strukturyzacja transakcji i\u00a0optymalizacja prawna', 'Reorganizacje korporacyjne: podziały, łączenia, przekształcenia', 'Koordynacja post-merger integration od strony prawnej'] },
        { num: '05', anchor: 'regulacje', name: 'Regulacje Tech', desc: 'Compliance z\u00a0AI Act, DSA/DMA, regulacje platform marketplace i\u00a0e-commerce, umowy SaaS i\u00a0licencje software. Pomagam firmom technologicznym działać zgodnie z\u00a0regulacjami, zanim te staną się problemem.', tags: 'AI Act \u00b7 DSA \u00b7 DMA \u00b7 SaaS \u00b7 E-commerce', details: ['Ocena ryzyka i\u00a0klasyfikacja systemów AI wg AI Act', 'Compliance DSA: moderacja treści, raportowanie, transparentność', 'Compliance DMA: obowiązki gatekeeperów i\u00a0platform', 'Umowy SaaS, licencje software, regulaminy platform', 'Regulacje e-commerce: prawo konsumenckie, omnibus, cookie policy'] },
        { num: '06', anchor: 'crossborder', name: 'Cross-Border', desc: 'Obsługa transgraniczna w\u00a0EOG, ZEA i\u00a0Hongkongu. Kontrakty międzynarodowe, structuring, wybór jurysdykcji i\u00a0koordynacja z\u00a0siecią lokalnych kancelarii partnerskich — jeden punkt kontaktowy dla operacji w\u00a0wielu krajach.', tags: 'EOG \u00b7 ZEA \u00b7 Hongkong \u00b7 Structuring', details: ['Kontrakty międzynarodowe: wybór prawa, jurysdykcji, arbitrażu', 'Structuring operacji transgranicznych w\u00a0EOG, ZEA i\u00a0Hongkongu', 'Koordynacja z\u00a0lokalnymi kancelariami w\u00a09+ jurysdykcjach', 'Passporting licencji finansowych w\u00a0ramach EOG', 'Compliance z\u00a0lokalnymi regulacjami i\u00a0sankcjami'] },
      ],
      'obsluga-firm': [
        { num: '01', anchor: 'umowy', name: 'Umowy handlowe', desc: 'Przygotowuję, negocjuję i\u00a0weryfikuję umowy handlowe, ramowe, dystrybucyjne, NDA i\u00a0SLA. Tworzę wzorce umowne i\u00a0regulaminy dopasowane do Twojego modelu biznesowego — tak, żebyś nie musiał za każdym razem zaczynać od zera.', tags: 'Drafting \u00b7 Negocjacje \u00b7 NDA \u00b7 Regulaminy \u00b7 OWH', details: ['Drafting i\u00a0negocjacje umów handlowych i\u00a0ramowych', 'Umowy NDA, SLA, OWH, regulaminy świadczenia usług', 'Tworzenie biblioteki wzorców umownych dla firmy', 'Weryfikacja umów kontrahentów i\u00a0analiza ryzyk', 'Umowy dystrybucyjne, agencyjne i\u00a0franczyzowe'] },
        { num: '02', anchor: 'praca', name: 'Prawo pracy', desc: 'Kompleksowa obsługa kadrowo-prawna: umowy o\u00a0pracę, kontrakty B2B, regulaminy pracy i\u00a0wynagradzania, zwolnienia indywidualne i\u00a0grupowe. Doradzam też w\u00a0sporach pracowniczych i\u00a0przed PIP, zanim eskalują do sądu.', tags: 'KP \u00b7 B2B \u00b7 Regulaminy \u00b7 Zwolnienia \u00b7 PIP', details: ['Umowy o\u00a0pracę, kontrakty B2B, zakazy konkurencji', 'Regulaminy pracy, wynagradzania i\u00a0pracy zdalnej', 'Procedury zwolnień indywidualnych i\u00a0grupowych', 'Reprezentacja w\u00a0sporach pracowniczych i\u00a0przed PIP', 'Programy motywacyjne i\u00a0polityki HR'] },
        { num: '03', anchor: 'korporacyjne', name: 'Prawo korporacyjne', desc: 'Bieżąca obsługa KRS, przygotowanie zgromadzeń wspólników i\u00a0uchwał, zmiany umowy spółki, podwyższenia kapitału, przekształcenia. Pilnuję formalności, żebyś Ty mógł skupić się na biznesie.', tags: 'KRS \u00b7 Uchwały \u00b7 Kapitał \u00b7 Governance \u00b7 Przekształcenia', details: ['Obsługa KRS: wpisy, zmiany, aktualizacje', 'Zgromadzenia wspólników, uchwały, protokoły', 'Podwyższenia kapitału i\u00a0emisje udziałów/akcji', 'Przekształcenia, podziały i\u00a0łączenia spółek', 'Umowy wspólników i\u00a0corporate governance'] },
        { num: '04', anchor: 'compliance', name: 'Compliance', desc: 'Wdrożenia AML/CFT, procedury whistleblowing, polityki antykorupcyjne, audyty zgodności i\u00a0szkolenia zespołów. Buduję systemy compliance, które działają w\u00a0praktyce — nie tylko na papierze.', tags: 'AML \u00b7 Whistleblowing \u00b7 Audyt \u00b7 Szkolenia', details: ['Wdrożenie procedur AML/CFT i\u00a0KYC', 'System whistleblowing zgodny z\u00a0dyrektywą UE', 'Polityki antykorupcyjne i\u00a0kodeksy etyki', 'Audyty zgodności i\u00a0gap analysis', 'Szkolenia compliance dla zarządów i\u00a0zespołów'] },
        { num: '05', anchor: 'windykacja', name: 'Windykacja', desc: 'Windykacja przedsądowa i\u00a0sądowa, wezwania do zapłaty, zabezpieczenie roszczeń, postępowania nakazowe i\u00a0egzekucyjne. Odzyskuję należności skutecznie, minimalizując koszty i\u00a0czas.', tags: 'Przedsądowa \u00b7 Nakazowe \u00b7 Egzekucja \u00b7 Zabezpieczenie', details: ['Wezwania do zapłaty i\u00a0windykacja przedsądowa', 'Postępowania nakazowe, upominawcze i\u00a0EPU', 'Zabezpieczenie roszczeń przed i\u00a0w\u00a0trakcie procesu', 'Postępowania egzekucyjne i\u00a0koordynacja z\u00a0komornikiem', 'Monitoring należności i\u00a0strategia windykacyjna'] },
      ],
      'spory': [
        { num: '01', anchor: 'spory-gosp', name: 'Spory gospodarcze', desc: 'Reprezentuję klientów w\u00a0sporach kontraktowych, o\u00a0zapłatę, odszkodowawczych i\u00a0korporacyjnych przed sądami powszechnymi wszystkich instancji. Buduję strategię procesową nastawioną na wynik — nie na mnożenie pism.', tags: 'Kontraktowe \u00b7 Odszkodowania \u00b7 Korporacyjne \u00b7 Apelacja', details: ['Spory kontraktowe: niewykonanie umów, kary umowne, odstąpienia', 'Spory o\u00a0zapłatę i\u00a0roszczenia odszkodowawcze', 'Spory korporacyjne: zaskarżanie uchwał, odpowiedzialność zarządu', 'Postępowania apelacyjne i\u00a0kasacyjne', 'Negocjacje ugodowe na każdym etapie postępowania'] },
        { num: '02', anchor: 'arbitraz', name: 'Arbitraż & mediacje', desc: 'Prowadzę postępowania arbitrażowe krajowe (SA KIG, Lewiatan) i\u00a0międzynarodowe oraz mediacje gospodarcze. Arbitraż to często szybsza i\u00a0bardziej poufna alternatywa dla sądu — doradzam, kiedy warto z\u00a0niej skorzystać.', tags: 'SA KIG \u00b7 Lewiatan \u00b7 ICC \u00b7 Mediacja \u00b7 ADR', details: ['Arbitraż krajowy: SA KIG, Sąd Arbitrażowy Lewiatan', 'Arbitraż międzynarodowy: ICC, LCIA, ad hoc', 'Mediacje gospodarcze i\u00a0koncyliacja', 'Drafting klauzul arbitrażowych w\u00a0umowach', 'Postępowania o\u00a0uznanie i\u00a0wykonanie wyroków arbitrażowych'] },
        { num: '03', anchor: 'regulacyjne', name: 'Postępowania regulacyjne', desc: 'Reprezentuję klientów przed KNF, UOKiK, UODO i\u00a0GIIF — od kontroli i\u00a0postępowań wyjaśniających po odwołania od decyzji administracyjnych. Pomagam minimalizować ryzyko sankcji i\u00a0kar finansowych.', tags: 'KNF \u00b7 UOKiK \u00b7 UODO \u00b7 GIIF \u00b7 Odwołania', details: ['Reprezentacja przed KNF: kontrole, postępowania nadzorcze', 'Postępowania przed UOKiK: praktyki naruszające konkurencję, klauzule abuzywne', 'Postępowania przed UODO: naruszenia GDPR, kontrole', 'Postępowania przed GIIF: AML/CFT, blokady rachunków', 'Odwołania od decyzji administracyjnych i\u00a0skargi do WSA/NSA'] },
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
      category: 'prawo-gospodarcze',
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
      category: 'prawo-gospodarcze',
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
      category: 'prawo-gospodarcze',
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
      category: 'prawo-gospodarcze',
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
      category: 'prawo-gospodarcze',
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
      category: 'prawo-gospodarcze',
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
    {
      slug: 'nakaz-zaplaty-postepowanie-nakazowe-sprzeciw',
      title: 'Nakaz zapłaty — jak się bronić w postępowaniu nakazowym',
      excerpt: 'Otrzymałeś nakaz zapłaty? Masz 14 dni na reakcję. Praktyczny przewodnik po środkach zaskarżenia w postępowaniu nakazowym i upominawczym.',
      date: '2025-03-10',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/nakaz-zaplaty-postepowanie-nakazowe-sprzeciw/'
    },
    {
      slug: 'payment-order-proceedings-how-to-challenge',
      title: 'Payment Order Proceedings — How to Challenge a Court Order',
      excerpt: 'Received a payment order from a Polish court? You have 14 days to respond. A practical guide to challenging court orders in summary proceedings.',
      date: '2025-03-10',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/payment-order-proceedings-how-to-challenge/'
    },
    {
      slug: 'zabezpieczenie-roszczenia-przed-procesem',
      title: 'Zabezpieczenie roszczenia — jak chronić swoje interesy przed procesem',
      excerpt: 'Postępowanie zabezpieczające pozwala chronić majątek dłużnika zanim sprawa trafi na wokandę.',
      date: '2025-04-14',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/zabezpieczenie-roszczenia-przed-procesem/'
    },
    {
      slug: 'interim-measures-securing-claims-before-trial',
      title: 'Interim Measures — How to Secure Your Claims Before Trial in Poland',
      excerpt: 'Interim relief proceedings allow you to protect the debtor',
      date: '2025-04-14',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/interim-measures-securing-claims-before-trial/'
    },
    {
      slug: 'mediacja-gospodarcza-alternatywa-dla-procesu',
      title: 'Mediacja gospodarcza — szybsza i tańsza alternatywa dla procesu',
      excerpt: 'Mediacja pozwala rozwiązać spór gospodarczy w kilka tygodni zamiast kilku lat.',
      date: '2025-05-12',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'mediacje',
      pinned: false,
      lang: 'pl',
      url: '/blog/mediacja-gospodarcza-alternatywa-dla-procesu/'
    },
    {
      slug: 'commercial-mediation-alternative-to-litigation',
      title: 'Commercial Mediation in Poland — A Faster and Cheaper Alternative to Court',
      excerpt: 'Mediation can resolve a commercial dispute in weeks instead of years.',
      date: '2025-05-12',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'mediacje',
      pinned: false,
      lang: 'en',
      url: '/en/blog/commercial-mediation-alternative-to-litigation/'
    },
    {
      slug: 'klauzule-arbitrazowe-w-umowach-b2b',
      title: 'Klauzule arbitrażowe w umowach B2B — co warto wiedzieć przed podpisaniem',
      excerpt: 'Zapis na sąd polubowny może przyspieszyć rozwiązanie sporu — ale też odebrać prawo do odwołania.',
      date: '2025-06-09',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'arbitraz',
      pinned: false,
      lang: 'pl',
      url: '/blog/klauzule-arbitrazowe-w-umowach-b2b/'
    },
    {
      slug: 'arbitration-clauses-in-b2b-contracts',
      title: 'Arbitration Clauses in B2B Contracts — What to Know Before You Sign',
      excerpt: 'An arbitration clause can speed up dispute resolution — but also limit your right of appeal.',
      date: '2025-06-09',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'arbitraz',
      pinned: false,
      lang: 'en',
      url: '/en/blog/arbitration-clauses-in-b2b-contracts/'
    },
    {
      slug: 'postepowanie-uokik-praktyki-naruszajace-konkurencje',
      title: 'Postępowanie przed UOKiK — jak się przygotować i bronić',
      excerpt: 'Otrzymałeś zawiadomienie o wszczęciu postępowania przez UOKiK? Co robić i jak zminimalizować ryzyko kary.',
      date: '2025-07-07',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/postepowanie-uokik-praktyki-naruszajace-konkurencje/'
    },
    {
      slug: 'uokik-proceedings-competition-law-violations',
      title: 'UOKiK Proceedings — How to Prepare and Defend Against Competition Authority',
      excerpt: 'Received notice of proceedings by Poland',
      date: '2025-07-07',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/uokik-proceedings-competition-law-violations/'
    },
    {
      slug: 'odpowiedzialnosc-czlonkow-zarzadu-art-299-ksh',
      title: 'Odpowiedzialność członków zarządu za długi spółki — art. 299 KSH w praktyce',
      excerpt: 'Wierzyciel nie wyegzekwował roszczenia od sp. z o.o.? Może pozwać członka zarządu osobiście.',
      date: '2025-08-11',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/odpowiedzialnosc-czlonkow-zarzadu-art-299-ksh/'
    },
    {
      slug: 'board-member-liability-article-299-ksh',
      title: 'Board Member Liability for Company Debts — Article 299 of the Polish Commercial Code',
      excerpt: 'Creditor unable to enforce against a sp. z o.o.? They can sue the board member personally.',
      date: '2025-08-11',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/board-member-liability-article-299-ksh/'
    },
    {
      slug: 'kara-umowna-miarkowanie-przez-sad',
      title: 'Kara umowna — kiedy sąd może ją obniżyć i jak się bronić',
      excerpt: 'Kary umowne to standard w umowach B2B, ale nie zawsze są egzekwowalne w pełnej wysokości.',
      date: '2025-09-22',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/kara-umowna-miarkowanie-przez-sad/'
    },
    {
      slug: 'contractual-penalties-judicial-reduction-poland',
      title: 'Contractual Penalties — When Courts Can Reduce Them and How to Defend',
      excerpt: 'Contractual penalties are standard in B2B agreements, but not always enforceable in full.',
      date: '2025-09-22',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/contractual-penalties-judicial-reduction-poland/'
    },
    {
      slug: 'egzekucja-komornicza-jak-skutecznie-odzyskac-dlug',
      title: 'Egzekucja komornicza — jak skutecznie odzyskać dług od kontrahenta',
      excerpt: 'Wygrany proces to dopiero początek. Praktyczny przewodnik po postępowaniu egzekucyjnym.',
      date: '2025-10-13',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/egzekucja-komornicza-jak-skutecznie-odzyskac-dlug/'
    },
    {
      slug: 'bailiff-enforcement-effective-debt-recovery-poland',
      title: 'Bailiff Enforcement in Poland — How to Effectively Recover Debts from Business Partners',
      excerpt: 'Winning a case is just the beginning. A practical guide to enforcement proceedings.',
      date: '2025-10-13',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/bailiff-enforcement-effective-debt-recovery-poland/'
    },
    {
      slug: 'postepowanie-uodo-kontrola-kara-pieniezna',
      title: 'Postępowanie UODO — od kontroli do kary pieniężnej i jak się odwołać',
      excerpt: 'Jak przebiega kontrola UODO, kiedy grozi kara i jakie środki obrony przysługują administratorowi danych.',
      date: '2025-11-17',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/postepowanie-uodo-kontrola-kara-pieniezna/'
    },
    {
      slug: 'uodo-proceedings-gdpr-inspection-administrative-fines',
      title: 'UODO Proceedings — From GDPR Inspection to Administrative Fine and How to Appeal',
      excerpt: 'How inspections work, when fines apply, and what defense measures are available to data controllers.',
      date: '2025-11-17',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/uodo-proceedings-gdpr-inspection-administrative-fines/'
    },
    {
      slug: 'spor-wspolnikow-sposoby-rozwiazania',
      title: 'Spór wspólników w sp. z o.o. — sposoby rozwiązania bez likwidacji spółki',
      excerpt: 'Konflikt między wspólnikami może sparaliżować spółkę. Przegląd dostępnych ścieżek.',
      date: '2025-12-01',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/spor-wspolnikow-sposoby-rozwiazania/'
    },
    {
      slug: 'shareholder-disputes-resolution-methods-poland',
      title: 'Shareholder Disputes in a Polish Sp. z o.o. — Resolution Without Liquidating the Company',
      excerpt: 'A conflict between shareholders can paralyze a company. Overview of available paths.',
      date: '2025-12-01',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/shareholder-disputes-resolution-methods-poland/'
    },
    {
      slug: 'przedawnienie-roszczen-gospodarczych-terminy',
      title: 'Przedawnienie roszczeń gospodarczych — terminy, przerwanie i zawieszenie biegu',
      excerpt: 'Upływ terminu przedawnienia może uniemożliwić dochodzenie roszczenia.',
      date: '2026-01-12',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'pl',
      url: '/blog/przedawnienie-roszczen-gospodarczych-terminy/'
    },
    {
      slug: 'statute-of-limitations-commercial-claims-poland',
      title: 'Statute of Limitations for Commercial Claims in Poland — Deadlines, Interruption, and Suspension',
      excerpt: 'Expiration of the limitation period can make a claim unenforceable.',
      date: '2026-01-12',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'spory-gospodarcze',
      pinned: false,
      lang: 'en',
      url: '/en/blog/statute-of-limitations-commercial-claims-poland/'
    },
    {
      slug: 'restrukturyzacja-firmy-zamiast-upadlosci',
      title: 'Restrukturyzacja firmy zamiast upadłości — kiedy jest jeszcze szansa',
      excerpt: 'Prawo restrukturyzacyjne daje firmom w kryzysie szansę na uniknięcie upadłości.',
      date: '2026-02-09',
      tag: 'Spory',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/restrukturyzacja-firmy-zamiast-upadlosci/'
    },
    {
      slug: 'business-restructuring-instead-of-bankruptcy-poland',
      title: 'Business Restructuring Instead of Bankruptcy — When There',
      excerpt: 'Polish restructuring law gives struggling businesses a chance to avoid bankruptcy.',
      date: '2026-02-09',
      tag: 'Disputes',
      pillar: 'spory-i-postepowania',
      category: 'postepowania-regulacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/business-restructuring-instead-of-bankruptcy-poland/'
    },
    {
      slug: 'umowa-o-zachowaniu-poufnosci-nda-praktyczny-przewodnik',
      title: 'NDA — umowa o zachowaniu poufności, na co zwrócić uwagę',
      excerpt: 'Umowa NDA to podstawowe narzędzie ochrony tajemnicy przedsiębiorstwa.',
      date: '2025-03-24',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-o-zachowaniu-poufnosci-nda-praktyczny-przewodnik/'
    },
    {
      slug: 'nda-confidentiality-agreement-practical-guide',
      title: 'NDA — Confidentiality Agreement, What to Watch Out For',
      excerpt: 'An NDA is the basic tool for protecting trade secrets.',
      date: '2025-03-24',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'en',
      url: '/en/blog/nda-confidentiality-agreement-practical-guide/'
    },
    {
      slug: 'regulamin-pracy-zdalnej-obowiazki-pracodawcy',
      title: 'Regulamin pracy zdalnej — obowiązki pracodawcy po nowelizacji Kodeksu pracy',
      excerpt: 'Od 2023 r. praca zdalna jest uregulowana w Kodeksie pracy. Jakie obowiązki ma pracodawca.',
      date: '2025-04-28',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'pl',
      url: '/blog/regulamin-pracy-zdalnej-obowiazki-pracodawcy/'
    },
    {
      slug: 'remote-work-policy-employer-obligations-poland',
      title: 'Remote Work Policy — Employer Obligations After Poland',
      excerpt: 'Since 2023, remote work is regulated in the Polish Labour Code. What obligations employers have.',
      date: '2025-04-28',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'en',
      url: '/en/blog/remote-work-policy-employer-obligations-poland/'
    },
    {
      slug: 'due-diligence-prawne-przed-przejecie-firmy',
      title: 'Due diligence prawne — co sprawdzić przed przejęciem firmy',
      excerpt: 'Prawne due diligence to fundament każdej transakcji M&A.',
      date: '2025-05-26',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/due-diligence-prawne-przed-przejecie-firmy/'
    },
    {
      slug: 'legal-due-diligence-before-company-acquisition',
      title: 'Legal Due Diligence — What to Check Before Acquiring a Company',
      excerpt: 'Legal due diligence is the foundation of every M&A transaction.',
      date: '2025-05-26',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/legal-due-diligence-before-company-acquisition/'
    },
    {
      slug: 'umowa-dystrybucyjna-kluczowe-postanowienia',
      title: 'Umowa dystrybucyjna — kluczowe postanowienia i pułapki prawne',
      excerpt: 'Umowa dystrybucyjna reguluje długoterminową relację biznesową.',
      date: '2025-06-23',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-dystrybucyjna-kluczowe-postanowienia/'
    },
    {
      slug: 'distribution-agreement-key-provisions',
      title: 'Distribution Agreement — Key Provisions and Legal Pitfalls',
      excerpt: 'A distribution agreement governs a long-term business relationship.',
      date: '2025-06-23',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'en',
      url: '/en/blog/distribution-agreement-key-provisions/'
    },
    {
      slug: 'zatrudnienie-cudzoziemca-pozwolenie-na-prace',
      title: 'Zatrudnienie cudzoziemca w Polsce — pozwolenia, oświadczenia i pułapki',
      excerpt: 'Zatrudnianie pracowników spoza UE wymaga odpowiedniego zezwolenia.',
      date: '2025-07-21',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'pl',
      url: '/blog/zatrudnienie-cudzoziemca-pozwolenie-na-prace/'
    },
    {
      slug: 'hiring-foreign-employees-work-permits-poland',
      title: 'Hiring Foreign Employees in Poland — Permits, Declarations, and Pitfalls',
      excerpt: 'Hiring employees from outside the EU requires proper authorization.',
      date: '2025-07-21',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'en',
      url: '/en/blog/hiring-foreign-employees-work-permits-poland/'
    },
    {
      slug: 'ochrona-danych-osobowych-gdpr-w-firmie',
      title: 'Ochrona danych osobowych w firmie — praktyczny przewodnik po GDPR',
      excerpt: 'GDPR obowiązuje od 2018 r., ale wiele firm wciąż nie spełnia wymogów. Co wdrożyć, by uniknąć kar.',
      date: '2025-08-18',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'pl',
      url: '/blog/ochrona-danych-osobowych-gdpr-w-firmie/'
    },
    {
      slug: 'gdpr-compliance-for-businesses-poland',
      title: 'GDPR Compliance for Businesses in Poland — A Practical Guide',
      excerpt: 'GDPR has been in force since 2018, but many companies still fall short. What to implement to avoid fines.',
      date: '2025-08-18',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'en',
      url: '/en/blog/gdpr-compliance-for-businesses-poland/'
    },
    {
      slug: 'umowa-saas-licencja-oprogramowania',
      title: 'Umowa SaaS i licencja na oprogramowanie — kluczowe klauzule',
      excerpt: 'Umowy na oprogramowanie różnią się od tradycyjnych kontraktów. Na co zwrócić uwagę negocjując SaaS lub licencję.',
      date: '2025-09-15',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-saas-licencja-oprogramowania/'
    },
    {
      slug: 'saas-agreement-software-license-key-clauses',
      title: 'SaaS Agreement and Software License — Key Clauses to Negotiate',
      excerpt: 'Software agreements differ from traditional contracts. What to watch when negotiating SaaS or license terms.',
      date: '2025-09-15',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'umowy-handlowe',
      pinned: false,
      lang: 'en',
      url: '/en/blog/saas-agreement-software-license-key-clauses/'
    },
    {
      slug: 'zakladanie-spolki-z-oo-krok-po-kroku',
      title: 'Zakładanie spółki z o.o. — krok po kroku i najczęstsze błędy',
      excerpt: 'Sp. z o.o. to najpopularniejsza forma prowadzenia biznesu w Polsce. Jak ją założyć i czego unikać.',
      date: '2025-10-20',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/zakladanie-spolki-z-oo-krok-po-kroku/'
    },
    {
      slug: 'setting-up-polish-sp-z-oo-step-by-step',
      title: 'Setting Up a Polish Sp. z o.o. — Step by Step and Common Mistakes',
      excerpt: 'The sp. z o.o. is the most popular business form in Poland. How to set one up and what to avoid.',
      date: '2025-10-20',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/setting-up-polish-sp-z-oo-step-by-step/'
    },
    {
      slug: 'umowa-o-zakazie-konkurencji-pracownik-wspolpracownik',
      title: 'Umowa o zakazie konkurencji — pracownicy i współpracownicy B2B',
      excerpt: 'Zakaz konkurencji chroni biznes, ale musi być prawidłowo skonstruowany. Różnice między pracownikami a B2B.',
      date: '2025-11-24',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-o-zakazie-konkurencji-pracownik-wspolpracownik/'
    },
    {
      slug: 'non-compete-agreement-employees-contractors-poland',
      title: 'Non-Compete Agreements for Employees and B2B Contractors in Poland',
      excerpt: 'Non-compete clauses protect business, but must be properly structured. Key differences between employees and B2B.',
      date: '2025-11-24',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'prawo-pracy',
      pinned: false,
      lang: 'en',
      url: '/en/blog/non-compete-agreement-employees-contractors-poland/'
    },
    {
      slug: 'regulamin-sklepu-internetowego-ecommerce',
      title: 'Regulamin sklepu internetowego — wymogi prawne i najczęstsze błędy',
      excerpt: 'Regulamin to obowiązkowy element każdego sklepu internetowego. Co musi zawierać i jakich klauzul unikać.',
      date: '2025-12-22',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'pl',
      url: '/blog/regulamin-sklepu-internetowego-ecommerce/'
    },
    {
      slug: 'ecommerce-terms-conditions-online-store-poland',
      title: 'E-Commerce Terms & Conditions — Legal Requirements and Common Mistakes in Poland',
      excerpt: 'Terms and conditions are mandatory for every online store. What they must contain and which clauses to avoid.',
      date: '2025-12-22',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'en',
      url: '/en/blog/ecommerce-terms-conditions-online-store-poland/'
    },
    {
      slug: 'umowa-joint-venture-wspolne-przedsiewziecie',
      title: 'Umowa joint venture — jak uregulować wspólne przedsięwzięcie',
      excerpt: 'Joint venture pozwala łączyć zasoby bez pełnej fuzji. Jak uregulować relację, by uniknąć sporów.',
      date: '2026-01-19',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'pl',
      url: '/blog/umowa-joint-venture-wspolne-przedsiewziecie/'
    },
    {
      slug: 'joint-venture-agreement-poland-key-provisions',
      title: 'Joint Venture Agreement — How to Structure a Business Partnership in Poland',
      excerpt: 'A joint venture allows combining resources without a full merger. How to structure the relationship to avoid disputes.',
      date: '2026-01-19',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'korporacyjne',
      pinned: false,
      lang: 'en',
      url: '/en/blog/joint-venture-agreement-poland-key-provisions/'
    },
    {
      slug: 'obowiazki-aml-przeciwdzialanie-praniu-pieniedzy',
      title: 'Obowiązki AML — kogo dotyczą i jak wdrożyć compliance',
      excerpt: 'Ustawa AML nakłada obowiązki na coraz szerszą grupę przedsiębiorców. Jak wdrożyć procedury i uniknąć kar.',
      date: '2026-02-16',
      tag: 'Prawo firm',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'pl',
      url: '/blog/obowiazki-aml-przeciwdzialanie-praniu-pieniedzy/'
    },
    {
      slug: 'aml-obligations-anti-money-laundering-poland',
      title: 'AML Obligations in Poland — Who They Apply To and How to Implement Compliance',
      excerpt: 'Poland\'s AML Act imposes obligations on an expanding group of businesses. How to implement procedures and avoid fines.',
      date: '2026-02-16',
      tag: 'Business Law',
      pillar: 'obsluga-prawna-firm',
      category: 'compliance',
      pinned: false,
      lang: 'en',
      url: '/en/blog/aml-obligations-anti-money-laundering-poland/'
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
      { num: '02', title: 'Audyt i plan działania', desc: 'Przegląd stanu prawnego firmy i przygotowanie priorytetyzowanej mapy działań \u2014 od quick wins po długoterminowy compliance.' },
      { num: '03', title: 'Wdrożenie i bieżąca obsługa', desc: 'Realizacja uzgodnionych działań w wybranym modelu współpracy. Bez formalnych barier \u2014 piszesz, dzwonisz, dostajesz odpowiedź.' },
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
