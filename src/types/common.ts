import type { IconType } from '@icons-pack/react-simple-icons';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

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
  icon?: ProjectIconType;
  title: string;
  description: string;
  additionalClassName?: string;
}

export interface ISkillCategoryData {
  title: string;
  items: ISkillItem[];
}

export interface ISkillsData {
  markup: ISkillCategoryData;
  styling: ISkillCategoryData;
  uiux: ISkillCategoryData;
  code: ISkillCategoryData;
}

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type BodyVariant = 'body1' | 'body2';

export type TypographyVariant = HeadingVariant | BodyVariant; 