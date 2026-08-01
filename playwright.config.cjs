'use strict';

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests/e2e',
    timeout: 45_000,
    retries: process.env.CI ? 1 : 0,
    use: {
        baseURL: 'http://127.0.0.1:4173',
        browserName: 'chromium',
        locale: 'ko-KR',
        serviceWorkers: 'block',
        trace: 'retain-on-failure'
    },
    webServer: {
        command: 'node tests/static-server.cjs',
        url: 'http://127.0.0.1:4173/index.html',
        reuseExistingServer: !process.env.CI,
        timeout: 30_000
    }
});
