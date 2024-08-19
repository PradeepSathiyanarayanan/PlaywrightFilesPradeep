import { createBdd } from "playwright-bdd";
import{test} from './fixtures/fixture'
import { Login } from "../src/pages/login-page";
import { Navigate } from "../src/pages/navigate-page";
import { Reach } from "../src/pages/pagemaster.page";
const{Given, When, Then} = createBdd(test)


Then('Goto"ASample Technical Publication"', async ({transaction},temp:string) => {
    await transaction.Goto(temp);
  });
  Then('click"Sample Work Assignmnt"', async ({transaction},temp:string) => {
    await transaction.click_sample_work_assignment(temp);
  });
  Then('check created Add Work task Button is dispalyed perfectly"Add"', async ({transaction},temp:string) => {
    await transaction.Addworktask(temp);
  });