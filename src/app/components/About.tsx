import { GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="apropos" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            À propos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mon parcours */}
          <div className="glass-effect rounded-3xl border border-primary/20 p-8 animate-slide-up hover:border-primary/50 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mon parcours</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Actuellement en BTS Services Informatiques aux Organisations, je me forme
              aux métiers de l'informatique avec la spécialité de développement
              d'applications (SLAM).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon objectif est de devenir un professionnel polyvalent, capable de concevoir
              et de maintenir des solutions informatiques adaptées aux besoins des organisations.
            </p>
          </div>

          {/* Formation */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Formation</h3>
            </div>

            <div className="glass-effect rounded-3xl border border-primary/20 p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  BTS SIO
                </h4>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-primary/30 text-primary rounded-full text-xs font-semibold">
                  2024 - 2026
                </span>
              </div>
              <p className="text-muted-foreground">
                Services Informatiques aux Organisations
              </p>
            </div>

            <div className="glass-effect rounded-3xl border border-primary/20 p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Baccalauréat Général
                </h4>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-secondary/30 text-secondary rounded-full text-xs font-semibold">
                  2024
                </span>
              </div>
              <p className="text-muted-foreground">
                Obtenu avec mention
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
