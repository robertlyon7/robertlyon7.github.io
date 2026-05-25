import Image from 'next/image';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 transition-all duration-300 hover:bg-[var(--bg-hover)] overflow-hidden">
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      <div className="flex gap-5 md:gap-6">
        {p.image && (
          <div className="shrink-0 w-56 md:w-80 aspect-video rounded-xl overflow-hidden relative bg-[var(--bg-hover)] border border-[var(--border)]">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width: 768px) 320px, 224px"
              className="object-contain"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          {p.categories && p.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {p.categories.map((c) => (
                <span
                  key={c}
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-accent/10 text-amber-accent"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
            <h3 className="font-serif font-light text-2xl">{p.title}</h3>
            <div className="flex gap-4 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  className="text-[var(--fg-muted)] hover:text-amber-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              )}
              {p.paper && (
                <a
                  href={p.paper}
                  className="text-[var(--fg-muted)] hover:text-amber-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paper ↗
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  className="text-[var(--fg-muted)] hover:text-amber-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>

          <p className="text-[var(--fg-muted)] leading-relaxed mb-4">{p.description}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-amber-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
