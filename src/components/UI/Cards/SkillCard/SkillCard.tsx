import React from 'react';
import styled from 'styled-components';
import Typography from '../../Typography/Typography';
import { TypographyVariant, type ProjectIconType } from '../../../../types/common';
import BaseCard from '../BaseCard';

const StyledSkillCard = styled(BaseCard)`
  --card-bg: ${({ theme }) => theme.colors.card.skill};
  --card-pad: 6.4vw;

  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  
  svg {
    display: none;
    @media (width > ${({theme}) => theme.breakpoints.sm}) {
      display: block;
    }
  }

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    --card-pad: ${({ theme }) => theme.spacing(4)};
  }
`;

const StyledSkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: auto;
`;

interface SkillCardProps {
  title: string;
  description: string | React.ReactNode;
  icon?: ProjectIconType;
  additionalClassName?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon: Icon, additionalClassName }) => {
  return (
    <StyledSkillCard className={additionalClassName}>
      <StyledSkillCardHeader>
        {Icon && <Icon size="3em" strokeWidth={1} color='currentColor' style={{ flexShrink: 0 }} />}
        <Typography variant={TypographyVariant.h4}>{title}</Typography>
      </StyledSkillCardHeader>
      <Typography>{description}</Typography>
    </StyledSkillCard>
  );
};

export default SkillCard;