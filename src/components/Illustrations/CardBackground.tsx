import { useId, useLayoutEffect, useState, type ComponentProps, type FC } from 'react';
import { useTheme } from 'styled-components';
import { CARD_BACKGROUND_PATHS, CardBackgroundIllustrationEnum } from './CardBackground.const';


// Создаем фабрику компонентов
const createCardBackgroundComponent = (variant: CardBackgroundIllustrationEnum): FC<ComponentProps<'svg'>> => {
  if (!Object.values(CardBackgroundIllustrationEnum).includes(variant)) {
    throw new Error(`Invalid variant: ${variant}`);
  }
  return (props) => (
    <CardBackgroundIllustration displayVariant={variant} {...props} />
  );
};

// Создаем компоненты через фабрику
export const CardBackgroundIllustrations = Object.fromEntries(
  Object.values(CardBackgroundIllustrationEnum)
    .filter((variant): variant is CardBackgroundIllustrationEnum => typeof variant === 'number')
    .map((variant) => [
      `CardBackgroundIllustration${variant}`,
      createCardBackgroundComponent(variant)
    ])
) as {
  [key: string]: FC<ComponentProps<'svg'>>;
};

// Создаем массив компонентов
export const PriceBackgrounds = Object.values(CardBackgroundIllustrations);

// Общий компонент
export const CardBackgroundIllustration: FC<ComponentProps<'svg'> & { displayVariant: CardBackgroundIllustrationEnum }> = ({ displayVariant, ...props }) => {
  const theme = useTheme();
  const maskId = useId();
  const paths = CARD_BACKGROUND_PATHS[displayVariant];
  const [shapeFill, setShapeFill] = useState<string>(theme.colors.illustration.shape.bg.main700);
  const [linesFill, setLinesFill] = useState<string>(theme.colors.illustration.shape.lines.main700);

  useLayoutEffect(() => {
    switch (displayVariant) {
      case CardBackgroundIllustrationEnum.Second:
      case CardBackgroundIllustrationEnum.Third:
        setShapeFill(theme.colors.illustration.shape.bg.main300);
        setLinesFill(theme.colors.illustration.shape.lines.main300);
        break;
      case CardBackgroundIllustrationEnum.First:
      case CardBackgroundIllustrationEnum.Fourth:
      default:
        setShapeFill(theme.colors.illustration.shape.bg.main700);
        setLinesFill(theme.colors.illustration.shape.lines.main700);
    }
  }, [displayVariant, theme])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="145" height="340" viewBox="0 0 145 340" fill="none" {...props}>
      <mask id={maskId} style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="145" height="340">
        <path fill="#000000" fillRule="evenodd" clipRule="evenodd" d={paths?.mask} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect fill={shapeFill} width="145" height="340"/>
        <path fill={linesFill} d={paths?.lines} />
      </g>
    </svg>
  );
};
