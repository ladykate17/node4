var location = require('../models/locations.js');

var indexController = {
	index : function(req, res) {
		res.render('index', {location : location.allLocations[0]});
	},

	locationPage : function(req, res) {
		var locSlug = req.params.slug;
		var foundLoc = location.findLoc(locSlug); // this changes the name to be more URL friendly
		

		res.render('location', {location : foundLoc});
	}
};

module.exports = indexController;