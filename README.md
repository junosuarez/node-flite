# flite
binding for flite, a tiny text-to-speech synthesizer

## installation

    $ npm install flite

also requires `flite 1.4.x`([www](http://www.speech.cs.cmu.edu/flite/)) and either `aplay`([www](http://alsa.opensrc.org/Aplay)) or `afplay` (default on OS X) to be installed and in your `$PATH`.

Flite is super tiny and fast and works great on ARM (eg, robots!), and has a variety of voices available (which are compiled into the binary - you probably want to build it yourself).

## example

    var flite = require('flite')

    var message = "you know what we need? some more waffles!"

    flite(function (err, speech) {
      speech.say(message, function (err) {
        if (err) console.error('I\'m afraid I can\'t do that, Dave', err);
      });
    });

## usage

    var flite = require('flite')
    flite([config], callback)

 - config object (optional)
 - callback: function (err, speech) - initializes and returns a speech object

config is an object with any of the following keys

 - voice: string - the name of a voice
 - ssml: boolean - treat input as [ssml](http://en.wikipedia.org/wiki/Speech_Synthesis_Markup_Language)


`speech.voices // array`

  array of valid voice names to use with the `voice` configuration setting.


`speech.config(configObj)`

  set configuration settings for this instance of `speech`

`speech.say(text, [fileout], callback)`

  speak the given input string `text`. if `fileout` is specified, the wavefile will be writen to that file and not to the speakers. if `fileout` is omitted, the wavefile will be played immediately. `callback` is invoked after the wavefile is written or the sound is done playing.

## license

MIT. (c) 2012 jden - Jason Denizac <jason@denizac.org>