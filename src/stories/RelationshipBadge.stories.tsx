import type { Meta, StoryObj } from "@storybook/react";
import { RelationshipBadge } from "../components/RelationshipBadge";

const meta: Meta<typeof RelationshipBadge> = {
  title: "Components/RelationshipBadge",
  component: RelationshipBadge,
  tags: ["autodocs"],
  argTypes: {
    relationship: {
      control: "select",
      options: [
        "Self",
        "Spouse",
        "Child",
        "Parent",
        "Sibling",
        "Family",
        "Friend",
        "Other",
      ],
    },
    showIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RelationshipBadge>;

export const Self: Story = {
  args: {
    relationship: "Self",
  },
};

export const Spouse: Story = {
  args: {
    relationship: "Spouse",
  },
};

export const Child: Story = {
  args: {
    relationship: "Child",
  },
};

export const Parent: Story = {
  args: {
    relationship: "Parent",
  },
};

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4 items-center">
      <RelationshipBadge relationship="Self" />
      <RelationshipBadge relationship="Spouse" />
      <RelationshipBadge relationship="Child" />
      <RelationshipBadge relationship="Parent" />
      <RelationshipBadge relationship="Sibling" />
      <RelationshipBadge relationship="Family" />
      <RelationshipBadge relationship="Friend" />
      <RelationshipBadge relationship="Other" />
    </div>
  ),
};
