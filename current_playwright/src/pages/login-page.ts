import { BrowserContext, Locator,Page,expect, } from "@playwright/test";
import { Console, time } from "console";
import { Then } from "playwright-bdd/decorators";


export class Login {
    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;
    Vechicle_Page:Locator;
    Request_Type :Locator;
    Request_Type_Fai:Locator;
    Page_Title :Locator;
    Vechicle_Visibility :Locator;
    ADD_Button:Locator;
    Procurement_Dropdown_Check:Locator;
    Procurement_Purpose:Locator;
    Expected_Delivery_Date:Locator;
    Expected_Delivery_Date_Selection:Locator;
    Priority:Locator;
    Remarks_Empty:Locator;
    Remarks_Editable:Locator;
    Remarks:Locator;
    usage_Restriction:Locator;
    Project_Execution_Premises:Locator;
    Brand:Locator;
    Brand_Add_Nonavailabledata:Locator;
    Item_Brand_Model:Locator;
    Brand_Save:Locator;
    Brand_Success_Popup:Locator;
   
    Vechicle:Locator;
    Vechicle_dropdown_Selection:Locator;
    Vechicle_Add_Nonavailabledata:Locator;
    Vechicle_Item_Brand_Model:Locator;
    Vechicle_Save:Locator;
    Vechicle_Success_Popup:Locator;
    Variant:Locator;
    Requested_Quantity_Item_UOM:Locator;
    Expiry_Date:Locator;
    Expiry_Date_Selection:Locator;
   
    Powertrain:Locator;
    Powertrain_Nonavailabledata:Locator;
    Powertrain_Item_Brand_Model:Locator;
    Powertrain_save:Locator;
    Powertrain_successpopup:Locator;

    ProgramType_Dropdown:Locator;
    ProgramType_selection:Locator;
    programType_Nonavailabledata:Locator;
    ProgramType_Item_Brand_Model:Locator;
    ProgramType_Save:Locator;
    ProgramType_save_Popup:Locator;

    Vehicle_Allocation_Dropdown:Locator;
    Vehicle_Allocation_selection:Locator;

    Invoicing_Mode_Dropdown:Locator;
    Invoicing_Mode_selection:Locator;

    
    Vehicle_Category_Dropdown:Locator;
    Vehicle_Category_selection:Locator;

    Handle_Dropdown:Locator;
    Handle_selection:Locator;

    
   Purchase_Category_Dropdown:Locator;
   Purchase_Category_selection:Locator;

   Model_Year_Dropdown:Locator;
   Model_Year_selection:Locator;
    
   Targeted_Year_Dropdown:Locator;
   Targeted_Year_selection:Locator;

   Vechicle_Ordered_Date:Locator;
   Vechicle_Ordered_Save:Locator;

   
   Program_description_Dropdown:Locator;
   Program_description_selection:Locator;
   Program_description_Nonavailabledata:Locator;
   Program_description_Item_Brand_Model:Locator;
   Program_descriptione_Save:Locator;
   Program_description_save_Popup:Locator;

   select_shiftment_need_dropdown:Locator;
   select_select_shiftment_need_selection_dropdown:Locator;

   Delivery_Location:Locator;
   Delivery_Location_selection:Locator;
   Booking_status:Locator;
   Booking_status_selection:Locator;
   Delivery_Location_status:Locator;
   Delivery_Location_status_selection:Locator;
   Drive_Type:Locator;
   Drive_Type_selection:Locator;

   PID_Stimulation:Locator;
   PID_Value_selection:Locator;
   Caresoft_Entity:Locator;
   Caresoft_Entity_Selection:Locator;
   Requested_Budjet:Locator;
   Base_Curreency_UOM:Locator;
   Base_Currency_Dropdown:Locator;
   Cost_Conversion_Year:Locator;
   Cost_conversion_dropdown:Locator;

   Billable_Radio_Check_Enabled:Locator;
   Billable_Radio_Check:Locator;
   Billable_Radio_Button:Locator;
   Work_space_not_to_be_checked  :Locator;
   Work_Place:Locator;
   Payment_Method:Locator;
   Quoted_Source_Value:Locator;
   Approved_Budjet:Locator;
   Approved_Quantity:Locator;
   Save:Locator;
   success_popup_ok:Locator;

