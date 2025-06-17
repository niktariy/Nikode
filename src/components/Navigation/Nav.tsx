import { t } from 'i18next';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

interface RouteItem {
  path: string;
  label: string;
}

interface NavProps {
  routes: RouteItem[];
}

const StyledNav = styled.nav`
  position: relative;
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

interface LinkUnderlineProps {
  width: number;
  left: number;
  $isHovered: boolean;
}

const LinkUnderline = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== '$isHovered',
}) <LinkUnderlineProps>`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  width: ${({ width }) => width}px;
  left: ${({ left }) => left}px;
  transform-origin: bottom;
  transform: scaleY(${({ $isHovered }) => ($isHovered ? 1 : 0)});
  will-change: width, left, transform;
  transition-property: width, left, transform;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const Nav: React.FC<NavProps> = ({ routes }) => {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setUnderlineWidth(targetRect.width);
      setUnderlineLeft(targetRect.left - navRect.left);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledNav ref={navRef} onMouseLeave={handleMouseLeave}>
      {routes.map((route) => (
        <NavLink key={route.path} to={route.path} onMouseEnter={handleMouseEnter}>
          {t(route.label)}
        </NavLink>
      ))}
      <LinkUnderline width={underlineWidth} left={underlineLeft} $isHovered={isHovered} />
    </StyledNav>
  );
};

export default Nav;
