import { test, expect } from '@playwright/test';
// import {test} from '../fixtures/login.fixture';
import { LoginPage } from '../Page/LoginPage';
import { USERS } from '../Utils/testData';

let loginpage: LoginPage;

test.describe('Login Functionality Tests', () => {

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
    });

    test('Validate login with valid credentials', async ({ page }) => {
        await loginpage.navigate('');

        await expect(loginpage.getEmailField()).toBeVisible();
        await loginpage.fillEmailField(USERS.admin.valid.email);

        await expect(loginpage.getPasswordField()).toBeVisible();
        await loginpage.fillPasswordField(USERS.admin.valid.password);

        await expect(loginpage.getLoginBtn()).toBeVisible();
        await expect(loginpage.getLoginBtn()).toBeEnabled();
        await loginpage.clickLoginBtn();

        await expect(page).toHaveTitle(/Odoo/);
    });

    test('Validate login with invalid email and valid password', async ({ }) => {
        await loginpage.navigate('');

        await expect(loginpage.getEmailField()).toBeVisible();
        await loginpage.fillEmailField(USERS.admin.invalid.email);

        await expect(loginpage.getPasswordField()).toBeVisible();
        await loginpage.fillPasswordField(USERS.admin.valid.password);

        await expect(loginpage.getLoginBtn()).toBeVisible();
        await expect(loginpage.getLoginBtn()).toBeEnabled();
        await loginpage.clickLoginBtn();

        await expect(loginpage.getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with valid email and invalid password', async ({ }) => {
        await loginpage.navigate('');

        await expect(loginpage.getEmailField()).toBeVisible();
        await loginpage.fillEmailField(USERS.admin.valid.email);

        await expect(loginpage.getPasswordField()).toBeVisible();
        await loginpage.fillPasswordField(USERS.admin.invalid.password);

        await expect(loginpage.getLoginBtn()).toBeVisible();
        await expect(loginpage.getLoginBtn()).toBeEnabled();
        await loginpage.clickLoginBtn();

        await expect(loginpage.getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with invalid email and invalid password', async ({ }) => {
        await loginpage.navigate('');

        await expect(loginpage.getEmailField()).toBeVisible();
        await loginpage.fillEmailField(USERS.admin.invalid.email);

        await expect(loginpage.getPasswordField()).toBeVisible();
        await loginpage.fillPasswordField(USERS.admin.invalid.password);

        await expect(loginpage.getLoginBtn()).toBeVisible();
        await expect(loginpage.getLoginBtn()).toBeEnabled();
        await loginpage.clickLoginBtn();

        await expect(loginpage.getWrongLoginAlert()).toBeVisible();
    });

    test('Validate login with blank email and blank password', async ({ }) => {
        await loginpage.navigate('');

        await expect(loginpage.getEmailField()).toBeVisible();

        await expect(loginpage.getPasswordField()).toBeVisible();

        await expect(loginpage.getLoginBtn()).toBeVisible();
        await expect(loginpage.getLoginBtn()).toBeEnabled();
        await loginpage.clickLoginBtn();

        const isValid = await loginpage.getEmailField().evaluate((el: HTMLInputElement) => el.checkValidity());

        expect(isValid).toBeFalsy();
    });
});