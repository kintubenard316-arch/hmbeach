import { useState } from 'react';
import { Palmtree } from 'lucide-react';

interface ResortImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ResortImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  loading = 'lazy',
}: ResortImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#245D61] via-[#3A7B80] to-[#E8D1B8] text-white p-6 text-center"
      >
        <Palmtree className="w-7 h-7 opacity-85" aria-hidden="true" />
        <span className="text-xs font-medium tracking-widest uppercase opacity-90">
          {fallbackLabel || 'H.M Golden Beach Katosi'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
