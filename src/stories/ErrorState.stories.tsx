import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from '../components/ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Components/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    badge: { control: 'text' },
    illustration: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const ServerError500: Story = {
  args: {
    illustration: 'https://placehold.co/360x360/e2e8f0/64748b?text=500+Error',
    illustrationAlt: '500 Server Error Illustration',
    badge: 'Application Error',
    title: 'Something Went Wrong',
    description: 'Our servers ran into an unexpected hiccup. Our team has been alerted!',
    primaryAction: {
      label: 'Back to Home',
      href: '/',
    },
    secondaryAction: {
      label: 'Try Again',
      onClick: () => alert('Retry clicked'),
    },
  },
};

export const Maintenance: Story = {
  args: {
    illustration: 'https://placehold.co/360x360/e2e8f0/64748b?text=Maintenance',
    illustrationAlt: 'Maintenance Illustration',
    badge: 'Maintenance',
    title: 'Under Scheduled Maintenance',
    description: 'DocBook is undergoing scheduled upgrades to serve you better.',
    primaryAction: {
      label: 'Reload Page',
      onClick: () => window.location.reload(),
    },
  },
};
