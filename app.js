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
    }
    this.hourlySales.push(total);
  }
};

var body = document.getElementsByTagName('body');
var firstList = document.createElement('ul');
for (i = 0; i < hours.length; i++){
  var firstListItem = document.createElement('li');
  firstListItem.textContent = firstAndPike.hourlySales[i];
  firstList.appendChild(firstListItem);
  console.log(ul);
};
firstList.appendChild(body);

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      console.log(this.hourlySales);
      total = total + this.hourlySales[i];
      console.log(total);
    }
    this.hourlySales.push(total);
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      console.log(this.hourlySales);
      total = total + this.hourlySales[i];
      console.log(total);
    }
    this.hourlySales.push(total);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  sales: function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randomCustPerHour() * this.avgCookies));
      console.log(this.hourlySales);
      total = total + this.hourlySales[i];
      console.log(total);
    }
    this.hourlySales.push(total);
  }
};
