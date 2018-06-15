module.exports = {
    url: '',
    elements: {
        'logo'          :   '#logo',
        'headerdash'    :   '#dashboard',
        'headerdefect'    :   '#defectid',
        'headerlist'    :   '#resultsid',
        'summary'    :   '#summaryID',
        'severity'    :   '#severityID',
        'assignedto'    :   '#assignID',
        'status'    :   '#statusID',
        'description'    :   '#descID',
        'submit'    :   '#submitID'
    },
    commands: [
        require('../shared/pageUtils')
    ]
};