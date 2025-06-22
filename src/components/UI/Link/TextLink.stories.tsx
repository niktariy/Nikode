import type { Meta, StoryObj } from '@storybook/react';
import TextLink from './TextLink';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkVariant } from '../../../types/common';

const meta: Meta<typeof TextLink> = {
  title: 'UI/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(LinkVariant),
      },
    },
    href: {
      control: 'text',
    },
    to: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Link text',
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const PrimaryVariant: Story = {
  args: {
    href: '#',
    variant: LinkVariant.Primary,
    children: 'Primary Link',
  },
};

export const AccentVariant: Story = {
  args: {
    href: '#',
    variant: LinkVariant.Accent,
    children: 'Accent Link',
  },
};

export const NeutralVariant: Story = {
  args: {
    href: '#',
    variant: LinkVariant.Neutral,
    children: 'Neutral Link',
  },
};

export const RouterLink: Story = {
  args: {
    to: '/',
    children: 'Router Link',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://google.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External Link',
  },
}; 