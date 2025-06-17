import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <h1>{t('portfolio.title')}</h1>
      <p>{t('portfolio.description')}</p>
    </PageContainer>
  );
};

export default PortfolioPage; 