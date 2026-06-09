export type Education = {
  institution: string;
  location: string;
  qualification: string;
  field: string;
  period: string;
};

export const education: Education[] = [
  {
    institution: 'Yuan Ze University',
    location: 'Taiwan',
    qualification: 'Exchange Program',
    field: 'International Informatics',
    period: 'Feb 2026 – Jun 2026',
  },
  {
    institution: 'Bina Nusantara University',
    location: 'Indonesia',
    qualification: "Bachelor's Degree",
    field: 'Computer Science',
    period: '2023 – Present',
  },
  {
    institution: 'SMK Raden Umar Said',
    location: 'Indonesia',
    qualification: 'Vocational High School',
    field: 'Software Engineering',
    period: '2020 – 2023',
  },
];
