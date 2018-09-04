module.exports = {
    url: 'http://localhost:4444',
    elements: {
        'logo'          :   '#logo',
        'headerdash'    :   '#dashboard',
        'headerdefect'    :   '#defectid',
        'headerlist'    :   '#resultsid'
    },
    commands: [
        require('../shared/pageUtils')
    ]
};