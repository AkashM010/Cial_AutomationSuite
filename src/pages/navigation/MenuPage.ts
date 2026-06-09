import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class MenuPage extends BasePage {

    private readonly CIALMaintenanceLocator: Locator;

    constructor(page: Page) {
        super(page);

        //Locators
        this.CIALMaintenanceLocator = page.getByTestId('CIAL Maintenance');
    }

    getCialMaintenance() {
        return this.CIALMaintenanceLocator;
    }

    async clickCialMaintenanceMenu() {
        await this.getCialMaintenance().click();
    }

}