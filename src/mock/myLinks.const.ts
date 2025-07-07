import { FooterLinkType, type IPersonalLink } from "@/types/common";
import { SiGithub, SiCodepen, SiInstagram, SiFacebook, SiMedium } from "@icons-pack/react-simple-icons";

const CONTACT_LINKS: {
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
  medium: "https://medium.com/@niktariy"
};

export const persoanlLinksData: IPersonalLink[] = [
  {
    url: CONTACT_LINKS.github,
    icon: SiGithub,
    label: 'GitHub',
    type: FooterLinkType.CodeSamples,
  },
  {
    url: CONTACT_LINKS.codepen,
    icon: SiCodepen,
    label: 'Codepen',
    type: FooterLinkType.CodeSamples,
  },
  {
    url: CONTACT_LINKS.medium,
    icon: SiMedium,
    label: 'Medium',
    type: FooterLinkType.Articles,
  },
  {
    url: CONTACT_LINKS.instagram,
    icon: SiInstagram,
    label: 'Instagram',
    type: FooterLinkType.Articles,
  },
  {
    url: CONTACT_LINKS.facebook,
    icon: SiFacebook,
    label: 'Facebook',
    type: FooterLinkType.Articles,
  }
];