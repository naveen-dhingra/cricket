module.exports = {
    isPageLoaded : function() {
        for (var x in this.elements) {
            if (this.elements.hasOwnProperty(x)) {
                this.expect.element('@' + x).to.be.present.before(3000);
                this.expect.element('@' + x).to.be.visible.before(3000);
            }
        }
    },
    isElementVisible : function(locator) {
        this.expect.element('@' + locator).to.be.present.before(3000);
        this.expect.element('@' + locator).to.be.visible.before(3000);
    },
    fillPageDetails: function (data) {
        for (var y in data) {
            this.clearValue('@' + y).setValue('@' + y, data[y]);
        }
    },
    clickThis : function(element) {
        this.click('@' + element);
    },
    enterData : function(element,data) {
        this.setValue('@' + element, data);
    },
    reloadWait : function(browser) {
        browser.pause(2000);
    }
};