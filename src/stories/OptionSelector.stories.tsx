import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OptionSelector } from "../components/OptionSelector";

const meta: Meta<typeof OptionSelector> = {
  title: "Components/OptionSelector",
  component: OptionSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OptionSelector>;

const relationshipOptions = [
  { value: "Self", label: "Self" },
  { value: "Spouse", label: "Spouse" },
  { value: "Child", label: "Child" },
  { value: "Parent", label: "Parent" },
  { value: "Other", label: "Other" },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState("Self");
    return (
      <div className="max-w-md p-4">
        <OptionSelector
          label="Select Relationship"
          options={relationshipOptions}
          value={val}
          onChange={setVal}
          gridClassName="grid-cols-3 sm:grid-cols-5 gap-1.5"
        />
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <div className="max-w-md p-4">
        <OptionSelector
          label="Select Gender"
          options={["Male", "Female", "Other"]}
          value={val}
          onChange={setVal}
          error="Please select an option"
          gridClassName="grid-cols-3 gap-2"
        />
      </div>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [val, setVal] = useState("Male");
    return (
      <div className="max-w-md p-4">
        <OptionSelector
          label="Compact Picker"
          options={["Male", "Female", "Other"]}
          value={val}
          onChange={setVal}
          size="sm"
          gridClassName="grid-cols-3 gap-1"
        />
      </div>
    );
  },
};
