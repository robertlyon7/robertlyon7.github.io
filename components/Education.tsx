'use client';

import Section from './Section';
import { education } from '@/data/education';

export default function Education() {
  return (
    <Section id="education">
      <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">
        Where I've <em className="not-italic text-teal">studied</em>.
      </h2>

      <ul className="space-y-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/40 backdrop-blur-sm p-8 md:p-10">
        {education.map((e) => (
          <li key={e.institution} className="flex gap-4 md:gap-6">
            <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-8">
              <p className="text-sm text-[var(--fg-muted)] font-mono whitespace-nowrap pt-0.5">
                {e.period}
              </p>
              <div className="space-y-0.5">
                <h3 className="text-[var(--fg)] font-medium">{e.institution}</h3>
                <p className="text-[var(--fg-muted)]">
                  {e.qualification} · {e.field}
                </p>
                <p className="text-sm text-[var(--fg-muted)]">{e.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
