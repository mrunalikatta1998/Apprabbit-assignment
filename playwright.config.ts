import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // run with browser window
    viewport: null,  // disables fixed viewport to use full screen
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});
