'use client';

import { authors, type Photo } from '@/lib/data';
import { asset } from '@/lib/paths';

type Props = {
  photo: Photo;
  index: number;
  onClick?: (index: number) => void;
  hideAuthor?: boolean;
};

export function PhotoCard({ photo, index, onClick, hideAuthor }: Props) {
  const author = authors[photo.author];

  return (
    <figure className="group flex flex-col gap-3">
      <button
        type="button"
        onClick={() => onClick?.(index)}
        className="block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink overflow-hidden bg-ink/5"
        aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(photo.src)}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              const parent = el.parentElement;
              el.style.display = 'none';
              if (parent && !parent.querySelector('[data-placeholder]')) {
                const ph = document.createElement('div');
                ph.setAttribute('data-placeholder', 'true');
                ph.className =
                  'h-full w-full flex items-center justify-center text-muted text-xs uppercase tracking-editorial';
                ph.style.background =
                  'repeating-linear-gradient(45deg, #e8e3d8, #e8e3d8 10px, #ded8c9 10px, #ded8c9 20px)';
                ph.textContent = photo.title ?? `Foto ${index + 1}`;
                parent.appendChild(ph);
              }
            }}
          />
        </div>
      </button>
      <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[11px] uppercase tracking-editorial text-muted">
        <span className="font-serif italic normal-case tracking-normal text-ink/70 text-xs">
          {String(index + 1).padStart(2, '0')}
        </span>
        {!hideAuthor && (
          <span className="text-ink/60">{author.name.split(' ')[0]} {author.name.split(' ').slice(-2, -1)[0] ?? ''}</span>
        )}
        {photo.title && (
          <>
            {!hideAuthor && <span className="text-muted/60">·</span>}
            <span className="italic normal-case tracking-normal text-ink/70 font-serif text-xs">
              {photo.title}
            </span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
