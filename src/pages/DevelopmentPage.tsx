import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const DevelopmentPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <h1>{t('development.title')}</h1>
      <p>{t('development.description')}</p>
    </PageContainer>
  );
};

export default DevelopmentPage; 