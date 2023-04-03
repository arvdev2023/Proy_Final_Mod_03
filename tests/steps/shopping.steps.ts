/**import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { configPage } from "../../userData";
import { loginPage } from "../../src/pages/login.page";
import { shoppingPage } from "../../src/pages/shopping.page";

setDefaultTimeout(configPage.lapseTime)
Given("The user logins into the app", async function () {
    await loginPage.setUserName(configPage.userName)
    await loginPage.setPassword(configPage.passName)
    await loginPage.clickButton()
})
Given("The user goes to the page shopping", async function () {
    await loginPage.clickHome()
})
Given("The user puts the items {string} into the chart", async function name(items: string) {
    let arrayItems: any[] = items.split(",")

    for (let i = 0; i < arrayItems.length; i++) {
        console.log(arrayItems[i])
        await shoppingPage.selectItem((arrayItems[i]) as number)
    }
})
When("The user clicks on the button cart", async function () {
    await shoppingPage.clickButtonCart()
})
Then("The user clicks on button table", async function () {
    await shoppingPage.clickButtonTableCart()
})**/