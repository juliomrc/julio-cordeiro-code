export const aboutSections = [
    "Myself",
    "Experience",
    "Puzzle",
    "Bank Millennium",
    "Memcare",
    "Verivest",
] as const;

export type AboutSection = typeof aboutSections[number];
