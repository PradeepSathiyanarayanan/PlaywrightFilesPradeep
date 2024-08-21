import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";

const { Given, When, Then } = createBdd(test)

Then('navigate to{string}', async ({ navigate }, temp: string) => {
    await navigate.clicksetting(temp)
});
Then('click"Dynamic Form"', async ({ navigate }, temp: string) => {
    await navigate.click_Dynamic_Form(temp);
});


