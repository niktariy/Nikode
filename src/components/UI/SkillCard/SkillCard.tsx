import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import type { ProjectIconType } from '../../../types/common';

interface ISkillCardProps {
  title: string;
  description: string | React.ReactNode;
  icon?: ProjectIconType;
  additionalClassName?: string;
}

const StyledSkillCard = styled.div`
  --skill-card-w: 100%;
  --skill-card-ar: auto;
  --skill-card-fs: 1rem;
  --skill-card-pad: 6.4vw;

  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: var(--skill-card-fs);
  position: relative;
  padding: var(--skill-card-pad);
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  color: var(--title-color);
  width: var(--skill-card-w);
  aspect-ratio: var(--skill-card-ar);
  
  @media(width > ${({ theme }) => theme.breakpoints.md}) {
    --skill-card-pad: ${({ theme }) => theme.spacing(4)};
  }
`;

const StyledSkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: auto;
`;


const SkillCard: React.FC<ISkillCardProps> = ({ title, description, icon: Icon, additionalClassName }) => {
  return (
    <StyledSkillCard className={additionalClassName}>
      <StyledSkillCardHeader>
        {Icon && <Icon size={64} strokeWidth={1} color='currentColor' style={{ flexShrink: 0 }} />}
        <Typography variant="h4">{title}</Typography>
      </StyledSkillCardHeader>
      <Typography>{description}</Typography>
    </StyledSkillCard>
  );
};

export default SkillCard;