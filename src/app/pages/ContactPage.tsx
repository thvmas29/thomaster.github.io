import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Me contacter
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            N'hésitez pas à me contacter pour discuter d'opportunités professionnelles, de collaborations
            ou pour toute question concernant mon parcours et mes compétences.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Informations de contact
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:terralthomas17@gmail.com"
                      className="text-primary hover:underline break-all"
                    >
                      terralthomas17@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Réponse sous 24-48h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                    <a
                      href="tel:+262692061425"
                      className="text-primary hover:underline"
                    >
                      +262 692 06 14 25
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Disponible en semaine
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
                    <p className="text-foreground">Saint-Benoît, La Réunion</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      France, Océan Indien
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Envoyez-moi un message
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder-muted-foreground"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder-muted-foreground"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Objet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder-muted-foreground"
                    placeholder="Opportunité de stage"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Bonjour, je souhaiterais discuter..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 font-semibold shadow-sm hover:shadow-md"
                >
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Vos informations personnelles sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
