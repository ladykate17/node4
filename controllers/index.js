var location = require('../models/locations.js');

var indexController = {
	index : function(req, res) {
		res.render('index', {location : location.allLocations[0]});
	},

	locationPage : function(req, res) {
		var locSlug = req.params.slug;
		
		var foundLoc = location.findLoc(locSlug); 
		
		// counter++
		res.render('location', {location : location.allLocations[0]});
	}
};

module.exports = indexController;