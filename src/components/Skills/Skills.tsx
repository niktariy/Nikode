import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Typography from '../UI/Typography/Typography';
import BaseSection from "../UI/BaseSection";
import { skillsData } from '../../mock/skillsData';
import type { ISkillItem } from '../../types/common';
import SkillCard from "../UI/SkillCard/SkillCard";


const StyledList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  list-style: none;
  padding: 3vw 0;

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    place-items: stretch center;
    gap: 2px;
    
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
  padding: 4vw 0;
`;

const Skills = () => {
  const { t } = useTranslation();

  return (
    <BaseSection centered title={t('skills.title')} description={t('skills.desc')}>
      {Object.entries(skillsData).map(([categoryKey, categoryData]) => {
        return (
          <div key={categoryKey}>
            <StyledCategoryTitle variant="h3">{t(categoryData.title)}</StyledCategoryTitle>
            <StyledList>
              {categoryData.items.map((skill: ISkillItem, index: number) => {
                return (
                  <li key={index} className={skill.additionalClassName}>
                    <SkillCard
                      title={t(skill.title)}
                      icon={skill.icon}
                      description={t(skill.description)}
                    />
                  </li>
                );
              })
              }
            </StyledList>
          </div>
        );
      })}
      <div className="container">
        <StyledCategoryTitle variant="h3">{"А так же"}</StyledCategoryTitle>
        <StyledList>
          <li>
            <SkillCard
              title={"А ещё быстро учусь, не паникую и гуглю только по делу."}
              description={'Если нужен верстальщик, который и в коде не утонет, и с вами по-людски поговорит — я на связи.'}
            />
          </li>
          <li>
            <SkillCard
              title={"Быстрая адаптация"}
              description={'Новый стек? Не вопрос. Главное — гуглить не “как сделать красиво”, а “почему оно не работает”.'}
            />
          </li>
          <li>
            <SkillCard
              title={"Git"}
              description={'Умею откатиться не только по жизни, но и по коммитам”.'}
            />
          </li>
        </StyledList>
      </div>
    </BaseSection>
  );
};

export default Skills;

