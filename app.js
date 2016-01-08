var Xray = require("x-ray");
var xray = new Xray();

xray('http://turing.io', 'title')
    .write('results.json');
