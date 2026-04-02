import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';

export function Presentation() {
  return (
    <section id="presentation" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ma Présentation</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Découvrez mon parcours, mes motivations et mes objectifs professionnels
          </p>
        </div>

        <div className="space-y-6">
          {/* Parcours */}
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="text-primary" size={28} />
              <h3>Mon Parcours</h3>
            </div>
            <p className="text-foreground/80">
              Actuellement en BTS Services Informatiques aux Organisations (SIO), j'ai choisi cette formation
              pour approfondir mes compétences en développement et en infrastructure réseau. Mon parcours m'a
              permis d'acquérir une solide base en programmation, en gestion de bases de données et en
              administration système.
            </p>
          </div>

          {/* Motivation */}
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="text-primary" size={28} />
              <h3>Mes Motivations</h3>
            </div>
            <p className="text-foreground/80">
              Passionné par les nouvelles technologies et l'innovation, je suis constamment à la recherche de
              nouveaux défis techniques. Mon objectif est de contribuer à des projets innovants qui ont un
              impact positif. J'apprécie particulièrement le travail en équipe et l'apprentissage continu
              qu'offre le domaine de l'informatique.
            </p>
          </div>

          {/* Objectifs professionnels */}
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="text-primary" size={28} />
              <h3>Objectifs Professionnels</h3>
            </div>
            <p className="text-foreground/80 mb-4">
              À court terme, je souhaite valider mon BTS SIO avec d'excellents résultats et acquérir une
              expérience significative en entreprise. À moyen terme, mes objectifs incluent :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-foreground/80">
                <span className="text-primary mt-1">•</span>
                <span>Poursuivre mes études en licence professionnelle ou école d'ingénieurs</span>
              </li>
              <li className="flex items-start space-x-2 text-foreground/80">
                <span className="text-primary mt-1">•</span>
                <span>Me spécialiser dans le développement web full-stack ou la cybersécurité</span>
              </li>
              <li className="flex items-start space-x-2 text-foreground/80">
                <span className="text-primary mt-1">•</span>
                <span>Contribuer à des projets open-source et développer mon réseau professionnel</span>
              </li>
            </ul>
          </div>

          {/* Valeurs */}
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-primary" size={28} />
              <h3>Mes Valeurs</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="mb-2">Rigueur</h4>
                <p className="text-foreground/80 text-sm">Précision et qualité dans chaque projet</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="mb-2">Collaboration</h4>
                <p className="text-foreground/80 text-sm">Travail d'équipe et communication</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="mb-2">Apprentissage</h4>
                <p className="text-foreground/80 text-sm">Curiosité et formation continue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
