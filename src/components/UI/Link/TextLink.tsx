import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkVariant } from '../../../types/common';
import type { To } from 'react-router-dom';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  to?: To;
  ref?: React.Ref<HTMLAnchorElement>;
  $isActive?: boolean;
}

const StyledTextLink = styled('a').withConfig({
  shouldForwardProp: (prop) => !['variant', 'ref'].includes(prop as string),
}) <TextLinkProps>`
  display: inline-flex;
  color: ${({ theme, variant, $isActive }) =>
    $isActive ? theme.colors.text : theme.colors.link[variant || LinkVariant.Primary].default};
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: color ${({ theme }) => `${theme.transition.durationBase} ${theme.transition.timingFunc.easeOutExpo}`};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: inherit;
  line-height: 1.5;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: ${({$isActive})=> $isActive ? 'auto' : 0};
    left: ${({$isActive})=> $isActive ? '0' : 'auto'};
    height: ${({$isActive})=> $isActive ? '4px' : '2px'};
    background-color: currentColor;
    width: ${({$isActive})=> $isActive ? '30%' : 0};
    transition: width ${({ theme }) => theme.transition.durationBase} ease-out;
  }

  &:hover, &:focus {
    &::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }

  ${({ theme, variant }) => {
    return css`
      &:hover {
        color: ${theme.colors.link[variant || LinkVariant.Primary].hover};
      }
      
      &:focus, &:focus-visible {
        color: ${theme.colors.link[variant || LinkVariant.Primary].focus};
      }
    `
  }};
`;

const TextLink: React.FC<TextLinkProps> = ({ to, children, $isActive, ...rest }) => {
  return (
    <StyledTextLink 
      as={to ? Link : 'a'} 
      to={to} 
      $isActive={$isActive} 
      {...rest}
    >
      {children}
    </StyledTextLink>
  );
};

export default TextLink;