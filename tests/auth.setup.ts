import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../Page/LoginPage';
import { USERS } from '../Utils/testData';

const authFile = `playwright/.auth/user.json`;

setup('authenticate ans save storage state', async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.navigate('');

    await expect(loginpage.getEmailField()).toBeVisible();
    await loginpage.fillEmailField(USERS.admin.valid.email);

    await expect(loginpage.getPasswordField()).toBeVisible();
    await loginpage.fillPasswordField(USERS.admin.valid.password);

    await expect(loginpage.getLoginBtn()).toBeVisible();
    await expect(loginpage.getLoginBtn()).toBeEnabled();
    await loginpage.clickLoginBtn();

    await expect(page).toHaveTitle(/Odoo/);

    await page.context().storageState({path: authFile});
});

