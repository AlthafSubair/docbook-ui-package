import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto bg-slate-50 min-h-[300px] border border-slate-200">
      <Header />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-slate-800">Mobile Wave Header</h2>
        <p className="text-xs text-slate-500 mt-1">Visible on mobile and tablet screen sizes.</p>
      </div>
    </div>
  ),
};
