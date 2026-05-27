import { authorList, projectAutoral } from '@/lib/data';

export function Hero() {
  return (
    <section className="max-w-page mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <p className="text-[11px] uppercase tracking-editorial text-muted mb-6">
        {projectAutoral.subtitle}
      </p>
      <h1 className="font-serif font-light text-[clamp(3rem,10vw,8rem)] leading-none tracking-tightest">
        {projectAutoral.title}
      </h1>
      <p className="mt-5 text-[11px] sm:text-xs uppercase tracking-editorial text-muted">
        {authorList.map((a) => a.name).join(' · ')}
      </p>
      <div className="mt-8 max-w-prose text-ink/80 leading-relaxed text-base md:text-lg">
        <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.9]">
          {projectAutoral.statement[0]}
        </p>
      </div>
    </section>
  );
}
