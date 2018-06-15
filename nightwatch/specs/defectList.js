module.exports = {
    'verify elements of Defect List Page': function (browser) {
        var listPage = browser.page.defectlistPage();
        listPage.isPageLoaded();
    },
    'Go to Dashboard Page': function (browser) {
        var listPage = browser.page.defectlistPage();
        listPage.clickThis('headerdash');
        browser.pause(2000);        
    }
};