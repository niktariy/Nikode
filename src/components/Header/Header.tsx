import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import Nav from '@components/Navigation/Nav';
import BurgerMenu from '@components/Navigation/BurgerMenu';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import { hexToRgba } from '@/utils/hexToRgba';
import type { IRouteItem } from '@/types/common';

const StyledHeader = styled.header`
  --header-bgc: ${({ theme }) => hexToRgba(theme.colors.header, 50)};
  --header-border: 1px solid ${({ theme }) => theme.colors.border};
  --header-br: ${({ theme }) => theme.radii.pill};
  --header-drop-filter: blur(${({ theme }) => theme.spacing(2)});

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  max-width: var(--c-max-w);
  margin: 0 auto;
  padding: var(--c-pad);
  padding-top: 2vw;
`;

const StyledHeaderActions = styled.div<{ $padding?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  padding: ${({ $padding, theme }) => $padding ? $padding : theme.spacing(1)};
  background-color: var(--header-bgc);
  backdrop-filter: var(--header-drop-filter);
  border: var(--header-border);
  border-radius: var(--header-br);
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const LogoLink = styled(Link)`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2.5)}`};
  color: ${({ theme }) => theme.colors.headline};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 1.5em;
  text-decoration: none;
  position: relative;
  background-color: var(--header-bgc);
  backdrop-filter: var(--header-drop-filter);
  border: var(--header-border);
  border-radius: var(--header-br);
  z-index: ${({ theme }) => theme.zIndex.header};
`;

interface HeaderProps {
  routes: IRouteItem[];
}

const Header: React.FC<HeaderProps> = ({ routes }) => {
  const { t } = useTranslation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location.pathname]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < parseInt(theme.breakpoints.sm, 10));
    };

    checkIsMobile(); // Initial check

    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('orientationchange', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('orientationchange', checkIsMobile);
    };
  }, [theme.breakpoints.sm]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const closeMenu = () => setIsMenuOpened(false);

  return (
    <StyledHeader ref={headerRef}>
      <HeaderContent>
        <LogoLink to="/" aria-label={t('navigation.logo_aria_label')}>
          &lt;Niktariy<span>/</span>&gt;
        </LogoLink>
        
        {!isMobile && <StyledHeaderActions>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </StyledHeaderActions>}

        <BurgerMenu isOpened={isMenuOpened} onToggle={toggleMenu} ref={burgerButtonRef} />
        <Nav
          routes={routes}
          isMenuOpened={isMenuOpened}
          isMobile={isMobile}
          headerHeight={headerHeight}
          onClose={closeMenu}
          burgerButtonRef={burgerButtonRef}
        />
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
