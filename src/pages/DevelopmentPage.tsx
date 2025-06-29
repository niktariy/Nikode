import React from 'react';
import { Trans } from 'react-i18next';
import BaseHeroSection from '../components/UI/BaseHeroSection';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import BaseSection from '../components/UI/BaseSection';
import PriceCard from '../components/UI/PriceCard';
import { useTranslation } from 'react-i18next';
import PriceCardIllustration1 from '../assets/illustrations/parts/price-card-illustration-1.svg?react';
import PriceCardIllustration2 from '../assets/illustrations/parts/price-card-illustration-2.svg?react';
import PriceCardIllustration3 from '../assets/illustrations/parts/price-card-illustration-3.svg?react';
import PriceCardIllustration4 from '../assets/illustrations/parts/price-card-illustration-4.svg?react';

const DevelopmentPage: React.FC = () => {
  const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;
  const isDarkTheme = useSelector(selectCurrentTheme) === 'dark';
  const { t } = useTranslation();
  const priceCards = t('prices.cards', { returnObjects: true }) as Array<{ title: string; description: string; price: string }>;

  const illustrationPaths = {
    png1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop.png`,
    png2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop@2x.png`,
    webp1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop.webp`,
    webp2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop@2x.webp`,
  };

  const PriceIllustrations: React.FC<React.SVGProps<SVGSVGElement>>[] = [PriceCardIllustration1, PriceCardIllustration2, PriceCardIllustration3, PriceCardIllustration4];

  return (
    <>
      <BaseHeroSection title={<Trans i18nKey='development.title' components={{ small: <small /> }} />} description={<Trans i18nKey={'development.description'} />}
        illustration={illustrationPaths} />
      <BaseSection title={t('prices.title')} contained centered>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {priceCards.map((card, index) => (
            <PriceCard key={index} title={card.title} description={card.description} price={card.price} Illustration={PriceIllustrations[index]}/>
          ))}
        </div>
      </BaseSection>
    </>
  );
};

export default DevelopmentPage; 