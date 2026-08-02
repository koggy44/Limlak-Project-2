import React from 'react';
import { Link } from 'wouter';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white text-primary rounded-xl shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 12c-2-2.5-4-3-6-3a4 4 0 0 0 0 8c3 0 5-3 6-5s3-5 6-5a4 4 0 0 1 0 8c-2 0-4-.5-6-3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">Limlak DT Sacco</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 font-medium max-w-sm">
              Rooting for your growth. Empowering our members socially and economically through affordable and innovative financial solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" data-testid="link-social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" data-testid="link-social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" data-testid="link-social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/products' },
                { name: 'Membership', path: '/membership' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'FAQ & Help', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/80 hover:text-white hover:underline decoration-secondary underline-offset-4 flex items-center gap-2 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 text-secondary opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h3 className="font-bold text-lg mb-6">Digital Banking</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider font-bold mb-1">USSD Banking</p>
                <p className="font-mono text-xl font-bold text-secondary">*356#</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider font-bold mb-1">Paybill Number</p>
                <p className="font-mono text-xl font-bold text-secondary">4103775</p>
              </div>
              <a href="#" className="bg-secondary hover:bg-secondary/90 text-white rounded-xl p-4 flex items-center justify-between transition-colors group">
                <div>
                  <p className="font-bold">Chap Chap App</p>
                  <p className="text-xs text-white/80">Get it on Google Play</p>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">
                  P.O. Box 1306-00217<br />Limuru, Kenya
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">+254 716 029 560</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">info@limlaksacco.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Limlak DT Sacco Society LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="flex items-center gap-1">
              Licensed by <span className="font-bold text-white">SASRA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
