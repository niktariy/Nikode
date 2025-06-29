import React, { useState, useEffect, useRef } from 'react';

import SunFilledIcon from '../../assets/ant-design_sun-filled.svg?react';
import MoonFilledIcon from '../../assets/ant-design_moon-filled.svg?react';

import { setTheme, type Theme } from '../../store/themeSlice';
import { Dropdown, StyledDropdownOption } from '../UI/Dropdown/Dropdown';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';

// interface ThemeSwitcherProps {
//   currentTheme: Theme;
//   onThemeChange: (theme: Theme) => void;
// }

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.theme);

  const handleThemeChange = (theme: Theme) => {
    dispatch(setTheme(theme));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const getThemeIcon = () => {
    if (currentTheme === 'light') {
      return <SunFilledIcon />;
    }
    if (currentTheme === 'dark') {
      return <MoonFilledIcon />;
    }
    // For 'os-default', if the OS is dark, show moon, else show sun.
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return <MoonFilledIcon />;
    } else {
      return <SunFilledIcon />;
    }
  };

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      triggerLabel={
        <>
          {getThemeIcon()} Theme
        </>
      }
      triggerAriaLabel={t('toggle_theme')}
    >
      <li>
        <StyledDropdownOption
          $isActive={currentTheme === 'os-default'}
          onClick={() => handleThemeChange('os-default')}
        >
          <MoonFilledIcon />
          <span>OS Default</span>
        </StyledDropdownOption>
      </li>
      <li>
        <StyledDropdownOption
          $isActive={currentTheme === 'light'}
          onClick={() => handleThemeChange('light')}
        >
          <SunFilledIcon />
          <span>Light</span>
        </StyledDropdownOption>
      </li>
      <li>
        <StyledDropdownOption
          $isActive={currentTheme === 'dark'}
          onClick={() => handleThemeChange('dark')}
        >
          <MoonFilledIcon />
          <span>Dark</span>
        </StyledDropdownOption>
      </li>
    </Dropdown>
  );
};

export default ThemeSwitcher;
