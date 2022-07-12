import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000/',
  },
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:3000/',
  },
  testDir: './e2e',
  retries: 3,
};
export default config;
