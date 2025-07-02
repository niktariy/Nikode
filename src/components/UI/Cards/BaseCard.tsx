import React from 'react';
import styled from 'styled-components';

export interface BaseCardProps {
  /** Additional class name for the card */
  className?: string;
  /** Card content */
  children: React.ReactNode;
  /** Optional gap between elements in theme spacing units */
  gap?: number;
  /** Optional custom styles */
  style?: React.CSSProperties;
}

interface StyledBaseCardProps {
  $gap?: number;
}

const StyledBaseCard = styled.article<StyledBaseCardProps>`
  position: relative;
  display: flex;
  flex-direction: var(--card-flex-dir, column);
  gap: ${({ theme, $gap = 4 }) => theme.spacing($gap)};
  width: var(--card-w, 100%);
  box-sizing: border-box;
  background: ${({ theme }) => `var(--card-bg, ${theme.colors.card.neutral})`};
  padding: var(--card-pad, 0);
  font-size: 1rem;
  overflow: hidden;
`;

const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className,
  gap,
  style
}) => (
  <StyledBaseCard
    className={className}
    $gap={gap}
    style={style}
  >
    {children}
  </StyledBaseCard>
);

export default BaseCard; 