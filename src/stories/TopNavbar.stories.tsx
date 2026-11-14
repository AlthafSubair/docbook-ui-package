import type { Meta, StoryObj } from "@storybook/react";
import { TopNavbar } from "../components/TopNavbar";

const meta: Meta<typeof TopNavbar> = {
  title: "Components/TopNavbar",
  component: TopNavbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TopNavbar>;

export const Default: Story = {
  args: {
    currentPath: "/clinics",
  },
};

export const WithoutNavLinks: Story = {
  args: {
    currentPath: "/clinics",
    showNavItems: false,
  },
};

export const CustomLocation: Story = {
  args: {
    currentPath: "/bookings",
    selectedLocation: "Bengaluru, Karnataka",
  },
};
