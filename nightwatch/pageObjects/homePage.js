module.exports = {
    url: 'http://localhost:8080',
    elements: {
        'logo'          :   '#logo',
        'headerdash'    :   '#dashboard',
        'headerdefect'    :   '#defectid',
        'headerlist'    :   '#resultsid',
        'learnmore'    :   '#learnID'
    },
    commands: [
        require('../shared/pageUtils')
    ]
};