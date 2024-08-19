import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Console, time } from "console";
import { Then,Given } from "playwright-bdd/decorators";
import { data } from "../../data_set/data";
import { Login } from "./login-page";
import { Navigate } from "./navigate-page";
import { Reach } from "../../src/pages/pagemaster.page";

export class Goto {
    page: Page;
    login:Login
    Asamaple_technical_publication:Locator;
    sample_work_assignmnent:Locator;
    Add_work_Task_Button:Locator;
    sample_table_grid:Locator;
    click_Add_Work_Task:Locator;
    Text_Input_Control_Type:Locator;
    save_Button:Locator;
    save_ok:Locator;
   

    


    url: string;
    goto: any;
    constructor(page: Page) {
        this.page = page;
        this.login=new Login(page)
       this.Asamaple_technical_publication=this.page.locator('[name="ASample Technical Publication"]')
       this.sample_work_assignmnent=this.page.locator('[name="Sample Work Assignmnt"]')
       this.Add_work_Task_Button=this.page.locator('[id="Add"]')
       this.sample_table_grid=this.page.locator('[class="card-title"]')
       this.Text_Input_Control_Type=this.page.locator('[placeholder="Text Input control Type"]')
       this.save_Button=this.page.locator('[id="Save"]')
       this.save_ok=this.page.locator('[class="swal-button swal-button--confirm"]')
     
    
        
    }
    
    public async Goto(Add) {

        await this.Asamaple_technical_publication.click()
    }
    
    public async click_sample_work_assignment(Add) {
        await this.sample_work_assignmnent.click()      
    }
    public async Addworktask(Add) {
        await this.page.waitForTimeout(1000)
        await expect(this.Add_work_Task_Button).toBeVisible()
        console.log('Add Work task Button is created Successfully')
        await expect(this.sample_table_grid).toBeVisible()
        console.log('Sample Table grid is created successfully')
        await this.Add_work_Task_Button.click()
        await this.Text_Input_Control_Type.fill('Testing')
        await this.save_Button.click()
        await this.save_ok.click()
        await this.page.pause()


      
    



       


          



    
   

       
       

















    }

}

