import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { Gallery } from '@/components/Gallery';
import { BioSection } from '@/components/BioSection';
import { FadeIn } from '@/components/FadeIn';
import { autoralPhotos } from '@/lib/data';

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
          <Gallery
            photos={autoralPhotos}
            label="12 fotografías · autoría individual marcada"
          />
        </FadeIn>
        <FadeIn>
          <BioSection />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
