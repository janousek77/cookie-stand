'strict';

var body = document.getElementsByTagName('body')[0];
var hours = ['8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' , 'total'];

var first = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  name: '1st and Pike',
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function (){
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

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],
  name: 'Seatac Airport',
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function (){
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

seatac.createListItems();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],
  name: 'Seattle Center',
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function (){
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

seattleCenter.createListItems();

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlySales: [],
  name: 'Capitol Hill',
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function (){
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

capHill.createListItems();

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],
  name: 'Alki',
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function (){
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

alki.createListItems();
