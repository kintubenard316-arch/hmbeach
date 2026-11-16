import { RESORT_CONFIG } from '../data/resortData';
import { ResortImage } from './ResortImage';

interface HeroSectionProps {
  onOpenBooking: (presetTopic?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#292724]"
    >
      {/* Full-Bleed Lakeside Beach Photograph */}
      <div className="absolute inset-0">
        <ResortImage
          src={RESORT_CONFIG.assets.headerHero}
          alt="Golden hour shoreline at H.M Golden Beach Katosi overlooking Lake Victoria"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured Contrast Scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#292724]/60 via-[#292724]/40 to-[#292724]/75"
        />
      </div>

      {/* Centered Editorial Hero Copy & CTAs */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center text-white">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.12] tracking-tight text-white drop-shadow-sm">
          Escape to the Beauty of Lake Victoria.
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#F5F1EB]/95 leading-relaxed font-normal">
          Discover relaxation, adventure, and unforgettable moments at H.M Golden Beach Katosi.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase bg-[#245D61] text-white rounded-sm hover:bg-[#1c4b4e] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            Explore Our Services
          </button>

          <button
            type="button"
            onClick={() => onOpenBooking('Plan Your Visit')}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase bg-white/10 backdrop-blur-sm text-white border border-white/80 rounded-sm hover:bg-white hover:text-[#292724] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            Plan Your Visit
          </button>
        </div>
      </div>
    </section>
  );
}
