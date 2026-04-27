import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVeilleOpen, setIsVeilleOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Compétences', href: '/skills' },
    { label: 'Stages', href: '/internships' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  const veilleItems = [
    { label: 'Veille Technologique', href: '/veille-technologique' },
    { label: 'Veille Juridique', href: '/veille-juridique' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isVeilleActive = veilleItems.some(item => location.pathname === item.href);

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                Thomas TERRAL
              </span>
              <span className="text-xs text-muted-foreground">Portfolio BTS SIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-slate-100 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Veilles Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsVeilleOpen(true)}
                onMouseLeave={() => setIsVeilleOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                  isVeilleActive
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-slate-100 hover:text-primary'
                }`}
              >
                <span>Veilles</span>
                <ChevronDown size={16} className={`transition-transform ${isVeilleOpen ? 'rotate-180' : ''}`} />
              </button>

              {isVeilleOpen && (
                <div
                  onMouseEnter={() => setIsVeilleOpen(true)}
                  onMouseLeave={() => setIsVeilleOpen(false)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-2"
                >
                  {veilleItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block px-4 py-2 transition-colors ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-slate-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Veilles Section */}
            <div className="pt-2 border-t border-border">
              <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">Veilles</p>
              {veilleItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-slate-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
