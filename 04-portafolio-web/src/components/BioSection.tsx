import { authorList } from '@/lib/data';

export function BioSection() {
  return (
    <section className="max-w-page mx-auto px-6 py-20 border-t border-rule">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-editorial text-muted">
            Autores
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tightest mt-2 leading-tight">
            Quienes miran
          </h2>
        </div>
        <ul className="md:col-span-8 md:col-start-5 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {authorList.map((a) => (
            <li key={a.id} className="flex flex-col gap-3">
              <div className="aspect-square w-20 bg-ink/5 border border-rule" />
              <div>
                <p className="font-serif text-lg leading-tight">{a.name}</p>
                <p className="text-[11px] uppercase tracking-editorial text-muted mt-1">
                  {a.code}
                </p>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed">
                {a.shortBio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
