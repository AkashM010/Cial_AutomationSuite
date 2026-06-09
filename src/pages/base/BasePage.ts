import { Page, Locator } from "@playwright/test";

export class BasePage {

    private readonly newBtnLocator;

    constructor(protected readonly page: Page) {
        //Locators
        this.newBtnLocator = this.page.getByRole('button', { name: 'New' });
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async clickNewButton() {
        await this.newBtnLocator.click();
    }


}

