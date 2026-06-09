import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class LoginPage extends BasePage {

    private readonly emailFieldLocator: Locator;
    private readonly passwordFieldLocator: Locator;
    private readonly loginBtnLocator: Locator;
    private readonly wrongLoginAlertLocator: Locator;


    constructor(page: Page) {
        super(page);

        //Locators
        this.emailFieldLocator = page.getByPlaceholder('Email');
        this.passwordFieldLocator = page.getByPlaceholder('Password');
        this.loginBtnLocator = page.getByRole('button', { name: 'Log in' });
        this.wrongLoginAlertLocator = page.getByRole('alert').filter({ hasText: /Wrong login/i });
    }

    /**
     * Navigates to the login page.
     * @param url - The URL to navigate to.
     */
    async navigate(url: string) {
        await super.navigate(url);
    }

    /**
     * Returns the wrong login alert locator.
     * @returns Locator for the wrong login alert.
     */
    getWrongLoginAlert() {
        return this.wrongLoginAlertLocator;
    }

    /**
     * Returns the email field locator.
     * @returns Locator for the email field.
     */
    getEmailField() {
        return this.emailFieldLocator;
    }

    /**
     * Returns the password field locator.
     * @returns Locator for the password field.
     */
    getPasswordField() {
        return this.passwordFieldLocator;
    }

    /**
     * Returns the login button locator.
     * @returns Locator for the login button.
     */
    getLoginBtn() {
        return this.loginBtnLocator;
    }

    /**
     * Fills the email field with the given email.
     * @param email - The email to fill the field with.
     */
    async fillEmailField(email: string) {
        await this.getEmailField().fill(email);
    }

    /**
     * Fills the password field with the given password.
     * @param password - The password to fill the field with.
     */
    async fillPasswordField(password: string) {
        await this.getPasswordField().fill(password);
    }

    /**
     * Clicks the login button.
     */
    async clickLoginBtn() {
        await this.getLoginBtn().click();
    }

}