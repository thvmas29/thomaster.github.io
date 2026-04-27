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
    title: 'Ray Tracing et DLSS 4 : L\'IA au service de la performance',
    date: '10 Février 2026',
    category: 'Technologie',
    summary: 'NVIDIA DLSS 4 et AMD FSR 4 utilisent l\'IA pour générer des frames et améliorer massivement les performances graphiques tout en maintenant une qualité visuelle exceptionnelle.',
    tags: ['Ray Tracing', 'DLSS', 'Performance'],
    description: 'Comment l\'IA permet d\'obtenir des graphismes ray-tracés en temps réel sans sacrifier les performances.',
    content: [
      'DLSS 4 (Deep Learning Super Sampling) de NVIDIA représente une avancée majeure. La génération de frames par IA permet de multiplier par 4 les performances tout en maintenant une qualité d\'image supérieure à la résolution native.',
      'La technologie Ray Reconstruction utilise l\'IA pour débruiter les scènes ray-tracées en temps réel, permettant d\'obtenir un éclairage photoréaliste même sur du matériel mid-range. Les reflets, les ombres et l\'illumination globale atteignent des niveaux de qualité inédits.',
      'AMD FSR 4 (FidelityFX Super Resolution) adopte également le machine learning avec son propre tensor cores. La concurrence pousse l\'innovation et rend ces technologies accessibles à un plus large public.',
      'L\'impact sur le game design est considérable : les développeurs peuvent créer des mondes plus détaillés, avec un éclairage dynamique complexe, sans se soucier excessivement de l\'optimisation traditionnelle.'
    ],
    sources: [
      {
        title: 'NVIDIA - DLSS 4 Technology',
        url: 'https://www.nvidia.com/en-us/geforce/technologies/dlss/',
        date: 'Février 2026'
      },
      {
        title: 'Digital Foundry - DLSS 4 Analysis',
        url: 'https://www.eurogamer.net/digitalfoundry',
        date: 'Janvier 2026'
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
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
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

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="flex items-center text-primary hover:underline font-medium"
                >
                  <span>Lire l'article complet</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
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
