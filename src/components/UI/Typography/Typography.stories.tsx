import Typography from './Typography';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyStyle, TypographyVariant } from '../../../types/common';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'The Typography component provides consistent text styles for headings, paragraphs, and captions across the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TypographyVariant),
    },
    typographyStyle: {
      control: 'select',
      options: Object.values(TypographyStyle),
    },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: {
    children: 'Playground text',
  },
}

export const Headings: Story = {
  render: () => (
    <section>
      <Typography variant={TypographyVariant.h1}>Heading 1 (H1)</Typography>
      <Typography variant={TypographyVariant.h2}>Heading 2 (H2)</Typography>
      <Typography variant={TypographyVariant.h3}>Heading 3 (H3)</Typography>
      <Typography variant={TypographyVariant.h4}>Heading 4 (H4)</Typography>
      <Typography variant={TypographyVariant.h5}>Heading 5 (H5)</Typography>
      <Typography variant={TypographyVariant.h6}>Heading 6 (H6)</Typography>
    </section>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <>
      <Typography variant={TypographyVariant.body1} component="p">Paragraph (body1)</Typography>
      <Typography variant={TypographyVariant.body2} component="p">Paragraph (body2)</Typography>
    </>
  ),
};