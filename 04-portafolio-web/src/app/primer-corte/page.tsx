import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectSection } from '@/components/ProjectSection';
import { FadeIn } from '@/components/FadeIn';
import { primerCorteProjects } from '@/lib/data';

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
            Tres proyectos del grupo en distintas configuraciones de autoría:
            dos trabajos individuales y uno realizado en pareja.
          </p>
        </section>
        {primerCorteProjects.map((project, i) => (
          <FadeIn key={project.id}>
            <ProjectSection project={project} index={i} />
          </FadeIn>
        ))}
      </main>
      <Footer />
    </>
  );
}
