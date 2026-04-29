import { Briefcase, GraduationCap } from 'lucide-react';

export function Presentation() {
  return (
    <section id="presentation" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ma Présentation</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Découvrez mon parcours et mes objectifs professionnels
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
        </div>
      </div>
    </section>
  );
}
