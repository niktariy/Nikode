import { useTranslation } from "react-i18next";
import styled from "styled-components";
import BaseSection from "@ui/BaseSection";
import { PriceCard } from "@ui/Cards";

import { CircleIllustration, HeartsIllustration, ButtonCodeIllustration, TwoDotsIllustration } from "../Illustrations";
import { PriceBackgrounds } from "../Illustrations/CardBackground";
import type { SVGComponentType } from "@/types/common";

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

const PositionedHeartsIllustration: SVGComponentType = (props) => (
  <HeartsIllustration size='small' style={{ top: '18%', right: '-4%' }} {...props} />
);

const PositionedButtonCodeIllustration: SVGComponentType = (props) => (
  <ButtonCodeIllustration size='small' shadowOnly={true} style={{ top: '30%', right: '-5%' }} {...props} />
);

const PositionedTwoDotsIllustration: SVGComponentType = (props) => (
  <TwoDotsIllustration style={{ top: '12%', right: '6%' }} {...props} />
);

const PositionedCircleIllustration: SVGComponentType = (props) => (
  <CircleIllustration size='small' style={{ bottom: '10%', right: '-2%' }} {...props} />
);

const SectionPrices = () => {
  const { t } = useTranslation();
  
  const priceCards = t('prices.cards', { returnObjects: true }) as Array<{ title: string; description: string; price: string }>;
  const PriceIllustrations: (SVGComponentType | null)[] = [PositionedHeartsIllustration, PositionedButtonCodeIllustration, PositionedTwoDotsIllustration, PositionedCircleIllustration];

  return (
    <BaseSection title={t('prices.title')} centered>
      <PriceGrid>
        {priceCards.map((card, index) => (
          <PriceCard key={index} title={card.title} description={card.description} price={card.price} cardIllustration={PriceBackgrounds[index]} accentShape={PriceIllustrations[index]}/>
        ))}
      </PriceGrid>
    </BaseSection>
  );
};

export default SectionPrices;

