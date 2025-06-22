import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import Typography from '../UI/Typography/Typography';
import BaseSection from "../UI/BaseSection";
import SkillCard from "../UI/SkillCard/SkillCard";
import { iconMapping } from '../../utils/iconMapping';
import type { ISkillCategory } from '../../types/common';
import { useState, useEffect } from 'react';
import { fetchSkillsData } from '../../utils/mockApi';


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
  const { i18n } = useTranslation();
  const [skillsGeneralTranslation, setSkillsGeneralTranslation] = useState<{
    title: string;
    desc: string;
    categories: ISkillCategory[];
  } | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSkillsData(i18n.language);
        setSkillsGeneralTranslation(data);
      } catch (error) {
        console.error("Failed to fetch skills data:", error);
        setSkillsGeneralTranslation(null);
      } finally {
        setIsLoading(false);
      }
    };

    getSkills();
  }, [i18n.language]);

  if (isLoading || !skillsGeneralTranslation || !skillsGeneralTranslation.categories) {
    return null; // Or a loading spinner
  }

  return (
    <BaseSection centered title={skillsGeneralTranslation.title} description={skillsGeneralTranslation.desc}>
      {skillsGeneralTranslation.categories.map((translatedCategory) => {

        return (
          <div key={translatedCategory.key}>
            <StyledCategoryTitle variant="h3">{translatedCategory.title}</StyledCategoryTitle>
            <StyledList>
              {translatedCategory.items.map((skillTranslation, index) => {
                const IconComponent = skillTranslation.icon ? iconMapping[skillTranslation.icon] : undefined;

                return (
                  <li key={index} className={skillTranslation.additionalClassName}>
                    <SkillCard
                      title={skillTranslation.title}
                      icon={IconComponent}
                      description={<Trans i18nKey={skillTranslation.description} components={{ code: <code />, b: <b />, i: <i /> }} />}
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

