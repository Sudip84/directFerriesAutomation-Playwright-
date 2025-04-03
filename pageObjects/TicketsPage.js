const {expect} = require('@playwright/test');

class TicketsPage{
    constructor(page){
        this.page = page;
        this.ferry = page.locator("#search-results--trip-0-trip-2");
        this.ferryProvider = page.locator(".o80jdp0");
    }

    async validateFerryProviderName(expectedProivder){
        // validate Ferry Provider 
        await this.page.locator("span", {hasText : "View more"}).click();
        const actualFerryProvider = await this.ferryProvider.textContent();
        expect(actualFerryProvider).toEqual(expectedProivder);
    }
}

module.exports = {TicketsPage};