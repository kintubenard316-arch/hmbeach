import { ArrowRight } from 'lucide-react';
import { STAY_OPTIONS, type StayOption } from '../data/resortData';
import { ResortImage } from './ResortImage';

interface AccommodationSectionProps {
  onCheckAvailability: () => void;
  onSelectStay: (stay: StayOption) => void;
}

export function AccommodationSection({
  onCheckAvailability,
  onSelectStay,
}: AccommodationSectionProps) {
  return (
    <section id="accommodation" className="py-20 lg:py-28 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Stay With Us Editorial Copy & Outlined CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#245D61]">
              STAY WITH US
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.18] text-[#292724]">
              Stay With Us
            </h2>

            <p className="mt-6 text-[15px] sm:text-base leading-[1.75] text-[#292724]/80 max-w-lg">
              Make your visit even more memorable. Enjoy a peaceful lakeside escape with our on-site
              accommodation and camping facilities. Whether you&apos;re staying overnight or
              enjoying a weekend getaway, experience the beauty of Lake Victoria.
            </p>

            <button
              type="button"
              onClick={onCheckAvailability}
              className="mt-8 inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#245D61] border border-[#245D61] rounded-sm hover:bg-[#245D61] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61]"
            >
              CHECK AVAILABILITY
            </button>
          </div>

          {/* Right Column: Two Large Side-by-Side Image Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STAY_OPTIONS.map((stay) => (
              <article
                key={stay.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#292724]/10 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div className="aspect-[4/3] sm:aspect-[4/4] w-full overflow-hidden bg-[#E8D1B8]/40">
                  <ResortImage
                    src={stay.image}
                    alt={stay.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 flex items-center justify-between gap-3 bg-white">
                  <h3 className="font-display text-xl font-medium text-[#292724]">
                    {stay.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() => onSelectStay(stay)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.06em] text-[#245D61] hover:text-[#292724] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61] rounded-sm py-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
