// load up the user model
var User = require('../models/user');

var share = function(req, res){


	User.findOne({'local.email': req.query.email }, function (err, cb) {

		res.send(cb);
	});

}

module.exports.share = share;


