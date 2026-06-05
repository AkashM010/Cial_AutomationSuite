import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly emailFieldLocator: Locator;
    readonly passwordFieldLocator: Locator;
    readonly loginBtnLocator: Locator;
    readonly wrongLoginAlertLocator: Locator;


    constructor(page: Page) {
        this.page = page;

        //Locators
        this.emailFieldLocator = this.page.getByPlaceholder('Email');
        this.passwordFieldLocator = this.page.getByPlaceholder('Password');
        this.loginBtnLocator = this.page.getByRole('button', { name: 'Log in' });
        this.wrongLoginAlertLocator = this.page.getByRole('alert').filter({ hasText: /Wrong login/i });
    }


    async navigate(url: string) {
        await this.page.goto(url);
    }

    getWrongLoginAlert() {
        return this.wrongLoginAlertLocator;
    }

    getEmailField() {
        return this.emailFieldLocator;
    }

    getPasswordField() {
        return this.passwordFieldLocator;
    }

    getLoginBtn() {
        return this.loginBtnLocator;
    }

    async fillEmailField(email: string) {
        await this.getEmailField().fill(email);
    }

    async fillPasswordField(password: string) {
        await this.getPasswordField().fill(password);
    }

    async clickLoginBtn() {
        await this.getLoginBtn().click();
    }

}