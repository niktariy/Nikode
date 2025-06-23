import React from 'react';
import { Trans } from 'react-i18next';
import BaseHeroSection from '../components/UI/BaseHeroSection';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

const DevelopmentPage: React.FC = () => {
  const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;
  const isDarkTheme = useSelector(selectCurrentTheme) === 'dark';


  const illustrationPaths = {
    png1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop.png`,
    png2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop@2x.png`,
    webp1x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop.webp`,
    webp2x: `/src/assets/illustrations/Theme_${isDarkTheme ? 'Dark' : 'Light'}_Develop@2x.webp`,
  };
  return (
    <>
      <BaseHeroSection title={<Trans i18nKey='development.title' components={{ small: <small /> }} />} description={<Trans i18nKey={'development.description'} />}
        illustration={illustrationPaths} />
    </>
  );
};

export default DevelopmentPage; 