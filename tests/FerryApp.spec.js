const {test} = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager'); 
const testData = require('../data.json');


test('Select travel from location and destination with P&O ferry', async ({page}) => {
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const bookingPage = poManager.getBookingPage();
    const ticketPage = poManager.getTicketPage();


    await homePage.goTo();
    await homePage.selectLocationFrom(testData.providers.PO.locationFrom);
    await homePage.selectDestination(testData.providers.PO.destinationLocation);
    await homePage.clickOnTravelBtn();
    await bookingPage.selectPOFerry();
    await ticketPage.validateFerryProviderName(testData.providers.PO.validateProvider);
})

test('Select travel from location and destination with DFDS Seaways ferry', async ({page}) => {
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const bookingPage = poManager.getBookingPage();
    const ticketPage = poManager.getTicketPage();


    await homePage.goTo();
    await homePage.selectLocationFrom(testData.providers.DFDS.locationFrom);
    await homePage.selectDestination(testData.providers.DFDS.destinationLocation);
    await homePage.clickOnTravelBtn();
    await bookingPage.selectDFDSFerry();
    await ticketPage.validateFerryProviderName(testData.providers.DFDS.validateProvider);
})