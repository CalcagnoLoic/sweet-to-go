import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/common/components"),
      "@data": path.resolve(__dirname, "./src/common/data"),
      "@hooks": path.resolve(__dirname, "./src/common/hooks"),
      "@icons": path.resolve(__dirname, "./src/common/icons"),
      "@layouts": path.resolve(__dirname, "./src/common/layouts"),
      "@pages": path.resolve(__dirname, "./src/common/pages"),
      "@typographies": path.resolve(__dirname, "./src/common/typographies"),
      "@definitions": path.resolve(__dirname, "./src/common/definition.tsx")
    },
  },
});
