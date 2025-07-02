import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import { ButtonSize, ButtonVariant } from '../../../types/common';
import { MenuIcon } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(ButtonVariant),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(ButtonSize),
      },
    },
    onClick: { action: 'clicked' },
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

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    label: 'Filled Button',
    variant: ButtonVariant.Filled,
    size: ButtonSize.Medium,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: ButtonVariant.Outlined,
    size: ButtonSize.Medium,
  },
};

export const OutlinedQuiet: Story = {
  args: {
    label: 'Outlined Quiet',
    variant: ButtonVariant.OutlinedQuiet,
    size: ButtonSize.Medium,
  },
};


export const Small: Story = {
  args: {
    label: 'Small Button',
    size: ButtonSize.Small,
    variant: ButtonVariant.Filled,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: ButtonSize.Large,
    variant: ButtonVariant.Filled,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    variant: ButtonVariant.Filled,
  },
};

export const WithChildren: Story = {
  args: {
    children: <>Menu<MenuIcon/></>,
    variant: ButtonVariant.OutlinedQuiet,
    size: ButtonSize.Medium,
  },
};

export const AsLink: Story = {
  args: {
    label: 'Button as Link',
    as: 'a',
    href: '#',
    variant: ButtonVariant.Filled,
  },
};

export const AsDiv: Story = {
  args: {
    label: 'Button as Div',
    as: 'div',
    variant: ButtonVariant.Outlined,
  },
};