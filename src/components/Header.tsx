import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, RESORT_CONFIG } from '../data/resortData';

interface HeaderProps {
  onOpenBooking: (presetTopic?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#292724]/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-gradient-to-b from-[#292724]/70 via-[#292724]/35 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark + Resort Crest */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8] rounded"
        >
          <img
            src={RESORT_CONFIG.assets.logo}
            alt="H.M Golden Beach Katosi emblem"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full object-cover bg-white/95 p-0.5 shrink-0"
          />
          <span className="font-display text-base sm:text-lg font-semibold tracking-[0.12em] uppercase">
            {RESORT_CONFIG.brandShort}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xs font-medium tracking-[0.14em] uppercase text-white/90 hover:text-[#E8D1B8] relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#E8D1B8] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Outlined Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking('Day Visit')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-white border border-white/80 rounded-sm hover:bg-white hover:text-[#292724] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            BOOK YOUR VISIT
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-white rounded-sm border border-white/25 hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#292724] border-t border-white/10 px-6 py-5 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block py-3 text-xs font-medium tracking-[0.16em] uppercase text-white/90 hover:text-[#E8D1B8] border-b border-white/10 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Day Visit');
              }}
              className="w-full py-3 px-5 text-xs font-semibold tracking-[0.14em] uppercase text-white border border-white/80 rounded-sm hover:bg-white hover:text-[#292724] transition-colors cursor-pointer"
            >
              BOOK YOUR VISIT
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
