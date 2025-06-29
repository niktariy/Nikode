import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Button from '../Button/Button';
import { hexToRgba } from '../../../utils/hexToRgba';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const StyledDropdownButton = styled(Button)`
  gap: ${({ theme }) => theme.spacing(0.5)};
  font-size: 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  & svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
    fill: ${({ theme }) => theme.colors.text};
  }
`;

const StyledDropdownContent = styled.ul`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing(0.5)});
  left: 50%;
  translate: -50%;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.shadow.elevation.md} ${({ theme }) => theme.colors.shadow.main};
  min-width: 6rem;
  width: max-content;
  z-index: ${({ theme }) => theme.zIndex.popover};
  padding: ${({ theme }) => theme.spacing(1)};
  list-style: none;
  margin: 0;
`;

const StyledDropdownOption = styled.button<{ $isActive: boolean; }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1)};
  border: 2px solid transparent;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;

  ${({ $isActive, theme }) =>
    $isActive ?
      css`
      background-color: ${theme.colors.header};
      border-color: ${({ theme }) => theme.colors.border};
      color: ${theme.colors.primary};
      font-weight: bold;
  ` : css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
  `}

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 16)};
  }
  &:hover, &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
    fill: ${({ theme }) => theme.colors.text};
  }
`;

interface DropdownProps {
  triggerLabel: string | ReactNode;
  triggerAriaLabel: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ triggerLabel, triggerAriaLabel, children, isOpen, setIsOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }

      if (isOpen) {
        const menuItems = Array.from(dropdownRef.current?.querySelectorAll('[role="menuitem"]') || []) as HTMLElement[];
        if (menuItems.length === 0) return;

        const focusedItemIndex = menuItems.indexOf(document.activeElement as HTMLElement);

        if (event.key === 'ArrowDown') {
          event.preventDefault();
          const nextIndex = (focusedItemIndex + 1) % menuItems.length;
          menuItems[nextIndex].focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = (focusedItemIndex - 1 + menuItems.length) % menuItems.length;
          menuItems[prevIndex].focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    if (isOpen) {
      // Focus the first menu item when dropdown opens
      const firstMenuItem = dropdownRef.current?.querySelector('[role="menuitem"]') as HTMLElement;
      firstMenuItem?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <StyledDropdownButton
        variant='outlinedQuiet'
        size='small'
        ref={buttonRef}
        onClick={toggleDropdown}
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={triggerAriaLabel}
      >
        {triggerLabel}
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownContent role="menu" tabIndex={-1}>
          {children}
        </StyledDropdownContent>
      )}
    </DropdownContainer>
  );
};

export { Dropdown, StyledDropdownOption }; 