import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, UserCircle } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
    <div className="relative flex items-center justify-center w-10 h-10 bg-primary text-white rounded-xl shadow-md overflow-hidden">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 z-10"
      >
        <path d="M12 12c-2-2.5-4-3-6-3a4 4 0 0 0 0 8c3 0 5-3 6-5s3-5 6-5a4 4 0 0 1 0 8c-2 0-4-.5-6-3" />
      </svg>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full opacity-80 blur-sm" />
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg leading-none tracking-tight text-primary">Limlak DT Sacco</span>
      <span className="text-[0.65rem] font-medium text-secondary uppercase tracking-widest leading-none mt-0.5">
        Rooting for your growth
      </span>
    </div>
  </Link>
);

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Membership', path: '/membership' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary/5 text-primary'
                      : 'text-foreground/80 hover:bg-gray-100 hover:text-primary'
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-full transition-colors"
              data-testid="btn-member-login"
            >
              <UserCircle className="w-4 h-4" />
              Member Login
            </button>
            <Link
              href="/membership"
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-bold rounded-full shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              data-testid="link-join-now"
            >
              Join Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg font-semibold py-2 px-4 rounded-xl ${
                    location === link.path
                      ? 'bg-primary/5 text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-gray-100 my-2" />
              <button className="flex items-center justify-center gap-2 py-3 px-4 text-primary font-semibold border-2 border-primary/20 rounded-xl">
                <UserCircle className="w-5 h-5" />
                Member Login
              </button>
              <Link
                href="/membership"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-secondary text-white font-bold rounded-xl shadow-lg shadow-secondary/20"
              >
                Join Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
