import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import type { ISkillItem } from '../../../types/common';

const StyledSkillCard = styled.div`
  --title-color: ${({ theme }) => theme.colors.text};
  --card-w: 100%;
  --card-ar: auto;
  --card-fs: 1rem;
  --card-pad: 6.4vw;

  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: var(--card-fs);
  position: relative;
  padding: var(--card-pad);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: var(--title-color);
  width: var(--card-w);
  aspect-ratio: var(--card-ar);

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    --card-pad: 1.6666666667vw;
    --card-w: 37vw;
    --card-ar: 1 / 1;
    --card-fs: 1.222vw;
  }
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    --card-w: 26vw;
    --card-fs: 0.88vw;
  }
  
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.6s ${({ theme }) => theme.transition.timingFunc.easeOutExpo};
    
    &:hover,
    &:focus {
      box-shadow: 1em 1em 0 0 ${({ theme }) => theme.colors.shadow.fill};
    }
  }

`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledDescriptionText = styled(Typography)`
  margin-top: auto;
`;

const SkillCard: React.FC<ISkillItem> = ({ title, description, icon }) => {
  const Icon = icon;
  return (
    <StyledSkillCard>
      <SkillCardHeader>
        <Icon size={64} strokeWidth={1} color='currentColor' style={{ flexShrink: 0 }} />
        <Typography variant="h4">{title}</Typography>
      </SkillCardHeader>
      <StyledDescriptionText variant="p">{description}</StyledDescriptionText>
    </StyledSkillCard>
  );
};

export default SkillCard;