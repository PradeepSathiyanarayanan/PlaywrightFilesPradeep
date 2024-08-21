import{test as base, createBdd} from "playwright-bdd";
import { Loginpage } from "../../src/pages/login-page";
import { settingdropdown } from "../../src/pages/navigate-page";
import { pagemaster_option } from "../../src/pages/pagemaster-page";
import { Transaction } from "../../src/pages/transaction-page";
type allStepClass ={
    login:Loginpage;
    navigate:settingdropdown;
    pagemaster:pagemaster_option;
    transaction:Transaction;
}
export const test=base.extend<allStepClass>({
    login:async({page}, use )=>{await use(new Loginpage(page))},
    navigate:async({page},use)=>{await use(new settingdropdown(page))},
    pagemaster:async({page},use)=>{await use(new pagemaster_option(page))},
    transaction:async({page},use)=>{await use(new Transaction(page))},
})

