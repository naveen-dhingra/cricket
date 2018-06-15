module.exports = {
    before : function(browser) {
        browser.maximizeWindow();
    },
    after : function(browser) {
        browser.end();
    }
};