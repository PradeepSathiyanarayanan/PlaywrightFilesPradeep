import { BrowserContext, Locator, Page, chromium, expect, } from "@playwright/test";
import { Console, time } from "console";
import { Then,Given } from "playwright-bdd/decorators";
import { data } from "../../data_set/data";
import { Login } from "./login-page";
import { Navigate } from "./navigate-page";


export class Reach {
    page: Page;
    login:Login
    Page_master:Locator;
    Add_Button:Locator;
    Sample_Work_Assignmnet_Gear_Icon:any;
    Manage_Form_and_Uploader:Locator;
    select_content_typee:Locator;
    select_Element:Locator
    checkbox:Locator;
    Button_Name:Locator;
    button_Icon:Locator;
    save:Locator;
    save_ok:Locator;
    close:Locator;
    manage_table:Locator;
    Table_Name:Locator;
    edit_required:Locator;
    delete_required:Locator;
    delete_confirmation_message:Locator;
    Info_Icon:Locator;
    sumarry_Icon:Locator;
    feedback:Locator;
    Workflowmapped_checkbox:Locator;
    Default_data_loaded :Locator;
    save_table:Locator;
    save_ok1:Locator;
    Table_Add:Locator;
    screen_name:Locator;
    Form_Name:Locator;
    Type_field:Locator;
    Field_Name:Locator;
    column_Width:Locator;
    Primary:Locator;
    mapingsave:Locator;
    save_ok2:Locator;
    exitmapping:Locator;
    table_close:Locator;
    Sample_Work_Assignmnet_Gear_Icon1:any;
    screenlayout:Locator;
    content_Percentage:Locator;
    content_Mapping:Locator;
    Role:Locator;
    Role_selection:Locator;
    screen_layout_save:Locator;
    show:Locator;
    manage_screen_layout_close : Locator;

   
    



    url: string;
    goto: any;
    constructor(page: Page) {
        this.page = page;
        this.login=new Login(page)
        this.Page_master=this.page.locator('[name="Page Master"]')
        this.Sample_Work_Assignmnet_Gear_Icon=this.page.getByRole('link', { name: '' }).nth(1)
        this.Manage_Form_and_Uploader=this.page.getByRole('link', { name: ' Manage Form and Uploader' })
        this.select_content_typee=this.page.locator('[id="ddlformupl"]')
        this.select_Element=this.page.locator('[id="ddlformlst"]')
        this.checkbox=this.page.locator('[id="chk_popup"]')
        this.Button_Name=this.page.locator('[id="txt_btn_name"]')
        this.button_Icon=this.page.locator('[id="ddlbtniconforforms"]')
        this.save=this.page.locator('[id="btnsavepageform"]')
        this.save_ok=this.page.locator('[class="swal-button swal-button--confirm"]')
        this.close=this.page.locator('[class="btn-close btn_MappingPage_close"]')
        this.manage_table=this.page.locator('[onclick="TablePageID(this)"]').nth(0)
        this.Table_Name=this.page.locator('[id="txt_TableName"]')
        this.edit_required=this.page.locator('[id="ddlIsEdit"]')
        this.delete_required=this.page.locator('[id="ddlIsDelete"]')
        this.delete_confirmation_message=this.page.locator('[id="txtDeleteConfirmation"]')
        this.Info_Icon=this.page.locator('[id="ddlIsinfoicon"]')
        this.sumarry_Icon=this.page.locator('[id="ddlIssummaryicon"]')
        this.Workflowmapped_checkbox=this.page.locator('[id="chk_workflow"]')
        this.Default_data_loaded=this.page.locator('[id="chk_Table"]')
        this.save_table=this.page.locator('[id="SaveTabledetails"]')
        this.feedback=this.page.locator('[id="ddlIsFeedBack"]')
        this.save_ok1=this.page.locator('[class="swal-button swal-button--confirm"]')
        this.Table_Add=this.page.locator('[title="Add"]')
        this.screen_name=this.page.locator('[id="ddltableScreenname"]')
        this.Form_Name=this.page.locator('[id="ddlScreenformlst"]')
        this.Type_field=this.page.locator('[id="ddlfieldtype"]')
        this.Field_Name=this.page.locator('[id="ddltableScreenformctrls"]')
        this.column_Width=this.page.locator('[id="txt_width"]')
        this.mapingsave=this.page.locator('[id="SaveColumndetails"]')
        this.save_ok2=this.page.locator('[class="swal-button swal-button--confirm"]')
        this.exitmapping=this.page.locator('[id="pageroleclose"]')
        this.table_close=this.page.getByRole('button', { name: 'Close' })
        this.Sample_Work_Assignmnet_Gear_Icon1=this.page.getByRole('link', { name: '' }).nth(1)
        this.screenlayout=this.page.locator('[onclick="ScreenLayout(this)"]').nth(0)
        this.content_Percentage=this.page.locator('[id="ddlcontentper"]')
        this.content_Mapping=this.page.locator('[id="ddlcontMap"]')
        this.Role=this.page.getByRole('button', { name: 'None selected' })
        this.Role_selection=this.page.locator('[title="Super Admin"]').nth(-1)
        this.show=this.page.locator('[title="10"]').nth(-1)
        this.screen_layout_save=this.page.locator('[id="btnscreenlayoutsave"]')
        this.manage_screen_layout_close=page.getByRole('button', { name: 'Close' })
        this.Primary=this.page.locator('[id="chk_isPrimary"]')

    } 
    public async Reach(Add) {
        await this.Page_master.click()
       
       
    }
 
public async click_gear_Icon(Add) {
    
    await this.Sample_Work_Assignmnet_Gear_Icon.click()
    

}
 
public async click_Manange_Form_and_uploader(Add) {
    
    await this.Manage_Form_and_Uploader.click()
      
    }
 
