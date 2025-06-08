/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    css: true,
    pool: "threads",
    mockReset: true,
  },
});
