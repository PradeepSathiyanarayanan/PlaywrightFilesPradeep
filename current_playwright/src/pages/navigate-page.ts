import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Then,Given } from "playwright-bdd/decorators";

export class settingdropdown{
    setting:Locator;
    dynamicform:Locator;

page:Page
constructor(page:Page){
    this.page=page;
    this.setting=this.page.locator('[name="Setting"]');
    this.dynamicform=this.page.locator('[name="Dynamic Form"]')
}
public async clicksetting(Add){
    let temp =Add;
    let newmethod:any =`[name="${temp}"]`
    
    await this.page.locator(newmethod).click()
}
public async click_Dynamic_Form(Add) {
 await this.dynamicform.click()
 //wait 
 await this.page.waitForLoadState()
}
}