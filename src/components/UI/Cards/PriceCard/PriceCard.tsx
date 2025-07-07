import { type ComponentProps, type FC } from 'react';
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

const SvgWrapper = styled.div`
  width: auto;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: end;

  svg:not(.parallax) {
    height: 100%;
    width: auto;
    object-fit: fill;
  }
  .parallax {
    position: absolute;
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
  cardIllustration?: FC<ComponentProps<'svg'>> | null;
  accentShape?: FC<ComponentProps<'svg'>> | null;
}

const PriceCard: FC<PriceCardProps> = ({ title, description, price, className, cardIllustration, accentShape }) => {
  const AccentIllustration = accentShape && accentShape;
  const BgIllustration = cardIllustration && cardIllustration;

  return (
    <StyledPriceCard className={className}>
      <CardContent>
        <Typography variant={TypographyVariant.h4} component='h3'>{title}</Typography>
        <Typography>{description}</Typography>
        <CardPrice variant={TypographyVariant.h3} component='span' typographyStyle={TypographyStyle.Accent}>{price}</CardPrice>
      </CardContent>
      <SvgWrapper>
        {BgIllustration && <BgIllustration />}
        {AccentIllustration && <AccentIllustration  className='parallax'/>}
      </SvgWrapper>
    </StyledPriceCard>
  );
};

export default PriceCard;