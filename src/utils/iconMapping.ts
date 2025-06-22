import { Wand2, Paintbrush, MousePointerClick, PersonStanding, Lightbulb, GitBranch, LayoutPanelTop, Handshake } from "lucide-react";
import { SiAngular, SiBem, SiCss, SiCssmodules, SiFigma, SiJavascript, SiReact, SiSass, SiStorybook, SiStyledcomponents, SiStylelint, SiTypescript, SiVuedotjs } from "@icons-pack/react-simple-icons";

import CreativeIcon from '../components/Icons/CreativeIcon';
import DevelopmentIcon from '../components/Icons/DevelopmentIcon';
import RwdIcon from '../components/Icons/RwdIcon';

export const iconMapping = {
  Wand2,
  Paintbrush,
  MousePointerClick,
  PersonStanding,
  SiAngular,
  SiBem,
  SiCss,
  SiCssmodules,
  SiFigma,
  SiJavascript,
  SiReact,
  SiSass,
  SiStorybook,
  SiStyledcomponents,
  SiStylelint,
  SiTypescript,
  SiVuedotjs,
  CreativeIcon,
  DevelopmentIcon,
  RwdIcon,
  Lightbulb,
  GitBranch,
  LayoutPanelTop,
  Handshake,
};

export type IconName = keyof typeof iconMapping; 