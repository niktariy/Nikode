import React, {  useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import type { IRouteItem } from '../../types/common';
import TextLink from '../UI/Link/TextLink';

const StyledNavWrapper = styled.div<{ $isMenuOpened: boolean; $headerHeight: number }>`
  display: ${(props) => (props.$isMenuOpened ? 'flex' : 'none')};
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${({ $headerHeight }) => $headerHeight}px 2vw 3vw;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: ${({ theme }) => theme.zIndex.navigation};
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: auto 0;
  font-size: 2em;
`;

interface NavProps {
  routes: IRouteItem[];
  isMenuOpened: boolean;
  isMobile: boolean;
  headerHeight: number;
}

const Nav: React.FC<NavProps> = ({ routes, isMenuOpened, isMobile, headerHeight }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <StyledNavWrapper
      $isMenuOpened={isMenuOpened}
      $headerHeight={headerHeight}
      role="dialog"
      aria-modal="true"
      aria-label="Навигационное меню">
      <StyledNav ref={navRef} aria-label="Навигация сайта">
        {routes.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <TextLink
              key={route.path}
              to={route.path}
              $isActive={isActive}
              tabIndex={0}>
              {t(route.label)}
            </TextLink>
          );
        })}
        {isMobile && 
        <div>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        }
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Nav;