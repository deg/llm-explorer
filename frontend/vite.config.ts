import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global `test` and `expect`
    environment: "jsdom", // Simulate a browser environment
    setupFiles: "./src/setupTests.ts", // Optional setup file
  },
});
