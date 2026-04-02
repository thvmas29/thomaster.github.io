import { useState } from 'react';
import { Scale, FileText, ExternalLink } from 'lucide-react';
import { LegalWatchArticle } from './LegalWatchArticle';

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
  sources: {
    title: string;
    url: string;
    date: string;
  }[];
}

export function LegalWatch() {
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);

  const articles: LegalArticle[] = [
    {
      id: 1,
      title: 'RGPD : Évolutions et sanctions 2026',
      date: '20 Mars 2026',
      category: 'Protection des données',
      summary: 'Les nouvelles directives de la CNIL concernant le traitement des données personnelles et les dernières sanctions prononcées.',
      impact: 'Critique',
      description: 'Analyse des nouvelles directives RGPD et des sanctions majeures prononcées par la CNIL en 2026.',
      impactDetail: 'Les entreprises qui ne respectent pas le RGPD risquent des amendes pouvant atteindre 4% de leur chiffre d\'affaires annuel mondial ou 20 millions d\'euros. La CNIL renforce ses contrôles et exige une conformité totale.',
      content: [
        'Le Règlement Général sur la Protection des Données (RGPD) continue d\'évoluer en 2026. La CNIL (Commission Nationale de l\'Informatique et des Libertés) a publié de nouvelles directives concernant le traitement des données biométriques et l\'utilisation de l\'IA.',
        'Les sanctions prononcées en 2026 montrent que les autorités sont de plus en plus strictes. Plusieurs grandes entreprises ont été condamnées à des amendes record pour non-respect des droits des utilisateurs et manquements aux obligations de sécurité.',
        'Les points clés à respecter : consentement explicite des utilisateurs, droit à l\'oubli, portabilité des données, notification des violations dans les 72 heures, désignation d\'un DPO (Data Protection Officer) pour les entreprises concernées.',
        'Les développeurs doivent intégrer la protection des données dès la conception (Privacy by Design) et par défaut (Privacy by Default). Les bonnes pratiques incluent : minimisation des données collectées, chiffrement, pseudonymisation, et documentation complète des traitements.'
      ],
      sources: [
        {
          title: 'CNIL - Règlement européen sur la protection des données',
          url: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees',
          date: 'Mars 2026'
        },
        {
          title: 'Journal Officiel de l\'Union Européenne - RGPD',
          url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679',
          date: 'Avril 2016 (mis à jour 2026)'
        },
        {
          title: 'CNIL - Sanctions et délibérations 2026',
          url: 'https://www.cnil.fr/fr/les-sanctions-prononcees-par-la-cnil',
          date: 'Mars 2026'
        }
      ]
    },
    {
      id: 2,
      title: 'Directive NIS2 : Cybersécurité',
      date: '5 Mars 2026',
      category: 'Cybersécurité',
      summary: 'La directive européenne NIS2 renforce les obligations de sécurité pour les entreprises et services essentiels.',
      impact: 'Élevé',
      description: 'Comprendre les obligations imposées par la directive NIS2 en matière de cybersécurité.',
      impactDetail: 'La directive NIS2 impose des obligations strictes aux entités essentielles et importantes. Le non-respect peut entraîner des amendes allant jusqu\'à 10 millions d\'euros ou 2% du chiffre d\'affaires mondial.',
      content: [
        'La directive NIS2 (Network and Information Security 2) est entrée en vigueur et remplace la directive NIS de 2016. Elle élargit considérablement le champ d\'application et renforce les exigences de sécurité pour les entreprises.',
        'Les secteurs concernés incluent : énergie, transport, santé, infrastructures numériques, administration publique, et bien d\'autres. Les entreprises doivent mettre en place des mesures techniques et organisationnelles appropriées pour gérer les risques de cybersécurité.',
        'Obligations principales : gestion des risques, notification des incidents dans les 24 heures, sécurité de la chaîne d\'approvisionnement, utilisation de la cryptographie, contrôles d\'accès, et formation continue du personnel.',
        'Les États membres doivent désigner des autorités compétentes pour superviser l\'application de la directive. En France, l\'ANSSI (Agence Nationale de la Sécurité des Systèmes d\'Information) joue un rôle central dans la mise en œuvre de NIS2.'
      ],
      sources: [
        {
          title: 'Union Européenne - Directive NIS2',
          url: 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive',
          date: 'Décembre 2022 (application 2026)'
        },
        {
          title: 'ANSSI - Guide NIS2',
          url: 'https://www.ssi.gouv.fr/entreprise/reglementation/directive-nis-2/',
          date: 'Février 2026'
        },
        {
          title: 'ENISA - NIS2 Implementation Guide',
          url: 'https://www.enisa.europa.eu/topics/nis-directive',
          date: 'Mars 2026'
        }
      ]
    },
    {
      id: 3,
      title: 'Droit d\'auteur et code source',
      date: '15 Février 2026',
      category: 'Propriété intellectuelle',
      summary: 'Clarifications sur la protection du code source et les licences open source. Cas d\'usage des licences MIT, GPL et Apache.',
      impact: 'Moyen',
      description: 'Guide pratique sur la propriété intellectuelle du code source et les licences open source.',
      impactDetail: 'Le choix de la licence open source a des implications juridiques importantes. Une mauvaise gestion peut entraîner des litiges et des obligations inattendues.',
      content: [
        'Le code source est protégé par le droit d\'auteur dès sa création. L\'auteur (ou l\'employeur selon le contrat) détient automatiquement les droits sur le code qu\'il écrit. Il peut ensuite choisir de distribuer ce code sous différentes licences.',
        'Les licences open source permettent de partager le code tout en définissant les conditions d\'utilisation. La licence MIT est permissive et permet presque tout usage. La GPL impose que les œuvres dérivées soient également sous GPL (copyleft). Apache 2.0 offre une protection contre les brevets.',
        'Pour les entreprises : vérifier les licences des dépendances utilisées, respecter les obligations (attribution, partage du code source si GPL), et documenter les licences dans le projet. Des outils comme FOSSA ou Black Duck peuvent automatiser cette vérification.',
        'En tant que développeur, comprendre ces licences est essentiel pour contribuer à l\'open source et pour choisir les bonnes dépendances dans vos projets professionnels.'
      ],
      sources: [
        {
          title: 'Choose an open source license',
          url: 'https://choosealicense.com/',
          date: 'Permanent'
        },
        {
          title: 'GNU - Licences et conformité',
          url: 'https://www.gnu.org/licenses/gpl-howto.html',
          date: 'Février 2026'
        },
        {
          title: 'INPI - Propriété intellectuelle et logiciels',
          url: 'https://www.inpi.fr/fr/proteger-vos-creations/le-droit-dauteur',
          date: 'Janvier 2026'
        }
      ]
    },
    {
      id: 4,
      title: 'Cookies et consentement utilisateur',
      date: '28 Janvier 2026',
      category: 'Conformité web',
      summary: 'Nouvelles recommandations de la CNIL sur la gestion des cookies et le recueil du consentement sur les sites web.',
      impact: 'Élevé',
      description: 'Mise en conformité des sites web concernant la gestion des cookies et le consentement.',
      impactDetail: 'Tous les sites web doivent se conformer aux règles strictes de la CNIL sur les cookies. Le non-respect peut entraîner des sanctions et nuire à la réputation de l\'entreprise.',
      content: [
        'La CNIL a publié de nouvelles recommandations en 2026 concernant les cookies et traceurs. Le consentement doit être libre, spécifique, éclairé et univoque. Les bannières de cookies doivent respecter des règles strictes.',
        'Les cookies strictement nécessaires au fonctionnement du site ne nécessitent pas de consentement. En revanche, les cookies analytiques, publicitaires et de réseaux sociaux requièrent un consentement explicite avant leur dépo t.',
        'Le bouton "Refuser" doit être aussi visible et accessible que le bouton "Accepter". Les murs de cookies (cookie walls) sont interdits sauf exception. La navigation doit pouvoir continuer même si l\'utilisateur refuse les cookies.',
        'Bonnes pratiques techniques : utiliser des solutions de gestion du consentement (CMP) conformes, respecter la durée de conservation (13 mois maximum), et permettre aux utilisateurs de retirer leur consentement facilement.'
      ],
      sources: [
        {
          title: 'CNIL - Cookies et traceurs',
          url: 'https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi',
          date: 'Janvier 2026'
        },
        {
          title: 'CNIL - Lignes directrices cookies et traceurs',
          url: 'https://www.cnil.fr/fr/lignes-directrices-et-recommandation-cookies',
          date: 'Mars 2021 (mis à jour 2026)'
        },
        {
          title: 'EDPB - Guidelines on cookies',
          url: 'https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052021-consent_en',
          date: 'Mai 2021 (mis à jour 2026)'
        }
      ]
    },
  ];

  if (selectedArticle) {
    return (
      <LegalWatchArticle
        title={selectedArticle.title}
        date={selectedArticle.date}
        category={selectedArticle.category}
        description={selectedArticle.description}
        content={selectedArticle.content}
        sources={selectedArticle.sources}
        impact={selectedArticle.impactDetail}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  const impactColors = {
    'Critique': 'bg-destructive/10 text-destructive',
    'Élevé': 'bg-orange-500/10 text-orange-600',
    'Moyen': 'bg-blue-500/10 text-blue-600',
  };

  return (
    <section id="veille-juridique" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Veille Juridique</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Suivi des évolutions légales et réglementaires dans le domaine du numérique et de l'informatique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm">
                  {article.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${impactColors[article.impact as keyof typeof impactColors]}`}>
                  Impact {article.impact}
                </span>
              </div>
              <h3 className="mb-3">{article.title}</h3>
              <p className="text-foreground/80 mb-3">{article.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground text-sm">
                  <FileText size={16} className="mr-1" />
                  {article.date}
                </div>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="flex items-center space-x-2 text-primary hover:underline text-sm"
                >
                  <span>Lire l'article</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-accent/50 rounded-lg border border-border">
          <div className="flex items-start">
            <Scale size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="mb-2">Thématiques suivies</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="mb-2">Réglementations</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• RGPD et protection des données</li>
                    <li>• Directive NIS2 (cybersécurité)</li>
                    <li>• Digital Services Act (DSA)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Droits & Licences</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• Propriété intellectuelle</li>
                    <li>• Licences open source</li>
                    <li>• Droit du numérique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
