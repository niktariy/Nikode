import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'UI-kit/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      },
    },
    children: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Headings: StoryObj<typeof Typography> = {
  render: () => (
    <div>
      <Typography variant="h1">Heading 1 (H1)</Typography>
      <Typography variant="h2">Heading 2 (H2)</Typography>
      <Typography variant="h3">Heading 3 (H3)</Typography>
      <Typography variant="h4">Heading 4 (H4)</Typography>
      <Typography variant="h5">Heading 5 (H5)</Typography>
      <Typography variant="h6">Heading 6 (H6)</Typography>
      <Typography variant="p">Paragraph (P)</Typography>
    </div>
  ),
};

export const H1Example: StoryObj<typeof Typography> = {
  args: {
    variant: 'h1',
    children: 'Пример H1 Заголовка',
  },
};

export const ParagraphExample: StoryObj<typeof Typography> = {
  args: {
    variant: 'p',
    children: 'Это пример параграфа с использованием компонента Typography.',
  },
}; 