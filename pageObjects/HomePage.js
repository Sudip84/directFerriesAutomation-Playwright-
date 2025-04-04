const {expect} = require("@playwright/test");
class HomePage {

    constructor(page) {
        this.page = page;
        this.cookieWin = page.locator("button[data-cky-tag='accept-button']");
        this.locationFrom = page.locator("input[placeholder='From']");
    }

    async goTo() {
        await this.page.goto('https://openferry.com/');
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.getByRole('button', { name: /Accept/i }).click(); 
        const title = await this.page.title();
        expect(title).toContain("Ferry Tickets"); // validate title of the page
    }

    async selectLocationFrom(location) {
        // select travel from location
        await this.locationFrom.fill(location);
        await this.page.getByRole('button', { name: location, exact: true }).click(); 
    }

    async selectDestination(destination){
        // select travel destination
        await this.page.getByPlaceholder('To').click();
        await this.page.getByRole('button', { name: destination }).click(); 
    }

    async clickOnOneWay(){
        // click on one way button
        await this.page.getByRole('radio', { name: 'trip One way' }).click();
    }

    async clickOnSearchBtn(){
        // select Outbound 
        await this.page.getByRole('button', { name: /Outbound/ }).click();
        // click on continue button
        await this.page.getByRole('button', { name: 'Continue' }).click();
        // select Afternoon slot
        await this.page.getByRole('button', { name: /Morning/ }).click();
        // click on Continue button
        await this.page.getByRole('button', { name: 'Continue' }).click();
        // click search button
        await this.page.getByRole('button', { name: /Search/i }).click();
    }
}

module.exports = {HomePage}