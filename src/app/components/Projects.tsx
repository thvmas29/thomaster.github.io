import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Projet 1 - Application de gestion',
      description: 'Développement d\'une application web de gestion pour une PME, incluant la gestion des clients, des commandes et du stock.',
      technologies: ['React', 'Node.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    },
    {
      title: 'Projet 2 - Infrastructure réseau',
      description: 'Mise en place d\'une infrastructure réseau sécurisée avec serveurs virtualisés et gestion des accès.',
      technologies: ['Linux', 'Docker', 'Virtualisation'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    },
    {
      title: 'Projet 3 - API REST',
      description: 'Conception et développement d\'une API REST pour une application mobile, avec authentification et gestion des données.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
