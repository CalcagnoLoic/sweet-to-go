import type { Meta, StoryObj } from "@storybook/react";

import Card from "./index";

const meta = {
  title: "Component/Card",
  tags: ["autodocs"],
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DessertCard: Story = {
  args: {
    dessertProps: {
      dessertID: "18515d",
      dessertCategory: "Tiramisu",
      dessertName: "Classic Tiramisu",
      dessertPrice: 7.5,
      dessertIllustration: "img/tiramisu.webp",
    },
  },
};
