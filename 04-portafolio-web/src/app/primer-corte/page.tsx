import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { FadeIn } from '@/components/FadeIn';
import { primerCortePhotos } from '@/lib/data';

export const metadata = {
  title: 'Primer corte · El tiempo',
};

export default function PrimerCortePage() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-page mx-auto px-6 pt-24 pb-12 md:pt-32">
          <p className="text-[11px] uppercase tracking-editorial text-muted mb-6">
            Trabajos previos
          </p>
          <h1 className="font-serif font-light text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tightest">
            Primer corte
          </h1>
          <p className="mt-6 max-w-prose text-ink/70 leading-relaxed">
            Selección de trabajos del primer corte del semestre. Cada imagen
            firma su autor.
          </p>
        </section>
        <FadeIn>
          <Gallery photos={primerCortePhotos} />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
