import { Ship, Sunset, Users, Waves } from 'lucide-react';
import { EXPERIENCES, type ExperienceItem } from '../data/resortData';
import { ResortImage } from './ResortImage';

interface ExperiencesSectionProps {
  onSelectExperience: (experience: ExperienceItem) => void;
}

function ExperienceIcon({ name }: { name: ExperienceItem['iconName'] }) {
  switch (name) {
    case 'waves':
      return <Waves className="w-5 h-5 text-white shrink-0" aria-hidden="true" />;
    case 'ship':
      return <Ship className="w-5 h-5 text-white shrink-0" aria-hidden="true" />;
    case 'users':
      return <Users className="w-5 h-5 text-white shrink-0" aria-hidden="true" />;
    case 'sunset':
      return <Sunset className="w-5 h-5 text-white shrink-0" aria-hidden="true" />;
  }
}

export function ExperiencesSection({ onSelectExperience }: ExperiencesSectionProps) {
  return (
    <section id="experiences" className="py-12 lg:py-16 bg-[#E8D1B8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#292724]">
            EXPERIENCES
          </span>
        </div>

        {/* Four Rectangular Image Banners Arranged Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              type="button"
              onClick={() => onSelectExperience(exp)}
              className="group relative h-36 sm:h-40 w-full rounded-lg overflow-hidden text-left shadow-sm border border-[#292724]/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61]"
            >
              <ResortImage
                src={exp.image}
                alt={exp.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />

              {/* Dark Translucent Label Area on the Left */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#292724]/88 via-[#292724]/65 to-transparent"
              />

              <div className="absolute inset-y-0 left-0 flex flex-col justify-center gap-2 pl-5 pr-4 max-w-[75%]">
                <ExperienceIcon name={exp.iconName} />
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white leading-snug">
                  {exp.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
