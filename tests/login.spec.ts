import { test, expect } from '@playwright/test';
import { PageManager } from '../src/pages/PageManager';
import { USERS } from '../Utils/testData';

let pm: PageManager;

// Disable the global storage state for login tests so they start unauthenticated
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login Functionality Tests', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PageManager(page);
    });

    test('Validate login with valid credentials', async ({ page }) => {
        await pm.getLoginPage().navigate('');

        await expect(pm.getLoginPage().getEmailField()).toBeVisible();
        await pm.getLoginPage().fillEmailField(USERS.admin.valid.email);

        await expect(pm.getLoginPage().getPasswordField()).toBeVisible();
        await pm.getLoginPage().fillPasswordField(USERS.admin.valid.password);

        await expect(pm.getLoginPage().getLoginBtn()).toBeVisible();
        await expect(pm.getLoginPage().getLoginBtn()).toBeEnabled();
        await pm.getLoginPage().clickLoginBtn();

        await expect(page).toHaveTitle(/Odoo/);
    });

    test('Validate login with invalid email and valid password', async ({ }) => {
        await pm.getLoginPage().navigate('');

        await expect(pm.getLoginPage().getEmailField()).toBeVisible();
        await pm.getLoginPage().fillEmailField(USERS.admin.invalid.email);

        await expect(pm.getLoginPage().getPasswordField()).toBeVisible();
        await pm.getLoginPage().fillPasswordField(USERS.admin.valid.password);

        await expect(pm.getLoginPage().getLoginBtn()).toBeVisible();
        await expect(pm.getLoginPage().getLoginBtn()).toBeEnabled();
        await pm.getLoginPage().clickLoginBtn();

        await expect(pm.getLoginPage().getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with valid email and invalid password', async ({ }) => {
        await pm.getLoginPage().navigate('');

        await expect(pm.getLoginPage().getEmailField()).toBeVisible();
        await pm.getLoginPage().fillEmailField(USERS.admin.valid.email);

        await expect(pm.getLoginPage().getPasswordField()).toBeVisible();
        await pm.getLoginPage().fillPasswordField(USERS.admin.invalid.password);

        await expect(pm.getLoginPage().getLoginBtn()).toBeVisible();
        await expect(pm.getLoginPage().getLoginBtn()).toBeEnabled();
        await pm.getLoginPage().clickLoginBtn();

        await expect(pm.getLoginPage().getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with invalid email and invalid password', async ({ }) => {
        await pm.getLoginPage().navigate('');

        await expect(pm.getLoginPage().getEmailField()).toBeVisible();
        await pm.getLoginPage().fillEmailField(USERS.admin.invalid.email);

        await expect(pm.getLoginPage().getPasswordField()).toBeVisible();
        await pm.getLoginPage().fillPasswordField(USERS.admin.invalid.password);

        await expect(pm.getLoginPage().getLoginBtn()).toBeVisible();
        await expect(pm.getLoginPage().getLoginBtn()).toBeEnabled();
        await pm.getLoginPage().clickLoginBtn();

        await expect(pm.getLoginPage().getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with blank email and blank password', async ({ }) => {
        await pm.getLoginPage().navigate('');

        await expect(pm.getLoginPage().getEmailField()).toBeVisible();

        await expect(pm.getLoginPage().getPasswordField()).toBeVisible();

        await expect(pm.getLoginPage().getLoginBtn()).toBeVisible();
        await expect(pm.getLoginPage().getLoginBtn()).toBeEnabled();
        await pm.getLoginPage().clickLoginBtn();

        const isValid = await pm.getLoginPage().getEmailField().evaluate((el: HTMLInputElement) => el.checkValidity());

        expect(isValid).toBeFalsy();
    });
});