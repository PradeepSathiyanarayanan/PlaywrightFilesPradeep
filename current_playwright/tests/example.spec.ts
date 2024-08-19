



// import { test, expect, Browser, chromium ,Page, Locator} from '@playwright/test';
// import { ChromiumBrowser } from "@playwright/test";


// test ('login test' ,async()=>{
//   const browser:Browser = await chromium.launch({headless: false});
//   const page:Page = await browser.newPage();
//   await page.goto("https://adaptiveqat.caresoftglobal.com");
//   const username:Locator = await page.locator('txtUserID');
//   const password:Locator = await page.locator('txtPassword');
//   const loginButton:Locator = await page.locator("btnSubmit");
  
//   username.fill("103095");
//   password.fill("infinity*!99");
//   loginButton.click();

  

// });
 

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
//   await logObj.Login()
// });
 
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
 
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
 
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//we are calling the method in constructor.So we mentioning new --we are creating obj for constructor

import { test, expect, chromium } from '@playwright/test';
const browser =await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://procurementqat.caresoftglobal.com');
// cont cookies
