// load up the user model
var User = require('../models/user');

var updateSprint = function(req){


	User.findOne({'local.email': req.query.email }, function (err, cb) {

		cb.local.sprint[req.query.anchor] = req.query.textarea;
		cb.markModified('local.sprint');
		cb.save();
	});
}

module.exports.updateSprint = updateSprint;


