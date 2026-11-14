import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Lock } from "lucide-react";
import { PasswordInput } from "../components/PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    showPasswordToggle: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    icon: <Lock className="size-5" />,
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    defaultValue: "short",
    error: "Password must be at least 8 characters",
    icon: <Lock className="size-5" />,
  },
};

export const WithoutToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    showPasswordToggle: false,
    icon: <Lock className="size-5" />,
  },
};
