import type { Meta, StoryObj } from "@storybook/react";
import { SelectIndicator } from "../components/SelectIndicator";

const meta: Meta<typeof SelectIndicator> = {
  title: "Components/SelectIndicator",
  component: SelectIndicator,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isSelected: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectIndicator>;

export const Unselected: Story = {
  args: {
    isSelected: false,
    size: "md",
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    isSelected: true,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    isSelected: true,
    size: "lg",
  },
};
