var User = require('../models/user');

var removeSprint = function(req){

	User.findOne({'local.email': req.query.email }, function (err, cb) {

		cb.local.sprint.pop();
		cb.save();
	});
}

module.exports.removeSprint = removeSprint;

