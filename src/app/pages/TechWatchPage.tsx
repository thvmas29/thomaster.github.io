import { useState } from 'react';
import { Calendar, ExternalLink, ArrowLeft, Laptop, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  tags: string[];
  description: string;
  content: string[];
  image?: string;
  sources: {
    title: string;
    url: string;
    date: string;
  }[];
}

const articles: Article[] = [
  {
    id: 1,
    title: 'L\'IA générative révolutionne le design de jeux vidéo',
    date: '15 Mars 2026',
    category: 'Graphisme',
    summary: 'Les outils d\'IA générative comme Midjourney et DALL-E transforment la création d\'assets graphiques pour les jeux vidéo, accélérant considérablement les pipelines de production.',
    tags: ['IA', 'Graphisme', 'Game Art'],
    description: 'Comment l\'intelligence artificielle générative révolutionne la création d\'assets et de textures pour les jeux vidéo.',
    image: 'https://images.unsplash.com/photo-1717501219526-5cef0a447f76?w=800&auto=format&fit=crop',
    content: [
      'Les studios de jeux vidéo adoptent massivement les outils d\'IA générative pour créer des textures, des concepts arts et des assets 3D. Des outils comme Midjourney, Stable Diffusion et DALL-E permettent de générer rapidement des variations de personnages, d\'environnements et d\'objets.',
      'L\'IA ne remplace pas les artistes, mais devient un outil puissant dans leur workflow. Les concept artists utilisent l\'IA pour explorer rapidement différentes directions artistiques, tandis que les texture artists l\'utilisent pour générer des variations de matériaux et de surfaces.',
      'Des technologies comme NVIDIA\'s Canvas et GauGAN permettent de transformer des croquis simples en paysages photoréalistes. Adobe Firefly et Photoshop intègrent désormais des fonctionnalités d\'IA pour le remplissage génératif et la modification d\'images.',
      'Cependant, des questions éthiques se posent : droits d\'auteur sur les œuvres générées, utilisation de datasets controversés, et impact sur l\'emploi dans l\'industrie créative. Les studios doivent trouver un équilibre entre innovation et responsabilité.'
    ],
    sources: [
      {
        title: 'NVIDIA - AI Tools for Game Development',
        url: 'https://www.nvidia.com/en-us/geforce/news/ai-game-development/',
        date: 'Mars 2026'
      },
      {
        title: 'Unity - AI and Machine Learning',
        url: 'https://unity.com/products/machine-learning-agents',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 2,
    title: 'Intelligence artificielle procédurale dans Unreal Engine 5',
    date: '1 Mars 2026',
    category: 'Game Dev',
    summary: 'Unreal Engine 5 intègre des outils d\'IA pour la génération procédurale de niveaux, l\'animation de personnages et le comportement des NPCs.',
    tags: ['Unreal Engine', 'IA', 'Procédural'],
    description: 'Les nouvelles fonctionnalités d\'IA dans Unreal Engine 5 qui transforment le développement de jeux.',
    image: 'https://images.unsplash.com/photo-1718011087751-e82f1792aa32?w=800&auto=format&fit=crop',
    content: [
      'Unreal Engine 5.4 introduit des outils d\'IA révolutionnaires pour la génération procédurale. Le système PCG (Procedural Content Generation) permet de créer automatiquement des environnements complexes, des villes entières et des écosystèmes naturels.',
      'Les systèmes d\'animation assistés par IA, comme Motion Matching et l\'IK (Inverse Kinematics) amélioré, permettent des animations plus réalistes et fluides. Les personnages peuvent s\'adapter dynamiquement au terrain et aux obstacles.',
      'L\'IA conversationnelle fait son entrée dans les jeux avec des NPCs capables de dialogues naturels. Des intégrations avec ChatGPT et Claude permettent des interactions plus immersives et imprévisibles avec les personnages non-joueurs.',
      'MetaHuman Creator combiné avec l\'IA permet de générer des visages photoréalistes en quelques minutes, avec des expressions faciales et des animations procédurales pilotées par machine learning.'
    ],
    sources: [
      {
        title: 'Unreal Engine 5.4 - AI Features',
        url: 'https://www.unrealengine.com/en-US/blog/ai-features',
        date: 'Février 2026'
      },
      {
        title: 'Epic Games - MetaHuman',
        url: 'https://www.unrealengine.com/en-US/metahuman',
        date: 'Mars 2026'
      }
    ]
  },
  {
    id: 3,
    title: 'DLSS 5 et Multi Frame Generation : La révolution graphique IA',
    date: '20 Avril 2026',
    category: 'Technologie',
    summary: 'NVIDIA DLSS 5 introduit la génération multi-frames avec IA transformer, multipliant les performances par 8 tout en améliorant la qualité visuelle. Path tracing en temps réel devient accessible à tous.',
    tags: ['DLSS 5', 'Ray Tracing', 'IA', 'Performance'],
    description: 'DLSS 5 révolutionne le rendu temps réel avec la génération multi-frames par IA et le path tracing accessible.',
    image: 'https://images.unsplash.com/photo-1717501218198-816a64915f81?w=800&auto=format&fit=crop',
    content: [
      'DLSS 5 (Deep Learning Super Sampling 5) marque un tournant historique avec sa technologie Multi Frame Generation basée sur des transformers. Contrairement à DLSS 4 qui générait jusqu\'à 3 frames intermédiaires, DLSS 5 peut en générer jusqu\'à 7, multipliant les performances par 8 sans perte de qualité.',
      'La nouvelle architecture utilise des modèles transformer entraînés sur des milliards de frames de jeux vidéo. L\'IA prédit non seulement le mouvement mais aussi l\'éclairage, les reflets et les ombres avec une précision quasi parfaite. Le résultat : path tracing complet en temps réel même sur des cartes RTX 5060.',
      'Ray Reconstruction 2.0 améliore drastiquement le débruitage des scènes path-tracées. Les artefacts de bruit disparaissent complètement, permettant un éclairage global photoréaliste à 60+ FPS en 4K. Les matériaux complexes (verre, eau, métaux) sont rendus avec une fidélité jamais vue en temps réel.',
      'L\'impact est massif : les développeurs peuvent enfin abandonner les techniques de rasterisation traditionnelles et adopter le full path tracing. Des jeux comme Cyberpunk 2078 et les nouvelles itérations d\'Unreal Engine 6 exploitent déjà DLSS 5 pour offrir des graphismes dignes du cinéma en temps interactif.'
    ],
    sources: [
      {
        title: 'NVIDIA - DLSS 5 Multi Frame Generation',
        url: 'https://www.nvidia.com/en-us/geforce/technologies/dlss/',
        date: 'Avril 2026'
      },
      {
        title: 'Digital Foundry - DLSS 5 Technical Deep Dive',
        url: 'https://www.eurogamer.net/digitalfoundry',
        date: 'Avril 2026'
      },
      {
        title: 'Tom\'s Hardware - DLSS 5 Benchmark Analysis',
        url: 'https://www.tomshardware.com/reviews/dlss-5-benchmark',
        date: 'Mars 2026'
      }
    ]
  },
  {
    id: 4,
    title: 'NPCs intelligents : Les agents IA dans les jeux modernes',
    date: '25 Janvier 2026',
    category: 'Game Design',
    summary: 'Les systèmes d\'IA modernes permettent de créer des NPCs avec des comportements complexes, des émotions et des dialogues naturels, rendant les mondes de jeu plus vivants.',
    tags: ['NPC', 'IA', 'Gameplay'],
    description: 'L\'évolution des NPCs grâce à l\'intelligence artificielle et au machine learning.',
    image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?w=800&auto=format&fit=crop',
    content: [
      'Les NPCs traditionnels suivaient des scripts prédéfinis et des arbres de décision simples. Aujourd\'hui, les systèmes d\'IA permettent des comportements émergents et adaptatifs. Les personnages apprennent des actions du joueur et ajustent leurs stratégies.',
      'Les Large Language Models (LLMs) permettent des dialogues naturels et contextuels. Dans certains jeux expérimentaux, les joueurs peuvent converser librement avec les NPCs qui génèrent des réponses cohérentes avec leur personnalité et l\'histoire du jeu.',
      'Les systèmes multi-agents permettent des interactions complexes entre NPCs. Des villes virtuelles prennent vie avec des habitants qui ont leurs propres routines, relations sociales et objectifs. L\'IA gère les économies, les conflits et les alliances de manière dynamique.',
      'Les défis restent nombreux : coût computationnel élevé, cohérence narrative difficile à maintenir, et risque de comportements imprévisibles. Les développeurs doivent trouver le bon équilibre entre liberté d\'action de l\'IA et contrôle narratif.'
    ],
    sources: [
      {
        title: 'GDC - AI-Driven NPCs',
        url: 'https://gdconf.com/news/ai-driven-npcs-future',
        date: 'Janvier 2026'
      },
      {
        title: 'Inworld AI - Character Engine',
        url: 'https://www.inworld.ai/',
        date: 'Décembre 2025'
      }
    ]
  },
  {
    id: 5,
    title: 'NeRF et Photogrammétrie : Capture 3D par IA',
    date: '18 Avril 2026',
    category: 'Graphisme',
    summary: 'Les Neural Radiance Fields (NeRF) révolutionnent la capture 3D en créant des modèles photoréalistes à partir de simples photos. La photogrammétrie assistée par IA atteint des niveaux de qualité inégalés.',
    tags: ['NeRF', 'Photogrammétrie', '3D', 'IA'],
    description: 'Comment les NeRF et l\'IA transforment la capture et la reconstruction 3D pour les jeux vidéo.',
    image: 'https://images.unsplash.com/photo-1687389835588-a87c4ea925ac?w=800&auto=format&fit=crop',
    content: [
      'Les Neural Radiance Fields (NeRF) représentent une percée majeure dans la reconstruction 3D. Cette technique utilise des réseaux de neurones pour créer des modèles 3D volumétriques photoréalistes à partir de simples séries de photos 2D. Les résultats surpassent largement la photogrammétrie traditionnelle.',
      'NVIDIA Instant NeRF permet de générer un modèle 3D complet en quelques secondes seulement, contre plusieurs heures avec les méthodes classiques. La qualité des textures, l\'éclairage et les reflets sont capturés avec une fidélité exceptionnelle, ouvrant de nouvelles possibilités pour la création d\'environnements réalistes.',
      'Les studios de jeux adoptent ces technologies pour scanner des lieux réels et les intégrer directement dans leurs jeux. Des outils comme Luma AI et Polycam rendent cette technologie accessible même aux petits studios. La capture d\'acteurs et d\'objets atteint un niveau de réalisme impossible à obtenir par modélisation manuelle.',
      'Les défis incluent la taille importante des datasets NeRF et la difficulté d\'éditer les modèles générés. Des recherches sont en cours pour convertir les NeRF en meshes 3D éditables et optimisés pour le rendu temps réel. Gaussian Splatting émerge comme alternative plus performante pour certains cas d\'usage.'
    ],
    sources: [
      {
        title: 'NVIDIA - Instant NeRF',
        url: 'https://www.nvidia.com/en-us/on-demand/session/gtcspring21-s31151/',
        date: 'Avril 2026'
      },
      {
        title: 'Luma AI - NeRF Capture',
        url: 'https://lumalabs.ai/',
        date: 'Mars 2026'
      },
      {
        title: 'SIGGRAPH - NeRF in Game Development',
        url: 'https://www.siggraph.org/nerf-gaming/',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 6,
    title: 'Animation par IA : Motion Capture nouvelle génération',
    date: '10 Avril 2026',
    category: 'Animation',
    summary: 'L\'IA transforme l\'animation de personnages avec des systèmes de motion capture markerless, de l\'animation procédurale avancée et la génération automatique de cycles d\'animation réalistes.',
    tags: ['Animation', 'Motion Capture', 'IA', 'Procédural'],
    description: 'Les nouvelles technologies d\'animation assistées par IA qui démocratisent le motion capture et améliorent la qualité des animations.',
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=800&auto=format&fit=crop',
    content: [
      'La motion capture sans marqueurs (markerless mocap) propulsée par IA devient la norme. Des outils comme Move.ai, DeepMotion et Plask utilisent des caméras standards pour capturer des mouvements 3D complets sans équipement spécialisé. Un simple smartphone suffit désormais pour obtenir des animations de qualité professionnelle.',
      'Les réseaux de neurones peuvent générer automatiquement des animations réalistes à partir de descriptions textuelles. "Un personnage courant en évitant des obstacles" devient une instruction directe pour créer une séquence d\'animation complète. Cette approche accélère drastiquement la production d\'assets d\'animation.',
      'Motion Matching 2.0 intègre l\'apprentissage par renforcement pour créer des transitions fluides entre animations. Les personnages s\'adaptent intelligemment au terrain, aux objets et aux situations. Les animations deviennent contextuelles et naturelles, éliminant l\'aspect robotique des systèmes traditionnels.',
      'L\'IA permet également le retargeting automatique : une animation capturée sur un acteur humain peut être transférée instantanément sur n\'importe quel rig de personnage, qu\'il soit humanoïde, animal ou créature fantastique. Les ajustements manuels fastidieux appartiennent au passé.'
    ],
    sources: [
      {
        title: 'Move.ai - AI Motion Capture',
        url: 'https://www.move.ai/',
        date: 'Avril 2026'
      },
      {
        title: 'DeepMotion - Animate 3D',
        url: 'https://www.deepmotion.com/',
        date: 'Mars 2026'
      },
      {
        title: 'Unity - AI Animation Tools',
        url: 'https://unity.com/products/animation',
        date: 'Février 2026'
      }
    ]
  },
  {
    id: 7,
    title: 'Cloud Gaming et IA : Latence zéro grâce au Machine Learning',
    date: '5 Avril 2026',
    category: 'Infrastructure',
    summary: 'Les plateformes de cloud gaming utilisent l\'IA pour prédire les actions des joueurs, compenser la latence réseau et offrir une expérience indiscernable du jeu local.',
    tags: ['Cloud Gaming', 'Streaming', 'Latence', 'IA'],
    description: 'Comment l\'intelligence artificielle permet au cloud gaming d\'atteindre des performances comparables au gaming local.',
    image: 'https://images.unsplash.com/photo-1724820205981-8321546b81c5?w=800&auto=format&fit=crop',
    content: [
      'La latence a toujours été le talon d\'Achille du cloud gaming. Les nouvelles plateformes utilisent des modèles d\'IA pour prédire les inputs du joueur avant même qu\'ils ne soient envoyés. En analysant les patterns de jeu, l\'IA anticipe les mouvements et pré-calcule les frames correspondantes, réduisant la latence perçue à quasi-zéro.',
      'NVIDIA GeForce NOW et Xbox Cloud Gaming déploient des systèmes de prédiction de trajectoire qui analysent le gameplay en temps réel. Pour les jeux compétitifs (FPS, fighting games), cette technologie compense jusqu\'à 50ms de latence réseau, rendant l\'expérience comparable au jeu local.',
      'L\'IA optimise également la compression vidéo en temps réel. Des algorithmes de machine learning identifient les zones importantes de l\'écran (réticule, HUD, personnages) et allouent dynamiquement plus de bande passante à ces zones tout en compressant agressivement les arrière-plans statiques. Le résultat : meilleure qualité visuelle avec moins de données.',
      'L\'edge computing combiné à l\'IA permet de déployer des serveurs de jeu au plus près des joueurs. Des algorithmes prédictifs analysent la charge réseau et migrent automatiquement les sessions vers les data centers optimaux. Microsoft Azure PlayFab intègre désormais ces capacités nativement pour tous les développeurs.'
    ],
    sources: [
      {
        title: 'NVIDIA - GeForce NOW AI Latency Reduction',
        url: 'https://www.nvidia.com/en-us/geforce-now/',
        date: 'Avril 2026'
      },
      {
        title: 'Microsoft - Azure PlayFab AI',
        url: 'https://playfab.com/',
        date: 'Mars 2026'
      },
      {
        title: 'Google - Stadia AI Prediction',
        url: 'https://stadia.google.com/gg/blog/ai-prediction',
        date: 'Février 2026'
      }
    ]
  },
];

export function TechWatchPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
              <span className="text-sm font-medium">Retour à la veille technologique</span>
            </button>

            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold text-sm">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={16} className="mr-2" />
                  {selectedArticle.date}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {selectedArticle.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {selectedArticle.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                >
                  #{tag}
                </span>
              ))}
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Sources</h3>
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
              <Laptop size={28} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Veille Technologique
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Suivi régulier des évolutions technologiques et des tendances du secteur informatique.
            Analyse des nouvelles technologies, outils et bonnes pratiques du développement logiciel.
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
                  <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/10 rounded-lg text-sm font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-2" />
                    {article.date}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary hover:underline font-medium">
                  <span>Lire l'article complet</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sources Section */}
        <div className="mt-12 bg-white border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Mes sources de veille</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Pour suivre l'évolution de l'IA dans le développement de jeux vidéo et les graphismes, je consulte régulièrement :
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              GDC (Game Developers Conference)
            </li>
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              NVIDIA Developer Blog
            </li>
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              Unreal Engine Blog
            </li>
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              Unity Blog - AI & ML
            </li>
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              Gamasutra / Game Developer
            </li>
            <li className="flex items-center text-foreground/80">
              <span className="text-primary mr-2">•</span>
              Digital Foundry (analyses techniques)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
