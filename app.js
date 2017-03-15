'strict';

var hours = ['Stores','8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'totals'];
var body = document.getElementsByTagName('body')[0];

var first = new store('1st and Pike', 23, 65, 6.3);
var seatac = new store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new store('Seattle Center', 11, 38, 3.7);
var capHill = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

function store(sname, min, max, aveCookies) {
  this.name = sname;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = aveCookies;
  this.hourlySales = [];
  this.total = 0;
  this.randomCustPerHour = function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.cookiesSold = function () {
    for (var i = 0; i < hours.length - 2; i++) {
      var cookiesPerHour = Math.ceil(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      this.total += cookiesPerHour;
    }
    this.hourlySales.push(this.total);
    console.log(this.total);
  };
  this.rows = function(){
    this.cookiesSold();
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    var tData = document.createElement('td');
    tData.innerText = this.name;
    tableRow.appendChild(tData);
    for (var i = 0; i < hours.length - 1; i++){
      var data = document.createElement('td');;
      data.innerText = this.hourlySales[i];
      tableRow.appendChild(data);
    }
  };
}

function table(){
  var table = document.createElement('table');
  body.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tableRow = document.createElement('tr');
  thead.appendChild(tableRow);
  for (var i = 0; i < hours.length; i++){
    var headRow = document.createElement('th');
    headRow.innerText = hours[i];
    tableRow.appendChild(headRow);;
  }
};
table();

first.rows();
seatac.rows();
seattleCenter.rows();
capHill.rows();
alki.rows();
