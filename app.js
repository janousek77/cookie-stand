'strict';

var hours = ['Stores','8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];
var body = document.getElementsByTagName('body')[0];
var allStores = [];

var first = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function Store(name, min, max, aveCookies) {
  this.name = name;
  this.minCust = parseInt(min);
  this.maxCust = parseInt(max);
  this.avgCookies = parseInt(aveCookies);
  this.hourlySales = [];
  this.total = 0;
  this.randomCustPerHour = function (){
    var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    console.log(num);
    return num;
  };
  this.cookiesSold = function () {
    for (var i = 0; i < hours.length - 2; i++) {
      var cookiesPerHour = Math.ceil(this.avgCookies * this.randomCustPerHour());
      this.hourlySales.push(cookiesPerHour);
      this.total += cookiesPerHour;
    }
    this.hourlySales.push(this.total);
  };
  this.rows = function(){
    this.cookiesSold();
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.getElementsByTagName('tbody')[0];
    var tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    var tdName = document.createElement('td');
    tdName.innerText = this.name;
    tableRow.appendChild(tdName);
    for (var i = 0; i < hours.length - 1; i++){
      var data = document.createElement('td');
      data.innerText = this.hourlySales[i];
      tableRow.appendChild(data);
    }
  };
  allStores.push(this);
}

function table(){
  var table = document.createElement('table');
  body.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  var tableRow = document.createElement('tr');
  thead.appendChild(tableRow);
  for (var i = 0; i < hours.length; i++){
    var headRow = document.createElement('th');
    headRow.innerText = hours[i];
    tableRow.appendChild(headRow);;
  }
};
table();

for (var i = 0; i < allStores.length; i++){
  allStores[i].rows();
}

var form = document.getElementById('the-form');
function formElementSubmit(event) {
  event.preventDefault();
  var theFormItself = event.target;
  var storeName = event.target.storeName.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var averageCookies = event.target.averageCookies.value;
  if (minCustomer > maxCustomer) {
    alert('You\'re minumum is heigher than your max. Wut? Try again');
  } else {
    var newStore = new Store(storeName, minCustomer, maxCustomer, averageCookies);
    console.log(newStore);
    newStore.rows();

    form.reset();
  }
};
form.addEventListener('submit', formElementSubmit);
// var inputs = document.getElementsByClassName('inputs');elements['
// var inputData = Array.prototype.slice.call(inputs);
// var storeInputs = [];
// console.log(newStore);']
// for (var i = 0; i < inputs.length; i++){
//   var data = inputData[i].value;
//   console.log(data);
//   storeInputs.push(this);
// }
