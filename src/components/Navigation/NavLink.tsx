import React, { type ReactNode, forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(Link) <{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.link.neutral.hover : theme.colors.link.neutral.default};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  transition-property: color, font-weight;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc.easeInOutQuart};

  &:hover {
    color: ${({ theme }) => theme.colors.link.neutral.hover};
    text-decoration: none;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.link.neutral.focus};
  }
`;

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  isActive?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ children, isActive = false, ...props }, ref) => {
  return (
    <StyledNavLink $isActive={isActive} ref={ref} {...props}>
      {children}
    </StyledNavLink>
  );
});

export default NavLink; 