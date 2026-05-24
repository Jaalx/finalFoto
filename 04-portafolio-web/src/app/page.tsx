import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { AuthoralSequence } from '@/components/AuthoralSequence';
import { FadeIn } from '@/components/FadeIn';
import TeamShowcase from '@/components/ui/team-showcase';
import { autoralPhotos, teamMembers } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Statement />
        </FadeIn>
        <FadeIn delay={0.05}>
          <AuthoralSequence photos={autoralPhotos} />
        </FadeIn>
        <FadeIn>
          <section className="border-t border-rule pt-16 pb-8">
            <p className="text-[11px] uppercase tracking-editorial text-muted text-center mb-2">
              Autores
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tightest text-center mb-2">
              Quienes miran
            </h2>
            <TeamShowcase members={teamMembers} />
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
