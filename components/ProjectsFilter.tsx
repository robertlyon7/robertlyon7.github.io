'use client';

import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '@/data/projects';

const ALL = 'All';

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.categories?.forEach((c) => set.add(c)));
    return [ALL, ...Array.from(set).sort()];
  }, [projects]);

  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? projects : projects.filter((p) => p.categories?.includes(active));

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                  isActive
                    ? 'bg-amber-accent text-white border-amber-accent'
                    : 'border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-hover)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProjectCard key={p.title} project={p} />)
        ) : (
          <p className="text-[var(--fg-muted)] text-sm">No projects in this category yet.</p>
        )}
      </div>
    </>
  );
}
