import type { Meta, StoryObj } from "@storybook/react";

import IconQuantity from "./index";

const meta = {
  title: "Icons/IconQuantity",
  tags: ["autodocs"],
  component: IconQuantity,
} satisfies Meta<typeof IconQuantity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Increment: Story = {
  args: {
    kind: "increment",
  },
};
export const Decrement: Story = {
  args: {
    kind: "decrement",
  },
};
