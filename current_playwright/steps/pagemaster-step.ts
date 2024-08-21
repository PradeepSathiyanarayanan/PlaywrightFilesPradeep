import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const{Given, When, Then} = createBdd(test)

Then('reach to pagemaster', async ({ pagemaster },temp:string) => {
    await pagemaster.click_page_master(temp)
});