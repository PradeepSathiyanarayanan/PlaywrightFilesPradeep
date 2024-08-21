import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Then,Given } from "playwright-bdd/decorators";
import { data } from "../../data_set/data";



export class Loginpage {
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;


    url: string;
    goto: any;
    constructor(page: Page) {
        this.page = page;

        this.url = 'https://adaptiveqat.caresoftglobal.com/';
        this.username = this.page.locator('[id="txtUserID"][name="username"][class="form-control"]');
        this.password = this.page.locator('[id="txtPassword"][name="password"][class="form-control"]');
        this.loginButton = this.page.locator('[class="d-grid"] [id="btnSubmit"][class="btn btn-primary btn-login mb-3"][value="submit"]').nth(0);
       
        
        
    }
    
    public async Login() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.com/')
        console.log('Url is Correct')
        await expect(this.username).toBeEnabled()
        console.log('username field is enabled')
        await this.username.fill(data.username)
        await expect(this.username).toBeEnabled()
        console.log('Password field is enabled')
        await this.password.fill(data.Password)
        await this.password.press('Enter')    
        await this.page.waitForLoadState()
    }  

       


          



    


       
       



















}
