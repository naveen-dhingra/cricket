defectData = require('../testdata/defectData').defectdetails;

module.exports = {
    'Verify Defect Page Elements': function (browser) {
        var defectPage = browser.page.createdefectPage();
        defectPage.isPageLoaded();
    },
    'Enter defect details on Defect Page': function (browser) {
        var defectPage = browser.page.createdefectPage();
        defectPage.fillPageDetails(
            defectData
        );
        defectPage.clickThis('submit');
        browser.pause(2000);
    },
    'Go to Defect List page': function (browser) {
        var defectPage = browser.page.createdefectPage();
        defectPage.clickThis('headerlist');
        browser.pause(2000);
    }
};