import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class TopNavBarPage extends BasePage {

    private readonly AMCAssestsNavLocator: Locator;

    constructor(readonly page: Page) {
        super(page);

        //Locators
        this.AMCAssestsNavLocator = page.getByRole('menuitem', { name: 'AMC Assets', exact: true });

    }

    getAMCAssestsNavLocator() {
        return this.AMCAssestsNavLocator;
    }

    async openAssetsList() {
        await this.getAMCAssestsNavLocator().click();
    }

}