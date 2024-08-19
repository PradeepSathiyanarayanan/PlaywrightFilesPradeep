import { createBdd } from "playwright-bdd";
import{test} from './fixtures/fixture'
import { Login } from "../src/pages/login-page";
// import { Given } from "playwright-bdd/decorators";
const{Given, When, Then} = createBdd(test)

// Then("Go to{string}",async({navigate},temp:string)=>{
//     await navigate.Navigate(temp);
Then('Navigate to"Setting"', async ({navigate},temp:string) => {
    await navigate.Navigate(temp);
  });
// });
Then('click"Dynamic Form"', async ({navigate},temp:string) => {
    await navigate.click_Dynamic_Form(temp);
  });
  