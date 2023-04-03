import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { configPage } from "../../userData";
import { loginPage } from "../../src/pages/login.page";
import { shoppingPage } from "../../src/pages/shopping.page";
import { headerPage } from "../../src/pages/components/header.page";
import { expect } from "chai";

setDefaultTimeout(configPage.lapseTime)


Given("The user puts the items {string} into the wishlist", async function (items: string) {
    loginPage.clickHome()
    let arrayItems: any[] = items.split(",")
    expect(await shoppingPage.textFeaturedVisible())
    for (let i = 0; i < arrayItems.length; i++) {
        await shoppingPage.putItemToWishlist(arrayItems[i] as number)
    }
})
When("The user clicks into the favorite option", async function () {
    //let spanTotalText = headerPage.getElementTextSpanTotal()
    //console.log(spanTotalText)
    //let spanTotalText = headerPage.getValueAtrributeSpan()
    await headerPage.clickSpanTotal()
})
Then("The user deletes {string} from the wishlist table", async function (items: string) {
    
})