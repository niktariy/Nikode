import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  style?: 'accent' | 'caption';
}

const StyledTypography = styled.p.attrs<{
  $variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  $style?: 'accent' | 'caption';
}>(props => ({ $variant: props.$variant || 'p' }))`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, $variant }) => $variant !== 'p' ? theme.colors.headline : theme.colors.text};
  line-height: 1.5;

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'h1':
        return `
          font-size: 3.5em;
          font-weight: 700;
          line-height: 1.2;

          small {
            color: ${theme.colors.primary};
          }
        `;
      case 'h2':
        return `
          font-size: 2.5em;
          font-weight: 700;
          line-height: 1.3;
        `;
      case 'h3':
        return `
          font-size: 2em;
          font-weight: 600;
          line-height: 1.4;
        `;
      case 'h4':
        return `
          font-size: 1.5em;
          font-weight: 600;
        `;
      case 'h5':
        return `
          font-size: 1.2em;
          font-weight: 500;
        `;
      case 'h6':
        return `
          font-size: 1em;
          font-weight: 500;
        `;
      case 'p':
        return `
          font-size: 1.2em;
          font-weight: 400;
        `;
      default:
        return '';
    }
  }}

  ${({ $style, theme }) => {
    switch ($style) {
      case 'accent':
        return `
          color: ${theme.colors.accent};
          font-weight: bolder;
        `;
      case 'caption':
        return `
          font-size: 0.9em;
          color: ${theme.colors.caption};
        `;
      default:
        return '';
    }
  }}
`;

const Typography: React.FC<TypographyProps> = ({ variant = 'p', children, style, ...props }) => {
  const Component = variant;
  return <StyledTypography as={Component} $variant={variant} $style={style} {...props}>{children}</StyledTypography>;
};

export default Typography;