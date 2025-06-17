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

const SectionWrapper = styled.div`
  display: flex;
`;

const SectionHeader = styled.header<{ centered?: boolean }>`
  ${(props) => props.centered && `
    text-align: center;
  `}
`;

const CustomContentWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};
`;

const BaseSection: React.FC<BaseSectionProps> = ({
  title,
  description,
  actions,
  centered,
  halfContent,
  children,
}) => {
  const BaseSectionHeader = () => (
    <SectionHeader centered={centered}>
      <Typography variant="h2">{title}</Typography>
      {description && <Typography variant="p">{description}</Typography>}
      {actions && actions}
    </SectionHeader>
  );

  return (
    <SectionContainer>
      <div className="container">
        {halfContent ? (
          <SectionWrapper>
            <BaseSectionHeader />
            {children && <CustomContentWrapper>{children}</CustomContentWrapper>}
          </SectionWrapper>
        ) : (
          <>
            <BaseSectionHeader />
            {children && <CustomContentWrapper>{children}</CustomContentWrapper>}
          </>
        )
        }
      </div>
    </SectionContainer>
  );
};

export default BaseSection;
