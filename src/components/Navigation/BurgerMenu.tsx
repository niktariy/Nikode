import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes, css } from 'styled-components';
import Button from '../UI/Button/Button';
import { ButtonVariant } from '../../types/common';
import { Illustration } from '../Illustrations/Illustration';

interface BurgerMenuProps {
  isOpened: boolean;
  onToggle: () => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const BUN_SIZING = {
  spacing: 4,
  width: 22,
  height: 2,
}

const bunsHeight = BUN_SIZING.spacing * 2 + BUN_SIZING.height * 3; //px
const bunMidStartY = BUN_SIZING.spacing + BUN_SIZING.height;
const bunMidOffsetX = BUN_SIZING.height;
const bunTopStartY = BUN_SIZING.height;
const bunBotStartY = bunMidStartY * 2;

const bunTopClosed = keyframes`
  0% { transform: translateY(${bunMidStartY}px) rotate(45deg); }
  50% { transform: translateY(${bunMidStartY}px) rotate(0deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;
const bunTopOpened = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(${bunMidStartY}px) rotate(0deg); }
  100% { transform: translateY(${bunMidStartY}px) rotate(45deg); }
`;
const bunBotClosed = keyframes`
  0% { transform: translateY(${bunMidStartY * -1}px) rotate(-45deg); }
  50% { transform: translateY(${bunMidStartY * -1}px) rotate(0deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;
const bunBotOpened = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(${bunMidStartY * -1}px) rotate(0deg); }
  100% { transform: translateY(${bunMidStartY * -1}px) rotate(-45deg); }
`;
const bunMidClosed = keyframes`
  0% { scale: 0;}
  50% { scale: 0;}
  100% { scale: 1;}
`;
const bunMidOpened = keyframes`
  0% { scale: 1;}
  50% { scale: 0;}
  100% { scale: 0;}
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

  --color-bun-top: ${({ theme }) => theme.colors.burgerMenu.bunTop};
  --color-bun-mid: ${({ theme }) => theme.colors.burgerMenu.bunMid};
  --color-bun-bot: ${({ theme }) => theme.colors.burgerMenu.bunBot};

  &:hover, &:focus {
    --color-bun-top: ${({ theme }) => theme.colors.burgerMenu.bunTopActive};
    --color-bun-mid: ${({ theme }) => theme.colors.burgerMenu.bunMidActive};
    --color-bun-bot: ${({ theme }) => theme.colors.burgerMenu.bunBotActive};
  }

  svg {
    overflow: visible;
  }
`;

const StyledBunBase = styled.path<{ $isTop?: boolean; $isMid?: boolean; $isBot?: boolean; $isOpened: boolean }>`
  transition: fill ${({theme}) => theme.transition.duration.base} ${({theme}) => theme.transition.timingFunc.easeOutExpo};

  animation-duration: 0.6s;
  animation-direction: normal;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  ${({ $isTop, $isOpened }) => $isTop && css`
    fill: ${$isOpened ? 'currentColor' : 'var(--color-bun-top)'};
    animation-name: ${$isOpened ? bunTopOpened : bunTopClosed};
    transform-origin: top center;
  `}

  ${({ $isMid, $isOpened }) => $isMid && css`
    fill: var(--color-bun-mid);
    transform-origin: center;
    animation-name: ${$isOpened ? bunMidOpened : bunMidClosed};
  `}

  ${({ $isBot, $isOpened }) => $isBot && css`
    fill: ${$isOpened ? 'currentColor' : 'var(--color-bun-bot)'};
    animation-name: ${$isOpened ? bunBotOpened : bunBotClosed};
    transform-origin: bottom center;
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
      <Illustration size={BUN_SIZING.width} height={bunsHeight} viewBox={`0 0 ${BUN_SIZING.width} ${bunsHeight}`} aria-hidden="true">
        <StyledBun $isTop $isOpened={isOpened} d={`M0 ${BUN_SIZING.height}h${BUN_SIZING.width}V0H0v${bunTopStartY}z`}/>
        <StyledBun $isMid $isOpened={isOpened} d={`M${bunMidOffsetX} ${BUN_SIZING.height + bunMidStartY}h${BUN_SIZING.width - bunMidOffsetX}V${bunMidStartY}H${bunMidOffsetX}v${BUN_SIZING.height}z`}/>
        <StyledBun $isBot $isOpened={isOpened} d={`M0 ${BUN_SIZING.height + bunBotStartY}h${BUN_SIZING.width}V${bunBotStartY}H0v${BUN_SIZING.height}z`}/>
      </Illustration>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
