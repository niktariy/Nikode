import { SiGithub, SiCodepen, SiInstagram, SiFacebook, SiMedium } from "@icons-pack/react-simple-icons";
import type { ISocialLink } from "../types/common";
import { SocialLinkType } from "../types/common";


const SOCIAL_LINKS: {
  github: string;
  codepen: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  medium: string;
} = {
  github: "https://github.com/niktariy",
  codepen: "https://codepen.io/niktariy",
  instagram: "https://instagram.com/niktariy_dev",
  linkedin: "https://linkedin.com/in/veronika-novikova",
  facebook: "https://facebook.com/veronika.novikova.dev",
  medium: ""
};

export const socialLinksData: ISocialLink[] = [
  {
    url: SOCIAL_LINKS.github,
    icon: SiGithub,
    label: 'GitHub',
    type: SocialLinkType.Portfolio,
  },
  {
    url: SOCIAL_LINKS.codepen,
    icon: SiCodepen,
    label: 'Codepen',
    type: SocialLinkType.Portfolio,
  },
  {
    url: SOCIAL_LINKS.instagram,
    icon: SiInstagram,
    label: 'Instagram',
    type: SocialLinkType.Social,
  },
  {
    url: SOCIAL_LINKS.facebook,
    icon: SiFacebook,
    label: 'Facebook',
    type: SocialLinkType.Social,
  },
  {
    url: SOCIAL_LINKS.linkedin,
    icon: null,
    label: 'Linkedin',
    type: SocialLinkType.Social,
  },
  {
    url: SOCIAL_LINKS.medium,
    icon: SiMedium,
    label: 'Medium',
    type: SocialLinkType.Social,
  }
]; 