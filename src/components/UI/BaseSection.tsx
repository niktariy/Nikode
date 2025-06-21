import { type ReactNode } from 'react';
import styled from 'styled-components';
import Typography from './Typography/Typography';

interface BaseSectionProps {
  title: string;
  description?: string;
  contained?: boolean;
  actions?: ReactNode;
  centered?: boolean;
  halfContent?: boolean;
  children?: ReactNode;
  ref?: React.Ref<HTMLElement>;
}

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} 0;
`;

const SectionWrapper = styled.div<{ $contentDirection?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $contentDirection }) => $contentDirection || 'column'};
  gap: ${({ theme }) => theme.spacing(10)};
  height: 100%;
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

const BaseSection = ({
  title, description, contained = true, actions, centered, halfContent, children, ref
}: BaseSectionProps) => {
  const baseContainerCls = 'container';

  const BaseSectionHeader = () => (
    <SectionHeader $centered={centered}>
      <Typography variant="h2">{title}</Typography>
      {description && <StyledDescription variant='p'>{description}</StyledDescription>}
      {actions && actions}
    </SectionHeader>
  );

  return (
    <SectionContainer ref={ref}>
      <SectionWrapper $contentDirection={halfContent ? 'row' : 'column'} className={contained ? baseContainerCls : undefined}>
        {contained ? <BaseSectionHeader /> : (
          <div className="container">
            <BaseSectionHeader />
          </div>
        )}
        {children && <div>{children}</div>}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default BaseSection;
