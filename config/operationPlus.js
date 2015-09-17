var User = require('../models/user');

var insertSprint = function(req){

	User.findOne({'local.email': req.query.email }, function (err, cb) {

		cb.local.sprint.push('');
		cb.save();
	});
}

module.exports.insertSprint = insertSprint;

