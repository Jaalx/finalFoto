'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { authors, type Photo } from '@/lib/data';
import { asset } from '@/lib/paths';
import { PhotoCard } from './PhotoCard';

export function GalleryGrid({
  photos,
  hideAuthor,
  layout = 'grid',
}: {
  photos: Photo[];
  hideAuthor?: boolean;
  layout?: 'grid' | 'bento';
}) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const slides = photos.map((photo) => {
    const author = authors[photo.author];
    return {
      src: asset(photo.src),
      alt: photo.alt,
      title: photo.title,
      description: hideAuthor ? undefined : author.name,
    };
  });

  return (
    <>
      {layout === 'bento' ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <BentoTile
              key={photo.id}
              photo={photo}
              onOpen={() => setIndex(i)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((photo, idx) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={idx}
              onClick={(i) => setIndex(i)}
              hideAuthor={hideAuthor}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setIndex(-1)}
        index={index < 0 ? 0 : index}
        slides={slides}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: 'rgba(22, 21, 20, 0.96)' },
          slide: { padding: '4vh 4vw' },
        }}
        animation={{ fade: 250, swipe: 400 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}

function BentoTile({
  photo,
  onOpen,
}: {
  photo: Photo;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
      className="group relative block w-full mb-3 md:mb-4 overflow-hidden bg-paper cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink break-inside-avoid"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(photo.src)}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.display = 'none';
        }}
      />
      {photo.title && (
        <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-editorial text-paper bg-ink/55 px-2 py-1 rounded-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          {photo.title}
        </span>
      )}
    </button>
  );
}

export function Gallery({ photos, label }: { photos: Photo[]; label?: string }) {
  return (
    <section className="max-w-page mx-auto px-6 py-16 border-t border-rule">
      {label && (
        <p className="text-[11px] uppercase tracking-editorial text-muted mb-8">
          {label}
        </p>
      )}
      <GalleryGrid photos={photos} />
    </section>
  );
}
