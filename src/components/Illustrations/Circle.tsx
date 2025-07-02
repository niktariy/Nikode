import React from 'react';
import { useTheme } from 'styled-components';

export enum IllustrationCircleSize {
  Small = 'small',
  Default = 'default',
  Big = 'big',
}

interface IllustrationCircleProps extends React.SVGProps<SVGSVGElement> {
  variant?: IllustrationCircleSize;
}

const IllustrationCircle: React.FC<IllustrationCircleProps> = ({ variant = IllustrationCircleSize.Default, ...props }) => {
  const theme = useTheme();
  let svgContent;
  switch (variant) {
    case IllustrationCircleSize.Small:
      svgContent = (
        <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fillRule="evenodd" clipRule="evenodd" d="M60.5 120.7a60 60 0 100-120 60 60 0 000 120z" fill={theme.colors.illustration.circle.big} />
        </svg>
      );
      break;
    case IllustrationCircleSize.Big:
      svgContent = (
        <svg width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fillRule="evenodd" clipRule="evenodd" d="M97.5 194.7a97 97 0 100-194 97 97 0 000 194z" fill={theme.colors.illustration.circle.big} />
        </svg>
      );
      break;
    case IllustrationCircleSize.Default:
    default:
      svgContent = (
        <svg width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fillRule="evenodd" clipRule="evenodd" d="M80.5 160.7a80 80 0 100-160 80 80 0 000 160z" fill={theme.colors.illustration.circle.big} />
        </svg>
      );
      break;
  }

  return svgContent;
};

export default IllustrationCircle;
