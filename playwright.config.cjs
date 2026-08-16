'use strict';

const { defineConfig } = require('@playwright/test');

const port = Number.parseInt(process.env.CUPID_E2E_PORT || '4173', 10);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid CUPID_E2E_PORT: ${process.env.CUPID_E2E_PORT}`);
}
const baseURL = `http://127.0.0.1:${port}`;

module.exports = defineConfig({
    testDir: './tests/e2e',
    timeout: 45_000,
    retries: process.env.CI ? 1 : 0,
    use: {
        baseURL,
        browserName: 'chromium',
        locale: 'ko-KR',
        serviceWorkers: 'block',
        trace: 'retain-on-failure'
    },
    webServer: {
        command: 'node tests/static-server.cjs',
        url: `${baseURL}/__cupid_e2e_health`,
        reuseExistingServer: !process.env.CI,
        timeout: 30_000
    }
});
