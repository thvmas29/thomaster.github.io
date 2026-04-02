import { useState } from 'react';
import { Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { TechWatchArticle } from './TechWatchArticle';

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

export function TechWatch() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: 'Intelligence Artificielle et ChatGPT',
      date: '15 Mars 2026',
      category: 'IA',
      summary: 'L\'évolution des modèles de langage et leur impact sur le développement logiciel. Les nouveaux outils d\'assistance au code révolutionnent les pratiques.',
      tags: ['IA', 'Développement', 'Automatisation'],
      description: 'Analyse approfondie de l\'impact de l\'intelligence artificielle générative sur les pratiques de développement logiciel.',
      content: [
        'Les modèles de langage comme ChatGPT, Claude et GitHub Copilot transforment radicalement la manière dont les développeurs écrivent du code. Ces outils d\'assistance permettent d\'accélérer le développement, de détecter des bugs et de proposer des solutions optimisées.',
        'L\'intégration de l\'IA dans les IDE (Environnements de Développement Intégré) devient la norme. Les développeurs peuvent désormais générer du code, obtenir des explications détaillées, et même refactoriser automatiquement leurs applications.',
        'Cependant, cette révolution soulève des questions importantes : dépendance aux outils IA, qualité du code généré, propriété intellectuelle, et nécessité de maintenir ses compétences fondamentales en programmation.',
        'Les entreprises qui adoptent ces technologies voient une amélioration de leur productivité, mais doivent également former leurs équipes à utiliser ces outils de manière responsable et efficace.'
      ],
      sources: [
        {
          title: 'GitHub Copilot Documentation',
          url: 'https://docs.github.com/copilot',
          date: 'Mars 2026'
        },
        {
          title: 'OpenAI - ChatGPT for Developers',
          url: 'https://openai.com/blog/chatgpt-for-developers',
          date: 'Février 2026'
        },
        {
          title: 'Stack Overflow Developer Survey 2026',
          url: 'https://stackoverflow.blog/2026/developer-survey',
          date: 'Mars 2026'
        }
      ]
    },
    {
      id: 2,
      title: 'Cybersécurité : Les nouvelles menaces 2026',
      date: '1 Mars 2026',
      category: 'Sécurité',
      summary: 'Analyse des dernières cyberattaques et des mesures de protection à mettre en place. Focus sur les ransomwares et le phishing.',
      tags: ['Sécurité', 'Cyber', 'Protection'],
      description: 'État des lieux des menaces cybersécurité en 2026 et bonnes pratiques de protection.',
      content: [
        'Les cyberattaques continuent d\'évoluer en sophistication. Les ransomwares de nouvelle génération ciblent désormais les infrastructures cloud et utilisent des techniques d\'IA pour contourner les systèmes de détection.',
        'Le phishing reste l\'une des menaces les plus efficaces. Les attaquants utilisent des techniques de social engineering de plus en plus élaborées, rendant difficile la distinction entre communications légitimes et malveillantes.',
        'Les bonnes pratiques incluent : authentification multi-facteurs (MFA), chiffrement des données sensibles, sauvegardes régulières, formation des utilisateurs, et mise à jour constante des systèmes.',
        'Les entreprises doivent adopter une approche "Zero Trust" : ne jamais faire confiance par défaut, toujours vérifier. Cette philosophie devient essentielle dans un monde où le télétravail et les accès distants sont la norme.'
      ],
      sources: [
        {
          title: 'ANSSI - Rapport Menaces 2026',
          url: 'https://www.ssi.gouv.fr/rapport-menaces-2026',
          date: 'Février 2026'
        },
        {
          title: 'CISA Cybersecurity Advisories',
          url: 'https://www.cisa.gov/cybersecurity-advisories',
          date: 'Mars 2026'
        },
        {
          title: 'OWASP Top 10 - 2026',
          url: 'https://owasp.org/top10/',
          date: 'Janvier 2026'
        }
      ]
    },
    {
      id: 3,
      title: 'Docker et Kubernetes en production',
      date: '10 Février 2026',
      category: 'DevOps',
      summary: 'Les bonnes pratiques pour déployer et gérer des applications conteneurisées en environnement de production.',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
      description: 'Guide des meilleures pratiques pour orchestrer et déployer des conteneurs en production.',
      content: [
        'La conteneurisation avec Docker et l\'orchestration avec Kubernetes sont devenus des standards dans l\'industrie. Ces technologies permettent de déployer des applications de manière cohérente, scalable et résiliente.',
        'Les bonnes pratiques incluent : images légères et sécurisées, limitation des privilèges, health checks, monitoring et logging centralisés, et stratégies de déploiement progressif (rolling updates, canary deployments).',
        'La sécurité des conteneurs est cruciale : scanner les images, utiliser des registres privés, appliquer les politiques de sécurité Kubernetes (Pod Security Standards), et isoler les workloads critiques.',
        'L\'observabilité (logs, métriques, traces) est essentielle pour maintenir des applications conteneurisées en production. Des outils comme Prometheus, Grafana et Jaeger facilitent le monitoring et le debugging.'
      ],
      sources: [
        {
          title: 'Kubernetes Best Practices',
          url: 'https://kubernetes.io/docs/concepts/configuration/overview/',
          date: 'Février 2026'
        },
        {
          title: 'Docker Security Best Practices',
          url: 'https://docs.docker.com/engine/security/',
          date: 'Janvier 2026'
        },
        {
          title: 'CNCF Cloud Native Landscape',
          url: 'https://landscape.cncf.io/',
          date: 'Mars 2026'
        }
      ]
    },
    {
      id: 4,
      title: 'React 19 : Les nouveautés',
      date: '25 Janvier 2026',
      category: 'Développement',
      summary: 'Découverte des nouvelles fonctionnalités de React 19 : Server Components, Actions et optimisations de performance.',
      tags: ['React', 'JavaScript', 'Frontend'],
      description: 'Exploration des nouvelles fonctionnalités majeures introduites dans React 19.',
      content: [
        'React 19 introduit des changements majeurs dans l\'écosystème React. Les Server Components permettent de rendre des composants côté serveur, réduisant ainsi la taille du bundle JavaScript envoyé au client.',
        'Les Actions simplifient la gestion des mutations de données et des états de chargement. Plus besoin de gérer manuellement les états "loading", "error" et "success" - React le fait automatiquement.',
        'Les améliorations de performance incluent un compilateur React optimisé qui élimine le besoin de useMemo et useCallback dans la plupart des cas. Le code devient plus simple et plus performant.',
        'La migration vers React 19 nécessite quelques ajustements, mais les gains en termes de performance et d\'expérience développeur en valent la peine. La documentation officielle propose un guide de migration détaillé.'
      ],
      sources: [
        {
          title: 'React 19 Release Notes',
          url: 'https://react.dev/blog/2026/01/react-19',
          date: 'Janvier 2026'
        },
        {
          title: 'React Server Components RFC',
          url: 'https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md',
          date: 'Décembre 2025'
        },
        {
          title: 'Vercel - Understanding React Server Components',
          url: 'https://vercel.com/blog/understanding-react-server-components',
          date: 'Janvier 2026'
        }
      ]
    },
  ];

  if (selectedArticle) {
    return (
      <TechWatchArticle
        title={selectedArticle.title}
        date={selectedArticle.date}
        category={selectedArticle.category}
        description={selectedArticle.description}
        content={selectedArticle.content}
        sources={selectedArticle.sources}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <section id="veille-tech" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Veille Technologique</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Suivi régulier des évolutions technologiques et des tendances du secteur informatique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {article.category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={16} className="mr-1" />
                  {article.date}
                </div>
              </div>
              <h3 className="mb-3">{article.title}</h3>
              <p className="text-foreground/80 mb-4">{article.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedArticle(article)}
                className="flex items-center space-x-2 text-primary hover:underline"
              >
                <span>Lire l'article complet</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-accent/50 rounded-lg border border-border">
          <div className="flex items-start">
            <TrendingUp size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="mb-2">Sources de veille</h3>
              <p className="text-foreground/80">
                Mes sources : Dev.to, GitHub Trending, Stack Overflow Blog, Medium, Twitter Tech,
                newsletters spécialisées (JavaScript Weekly, DevOps Weekly).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
