import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Typography from '../UI/Typography/Typography';
import BaseSection from "../UI/BaseSection";
import { skillsData } from '../../mock/skillsData';
import type { ISkillItem } from '../../types/common';
import SkillCard from "../UI/SkillCard/SkillCard";

const SkillsList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  list-style: none;
  width: 100%;
  
  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: column;
  }
`;

const StyledCategoryTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary};
  padding: 7vw 0;
`;

const Skills = () => {
  const { t } = useTranslation();

  return (
    <BaseSection centered title={t('skills.title')} description={t('skills.desc')}>
      {
        Object.entries(skillsData).map(([categoryKey, categoryData]) => (
          <>
            <StyledCategoryTitle variant="h3" key={categoryKey}>{t(categoryData.title)}</StyledCategoryTitle>
            <SkillsList>
              {categoryData.items.map((skill: ISkillItem, index: number) => {
                return (
                  <li key={index}>
                    <SkillCard
                      title={t(skill.title)} icon={skill.icon} description={t(skill.description)}>
                    </SkillCard>
                  </li>
                );
              })}
            </SkillsList>
          </>
        ))
      }
    </BaseSection>
  );
};

export default Skills;

