import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

type DisplayVariant = 'main' | 'code' | 'utube';

interface BrowserIllustrationProps {
  displayVariant?: DisplayVariant;
  className?: string;
}

const lightMainSvgContent = `

<rect x="356" y="72.002" width="194" height="232" rx="2" fill="var(--i-web-block)"/>
<rect x="32" y="72.002" width="294" height="232" rx="2" fill="var(--i-web-block)"/>
<rect x="62" y="100" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="128.001" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="156.001" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="182.002" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="208.003" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="236.004" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="100" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="156.001" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="182.002" width="140" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="208.003" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="128.001" width="64" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="160" y="128.001" width="96" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="236.004" width="104" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="200" y="236" width="66" height="12" rx="1" fill="var(--i-web-code)"/>
`;

const darkMainSvgContent = `

<rect x="356" y="72.002" width="194" height="232" rx="2" fill="var(--i-web-block)"/>
<rect x="32" y="72.002" width="294" height="232" rx="2" fill="var(--i-web-block)"/>
<rect x="62" y="100" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="128.001" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="156.001" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="182.002" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="208.003" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="236.004" width="12" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="100" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="156.001" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="182.002" width="140" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="208.003" width="206" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="128.001" width="64" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="160" y="128.001" width="96" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="86" y="236.004" width="104" height="12" rx="1" fill="var(--i-web-code)"/>
<rect x="200" y="236" width="66" height="12" rx="1" fill="var(--i-web-code)"/>
`;

const lightCodeSvgContent = `

<rect x="36" y="75.7651" width="476" height="224" rx="2" fill="var(--i-web-block)"/>
<rect x="61.9999" y="106" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="140" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="174" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="208" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="106" width="364" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="174" width="345" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="208" width="306" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="140" width="77" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="183" y="140" width="214" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="242" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="242" width="154" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="256" y="241.765" width="88" height="14" rx="1" fill="var(--i-web-code)"/>
`;

const darkCodeSvgContent = `

<rect x="36" y="75.7651" width="476" height="224" rx="2" fill="var(--i-web-block)"/>
<rect x="61.9999" y="106" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="140" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="174" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="208" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="106" width="364" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="174" width="345" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="208" width="306" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="140" width="77" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="183" y="140" width="214" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="62" y="242" width="14" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="92" y="242" width="154" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="256" y="241.765" width="97" height="14" rx="1" fill="var(--i-web-code)"/>
`;

const lightUtubeSvgContent = `

<rect x="38" y="87.6382" width="311" height="213" rx="2" fill="var(--i-web-block)"/>
<rect width="143" height="90" rx="2" transform="matrix(-1 0 0 1 511 88)" fill="var(--i-web-block)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M170.551 231.974C169.887 232.414 169 231.937 169 231.14V156.86C169 156.063 169.887 155.586 170.551 156.026L226.738 193.166C227.336 193.561 227.336 194.439 226.738 194.834L170.551 231.974Z" fill="var(--i-web-code)"/>
<rect x="368" y="225" width="141" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="194" width="127" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="256" width="77" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="287" width="106" height="14" rx="1" fill="var(--i-web-code)"/>
`;

const darkUtubeSvgContent = `

<rect x="38" y="87.6382" width="311" height="213" rx="2" fill="var(--i-web-block)"/>
<rect width="143" height="90" rx="2" transform="matrix(-1 0 0 1 511 88)" fill="var(--i-web-block)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M170.551 231.974C169.887 232.414 169 231.937 169 231.14V156.86C169 156.063 169.887 155.586 170.551 156.026L226.738 193.166C227.336 193.561 227.336 194.439 226.738 194.834L170.551 231.974Z" fill="var(--i-web-code)"/>
<rect x="368" y="225" width="141" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="194" width="127" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="256" width="77" height="14" rx="1" fill="var(--i-web-code)"/>
<rect x="368" y="287" width="106" height="14" rx="1" fill="var(--i-web-code)"/>
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: auto;
    max-width: 582px; /* Ширина из Figma для main варианта */
  }
`;

const BrowserHead = ({ width, type }: { width: number, type?: string }) => {
  return (
    type === 'main' ?
      (
        <path d={`M${width} 40.0012H0V16.0005C0 7.16366 7.16344 0 16 0H566C574.837 0 ${width} 7.16366 ${width} 16.0005V40.0012Z`} fill="var(--i-web-head)" />
      ) :
      (
        <path d={`M0 16C0 7.16344 7.16344 0 16 0H532C540.837 0 ${width} 7.16344 ${width} 16V40H0V16Z`} fill="var(--i-web-head)" />
      )
  );
};

const BrowserIllustration: React.FC<BrowserIllustrationProps> = ({
  displayVariant = 'main',
  className,
}) => {
  const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;
  const theme = useSelector(selectCurrentTheme);
  const [svgWidth, setSvgWidth] = useState(0);

  const svgContent = React.useMemo(() => {
    switch (displayVariant) {
      case 'code':
        return theme === 'dark' ? darkCodeSvgContent : lightCodeSvgContent;
      case 'utube':
        return theme === 'dark' ? darkUtubeSvgContent : lightUtubeSvgContent;
      case 'main':
      default:
        return theme === 'dark' ? darkMainSvgContent : lightMainSvgContent;
    }
  }, [displayVariant, theme]);

  React.useMemo(() => {
    switch (displayVariant) {
      case 'code':
      case 'utube':
        setSvgWidth(548);
        break;
      case 'main':
      default:
        setSvgWidth(582);
    }
  }, [displayVariant]);

  return (
    <IllustrationContainer className={className}>
      <svg width={svgWidth} height="336" viewBox={`0 0 ${svgWidth} 336`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={svgWidth} height="336" rx="16" fill="var(--i-web-body)" />
        <BrowserHead type={displayVariant} width={svgWidth} />
        <path d="M24 28.0005C28.4183 28.0005 32 24.4188 32 20.0005C32 15.5822 28.4183 12.0005 24 12.0005C19.5817 12.0005 16 15.5822 16 20.0005C16 24.4188 19.5817 28.0005 24 28.0005Z" fill="var(--i-web-dots)" />
        <path d="M48 28.0005C52.4183 28.0005 56 24.4188 56 20.0005C56 15.5822 52.4183 12.0005 48 12.0005C43.5817 12.0005 40 15.5822 40 20.0005C40 24.4188 43.5817 28.0005 48 28.0005Z" fill="var(--i-web-dots)" />
        <path d="M72 28.0005C76.4183 28.0005 80 24.4188 80 20.0005C80 15.5822 76.4183 12.0005 72 12.0005C67.5817 12.0005 64 15.5822 64 20.0005C64 24.4188 67.5817 28.0005 72 28.0005Z" fill="var(--i-web-dots)" />
        {svgContent}
      </svg>
    </IllustrationContainer>
  );
};

export default BrowserIllustration; 
// @ts-check