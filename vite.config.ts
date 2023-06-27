import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    environment: "jsdom",
  },
});