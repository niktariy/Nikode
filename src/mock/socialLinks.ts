import { SiGithub, SiCodepen } from "@icons-pack/react-simple-icons";
import type { ISocialLink } from "../types/common";

// TODO: Add translation to labels or pass as props
export const socialLinksData: ISocialLink[] = [
  {
    url: "social_links.github",
    icon: SiGithub,
    label: 'GitHub',
  },
  {
    url: "social_links.codepen",
    icon: SiCodepen,
    label: 'Codepen',
  },
]; 