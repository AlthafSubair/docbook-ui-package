import type { Meta, StoryObj } from '@storybook/react';
import { ErrorCard } from '../components/ErrorCard';

const meta: Meta<typeof ErrorCard> = {
  title: 'Components/ErrorCard',
  component: ErrorCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    retryLabel: { control: 'text' },
    showIcon: { control: 'boolean' },
    fullPage: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorCard>;

export const Default: Story = {
  args: {
    title: 'Failed to load clinic list.',
    description: 'Please check your internet connection and try again.',
    onRetry: () => alert('Retry clicked!'),
    retryLabel: 'Try Again',
    showIcon: true,
  },
};

export const Simple: Story = {
  args: {
    title: 'Could not fetch records.',
    description: 'Temporary server issue. Please try in a few moments.',
  },
};
