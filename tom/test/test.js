var BNSearch = require('./../main.js');
var RunTest = require('./RunTest.js');
var params = [
    {
        input: [[10, 20], 10],
        exp: 0
    },
    {
        input: [[], 10],
        exp: -1
    },
    {
        input: [[10, 20], 33],
        exp: -1
    }
]
RunTest(BNSearch, params );

