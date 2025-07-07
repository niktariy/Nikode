import type { IllustrationSizeType, SVGComponentType } from "@/types/common";
import { Illustration } from "../Illustration";
import { BUTTON_CODE_SIZES, BUTTON_CODE_PATHS } from "./IllustrationParts.const";
import { useTheme } from "styled-components";

type ButtonCodeTextType = Exclude<keyof typeof BUTTON_CODE_PATHS, 'shadow'>;

interface ButtonCodeIllustrationProps {
  shadowOnly?: boolean,
  size?: IllustrationSizeType;
  textContent?: ButtonCodeTextType;
}

const ButtonCodeIllustration: SVGComponentType<ButtonCodeIllustrationProps> = ({
  shadowOnly = false,
  size = 'default',
  textContent = 'braces',
  ...props
}) => {
  const theme = useTheme();
  const sizeValue = BUTTON_CODE_SIZES[size];
  
  return (
    <Illustration
      size={sizeValue}
      height={sizeValue - 16}
      viewBox={`0 0 ${BUTTON_CODE_SIZES.small} ${BUTTON_CODE_SIZES.small - 16}`}
      {...props}
    >
      {BUTTON_CODE_PATHS.shadow.map((path, index) => (
        <path
          key={'btn_code_shadow'+index}
          fill={theme.colors.illustration.button.shadow}
          d={path}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      ))}
      {!shadowOnly && (
        <g>
          <rect fill={theme.colors.illustration.button.bg} x="24" y="24" width="112" height="96" rx="10.5"/>
          <path
            fill={theme.colors.illustration.button.text}
            d={BUTTON_CODE_PATHS[textContent]}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      )}
    </Illustration>
  )
}

export default ButtonCodeIllustration;