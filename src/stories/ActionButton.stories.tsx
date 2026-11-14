import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Trash2, Edit2, Check, Plus } from "lucide-react";
import { ActionButton } from "../components/ActionButton";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["danger", "default", "primary", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Danger: Story = {
  args: {
    icon: <Trash2 className="size-3.5" />,
    label: "Delete",
    variant: "danger",
  },
};

export const Primary: Story = {
  args: {
    icon: <Edit2 className="size-3.5" />,
    label: "Edit",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    icon: <Check className="size-3.5" />,
    label: "Confirm",
    variant: "success",
  },
};

export const DefaultVariant: Story = {
  args: {
    icon: <Plus className="size-3.5" />,
    label: "Add",
    variant: "default",
  },
};

export const IconOnly: Story = {
  args: {
    icon: <Trash2 className="size-3.5" />,
    variant: "danger",
  },
};
