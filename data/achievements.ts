export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Alibaba Cloud Certified Associate — Cloud Engineer',
    issuer: 'Alibaba Cloud',
    date: '2025',
    description: 'ACA certification covering core cloud computing concepts and Alibaba Cloud services. Valid until May 2027.',
    image: '/alibaba_certification.png',
  },
  {
    title: 'AWS Educate — Cloud Computing 101',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational AWS badge covering core cloud computing concepts, AWS services, and the basics of cloud infrastructure.',
    image: '/aws.png',
  },
  {
    title: 'IELTS Academic — Band 7.5 (CEFR C1)',
    issuer: 'British Council / IDP / Cambridge',
    date: '2025',
    description: 'Overall band 7.5 — Listening 8.5, Reading 7.5, Writing 7.0, Speaking 7.5.',
    link: '/IELTS.pdf',
  },
];
