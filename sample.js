var flite = require('./flite');

flite(function (err, speech) {
  if (err) { return console.error(err) }
  console.log('Available voices:', speech.voices);

  speech.say('hello bear! how are you today?', function (err) {
    if (err) { console.error(err) }
  });

});
