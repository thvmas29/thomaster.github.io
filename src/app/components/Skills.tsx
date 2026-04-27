import { Code, Database, Server, Globe, Shield, Cpu, Sparkles } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Développement',
      items: ['HTML/CSS/JavaScript', 'Kotlin', 'Python', 'PHP', 'Java'],
      gradient: 'from-indigo-600 to-blue-600',
    },
    {
      icon: <Database size={32} />,
      title: 'Bases de données',
      items: ['MySQL', 'PostgreSQL', 'MariaDB', 'SQL'],
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: <Server size={32} />,
      title: 'Systèmes & Réseaux',
      items: ['Linux', 'Windows Server', 'Docker', 'Virtualisation'],
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web & API',
      items: ['Node.js', 'CakePhp', 'Git/GitHub'],
      gradient: 'from-cyan-600 to-indigo-600',
    },
    {
      icon: <Shield size={32} />,
      title: 'Sécurité',
      items: ['RGPD', 'Cybersécurité', 'Pare-feu', 'Chiffrement'],
      gradient: 'from-emerald-600 to-cyan-600',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Outils',
      items: ['VS Code', 'Docker', 'Git', 'Apache NetBeans'],
      gradient: 'from-amber-600 to-pink-600',
    },
  ];

  return (
    <section id="competences" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-6 border border-primary/30">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Expertise Technique
            </span>
          </div>
          <h2 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils maîtrisés durant ma formation
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-3xl border border-primary/20 p-8 hover:border-primary/50 transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-br ${skill.gradient} rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-6 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 group/item">
                      <div className={`w-2 h-2 bg-gradient-to-r ${skill.gradient} rounded-full group-hover/item:scale-150 transition-transform`}></div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
