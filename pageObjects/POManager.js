const { BookingPage } = require("./BookingPage");
const { HomePage } = require("./HomePage");
const { TicketsPage } = require("./TicketsPage");



class POManager {
    constructor(page){
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.bookingPage = new BookingPage(this.page);
        this.ticketPage = new TicketsPage(this.page);
    }

    getHomePage(){
        return this.homePage;
    }

    getBookingPage(){
        return this.bookingPage;
    }

    getTicketPage(){
        return this.ticketPage;
    }
}

module.exports = {POManager};