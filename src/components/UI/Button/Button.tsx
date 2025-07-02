import React from 'react';
import styled, { css, type RuleSet } from 'styled-components';
import { hexToRgba } from '../../../utils/hexToRgba';
import { type DefaultTheme } from 'styled-components';
import { ButtonVariant, ButtonSize } from '../../../types/common';

const outlineBaseStyles = (theme: DefaultTheme) => css`
  --btn-outline-bg: ${theme.colors.button.defaultText};
  
  background-color: var(--btn-outline-bg);

  &:hover {
    --btn-outline-bg: ${hexToRgba(theme.colors.button.defaultText, 64)};
  }
  &:focus {
    ${theme.mode === 'dark' && css`
      color: ${theme.colors.button.default};
    `};
  }
`;

const outlinedStyles = (theme: DefaultTheme) => css`
  --btn-inside-shadow: 0 0 0 2px var(--btn-color);
  ${outlineBaseStyles(theme)};
  color: var(--btn-color);
`;

const outlinedQuietStyles = (theme: DefaultTheme) => css`
  --btn-inside-shadow: transparent;
  --btn-outside-shadow: 0 0 0 0 transparent;
  ${outlineBaseStyles(theme)};
  
  color: ${theme.colors.text};
  border-radius: ${theme.radii.pill};
  border: 1px solid ${theme.colors.border};
  outline-offset: 0;
  
  &:hover, &:focus {
    --btn-outline-bg: ${hexToRgba(theme.colors.button.defaultText, 64)};
    --btn-inside-shadow: 0 0 0 0 transparent;
    --btn-outside-shadow: ${`${theme.shadow.elevation.flat} ${theme.colors.button.default}`};
    border-color: transparent;
  }
`;

// Helper function for button padding based on size, using ButtonSize enum
const getButtonPadding = (theme: DefaultTheme, size?: ButtonSize) => (
  size === ButtonSize.Small
    ? `${theme.spacing(1)} ${theme.spacing(2)}`
    : `${theme.spacing(1.5)} ${theme.spacing(3)}`
);

const StyledButton = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
}>`
  --btn-color: ${({ theme }) => theme.colors.button.default};
  --btn-outside-shadow: 0 0 0 0 transparent;
  --btn-inside-shadow: 0 0 0 0 transparent;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme, $size }) => getButtonPadding(theme, $size)};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({$size}) => $size === ButtonSize.Small ? '1rem' : '1.25rem'};
  line-height: 1.5em;
  box-shadow: inset var(--btn-inside-shadow), var(--btn-shadow, var(--btn-outside-shadow));
  will-change: transform, background-color, color, box-shadow;
  transition-property: transform, background-color, color, border-color, box-shadow, outline;
  transition-duration: ${({ theme }) => theme.transition.duration.base};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc.easeInOutQuart};

  @media (width > ${({theme}) => theme.breakpoints.md}) {
    font-size: ${({$size}) => $size === ButtonSize.Small ? '0.9rem' : '1rem'};
  }

  &:hover {
    --btn-color: ${({ theme }) => theme.colors.button.hover};
    ${({ theme }) => theme.mode === 'dark' ? null : css`
      --btn-outside-shadow: ${theme.shadow.elevation.lg} ${theme.colors.shadow.light}
    `};
  }

  &:focus,
  &:focus-visible,
  &:active {
    --btn-color: ${({ theme }) => theme.colors.button.focus};
    ${({ theme }) => theme.mode === 'dark' ? css`
      outline: 2px solid ${theme.colors.button.default};`
    : css`
      --btn-outside-shadow: ${theme.shadow.elevation.sm} ${theme.colors.shadow.main};
    `};
  }

  &:active {
    transform: translateY(4%);
  }
  &:disabled {
    --btn-color: ${({ theme }) => theme.colors.disabled};

    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ theme, $variant }): RuleSet<object> => {
    switch ($variant) {
      case ButtonVariant.Outlined:
        return outlinedStyles(theme);
      case ButtonVariant.OutlinedQuiet:
        return outlinedQuietStyles(theme);
      case ButtonVariant.Filled:
      default:
        return css`
          background-color: var(--btn-color);
          &, &:hover, &:focus {
            color: ${theme.colors.button.defaultText};
          }
        `;
    }
  }}
`;

// Simple ButtonProps interface
interface ButtonProps {
  as?: React.ElementType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
  [key: string]: any; // Allow any additional props for different elements
}

const Button = ({
  type = 'button',
  as = 'button',
  children,
  label,
  variant = ButtonVariant.Filled,
  size = ButtonSize.Medium,
  ref,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      ref={ref}
      as={as}
      type={as === 'button' ? type : undefined}
      $variant={variant}
      $size={size}
      {...props}
    >
      {children || label}
    </StyledButton>
  );
};

export default Button;