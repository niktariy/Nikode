import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkVariant } from '../../../types/common';
import type { To } from 'react-router-dom';
import type { DefaultTheme } from 'styled-components/dist/types';

interface StyledTextLinkProps {
  variant?: LinkVariant;
  $isActive?: boolean;
  $showUnderline?: boolean;
}

const getLinkColor = (
  theme: DefaultTheme,
  variant: LinkVariant | undefined,
  state: 'default' | 'hover' | 'focus'
) => theme.colors.link[variant ?? LinkVariant.Primary][state];

const StyledTextLink = styled('a').withConfig({
  shouldForwardProp: (prop) => !['variant', 'ref'].includes(prop as string),
}) <StyledTextLinkProps>`
  display: inline-flex;
  color: ${({ theme, variant }) => getLinkColor(theme, variant, 'default')};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  cursor: pointer;
  font-weight: 500;
  font-size: inherit;
  line-height: 1.5;
  transition: color ${({ theme }) => `${theme.transition.duration.base} ${theme.transition.timingFunc.easeOutExpo}`};

  ${({$showUnderline = true, $isActive = false, theme}) => {
    return $showUnderline && css`
      @media (prefers-reduced-motion: no-preference) {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: ${$isActive ? 'auto' : 0};
          left: ${$isActive ? '0' : 'auto'};
          height: ${$isActive ? '4px' : '2px'};
          background-color: currentColor;
          width: ${$isActive ? '30%' : 0};
          transition: width ${theme.transition.duration.base} ease-out;
        }

        &:hover, &:focus {
          &::after {
            width: 100%;
            right: auto;
            left: 0;
          }
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        &:hover, &:focus {
          text-decoration: underline;
        }
      }
    `
  }};
  

  ${({ theme, variant }) => {
    return css`
      &:hover {
        color: ${getLinkColor(theme, variant, 'hover')};
      }
      
      &:focus, &:focus-visible {
        color: ${getLinkColor(theme, variant, 'focus')};
      }
    `
  }};
`;

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  to?: To;
  ref?: React.Ref<HTMLAnchorElement>;
  isActive?: boolean;
  showUnderline?: boolean;
}

const TextLink: React.FC<TextLinkProps> = ({ to, children, isActive, showUnderline, ...rest }) => {
  if (to) {
    return (
      <StyledTextLink
        as={Link}
        to={to}
        $isActive={isActive}
        $showUnderline={showUnderline}
        {...rest}
      >
        {children}
      </StyledTextLink>
    );
  }
  return (
    <StyledTextLink
      $isActive={isActive}
      $showUnderline={showUnderline}
      {...rest}
    >
      {children}
    </StyledTextLink>
  );
};

export default TextLink;