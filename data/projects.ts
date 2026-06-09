export type Project = {
  title: string;
  description: string;
  tags: string[];
  categories?: string[];
  image?: string;
  github?: string;
  live?: string;
  paper?: string;
};

export const projects: Project[] = [
  {
    title: 'Stepping Stone',
    description:
      'A web platform that helps university students build their professional presence — offering services for crafting resumes, portfolios, and LinkedIn profiles to kickstart their careers.',
    tags: ['Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
    categories: ['Frontend Web'],
    image: '/projects/steppstone.jpeg',
    github: 'https://github.com/robertlyon7/Stepping-Stone',
    live: 'https://steppstone.vercel.app/',
  },
  {
    title: 'Bahasa Buddy',
    description:
      'A language learning web app that helps users practice Indonesian through interactive exercises and real-life scenarios. Built with a custom AI chatbot tutor and spaced repetition flashcards.',
    tags: ['Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
    categories: ['Frontend Web'],
    image: '/projects/BahasaBuddy.png',
    github: 'https://github.com/robertlyon7/BahasaBuddy',
    live: 'https://bahasa-buddy.vercel.app/',
  },
  {
    title: 'Explore Bali',
    description:
      'An informative website about the beauty and culture of Bali, featuring travel tips, local cuisine, and hidden gems.',
    tags: ['Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
    categories: ['Frontend Web'],
    image: '/projects/ExploreBali.png',
    github: 'https://github.com/robertlyon7/ExploreBali',
    live: 'https://explorebali.vercel.app/',
  },
  {
    title: 'Automated Car Damage Segmentation for Insurance Claims',
    description:
      'A machine learning project that uses computer vision to automatically segment and assess car damage from photos, streamlining the insurance claims process and improving accuracy.',
    tags: ['Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
    categories: ['AI/ML'],
    paper: 'https://drive.google.com/file/d/1nKjdgoug95QEKiQwAPJ5yigH0UYL3kf8/view?usp=drive_link',
  },
  {
    title: 'Semantic Anime Recommendation System',
    description:
      'A machine learning project that recommends anime based on user preferences and semantic analysis of descriptions.',
    tags: ['Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'],
    categories: ['AI/ML'],
    paper: 'https://drive.google.com/file/d/1VXs36WJ1l_M_s53OeVZ0boy8v8x1qM1i/view?usp=drive_link',
  },
];
