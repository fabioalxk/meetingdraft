var operationSave = require('./config/operationSave');
var operationPlus = require('./config/operationPlus');
var operationMinus = require('./config/operationMinus');
var operationShare = require('./config/operationShare');
var operationSpeech = require('./config/textToSpeech');

errorhandler = require('errorhandler'),
bluemix      = require('./config/bluemix'),
watson       = require('watson-developer-cloud'),
extend       = require('util')._extend;

// For local development, put username and password in config
// or store in your environment
var credentialsBackup = {
	url: 'https://stream.watsonplatform.net/text-to-speech/api',
	version: 'v1',
	username: 'f1b1f52d-df81-462a-9519-8b20852ce248',
	password: 'DWhFbANKPyBG',
};

var credentials = extend(credentialsBackup, bluemix.getServiceCreds('text_to_speech'));
//var credentials = credentialsBackup;

// Create the service wrappers
var textToSpeech = watson.text_to_speech(credentials);
var authorization = watson.authorization(credentials);

module.exports = function(app, passport) {

	// HOME PAGE (with login links)
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	// LOGIN
	// show the login form
	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.get('/synthesize', function(req, res) {
	  req.query.accept = "audio/wav";
	  var transcript = textToSpeech.synthesize(req.query);

	  transcript.on('response', function(response) {
	  	if (req.query.download) {
	  		response.headers['content-disposition'] = 'attachment; filename=transcript.wav';
	  	}
	  });
	  transcript.on('error', function(error) {
	  	console.log('Synthesize error: ', error)
	  });
	  transcript.pipe(res);
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// SIGNUP
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.get('/share', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('share.ejs', { });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// PROFILE SECTION
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user, // get the user out of session and pass to template
			message: 'Logged in'
		});

	});
	app.get('/texttospeech', function(req, res) {
		operationSpeech.textToSpeech(res);
	});

	app.get('/sprint', isLoggedIn, function(req, res) {
		res.send(req.user);
	});
	app.get('/save', isLoggedIn, function(req, res) {
		operationSave.updateSprint(req);

	});
	app.get('/shareOperation', function(req, res) {
		// console.log(req.query.email);
		operationShare.share(req, res);
		
	});
	app.get('/plus', isLoggedIn, function(req, res) {
		operationPlus.insertSprint(req);

	});
	app.get('/minus', isLoggedIn, function(req, res) {
		operationMinus.removeSprint(req);

	});

	// LOGOUT
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

    // route middleware to make sure
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
        	return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};

