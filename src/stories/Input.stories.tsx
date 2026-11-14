import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Search, Lock } from 'lucide-react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter full name...',
  },
};

export const WithLabelAndHelper: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: "We'll send your appointment confirmation here.",
    icon: <Mail className="size-5" />,
  },
};

export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    icon: <Lock className="size-5" />,
    showPasswordToggle: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Full Name',
    defaultValue: '12345',
    error: 'Name cannot contain numbers or special characters',
    icon: <Search className="size-5" />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account ID',
    defaultValue: 'DB-PAT-90821',
    disabled: true,
  },
};
