import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Allows React components to run in tests
    globals: true, // Lets you use "test", "expect", etc. without imports
    setupFiles: "./src/setupTests.js", // Jest-DOM setup
  },
});
