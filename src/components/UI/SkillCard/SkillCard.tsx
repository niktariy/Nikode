import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

interface SkillCardProps {
  title: string;
  description: string;
  iconPath: string;
}

const StyledSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.base};
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: ${({ theme }) => theme.shadow.elevation.sm} ${({ theme }) => theme.shadow.color.main};

  margin-bottom: ${({ theme }) => theme.spacing(2.5)}; /* 1.25rem = 20px */
  position: relative;
  border-left: 2px solid #00fff7;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.05);
    border-color: #00e6e6;
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing(3)}; /* 24px all around */
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: ${({ theme }) => theme.spacing(2)}; /* 16px */
`;

const StyledSkillTitleText = styled(Typography)`
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #00fff7, #00d2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledDescriptionText = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)}; /* top:0, right:24px, bottom:24px */
  line-height: 1.6;
  font-size: 1rem;
`;

const SkillCard: React.FC<SkillCardProps> = ({ title, description, iconPath }) => {
  return (
    <StyledSkillCard>
      <SkillCardHeader>
        <SkillIcon src={iconPath} alt={`${title} icon`} />
        <StyledSkillTitleText variant="h4">{title}</StyledSkillTitleText>
      </SkillCardHeader>
      <StyledDescriptionText variant="p">{description}</StyledDescriptionText>
    </StyledSkillCard>
  );
};

export default SkillCard;