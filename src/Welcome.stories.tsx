import type { Meta, StoryObj } from "@storybook/react";
import { Welcome } from "./Welcome";

const meta: Meta<typeof Welcome> = {
  title: "Overview/Welcome",
  component: Welcome,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {
  args: {
    title: "DocBook UI Component Library",
    subtitle: "Storybook workspace for DocBook UI components",
  },
};
