import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-6 border border-primary/30">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Restons connectés
            </span>
          </div>
          <h2 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Informations de contact</h3>

            <div className="glass-effect rounded-3xl border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="text-white flex-shrink-0" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a
                    href="mailto:terralthomas17@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    terralthomas17@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="text-white flex-shrink-0" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Téléphone</h4>
                  <a
                    href="tel:+262692061425"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +262 692 06 14 25
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-pink-600 to-indigo-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <MapPin className="text-white flex-shrink-0" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Localisation</h4>
                  <p className="text-muted-foreground">Saint-Benoît, La Réunion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-3xl border border-primary/20 p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Envoyez-moi un message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-input-background/50 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-input-background/50 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="votre.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-input-background/50 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="group w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Envoyer le message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
