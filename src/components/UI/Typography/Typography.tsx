import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  style?: 'accent' | 'caption';
}

const StyledTypography = styled.p.attrs<{
  $variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  $style?: 'accent' | 'caption';
}>(props => ({ $variant: props.$variant || 'p' }))`
  color: ${({ theme, $variant }) => $variant !== 'p' ? `var(--title-color, ${theme.colors.headline})` : 'inherit'};
  line-height: ${({ theme, $variant }) => $variant !== 'p' ? theme.typography.lineHeights.heading : theme.typography.lineHeights.body};
  font-size: ${({ theme, $variant }) => theme.typography.fontSizes[$variant]};
  font-weight: ${({ theme, $variant }) => theme.typography.fontWeights[$variant]};
  font-family: ${({ theme, $variant }) => $variant !== 'p' ? theme.fonts.accent : theme.fonts.primary};

  small {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $style, theme }) => {
    switch ($style) {
      case 'accent':
        return `
          color: ${theme.colors.accent};
          font-weight: bolder;
        `;
      case 'caption':
        return `
          font-size: ${theme.typography.fontSizes.caption};
          color: ${theme.colors.caption};
        `;
      default:
        return '';
    }
  }}
`;

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(({ variant = 'p', children, style, ...props }, ref) => {
  const Component = variant;
  return <StyledTypography as={Component} $variant={variant} $style={style} ref={ref} {...props}>{children}</StyledTypography>;
});

export default Typography;