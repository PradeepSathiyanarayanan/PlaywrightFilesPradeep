import { createBdd } from "playwright-bdd";
import{test} from './fixtures/fixture'
import { Login } from "../src/pages/login-page";
import { Navigate } from "../src/pages/navigate-page";
const{Given, When, Then} = createBdd(test)


  Then('Reach"Page Master"', async ({pagemaster},temp:string) => {
    await pagemaster.Reach(temp);
  });
  
  Then('Click"icon-settings dropbtn"', async ({pagemaster},temp:string) => {
    await pagemaster.click_gear_Icon(temp);
  });
  Then('click"dropdown-item"', async ({pagemaster},temp:string) => {
    await pagemaster.click_Manange_Form_and_uploader(temp);
  });
  Then('select"Select Field Type"', async ({pagemaster},temp:string) => {
    await pagemaster.select_content_type(temp);
  });
  Then('select"Select Element"', async ({pagemaster},temp:string) => {
    await pagemaster.select_element(temp);
  });
  Then('Click"chk_popup"', async ({pagemaster},temp:string) => {
    await pagemaster.click_checkbox(temp);
  });
  Then('Enter"txt_btn_name"', async ({pagemaster},temp:string) => {
    await pagemaster.enter_buttonname(temp);
  });
  Then('select"ddlbtniconforforms"', async ({pagemaster},temp:string) => {
    await pagemaster.Buttontype(temp);
  });
  Then('click"btnsavepageform"', async ({pagemaster},temp:string) => {
    await pagemaster.save_button(temp);
  });
  Then('Click"swal-button swal-button--confirm"', async ({pagemaster},temp:string) => {
    await pagemaster.save_button_ok(temp);
  });
  Then('click"btn-close btn_MappingPage_close"', async ({pagemaster},temp:string) => {
    await pagemaster.exit(temp);
  });
  Then('click1"dropdown-item"', async ({pagemaster},temp:string) => {
    await pagemaster.click_gear_Icon1(temp);
  });
 Then('click"TablePageID\\(this)"', async ({pagemaster},temp:string) => {
    await pagemaster.click_manange_table(temp);
  });
  Then('Enter"id="txt_TableName"', async ({pagemaster},temp:string) => {
    await pagemaster.enter_table_name(temp);
  });
  Then('select"ddlIsEdit"', async ({pagemaster},temp:string) => {
    await pagemaster.select_edit_required(temp);
  });
  Then('select"ddlIsDelete"', async ({pagemaster},temp:string) => {
    await pagemaster.select_delete_required(temp);
  });
  Then('enter"txtDeleteConfirmation"', async ({pagemaster},temp:string) => {
    await pagemaster.enter_delete_confirmation_message(temp);
  });
  Then('select"ddlIsinfoicon"', async ({pagemaster},temp:string) => {
    await pagemaster.select_info_icon(temp);
  });
  Then('select"ddlIssummaryicon"', async ({pagemaster},temp:string) => {
    await pagemaster.select_summary_icon(temp);
  });

  Then('select"ddlIsFeedBack"', async ({pagemaster},temp:string) => {
    await pagemaster.select_feedback(temp);
  });
  Then('click"chk_workflow"', async ({pagemaster},temp:string) => {
    await pagemaster.click_workdlow_checkbox(temp);
  });
  Then('click"chk_Table"', async ({pagemaster},temp:string) => {
    await pagemaster.click_default_checkbox(temp);
  });
  Then('click"SaveTabledetails"', async ({pagemaster},temp:string) => {
    await pagemaster.click_save_table(temp);
  });
  Then('click1"class={string}', async ({pagemaster}, arg: string) => {
    await pagemaster.save1_button_ok(arg);
  });
  Then('click"Add"', async ({pagemaster}, temp:string) => {
    await pagemaster.clcik_Table_Add(temp);
  });
  Then('select"ddltableScreenname"', async ({pagemaster}, temp:string) => {
    await pagemaster.select_screen_namea(temp);
  });
  Then('select"ddlScreenformlst"', async ({pagemaster}, temp:string) => {
    await pagemaster.select_form_name(temp);
  });
  Then('select"ddlfieldtype"', async ({pagemaster}, temp:string) => {
    await pagemaster.select_typefield(temp);
  });
  Then('select"ddltableScreenformctrls"', async ({pagemaster}, temp:string) => {
    await pagemaster.select_fieldname(temp);
  });
  Then('Enter"txt_width"', async ({pagemaster}, temp:string) => {
    await pagemaster.enter_column_width(temp);
  });
  Then('select"chk_isPrimary"', async ({pagemaster}, temp:string) => {
    await pagemaster.select_primary(temp);
  });
  Then('clickmappingsave"SaveColumndetails"', async ({pagemaster}, temp:string) => {
    await pagemaster.click_mapping_save(temp);
  });

Then('click2"class={string}', async ({pagemaster}, arg: string) => {
  await pagemaster.save2_button_ok(arg);

});
Then('click"pageroleclose"', async ({pagemaster},temp:string) => {
  await pagemaster.exitclose(temp);
});
Then('click"btn-close"', async ({pagemaster},temp:string) => {
    await pagemaster.click_table_close(temp);
  });
  Then('click2""icon-settings dropbtn"', async ({pagemaster},temp:string) => {
    await pagemaster.click_gear_Icon2(temp);
  });
  Then('click1"ScreenLayout\\(this)"', async ({pagemaster},temp:string) => {
    await pagemaster.click_screen_layout(temp);
  });
  Then('select"ddlcontentper"', async ({pagemaster},temp:string) => {
    await pagemaster.select_content_percentage(temp);
  });
  Then('select"ddlcontMap"', async ({pagemaster},temp:string) => {
    await pagemaster.select_content_mapping(temp);
  });
  Then('click"multiselect-selected-text"', async ({pagemaster},temp:string) => {
    await pagemaster.select_role(temp);
  });
  Then('select"Super Admin"', async ({pagemaster},temp:string) => {
    await pagemaster.select_role_value(temp);
});
Then('click"10"', async ({pagemaster},temp:string) => {
  await pagemaster.click_show(temp);
  });
  Then('click"btnscreenlayoutsave"', async ({pagemaster},temp:string) => {
    await pagemaster.click_screen_layout_save(temp);
  });
  Then('click3"class={string}', async ({pagemaster}, arg: string) => {
    await pagemaster.save2_button_ok(arg);
  
  });
  Then('select1"ddlcontentper"', async ({pagemaster},temp:string) => {
    await pagemaster.select_content_percentage1(temp);
});
Then('select1"ddlcontMap"', async ({pagemaster},temp:string) => {
  await pagemaster.select_content_mapping1(temp);
});
Then('click1"multiselect-selected-text"', async ({pagemaster},temp:string) => {
  await pagemaster.select_role1(temp);
});
Then('select1"Super Admin"', async ({pagemaster},temp:string) => {
    await pagemaster.select_role_value1(temp);
});
Then('clicka"10"', async ({pagemaster},temp:string) => {
    await pagemaster.click_showa(temp);
    });
 Then('click1"btnscreenlayoutsave"', async ({pagemaster},temp:string) => {
        await pagemaster.click_screen_layout_save1(temp);
      });
 Then('click4"class={string}', async ({pagemaster}, arg: string) => {
        await pagemaster.save2_button_ok(arg);
      

      });
      Then('click_manange_screen_layout"btn-close"', async ({pagemaster},temp:string) => {
        await pagemaster.click_screen_layout_close(temp)
      });