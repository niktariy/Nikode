import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Wand2, Paintbrush, MonitorSmartphone, MousePointerClick, Code2, PenToolIcon } from "lucide-react";
import Typography from '../UI/Typography/Typography';
import BaseSection from "../UI/BaseSection";
import { SiAngular, SiBem, SiCssmodules, SiFigma, SiJavascript, SiReact, SiSass, SiStorybook, SiStyledcomponents, SiStylelint, SiTypescript, SiVuedotjs } from "@icons-pack/react-simple-icons";

import RwdIcon from '../Icons/RwdIcon';
import DevelopmentIcon from '../Icons/DevelopmentIcon';
import CreativeIcon from '../Icons/CreativeIcon';

interface IconComponentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number;
}

interface SkillItemData {
  icon: React.ComponentType<IconComponentProps>;
  title: string;
  description: string;
}

interface CategoryData {
  title: string;
  items: SkillItemData[];
}

interface SkillsData {
  markup: CategoryData;
  uiux: CategoryData;
  code: CategoryData;
}

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-areas: 'desc headline' 'desc list';
  grid-template-columns: 1fr 1.7fr;
  gap: ${({ theme }) => theme.spacing(5)};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(5)};
  
  &:nth-child(2n) {
    grid-template-areas: 'headline headline' 'list desc';
    grid-template-columns: 1.7fr 1fr;
  }
`;

const SkillsList = styled.ul`
  grid-area: list;
  list-style: none;
  padding: 0;
  margin-left: 3rem;
  width: 100%;
`;

const StyledCategoryTitle = styled(Typography)`
  grid-area: headline;
  color: ${({ theme }) => theme.colors.headline};
`;

const CategoryDescriptionDisplay = styled.div`
  grid-area: desc;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(3)};
  height: 36vh;
  box-shadow: 16px 16px 0 0px ${({ theme }) => theme.shadow.color.main};
`;

const StyledSkillItem = styled.button`
  --title-color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.monospace} !important;
  position: relative;
  padding: 1vh 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: color .6s ${({ theme }) => theme.transition.timingFunc.easeOutExpo};
  z-index: 0;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform .6s ${({ theme }) => theme.transition.timingFunc.easeOutExpo};
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover,
    &:focus {
      --title-color: ${({ theme }) => theme.colors.body};
      
      &:before {
        transform: scaleY(1);
        transform-origin: bottom;
      }
    }
  }
`;

const Skills = () => {
  const { t } = useTranslation();

  const skillsData: SkillsData = {
    "markup": {
      title: t('skills.markup.title'),
      "items": [
        { icon: DevelopmentIcon, title: t('skills.markup.html_css.title'), description: t('skills.markup.html_css.description') },
        { icon: SiSass, title: t('skills.markup.preprocessors.title'), description: t('skills.markup.preprocessors.description') },
        { icon: SiBem, title: t('skills.markup.bem_semantics.title'), description: t('skills.markup.bem_semantics.description') },
        { icon: SiStorybook, title: t('skills.markup.storybook.title'), description: t('skills.markup.storybook.description') },
        { icon: SiCssmodules, title: t('skills.markup.css_modules.title'), description: t('skills.markup.css_modules.description') },
        { icon: SiStyledcomponents, title: t('skills.markup.css_in_js.title'), description: t('skills.markup.css_in_js.description') },
      ],
    },
    "uiux": {
      title: t('skills.uiux.title'),
      "items": [
        { icon: RwdIcon, title: t('skills.uiux.responsive_crossbrowser.title'), description: t('skills.uiux.responsive_crossbrowser.description') },
        { icon: MousePointerClick, title: t('skills.uiux.interactivity.title'), description: t('skills.uiux.interactivity.description') },
        { icon: Wand2, title: t('skills.uiux.animations.title'), description: t('skills.uiux.animations.description') },
        { icon: SiFigma, title: t('skills.uiux.figma.title'), description: t('skills.uiux.figma.description') },
        { icon: Paintbrush, title: t('skills.uiux.ui_libs.title'), description: t('skills.uiux.ui_libs.description') },
        { icon: SiFigma, title: t('skills.uiux.ui_kit.title'), description: t('skills.uiux.ui_kit.description') },
      ],
    },
    "code": {
      title: t('skills.code.title'),
      "items": [
        { icon: SiJavascript, title: t('skills.code.javascript.title'), description: t('skills.code.javascript.description') },
        { icon: SiTypescript, title: t('skills.code.typescript.title'), description: t('skills.code.typescript.description') },
        { icon: SiReact, title: t('skills.code.react.title'), description: t('skills.code.react.description') },
        { icon: SiVuedotjs, title: t('skills.code.vue.title'), description: t('skills.code.vue.description') },
        { icon: SiAngular, title: t('skills.code.angular.title'), description: t('skills.code.angular.description') },
        { icon: SiStylelint, title: t('skills.code.tooling.title'), description: t('skills.code.tooling.description') },
      ]
    }
  };

  const [activeCategoryKey, setActiveCategoryKey] = useState<keyof SkillsData>("markup");
  const [activeSkill, setActiveSkill] = useState<SkillItemData>(skillsData[activeCategoryKey].items[0]);

  const handleSkillSelect = (categoryKey: keyof SkillsData, skill: SkillItemData) => {
    setActiveCategoryKey(categoryKey);
    setActiveSkill(skill);
  };

  return (
    <BaseSection centered title={t('skills.title')} description={t('skills.desc')}>
      {
        Object.entries(skillsData).map(([categoryKey, categoryData]) => (
          <StyledSkillsGrid key={categoryKey}>
            <StyledCategoryTitle variant="h3">{categoryData.title}</StyledCategoryTitle>
            <SkillsList>
              {categoryData.items.map((skill: SkillItemData, index: number) => {
                const Icon = skill.icon;
                return (
                  <li key={index}>
                    <StyledSkillItem onClick={() => handleSkillSelect(categoryKey as keyof SkillsData, { description: skill.description, icon: Icon, title: skill.title })}>
                      <Typography variant="h4">{skill.title}</Typography>
                    </StyledSkillItem>
                  </li>
                );
              })}
            </SkillsList>
            <CategoryDescriptionDisplay>
              {activeSkill.icon && <activeSkill.icon color="currentColor" size={80} strokeWidth={1} />}
              <Typography variant="p">{activeSkill.description}</Typography>
            </CategoryDescriptionDisplay>
          </StyledSkillsGrid>
        ))
      }
    </BaseSection>
  );
};

export default Skills;

