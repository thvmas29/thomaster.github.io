import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Contact</h2>
          <p className="text-foreground/80">
            N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="mb-6">Informations de contact</h3>
            <div className="flex items-start space-x-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="mb-1">Email</h4>
                <a href="mailto:terralthomas17@gmail.com" className="text-foreground/80 hover:text-primary">
                  terralthomas17@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="mb-1">Téléphone</h4>
                <a href="tel:+262692061425" className="text-foreground/80 hover:text-primary">
                  +262 692 06 14 25
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="mb-1">Localisation</h4>
                <p className="text-foreground/80">Saint-Benoît, La Réunion</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6">Envoyez-moi un message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="votre.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <span>Envoyer</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
