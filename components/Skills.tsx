'use client';

import Section from './Section';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">
        The <em className="not-italic text-sage">toolbox</em>.
      </h2>

      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {skills.map((g) => (
          <div
            key={g.category}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-6 items-start"
          >
            <h3 className="font-serif text-xl text-sage">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item.name}
                  className="text-sm px-3 py-1 rounded-full bg-[var(--bg-hover)] text-[var(--fg-muted)] inline-flex items-center gap-1.5"
                >
                  {item.icon && (
                    <img
                      src={`https://cdn.simpleicons.org/${item.icon}`}
                      alt=""
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
