import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class AssetFormPage extends BasePage {

    private readonly NameFieldLocator: Locator;
    private readonly SapIdFieldLocator: Locator;
    private readonly CialContractFieldLocator: Locator;

    constructor(readonly page: Page) {
        super(page);

        //Locators
        this.NameFieldLocator = this.page.getByRole('textbox', { name: 'Name' });
        this.SapIdFieldLocator = this.page.getByRole('textbox', { name: 'SAP ID' });
        this.CialContractFieldLocator = this.page.getByRole('combobox', { name: 'CIAL Contract', exact: true });
    }

    getNameField() {
        return this.NameFieldLocator;
    }

    getSapIdField() {
        return this.SapIdFieldLocator;
    }

    getCialContractField() {
        return this.CialContractFieldLocator;
    }

    async enterAssetName(assetName: string) {
        await this.getNameField().fill(assetName);
    }

    async enterSapID(sapId: string) {
        await this.getSapIdField().fill(sapId);
    }

    async selectCialContract(contractName: string) {
        await this.getCialContractField().click();
        await this.page.getByRole('option', { name: contractName }).click();
    }
}