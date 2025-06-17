import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick' | 'ref'> {
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
}

const StyledButton = styled.button.attrs<{
  $variant?: 'filled' | 'outlined';
  $size?: 'small' | 'medium' | 'large';
}>(props => ({
  $variant: props.$variant || 'filled',
  $size: props.$size || 'medium',
}))`
  --button-color: ${({ theme }) => theme.colors.button.default};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme, $size }) => {
    return $size === 'small' ? theme.spacing(1) + ' ' + theme.spacing(2) : theme.spacing(1.5) + ' ' + theme.spacing(3)
  }};
  border-radius: ${({ theme }) => theme.radii.base};
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 16px;
  line-height: 1.5em;
  will-change: background-color, color, box-shadow;
  transition-property: background-color, color, box-shadow;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'outlined':
        return `
          background-color: ${theme.colors.button.defaultText};
          color: var(--button-color);
          box-shadow: 0 0 0 0 transparent, inset 0 0 0 2px var(--button-color);
        `;
      case 'filled':
      default:
        return `
          background-color: var(--button-color);
          color: ${theme.colors.button.defaultText};
        `;
    }
  }}

  &:hover {
    --button-color: ${({ theme }) => theme.colors.button.hover};
    box-shadow: ${({ theme }) => theme.shadow.button.hover};
  }

  &:focus:not(:disabled),
  &:active {
    --button-color: ${({ theme }) => theme.colors.button.focus};
    box-shadow: ${({ theme, $variant }) => theme.shadow.button.focus + ($variant === 'outlined' && ', inset 0 0 0 2px var(--button-color)' || '')};
  }

  &:disabled {
    --button-color: ${({ theme }) => theme.colors.disabled};

    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ type = 'button', children, label, variant, size, ...props }, ref) => {
  return <StyledButton type={type} ref={ref} $variant={variant} $size={size} {...props}>{children || label}</StyledButton>;
});

Button.displayName = 'Button';

export default Button; 