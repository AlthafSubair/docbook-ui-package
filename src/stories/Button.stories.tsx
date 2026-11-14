import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Book Appointment',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancel / Back',
    variant: 'secondary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving Profile...',
    isLoading: true,
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Confirm Booking',
    disabled: true,
  },
};
