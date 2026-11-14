import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PhoneInput, type PhoneValue } from "../components/PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState<PhoneValue | null>(null);
    return (
      <div className="max-w-md p-6">
        <PhoneInput
          label="Phone Number"
          helperText="Enter mobile number"
          onChange={setVal}
        />
        {val && (
          <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 font-mono">
            <div>e164: {val.e164 || "(empty)"}</div>
            <div>national: {val.national}</div>
            <div>country: {val.country}</div>
            <div>isValid: {String(val.isValid)}</div>
          </div>
        )}
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <div className="max-w-md p-6">
      <PhoneInput
        label="Phone Number"
        error="Please enter a valid phone number"
        defaultCountry="IN"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="max-w-md p-6">
      <PhoneInput
        label="Phone Number"
        disabled
        defaultCountry="US"
      />
    </div>
  ),
};
