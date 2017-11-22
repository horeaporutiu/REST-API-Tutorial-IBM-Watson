var request = require("request");
var http = require("http");
/* TODO: Add Username/Password from IBM Cloud 
Watson Language Translation Service Credentials page */
var translationUsername= "Watson Language Translation Service Username"
var translationPassword= "Watson Language Translation Service Password"
var transUrl = "https://gateway.watsonplatform.net/language-translator/api/v2/translate";

http.createServer(function(req, response){

    var data = {};

    data.source = "English";
    data.target = "Spanish";
    data.text = "Goodbye";

    request.post({
        url: transUrl,
        json: data,
        auth: {
            user: translationUsername,
            pass: translationPassword
        }
    }, function (err, response, body) {       

        console.log(body);

    });

}).listen(8081);