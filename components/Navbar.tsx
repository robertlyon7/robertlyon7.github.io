'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#about', label: 'about' },
  { href: '/#projects', label: 'projects' },
  { href: '/#skills', label: 'skills' },
  { href: '/#education', label: 'education' },
  { href: '/#achievements', label: 'achievements' },
  { href: '/#contact', label: 'contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-[var(--bg)]/70 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="Robert Lyon" className="flex items-center">
          <Image
            src="/logo_navbar.svg"
            alt="Robert Lyon"
            width={36}
            height={36}
            className="w-9 h-9 dark:invert"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors"
        >
          {mounted && (
            <span className="text-sm">{theme === 'dark' ? '☾' : '☀'}</span>
          )}
        </button>
      </div>
    </nav>
  );
}
