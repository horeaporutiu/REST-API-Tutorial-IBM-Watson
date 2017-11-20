var request = require("request");
var http = require("http");
var translationUsername= "yourUsername"
var translationPassword= "yourPassword"
var transUrl = "https://gateway.watsonplatform.net/language-translator/api/v2/translate";
var watson = require("watson-developer-cloud");

http.createServer(function(req, response){

    var data = {};

    data.source = "English";
    data.target = "Spanish";
    data.text = "Goodbye";

    request.post({
        headers: {"content-type" : "application/json"},
        url: transUrl,
        json: data,
        auth: {
            user: translationUsername,
            pass: translationPassword
        }
    }, function (err, response, body) {
        if (err) {
            console.log(err);
        } else {
            console.log(body);
        }
    });

}).listen(8081);