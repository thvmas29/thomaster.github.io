import { useState } from 'react';
import Slider from 'react-slick';
import { Calendar, MapPin, Building, ChevronLeft, ChevronRight, Presentation } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  slideshowUrl: string;
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Lycée Professionel Marie Curie",
    position: "Informaticien - Stage 1ère année",
    location: "Saint-Anne, La Réunion",
    period: "26 Mai 2025 - 21 Juin 2025",
    description: "Stage de développement web au sein d'une entreprise de services numériques spécialisée dans la création de solutions web pour les PME.",
    tasks: [
      "Développement de sites web responsive",
      "Maintenance et mise à jour de sites existants",
      "Participation aux réunions clients",
      "Tests et débogage"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    achievements: [
      "Création de 3 sites web complets",
      "Amélioration des performances de 40% sur un site existant",
      "Mise en place d'un système de gestion de contenu"
    ],
    slideshowUrl: "#"
  },
  {
    id: 2,
    company: "Tech Solutions",
    position: "Développeur Full-Stack - Stage 2ème année",
    location: "Lyon, France",
    period: "Janvier 2026 - Avril 2026",
    description: "Stage au sein d'une startup développant des applications web innovantes pour le secteur de la santé.",
    tasks: [
      "Développement d'une application web avec React",
      "Création d'API RESTful avec Node.js",
      "Intégration de bases de données",
      "Participation à la méthodologie Agile/Scrum"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "Docker"],
    achievements: [
      "Développement d'un module de gestion des patients",
      "Optimisation des requêtes API (-50% temps de réponse)",
      "Documentation technique complète"
    ],
    slideshowUrl: "#"
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

                  {/* Lien vers le diaporama */}
                  <div className="border-t border-border pt-6">
                    <a
                      href={internship.slideshowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Presentation size={20} />
                      <span>Voir le diaporama de présentation</span>
                    </a>
                    <p className="text-sm text-foreground/60 mt-3">
                      Consultez la présentation complète de ce stage avec captures d'écran et détails supplémentaires
                    </p>
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
