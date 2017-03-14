'strict';

var hours = ['8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      total = total + this.hourlySales[i];
      console.log(total);
      console.log(this.hourlySales);
    }
    this.hourlySales.push(total);
    return this.hourlySales;
  }
};

var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var firstAndPikeHourly = firstAndPike.sales();
console.log(firstAndPikeHourly);
for (var i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = firstAndPikeHourly[i];
  firstList.appendChild(firstListItem);
};
body.appendChild(firstList);

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var hourlySales = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      total = total + hourlySales[i];
      console.log(total);
      console.log(hourlySales);
    }
    hourlySales.push(total);
    return hourlySales;
  }
};

var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var seatacHourly = seatac.sales();
console.log( seatacHourly);
for (var i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = seatacHourly[i];
  firstList.appendChild(firstListItem);
};
body.appendChild(firstList);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var hourlySales = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      total = total + hourlySales[i];
      console.log(total);
      console.log(hourlySales);
    }
    hourlySales.push(total);
    return hourlySales;
  }
};

var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var seattleCenterHourly = seattleCenter.sales();
console.log(seattleCenterHourly);
for (var i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = seattleCenterHourly[i];
  firstList.appendChild(firstListItem);
};
body.appendChild(firstList);

var capHill = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var hourlySales = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      total = total + hourlySales[i];
      console.log(total);
      console.log(hourlySales);
    }
    hourlySales.push(total);
    return hourlySales;
  }
};

var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var capHillHourly = capHill.sales();
console.log(capHillHourly);
for (var i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = capHillHourly[i];
  firstList.appendChild(firstListItem);
};
body.appendChild(firstList);

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var hourlySales = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      total = total + hourlySales[i];
      console.log(total);
      console.log(hourlySales);
    }
    hourlySales.push(total);
    return hourlySales;
  }
};

var body = document.getElementsByTagName('body')[0];
var firstList = document.createElement('ul');
var alkiHourly = alki.sales();
console.log(alkiHourly);
for (var i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = alkiHourly[i];
  firstList.appendChild(firstListItem);
};
body.appendChild(firstList);
