import type { IconType } from '@icons-pack/react-simple-icons';
import type { LucideIcon } from 'lucide-react';
import React from 'react';
import type { IconName } from '../utils/iconMapping';

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
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

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type BodyVariant = 'body1' | 'body2';

export type TypographyVariant = HeadingVariant | BodyVariant; 