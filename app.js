'strict';

var body = document.getElementsByTagName('body')[0];
var hours = ['8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' , 'total'];
var first = new store('1st and Pike', 23, 65, 6.3);
var seatac = new store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capHill = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

function store(name, minCust, maxCust, avgCookies, hourlySales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.function randomCustPerHour(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.function cookiesSold() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  };
  this.function createListItems(){
    this.cookiesSold();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var firstUl = document.createElement('ul');
    body.appendChild(firstUl);
    for(i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.innerText = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
};

first.createListItems();
