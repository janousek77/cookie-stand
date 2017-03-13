'strict';

var hours = ['8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  sales: function() {
    var total = 0;
    for (var i = 0; i <= hours.length - 1; i++) {
    totalSales.push(Math.ceil(Math.floor(Math.random() * (maxCust - minCust)) + minCust * (avgCookies)));
    total = total + hours[i];
    hours[i+1] = total
    }
  sales.push(total);
  }
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalSales: Math.floor(Math.random() * (maxCust - minCust)) + minCust * (avgCookies),
  cookieSales: function(){
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalSales: Math.floor(Math.random() * (maxCust - minCust)) + minCust * (avgCookies),
  cookieSales: function(){
  }
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalSales: Math.floor(Math.random() * (maxCust - minCust)) + minCust * (avgCookies),
  cookieSales: function(){
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookieSales: function(){
  }
};

  // do some operationas
  hours[i] = totalSales
}
