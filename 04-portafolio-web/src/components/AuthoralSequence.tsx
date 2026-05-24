'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { authors, type Photo } from '@/lib/data';
import { asset } from '@/lib/paths';
import { cn } from '@/lib/utils';

type Props = {
  photos: Photo[];
};

export function AuthoralSequence({ photos }: Props) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const slides = photos.map((photo) => {
    const author = authors[photo.author];
    return {
      src: asset(photo.src),
      alt: photo.alt,
      title: photo.title,
      description: author.name,
    };
  });

  return (
    <section className="max-w-page mx-auto px-6 py-20 border-t border-rule">
      <div className="md:grid md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-editorial text-muted">
            Serie
          </p>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <p className="text-ink/70 leading-relaxed max-w-prose">
            Doce fotografías ordenadas como una secuencia. Cuatro destacadas
            traen consigo la intención de su autor. El resto se sostiene en
            su silencio.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {photos.map((photo, i) => (
          <Frame
            key={photo.id}
            photo={photo}
            index={i}
            onOpen={() => setIndex(i)}
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
    </section>
  );
}

function Frame({
  photo,
  index,
  onOpen,
}: {
  photo: Photo;
  index: number;
  onOpen: () => void;
}) {
  const author = authors[photo.author];
  const hasNote = !!photo.note;
  const numberLabel = String(index + 1).padStart(2, '0');

  return (
    <article
      className={cn(
        'grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-8 items-start',
      )}
    >
      <div
        className={cn(
          'md:col-span-12',
          hasNote && 'md:col-span-8',
        )}
      >
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
          className="block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink overflow-hidden bg-ink/5"
        >
          <div
            className={cn(
              'w-full overflow-hidden',
              hasNote ? 'aspect-[4/5]' : 'aspect-[3/2]',
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(photo.src)}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                const parent = el.parentElement;
                el.style.display = 'none';
                if (parent && !parent.querySelector('[data-placeholder]')) {
                  const ph = document.createElement('div');
                  ph.setAttribute('data-placeholder', 'true');
                  ph.className =
                    'h-full w-full flex items-center justify-center text-muted text-sm uppercase tracking-editorial';
                  ph.style.background =
                    'repeating-linear-gradient(45deg, #e8e3d8, #e8e3d8 12px, #ded8c9 12px, #ded8c9 24px)';
                  ph.textContent = photo.title ?? `Foto ${index + 1}`;
                  parent.appendChild(ph);
                }
              }}
            />
          </div>
        </button>
        <figcaption className="mt-4 flex items-baseline gap-3 text-sm">
          <span className="font-serif italic text-ink/60 text-base leading-none">
            {numberLabel}
          </span>
          <span className="text-[11px] uppercase tracking-editorial text-muted">
            {author.name}
          </span>
          {photo.title && (
            <>
              <span className="text-muted/50">·</span>
              <span className="font-serif italic text-ink/80 text-base leading-none">
                {photo.title}
              </span>
            </>
          )}
        </figcaption>
      </div>

      {hasNote && (
        <aside className="md:col-span-4 md:pt-2">
          <p className="text-[10px] uppercase tracking-editorial text-muted mb-3">
            Por qué se hizo
          </p>
          <p className="font-serif italic text-ink/80 text-lg md:text-xl leading-relaxed">
            {photo.note}
          </p>
        </aside>
      )}
    </article>
  );
}
