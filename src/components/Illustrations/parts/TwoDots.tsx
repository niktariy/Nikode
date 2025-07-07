/*
// <svg width="70" height="104" viewBox="0 0 70 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d=fill="#BCEBE3"/></svg>
*/
import type { SVGComponentType } from '@/types/common';
import { useTheme } from 'styled-components';
import { Illustration } from '../Illustration';
import { TWO_DOTS_PATH, TWO_DOTS_SIZES } from './IllustrationParts.const';

const TwoDotsIllustration: SVGComponentType = ({
  ...props
}) => {
  const theme = useTheme();

  return (
    <Illustration size={TWO_DOTS_SIZES.small} height={TWO_DOTS_SIZES.default} viewBox={`0 0 ${TWO_DOTS_SIZES.small} ${TWO_DOTS_SIZES.default}`} {...props}>
      <path
        fill={theme.colors.illustration.circle.small}
        d={TWO_DOTS_PATH}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Illustration>
  );
};

export default TwoDotsIllustration;