var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.cookiesByHourList = [];
	this.cookieTotal = 0;
	this.opHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	};
	this.totalCookiesHour = function() {
	  var total = 0;
		total = Math.floor (this.randCustHour() * this.avgCookiesCust);
    this.cookiesByHourList.push(total);
		console.log('this.totalCookiesHour');
		return total;
	};
	this.totalCookiesDay = function() {
		var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
    dailyCookies += this.totalCookiesHour();
    };
    this.cookieTotal = dailyCookies;
    return dailyCookies;
	};
	this.totalCookiesDay();
  function makeTable(loc, array, total) {
    var storeLocation = document.getElementById('sales');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(loc));
    storeLocation.appendChild(row);

    for(var i = 0; i < array.length; i++) {
        var hour = row;
        var data = document.createElement('td');
        data.appendChild(document.createTextNode(array[i]));
        hour.appendChild(data);
    };

    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    hour.appendChild(totalData);

	}
		makeTable(this.place, this.cookiesByHourList, this.cookieTotal)
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 3.6);

var formButton = document.getElementById('salesform');

var formData =[];

// // var renderAllValues = function() {
// //   locationName.innerHTML = '';
// //   formData.forEach(function(show) {
// //     tweets.appendChild(show.render());
// //   });
// // };

var handleFormSubmit = function(event) {
  event.preventDefault();

   if (!event.target.locationname.value) {
    return alert('Boxes cannot be empty!');
   }

	 //creating a new instance... hint hint hint
	 var newForm = new form(event.target.locationname.value, event.target.blabbering.value);

	 console.log(event.target.locationname.value); // SUPER IMPORTANT
	 console.log(event.target.blabbering.value); //SUPER IMPORTANT
	 event.target.locationame.value = null;
	 event.target.blabbering.value = null;
	 tweetData.push(newTweet);
	 renderAllTweets();
	};

formButton.addEventListener('click', handleFormSubmit);

// var placeNames = [pikePlace, seaTac, southCenter, bellevueSquare, alki];

// for (var i = 0; i < placeNames.length; i++) {
// 	placeNames[i].makeTable();


// var tablestore = document.getElementById(palce);
// varitemstore = document.createElement('td');
// tablestore.appendchild(document.createTextNode(place));
