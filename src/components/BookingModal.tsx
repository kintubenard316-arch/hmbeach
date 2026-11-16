import { FormEvent, useEffect, useState } from 'react';
import { Calendar, CheckCircle2, Copy, MapPin, Users, X } from 'lucide-react';
import { RESORT_CONFIG } from '../data/resortData';

interface BookingModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

const VISIT_CATEGORIES = [
  'Day Visit',
  'Water & Beach Recreation',
  'Wellness & Relaxation',
  'Dining & Entertainment',
  'Accommodation',
  'Camping Experience',
  'Group Outing / Event',
];

export function BookingModal({ isOpen, initialTopic, onClose }: BookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [visitType, setVisitType] = useState('Day Visit');
  const [preferredDate, setPreferredDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialTopic) {
        const matched = VISIT_CATEGORIES.find(
          (cat) => cat.toLowerCase() === initialTopic.toLowerCase()
        );
        setVisitType(matched || 'Day Visit');
        if (!matched && initialTopic !== 'Plan Your Visit') {
          setNotes(`Interested in: ${initialTopic}`);
        } else {
          setNotes('');
        }
      }
      setErrorMsg('');
      setSubmitted(false);
      setCopied(false);
    }
  }, [isOpen, initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateContact = (value: string) => {
    const trimmed = value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const isPhone = /^[+\d][\d\s()-]{6,}$/.test(trimmed);
    return isEmail || isPhone;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!validateContact(contactInfo)) {
      setErrorMsg('Please provide a valid phone number or email address.');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please select your preferred visit date.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const summaryText = `H.M Golden Beach Katosi Visit Request\nName: ${fullName}\nContact: ${contactInfo}\nInterest: ${visitType}\nPreferred Date: ${preferredDate}\nGuests: ${guests}${
    notes.trim() ? `\nNotes: ${notes.trim()}` : ''
  }`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292724]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F5F1EB] rounded-xl max-w-lg w-full shadow-2xl border border-[#292724]/15 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Banner */}
        <div className="bg-[#245D61] text-white px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8D1B8]">
              H.M GOLDEN BEACH KATOSI
            </span>
            <h3 id="booking-modal-title" className="mt-1 font-display text-2xl font-medium">
              Plan Your Visit
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D1B8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#245D61]/10 text-[#245D61] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="mt-4 font-display text-2xl font-medium text-[#292724]">
                Visit Request Prepared
              </h4>
              <p className="mt-2 text-sm text-[#292724]/80 leading-relaxed">
                Thank you, <span className="font-semibold text-[#292724]">{fullName}</span>. Your
                inquiry for <span className="font-semibold text-[#292724]">{visitType}</span> on{' '}
                <span className="font-semibold text-[#292724] tabular-nums">{preferredDate}</span>{' '}
                is ready.
              </p>

              <div className="mt-5 p-4 rounded-lg bg-white border border-[#292724]/10 text-left text-xs text-[#292724]/80 space-y-1.5">
                <p>
                  <span className="font-semibold text-[#292724]">Guests:</span>{' '}
                  <span className="tabular-nums">{guests}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#292724]">Contact:</span> {contactInfo}
                </p>
                {notes.trim() && (
                  <p>
                    <span className="font-semibold text-[#292724]">Notes:</span> {notes}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase border border-[#245D61] text-[#245D61] rounded-sm hover:bg-[#245D61] hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Summary Copied' : 'Copy Inquiry Details'}</span>
                </button>
                <a
                  href={RESORT_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#245D61] text-white rounded-sm hover:bg-[#1c4b4e] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 text-xs font-medium text-[#292724]/65 hover:text-[#292724] underline underline-offset-4 cursor-pointer"
              >
                Return to website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errorMsg && (
                <div
                  role="alert"
                  className="p-3 rounded-md bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                >
                  {errorMsg}
                </div>
              )}

              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] placeholder:text-[#292724]/40 focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61]"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-contact"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                >
                  Phone Number or Email
                </label>
                <input
                  id="booking-contact"
                  type="text"
                  required
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="e.g. +256 7XX XXX XXX or email@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] placeholder:text-[#292724]/40 focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61]"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-type"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                >
                  Visit or Stay Interest
                </label>
                <select
                  id="booking-type"
                  value={visitType}
                  onChange={(e) => setVisitType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61]"
                >
                  {VISIT_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="w-4 h-4 text-[#292724]/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] tabular-nums focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-guests"
                    className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                  >
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users
                      className="w-4 h-4 text-[#292724]/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="booking-guests"
                      type="number"
                      min={1}
                      max={200}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] tabular-nums focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#292724]/80 mb-1.5"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any questions about activities, group outings, or overnight stays..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292724]/20 rounded-sm text-[#292724] placeholder:text-[#292724]/40 focus:outline-none focus:border-[#245D61] focus:ring-1 focus:ring-[#245D61] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#292724]/70 hover:text-[#292724] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase bg-[#245D61] text-white rounded-sm hover:bg-[#1c4b4e] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D61]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