    url: string;
    goto: any;
    constructor(page:Page){
        this.page=page;
        
        this.url='https://procurementqat.caresoftglobal.com';
        this.username=this.page.locator('[id="txtUserID"]');
        this.password=this.page.locator('[id="txtPassword"]');
        this.loginButton=this.page.locator('[id="btnSubmit"]');
        // this.Vechicle_Page=this.page.locator('[class="fs-sm"]').nth(6);

        this.Vechicle_Page=this.page.getByRole('link', { name: ' Vehicle Vehicle Purchase' });

        this.Request_Type=this.page.locator('[id="ddRequeste"]');

        this.Request_Type=this.page.locator('[id="ddRequestedType"]');
        // this.Page_Title=this.page.locator('[class="mb-0"]').nth(8);
        this.Page_Title=this.page.getByRole('link', { name: ' Vehicle Vehicle Purchase' });
        // this.Vechicle_Visibility=this.page.locator('[class="mb-0"]').nth(8);
        this.Vechicle_Visibility=this.page.getByRole('link', { name: ' Vehicle Vehicle Purchase' });
        this.ADD_Button=this.page.locator('[id="btnadd"]');
        // this.Procurement_Dropdown_Check=this.page.locator('[role="option"]').nth(4);
        this.Procurement_Dropdown_Check=this.page.getByRole('option', { name: 'Exposition' });
        this.Procurement_Purpose=this.page.locator('[id="ddlPurpose"]');
        this.Expected_Delivery_Date=this.page.locator('[id="txtExpectedDeliveryDate"]');
        this.Expected_Delivery_Date_Selection=this.page.locator('[class="applyBtn btn btn-primary"]').nth(0);
        this.Priority=this.page.locator('[id="ddlPriority"]');
        this.Remarks_Empty=this.page.locator('[id="txtRemarks"]');
        this.Remarks_Editable=this.page.locator('[id="txtRemarks"]');
        this.Remarks=this.page.locator('[id="txtRemarks"]');
        this.usage_Restriction=this.page.locator('[id="txtUsageRestriction"]');
        this.Project_Execution_Premises=this.page.locator('[id="ddlProjectExecutionPremises"]');
        this.Brand=this.page.locator('[id="ddlBrandvehicle"]');
        // this.Brand_Add_Nonavailabledata=this.page.locator('[class="ph-plus-circle"]').nth(4);
         this.Brand_Add_Nonavailabledata=this.page.locator('#prompt_value1Vehiclebrand i');
        this.Item_Brand_Model=this.page.locator('[id="ddlItemName"]');
        this.Brand_Save=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.Brand_Success_Popup=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        
        this.Vechicle=this.page.locator('[id="select2-ddlVehicleName-container"][title="Select Vehicle Name"]');
        this.Vechicle_dropdown_Selection=this.page.locator('[role="option"]').nth(1);

        // this.Vechicle_Add_Nonavailabledata=this.page.locator('[class="ph-plus-circle"]').nth(5);
        this.Vechicle_Add_Nonavailabledata=this.page.locator('#prompt_valueVehicleName i');

        this.Vechicle_Item_Brand_Model=this.page.locator('[id="ddlItemName"]');
        this.Vechicle_Save=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.Vechicle_Success_Popup=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.Variant=this.page.locator('[id="txtVariant"]');
        this.Requested_Quantity_Item_UOM=this.page.locator('[id="txtQtyvehicle"]');
        this.Expiry_Date=this.page.locator('[id="txtExpiryDatevehicle"]');
        // this.Expiry_Date_Selection=this.page.locator('[class="applyBtn btn btn-primary"]').nth(8);
        this.Expiry_Date_Selection=this.page.getByRole('button', { name: 'Apply' });
        this.Powertrain=this.page.locator('[id="ddlPowertrain"]');
        this.Powertrain_Nonavailabledata=this.page.locator('[class="ph-plus-circle"]').nth(6);
        this.Powertrain_Item_Brand_Model=this.page.locator('[id="ddlItemName"]');
        this.Powertrain_save=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.Powertrain_successpopup=this.page.locator('[class="btn btn-primary bootbox-accept"]');

        this.ProgramType_Dropdown=this.page.locator('[id="select2-ddlProgramType-container"]');
        // this.ProgramType_selection=this.page.locator('[role="option"]').nth(2);
        this.ProgramType_selection=this.page.getByRole('option', { name: 'Internal' });
        this.programType_Nonavailabledata=this.page.locator('#prompt_valueProgramType i');
        this.ProgramType_Item_Brand_Model=this.page.locator('[id="ddlItemName"]');
        this.ProgramType_Save=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.ProgramType_save_Popup=this.page.locator('[class="btn btn-primary bootbox-accept"]');


        this.Vehicle_Allocation_Dropdown=this.page.locator('[id="select2-ddlVehicleAllocation-container"]');
        this.Vehicle_Allocation_selection=this.page.locator('[role="option"]').nth(1);
      
        this.Invoicing_Mode_Dropdown=this.page.locator('[id="select2-ddlInvoicingMode-container"]');
        this.Invoicing_Mode_selection=this.page.locator('[role="option"]').nth(-1);

        this.Vehicle_Category_Dropdown=this.page.locator('[id="select2-ddlVehicleCategory-container"]');
        this.Vehicle_Category_selection=this.page.locator('[role="option"]').nth(1);

        this.Handle_Dropdown=this.page.locator('[id="select2-ddlHandle-container"]');
        this.Handle_selection=this.page.locator('[role="option"]').nth(1);

        this.Purchase_Category_Dropdown=this.page.locator('[id="select2-ddlPurchaseCategory-container"]');
        this.Purchase_Category_selection=this.page.locator('[role="option"]').nth(3);

        this.Model_Year_Dropdown=this.page.locator('[id="select2-ddlModelYear-container"]');
        this.Model_Year_selection=this.page.locator('[role="option"]').nth(1);


        this.Targeted_Year_Dropdown=this.page.locator('[id="select2-ddlTargetedYear-container"]');
        this.Targeted_Year_selection=this.page.locator('[role="option"]').nth(1);

        this.Vechicle_Ordered_Date=this.page.locator('[class="form-control daterange-single"]');
        this.Vechicle_Ordered_Save=this.page.locator('[class="applyBtn btn btn-primary"]').nth(7);

        this.Program_description_Dropdown=this.page.locator('[id="select2-ddlProgramdescription-container"]');
        this.Program_description_selection=this.page.locator('[role="option"]').nth(2);
        this.Program_description_Nonavailabledata=this.page.locator('[class="ph-plus-circle"]').nth(8);
        this.Program_description_Item_Brand_Model=this.page.locator('[id="ddlItemName"]');
        this.Program_descriptione_Save=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.Program_description_save_Popup=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        this.select_shiftment_need_dropdown=this.page.locator('[id="select2-ddlShipmentNeed-container"]');
        this.select_select_shiftment_need_selection_dropdown=this.page.locator('[role="option"]').nth(2);

        this.Delivery_Location=this.page.locator('[id="select2-ddlDeliveryLocation-container"]');
        this.Delivery_Location_selection=this.page.locator('[role="option"]').nth(6);

        this.Booking_status=this.page.locator('[id="select2-ddlBookingStatus-container"]');
        this.Booking_status_selection=this.page.locator('[role="option"]').nth(1);

        this.Delivery_Location_status=this.page.locator('[id="select2-ddlDeliveryLocationStatus-container"]');
        this.Delivery_Location_status_selection=this.page.locator('[role="option"]').nth(1);
        this.Drive_Type=this.page.locator('[id="select2-ddlDriveType-container"]');
        this.Drive_Type_selection=this.page.locator('[role="option"]').nth(3);
        this.PID_Stimulation=this.page.locator('[class="multiselect-selected-text"]');
        this.PID_Value_selection=this.page.locator('[value="CAT10272C00"]').nth(-1);
        this.Caresoft_Entity=this.page.locator('[id="select2-ddlCaresoftEntity-container"]');
        this.Caresoft_Entity_Selection=this.page.locator('[role="option"]').nth(3);
        this.Requested_Budjet=this.page.locator('[id="txtCostBudgeted"]');

        this.Base_Curreency_UOM=this.page.locator('[id="select2-ddlBaseCurrency-container"]');
        this.Base_Currency_Dropdown=this.page.locator('[role="option"]').nth(2);

        this.Cost_Conversion_Year=this.page.locator('[id="select2-ddlCostConversionYear-container"]');
        this.Cost_conversion_dropdown=this.page.locator('[role="option"]').nth(3);
        this.Billable_Radio_Check_Enabled=this.page.locator('[id="RdnBillabeno"]');
        this.Billable_Radio_Check=this.page.locator('[id="RdnBillabeno"]');

        this.Billable_Radio_Button=this.page.locator('[id="RdnBillabeno"]');
        this.Work_Place=this.page.locator('[id="RdnWorkPlaceVendor"]');
        this.Work_space_not_to_be_checked=this.page.locator('[id="RdnWorkPlaceCustomer"]');
        this.Payment_Method=this.page.locator('[id="RdnPaymentcompletedno"]');
        this.Quoted_Source_Value=this.page.locator('[id="txtQuotedSourcedvalue"]');
        this.Approved_Budjet=this.page.locator('[id="txtApprovedBudget"]');
        this.Approved_Quantity=this.page.locator('[id="txtApprovedQuantity"]');
        this.Save=this.page.locator('[id="btnSave"]');
        this.success_popup_ok=this.page.locator('[class="btn btn-primary bootbox-accept"]');
        



    }
    public async Login (){
        await this.page.goto(this.url);
       // URL
        await expect(this.page).toHaveURL('https://procurementqat.caresoftglobal.com')
        console.log('passed')
        
        // await this.page.waitForTimeout(3000);
        // await this.username.waitFor({state:'visible'})
        
        await this.page.waitForLoadState('load');
        await this.username.fill('101479')
        await this.password.fill('Infinity*!99')
        await this.loginButton.click()
        //Visible 
        await expect(this.Vechicle_Page).toBeVisible()
        console.log('Vehicle Title is visible')
        // Title 

        await expect(this.Page_Title).toContainText("Vehicle")
        console.log('Vehicle Title is present')

        // await this.page.pause()
        await this.Vechicle_Page.click()
        // await this.page.pause()
        await this.page.waitForTimeout(3000)
        
        await this.Request_Type.selectOption('Procure Vehicle')
        // await this.page.pause()
        await this.ADD_Button.click()
        await this.page.pause()
        await this.page.waitForTimeout(5000);
        // to have value
        // await expect(this.Procurement_Dropdown_Check).toBe('Exposition')
        // console.log('Exosition dropdown value is present in Procurement Purpose dropdown---Passed')
        
        // console.log('Remarks test field is Empty--Passed')
        await this.Procurement_Purpose.selectOption('Exposition')
        // await this.page.pause()
        await this.Expected_Delivery_Date.click()
        // await this.page.pause()
        await this.Expected_Delivery_Date_Selection.click()
        // await this.page.pause()
        await this.Priority.selectOption('High')
        // await this.page.pause()
        await expect(this.Remarks_Empty).toBeEmpty()
        console.log('Remarks test field is Empty--Passed')
        // to be Editable
        await expect(this.Remarks_Editable).toBeEditable()
        console.log('Remarks test field is Editable--Passed')
        await this.Remarks.fill('Welcome to Earth')
        // await this.page.pause()
        await this.usage_Restriction.fill('Welcome to Mercury')
        // await this.page.pause()
        await this.Project_Execution_Premises.selectOption('Caresoft')
        // await this.page.pause()
        // while(await this.page.getByLabel('Customer').isVisible()==false){
        //     this.page.keyboard.down('PageDown') }
        await this.Brand.selectOption('Mercedes-Benz')
        // await this.page.pause()
        await this.Brand_Add_Nonavailabledata.click()
        // await this.page.pause()
        await this.Item_Brand_Model.fill('sample_Brand')
        // await this.page.pause()
        await this.Brand_Save.click()
        // await this.page.pause()
        await this.Brand_Success_Popup.click()
        // await this.page.pause()
        await this.Vechicle.click()
        // await this.page.pause()
        await this.Vechicle_dropdown_Selection.click()
        // await this.page.pause()
        await this.Vechicle_Add_Nonavailabledata.click()
        // await this.page.pause()
        await this.Vechicle_Item_Brand_Model.fill('Vehicle Brand')
        // await this.page.pause()
        await this.Vechicle_Save.click()
        // await this.page.pause()
        await this.Vechicle_Save.click()
        // await this.page.pause()
        await this.Variant.fill('Variant Percentage Increased')
        // await this.page.pause()
        await this.Requested_Quantity_Item_UOM.fill('1')
        // await this.page.pause()
        await this.Expiry_Date.click()
        // await this.page.pause()
        await this.Expiry_Date_Selection.click()
        // await this.page.pause()
        await this.Powertrain.selectOption('EV')
        // await this.page.pause()
        await this.Powertrain_Nonavailabledata.click()
        // await this.page.pause()
        await this.Powertrain_Item_Brand_Model.fill('Welcome to Venus')
        // await this.page.pause()
        await this.Powertrain_save.click()
        // await this.page.pause()
        await this.Powertrain_successpopup.click()
        // await this.page.pause()
        await this.ProgramType_Dropdown.click()
        await this.page.pause()
        await this.ProgramType_selection.click()
        // await this.page.pause()
        await this.programType_Nonavailabledata.click()
        // await this.page.pause()
        await this.ProgramType_Item_Brand_Model.fill('Welcome to Mars')
        // await this.page.pause()
        await this.ProgramType_Save.click()
        // await this.page.pause()
        await this.ProgramType_save_Popup.click()
        // await this.page.pause()
        await this.Vehicle_Allocation_Dropdown.click()
        // await this.page.pause()
        await this.Vehicle_Allocation_selection.click()
        // await this.page.pause()
        await this.Invoicing_Mode_Dropdown.click()
        await this.Invoicing_Mode_selection.click()
        // await this.page.pause()
        await this.Vehicle_Category_Dropdown.click()
        // await this.page.pause()
        await this.Vehicle_Category_selection.click()
        await this.Handle_Dropdown.click()
        await this.Handle_selection.click()
        await this.page.pause()
        await this.Purchase_Category_Dropdown.click()
        await this.Purchase_Category_selection.click()
        await this.page.pause()
        await this.Model_Year_Dropdown.click()
        await this.Model_Year_selection.click()
        await this.page.pause()
        await this.Targeted_Year_Dropdown.click()
        await this.Targeted_Year_selection.click()
        await this.page.pause()
        await this.Vechicle_Ordered_Date.click()
        await this.Vechicle_Ordered_Save.click()
        await this.page.pause()
        this.Program_description_Dropdown.click()
         await this.page.pause()
        this.Program_description_selection.click()
        this.Program_description_Nonavailabledata.click()
        await this.page.pause()
        this.Program_description_Item_Brand_Model.fill("welcome")
        this.Program_descriptione_Save.click()
        await this.page.pause()
        this.Program_description_save_Popup.click()
        await this.page.pause()
        this.select_shiftment_need_dropdown.click()
        await this.page.pause()
        this.select_select_shiftment_need_selection_dropdown.click()
        await this.page.pause()
        this.Delivery_Location.click()
        this.Delivery_Location_selection.click()
        await this.page.pause()
        this.Booking_status.click()
        this.Booking_status_selection.click()
        await this.page.pause()
        this.Delivery_Location_status.click()
        this.Delivery_Location_status_selection.click()
        await this.page.pause()
        this.Drive_Type.click()
        this.Drive_Type_selection.click()
        await this.page.pause()
        this.PID_Stimulation.click()
        this.PID_Value_selection.click()
        await this.page.pause()
        this.Caresoft_Entity.click()
        this.Caresoft_Entity_Selection.click()
        await this.page.pause()
        this.Requested_Budjet.fill('9')
        await this.page.pause()
        this.Base_Curreency_UOM.click()
        this.Base_Currency_Dropdown.click()
        await this.page.pause()
        this.Cost_Conversion_Year.click()
        await this.page.pause()
        this.Cost_conversion_dropdown.click()
        await this.page.pause()
        //to be enabled
        await expect(this.Billable_Radio_Check_Enabled).toBeEnabled()
        console.log('Billable radio button is enabled [passed]')

        this.Billable_Radio_Button.click()
        await this.page.pause()
        //tobechecked
        await expect(this.Billable_Radio_Check).toBeChecked()
        console.log('Billable radio button is selected as No(passed)')
        await this.page.pause()
        //not to be checked
        await expect(this.Work_space_not_to_be_checked).not.toBeChecked()
        console.log('Work place field --caresoft otion is not selected---Passed')
        this.Work_Place.click()
        await this.page.pause()
        this.Payment_Method.click()
        await this.page.pause()
        //to be disabled
        await expect(this.Quoted_Source_Value).toBeDisabled()
        console.log('Quoted_Source_Value field is disabled---Passed')
        await this.page.pause()
        this.Approved_Budjet.fill('9')
        await this.page.pause()
        this.Approved_Quantity.fill('9')
        await this.page.pause()
        await this.Save.click()
        await this.page.pause()
        await this.success_popup_ok.click()
        await this.page.pause()

    }

}


