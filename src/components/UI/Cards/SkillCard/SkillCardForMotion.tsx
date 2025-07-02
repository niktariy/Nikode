import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import type { ISkillItem } from '../../../../types/common';
import { iconMapping } from '../../../../utils/iconMapping';

const StyledSkillCard = styled(SkillCard)`
  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    --skill-card-w: 43vw;
    --skill-card-pad: 1.6666666667vw;
    --skill-card-ar: 5 / 4;
    --skill-card-fs: 1.6vw;

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.6s ${({ theme }) => theme.transition.timingFunc.easeOutExpo};
        
        &:hover,
        &:focus {
          box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}, 1em 1em 0 0 ${({ theme }) => theme.colors.shadow.flat};
        };
    };
  }

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    --skill-card-w: 32vw;
    --skill-card-ar: 4 / 3;
    --skill-card-fs: 1em;
  }
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    --skill-card-w: 26vw;
    --skill-card-ar: 5 / 3;
    --skill-card-fs: 1em;
  }
`;


const SkillCardForMotion: React.FC<ISkillItem> = ({ title, description, icon }) => {
  const IconComponent = icon ? iconMapping[icon] : undefined;

  return (
    <StyledSkillCard title={title} description={description} icon={IconComponent} />
  );
};

export default SkillCardForMotion;