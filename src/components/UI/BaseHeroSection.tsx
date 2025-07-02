import React, { useState, useEffect, type ReactNode, type Ref } from 'react';
import styled from 'styled-components';
import Typography from './Typography/Typography';
import { TypographyVariant } from '../../types/common';

interface IllustrationPaths {
  png1x: string;
  png2x: string;
  webp1x: string;
  webp2x: string;
}

interface BaseHeroSectionProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  actions?: ReactNode;
  illustration: IllustrationPaths;
  ref?: Ref<HTMLElement>;
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8)} 0;
  min-height: 64vh;

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(12)} 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1.25fr 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
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

const DescriptionWrapper = styled(Typography)`
  p {
    margin-bottom: ${({ theme }) => theme.spacing(1)};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  width: 600px;
  max-width: 80%;
  height: auto;
  margin: 0 auto;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    padding-left: ${({ theme }) => theme.spacing(6)};
  }
`;

const BaseHeroSection: React.FC<BaseHeroSectionProps> = ({
  title,
  description,
  actions,
  illustration,
  ref
}) => {
  const [currentIllustration, setCurrentIllustration] = useState(illustration.png1x);
  const fallbackImage = illustration.png1x;

  useEffect(() => {
    setCurrentIllustration(illustration.webp2x);
  }, [illustration.webp2x]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if ((e.target as HTMLImageElement).src !== fallbackImage) {
      setCurrentIllustration(fallbackImage);
    }
  };

  return (
    <StyledSection ref={ref}>
      <div className="container">
        <ContentWrapper>
          <HeroSectionHeader>
            <Typography variant={TypographyVariant.h1}>{title}</Typography>
            {description && (
              <DescriptionWrapper variant={TypographyVariant.body2} component='div'>{description}</DescriptionWrapper>
            )}
          </HeroSectionHeader>
          <ImageWrapper>
            <picture>
              <source type="image/webp" srcSet={`${illustration.webp1x} 1x, ${illustration.webp2x} 2x`} />
              <source type="image/png" srcSet={`${illustration.png1x} 1x, ${illustration.png2x} 2x`} />
              <img src={currentIllustration} alt={title?.toString()} onError={handleImageError} loading='lazy' />
            </picture>
          </ImageWrapper>
          {actions && actions}
        </ContentWrapper>
      </div>
    </StyledSection>
  );
};

export default BaseHeroSection;