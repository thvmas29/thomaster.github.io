import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="mb-4">Étudiant en BTS SIO</h1>
          <p className="text-muted-foreground mb-6">
            Services Informatiques aux Organisations
          </p>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Passionné par le développement et l'infrastructure, je me spécialise dans la
            création de solutions informatiques innovantes et performantes.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            Mes projets
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
