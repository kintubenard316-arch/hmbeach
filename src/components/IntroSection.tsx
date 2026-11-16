import { RESORT_CONFIG } from '../data/resortData';
import { ResortImage } from './ResortImage';

export function IntroSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#245D61]">
              ABOUT US
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.18] text-[#292724]">
              Discover H.M Golden Beach
            </h2>

            <p className="mt-6 text-[15px] sm:text-base leading-[1.75] text-[#292724]/80 max-w-xl">
              H.M Golden Beach Katosi is a lakeside beach resort and recreational getaway located
              along the beautiful shores of Lake Victoria in Katosi, Mukono District. Whether
              you&apos;re planning a relaxing day out, a family adventure, a group outing, or a
              peaceful weekend getaway, we offer a welcoming waterfront experience.
            </p>
          </div>

          {/* Right Column: Panoramic Lakeside Photograph with Subtle Location Overlay */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-72 sm:h-96 lg:h-full lg:min-h-[380px] rounded-xl overflow-hidden shadow-md border border-[#292724]/10">
              <ResortImage
                src={RESORT_CONFIG.assets.introShore}
                alt="Panoramic view of sandy beachfront and lush shoreline along Lake Victoria in Katosi"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#292724]/80 via-[#292724]/15 to-transparent"
              />
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 text-white">
                <p className="font-display text-base sm:text-lg font-medium tracking-[0.14em] uppercase">
                  H.M GOLDEN BEACH
                </p>
                <p className="mt-0.5 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#E8D1B8]">
                  KATOSI – LAKE VICTORIA
                </p>
                <p className="mt-0.5 text-[11px] tracking-[0.22em] uppercase text-white/85">
                  UGANDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
