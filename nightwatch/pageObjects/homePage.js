module.exports = {
    url: 'http://localhost:4444',
    elements: {
        'logo'          :   '#logo',
        'headerlogin'    :   '#login',
        'contentlogin'    :   '#loginID',
        'learnmore'    :   '#learnID'
    },
    commands: [
        require('../shared/pageUtils')
    ]
};