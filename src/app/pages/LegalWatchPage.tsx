import { useState } from 'react';
import { Scale, ExternalLink, ArrowLeft, AlertCircle, ArrowRight } from 'lucide-react';

interface LegalArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  impact: string;
  description: string;
  content: string[];
  impactDetail: string;
  image?: string;
  sources: {
    title: string;
    url: string;
    date: string;
  }[];
}

const articles: LegalArticle[] = [
  {
    id: 1,
    title: 'Droits d\'auteur des œuvres générées par IA',
    date: '20 Mars 2026',
    category: 'Propriété intellectuelle',
    summary: 'Les tribunaux et législateurs se prononcent sur la propriété des assets de jeux vidéo générés par intelligence artificielle. Qui détient les droits : le studio, l\'artiste ou l\'IA ?',
    impact: 'Critique',
    description: 'État des lieux juridique sur la propriété intellectuelle des contenus générés par IA dans l\'industrie du jeu vidéo.',
    impactDetail: 'Les studios de jeux vidéo doivent clarifier la propriété des assets générés par IA dans leurs contrats. L\'absence de cadre juridique clair peut entraîner des litiges coûteux et compromettre la commercialisation des jeux.',
    image: 'https://images.unsplash.com/photo-1654588833369-5174f4640cd2?w=800&auto=format&fit=crop',
    content: [
      'En 2026, plusieurs pays commencent à légiférer sur la propriété des œuvres générées par IA. Aux États-Unis, le Copyright Office a statué qu\'une œuvre créée entièrement par IA sans intervention humaine significative ne peut être protégée par le droit d\'auteur.',
      'L\'Union Européenne adopte une approche différente : si un artiste utilise l\'IA comme outil et apporte une contribution créative substantielle (choix artistiques, modifications, curation), l\'œuvre peut être protégée. Le degré d\'intervention humaine devient le critère clé.',
      'Pour les studios de jeux vidéo, cela signifie documenter précisément le processus créatif : prompts utilisés, modifications manuelles, sélections artistiques. Cette documentation devient essentielle pour prouver la contribution humaine en cas de litige.',
      'Les contrats avec les artistes doivent être revus pour préciser qui détient les droits sur les assets générés par IA. Les clauses de cession de droits traditionnelles peuvent ne pas couvrir ces nouveaux cas d\'usage, créant des zones grises juridiques.'
    ],
    sources: [
      {
        title: 'US Copyright Office - AI Generated Works',
        url: 'https://www.copyright.gov/ai/',
        date: 'Mars 2026'
      },
      {
        title: 'Commission Européenne - IA et propriété intellectuelle',
        url: 'https://ec.europa.eu/digital-strategy/ai-intellectual-property',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 2,
    title: 'Datasets d\'entraînement et violation du droit d\'auteur',
    date: '5 Mars 2026',
    category: 'Droit d\'auteur',
    summary: 'Des studios poursuivent des entreprises d\'IA pour utilisation non autorisée de leurs assets dans les datasets d\'entraînement. Les procès s\'accumulent.',
    impact: 'Élevé',
    description: 'Les implications juridiques de l\'utilisation d\'œuvres protégées pour entraîner des modèles d\'IA générative.',
    impactDetail: 'Les studios qui utilisent des outils d\'IA générative risquent des poursuites si les modèles ont été entraînés sur des œuvres protégées. Les amendes peuvent être considérables et affecter la commercialisation des jeux.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop',
    content: [
      'Plusieurs grands studios de jeux vidéo ont intenté des procès contre Stability AI, Midjourney et d\'autres, alléguant que leurs modèles ont été entraînés sur des millions d\'images protégées par le droit d\'auteur sans autorisation ni compensation.',
      'Les arguments juridiques sont complexes : les entreprises d\'IA invoquent le "fair use" (utilisation équitable), arguant que l\'entraînement de modèles constitue une transformation substantielle. Les plaignants rétorquent que c\'est une violation massive du copyright.',
      'Pour les développeurs de jeux, le risque est réel : si un modèle a été entraîné illégalement, les assets générés pourraient être considérés comme des œuvres dérivées illégales. Les studios doivent vérifier la provenance et la légalité des outils IA qu\'ils utilisent.',
      'Des solutions émergent : certaines entreprises proposent des modèles entraînés uniquement sur des images libres de droits ou sous licence. Adobe Firefly garantit que son modèle est entraîné sur Adobe Stock et du contenu libre, offrant une indemnisation légale aux utilisateurs.'
    ],
    sources: [
      {
        title: 'Reuters - AI Copyright Lawsuits',
        url: 'https://www.reuters.com/legal/ai-copyright-lawsuits/',
        date: 'Mars 2026'
      },
      {
        title: 'Adobe - Firefly Commercial Safety',
        url: 'https://www.adobe.com/products/firefly/commercial-safety.html',
        date: 'Janvier 2026'
      }
    ]
  },
  {
    id: 3,
    title: 'Règlement européen sur l\'IA (AI Act)',
    date: '15 Février 2026',
    category: 'Réglementation',
    summary: 'L\'AI Act entre en application progressive. Les systèmes d\'IA dans les jeux vidéo doivent respecter de nouvelles obligations de transparence et de sécurité.',
    impact: 'Élevé',
    description: 'Impact du règlement européen sur l\'intelligence artificielle sur l\'industrie du jeu vidéo.',
    impactDetail: 'Les studios européens doivent se conformer à l\'AI Act sous peine de sanctions pouvant atteindre 7% du chiffre d\'affaires mondial. Les systèmes d\'IA utilisés dans les jeux doivent être documentés et audités.',
    image: 'https://images.unsplash.com/photo-1614064850003-13dbfd69fd11?w=800&auto=format&fit=crop',
    content: [
      'L\'AI Act classe les systèmes d\'IA en quatre catégories de risque : inacceptable, élevé, limité et minimal. La plupart des IA dans les jeux vidéo sont considérées à risque limité, nécessitant des obligations de transparence.',
      'Les systèmes d\'IA générative (texte, image, audio) doivent clairement indiquer que le contenu est généré artificiellement. Les jeux utilisant des NPCs avec dialogues IA doivent en informer les joueurs.',
      'Les IA manipulant des émotions ou exploitant des vulnérabilités psychologiques (addiction, dark patterns) sont considérées à haut risque et soumises à des exigences strictes : évaluation d\'impact, documentation technique, surveillance humaine.',
      'Pour se conformer, les studios doivent : maintenir une documentation détaillée des systèmes d\'IA utilisés, implémenter des mécanismes de surveillance, et désigner un responsable de la conformité IA. Les coûts de mise en conformité sont significatifs mais incontournables.'
    ],
    sources: [
      {
        title: 'Union Européenne - AI Act',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
        date: 'Février 2026'
      },
      {
        title: 'CNIL - IA et protection des données',
        url: 'https://www.cnil.fr/fr/intelligence-artificielle',
        date: 'Mars 2026'
      }
    ]
  },
  {
    id: 4,
    title: 'Éthique et biais dans les NPCs IA',
    date: '28 Janvier 2026',
    category: 'Éthique et conformité',
    summary: 'Les régulateurs s\'inquiètent des biais discriminatoires dans les NPCs pilotés par IA. De nouvelles directives imposent des audits d\'équité.',
    impact: 'Moyen',
    description: 'Les obligations éthiques et légales concernant les biais dans les systèmes d\'IA conversationnelle des jeux vidéo.',
    impactDetail: 'Les studios doivent auditer leurs systèmes d\'IA pour détecter et corriger les biais discriminatoires. Le non-respect peut entraîner des amendes et une mauvaise publicité dommageable pour la marque.',
    image: 'https://images.unsplash.com/photo-1614064849549-ba6c7b819a49?w=800&auto=format&fit=crop',
    content: [
      'Les LLMs (Large Language Models) utilisés pour les NPCs peuvent reproduire des biais présents dans leurs données d\'entraînement : stéréotypes de genre, racisme, représentations discriminatoires. Ces biais sont inacceptables dans des produits commerciaux.',
      'Plusieurs jeux ont dû retirer ou modifier des fonctionnalités IA après que des joueurs aient découvert des dialogues inappropriés ou offensants générés par les NPCs. La réputation des studios a été affectée et des plaintes ont été déposées.',
      'Les régulateurs européens exigent désormais des audits d\'équité (fairness audits) pour les systèmes d\'IA interagissant avec le public. Les studios doivent tester leurs NPCs sur différents scénarios pour détecter les biais et implémenter des filtres.',
      'Les bonnes pratiques incluent : utiliser des datasets diversifiés et équilibrés, implémenter des modérateurs de contenu, tester avec des groupes représentatifs, et maintenir une surveillance humaine. La transparence sur les limitations de l\'IA est également recommandée.'
    ],
    sources: [
      {
        title: 'EU - Ethics Guidelines for Trustworthy AI',
        url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai',
        date: 'Janvier 2026'
      },
      {
        title: 'IEEE - AI Ethics in Gaming',
        url: 'https://standards.ieee.org/industry-connections/ai-ethics/',
        date: 'Décembre 2025'
      }
    ]
  },
  {
    id: 5,
    title: 'RGPD et protection des données de jeu : Les nouvelles exigences',
    date: '15 Avril 2026',
    category: 'Protection des données',
    summary: 'Les régulateurs européens intensifient les contrôles sur la collecte et l\'utilisation des données des joueurs. Les systèmes d\'IA qui analysent le comportement des joueurs doivent respecter le RGPD.',
    impact: 'Critique',
    description: 'Les obligations du RGPD appliquées aux données de gaming et aux systèmes d\'IA qui profilent les joueurs.',
    impactDetail: 'Les studios européens risquent des amendes pouvant atteindre 4% du chiffre d\'affaires mondial en cas de non-conformité RGPD. La collecte de données comportementales par l\'IA nécessite un consentement explicite.',
    image: 'https://images.unsplash.com/photo-1614064745490-83abb17303e1?w=800&auto=format&fit=crop',
    content: [
      'Les jeux modernes collectent des quantités massives de données : temps de jeu, préférences, interactions sociales, achats in-game, données biométriques (eye-tracking, reconnaissance faciale). Les systèmes d\'IA analysent ces données pour personnaliser l\'expérience, prédire les comportements et optimiser la monétisation.',
      'Le RGPD exige un consentement explicite pour cette collecte et ce profilage. Les joueurs doivent être clairement informés de quelles données sont collectées, pourquoi, et comment elles sont utilisées. Les studios doivent implémenter des mécanismes opt-in clairs, pas des cases pré-cochées cachées dans des CGU interminables.',
      'La CNIL française a infligé plusieurs amendes record à des éditeurs de jeux mobile pour violations du RGPD : collecte excessive de données, absence de consentement valable, transferts de données vers des pays tiers sans garanties appropriées. Les jeux freemium sont particulièrement scrutés pour leurs pratiques de tracking agressif.',
      'Les studios doivent désormais implémenter le "privacy by design" : minimisation des données collectées, pseudonymisation, chiffrement, et droit à l\'effacement. Les systèmes d\'IA doivent être auditables : les joueurs ont le droit de savoir comment l\'IA utilise leurs données et de s\'opposer aux décisions automatisées les concernant.'
    ],
    sources: [
      {
        title: 'CNIL - Gaming et RGPD',
        url: 'https://www.cnil.fr/fr/gaming-rgpd',
        date: 'Avril 2026'
      },
      {
        title: 'Commission Européenne - RGPD Guide for Gaming',
        url: 'https://ec.europa.eu/justice/data-protection/gaming',
        date: 'Mars 2026'
      },
      {
        title: 'EDPB - Guidelines on AI and GDPR',
        url: 'https://edpb.europa.eu/our-work-tools/our-documents/guidelines/ai-gdpr_en',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 6,
    title: 'Deepfakes et usurpation d\'identité dans les jeux vidéo',
    date: '8 Avril 2026',
    category: 'Droit à l\'image',
    summary: 'L\'IA générative permet de créer des personnages ultra-réalistes ressemblant à des personnes réelles sans leur consentement. Les législateurs réagissent avec de nouvelles lois anti-deepfake.',
    impact: 'Élevé',
    description: 'Les enjeux juridiques de l\'utilisation de l\'IA pour créer des personnages ressemblant à des personnes réelles dans les jeux vidéo.',
    impactDetail: 'Les studios risquent des poursuites pour atteinte au droit à l\'image et usurpation d\'identité. Les nouvelles lois anti-deepfake imposent des obligations de consentement et de watermarking.',
    image: 'https://images.unsplash.com/photo-1614064850003-13dbfd69fd11?w=800&auto=format&fit=crop',
    content: [
      'Des joueurs ont découvert que certains jeux utilisent l\'IA pour générer des NPCs dont les visages ressemblent étrangement à des célébrités ou même à des joueurs réels (via analyse de photos publiques sur les réseaux sociaux). Ces pratiques soulèvent des questions juridiques majeures sur le droit à l\'image et le consentement.',
      'En 2026, plusieurs pays adoptent des lois "anti-deepfake" spécifiquement pour encadrer l\'utilisation commerciale de sosies générés par IA. L\'utilisation de la ressemblance d\'une personne réelle sans son consentement écrit explicite devient passible de sanctions pénales, pas seulement civiles.',
      'Les acteurs et mannequins dont les visages ont été scannés pour des jeux poursuivent des studios qui réutilisent leurs likeness générés par IA dans d\'autres contextes non prévus au contrat initial. Les contrats de numérisation 3D doivent désormais préciser exactement comment et où les données peuvent être utilisées.',
      'Des technologies de watermarking et de traçabilité sont développées pour identifier les contenus générés par IA. La Coalition for Content Provenance and Authenticity (C2PA) travaille avec les studios de jeux pour implémenter des standards de certification des assets, permettant de vérifier si un visage est réel ou généré.'
    ],
    sources: [
      {
        title: 'US Congress - Deepfake Accountability Act',
        url: 'https://www.congress.gov/bill/deepfake-act',
        date: 'Avril 2026'
      },
      {
        title: 'SAG-AFTRA - AI Likeness Rights',
        url: 'https://www.sagaftra.org/ai-likeness-rights',
        date: 'Mars 2026'
      },
      {
        title: 'C2PA - Content Authenticity',
        url: 'https://c2pa.org/',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 7,
    title: 'Voice Cloning et droits des acteurs de doublage',
    date: '22 Mars 2026',
    category: 'Propriété intellectuelle',
    summary: 'L\'IA permet de cloner des voix à partir de quelques secondes d\'enregistrement. Les acteurs de doublage se mobilisent pour protéger leurs droits vocaux face à l\'IA.',
    impact: 'Critique',
    description: 'Les enjeux juridiques du clonage de voix par IA et la protection des droits des comédiens de doublage dans l\'industrie du jeu vidéo.',
    impactDetail: 'Les studios doivent obtenir un consentement explicite pour utiliser l\'IA afin de générer de nouveaux dialogues avec la voix clonée d\'un acteur. Les syndicats négocient de nouveaux accords collectifs incluant des clauses anti-IA.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop',
    content: [
      'Les technologies de voice cloning (ElevenLabs, Resemble AI, Respeecher) permettent de générer un nombre illimité de dialogues avec la voix d\'un acteur à partir d\'un enregistrement initial de quelques heures seulement. Cette révolution technologique menace directement l\'emploi des comédiens de doublage.',
      'En 2026, SAG-AFTRA (le syndicat des acteurs américains) et les syndicats européens obtiennent des avancées majeures. Les nouveaux contrats imposent que le clonage vocal nécessite un consentement explicite séparé, une rémunération supplémentaire pour chaque utilisation de l\'IA, et un droit de véto sur les textes générés.',
      'Plusieurs procès emblématiques ont établi une jurisprudence : la voix est une partie de l\'identité d\'une personne et ne peut être exploitée commercialement sans autorisation, même via IA. Un studio ayant utilisé un voice clone sans autorisation a été condamné à verser des dommages-intérêts équivalents à ce que l\'acteur aurait gagné pour enregistrer réellement les dialogues.',
      'Des solutions éthiques émergent : certains studios proposent des accords où les acteurs sont payés pour créer un modèle vocal IA utilisable pour des extensions/DLCs futurs, avec partage des revenus. D\'autres développent des voix IA synthétiques qui ne ressemblent à aucune personne réelle, évitant ainsi les problèmes de droits.'
    ],
    sources: [
      {
        title: 'SAG-AFTRA - AI Voice Cloning Agreement',
        url: 'https://www.sagaftra.org/files/ai-voice-agreement.pdf',
        date: 'Mars 2026'
      },
      {
        title: 'Equity UK - Voice Rights Protection',
        url: 'https://www.equity.org.uk/getting-involved/campaigns/voice-rights',
        date: 'Février 2026'
      },
      {
        title: 'WIPO - Voice as Intellectual Property',
        url: 'https://www.wipo.int/voice-ip-rights',
        date: 'Janvier 2026'
      }
    ]
  },
];

export function LegalWatchPage() {
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);

  const impactColors = {
    'Critique': 'bg-red-50 text-red-700 border-red-200',
    'Élevé': 'bg-orange-50 text-orange-700 border-orange-200',
    'Moyen': 'bg-blue-50 text-blue-700 border-blue-200',
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Article Header */}
        <div className="border-b border-border bg-white">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Retour à la veille juridique</span>
            </button>

            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-4 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg font-semibold text-sm">
                  {selectedArticle.category}
                </span>
                <span className={`px-4 py-1.5 border rounded-lg font-semibold text-sm ${impactColors[selectedArticle.impact as keyof typeof impactColors]}`}>
                  Impact {selectedArticle.impact}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {selectedArticle.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {selectedArticle.description}
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle size={20} className="text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Impact sur les organisations</h3>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      {selectedArticle.impactDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Image */}
        {selectedArticle.image && (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none mb-12">
            {selectedArticle.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed text-lg mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sources */}
          <div className="bg-white border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Sources officielles</h3>
            <div className="space-y-4">
              {selectedArticle.sources.map((source, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                  <ExternalLink size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium block mb-1"
                    >
                      {source.title}
                    </a>
                    <p className="text-sm text-muted-foreground">{source.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary rounded-lg">
              <Scale size={28} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Veille Juridique
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Suivi des évolutions légales et réglementaires dans le domaine du numérique et de l'informatique.
            Analyse des lois, directives et règlements impactant les pratiques professionnelles.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {article.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className={`px-3 py-1.5 border rounded-lg text-sm font-semibold ${impactColors[article.impact as keyof typeof impactColors]}`}>
                    Impact {article.impact}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">{article.date}</p>
                  <div className="flex items-center text-primary hover:underline font-medium text-sm">
                    <span>Lire l'article</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Topics Section */}
        <div className="mt-12 bg-white border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Thématiques suivies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Réglementations IA</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  AI Act (Règlement européen sur l'IA)
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Propriété intellectuelle des œuvres IA
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Éthique et biais algorithmiques
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  RGPD et données d'entraînement
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Industrie du jeu vidéo</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Droits d'auteur sur assets IA
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Datasets d'entraînement
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Contrats et licences IA
                </li>
                <li className="flex items-center text-foreground/80">
                  <span className="text-primary mr-2">•</span>
                  Transparence et conformité
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
