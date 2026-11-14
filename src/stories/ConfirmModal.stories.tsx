import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from "../components/ConfirmModal";
import { Button } from "../components/Button";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["danger", "warning", "primary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const DangerDelete: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 1200);
    };

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)} className="bg-red-600 hover:bg-red-700">
          Open Delete Modal
        </Button>
        <ConfirmModal
          isOpen={open}
          isLoading={loading}
          onClose={() => setOpen(false)}
          onConfirm={handleConfirm}
          variant="danger"
          title="Delete Patient Profile?"
          description="Are you sure you want to remove this profile? This action cannot be undone."
          confirmText="Delete Profile"
        >
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="size-9 rounded-xl bg-linear-to-br from-blue-600 to-indigo-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
              J
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-slate-900 truncate">John Doe</span>
              <span className="text-xs text-slate-500">Self (Primary Profile)</span>
            </div>
          </div>
        </ConfirmModal>
      </div>
    );
  },
};

export const PrimaryConfirm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Confirmation</Button>
        <ConfirmModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          variant="primary"
          title="Confirm Appointment Booking"
          description="Do you want to confirm your clinic booking for Monday, Nov 16 at 10:00 AM?"
          confirmText="Confirm Booking"
          cancelText="Go Back"
        />
      </div>
    );
  },
};

export const WarningAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Warning Modal</Button>
        <ConfirmModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          variant="warning"
          title="Discard Unsaved Changes?"
          description="You have unsaved changes in your profile. Are you sure you want to leave this page?"
          confirmText="Discard Changes"
          cancelText="Keep Editing"
        />
      </div>
    );
  },
};
