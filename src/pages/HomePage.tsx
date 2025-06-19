import React from 'react';
import Button from '../components/UI/Button/Button';
import { useTranslation, Trans } from 'react-i18next';
import BaseHeroSection from '../components/UI/BaseHeroSection';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import styled from 'styled-components';
import Typography from '../components/UI/Typography/Typography';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import Skills from '../components/Skills/Skills';

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

  const socialLinksData = [
    {
      url: t('social_links.github'),
      icon: '/src/assets/icons/github.svg', // Placeholder, replace with actual SVG path
      label: 'GitHub',
    },
    {
      url: t('social_links.figma'),
      icon: '/src/assets/icons/figma.svg', // Placeholder, replace with actual SVG path
      label: 'Figma',
    },
  ];

  return (
    <>
      <BaseHeroSection
        title={<Trans i18nKey='home.title' components={{ small: <small /> }} />}
        description={<Trans i18nKey='home.desc' />}
        actions={
          <>
            <ButtonGroup>
              <Button label={t('home.CTA_portfolio')} variant='filled' />
              <Button label={t('home.CTA_contact')} variant='outlined' />
            </ButtonGroup>
            <SocialLinks links={socialLinksData} />
          </>
        } illustration={illustrationPaths}>
      </BaseHeroSection>
      <Skills />
    </>
  );
};

export default HomePage;