import{test as base, createBdd} from "playwright-bdd";
import { Login } from "../../src/pages/login-page";


type allStepClass ={
    login:Login;
  
}

export const test=base.extend<allStepClass>({
    login:async({page}, use )=>{await use(new Login(page));}
    
    

}) 