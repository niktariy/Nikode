import React from 'react';
import type { IconType } from '@icons-pack/react-simple-icons';
import type { LucideIcon } from 'lucide-react';
import type { IconName } from '../utils/iconMapping';

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'body1',
  body2 = 'body2',
}

export enum ButtonVariant {
  Filled = 'filled',
  Outlined = 'outlined',
  OutlinedQuiet = 'outlinedQuiet'
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  style?: React.CSSProperties;
}

export type ProjectIconType = LucideIcon | IconType | React.FC<IIconProps>;

export enum SocialLinkType {
  Social = 'social',
  Portfolio = 'portfolio',
}

export enum FooterSectionType {
  Copyright = 'copyright',
  Socials = 'socials',
  Links = 'links',
}

export enum LinkVariant {
  Primary = 'primary',
  Accent = 'accent',
  Neutral = 'neutral',
}

export interface IRouteItem {
  id?: string;
  path: string;
  label: string;
  element: React.ReactNode;
}

export interface ISocialLink {
  url: string;
  icon?: ProjectIconType | null;
  label: string;
  type: SocialLinkType;
}

export interface ISkillItem {
  title: string;
  description: string;
  additionalClassName?: string;
  icon?: IconName;
}

export interface ISkillTranslatedItem extends ISkillItem {
  key: string;
}

export interface ISkillCategory {
  title: string;
  key: string;
  items: ISkillItem[];
}
