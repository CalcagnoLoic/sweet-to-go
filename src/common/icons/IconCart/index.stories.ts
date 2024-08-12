import type { Meta, StoryObj } from "@storybook/react";

import IconCart from "./index";

const meta = {
  title: "Icons/IconCart",
  tags: ["autodocs"],
  component: IconCart,
} satisfies Meta<typeof IconCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddToCart: Story = {
  args: {
    kind: "add",
  },
};
export const RemoveToCart: Story = {
  args: {
    kind: "remove",
  },
};
export const EmptyCart: Story = {
  args: {
    kind: "empty",
  },
};
export const ConfirmCart: Story = {
  args: {
    kind: "confirm",
  },
};
export const CarbonNeutralCart: Story = {
  args: {
    kind: "carbon_neutral",
  },
};
