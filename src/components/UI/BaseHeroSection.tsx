import React, { type ReactNode } from 'react';
import styled from 'styled-components';
import Typography from './Typography/Typography';

interface IllustrationPaths {
  png1x: string;
  png2x: string;
  webp1x: string;
  webp2x: string;
}

interface BaseHeroSectionProps {
  title: string;
  description?: string | ReactNode;
  actions?: ReactNode;
  illustration: IllustrationPaths;
}

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} 0;
  min-height: 64vh;

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(12)} 0;
  }
`
const ContentWrapper = styled.div`
  gap: ${({ theme }) => theme.spacing(2)};
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroSectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    align-self: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(6)};

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.base};
  }

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    padding-left: ${({ theme }) => theme.spacing(6)};
  }
`;

const BaseHeroSection: React.FC<BaseHeroSectionProps> = ({
  title,
  description,
  actions,
  illustration,
}) => {
  return (
    <StyledSection>
      <div className="container">
        <ContentWrapper>
          <HeroSectionHeader>
            <Typography variant="h1">{title}</Typography>
            {description && <Typography variant="p">{description}</Typography>}
            {actions && actions}
          </HeroSectionHeader>
          <ImageWrapper>
            <picture>
              <source type="image/webp" srcSet={`${illustration.webp1x} 1x, ${illustration.webp2x} 2x`} />
              <source type="image/png" srcSet={`${illustration.png1x} 1x, ${illustration.png2x} 2x`} />
              <img src={illustration.png1x} alt={title} />
            </picture>
          </ImageWrapper>
        </ContentWrapper>
      </div>
    </StyledSection>
  );
};

export default BaseHeroSection;