'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');
var myFile;

var textToSpeech = function(res){
	var text_to_speech = watson.text_to_speech({
		username: 'f1b1f52d-df81-462a-9519-8b20852ce248',
		password: 'DWhFbANKPyBG',
		version: 'v1',
		url: 'https://stream.watsonplatform.net/text-to-speech/api'
	});

	var params = {
		text: 'just messing around',
	  	voice: 'en-US_MichaelVoice', // Optional voice
	  	accept: 'audio/wav'
	};

	// Pipe the synthesized text to a file
	text_to_speech.synthesize(params).pipe(fs.createWriteStream('output2.wav'));

}

module.exports.textToSpeech = textToSpeech;

