import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { configPage } from "../../userData";
import { loginPage } from "../../src/pages/login.page";
import { shoppingPage } from "../../src/pages/shopping.page";
import { expect } from "chai";

setDefaultTimeout(configPage.lapseTime)

Given("The user logins into the app", async function () {
    await loginPage.setUserName(configPage.userName)
    await loginPage.setPassword(configPage.passName)
    await loginPage.clickButton()
})
Given("The user goes to the page shopping", async function () {
    await loginPage.clickHome()
    await shoppingPage.spanVisible()
})
When("The user puts the items {string} into the wishlist", async function (items: string) {
    let arrayItems: any[] = items.split(",")
    for (let i = 0; i < arrayItems.length; i++) {
        await shoppingPage.putItemToWishlist(arrayItems[i] as number)
    }
})
Then("The size of the array {string}  must be equals to the message of wishlist span", async function (items: string) {
    let arrayItems: any[] = items.split(",")
    console.log(arrayItems)
    await shoppingPage.spanVisible()
    let spanTotalText = shoppingPage.getElementTextSpanTotal()
    console.log(spanTotalText)
})