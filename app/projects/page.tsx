import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectsFilter from '@/components/ProjectsFilter';
import CursorGlow from '@/components/CursorGlow';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects · Robert Lyon',
};

export default function ProjectsPage() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/#projects"
          className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          ← Back
        </Link>

        <h1 className="font-serif font-light text-4xl md:text-5xl mt-6 mb-4">
          All <em className="not-italic text-amber-accent">projects</em>.
        </h1>
        <p className="text-[var(--fg-muted)] leading-relaxed mb-12">
          Everything I've shipped, prototyped, or wrestled with — in roughly reverse-chronological order.
        </p>

        <ProjectsFilter projects={projects} />
      </div>
    </main>
  );
}
