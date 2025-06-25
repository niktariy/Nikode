import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  className?: string;
  Illustration?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const StyledPriceCard = styled.article`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.header};
  padding: ${({ theme }) => theme.spacing(6)};
  box-sizing: border-box;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (width > ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

const SvgPlaceholder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 145px;
  height: 340px;
  z-index: 0;
  pointer-events: none;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const CardTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 23px;
  line-height: 1.04;
  color: ${({ theme }) => theme.colors.headline};
`;

const CardDescription = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const CardPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: auto;
  z-index: 1;
`;

const PriceCard: React.FC<PriceCardProps> = ({ title, description, price, className, Illustration }) => (
  <StyledPriceCard className={className}>
    <SvgPlaceholder>
      {Illustration && <Illustration />}
    </SvgPlaceholder>
    <CardContent>
      <CardTitle as="h4">{title}</CardTitle>
      <CardDescription as="p">{description}</CardDescription>
      <CardPrice>{price}</CardPrice>
    </CardContent>
  </StyledPriceCard>
);

export default PriceCard;