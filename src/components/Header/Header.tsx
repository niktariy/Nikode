import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Navigation/Nav';
import BurgerMenu from '../Navigation/BurgerMenu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { type Theme } from '../../store/themeSlice';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.header};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`

const LogoLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
  font-family: ${({ theme }) => theme.fonts.monospace};
  color: ${({ theme }) => theme.colors.headline};
  font-size: 1.5em;
  text-decoration: none;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Divider = styled.span`
  width: 2px;
  height: 24px;
  margin: 0 ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.text};
`;

const MobileNavWrapper = styled.div<{ $isMenuOpened: boolean; $headerHeight: number }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: ${(props) => (props.$isMenuOpened ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: ${({ $headerHeight }) => $headerHeight}px;
    left: 0;
    width: 100%;
    height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px);
    background-color: ${({ theme }) => theme.colors.body};
    z-index: ${({ theme }) => theme.zIndex.header};
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block; // Always show on desktop
  }
`;

interface HeaderProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ currentTheme, onThemeChange }) => {
  const { t } = useTranslation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const routes = [
    { path: '/', label: 'navigation.about' },
    { path: '/mentoring', label: 'navigation.mentoring' },
    { path: '/development', label: 'navigation.development' },
    { path: '/portfolio', label: 'navigation.portfolio' },
  ];

  return (
    <StyledHeader ref={headerRef}>
      <HeaderContent className="container">
        <LogoLink to="/" aria-label={t('navigation.logo_aria_label')}>
          <img src="/src/assets/Logo.svg" alt="Nikode Logo" style={{ height: '40px' }} />
          Nikode
        </LogoLink>
        <NavContainer>
          <BurgerMenu isOpened={isMenuOpened} onToggle={toggleMenu} />
          <MobileNavWrapper $isMenuOpened={isMenuOpened} $headerHeight={headerHeight}>
            <Nav routes={routes} />
          </MobileNavWrapper>
          <Divider />
          <LanguageSwitcher />
          <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />
        </NavContainer>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
