import React, { type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link.neutral.default};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  transition-property: color;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc};

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
}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <StyledNavLink {...props}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink; 