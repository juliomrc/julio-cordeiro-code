export const aboutSections = [
    "Myself",
    "Experience",
    "Puzzle",
    "Bank Millennium",
    "Memcare",
] as const;

export type AboutSection = typeof aboutSections[number];
