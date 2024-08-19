import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Console, time } from "console";
import { Then,Given } from "playwright-bdd/decorators";
import { data } from "../../data_set/data";
import { Login } from "./login-page";



export class Navigate {
    page: Page;
    login:Login
    setting:Locator;
    dynamicform:Locator;

    


    url: string;
    goto: any;
    constructor(page: Page) {
        this.page = page;
        this.login=new Login(page)
        
        this.setting=this.page.locator('[name="Setting"]');
        this.dynamicform=this.page.locator('[name="Dynamic Form"]')

        
    }
    
    public async Navigate(Add) {

        await this.setting.click()

    }
    public async click_Dynamic_Form(Add) {
     await this.dynamicform.click()
        

    



       


          



    


       
       



















}
}