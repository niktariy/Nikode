import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Typography from '../UI/Typography/Typography';
import BaseSection from "../UI/BaseSection";
import SkillCard from "../UI/SkillCard/SkillCard";
import { iconMapping } from '../../utils/iconMapping';
import type { ISkillCategory } from '../../types/common';

const StyledList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  list-style: none;
  padding: 3vw 0;

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    place-items: stretch center;
    gap: 2px;
    
    li,
    li > * {
      width: 100%;
      height: 100%;
    }

    .fill {
      grid-column: 1/-1;
    }
  }

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(33.333%, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;

    .fill:last-of-type {
      grid-column: 2 / span 2;
      grid-row: 2;
    }
  }
`;

const StyledCategoryTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

const Skills = () => {
  const { t } = useTranslation();
  const skillsCategories = t('skills.categories', { returnObjects: true }) as Array<ISkillCategory>;

  return (
    <BaseSection centered title={t('skills.title')} description={t('skills.desc')}>
      {skillsCategories.map((category) => {

        return (
          <div key={category.key}>
            <StyledCategoryTitle variant="h3">{category.title}</StyledCategoryTitle>
            <StyledList>
              {category.items.map((item, index) => {
                const IconComponent = item.icon ? iconMapping[item.icon] : undefined;

                return (
                  <li key={index} className={item.additionalClassName}>
                    <SkillCard
                      title={item.title}
                      icon={IconComponent}
                      description={<span dangerouslySetInnerHTML={{ __html: item.description }}></span>}
                    />
                  </li>
                );
              })}
            </StyledList>
          </div>
        );
      })}
    </BaseSection>
  );
};

export default Skills;

