'use client';

import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <div className="max-w-xl mx-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-10 md:p-14">
        <h2 className="font-serif font-light text-3xl md:text-4xl mb-4">
          Let's <em className="not-italic text-lavender">work together</em>.
        </h2>
        <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
          I'm always up for a chat. Whether if its about an internship or a side project. 
          The fastest way to reach me is email.
        </p>

        <a
          href="mailto:bobbyistanto@gmail.com"
          className="inline-block font-serif text-xl text-lavender hover:underline underline-offset-4 mb-8"
        >
          bobbyistanto@gmail.com
        </a>

        <div className="flex justify-center gap-6 text-sm">
          <a href="https://github.com/robertlyon7" className="text-[var(--fg-muted)] hover:text-lavender transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/robertlyon7" className="text-[var(--fg-muted)] hover:text-lavender transition-colors">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1IbFeMStkrC2IjoM7Z0FDqCrN4enoPzhW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[var(--fg-muted)] hover:text-lavender transition-colors">
            Resume
          </a>
        </div>
      </div>

      <p className="text-xs text-[var(--fg-muted)] mt-12">
        © {new Date().getFullYear()} Robert Lyon.
      </p>
    </Section>
  );
}
