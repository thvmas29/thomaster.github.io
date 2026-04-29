import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Portfolio Professionnel</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Étudiant en BTS SIO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Services Informatiques aux Organisations
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Développeur passionné spécialisé dans la création de solutions web modernes.
            De la conception à la mise en production, je transforme les idées en applications performantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <span>Me contacter</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projets"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-foreground border-2 border-border rounded-lg hover:border-primary hover:text-primary transition-all font-semibold"
            >
              <span>Voir mes projets</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="#"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <Link
              to="/contact"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
