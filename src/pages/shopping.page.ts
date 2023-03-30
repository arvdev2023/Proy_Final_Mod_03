import { BasePage } from "./base.page";

class ShoppingPage extends BasePage {
    private buttonCart: string = '//div[@id="cart"]/button'
    private buttonTableCart = '//div/p/a[@href="https://thetestingworld.com/shop/index.php?route=checkout/cart"]'

    constructor() {
        super()
    }
    async selectItem(idItem: number) {
        let selectorItem = '//button[@onclick="cart.add(' + '\'' + idItem + '\'' + ');"]'
        await this.driver.Page.click(selectorItem)
    }
    async clickButtonCart() {
        await this.driver.Page.click(this.buttonCart);
    }
    async clickButtonTableCart() {
        await this.driver.Page.click(this.buttonTableCart)
    }

}
export const shoppingPage = new ShoppingPage();