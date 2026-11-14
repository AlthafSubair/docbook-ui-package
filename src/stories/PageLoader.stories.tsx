import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from '../components/PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'Components/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    fullScreen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {
  args: {
    size: 'lg',
    fullScreen: false,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    fullScreen: false,
  },
};
