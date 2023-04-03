import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";
class HeaderPage extends BasePage {
    private spanTotal = '//a[@id="wishlist-total"]/span';
    private hrefSpanTotal = '//a[@id="wishlist-total"]'
    private attributeSpan = 'title'
    constructor() {
        super()
    }
    async spanVisible() {
        await ElementActions.isElementVisible(this.spanTotal)
    }
    async getElementTextSpanTotal() {
        await ElementActions.getElementText(this.spanTotal)
    }
    async clickSpanTotal() {
        await ElementActions.click(this.hrefSpanTotal)
    }
    async getValueAtrributeSpan() {
        await ElementActions.getTextAttribute(this.hrefSpanTotal, this.attributeSpan);
    }

}
export const headerPage = new HeaderPage()