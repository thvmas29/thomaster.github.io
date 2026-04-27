export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <div>
            <p className="text-lg font-semibold text-foreground">Thomas TERRAL</p>
            <p className="text-sm text-muted-foreground">Portfolio BTS SIO</p>
          </div>

          <p className="text-sm text-muted-foreground">
            Développé avec React & Tailwind CSS
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
