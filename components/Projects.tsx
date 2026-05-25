'use client';

import Link from 'next/link';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <Section id="projects">
      <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">
        Things I've <em className="not-italic text-amber-accent">built</em>.
      </h2>

      <div className="space-y-6">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {projects.length > featured.length && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="text-sm px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            View all projects →
          </Link>
        </div>
      )}
    </Section>
  );
}