    public async select_content_type(Add) {
        
        await this.select_content_typee.selectOption('Form')
          


        }
 
        public async select_element(Add) {
            
            await this.select_Element.selectOption('Myform')
              



        }
    
 
    public async click_checkbox(Add) {
        
        await this.checkbox.click()
           
        

    }

    
 
public async enter_buttonname(Add) {
    
    await this.Button_Name.fill('Add Work Task')
      

}


    
 
public async Buttontype(Add) {
    
    await this.button_Icon.selectOption('fa fa-check-square')
      

}
public async save_button(Add) {
    
    await this.save.click()
    

}
public async save_button_ok(Add) {
    
    await this.save_ok.click()
       

}
public async exit(Add) {
    
    await this.close.click()
           

}

public async click_gear_Icon1(Add) {
    
    await this.Sample_Work_Assignmnet_Gear_Icon.click()
   

}


public async click_manange_table(Add) {
    
    await this.manage_table.click()
    

}
public async enter_table_name(Add) {
    
    await this.Table_Name.fill('sample Table')
   

}
public async select_edit_required(Add) {
    
    await this.edit_required.selectOption('No')
    

}
public async select_delete_required(Add) {
    
    await this.delete_required.selectOption('Yes')
    

}
public async enter_delete_confirmation_message(Add) {
    
    await this.delete_confirmation_message.fill('Are you sure want to delete')


}
public async select_info_icon(Add) {
    
    await this.Info_Icon.selectOption('No')


}
public async select_summary_icon(Add) {
    
    await this.sumarry_Icon.selectOption('No')


}
public async select_feedback(Add) {
    
    await this.feedback.selectOption('No')


}
public async click_workdlow_checkbox(Add) {
    
    await this.Workflowmapped_checkbox.click()


}
public async click_default_checkbox(Add) {
    
    await this.Default_data_loaded.click()


}
public async click_save_table(Add) {
    
    await this.save_table.click()


}
public async save1_button_ok(Add) {
    
    await this.save_ok1.click()
    
}
public async clcik_Table_Add(Add) {
    
    await this.Table_Add.click()
    

}
public async select_screen_namea(Add) {
    
    await this.screen_name.selectOption('Sample Work Assignmnt')
    
}
public async select_form_name(Add) {
    
    await this.Form_Name.selectOption('Myform')
    
}
public async select_typefield(Add) {
    
    await this.Type_field.selectOption('Form Field')
}
public async select_fieldname(Add) {
    
    await this.Field_Name.selectOption('Work Package Name')
}  
    public async enter_column_width(Add) {
    
        await this.column_Width.fill('12')
    }  
    public async select_primary(Add) {
    
        await this.Primary.selectOption('Yes')

    }
    public async click_mapping_save(Add) {
    
        await this.mapingsave.click()

       
    }
    public async save2_button_ok(Add) {
        
        await this.save_ok2.click()

    }
    public async exitclose(Add) {
        
        await this.exitmapping.click()
        
    }
    public async click_table_close(Add) {
        
        await this.table_close.click()
       
    }
        public async click_gear_Icon2(Add) {
    
            await this.Sample_Work_Assignmnet_Gear_Icon1.click()
           
        
        }
        public async click_screen_layout(Add) {
            await this.screenlayout.click()
        }
        public async select_content_percentage(Add) {
            await this.content_Percentage.selectOption('25 Percentage')
        }
        public async select_content_mapping(Add) {
    
            await this.content_Mapping.selectOption('Add Work Task') 
        }
        public async select_role(Add) {
            await this.Role.click()
        }
        public async select_role_value(Add) {
    
            await this.Role_selection.click()
        }
        public async click_show(Add) {
    
            await this.show.click()
        }
        public async click_screen_layout_save(Add) {

            await this.screen_layout_save.click()
        }
    public async select_content_percentage1(Add) {

        await this.content_Percentage.selectOption('100 Percentage')
    }
    public async select_content_mapping1(Add) {
        await this.content_Mapping.selectOption('sample Table')
    }
    public async select_role1(Add) {
        await this.Role.click()
    }
    public async select_role_value1(Add) {
        await this.Role_selection.click()
    }
    public async click_showa(Add) {
        await this.show.click() 
    }
    public async click_screen_layout_save1(Add) {
        await this.screen_layout_save.click() 
    }
    public async click_screen_layout_close(Add) {

        await this.manage_screen_layout_close.click()
    }
    }
    
  
       

    














 

    
   

















