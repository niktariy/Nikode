import React, { forwardRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { type TypographyVariant } from '../../../types/common';

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  style?: 'accent' | 'caption';
  component?: React.ElementType;
}

// Вспомогательная функция для проверки варианта 'body'
const isBodyVariant = ($variant: TypographyVariant) => $variant === 'body1' || $variant === 'body2';

const StyledTypography = styled.p.attrs<{
  $variant: TypographyVariant;
  $style?: 'accent' | 'caption';
}>(props => ({ $variant: props.$variant || 'body1' }))`
  color: ${({ theme, $variant }) => isBodyVariant($variant) ? 'inherit' : `var(--title-color, ${theme.colors.headline})`};
  line-height: ${({ theme, $variant }) => isBodyVariant($variant) ? theme.typography.lineHeights.body : theme.typography.lineHeights.heading};
  font-size: ${({ theme, $variant }) => theme.typography.fontSizes[$variant]};
  font-weight: ${({ theme, $variant }) => theme.typography.fontWeights[$variant]};
  font-family: ${({ theme, $variant }) => isBodyVariant($variant) ? theme.fonts.primary : theme.fonts.accent};

  small {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $style, theme }) => {
    switch ($style) {
      case 'accent':
        return css`
          color: ${theme.colors.accent};
          font-weight: bolder;
        `;
      case 'caption':
        return css`
          font-size: ${theme.typography.fontSizes.caption};
          color: ${theme.colors.caption};
        `;
      default:
        return '';
    }
  }}
`;

const Typography = memo(forwardRef<HTMLParagraphElement, TypographyProps>(({ variant = 'body1', children, style, component, ...props }, ref) => {
  const Component = component || (isBodyVariant(variant) ? 'span' : variant);
  return <StyledTypography as={Component} $variant={variant} $style={style} ref={ref} {...props}>{children}</StyledTypography>;
}));

export default Typography;