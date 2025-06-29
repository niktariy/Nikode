import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes, css } from 'styled-components';
import Button from '../UI/Button/Button';

interface BurgerMenuProps {
  isOpened: boolean;
  onToggle: () => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const spacing = 8; //px
const width = 28; //px
const bunHeight = 3; // px

// ... (keyframes remain unchanged)
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

const StyledBun = styled.span<{ $isTop?: boolean; $isMid?: boolean; $isBot?: boolean; $isOpened: boolean }>`
  position: absolute;
  display: block;
  width: ${width}px;
  height: ${bunHeight}px;
  border-radius: 2px;
  transition: background-color 0.2s ease;

  animation-duration: 0.6s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  ${({ $isTop, $isOpened }) => $isTop && css`
    top: 0px;
    background-color: var(--color-bun-top);
    transform-origin: ${width - bunHeight}px 2px;
    animation-name: ${$isOpened ? bunTopOut : bunTopIn};
  `}

  ${({ $isMid, $isOpened }) => $isMid && css`
    top: ${spacing}px;
    background-color: var(--color-bun-mid);
    animation-name: ${$isOpened ? bunFillOut : bunFillIn};
  `}

  ${({ $isBot, $isOpened }) => $isBot && css`
    top: ${2 * spacing}px;
    background-color: var(--color-bun-bot);
    transform-origin: ${width - bunHeight}px 2px;
    animation-name: ${$isOpened ? bunBotOut : bunBotIn};
  `}
`;

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpened, onToggle, className, ref }) => {
  const { t } = useTranslation();
  return (
    <StyledBurgerMenu
      onClick={onToggle}
      variant='outlinedQuiet'
      aria-label="Open menu"
      className={className}
      ref={ref}
    >
      {t('navigation.menu')}
      <div className="burger__buns">
        <StyledBun $isTop $isOpened={isOpened} />
        <StyledBun $isMid $isOpened={isOpened} />
        <StyledBun $isBot $isOpened={isOpened} />
      </div>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
