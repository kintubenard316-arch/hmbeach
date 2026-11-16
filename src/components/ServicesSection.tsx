import { ArrowRight } from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/resortData';
import { ResortImage } from './ResortImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F5F1EB] border-t border-[#292724]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#245D61]">
            WHAT WE OFFER
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#292724]">
            Our Services
          </h2>
        </div>

        {/* Three Horizontally Arranged Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#292724]/10 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Wide Landscape Photograph */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8D1B8]/40">
                <ResortImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body & Bottom Title / Explore Link Row */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <p className="text-sm leading-relaxed text-[#292724]/80">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[#292724]/10 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-medium text-[#292724] leading-snug">
                    {service.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.06em] text-[#245D61] hover:text-[#292724] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61] rounded-sm py-1"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
