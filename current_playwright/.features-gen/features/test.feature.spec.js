/** Generated from: features\test.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Creation", () => {

  test("Complete Form", { tag: ["@smoke"] }, async ({ Then, login, And, navigate, pagemaster, transaction }) => {
    await Then("Login", null, { login });
    await And("navigate to\"Setting\"", null, { navigate });
    await Then("click\"Dynamic Form\"", null, { navigate });
    await Then("reach to pagemaster", null, { pagemaster });
    await And("navigate to Transaction page", null, { transaction });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Complete Form": {"pickleLocation":"3:1","tags":["@smoke"]},
};