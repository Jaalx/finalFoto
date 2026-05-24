'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { href } from '@/lib/paths';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Cierra el menu al presionar Escape y bloquea scroll del body
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line
            x1="3"
            y1="6"
            x2="19"
            y2="6"
            className={cn(
              'transition-transform origin-center',
              open && 'translate-y-[5px] rotate-45',
            )}
          />
          <line
            x1="3"
            y1="11"
            x2="19"
            y2="11"
            className={cn('transition-opacity', open && 'opacity-0')}
          />
          <line
            x1="3"
            y1="16"
            x2="19"
            y2="16"
            className={cn(
              'transition-transform origin-center',
              open && '-translate-y-[5px] -rotate-45',
            )}
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-paper/95 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.nav
            key="drawer"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-[60px] z-50 bg-paper border-t border-rule px-6 py-8"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-2xl text-ink/90 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
