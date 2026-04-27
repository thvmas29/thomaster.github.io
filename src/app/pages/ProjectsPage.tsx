import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Découvrez les différents projets réalisés durant ma formation et mes expériences professionnelles.
            Chaque projet représente une opportunité d'apprentissage et de développement de mes compétences techniques.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projets/${project.id}`}
              className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Link */}
                <div className="flex items-center text-primary font-medium group-hover:underline">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
