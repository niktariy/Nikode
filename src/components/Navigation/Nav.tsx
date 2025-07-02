import React, { useRef, useEffect, useMemo, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LinkVariant, type IRouteItem } from '../../types/common';
import TextLink from '../UI/Link/TextLink';
import SocialLinks from '../SocialLinks/SocialLinks';

const StyledDialog = styled.div<{ $isMenuOpened: boolean; $headerHeight: number }>`
  display: ${(props) => (props.$isMenuOpened ? 'block' : 'none')};
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100svw;
  height: 100svh;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${({ $headerHeight }) => $headerHeight}px 0 7vmin;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: ${({ theme }) => theme.zIndex.navigation};

  .container {
    height: 100%;
  }
`;

const NavigationGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};

  & > * {
    margin-top: 4vmin;
  }

  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(10)};
    align-items: end;
  }
`

const StyledNav = styled.nav`
  grid-area: navWrapper;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: 10vmin;
  font-family: ${({ theme }) => theme.fonts.accent};

  @media (width > ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 5vmin;
  }
  
  @media (width > ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }
`;

const SocialsArea = styled.div`
  grid-area: socials;
`

const Switchers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`

interface NavProps {
  routes: IRouteItem[];
  isMenuOpened: boolean;
  isMobile: boolean;
  headerHeight: number;
  onClose: () => void;
  burgerButtonRef: RefObject<HTMLButtonElement | null>;
}

const Nav: React.FC<NavProps> = ({ routes, isMenuOpened, isMobile, headerHeight, onClose, burgerButtonRef }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpened && dialogRef.current) {
      const focusableEls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      ));
      if (burgerButtonRef?.current) {
        focusableEls.push(burgerButtonRef.current);
      }
      if (focusableEls.length) {
        focusableEls[0].focus();
      }
    }
  }, [isMenuOpened, dialogRef, burgerButtonRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      if (onClose) {
        onClose();
      }
    }
    if (isMenuOpened && dialogRef.current) {
      const focusableEls = dialogRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }
  };

  const memoizedLinks = useMemo(
    () =>
      routes.map((route) => {
        const isActive = location.pathname === route.path;
        return (
          <TextLink
            key={route.id ?? route.path}
            to={route.path}
            isActive={isActive}
            aria-current={isActive ? "page" : undefined}
            variant={LinkVariant.Neutral}
          >
            {t(route.label)}
          </TextLink>
        );
      }),
    [routes, location.pathname, t]
  );

  return (
    <StyledDialog
      $isMenuOpened={isMenuOpened}
      $headerHeight={headerHeight}
      role="dialog"
      aria-modal="true"
      aria-label={t('navigation_menu')}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={dialogRef}
    >
      <NavigationGrid className="container">
        {isMobile && 
          <Switchers>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Switchers>
        }
        <SocialsArea>
          <SocialLinks />
        </SocialsArea>
        <StyledNav aria-label={t('site_navigation')} id='main-nav'>
          {memoizedLinks}
        </StyledNav>
      </NavigationGrid>
    </StyledDialog>
  );
};

export default Nav;