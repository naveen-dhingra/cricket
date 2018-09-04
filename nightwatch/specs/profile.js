

module.exports = {
    'verify elements of Profile Page': function (browser) {
        var profilePage = browser.page.profilePage();
        profilePage.isPageLoaded();
    },
    'Go to Create Defect page': function (browser) {
        var profilePage = browser.page.profilePage();
        profilePage.clickThis('headerdefect');
        browser.pause(2000);
    }
};