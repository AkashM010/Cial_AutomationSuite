import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class AssetListPage extends BasePage {

    private readonly equipmenttHeaderLocator: Locator;
    private readonly sapIdHeaderLocator: Locator;

    constructor(readonly page: Page) {
        super(page);

        //Locators
        this.equipmenttHeaderLocator = page.getByRole('columnheader', { name: 'Equipment Name' });
        this.sapIdHeaderLocator = page.getByRole('columnheader', { name: 'SAP ID' });
    }

    getEquipmentHeader() {
        return this.equipmenttHeaderLocator;
    }

    getSapIdHeader() {
        return this.sapIdHeaderLocator;
    }

    async openNewAssetFormPage() {
        await this.clickNewButton();
    }
}