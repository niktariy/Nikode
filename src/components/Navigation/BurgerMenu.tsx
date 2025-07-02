import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes, css } from 'styled-components';
import Button from '../UI/Button/Button';
import { ButtonVariant } from '../../types/common';

interface BurgerMenuProps {
  isOpened: boolean;
  onToggle: () => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const spacing = 8; //px
const width = 28; //px
const bunHeight = 3; // px

const bunTopOut = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  80% { transform: rotate(-60deg); }
  100% { transform: rotate(-45deg); }
`;
const bunTopIn = keyframes`
  0% { transform: rotate(-45deg); }
  20% { transform: rotate(-60deg); }
  80% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
`;
const bunBotOut = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-15deg); }
  80% { transform: rotate(60deg); }
  100% { transform: rotate(45deg); }
`;
const bunBotIn = keyframes`
  0% { transform: rotate(45deg); }
  20% { transform: rotate(60deg); }
  80% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
`;
const bunFillIn = keyframes`
  0% { width: 0; right: 0; }
  40% { width: 0; right: ${width * -1}px; }
  80% { width: ${width - bunHeight}px; right: 6px; }
  100% { width: ${width - bunHeight}px; right: 0; }
`;
const bunFillOut = keyframes`
  0% { width: ${width - bunHeight}px; right: 0; }
  20% { width: 42px; right: 6px; }
  40% { width: 0; right: -40px; }
  100% { width: 0; right: ${width - bunHeight}px; }
`;

const StyledBurgerMenu = styled(Button)`
  display: flex;
  align-items: center;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: var(--header-bgc);
  backdrop-filter: var(--header-drop-filter);
  border-radius: var(--header-br);
  user-select: none;
  -webkit-touch-callout: none;

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
  }

  .burger__buns {
    position: relative;
    width: ${width}px;
    height: ${spacing * 2 + bunHeight}px;
    margin-left: ${spacing}px;
  }

  --color-bun-top: ${({ theme }) => theme.colors.burgerMenu.bunTop};
  --color-bun-mid: ${({ theme }) => theme.colors.burgerMenu.bunMid};
  --color-bun-bot: ${({ theme }) => theme.colors.burgerMenu.bunBot};

  &:hover, &:focus {
    --color-bun-top: ${({ theme }) => theme.colors.burgerMenu.bunTopActive};
    --color-bun-mid: ${({ theme }) => theme.colors.burgerMenu.bunMidActive};
    --color-bun-bot: ${({ theme }) => theme.colors.burgerMenu.bunBotActive};
  }
`;

const StyledBunBase = styled.path<{ $isTop?: boolean; $isMid?: boolean; $isBot?: boolean; $isOpened: boolean }>`
  transition: background-color 0.2s ease;

  animation-duration: 0.6s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  ${({ $isTop, $isOpened }) => $isTop && css`
    fill: var(--color-bun-top);
    animation-name: ${$isOpened ? bunTopOut : bunTopIn};
  `}

  ${({ $isMid, $isOpened }) => $isMid && css`
    fill: var(--color-bun-mid);
    animation-name: ${$isOpened ? bunFillOut : bunFillIn};
  `}

  ${({ $isBot, $isOpened }) => $isBot && css`
    fill: var(--color-bun-bot);
    animation-name: ${$isOpened ? bunBotOut : bunBotIn};
  `}
`;
const StyledBun = React.memo(StyledBunBase);

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpened, onToggle, className, ref }) => {
  const { t } = useTranslation();

  return (
    <StyledBurgerMenu
      onClick={onToggle}
      variant={ButtonVariant.OutlinedQuiet}
      aria-expanded={isOpened}
      aria-controls='main-nav'
      className={className}
      ref={ref}
    >
      {t('navigation.menu')}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" >
        <StyledBun $isTop $isOpened={isOpened} d="M4 6h24"/>
        <StyledBun $isMid $isOpened={isOpened} d="M4 12h20"/>
        <StyledBun $isBot $isOpened={isOpened} d="M4 18h24"/>
      </svg>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;