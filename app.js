
var storeReplace = [];

//Creating Cookie Stand constructor method
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
	//Calling the previous method
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
    // Add total cookies to the table
    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    hour.appendChild(totalData);

		}
		// Calling the makeTable function and creating the rows
		makeTable(this.place, this.cookiesByHourList, this.cookieTotal);
}

//Hard wired stores
var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 3.6);

// Storing the event
var handleFormSubmit = function(e) {
  e.preventDefault();
	var storeLoc = document.getElementById('storeloc');
  var minCust = document.getElementById('mincustomer');
  var maxCust = document.getElementById('maxcustomer');
  var avgCust = document.getElementById('avgcustomer');

  if (!storeLoc.value || !minCust.value || !maxCust.value || !avgCust.value) {
    return alert('Boxes cannot be empty!');
   }

   else if (isNaN(minCust.value) || isNaN(maxCust.value) || isNaN(avgCust.value)) {
   	return alert('Please enter valid numbers.');
   }

   else if (storeLoc.value.length < 3) {
   	return alert('Store Location must contain more than 3 characters.');
   }

   else if (Number(minCust.value) > Number(maxCust.value)) {
   	return alert('The maximum customer number should be greater than the mininmum customer number.');
   }

   else

   //Begin debug
	 console.log('New store location is ' + storeLoc.value);
	 console.log(minCust.value + ' is less than ' + maxCust.value);
	 console.log('storeLoc (' + storeLoc.value.length + ') is greater than 3');
	 console.log(avgCust.value);
	 //End debug

	 //Adds new store location
	 var newStore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCust.value);

	 storeLoc.value = null;
	 minCust.value = null;
	 maxCust.value = null;
	 avgCust.value = null;
	 // tweetData.push(newTweet);
	 // renderAllTweets();

};


var formButton = document.getElementById("formbutton");
formButton.addEventListener('click', handleFormSubmit);
