import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
import { Transaction } from "../src/pages/transaction-page";

const { Given, When, Then } = createBdd(test)
Then('navigate to Transaction page', async ({ transaction }, temp: string) => {
    await transaction.Transaction_method(temp)
});