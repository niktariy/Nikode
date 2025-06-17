import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: var(--spacing-xxl) var(--spacing-md);
  text-align: center;
`;

const MentoringPage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Менторство</h1>
      <p>Здесь будет информация о менторстве.</p>
    </PageContainer>
  );
};

export default MentoringPage; 