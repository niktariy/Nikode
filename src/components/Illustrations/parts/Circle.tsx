import type { IllustrationSizeType, SVGComponentType } from '@/types/common';
import { useTheme } from 'styled-components';
import { Illustration } from '../Illustration';
import { CIRCLE_SINGLE_PATH, CIRCLE_SIZES } from './IllustrationParts.const';

interface CircleIllustrationProps {
  size?: IllustrationSizeType;
}

const CircleIllustration: SVGComponentType<CircleIllustrationProps> = ({
  size = 'default',
  ...props
}) => {
  const theme = useTheme();
  const sizeValue = CIRCLE_SIZES[size];

  return (
    <Illustration size={sizeValue} viewBox={`0 0 ${CIRCLE_SIZES.small} ${CIRCLE_SIZES.small}`} {...props}>
      <path
        fill={theme.colors.illustration.circle.big}
        d={CIRCLE_SINGLE_PATH}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Illustration>
  );
};

export default CircleIllustration;