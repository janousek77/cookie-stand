'strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalSales: Math.floor(Math.random() * (maxCust - minCust)) + minCust,
  cookieSales: function(){
    return totalSales * avgCookies
  }
  console.log(return;)
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalSales: Math.floor(Math.random() * 12) + 1,
  cookieSales: function(){
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalSales: Math.floor(Math.random() * 12) + 1,
  cookieSales: function(){
  }
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalSales: Math.floor(Math.random() * 12) + 1,
  cookieSales: function(){
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalSales: Math.floor(Math.random() * 12) + 1,
  cookieSales: function(){
  }
};

var hours = ['8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
for (var i = 0; i < hours.length; i++) {
  // do some operationas
  // this operation should push new cookie sales for every hour
}
