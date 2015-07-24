var allLocations = []

var voyageStop = function(name, img, nextLoc, id){
	this.name     = name;
	this.slug 	  = name.trim().toLowerCase().replace(/ /g, '-');
	this.img 	  = img
	this.nextLoc  = nextLoc;
	this.nextSlug = nextLoc.trim().toLowerCase().replace(/ /g, '-');
	allLocations.push(this); // this pushes the newStop to the allLocations array
}

new voyageStop('Seville', 'http://www.spainthenandnow.com/userimages/Seville%20in%2016th%20C%20Sanchez%20Coello%20Wikimedia.jpg', 'Canary Islands');
new voyageStop('Canary Islands', 'http://www.acadian-cajun.com/canary1758.jpg', 'Cape Verde');
new voyageStop('Cape Verde', 'http://www.columbia.edu/itc/mealac/pritchett/00maplinks/mughal/bertiusmaps/xcapeverde.jpg', 'Strait of Magellan');
new voyageStop('Strait of Magellan', 'http://www.history.com/news/history-lists/files/2012/11/magellan-death.jpg', 'Guam');
new voyageStop('Guam', 'http://www.mainlesson.com/books/haaren/modern/zpage107.gif', 'Philippines');
new voyageStop('Philippines', 'http://www.landofthebrave.info/images/megellan-ships.jpg', '')

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