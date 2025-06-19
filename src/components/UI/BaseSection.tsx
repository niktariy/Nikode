import React, { type ReactNode } from 'react';
import styled from 'styled-components';
import Typography from './Typography/Typography';

interface BaseSectionProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  centered?: boolean;
  halfContent?: boolean;
  children?: ReactNode;
}

const SectionContainer = styled.section`
  background-color: var(--color-background);
  color: var(--color-text);
`;

const SectionWrapper = styled.div<{ $contentDirection?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $contentDirection }) => $contentDirection || 'column'};
  gap: ${({ theme }) => theme.spacing(10)};
`;

const SectionHeader = styled.header<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  ${(props) => props.$centered && `
    text-align: center;
  `}
`;

const StyledDescription = styled(Typography)`
  font-size: 1.25em;
`

const BaseSection: React.FC<BaseSectionProps> = ({
  title,
  description,
  actions,
  centered,
  halfContent,
  children,
}) => {
  const BaseSectionHeader = () => (
    <SectionHeader $centered={centered}>
      <Typography variant="h2">{title}</Typography>
      {description && <StyledDescription variant='p'>{description}</StyledDescription>}
      {actions && actions}
    </SectionHeader>
  );

  return (
    <SectionContainer>
      <div className="container">
        <SectionWrapper $contentDirection={halfContent ? 'row' : 'column'}>
          <BaseSectionHeader />
          {children && <div>{children}</div>}
        </SectionWrapper>
      </div>
    </SectionContainer>
  );
};

export default BaseSection;
