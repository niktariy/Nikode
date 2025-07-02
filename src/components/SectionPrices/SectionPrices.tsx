import { useTranslation } from "react-i18next";
import BaseSection from "../UI/BaseSection";
import styled from "styled-components";

import PriceCard from "../UI/PriceCard";
import PriceCardIllustration1 from '@assets/illustrations/parts/price-card-illustration-1.svg?react';
import PriceCardIllustration2 from '@assets/illustrations/parts/price-card-illustration-2.svg?react';
import PriceCardIllustration3 from '@assets/illustrations/parts/price-card-illustration-3.svg?react';
import PriceCardIllustration4 from '@assets/illustrations/parts/price-card-illustration-4.svg?react';

const PriceGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (width > ${({theme}) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.333%, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
  }
`

const SectionPrices = () => {
  const { t } = useTranslation();
  const priceCards = t('prices.cards', { returnObjects: true }) as Array<{ title: string; description: string; price: string }>;
  const PriceIllustrations: React.FC<React.SVGProps<SVGSVGElement>>[] = [PriceCardIllustration1, PriceCardIllustration2, PriceCardIllustration3, PriceCardIllustration4];

  return (
    <BaseSection title={t('prices.title')} centered>
      <PriceGrid>
        {priceCards.map((card, index) => (
          <PriceCard key={index} title={card.title} description={card.description} price={card.price} Illustration={PriceIllustrations[index]}/>
        ))}
      </PriceGrid>
    </BaseSection>
  );
};

export default SectionPrices;

