'use client';

import { authors, type Photo } from '@/lib/data';
import { asset } from '@/lib/paths';

type Props = {
  photo: Photo;
  index: number;
  onClick?: (index: number) => void;
};

export function PhotoCard({ photo, index, onClick }: Props) {
  const author = authors[photo.author];
  const firstName = author.name.split(' ')[0];
  const lastName = author.name.split(' ').slice(-2, -1)[0] ?? '';

  return (
    <figure className="group relative overflow-hidden bg-ink/5">
      <button
        type="button"
        onClick={() => onClick?.(index)}
        className="block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        aria-label={`Abrir ${photo.title ?? photo.alt} en pantalla completa`}
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(photo.src)}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:rotate-[0.2deg]"
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
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div>
          {photo.title && (
            <p className="font-serif text-sm italic leading-tight">
              {photo.title}
            </p>
          )}
          <p className="text-[10px] uppercase tracking-editorial mt-0.5 text-paper/85">
            {firstName} {lastName}
          </p>
        </div>
        <span className="font-serif text-xs text-paper/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </figcaption>
    </figure>
  );
}
