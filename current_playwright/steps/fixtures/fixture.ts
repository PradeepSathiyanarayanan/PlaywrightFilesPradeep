import{test as base, createBdd} from "playwright-bdd";
import { Login } from "../../src/pages/login-page";
import { Navigate } from "../../src/pages/navigate-page";
import { Reach } from "../../src/pages/pagemaster.page";
import { Goto } from "../../src/pages/Transaction-page";



type allStepClass ={
    login:Login;
    navigate:Navigate;
    pagemaster:Reach
    transaction:Goto
  
}

export const test=base.extend<allStepClass>({
    login:async({page}, use )=>{await use(new Login(page));},
    
     navigate:async({page}, use )=>{await use(new Navigate(page));},
     pagemaster:async({page},use)=>{await use(new Reach(page));},
     transaction:async({page},use)=>{await use(new Goto(page));}



})
// await this.page.locator('[class="dropdown-item"]').getByText(Manage Form and Uploader).click();
