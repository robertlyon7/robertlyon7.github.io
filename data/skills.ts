export type SkillItem = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'Hugging Face', icon: 'huggingface' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Docker', icon: 'docker' },
      { name: 'VS Code', icon: 'vscodium' },
    ],
  },
];
