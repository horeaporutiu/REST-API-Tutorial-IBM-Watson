var request = require("request");
/* TODO: Add Username/Password from IBM Cloud 
Watson Tone Analyzer Service Credentials page */
var toneUsername= "Watson Tone Analyzer Service Username";
var tonePassword= "Watson Tone Analyzer Service Username";
var toneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";

    var data = {};
    data.text = "I can't wait to see you :)";

    request.post({
        url: toneUrl,
        json: data,
        auth: {
            user: toneUsername,
            pass: tonePassword
        }
    
    }, function (err, response, body){
        console.log(body);

        console.log(body.document_tone.tones[0].tone_name +
        ", Score: " + body.document_tone.tones[0].score);
    });

