import {
  ArrowUpRight,
  MapPin,
  Phone,
} from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';
import { siFacebook, siInstagram, siTiktok, siYoutube } from 'simple-icons/icons';
import { NAV_LINKS, RESORT_CONFIG, SOCIAL_PLATFORMS } from '../data/resortData';
import { ResortImage } from './ResortImage';

const SOCIAL_ICONS: Record<string, SimpleIcon> = {
  facebook: siFacebook,
  instagram: siInstagram,
  tiktok: siTiktok,
  youtube: siYoutube,
};

interface FooterProps {
  onOpenBooking: (presetTopic?: string) => void;
}

function SocialIcon({ id }: { id: string }) {
  const icon = SOCIAL_ICONS[id];

  if (!icon) {
    return <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      {id === 'instagram' && (
        <defs>
          <linearGradient id="instagram-brand-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
      )}
      {id === 'tiktok' ? (
        <>
          <path d={icon.path} fill="#25F4EE" transform="translate(-0.7 0)" />
          <path d={icon.path} fill="#FE2C55" transform="translate(0.7 0)" />
          <path d={icon.path} fill="#FFFFFF" />
        </>
      ) : (
        <path
          d={icon.path}
          fill={id === 'instagram' ? 'url(#instagram-brand-gradient)' : `#${icon.hex}`}
        />
      )}
    </svg>
  );
}

export function Footer({ onOpenBooking }: FooterProps) {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasPhone = Boolean(RESORT_CONFIG.phoneNumber.trim());

  return (
    <footer id="contact" className="relative bg-[#292724] text-[#F5F1EB] overflow-hidden">
      {/* Atmospheric Second Beach Image Backdrop with Measured Dark Scrim */}
      <div className="absolute inset-0">
        <ResortImage
          src={RESORT_CONFIG.assets.footerBeach}
          alt="H.M Golden Beach Katosi shoreline with colorful beach umbrellas and Lake Victoria waves"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#292724]/92 via-[#292724]/88 to-[#292724]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Column 1: Brand Emblem, Wordmark & Short Resort Description */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src={RESORT_CONFIG.assets.logo}
                alt="H.M Golden Beach Katosi logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover bg-white p-0.5 shrink-0"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-[0.1em] uppercase text-white">
                  {RESORT_CONFIG.brandFull}
                </p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#E8D1B8]">
                  Lake Victoria · Uganda
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#F5F1EB]/80 max-w-sm">
              {RESORT_CONFIG.tagline}
            </p>

            {/* Framed Shoreline Preview Using Second Beach Image */}
            <div className="rounded-lg overflow-hidden border border-white/15 bg-[#292724]/60 max-w-xs">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <ResortImage
                  src={RESORT_CONFIG.assets.footerBeach}
                  alt="Beachfront umbrellas and shoreline at H.M Golden Beach Katosi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3.5 py-2 text-[11px] tracking-[0.14em] uppercase text-[#E8D1B8]">
                Katosi Waterfront · Lake Victoria
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8D1B8] mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-xs font-medium tracking-[0.14em] uppercase text-[#F5F1EB]/85 hover:text-[#E8D1B8] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location, Google Maps Directions & Call Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8D1B8] mb-5">
              Visit &amp; Directions
            </h3>

            <div className="flex items-start gap-2.5 text-sm text-[#F5F1EB]/85">
              <MapPin className="w-4 h-4 text-[#77AEB5] mt-0.5 shrink-0" aria-hidden="true" />
              <span>{RESORT_CONFIG.locationLabel}</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={RESORT_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#245D61] text-white rounded-sm hover:bg-[#77AEB5] hover:text-[#292724] transition-colors whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              {hasPhone ? (
                <a
                  href={`tel:${RESORT_CONFIG.phoneNumber.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase border border-white/40 text-white rounded-sm hover:bg-white hover:text-[#292724] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Call Us · {RESORT_CONFIG.phoneNumber}</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenBooking('Call Back / Visit Inquiry')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase border border-white/40 text-white rounded-sm hover:bg-white hover:text-[#292724] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Call Us / Request Callback</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 4: Prominent Social Media Platforms */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8D1B8] mb-5">
              Connect With Us
            </h3>
            <p className="text-xs leading-relaxed text-[#F5F1EB]/75 mb-4">
              Follow H.M Golden Beach Katosi for lakeside moments, weekend updates, and seasonal
              gatherings.
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform.name} — ${platform.handle}`}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm bg-white/10 border border-white/15 text-white hover:bg-[#E8D1B8] hover:text-[#292724] hover:border-[#E8D1B8] transition-colors duration-150"
                >
                  <SocialIcon id={platform.id} />
                  <span className="text-xs font-semibold tracking-[0.06em] truncate">
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1EB]/65">
          <p>&copy; {new Date().getFullYear()} H.M Golden Beach Katosi. All rights reserved.</p>
          <p className="tracking-[0.12em] uppercase text-[11px] text-[#E8D1B8]/80">
            Katosi, Mukono District · Lake Victoria
          </p>
        </div>
      </div>
    </footer>
  );
}
