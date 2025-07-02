import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, StyledDropdownOption } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    triggerLabel: {
      control: 'text',
      description: 'Label for the dropdown trigger button.',
    },
    triggerAriaLabel: {
      control: 'text',
      description: 'ARIA label for the dropdown trigger button.',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls the open/closed state of the dropdown.',
    },
    setIsOpen: {
      action: 'setIsOpen',
      description: 'Function to update the open/closed state.',
    },
    children: {
      control: false,
      description: 'Content of the dropdown menu. Should be StyledDropdownOption components.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerLabel: 'Open Dropdown',
    triggerAriaLabel: 'Toggle dropdown menu',
    children: (
      <>
        <StyledDropdownOption $isActive={false}>Option 1</StyledDropdownOption>
        <StyledDropdownOption $isActive={true}>Option 2 (Active)</StyledDropdownOption>
        <StyledDropdownOption $isActive={false}>Option 3</StyledDropdownOption>
      </>
    ),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <Dropdown {...args} isOpen={isOpen} setIsOpen={setIsOpen} />;
  },
};

export const WithIcon: Story = {
  args: {
    triggerLabel: <>Open With Icon <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg></>,
    triggerAriaLabel: 'Toggle dropdown menu',
    children: (
      <>
        <StyledDropdownOption $isActive={false}>Option 1</StyledDropdownOption>
        <StyledDropdownOption $isActive={false}>Option 2</StyledDropdownOption>
      </>
    ),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <Dropdown {...args} isOpen={isOpen} setIsOpen={setIsOpen} />;
  },
};