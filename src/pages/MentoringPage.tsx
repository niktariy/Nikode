import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const MentoringPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <h1>{t('mentoring.title')}</h1>
      <p>{t('mentoring.description')}</p>
    </PageContainer>
  );
};

export default MentoringPage; 