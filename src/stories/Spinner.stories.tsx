import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'gradient'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const GradientBrand: Story = {
  args: {
    size: 'lg',
    variant: 'gradient',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
