

module.exports = {
    'verify elements of Dashboard Page': function (browser) {
        var dashPage = browser.page.dashboardPage();
        dashPage.isPageLoaded();
    }
};