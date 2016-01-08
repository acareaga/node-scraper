var Xray = require("x-ray");
var fs = require("fs");
var Download = require('download');

var xray = new Xray();

xray('http://turing.io', 'img',
    [{
      img: '',
      src: '@src',
      width: '@width',
      height: '@height'
    }])
    .write('results.json');

(function(err, results){
  var download = new Download()
  results = results.filter(function(image){
    return img.width > 40;
  }).forEach(function(image){
    download.get(img.src);
  });
  download.dest('./images');
  download.run();
  fs.writeFile('./results.json', JSON.stringify(results, null, '\t'));
})
