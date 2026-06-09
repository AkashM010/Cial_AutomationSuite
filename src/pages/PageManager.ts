import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { MenuPage } from "./navigation/MenuPage";
import { TopNavBarPage } from "./navigation/TopNavBarPage";
import { AssetListPage } from "./asset-management/AssetListPage";

export class PageManager {

    constructor(readonly page: Page) { }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getMenuPage() {
        return new MenuPage(this.page);
    }

    getTopMenuPage() {
        return new TopNavBarPage(this.page);
    }

    getAssetListPage() {
        return new AssetListPage(this.page);
    }
}