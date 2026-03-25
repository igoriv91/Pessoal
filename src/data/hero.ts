export interface HeroLink {
  label: string;
  href: string;
  icon: string;
  variant: "primary" | "secondary";
}

export const hero = {
  firstName: "Igor",
  lastName: "Vitor",
  title: "Head of Development & Full Stack Developer",
  bio: "13 anos construindo produtos do zero e modernizando sistemas legados. Especialista em CRM, fidelização, apps mobile e integrações bancárias.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/igor-vitor-1141bb3b3/",
      icon: "simple-icons:linkedin",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/igoriv91",
      icon: "simple-icons:github",
      variant: "secondary",
    },
  ] satisfies HeroLink[],
};
