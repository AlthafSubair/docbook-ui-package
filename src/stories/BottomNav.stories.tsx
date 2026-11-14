import type { Meta, StoryObj } from "@storybook/react";
import { BottomNav, defaultNavItems } from "../components/BottomNav";

const meta: Meta<typeof BottomNav> = {
  title: "Components/BottomNav",
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  render: () => (
    <div className="relative w-full max-w-md mx-auto min-h-[200px] bg-slate-50 border border-slate-200 p-4">
      <div className="text-center text-sm text-slate-500">Mobile Navigation Viewport</div>
      <BottomNav currentPath="/clinics" />
    </div>
  ),
};

export const BookingsActive: Story = {
  render: () => (
    <div className="relative w-full max-w-md mx-auto min-h-[200px] bg-slate-50 border border-slate-200 p-4">
      <div className="text-center text-sm text-slate-500">Bookings Tab Active</div>
      <BottomNav currentPath="/bookings" />
    </div>
  ),
};

export const PatientsActive: Story = {
  render: () => (
    <div className="relative w-full max-w-md mx-auto min-h-[200px] bg-slate-50 border border-slate-200 p-4">
      <div className="text-center text-sm text-slate-500">Patients Tab Active</div>
      <BottomNav currentPath="/patients" />
    </div>
  ),
};

export const CustomItems: Story = {
  render: () => (
    <div className="relative w-full max-w-md mx-auto min-h-[200px] bg-slate-50 border border-slate-200 p-4">
      <BottomNav
        currentPath="/clinics"
        items={defaultNavItems.map((item) =>
          item.id === "patients" ? { ...item, badge: "New" } : item
        )}
      />
    </div>
  ),
};
