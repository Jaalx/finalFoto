import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { href } from '@/lib/paths';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="max-w-page mx-auto px-6 py-5 flex items-center justify-between">
        <Link href={href('/')} className="group inline-flex items-baseline gap-3">
          <span className="font-serif text-lg tracking-tight">El tiempo</span>
          <span className="text-[10px] uppercase tracking-editorial text-muted hidden sm:inline">
            Portafolio
          </span>
        </Link>

        {/* Desktop nav (md+) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs uppercase tracking-editorial">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={href(link.href)}
                  className="text-ink/70 hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav (<md) */}
        <MobileNav />
      </div>
    </header>
  );
}
