import React from 'react';
import styled from 'styled-components';
import Typography from '../../Typography/Typography';
import { TypographyStyle, TypographyVariant } from '@/types/common';
import BaseCard from '../BaseCard';

const StyledPriceCard = styled(BaseCard)`
  --card-flex-dir: row;

  justify-content: space-between;
  align-items: flex-start;

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    &:nth-child(2),
    &:nth-child(3) {
      --card-bg: ${({ theme }) => theme.colors.card.price};
    }
    &:nth-child(1),
    &:nth-child(4) {
      --card-bg: ${({ theme }) => theme.colors.card.neutral};
    }
  }
`;

const SvgPlaceholder = styled.div`
  width: 30%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: end;

  img {
    height: calc(100% + 1px);
    margin-top: -1px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)};
`;

const CardPrice = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-top: auto;
`;

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  className?: string;
  bgImage?: string;
  Illustration?: React.FC<React.SVGProps<SVGSVGElement>> | null;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, description, price, className, bgImage, Illustration }) => {
  const ParallaxIllustration = Illustration ? styled(Illustration)`
    position: absolute;
  ` : null;

  return (
    <StyledPriceCard className={className}>
      <CardContent>
        <Typography variant={TypographyVariant.h4} component='h3'>{title}</Typography>
        <Typography>{description}</Typography>
        <CardPrice variant={TypographyVariant.h4} typographyStyle={TypographyStyle.Accent}>{price}</CardPrice>
      </CardContent>
      <SvgPlaceholder>
        {bgImage && <img src={bgImage} alt="" loading='lazy'/>}
        {ParallaxIllustration && <ParallaxIllustration />}
      </SvgPlaceholder>
    </StyledPriceCard>
  );
};

export default PriceCard;