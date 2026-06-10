import { Page, Locator } from "@playwright/test";

export class BasePage {

    private readonly newBtnLocator: Locator;

    constructor(protected readonly page: Page) {
        //Locators
        this.newBtnLocator = this.page.getByRole('button', { name: 'New' });
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async clickNewButton() {
        await this.newBtnLocator.click();
        // await this.waitForLoader(); // Automatically wait for loader after clicking 'New'
    }

    /**
     * Waits for the Odoo loading indicator to disappear.
     * This is essential to prevent flaky tests in Odoo applications.
     */
    async waitForLoader() {
        // Odoo 16/17 uses .o_loading_indicator or .o_blockUI. We wait for it to be hidden.
        await this.page.locator('.o_loading_indicator').waitFor({ state: 'hidden' });
        // Optional fallback: wait for network calls to settle
        // await this.page.waitForLoadState('networkidle'); 
    }

}

