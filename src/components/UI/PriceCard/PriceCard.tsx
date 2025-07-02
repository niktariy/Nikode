import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { TypographyVariant } from '@/types/common';

const StyledPriceCard = styled.article`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.header};
  box-sizing: border-box;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const SvgPlaceholder = styled.div`
  width: 30%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: end;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6)};

  @media (width > ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

const CardTitle = styled(Typography)`
  font-weight: 700;
  font-size: 23px;
  line-height: 1.04;
  color: ${({ theme }) => theme.colors.headline};
`;

const CardDescription = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const CardPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: auto;
  z-index: 1;
`;

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  className?: string;
  Illustration?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, description, price, className, Illustration }) => (
  <StyledPriceCard className={className}>
    <CardContent>
      <CardTitle variant={TypographyVariant.h4}>{title}</CardTitle>
      <CardDescription as="p">{description}</CardDescription>
      <CardPrice>{price}</CardPrice>
    </CardContent>
    <SvgPlaceholder>
      {Illustration && <Illustration />}
    </SvgPlaceholder>
  </StyledPriceCard>
);

export default PriceCard;