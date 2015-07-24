var location = require('../models/locations.js');

var indexController = {
	index : function(req, res) {
		res.render('index', {location : location.allLocations[0]});
	},

	locationPage : function(req, res) {
		var locSlug = req.params.slug;

		var foundLoc = location.findLoc(locSlug); 

		if (locSlug === 'philippines') {
			
			res.render('last', {location : foundLoc});
			
		} else if ( foundLoc === undefined ) {

			res.render('unknown', {location : foundLoc});

		} else {

			res.render('location', {location : foundLoc});

		}
		
	}

};

module.exports = indexController;