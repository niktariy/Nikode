import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface BurgerMenuProps {
  isOpened: boolean;
  onToggle: () => void;
}

const spacing = 8; //px
const height = 24; //px
const width = 28; //px
const bunHeight = 3; // px

// Keyframes
const bunTopOut = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(15deg);
  }
  80% {
    transform: rotate(-60deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const bunTopIn = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  20% {
    transform: rotate(-60deg);
  }
  80% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const bunBotOut = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  80% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const bunBotIn = keyframes`
  0% {
    transform: rotate(45deg);
  }
  20% {
    transform: rotate(60deg);
  }
  80% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const bunFillIn = keyframes`
  0% {
    width: 0;
    right: 0;
  }
  40% {
    width: 0;
    right: ${width * -1}px;
  }
  80% {
    width: ${width - bunHeight}px;
    right: 6px;
  }
  100% {
    width: ${width - bunHeight}px;
    right: 0;
  }
`;

const bunFillOut = keyframes`
  0% {
    width: ${width - bunHeight}px;
    right: 0;
  }
  20% {
    width: 42px;
    right: 6px;
  }
  40% {
    width: 0;
    right: -40px;
  }
  100% {
    width: 0;
    right: ${width - bunHeight}px;
  }
`;

const StyledBurger = styled.div`
  width: ${width + 2 * spacing}px;
  height: ${height + 2 * spacing}px;
  display: none; // Default to none, then show on mobile
  position: relative;
  padding: ${1.5 * spacing}px ${spacing}px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: ease 0.001s;
  z-index: ${({ theme }) => theme.zIndex.header} + 1;
  -webkit-touch-callout: none;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }

  .burger__buns {
    position: relative;
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

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpened, onToggle }) => {
  return (
    <StyledBurger onClick={onToggle} aria-label="Open menu">
      <div className="burger__buns">
        <StyledBun $isTop $isOpened={isOpened} />
        <StyledBun $isMid $isOpened={isOpened} />
        <StyledBun $isBot $isOpened={isOpened} />
      </div>
    </StyledBurger>
  );
};

export default BurgerMenu; 