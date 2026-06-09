import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS } from '../../Utils/testData';

const authFile = `.auth/user.json`;

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

    await expect(page).toHaveTitle(/Home/);

    // Bulletproof check: Wait until the browser context actually receives the cookies
    await expect(async () => {
        const cookies = await page.context().cookies();
        expect(cookies.length).toBeGreaterThan(0);
    }).toPass();

    await page.context().storageState({ path: authFile });
});
