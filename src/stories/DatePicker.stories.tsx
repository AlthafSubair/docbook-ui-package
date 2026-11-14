import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, type DatePickerProps } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    minDate: { control: 'text' },
    maxDate: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerWrapper = (args: DatePickerProps) => {
  const [val, setVal] = useState(args.value || '');
  return (
    <div className="max-w-sm p-4">
      <DatePicker
        {...args}
        value={val}
        onChange={(newVal) => {
          setVal(newVal);
          args.onChange?.(newVal);
        }}
      />
      {val && (
        <p className="mt-3 text-xs text-slate-500 font-mono">
          Selected ISO value: <span className="font-bold text-slate-700">{val}</span>
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DatePickerWrapper {...args} />,
  args: {
    label: 'Date of Birth',
    placeholder: 'Select patient birth date',
  },
};

export const WithInitialDate: Story = {
  render: (args) => <DatePickerWrapper {...args} />,
  args: {
    label: 'Appointment Date',
    value: '1998-05-18',
  },
};

export const WithError: Story = {
  render: (args) => <DatePickerWrapper {...args} />,
  args: {
    label: 'Date of Birth',
    error: 'Patient must be at least 18 years old',
    value: '2020-01-01',
  },
};

export const Disabled: Story = {
  render: (args) => <DatePickerWrapper {...args} />,
  args: {
    label: 'Fixed Record Date',
    value: '2023-11-14',
    disabled: true,
  },
};
