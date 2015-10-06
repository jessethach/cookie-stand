
var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust, id) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.id = id;
	this.cookiesByHourList = [];
	this.opHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	};

	this.totalCookiesHour = function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
	};

	this.totalCookiesDay = function() {
		this.dailyCookies = 0;
		for(var i = 0; i < this.opHours.length; i++) {
			this.cookiesByHourList.push(this.totalCookiesHour());
			this.dailyCookies = this.dailyCookies + this.cookiesByHourList[i];
		};

	  return this.dailyCookies;
	};

	this.makeUL = function(id) {
		console.log("Hello");
		for(var i = 0; i < this.opHours.length; i++) {
	        var locationList = document.getElementById(id);
	        var item = document.createElement('li');
	        item.appendChild(document.createTextNode (this.opHours[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
	        locationList.appendChild(item);
	        console.log("This is where we are appending the opHours array with randomly generated numbers");
		}
	};
		this.makeUL(this.id);
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pike');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'seatac');
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'south');
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, 'belle');
var alki = new CookieStand('Alki Beach', 3, 24, 3.6, 'alki');
