import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

class WishListPage extends BasePage {
    constructor() {
        super()
    }
    private tblSelector: string = '//div[@id="content"]/div[@class="table-responsive"]/table';
    async deleteItemWishlist(idItem: number) {
        
    }

}
export const wishListPage = new WishListPage()