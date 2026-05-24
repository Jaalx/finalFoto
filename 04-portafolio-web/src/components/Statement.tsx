import { projectAutoral } from '@/lib/data';

export function Statement() {
  const [, ...rest] = projectAutoral.statement;
  return (
    <section className="max-w-page mx-auto px-6 py-16 border-t border-rule">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-editorial text-muted">
            Statement
          </p>
        </div>
        <div className="md:col-span-8 md:col-start-5 space-y-5 max-w-prose text-ink/80 leading-relaxed">
          {rest.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
