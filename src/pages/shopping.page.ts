import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

export class ShoppingPage extends BasePage {
    private buttonCart: string = '//div[@id="cart"]/button'
    private buttonTableCart = '//div/p/a[@href="https://thetestingworld.com/shop/index.php?route=checkout/cart"]'
    private spanTotal = '//a[@id="wishlist-total"]/span';
    constructor() {
        super()
    }
    async selectItem(idItem: number) {
        let selectorItem = '//button[@onclick="cart.add(' + '\'' + idItem + '\'' + ');"]'
        await ElementActions.click(selectorItem)
    }
    async clickButtonCart() {
        await ElementActions.click(this.buttonCart);
    }
    async clickButtonTableCart() {
        await ElementActions.click(this.buttonTableCart)
    }
    async putItemToWishlist(idItem: number) {
        let selectorItem = '//div/button[@onclick="wishlist.add(' + '\'' + idItem + '\'' + ');"]'
        await ElementActions.click(selectorItem)
    }
    async spanVisible() {
        await ElementActions.isElementVisible(this.spanTotal)
    }
    async getElementTextSpanTotal() {
        await ElementActions.getElementText(this.spanTotal)
    }

}
export const shoppingPage = new ShoppingPage();