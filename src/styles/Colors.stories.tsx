import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { palette } from './palettes'; // Измененный путь
import { copyToClipboard } from '../utils/copyToClipboard';
import { StoryTitle, StorySubTitle } from '../stories/StorybookTypography';

interface ColorCardProps {
  paletteName: string;
  shade: string | number;
  hexValue: string;
}

const CardContainer = styled.div`
  flex: 1 0 180px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 8px 64px 0px rgba(22, 18, 51, 0.08);
  overflow: hidden;
  max-width: 300px;
`;

const ColorBox = styled.div`
  background-color: var(--color-box-hex, white);
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px 8px 0 0;
`;

const CardDetails = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 400;
  background-color: #ffffff;
  color: #2d2866;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const DetailText = styled.span`
  font-family: 'JetBrains Mono';
  font-size: 0.75rem;
`;

const HexValueText = styled.span`
  font-family: 'JetBrains Mono';
  font-size: 1rem;
`;

const ColorCard: React.FC<ColorCardProps> = ({ paletteName, shade, hexValue }) => {
  const colorBoxHex = { "--color-box-hex": hexValue } as React.CSSProperties;

  return (
    <CardContainer>
      <ColorBox onClick={() => copyToClipboard(hexValue)} style={colorBoxHex} />
      <CardDetails>
        <DetailRow onClick={() => copyToClipboard(hexValue)}>
          <DetailText>HEX</DetailText>
          <HexValueText>{hexValue}</HexValueText>
        </DetailRow>
        <DetailRow onClick={() => copyToClipboard(`palette.${paletteName}[${shade}]`)}>
          <DetailText>{paletteName}</DetailText>
          <DetailText>{shade}</DetailText>
        </DetailRow>
      </CardDetails>
    </CardContainer>
  )
};

const PaletteSection = styled.div`
  margin-bottom: 50px;
`;

const ColorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
`;

const MainContainer = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: #ffffff;
  max-width: 100%;
  
  container: color-grid / inline-size;
  
  @container color-grid (width < 600px) {
    ${CardContainer} {
      max-width: 100%;
    }
  }
`;

const renderPalette = (
  paletteName: string,
  colors: { [key: string]: string },
) => (
  <PaletteSection>
    <StorySubTitle>{paletteName}</StorySubTitle>
    <ColorGrid>
      {Object.entries(colors).map(([shade, hexValue]) => (
        <ColorCard key={shade} paletteName={paletteName.split(' ')[0].toLowerCase()} shade={shade} hexValue={hexValue} />
      ))}
    </ColorGrid>
  </PaletteSection>
);

const meta: Meta = {
  title: 'UI-kit/Colors',
};

export default meta;

export const ColorsPalette: StoryObj = {
  render: () => (
    <MainContainer>
      <StoryTitle>UI-kit / Colors</StoryTitle>

      {renderPalette('Main colors', palette.main)}
      {renderPalette('Accent colors', palette.accent)}
      {renderPalette('Neutral colors', palette.neutral)}
      {renderPalette('Peach colors', palette.peach)}
      {renderPalette('Pink colors', palette.pink)}
      {renderPalette('Lilac colors', palette.lilac)}
      {renderPalette('Grey colors', palette.grey)}
      {palette.base && renderPalette('Base colors', { White: palette.base.white })}
    </MainContainer>
  ),
}; 