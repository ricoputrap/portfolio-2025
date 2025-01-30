import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "RICO PUTRA",
  DESCRIPTION: "Rico Putra is a software engineer based in Indonesia.",
  EMAIL: "pradanaricoputra@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Rico Putra is a software engineer based in Indonesia.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/rico_rpp21",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ricoputrap",
  },
  {
    NAME: "Website",
    HREF: "https://ricoputra.dev",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ricoputrap",
  },
];
