// scrape_infogo.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = 'infogo.html';

page.open('http://www.infogo.gov.on.ca/infogo', function (status) {
  var content = page.content;
  fs.write(path,content,'w');
  phantom.exit();
});