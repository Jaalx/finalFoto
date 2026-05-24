import { authors, type Project } from '@/lib/data';
import { GalleryGrid } from './Gallery';

type Props = {
  project: Project;
  index: number;
};

export function ProjectSection({ project, index }: Props) {
  const authorNames = project.authors
    .map((id) => authors[id].name)
    .join(' · ');

  const isCollab = project.authors.length > 1;

  return (
    <section className="max-w-page mx-auto px-6 py-16 border-t border-rule">
      <div className="grid md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-editorial text-muted">
            Proyecto {String(index + 1).padStart(2, '0')}
          </p>
          <p className="text-[11px] uppercase tracking-editorial text-muted mt-1">
            {isCollab ? 'En pareja' : 'Individual'}
          </p>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="text-sm text-muted mt-2 uppercase tracking-editorial">
            {authorNames}
          </p>
          {project.description && (
            <p className="mt-5 text-ink/70 leading-relaxed max-w-prose">
              {project.description}
            </p>
          )}
        </div>
      </div>
      <GalleryGrid photos={project.photos} />
    </section>
  );
}
