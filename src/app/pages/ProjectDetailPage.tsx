import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, FileText, Calendar, Tag } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            to="/projets"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Retour aux projets</span>
          </Link>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={16} />
              <span>Projet académique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
            Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-primary/5 text-primary border border-primary/10 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.detailedDescription && (
          <>
            {/* Overview */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                Présentation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                  {project.detailedDescription.presentation}
                </p>
              </div>
            </section>

            {/* Detailed Description */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                Description détaillée
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.detailedDescription.overview}
                </p>
              </div>
            </section>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                Fonctionnalités principales
              </h2>
              <div className="space-y-8">
                {project.detailedDescription.features.map((feature, i) => (
                  <div key={i} className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.name}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Documentation */}
        {project.documentationUrl && (
          <section className="bg-slate-50 border border-border rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary rounded-lg">
                <FileText size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Documentation technique
                </h3>
                <p className="text-muted-foreground mb-4">
                  Consultez la documentation complète pour plus de détails sur l'architecture, les schémas et les spécifications techniques du projet.
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.id === 'blog-app-cakephp' && (
                    <Link
                      to="/projets/blog-app-cakephp/documentation"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <FileText size={18} />
                      <span>Voir la documentation</span>
                    </Link>
                  )}
                  <a
                    href={`${import.meta.env.BASE_URL}${project.documentationUrl}`}
                    download
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-border text-foreground rounded-lg hover:bg-slate-100 transition-colors font-medium"
                  >
                    <FileText size={18} />
                    <span>Télécharger le PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
