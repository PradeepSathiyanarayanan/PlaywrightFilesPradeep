import { createBdd } from "playwright-bdd";
import{test} from './fixtures/fixture'
import { Login } from "../src/pages/login-page";



const{Given, When, Then} = createBdd(test)

Then("Login",async({login})=>{
    await login.Login();

})
