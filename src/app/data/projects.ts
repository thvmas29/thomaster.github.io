export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  detailedDescription?: {
    presentation: string;
    overview: string;
    features: Array<{
      name: string;
      description: string;
    }>;
  };
  documentationUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'blog-app-cakephp',
    title: 'Blog App CakePHP',
    description: 'Application web de blog permettant aux utilisateurs de créer un compte, se connecter et publier des articles avec système de commentaires et tags.',
    technologies: ['CakePHP', 'PostgreSQL', 'PHP', 'MVC'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    detailedDescription: {
      presentation: 'Le projet Blog App est une application web qui permet à des utilisateurs de créer un compte, de se connecter, et de publier des articles de blog. L\'application a été réalisée avec le framework CakePHP, en utilisant une base de données PostgreSQL.',
      overview: 'Blog App est une plateforme de publication complète développée selon l\'architecture MVC (Modèle-Vue-Contrôleur) du framework CakePHP. L\'application offre une expérience utilisateur fluide et intuitive, permettant la création, la gestion et le partage de contenu éditorial. Le système repose sur une architecture robuste avec PostgreSQL comme base de données relationnelle, assurant la persistance et l\'intégrité des données. L\'application implémente un système d\'authentification sécurisé, une gestion avancée des articles avec catégorisation par tags, et un système de commentaires interactif favorisant l\'engagement des lecteurs.',
      features: [
        {
          name: 'Gestion des utilisateurs (User)',
          description: 'Chaque utilisateur possède un nom, un prénom, un âge, une adresse e-mail, un identifiant et un mot de passe. Il peut créer un compte, se connecter, consulter, modifier ou supprimer son profil.'
        },
        {
          name: 'Gestion des articles (Article)',
          description: 'Un article contient un titre, un contenu, une date de création et une date de modification. Un utilisateur peut rédiger plusieurs articles. Il est possible de lister, consulter, créer, modifier et supprimer un article.'
        },
        {
          name: 'Système de commentaires (Comment)',
          description: 'Permet aux utilisateurs de laisser des commentaires sous un article. Chaque commentaire contient un titre, un contenu et une date de création. Un article peut avoir plusieurs commentaires.'
        },
        {
          name: 'Gestion des tags (Tag)',
          description: 'Représente les mots-clés que l\'on peut associer à un article. Chaque tag a un titre, une date de création et une date de modification. On peut lister, consulter, créer, modifier et supprimer des tags.'
        },
        {
          name: 'Association Article-Tag (ArticleTag)',
          description: 'Table de liaison permettant d\'associer plusieurs tags à un même article et inversement. Elle contient une référence vers l\'article, une référence vers le tag, ainsi qu\'une priorité.'
        }
      ]
    },
    documentationUrl: '/src/imports/Documentation_BLOC_APP_TERRAL_Thomas_v4.pdf'
  },
  {
    id: 'application-gestion',
    title: 'Application de gestion',
    description: 'Développement d\'une application web de gestion pour une PME, incluant la gestion des clients, des commandes et du stock.',
    technologies: ['React', 'Node.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
  },
  {
    id: 'infrastructure-reseau',
    title: 'Infrastructure réseau',
    description: 'Mise en place d\'une infrastructure réseau sécurisée avec serveurs virtualisés et gestion des accès.',
    technologies: ['Linux', 'Docker', 'Virtualisation'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop'
  },
  {
    id: 'api-rest',
    title: 'API REST',
    description: 'Conception et développement d\'une API REST pour une application mobile, avec authentification et gestion des données.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop'
  },
];
