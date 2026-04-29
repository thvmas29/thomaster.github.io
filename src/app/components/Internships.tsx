import { useState } from 'react';
import Slider from 'react-slick';
import { Calendar, MapPin, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { resolveImagePath } from '../utils/imagePath';

interface Internship {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
  technologies: string[];
  achievements: string[];
  logo?: string;
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Lycée Professionnel Marie Curie",
    position: "Informaticien - Stage 1ère année",
    location: "Saint-Anne, La Réunion",
    period: "26 Mai 2025 - 21 Juin 2025",
    description: "Stage au sein du service informatique du lycée, axé sur le support technique, la gestion des incidents et la maintenance du parc informatique de l'établissement.",
    tasks: [
      "Gestion et résolution d'incidents informatiques",
      "Maintenance et réparation du matériel informatique (PC, imprimantes, périphériques)",
      "Utilisation de GLPI pour la gestion des tickets d'assistance",
      "Support technique aux utilisateurs (personnel et élèves)",
      "Diagnostics matériels et logiciels",
      "Installation et configuration de postes de travail"
    ],
    technologies: ["GLPI", "Windows", "Hardware", "Réseaux", "Support utilisateur"],
    achievements: [
      "Traitement de plus de 50 tickets d'incidents via GLPI",
      "Réparation et maintenance de nombreux postes informatiques",
      "Amélioration de la réactivité du support technique",
      "Documentation des procédures de maintenance"
    ]
  },
  {
    id: 2,
    company: "Telecombinatie Wassenaar",
    position: "Technicien & Assistant Conception - Stage ERASMUS 2ème année",
    location: "Wassenaar, Pays-Bas",
    period: "26 janvier 2026 - 20 mars 2026",
    description: "Stage international ERASMUS au sein d'une entreprise de télécommunications spécialisée dans la réparation de téléphones mobiles avec participation à la conception d'une application.",
    tasks: [
      "Réparation et maintenance de téléphones mobiles",
      "Diagnostics techniques sur smartphones et tablettes",
      "Proposition d'idées pour des publicités en ligne",
      "Conception de diagrammes pour une application mobile"
    ],
    technologies: ["Réparation mobile", "UML/Diagrammes", "Conception d'application"],
    achievements: [
      "Réparation réussie de nombreux appareils mobiles",
      "Contribution d'idées créatives pour la publicité",
      "Création de diagrammes conceptuels pour une future application",
      "Expérience internationale dans un environnement multiculturel"
    ],
    logo: "telecombinatie-logo.png"
  }
];

function CustomArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? 'left-4' : 'right-4'} z-10 bg-card rounded-full p-3 border border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors`}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

export function Internships() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <button
        className={`w-3 h-3 rounded-full transition-colors ${
          i === currentSlide ? 'bg-primary' : 'bg-muted'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !bottom-[-40px]'
  };

  return (
    <section id="internships" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Mes Stages</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Découvrez mes expériences professionnelles en entreprise durant ma formation BTS SIO
          </p>
        </div>

        <div className="max-w-5xl mx-auto pb-12">
          <Slider {...settings}>
            {internships.map((internship) => (
              <div key={internship.id} className="px-4">
                <div className="bg-card rounded-xl border border-border shadow-lg p-8 md:p-10">
                  {/* En-tête */}
                  <div className="border-b border-border pb-6 mb-6">
                    {internship.logo && (
                      <div className="flex justify-center mb-6">
                        <img
                          src={resolveImagePath(internship.logo)}
                          alt={`Logo ${internship.company}`}
                          className="h-24 object-contain"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="mb-2">{internship.position}</h3>
                        <div className="flex items-center space-x-2 text-foreground/80 mb-2">
                          <Building size={20} />
                          <span className="text-lg">{internship.company}</span>
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm">
                        Stage {internship.id}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-foreground/80">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-foreground/80">{internship.description}</p>
                  </div>

                  {/* Missions */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-primary">Missions principales</h4>
                    <ul className="space-y-2">
                      {internship.tasks.map((task, index) => (
                        <li key={index} className="flex items-start space-x-2 text-foreground/80">
                          <span className="text-primary mt-1">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-primary">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Réalisations */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-primary">Réalisations clés</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2 text-foreground/80">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Indicateur de slides */}
        <div className="text-center text-muted-foreground text-sm mt-8">
          Stage {currentSlide + 1} sur {internships.length}
        </div>
      </div>
    </section>
  );
}
