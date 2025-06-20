import type { IconType } from '@icons-pack/react-simple-icons';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export type ProjectIconType = LucideIcon | IconType | React.FC<IIconProps>;

export interface ISocialLink {
  url: string;
  icon: ProjectIconType;
  label: string;
}

export interface ISkillItem {
  icon: ProjectIconType;
  title: string;
  description: string;
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