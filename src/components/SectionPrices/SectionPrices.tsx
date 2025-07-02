import { useTranslation } from "react-i18next";
import styled from "styled-components";
import BaseSection from "@ui/BaseSection";
import { PriceCard } from "@ui/Cards";

import PriceBg1Light from '@assets/illustrations/parts/price-bg-1@light.svg';
import PriceBg1Dark from '@assets/illustrations/parts/price-bg-1@dark.svg';
import PriceBg2Light from '@assets/illustrations/parts/price-bg-2@light.svg';
import PriceBg2Dark from '@assets/illustrations/parts/price-bg-2@dark.svg';
import PriceBg3Light from '@assets/illustrations/parts/price-bg-3@light.svg';
import PriceBg3Dark from '@assets/illustrations/parts/price-bg-3@dark.svg';
import PriceBg4Light from '@assets/illustrations/parts/price-bg-4@light.svg';
import PriceBg4Dark from '@assets/illustrations/parts/price-bg-4@dark.svg';
import IllustrationHearts, { IllustrationHeartsSize } from "../Illustrations/Hearts";
import IllustrationCircle, { IllustrationCircleSize } from "../Illustrations/Circle";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const PriceGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (width > ${({theme}) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.333%, 1fr));
    grid-template-rows: repeat(2, 1fr);
  }
`

const SmallHeartsIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IllustrationHearts variant={IllustrationHeartsSize.Small} style={{ top: '18%', right: '-4%' }} {...props}/>
);

const SmallCircleIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IllustrationCircle variant={IllustrationCircleSize.Small} style={{ bottom: '10%', right: '-2%' }} {...props}/>
);


const SectionPrices = () => {
  const { t } = useTranslation();
  
  const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;
  const isDarkTheme = useSelector(selectCurrentTheme) === 'dark';
  const priceCards = t('prices.cards', { returnObjects: true }) as Array<{ title: string; description: string; price: string }>;
  const PriceIllustrations: (React.FC<React.SVGProps<SVGSVGElement>> | null)[] = [SmallHeartsIllustration, null, null, SmallCircleIllustration];
  const PriceBackgrounds: string[] = isDarkTheme ? [PriceBg1Dark, PriceBg2Dark, PriceBg3Dark, PriceBg4Dark] : [PriceBg1Light, PriceBg2Light, PriceBg3Light, PriceBg4Light];

  return (
    <BaseSection title={t('prices.title')} centered>
      <PriceGrid>
        {priceCards.map((card, index) => (
          <PriceCard key={index} title={card.title} description={card.description} price={card.price} bgImage={PriceBackgrounds[index]} Illustration={PriceIllustrations[index]}/>
        ))}
      </PriceGrid>
    </BaseSection>
  );
};

export default SectionPrices;

