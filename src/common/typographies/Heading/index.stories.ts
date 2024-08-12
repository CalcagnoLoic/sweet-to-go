import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./index";

const meta = {
  title: "Typography/Heading",
  tags: ["autodocs"],
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "Desserts",
    css: "text-5xl font-bold text-graphite",
  },
};
/* export const H2: Story = {
  args: {
    kind: "decrement",
  },
};
export const H3: Story = {
  args: {
    kind: "decrement",
  },
}; */
