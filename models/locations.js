var allLocations = []

var voyageStop = function(name, nextLoc, id){
	this.name     = name;
	this.slug 	  = name.trim().toLowerCase().replace(/ /g, '-');
	this.nextLoc  = nextLoc;
	this.nextSlug = nextLoc.trim().toLowerCase().replace(/ /g, '-');
	allLocations.push(this); // this pushes the newStop to the allLocations array
}

new voyageStop('Seville', 'Canary Islands');
new voyageStop('Canary Islands', 'Cape Verde');
new voyageStop('Cape Verde', 'Strait of Magellan');
new voyageStop('Strait of Magellan', 'Guam');
new voyageStop('Guam', 'Philippines');
new voyageStop('Philippines', '')

var findLoc = function(slug){

	return allLocations.filter(function(element){
		return element.slug === slug;
	})[0]

}

module.exports = {
	allLocations : allLocations,
	voyageStop : voyageStop,
	findLoc : findLoc
} 