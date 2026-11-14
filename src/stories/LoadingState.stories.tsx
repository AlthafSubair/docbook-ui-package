import type { Meta, StoryObj } from '@storybook/react';
import { LoadingState } from '../components/LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Components/LoadingState',
  component: LoadingState,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    fullPage: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingState>;

export const Default: Story = {
  args: {
    message: 'Fetching appointments...',
    size: 'md',
  },
};

export const LargeSpinner: Story = {
  args: {
    message: 'Loading patient records...',
    size: 'lg',
  },
};
