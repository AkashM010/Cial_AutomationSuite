import { test, expect } from '@playwright/test';
import { PageManager } from '../../src/pages/PageManager';
import { ASSET_CONSTANTS } from '../../utils/testData';

let pm: PageManager;

test.describe('AM-01 Asset Form Fields', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PageManager(page);

        await pm.getLoginPage().navigate('');
        await pm.getMenuPage().clickCialMaintenanceMenu();
        await pm.getTopMenuPage().openAssetsList();
    });

    test.only('Validating form fields are visible and accepting input', async ({ page }) => {
        const asset = ASSET_CONSTANTS.testData.beumer;
        const form = pm.getAssetFormPage();

        // await page.pause();

        await pm.getAssetListPage().clickNewButton();

        test.step('Name field', async ({ }) => {
            await expect(form.getNameField()).toBeVisible();
            await form.enterAssetName(asset.assetName);
            await expect(form.getNameField()).toHaveValue(asset.assetName);
        });

        test.step('SAP ID field', async ({ }) => {
            await expect(form.getSapIdField()).toBeVisible();
            await form.enterSapID(asset.sapId);
            await expect(form.getSapIdField()).toHaveValue(asset.sapId);
        });

        // test.step('Cial Contract field', async ({ }) => {
        //     await expect(form.getCialContractField()).toBeVisible();
        //     await form.selectCialContract(asset.contract);
        //     await expect(form.getCialContractField()).toHaveValue(asset.contract);
        // });

        await page.pause();
    })
});