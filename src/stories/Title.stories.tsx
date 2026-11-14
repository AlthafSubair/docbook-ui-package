import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../components/Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Book an Appointment',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Specialists Directory',
    className: 'text-center',
  },
};
