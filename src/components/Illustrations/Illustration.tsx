import type { SVGComponentType } from '@/types/common';
import React from 'react';

interface BaseIllustrationProps {
  size: number;
  viewBox: string;
  children: React.ReactNode;
}

export const Illustration: SVGComponentType<BaseIllustrationProps> = ({
  size,
  viewBox,
  children,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={props.height || size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};
