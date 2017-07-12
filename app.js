var request = require('request');
var cheerio = require('cheerio');
var url = 'http://escapepod.org';

request(url, function(err, resp, body) {
    $ = cheerio.load(body);
    lists = $('#archives-dropdown-3 option');
    $(lists).splice(0, 1);
    var item1 = $(lists)[1];
    //$(lists).each(function (i, element) {
    $(item1).each(function (i, element) {
        console.log($(element).text().split(/\s+/).slice(1, 3).join(" ") + ' -> ' + $(element).attr('value'))
        request($(element).attr('value'), function(err, resp, body) {
            $ = cheerio.load(body);
            posts = $('.post');
            $(posts).each(function (i, post) {
                console.log($(post).text());
            });
            //console.log(body);
        });
    });
});

/*
const http = require('http');
const { StringDecoder } = require('string_decoder');
var cherrio = require('cheerio');
var jsdom = require("node-jsdom");

jsdom.env(
    "http://escapepod.org",
    ["http://code.jquery.com/jquery.js"],
    function(errors, window) {

        console.log(window.$("a").length)
    }
);
*/

/*
var options = {
    host: 'escapepod.org',
    port: 80,
    path: '/'
};

http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    var decoder = new StringDecoder('utf8');
    res.on('data', function(chunk) {
        console.log("1");
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
*/
