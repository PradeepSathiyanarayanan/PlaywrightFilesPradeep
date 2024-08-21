import { BrowserContext, Locator, Page, expect, } from "@playwright/test";
import { Then, Given } from "playwright-bdd/decorators";
import { promises } from 'dns';
import { chromium } from 'playwright';
export class Transaction {
    Asamaple_technical_publication: Locator;
    sample_work_assignmnent: Locator;
    Add_work_Task_Button: Locator;
    workpackagename_displaytype: Locator;
    sample_table_grid: Locator;
    click_Add_Work_Task: Locator;
    Text_Input_Control_Type: Locator;
    save_Button: Locator;
    save_ok: Locator;
    page: Page
    constructor(page: Page) {
        this.page = page;
        this.Asamaple_technical_publication = this.page.locator('[name="ASample Technical Publication"]')
        this.sample_work_assignmnent = this.page.locator('[name="Sample Work Assignmnt"]')
        this.workpackagename_displaytype = this.page.locator('[controlid="18237BED-9D07-422F-9620-BB32DED971A0"]').nth(-1)
        this.Add_work_Task_Button = this.page.locator('[id="Add"]')
        this.sample_table_grid = this.page.locator('[class="card-title"]')
        this.Text_Input_Control_Type = this.page.locator('[placeholder="Text Input control Type"]')
        this.save_ok = this.page.locator('[class="swal-button swal-button--confirm"]')
    }
    public async Transaction_method(Add) {
        const Total_ASample_Technical_Publication_Buttons = await this.page.$$('[name="ASample Technical Publication"]');
        const ADD_Button_Count = Total_ASample_Technical_Publication_Buttons.length;
        for (let i = 0; i < ADD_Button_Count; i++) {
            const ADD_Button1 = Total_ASample_Technical_Publication_Buttons[i];
            const text = await ADD_Button1.textContent();

            if (text === 'ASample Technical Publication') {
                await ADD_Button1.click();
            }
        }
        const Total_Sample_Technical_Publication_Buttons = await this.page.$$('[name="Sample Work Assignmnt"]');
        const Sample_Technical_Publication_Button_Count = Total_Sample_Technical_Publication_Buttons.length;
        for (let i = 0; i < ADD_Button_Count; i++) {
            const Button = Total_Sample_Technical_Publication_Buttons[i];
            const text = await Button.textContent();

            if (text === 'Sample Work Assignmnt') {
                await Button.click();
            }
        }
        await this.page.waitForTimeout(5000)
        await expect(this.Add_work_Task_Button).toBeVisible()
        console.log('Add Work task Button is created Successfully')
        await expect(this.sample_table_grid).toBeVisible()
        console.log('Sample Table grid is created successfully')
        //dispatchEvent force click
        await this.Add_work_Task_Button.dispatchEvent('click')
        // to be Editable
        await expect(this.Text_Input_Control_Type).toBeEditable()
        console.log('Text_Input_Control_Type is editable')
        await this.Text_Input_Control_Type.fill('Testing')
        //focus
        await this.page.locator('[placeholder="Text Input control Type"]').focus();
        //keyboard press
        await this.page.keyboard.press('Tab');
        //to be disabled
        await expect(this.workpackagename_displaytype).toBeDisabled()
        console.log('work package anme display type is disabled ')
        //Assumption case using Filter
        this.save_Button = this.page.getByRole("button").filter({ hasText: "Save" })
        await this.save_Button.click()
        await this.save_ok.click()
        //promises
        const page1Promise = this.page.waitForEvent('popup');
        //double click
        await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"]').nth(-1).dblclick();
        const page1 = await page1Promise;
        //contain text
        await expect(page1.locator('#spnWorkPackageNameAndPartNumber')).toContainText('Work Flow');
        await this.page.pause();
    }
}

