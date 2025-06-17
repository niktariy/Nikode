import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const PortfolioPage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Портфолио</h1>
      <p>Здесь будут мои работы.</p>
    </PageContainer>
  );
};

export default PortfolioPage; 