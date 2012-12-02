var flite = require('./flite');

flite(function (err, speech) {
  console.log('Available voices:', speech.voices);

  speech.say('hello bear! how are you today?', function (err) {
    if (err) console.error('I\'m afraid I can\'t do that, Dave', err);
  });

});