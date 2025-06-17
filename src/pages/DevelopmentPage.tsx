import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const DevelopmentPage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Разработка</h1>
      <p>Здесь будет информация о разработке.</p>
    </PageContainer>
  );
};

export default DevelopmentPage; 