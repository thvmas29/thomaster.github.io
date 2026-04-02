export function About() {
  return (
    <section id="apropos" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-center">À propos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">Mon parcours</h3>
            <p className="text-foreground/80 mb-4">
              Actuellement en BTS Services Informatiques aux Organisations, je me forme
              aux métiers de l'informatique avec une spécialisation en développement
              d'applications (SLAM) et en solutions d'infrastructure, systèmes et réseaux (SISR).
            </p>
            <p className="text-foreground/80">
              Mon objectif est de devenir un professionnel polyvalent, capable de concevoir
              et de maintenir des solutions informatiques adaptées aux besoins des organisations.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Formation</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="mb-2">BTS SIO</h4>
                <p className="text-muted-foreground">Services Informatiques aux Organisations</p>
                <p className="text-muted-foreground">2024 - 2026</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="mb-2">Baccalauréat</h4>
                <p className="text-muted-foreground">Obtenu en 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
