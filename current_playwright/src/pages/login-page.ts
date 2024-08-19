import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Console, time } from "console";
import { Then,Given } from "playwright-bdd/decorators";
import { data } from "../../data_set/data";
import { Sign } from "crypto";


export class Login {
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
        await this.username.fill(data.username)
        await this.password.fill(data.Password)
        await this.loginButton.click()       
    }  

       


          



    


       
       



















}
