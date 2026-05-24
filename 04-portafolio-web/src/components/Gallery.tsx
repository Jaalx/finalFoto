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
}: {
  photos: Photo[];
  hideAuthor?: boolean;
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
