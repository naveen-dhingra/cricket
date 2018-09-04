loginData = require('../testdata/loginData').logindetails;

module.exports = {
    'Open CriCKet Home Page': function (browser) {
        var homePage = browser.page.homePage().navigate();
        browser.pause(2000);
        homePage.isPageLoaded();
    },
    'Login to Cricket': function (browser) {
        var homePage = browser.page.homePage();
        homePage.clickThis('headerlogin');
    },
    'Enter login details': function (browser) {
        var loginPage = browser.page.loginPage();
        loginPage.fillPageDetails(
            loginData
        );
        loginPage.clickThis('submit');
        browser.pause(2000);
    },
};