'use client';

import Image from 'next/image';
import Section from './Section';
import { achievements } from '@/data/achievements';

export default function Achievements() {
  return (
    <Section id="achievements">
      <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">
        Things I'm <em className="not-italic text-rose">proud of</em>.
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <article
            key={a.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/40 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--bg-hover)]/50"
          >
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-rose scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

            <div className="relative flex aspect-[3/2] items-center justify-center border-b border-[var(--border)] bg-[var(--bg-hover)]/40 p-6">
              {a.image ? (
                <Image
                  src={a.image}
                  alt={`${a.title} certificate`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              ) : (
                <span className="font-serif text-5xl text-rose/40">★</span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="mb-3 inline-block w-fit rounded-full bg-rose/10 px-3 py-0.5 text-xs font-mono text-rose">
                {a.date}
              </span>
              <h3 className="font-serif text-xl leading-snug">{a.title}</h3>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{a.issuer}</p>
              {a.description && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {a.description}
                </p>
              )}
              <div className="mt-auto pt-4">
                {(a.link || a.image) && (
                  <a
                    href={a.link ?? a.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rose hover:underline underline-offset-4"
                  >
                    View certificate →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
