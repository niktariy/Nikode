import { useTheme } from 'styled-components';
import { Illustration } from '../Illustration';
import type { IllustrationSizeType, SVGComponentType } from '@/types/common';
import { HEARTS_PATHS, HEARTS_SIZES } from './IllustrationParts.const';

interface HeartsIllustrationProps {
  size?: IllustrationSizeType;
}

const HeartsIllustration: SVGComponentType<HeartsIllustrationProps> = ({
  size = 'default',
  ...props
}) => {
  const theme = useTheme();
  const sizeValue = HEARTS_SIZES[size];

  return (
    <Illustration size={sizeValue} viewBox={`0 0 ${HEARTS_SIZES.small} ${HEARTS_SIZES.small}`} {...props}>
      {HEARTS_PATHS.map((path, index) => (
        <path
          key={'hearts_' + index}
          fill={theme.colors.illustration.hearts}
          d={path}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      ))}
    </Illustration>
  );
};

export default HeartsIllustration;
