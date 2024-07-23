import type { Preview } from "@storybook/react";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import "../public/assets/style/tailwind.css";

const preview: Preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
  },
};

export default preview;
