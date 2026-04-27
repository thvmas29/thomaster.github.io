import { GraduationCap, Target, Briefcase, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À propos de moi
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Étudiant passionné en BTS Services Informatiques aux Organisations, je me forme aux métiers
            de l'informatique avec une spécialisation en développement d'applications.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Mon parcours */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary rounded-lg">
              <Target size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Mon parcours</h2>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Actuellement en BTS Services Informatiques aux Organisations, je me forme aux métiers
                de l'informatique avec la spécialité de développement d'applications (SLAM).
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Mon objectif est de devenir un professionnel polyvalent, capable de concevoir et de
                maintenir des solutions informatiques adaptées aux besoins des organisations. À travers
                ma formation, j'ai développé une expertise technique solide et une capacité d'adaptation
                aux différents environnements de travail.
              </p>
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary rounded-lg">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Formation</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    BTS Services Informatiques aux Organisations
                  </h3>
                  <p className="text-primary font-semibold">Option SLAM - Développement d'applications</p>
                </div>
                <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold whitespace-nowrap">
                  2024 - 2026
                </span>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Formation diplômante axée sur le développement d'applications et la gestion de solutions informatiques.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Développement d'applications web et mobile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Gestion de bases de données</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Administration systèmes et réseaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cybersécurité et protection des données</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Baccalauréat Général
                  </h3>
                  <p className="text-muted-foreground">Diplôme obtenu avec mention</p>
                </div>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg font-semibold">
                  2024
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Objectifs professionnels */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary rounded-lg">
              <Briefcase size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Objectifs professionnels</h2>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Mon ambition est de continuer à développer mes compétences dans le domaine du développement
                web et de l'infrastructure informatique. Je souhaite évoluer dans un environnement qui valorise
                l'innovation, la collaboration et l'apprentissage continu.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                À court terme, je cherche à acquérir une expérience professionnelle significative à travers
                des stages et des projets concrets. À long terme, mon objectif est de devenir un développeur
                full-stack compétent, capable de gérer des projets de A à Z et de contribuer efficacement au
                sein d'une équipe technique.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
