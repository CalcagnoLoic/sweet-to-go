import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./index";

const meta = {
  title: "Typography/Paragraph",
  tags: ["autodocs"],
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P: Story = {
  args: {
    kind: "p",
    content: "Macaron Mix of Five",
    css: "mt-1 font-semibold text-graphite",
  },
};
export const SPAN: Story = {
  args: {
    kind: "span",
    content: "Add to Cart",
    css: "font-semibold text-graphite hover:text-tiaMaria",
  },
};
