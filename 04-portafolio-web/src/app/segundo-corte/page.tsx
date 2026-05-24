import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectSection } from '@/components/ProjectSection';
import { FadeIn } from '@/components/FadeIn';
import { segundoCorteProjects } from '@/lib/data';

export const metadata = {
  title: 'Segundo corte · El tiempo',
};

export default function SegundoCortePage() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-page mx-auto px-6 pt-24 pb-12 md:pt-32">
          <p className="text-[11px] uppercase tracking-editorial text-muted mb-6">
            Trabajos previos
          </p>
          <h1 className="font-serif font-light text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tightest">
            Segundo corte
          </h1>
          <p className="mt-6 max-w-prose text-ink/70 leading-relaxed">
            Una serie grupal y una actividad de color en escenas urbanas
            donde cada integrante trabajó su propio matiz.
          </p>
        </section>
        {segundoCorteProjects.map((project, i) => (
          <FadeIn key={project.id}>
            <ProjectSection project={project} index={i} />
          </FadeIn>
        ))}
      </main>
      <Footer />
    </>
  );
}
