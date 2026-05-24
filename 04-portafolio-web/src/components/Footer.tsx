import { authorList, year } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-rule mt-32">
      <div className="max-w-page mx-auto px-6 py-12 flex flex-col gap-6">
        <div className="text-xs uppercase tracking-editorial text-muted">
          © {year} · El tiempo
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/70">
          {authorList.map((a) => (
            <li key={a.id} className="leading-snug">
              {a.name}
              <span className="text-muted ml-2 text-xs">{a.code}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted max-w-prose leading-relaxed">
          Proyecto del tercer corte. Las imágenes de este sitio son de autoría
          de sus respectivos integrantes y se publican únicamente con fines
          académicos.
        </p>
      </div>
    </footer>
  );
}
