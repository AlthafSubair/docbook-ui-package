import type { Meta, StoryObj } from '@storybook/react';
import { Desc } from '../components/Desc';

const meta: Meta<typeof Desc> = {
  title: 'Components/Desc',
  component: Desc,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Desc>;

export const Default: Story = {
  args: {
    children: 'Please enter your mobile number and select your clinic to proceed.',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Need assistance? Reach out to support 24/7.',
    className: 'text-center',
  },
};
