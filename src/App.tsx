/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AccommodationSection } from './components/AccommodationSection';
import { BookingModal } from './components/BookingModal';
import { DetailItem, DetailModal } from './components/DetailModal';
import { ExperiencesSection } from './components/ExperiencesSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import type { ExperienceItem, ServiceItem, StayOption } from './data/resortData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState<string | undefined>(undefined);
  const [detailItem, setDetailItem] = useState<DetailItem | null>(null);

  const handleOpenBooking = (topic?: string) => {
    setBookingTopic(topic);
    setBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setDetailItem({
      categoryLabel: 'Resort Service',
      title: service.title,
      description: service.description,
      image: service.image,
      imageAlt: service.imageAlt,
      highlights: service.highlights,
    });
  };

  const handleSelectExperience = (experience: ExperienceItem) => {
    setDetailItem({
      categoryLabel: 'Lake Victoria Experience',
      title: experience.title,
      description: experience.summary,
      image: experience.image,
      imageAlt: experience.imageAlt,
    });
  };

  const handleSelectStay = (stay: StayOption) => {
    setDetailItem({
      categoryLabel: 'Stay With Us',
      title: stay.title,
      description: stay.description,
      image: stay.image,
      imageAlt: stay.imageAlt,
      highlights: stay.highlights,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1EB] text-[#292724]">
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <HeroSection onOpenBooking={handleOpenBooking} />
        <IntroSection />
        <ServicesSection onSelectService={handleSelectService} />
        <ExperiencesSection onSelectExperience={handleSelectExperience} />
        <AccommodationSection
          onCheckAvailability={() => handleOpenBooking('Accommodation')}
          onSelectStay={handleSelectStay}
        />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <DetailModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        onBookTopic={(topic) => handleOpenBooking(topic)}
      />

      <BookingModal
        isOpen={bookingOpen}
        initialTopic={bookingTopic}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
