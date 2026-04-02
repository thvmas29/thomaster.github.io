import { Code, Database, Server, Globe, Shield, Cpu } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Développement',
      items: ['HTML/CSS/JavaScript', 'React', 'Python', 'PHP', 'Java'],
    },
    {
      icon: <Database size={32} />,
      title: 'Bases de données',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
    },
    {
      icon: <Server size={32} />,
      title: 'Systèmes & Réseaux',
      items: ['Linux', 'Windows Server', 'Docker', 'Virtualisation'],
    },
    {
      icon: <Globe size={32} />,
      title: 'Web & API',
      items: ['REST API', 'Node.js', 'Express', 'Git/GitHub'],
    },
    {
      icon: <Shield size={32} />,
      title: 'Sécurité',
      items: ['RGPD', 'Cybersécurité', 'Pare-feu', 'Chiffrement'],
    },
    {
      icon: <Cpu size={32} />,
      title: 'Outils',
      items: ['VS Code', 'Docker', 'Git', 'Postman'],
    },
  ];

  return (
    <section id="competences" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">Compétences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-foreground/80">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
