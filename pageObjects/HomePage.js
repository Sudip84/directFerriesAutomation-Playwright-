const {expect} = require("@playwright/test");
class HomePage {

    constructor(page, expect) {
        this.page = page;
        this.cookieWin = page.locator("button[data-cky-tag='accept-button']");
        this.locationFrom = page.locator("input[placeholder='From']");
        this.locationList = page.locator("ul.css-0");
        this.selectLocation = page.locator("li span");
        this.destinationLocation = page.locator("input[title='Choose your destination']");
        this.travelButton = page.locator("button.css-1p3u68d");
    }

    async goTo() {
        await this.page.goto('https://openferry.com/');
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        // click to select cookies option 
        await this.cookieWin.click();
        await this.page.waitForTimeout(100);
        const title = await this.page.title();
        expect(title).toContain("Ferry Tickets");
    }

    async selectLocationFrom(location) {
        await this.locationFrom.fill(location);
        await this.page.waitForTimeout(500);
        const locations = this.locationList;
        await locations.waitFor({ state: 'visible', timeout: 10000 });
        const locationFrom = await locations.locator(this.selectLocation).filter({ hasText: location })
        await locationFrom.first().click();
    }

    async selectDestination(destination){
        await this.page.waitForTimeout(500);
        await this.destinationLocation.pressSequentially(destination);
        const locations = this.locationList;
        const destinationLocation = locations.locator(this.selectLocation).filter({hasText : destination})
        await destinationLocation.first().click();
    }

    async clickOnTravelBtn(){
        await this.page.waitForTimeout(500);
        await this.travelButton.click();
    }
}

module.exports = {HomePage}