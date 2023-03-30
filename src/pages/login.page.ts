import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    private username: string = '//input[@id="input-email"]';
    private password: string = '//input[@id="input-password"]';
    private buttonSign: string = '//input[@value="Login"]';
    private selectorHome: string = '//a[text()="Your Store"]';
    constructor() {
        super()
    }
    async setUserName(user: string) {
        await this.driver.Page.fill(this.username, user)
    }
    async setPassword(pass: string) {
        await this.driver.Page.fill(this.password, pass)
    }
    async clickButton() {
        await this.driver.Page.click(this.buttonSign)
    }
    async clickHome() {
        await this.driver.Page.click(this.selectorHome)
    }
}
export const loginPage = new LoginPage()