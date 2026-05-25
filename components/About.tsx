'use client';

import Image from 'next/image';
import Section from './Section';

export default function About() {
  return (
    <Section id="about">
      <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">
        A bit <em className="not-italic text-coral">about me</em>.
      </h2>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="space-y-5 text-[var(--fg-muted)] leading-relaxed">
          <p>
            I started writing code when I was in 9th grade because I was curious how websites worked and 
            I wanted to make a website as a project. That curiosity stuck around. These days I spend 
            most of my time building interfaces in React and Next.js. I care a lot about the details 
            of how things look and feel, and I try to bring that care to my work as much as I can.
          </p>
          <p>
            On the other hand, I'm also fascinated by AI/ML technology especially the moments when a
            model does something surprising and you have to go figure out why. I'm currently
            studying CS, working on projects, and looking for an opportunity where I can keep
            getting better.
          </p>
        </div>

        <div className="aspect-square relative">
          <Image
            src="/illustration.svg"
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
