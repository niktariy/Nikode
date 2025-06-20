import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import { hexToRgba } from '../../../utils/hexToRgba';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const StyledDropdownButton = styled(Button)`
  gap: ${({ theme }) => theme.spacing(0.5)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  box-shadow: 0 0 0 transparent;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadow.elevation.flat} ${({ theme }) => theme.colors.shadow.main};
  }

  &[aria-expanded="true"] {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
    fill: ${({ theme }) => theme.colors.text};
  }
`;

const StyledDropdownContent = styled.ul`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing(0.5)});
  left: 0;
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

interface StyledDropdownOptionProps {
  $isActive: boolean;
}

const StyledDropdownOption = styled.button<StyledDropdownOptionProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1)};
  border: 2px solid transparent;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 16)};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.border};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color: ${theme.colors.header};
    border-color: ${theme.colors.primary};
    font-weight: bold;
  `}

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <StyledDropdownButton onClick={toggleDropdown} aria-expanded={isOpen} aria-haspopup="menu" variant='outlined' size='small' aria-label={triggerAriaLabel}>
        {triggerLabel}
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownContent>
          {children}
        </StyledDropdownContent>
      )}
    </DropdownContainer>
  );
};

export { Dropdown, StyledDropdownOption }; 