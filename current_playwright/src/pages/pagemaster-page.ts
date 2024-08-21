import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../data_set/data";


export class pagemaster_option {
    page: Page;
    Page_master: Locator;
    Add_Button: Locator;
    Sample_Work_Assignmnet_Gear_Icon: any;
    Manage_Form_and_Uploader: Locator;
    select_content_typee: Locator;
    select_Element: Locator
    checkbox: Locator;
    Button_Name: Locator;
    button_Icon: Locator;
    save: Locator;
    save_ok: Locator;
    close: Locator;
    manage_table: Locator;
    Table_Name: Locator;
    edit_required: Locator;
    delete_required: Locator;
    delete_required_value: Locator;
    delete_confirmation_message: Locator;
    Info_Icon: Locator;
    sumarry_Icon: Locator;
    feedback: Locator;
    Workflowmapped_checkbox: Locator;
    Default_data_loaded: Locator;
    save_table: Locator;
    save_ok1: Locator;
    Table_Add: Locator;
    screen_name: Locator;
    Form_Name: Locator;
    Type_field: Locator;
    Field_Name: Locator;
    column_Width: Locator;
    Primary: Locator;
    mapingsave: Locator;
    screen_name1: Locator;
    Form_name1: Locator;
    Type_Field1: Locator;
    Field_name1: Locator;
    Column_width1: Locator;
    save_ok2: Locator;
    exitmapping: Locator;
    table_close: Locator;
    Sample_Work_Assignmnet_Gear_Icon1: any;
    screenlayout: Locator;
    content_Percentage: Locator;
    content_Mapping: Locator;
    Role: Locator;
    Role_selection: Locator;
    screen_layout_save: Locator;
    show: Locator;
    manage_screen_layout_close: Locator;
    constructor(page: Page) {
        this.page = page;
        this.Page_master = this.page.locator('[name="Page Master"]')
        this.Sample_Work_Assignmnet_Gear_Icon = this.page.getByRole('link', { name: '' }).nth(1)
        this.Manage_Form_and_Uploader = this.page.getByRole('link', { name: ' Manage Form and Uploader' })
        this.select_content_typee = this.page.locator('[id="ddlformupl"]')
        this.select_Element = this.page.locator('[id="ddlformlst"]')
        this.checkbox = this.page.locator('[id="chk_popup"]')
        this.Button_Name = this.page.getByPlaceholder("Control Name")
        this.button_Icon = this.page.locator('[id="ddlbtniconforforms"]')
        this.save = this.page.locator('[id="btnsavepageform"]')
        this.save_ok = this.page.locator('[class="swal-button swal-button--confirm"]')
        this.close = this.page.locator('[class="btn-close btn_MappingPage_close"]')
        this.manage_table = this.page.locator('[onclick="TablePageID(this)"]').nth(0)
        this.Table_Name = this.page.locator('[id="txt_TableName"]')
        this.edit_required = this.page.locator('[id="ddlIsEdit"]')
        this.delete_required = this.page.locator('[id="select2-ddlIsDelete-container"]')
        this.delete_required_value = this.page.getByRole('option', { name: 'Yes' })
        this.delete_confirmation_message = this.page.locator('[id="txtDeleteConfirmation"]')
        this.Info_Icon = this.page.locator('[id="ddlIsinfoicon"]')
        this.sumarry_Icon = this.page.locator('[id="ddlIssummaryicon"]')
        this.Workflowmapped_checkbox = this.page.locator('[id="chk_workflow"]')
        this.Default_data_loaded = this.page.locator('[id="chk_Table"]')
        this.save_table = this.page.locator('[id="SaveTabledetails"]')
        this.feedback = this.page.locator('[id="ddlIsFeedBack"]')
        this.save_ok1 = this.page.locator('[class="swal-button swal-button--confirm"]')
        this.Table_Add = this.page.locator('[title="Add"]')
        this.screen_name = this.page.locator('[id="ddltableScreenname"]')
        this.Form_Name = this.page.locator('[id="ddlScreenformlst"]')
        this.Type_field = this.page.locator('[id="ddlfieldtype"]')
        this.Field_Name = this.page.locator('[id="ddltableScreenformctrls"]')
        this.column_Width = this.page.locator('[id="txt_width"]')
        this.mapingsave = this.page.locator('[id="SaveColumndetails"]')
        this.save_ok2 = this.page.locator('[class="swal-button swal-button--confirm"]')
        this.screen_name1 = this.page.locator('[id="ddltableScreenname"]')
        this.Form_name1 = this.page.locator('[id="ddlScreenformlst"]')
        this.Type_Field1 = this.page.locator('[id="ddlfieldtype"]')
        this.Field_name1 = this.page.locator('[id="ddltableScreenformctrls"]')
        this.Column_width1 = this.page.locator('[id="txt_width"]')
        this.exitmapping = this.page.locator('[id="pageroleclose"]')
        this.table_close = this.page.getByRole('button', { name: 'Close' })
        this.Sample_Work_Assignmnet_Gear_Icon1 = this.page.getByRole('link', { name: '' }).nth(1)
        this.screenlayout = this.page.locator('[onclick="ScreenLayout(this)"]').nth(0)
        this.content_Percentage = this.page.locator('[id="ddlcontentper"]')
        this.content_Mapping = this.page.locator('[id="ddlcontMap"]')
        this.Role = this.page.getByRole('button', { name: 'None selected' })
        this.Role_selection = this.page.locator('[title="Super Admin"]').nth(-1)
        this.show = this.page.locator('[title="10"]').nth(-1)
        this.screen_layout_save = this.page.locator('[id="btnscreenlayoutsave"]')
        this.manage_screen_layout_close = page.getByRole('button', { name: 'Close' })
        this.Primary = this.page.locator('[id="chk_isPrimary"]')
    }
    public async click_page_master(Add) {
        await this.Page_master.click()
        // Wait
        await this.page.waitForLoadState()
        await this.Sample_Work_Assignmnet_Gear_Icon.click()
        await this.Manage_Form_and_Uploader.click()
        // Dropdown selection
        await this.select_content_typee.selectOption('Form')
        await this.select_Element.selectOption('Myform')
        //checkbox not to be checked  
        await expect(this.checkbox).not.toBeChecked()
        console.log('checkbox is not enabled')
        //to be enabled
        await expect(this.checkbox).toBeEnabled()
        console.log('Consider form as a checkbox is enabled')
        await this.checkbox.click()
        // Placeholder Text
        await this.Button_Name.fill(data.Button_Name)
        await this.button_Icon.selectOption('fa fa-check-square')
        await this.save.click()
        await this.save_ok.click()
        await this.close.click()
        await this.Sample_Work_Assignmnet_Gear_Icon.click()
        await this.manage_table.click()
        await this.Table_Name.fill(data.Table_Name)
        //dropdown selection 
        await this.edit_required.selectOption('No')
        //dropdown using click method
        await this.delete_required.click()
        await this.delete_required_value.click()
        await this.delete_confirmation_message.fill('Are you sure want to delete')
        await this.Info_Icon.selectOption('No')
        await this.sumarry_Icon.selectOption('No')
        await this.feedback.selectOption('No')
        await this.Workflowmapped_checkbox.click()
        if (await this.Workflowmapped_checkbox.isChecked) {
            if (await expect(this.Default_data_loaded).not.toBeChecked) {
                await this.Default_data_loaded.check()
                console.log('checked')
            }
        }
        await this.save_table.click()
        await this.save_ok1.click()
        await this.Table_Add.click()
        await this.screen_name.selectOption('Sample Work Assignmnt')
        await this.Form_Name.selectOption('Myform')
        await this.Type_field.selectOption('Form Field')
        await this.Field_Name.selectOption('Work Package Name')
        await expect(this.column_Width).toBeEmpty()
        console.log('column width field is  is empty')
        await this.column_Width.fill(data.column_Width)
        const dropdown = 'Yes';
        switch (dropdown) {

            case 'Yes':
                await this.Primary.selectOption('Yes')
                console.log('Primary Yes is selected');
                break;

            default:
                console.log('Failed to seelct Yes in Primary dropdown');
                break;
        }
        await this.mapingsave.click()
        await this.save_ok2.click()
        await this.screen_name1.selectOption('Sample Work Assignmnt')
        await this.Form_name1.selectOption('Myform')
        await this.Type_Field1.selectOption('Form Field')
        await this.Field_name1.selectOption('Text Input control Type')
        await this.Column_width1.fill(data.column_Width1)
        await this.mapingsave.click()
        await this.save_ok2.click()
        await this.exitmapping.click()
        await this.table_close.click()
        await this.Sample_Work_Assignmnet_Gear_Icon1.click()
        await this.screenlayout.click()
        await this.content_Percentage.selectOption('25 Percentage')
        await this.content_Mapping.selectOption('Add Work Task')
        await this.Role.click()
        await this.Role_selection.click()
        await this.show.click()
        await this.screen_layout_save.click()
        await this.save_ok2.click()
        await this.content_Percentage.selectOption('100 Percentage')
        await this.content_Mapping.selectOption('sample Table')
        await this.Role.click()
        await this.Role_selection.click()
        await this.show.click()
        await this.screen_layout_save.click()
        await this.save_ok2.click()
        await this.manage_screen_layout_close.click()
    }
}




