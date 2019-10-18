import { Selector } from "testcafe"; // first import testcafe selectors
import { utc } from "moment";

fixture`Getting Started`.page`https://google.nl`; // declare the fixture // specify the start page

//then create a test and place your code there
test("My first test", async t => {
  console.log(utc());

  await t
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector("img").withAttribute("alt", "Google").exists)
    .ok();
});
