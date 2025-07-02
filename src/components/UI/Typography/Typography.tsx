import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { TypographyStyle, TypographyVariant } from '../../../types/common';

interface TypographyProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children' | 'style' | 'ref'> {
  variant?: TypographyVariant;
  children?: React.ReactNode;
  typographyStyle?: TypographyStyle;
  component?: React.ElementType;
  ref?: React.Ref<HTMLParagraphElement>;
}

// Вспомогательная функция для проверки варианта 'body'
const isBodyVariant = ($variant: TypographyVariant) => $variant === TypographyVariant.body1 || $variant === TypographyVariant.body2;

interface StyledTypographyProps {
  $variant: TypographyVariant;
  $typographyStyle?: TypographyStyle;
}

const StyledTypography = styled.p.attrs<StyledTypographyProps>(
  props => ({ $variant: props.$variant || TypographyVariant.body1 })
)<StyledTypographyProps>`
  color: ${({ theme, $variant }) => isBodyVariant($variant) ? 'inherit' : `var(--title-color, ${theme.colors.headline})`};
  line-height: ${({ theme, $variant }) => isBodyVariant($variant) ? theme.typography.lineHeights.body : theme.typography.lineHeights.heading};
  font-size: ${({ theme, $variant }) => theme.typography.fontSizes[$variant]};
  font-weight: ${({ theme, $variant }) => theme.typography.fontWeights[$variant]};
  font-family: ${({ theme, $variant }) => isBodyVariant($variant) ? theme.fonts.primary : theme.fonts.accent};

  small {
    color: ${({ theme }) => theme.colors.primary};
    white-space: pre;
  }

  ${({ $typographyStyle, theme }) => {
    switch ($typographyStyle) {
      case TypographyStyle.Accent:
        return css`
          color: ${theme.colors.accent};
          font-weight: bolder;
        `;
      case TypographyStyle.Caption:
        return css`
          font-size: ${theme.typography.fontSizes.caption};
          font-weight: ${theme.typography.fontWeights.caption};
          color: ${theme.colors.caption};
        `;
      default:
        return '';
    }
  }}
`;

const Typography = memo(({
  variant = TypographyVariant.body1,
  children,
  typographyStyle,
  component,
  ref,
  ...props
}: TypographyProps) => {
  const $variant = variant;
  return (
    <StyledTypography
      as={component || (isBodyVariant($variant) ? 'span' : $variant)}
      $variant={$variant}
      $typographyStyle={typographyStyle}
      ref={ref}
      {...props}
    >
      {children}
    </StyledTypography>
  );
});

export default Typography;