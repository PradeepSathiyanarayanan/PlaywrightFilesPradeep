/** Generated from: features\test.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Creation", () => {

  test("Complete Form", { tag: ["@smoke"] }, async ({ Then, login, navigate, pagemaster, transaction }) => {
    await Then("Login", null, { login });
    await Then("Navigate to\"Setting\"", null, { navigate });
    await Then("click\"Dynamic Form\"", null, { navigate });
    await Then("Reach\"Page Master\"", null, { pagemaster });
    await Then("Click\"icon-settings dropbtn\"", null, { pagemaster });
    await Then("click\"dropdown-item\"", null, { pagemaster });
    await Then("select\"Select Field Type\"", null, { pagemaster });
    await Then("select\"Select Element\"", null, { pagemaster });
    await Then("Click\"chk_popup\"", null, { pagemaster });
    await Then("Enter\"txt_btn_name\"", null, { pagemaster });
    await Then("select\"ddlbtniconforforms\"", null, { pagemaster });
    await Then("click\"btnsavepageform\"", null, { pagemaster });
    await Then("Click\"swal-button swal-button--confirm\"", null, { pagemaster });
    await Then("click\"btn-close btn_MappingPage_close\"", null, { pagemaster });
    await Then("click1\"dropdown-item\"", null, { pagemaster });
    await Then("click\"TablePageID(this)\"", null, { pagemaster });
    await Then("Enter\"id=\"txt_TableName\"", null, { pagemaster });
    await Then("select\"ddlIsEdit\"", null, { pagemaster });
    await Then("select\"ddlIsDelete\"", null, { pagemaster });
    await Then("enter\"txtDeleteConfirmation\"", null, { pagemaster });
    await Then("select\"ddlIsinfoicon\"", null, { pagemaster });
    await Then("select\"ddlIssummaryicon\"", null, { pagemaster });
    await Then("select\"ddlIsFeedBack\"", null, { pagemaster });
    await Then("click\"chk_workflow\"", null, { pagemaster });
    await Then("click\"chk_Table\"", null, { pagemaster });
    await Then("click\"SaveTabledetails\"", null, { pagemaster });
    await Then("click1\"class=\"swal-button swal-button--confirm\"", null, { pagemaster });
    await Then("click\"Add\"", null, { pagemaster });
    await Then("select\"ddltableScreenname\"", null, { pagemaster });
    await Then("select\"ddlScreenformlst\"", null, { pagemaster });
    await Then("select\"ddlfieldtype\"", null, { pagemaster });
    await Then("select\"chk_isPrimary\"", null, { pagemaster });
    await Then("select\"ddltableScreenformctrls\"", null, { pagemaster });
    await Then("Enter\"txt_width\"", null, { pagemaster });
    await Then("clickmappingsave\"SaveColumndetails\"", null, { pagemaster });
    await Then("click2\"class=\"swal-button swal-button--confirm\"", null, { pagemaster });
    await Then("click\"pageroleclose\"", null, { pagemaster });
    await Then("click\"btn-close\"", null, { pagemaster });
    await Then("click2\"\"icon-settings dropbtn\"", null, { pagemaster });
    await Then("click1\"ScreenLayout(this)\"", null, { pagemaster });
    await Then("select\"ddlcontentper\"", null, { pagemaster });
    await Then("select\"ddlcontMap\"", null, { pagemaster });
    await Then("click\"multiselect-selected-text\"", null, { pagemaster });
    await Then("select\"Super Admin\"", null, { pagemaster });
    await Then("click\"10\"", null, { pagemaster });
    await Then("click\"btnscreenlayoutsave\"", null, { pagemaster });
    await Then("click3\"class=\"swal-button swal-button--confirm\"", null, { pagemaster });
    await Then("select1\"ddlcontentper\"", null, { pagemaster });
    await Then("select1\"ddlcontMap\"", null, { pagemaster });
    await Then("click1\"multiselect-selected-text\"", null, { pagemaster });
    await Then("select1\"Super Admin\"", null, { pagemaster });
    await Then("clicka\"10\"", null, { pagemaster });
    await Then("click1\"btnscreenlayoutsave\"", null, { pagemaster });
    await Then("click4\"class=\"swal-button swal-button--confirm\"", null, { pagemaster });
    await Then("click_manange_screen_layout\"btn-close\"", null, { pagemaster });
    await Then("Goto\"ASample Technical Publication\"", null, { transaction });
    await Then("click\"Sample Work Assignmnt\"", null, { transaction });
    await Then("check created Add Work task Button is dispalyed perfectly\"Add\"", null, { transaction });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Complete Form": {"pickleLocation":"3:1","tags":["@smoke"]},
};