import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Getting Started`.page`https://google.nl`; // declare the fixture // specify the start page

//then create a test and place your code there
test("My first test", async t => {
  await t
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(
      Selector("input").withAttribute("aria-label", "Google zoeken").exists
    )
    .ok();
});
