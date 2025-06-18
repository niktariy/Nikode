import React from 'react';
import Button from '../components/UI/Button/Button';
import { useTranslation, Trans } from 'react-i18next';
import BaseHeroSection from '../components/UI/BaseHeroSection';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;
  const isDarkTheme = useSelector(selectCurrentTheme) === 'dark';

  const illustrationPaths = {
    png1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Me.png`,
    png2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Me@2x.png`,
    webp1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Me.webp`,
    webp2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Me@2x.webp`,
  };
  return (
    <BaseHeroSection
      title={<Trans i18nKey='home.title' components={{ small: <small /> }} />}
      description={<Trans i18nKey='home.desc' />}
      actions={
        <ButtonGroup>
          <Button label={t('home.CTA_portfolio')} variant='filled' />
          <Button label={t('home.CTA_contact')} variant='outlined' />
        </ButtonGroup>
      } illustration={illustrationPaths}>
    </BaseHeroSection>
  );
};

export default HomePage;