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

  const featured = photos.filter((p) => p.note);
  const rest = photos.filter((p) => !p.note);
  const ordered = [...featured, ...rest];

  const slides = ordered.map((photo) => {
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
            Once fotografías ordenadas como una secuencia. Tres destacadas
            traen consigo la intención de su autor. El resto se sostiene
            en su silencio.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-24 md:gap-32 mb-24 md:mb-32">
        {featured.map((photo, i) => (
          <Frame
            key={photo.id}
            photo={photo}
            index={i}
            onOpen={() => setIndex(i)}
          />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <div className="md:grid md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-editorial text-muted">
                Resto de la serie
              </p>
            </div>
          </div>
          <BentoGrid
            photos={rest}
            startIndex={featured.length}
            onOpen={(absIdx) => setIndex(absIdx)}
          />
        </>
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
  const numberLabel = String(index + 1).padStart(2, '0');

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-8 items-start">
      <div className="md:col-span-8">
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
          className="block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <div className="relative w-full overflow-hidden bg-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(photo.src)}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.015]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
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

      <aside className="md:col-span-4 md:pt-2">
        <p className="text-[10px] uppercase tracking-editorial text-muted mb-3">
          Por qué se hizo
        </p>
        <p className="font-serif italic text-ink/80 text-lg md:text-xl leading-relaxed">
          {photo.note}
        </p>
      </aside>
    </article>
  );
}

const BENTO_PATTERNS = [
  'col-span-2 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
];

function BentoGrid({
  photos,
  startIndex,
  onOpen,
}: {
  photos: Photo[];
  startIndex: number;
  onOpen: (absoluteIndex: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[170px] md:auto-rows-[180px] gap-3 md:gap-4 [grid-auto-flow:dense]">
      {photos.map((photo, i) => {
        const cls = BENTO_PATTERNS[i % BENTO_PATTERNS.length];
        return (
          <BentoTile
            key={photo.id}
            photo={photo}
            className={cls}
            onOpen={() => onOpen(startIndex + i)}
          />
        );
      })}
    </div>
  );
}

function BentoTile({
  photo,
  className,
  onOpen,
}: {
  photo: Photo;
  className: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
      className={cn(
        'group relative block overflow-hidden bg-paper cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink',
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(photo.src)}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
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

function Placeholder({
  number,
  title,
  large,
}: {
  number: string;
  title?: string;
  large?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-paper border border-rule/60 text-center px-4">
      <span
        className={cn(
          'font-serif italic text-ink/15',
          large ? 'text-7xl md:text-8xl' : 'text-4xl md:text-5xl',
        )}
      >
        {number}
      </span>
      {title && (
        <span
          className={cn(
            'text-muted/80 uppercase tracking-editorial',
            large ? 'text-xs' : 'text-[10px]',
          )}
        >
          {title}
        </span>
      )}
      <span
        className={cn(
          'text-muted/50 uppercase tracking-editorial',
          large ? 'text-[10px] mt-2' : 'text-[8px] mt-1',
        )}
      >
        imagen pendiente
      </span>
    </div>
  );
}
