import { Link } from 'react-router';
import { Laptop, Scale, ArrowRight } from 'lucide-react';

export function VeillesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mes Veilles
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Choisissez le type de veille que vous souhaitez consulter. Je réalise une veille
            technologique et juridique sur l'intelligence artificielle dans le domaine des
            graphismes et du développement de jeux vidéo.
          </p>
        </div>
      </section>

      {/* Veille Options */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Veille Technologique */}
          <Link
            to="/veille-technologique"
            className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:border-primary group"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                <Laptop size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Veille Technologique
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Suivi des évolutions technologiques et des tendances du secteur informatique
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                IA générative dans le game design
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Moteurs de jeu et IA procédurale
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Technologies graphiques et performance
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                NPCs intelligents et systèmes multi-agents
              </div>
            </div>

            <div className="flex items-center text-primary font-semibold group-hover:underline">
              <span>Consulter la veille technologique</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </Link>

          {/* Veille Juridique */}
          <Link
            to="/veille-juridique"
            className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:border-primary group"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                <Scale size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Veille Juridique
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Suivi des évolutions légales et réglementaires dans le domaine du numérique
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Propriété intellectuelle des œuvres IA
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Datasets d'entraînement et copyright
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Règlement européen sur l'IA (AI Act)
              </div>
              <div className="flex items-center text-foreground/80">
                <span className="text-primary mr-2">•</span>
                Éthique et biais algorithmiques
              </div>
            </div>

            <div className="flex items-center text-primary font-semibold group-hover:underline">
              <span>Consulter la veille juridique</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">À propos de mes veilles</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dans le cadre de ma formation BTS SIO, je réalise une veille technologique et juridique
            ciblée sur l'intelligence artificielle appliquée aux graphismes et au développement de
            jeux vidéo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ces veilles me permettent de suivre les innovations technologiques majeures (IA générative,
            ray tracing, NPCs intelligents) ainsi que les évolutions réglementaires et juridiques
            (droits d'auteur, AI Act, éthique) qui impactent l'industrie du jeu vidéo.
          </p>
        </div>
      </div>
    </div>
  );
}
