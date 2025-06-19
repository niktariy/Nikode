import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import NavLink from './NavLink';
import { useLocation } from 'react-router-dom';

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
  $isActive: boolean;
}

const LinkUnderline = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== '$isActive',
}) <LinkUnderlineProps>`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  width: ${({ width }) => width}px;
  left: ${({ left }) => left}px;
  transform-origin: bottom;
  transform: scaleY(${({ $isActive }) => ($isActive ? 1 : 0)});
  will-change: width, left, transform;
  transition-property: width, left, transform;
  transition-duration: ${({ theme }) => theme.transition.durationBase};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc.easeInOutQuart};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const Nav: React.FC<NavProps> = ({ routes }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [isActiveUnderline, setIsActiveUnderline] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeLinkRef.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeLinkRef.current.getBoundingClientRect();
      setUnderlineWidth(activeRect.width);
      setUnderlineLeft(activeRect.left - navRect.left);
      setIsActiveUnderline(true);
    }
  }, [location.pathname, routes]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setUnderlineWidth(targetRect.width);
      setUnderlineLeft(targetRect.left - navRect.left);
      setIsActiveUnderline(true);
    }
  };

  const handleMouseLeave = () => {
    if (activeLinkRef.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeLinkRef.current.getBoundingClientRect();
      setUnderlineWidth(activeRect.width);
      setUnderlineLeft(activeRect.left - navRect.left);
      setIsActiveUnderline(true);
    }
  };

  return (
    <StyledNav ref={navRef} onMouseLeave={handleMouseLeave}>
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          onMouseEnter={handleMouseEnter}
          isActive={location.pathname === route.path}
          ref={location.pathname === route.path ? activeLinkRef : null}
        >
          {t(route.label)}
        </NavLink>
      ))}
      <LinkUnderline width={underlineWidth} left={underlineLeft} $isActive={isActiveUnderline} />
    </StyledNav>
  );
};

export default Nav;
