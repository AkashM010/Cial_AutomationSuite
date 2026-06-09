import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class AssetListPage extends BasePage {



    constructor(readonly page: Page) {
        super(page);

        //Locators
    }

    async openNewAssetFormPage() {
        await this.clickNewButton();
    }
}