module.exports = {
    url: 'http://localhost:8080',
    elements: {
        'logo'          :   '#logo',
        'headerdash'    :   '#dashboard',
        'headerdefect'    :   '#defectid',
        'headerlist'    :   '#resultsid',
        'piechart'    :   '#chart_div',
        'barchart'    :   '#barchart'
    },
    commands: [
        require('../shared/pageUtils')
    ]
};