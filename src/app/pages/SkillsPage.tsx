import { Code, Database, Server, Globe, Shield, Cpu } from 'lucide-react';

export function SkillsPage() {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Développement',
      description: 'Langages et frameworks pour le développement d\'applications',
      skills: [
        { name: 'HTML/CSS/JavaScript', level: 'Avancé' },
        { name: 'PHP', level: 'Intermédiaire' },
        { name: 'Python', level: 'Intermédiaire' },
        { name: 'Java', level: 'Débutant' },
      ],
    },
    {
      icon: <Database size={32} />,
      title: 'Bases de données',
      description: 'Systèmes de gestion de bases de données relationnelles',
      skills: [
        { name: 'MySQL', level: 'Intermédiaire' },
        { name: 'PostgreSQL', level: 'Intermédiaire' },
        { name: 'SQL', level: 'Intermédiaire' },
      ],
    },
    {
      icon: <Server size={32} />,
      title: 'Systèmes & Réseaux',
      description: 'Administration systèmes et infrastructure',
      skills: [
        { name: 'Linux', level: 'Intermédiaire' },
        { name: 'Windows Server', level: 'Débutant' },
        { name: 'Virtualisation', level: 'Débutant' },
      ],
    },
    {
      icon: <Globe size={32} />,
      title: 'Web & Frameworks',
      description: 'Développement web et frameworks',
      skills: [
        { name: 'CakePHP', level: 'Avancé' },
      ],
    },
    {
      icon: <Shield size={32} />,
      title: 'Sécurité',
      description: 'Protection des données et cybersécurité',
      skills: [
        { name: 'RGPD', level: 'Intermédiaire' },
        { name: 'Cybersécurité', level: 'Débutant' },
        { name: 'Pare-feu', level: 'Débutant' },
        { name: 'Chiffrement', level: 'Débutant' },
      ],
    },
    {
      icon: <Cpu size={32} />,
      title: 'Outils',
      description: 'Environnements de développement et outils',
      skills: [
        { name: 'VS Code', level: 'Avancé' },
        { name: 'Apache NetBeans', level: 'Intermédiaire' },
        { name: 'GLPI', level: 'Intermédiaire' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avancé':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermédiaire':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Débutant':
        return 'bg-slate-50 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Compétences techniques
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Découvrez les technologies et outils que j'ai acquis au cours de ma formation et de mes expériences professionnelles.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-border">
                <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                  <div className="text-white">{category.icon}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-lg border ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 bg-slate-50 border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Niveaux de compétence</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-sm font-medium rounded-lg border bg-green-50 text-green-700 border-green-200">
                Avancé
              </span>
              <span className="text-sm text-muted-foreground">Maîtrise approfondie</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-sm font-medium rounded-lg border bg-blue-50 text-blue-700 border-blue-200">
                Intermédiaire
              </span>
              <span className="text-sm text-muted-foreground">Bonne connaissance</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-sm font-medium rounded-lg border bg-slate-50 text-slate-700 border-slate-200">
                Débutant
              </span>
              <span className="text-sm text-muted-foreground">En apprentissage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
