/**
 * Environment Configuration
 * 
 * Defines base URLs for different testing environments (testing, staging, production).
 * The active environment is determined by the `TEST_ENV` environment variable.
 * 
 * Example usage in CLI: `$env:TEST_ENV="staging"; npx playwright test`
 */
type envType = 'testing' | 'staging' | 'production';

// Stores configuration details (like baseURL) for each environment
export const ENV_CONFIG = {
    testing: {
        baseURL: 'http://13.234.59.241:8069/web/'
    },
    staging: {
        baseURL: 'https://mmsstaging.cial.aero/web/'
    },
    production: {
        baseURL: 'https://mms.cial.aero/web/'
    }
}

// Retrieves the requested environment from the command line, defaulting to 'testing'
const env = ((process.env.TEST_ENV) || 'testing') as envType;

// Exports the selected environment's configuration to be used globally (e.g., in playwright.config.ts)
export const Current_ENV = ENV_CONFIG[env];
