const {expect} = require('@playwright/test');

class BookingPage{
    constructor(page){
        this.page = page;
        this.poFerry = page.locator("#search-results--trip-0-trip-7");
        this.dfdsFerry = page.locator("#search-results--trip-0-trip-1");
    }

    async selectPOFerry(){
        await expect(this.page).toHaveURL(/.*booking.*/, {timeout : 5000});
        await this.poFerry.locator('span', { hasText: 'Select' }).click(); // click to select Ferry provider
    }

    async selectDFDSFerry(){
        await this.dfdsFerry.locator('span', { hasText: 'Select'}).click(); // click to select Ferry provider
    }
}

module.exports = {BookingPage};