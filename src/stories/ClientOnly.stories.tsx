import type { Meta, StoryObj } from "@storybook/react";
import { ClientOnly } from "../components/ClientOnly";

const meta: Meta<typeof ClientOnly> = {
  title: "Components/ClientOnly",
  component: ClientOnly,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClientOnly>;

export const Default: Story = {
  render: () => (
    <ClientOnly fallback={<p className="text-slate-400">Loading client-only content...</p>}>
      <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl">
        <h4 className="font-bold">Mounted on Client!</h4>
        <p className="text-sm mt-1">This content only renders after successful client hydration.</p>
      </div>
    </ClientOnly>
  ),
};
