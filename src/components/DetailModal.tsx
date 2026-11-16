import { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { ResortImage } from './ResortImage';

export interface DetailItem {
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights?: string[];
}

interface DetailModalProps {
  item: DetailItem | null;
  onClose: () => void;
  onBookTopic: (topic: string) => void;
}

export function DetailModal({ item, onClose, onBookTopic }: DetailModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292724]/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl overflow-hidden max-w-xl w-full shadow-2xl border border-[#292724]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60 sm:h-64 w-full bg-[#E8D1B8]/40">
          <ResortImage
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#292724]/65 via-transparent to-[#292724]/30"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#292724]/70 text-white hover:bg-[#292724] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#245D61]">
            {item.categoryLabel}
          </span>

          <h3
            id="detail-modal-title"
            className="mt-2 font-display text-2xl sm:text-3xl font-medium text-[#292724]"
          >
            {item.title}
          </h3>

          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#292724]/80">
            {item.description}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-5 space-y-2.5 border-t border-[#292724]/10 pt-5">
              {item.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-[#292724]/85"
                >
                  <Check className="w-4 h-4 text-[#245D61] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#292724]/75 hover:text-[#292724] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                const topic = item.title;
                onClose();
                onBookTopic(topic);
              }}
              className="px-6 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#245D61] text-white rounded-sm hover:bg-[#1c4b4e] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61]"
            >
              Inquire About This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
