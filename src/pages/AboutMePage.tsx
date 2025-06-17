import React from 'react';
import BaseSection from '../components/UI/BaseSection';
import { useTranslation } from 'react-i18next';

const AboutMePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BaseSection title={t('about.title')} description={t('about.description')} />
    </>
  );
};

export default AboutMePage; 