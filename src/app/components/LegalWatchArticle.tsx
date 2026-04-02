import { ArrowLeft, Calendar, ExternalLink, Tag, Scale } from 'lucide-react';

interface Source {
  title: string;
  url: string;
  date: string;
}

interface LegalWatchArticleProps {
  title: string;
  date: string;
  category: string;
  description: string;
  content: string[];
  sources: Source[];
  impact: string;
  onBack: () => void;
}

export function LegalWatchArticle({
  title,
  date,
  category,
  description,
  content,
  sources,
  impact,
  onBack
}: LegalWatchArticleProps) {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          <span>Retour aux veilles juridiques</span>
        </button>

        {/* En-tête de l'article */}
        <article className="bg-card border border-border rounded-xl p-8 md:p-12">
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-foreground/60 mb-4">
              <Calendar size={16} />
              <span>{date}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Tag size={16} />
                <span>{category}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="text-primary" size={32} />
              <h1>{title}</h1>
            </div>
            <p className="text-xl text-foreground/80">{description}</p>
          </div>

          {/* Impact */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-primary mb-3">Impact et implications</h3>
            <p className="text-foreground/80">{impact}</p>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            {/* Contenu de l'article */}
            <div className="space-y-6 text-foreground/80">
              {content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-border pt-8">
            <h3 className="mb-6 text-primary">Sources légales et références</h3>
            <div className="space-y-4">
              {sources.map((source, index) => (
                <div
                  key={index}
                  className="bg-muted/30 border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="mb-1">{source.title}</h4>
                      <p className="text-sm text-foreground/60 mb-2">{source.date}</p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center space-x-1"
                      >
                        <span>{source.url}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags/Mots-clés */}
          <div className="border-t border-border pt-8 mt-8">
            <h4 className="mb-3 text-foreground/80">Catégories</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {category}
              </span>
              <span className="px-3 py-1 bg-muted/50 text-foreground/80 rounded-full text-sm">
                Droit et réglementation
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
