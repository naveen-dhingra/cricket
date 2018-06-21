
module.exports = {
    'Open CriCKet Home Page': function (browser) {
        var homePage = browser.page.homePage().navigate();
        homePage.isPageLoaded();
    },
    'Go to Create Defect Page': function (browser) {
        var homePage = browser.page.homePage();
        homePage.clickThis('headerdefect');
    }
};