import React, { type ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { hexToRgba } from '../../../utils/hexToRgba';
import { type DefaultTheme } from 'styled-components';

const outlinedStyles = (theme: DefaultTheme) => css`
  --btn-outline-bg: ${theme.colors.button.defaultText};
  --btn-shadow: inset 0 0 0 2px var(--btn-color), var(--btn-outside-shadow);

  background-color: var(--btn-outline-bg);
  color: var(--btn-color);
  position: relative;
  z-index: 1;

  &:hover, &:focus {
    --btn-outline-bg: ${hexToRgba(theme.colors.button.hover, 4)};
  }
  &:focus {
    --btn-outline-bg: ${hexToRgba(theme.colors.button.hover, 8)};
    ${theme.mode === 'dark' && css`
      color: ${theme.colors.button.default};
    `};
  }
`;

const StyledButton = styled.button.attrs<{
  $variant?: 'filled' | 'outlined' | 'outlinedQuiet';
  $size?: 'small' | 'medium' | 'large';
}>(props => ({
  $variant: props.$variant || 'filled',
  $size: props.$size || 'medium',
}))`
  --btn-color: ${({ theme }) => theme.colors.button.default};
  --btn-outside-shadow: 0 0 0 0 transparent;
  --btn-inside-shadow: 0 0 0 0 transparent;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme, $size }) => {
    return $size === 'small'
      ? `${theme.spacing(1)} ${theme.spacing(2)}`
      : `${theme.spacing(1.5)} ${theme.spacing(3)}`
  }};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 1rem;
  line-height: 1.5em;
  box-shadow: inset var(--btn-inside-shadow), var(--btn-shadow, var(--btn-outside-shadow));
  will-change: transform, background-color, color, box-shadow;
  transition-property: transform, background-color, color, box-shadow, outline;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc.easeInOutQuart};

  &:hover {
    --btn-color: ${({ theme }) => theme.colors.button.hover};
    ${({ theme }) => theme.mode === 'dark' ? null : css`
      --btn-outside-shadow: ${theme.shadow.elevation.lg} ${theme.colors.shadow.accent}
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

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'outlined':
        return css`
          ${outlinedStyles(theme)}
        `;
      case 'filled':
      default:
        return css`
          background-color: var(--btn-color);
          color: ${theme.colors.button.defaultText};
        `;
    }
  }}

  ${({ theme, $variant }) => {
    if ($variant === 'outlinedQuiet') {
      return css`
        ${outlinedStyles(theme)}
        --btn-shadow: 0 0 0 0 transparent;
        --btn-inside-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};

        color: ${({ theme }) => theme.colors.text};
        border-radius: ${({ theme }) => theme.radii.pill};
        
        &:hover, &:focus {
          --btn-outline-bg: ${({ theme }) => theme.colors.button.defaultText};
          --btn-inside-shadow: 0 0 0 0 transparent;
          --btn-shadow: ${({ theme }) => `${theme.shadow.elevation.flat} ${theme.colors.button.default}`};
        }
        
        &[aria-expanded="true"], &:focus {
          outline-offset: 0;
        }
        
        &[aria-expanded="true"] {
          --btn-outline-bg: ${hexToRgba(theme.colors.button.hover, 8)};
        }
      `;
    }
    return null; // Return null if not outlinedQuiet, handled by switch
  }}
`;

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'> {
  variant?: 'filled' | 'outlined' | 'outlinedQuiet';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({ type = 'button', children, label, variant, size, ref, ...props }: ButtonProps) => {
  return <StyledButton type={type} ref={ref} $variant={variant} $size={size} {...props}>{children || label}</StyledButton>;
};

export default Button;