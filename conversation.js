var prompt = require('prompt-sync')();
var watson = require('watson-developer-cloud');
//workspace for tennis Servr
var workspace = 'be7a0f63-f34a-4b95-acda-f2fc61989fb1';

var conversation = watson.conversation({
  username: '3be6a6cf-f602-4cbb-9319-54d0bb0b840e',
  password: 'nd3cb8HMzN6u',
  version: 'v1',
  version_date: '2017-05-26'
});

conversation.message({
  workspace_id: workspace,
  input: {'text': ''}
}, processUserInput);

function processUserInput(err, response) {
  if (err) {
    console.log(err);
    return;
  }
  if (response.intents.length > 0 ) {
    console.log('Intent: ');
    console.log(response.intents[0]);
  }
  if (response.output.text.length > 0) {
    console.log(response.output.text[0]);
  }

  var newMessage = prompt('enter response: ');
  if (newMessage === 'stop') {
    return;
  }

  conversation.message({
    workspace_id: workspace,
    input: {text: newMessage},
    context: response.context,
  }, processUserInput);

}
