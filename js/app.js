'use strict';

// Create separate object literals for each shop
// Store the min / max hourly customers and the average cookies per customer in obj. properties
// Use a method of the object the object to generate a random number of customers per hour
// Calculate & store the simulated amounts of cookies purchased each hour at each location using avgCookiesPerCustomer and the randomCustomersPerHour()

//-------------------------------------------------------------------------------------Global Variables / Arrays---------------------------------------------------------------------------------------------

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let storeList = [];
let fluxPerHour = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

//----------------------------------------------------------------------------------------Constructor Functions----------------------------------------------------------------------------------------------

function Store (store, minCustomers, maxCustomers, avgCookiesPerCustomer, storeHours) {
  this.store = store;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = storeHours;
  this.cookiesSoldPerHour = [];
  this.totalCookiesPerDay = 0;

  storeList.push(this.store);
}

//-----------------------------------------------------------------------------------------------Prototypes--------------------------------------------------------------------------------------------------

Store.prototype.setCookiesSoldPerHour = function(i) {
  return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer) * fluxPerHour[i]); // rounded up for fractions of cookies
};

Store.prototype.render = render;

//-----------------------------------------------------------------------------------------------Functions---------------------------------------------------------------------------------------------------

// This random function returns a result that is no lower than the minCustomers and is less than the maxCustomers
function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}

function createTableHead() {
  const parentElem = document.getElementById('cookieSales');
  const tableElem = document.createElement('table');
  const tableCap = document.createElement('caption');
  tableCap.textContent = 'Cookie Sales';
  parentElem.appendChild(tableElem);
  parentElem.appendChild(tableCap);

  const theadElem = document.createElement('thead');
  parentElem.appendChild(theadElem);

  const rowThead = document.createElement('tr');
  theadElem.appendChild(rowThead);

  const th1Elem = document.createElement('th');
  rowThead.appendChild(th1Elem);


  for(let i = 0; i < storeHours.length; i++) {
    const thElem = document.createElement('th');
    thElem.setAttribute('scope', 'col');
    thElem.textContent = storeHours[i];
    rowThead.appendChild(thElem);
  }
  const th2Elem = document.createElement('th');
  th2Elem.setAttribute('scope', 'col');
  th2Elem.textContent = 'Daily Total';
  rowThead.appendChild(th2Elem);

  // Start of tbody
  const tbodyElem = document.createElement('tbody');
  theadElem.appendChild(tbodyElem);
}

function render() {
  const tbodyElem = document.getElementsByTagName('tbody');
  const tr1Elem = document.createElement('tr');
  tbodyElem.appendChild(tr1Elem);

  //create the data cells to hold location cookie sales data
  const trElem = document.createElement('tr');
  const thElem = document.createElement('th');
  thElem.setAttribute('scope', 'row');
  thElem.textContent = this.store;
  trElem.appendChild(thElem);

  for(let i=0; i < storeHours.length-1; i++) {
    const tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesSoldPerHour[i];
    trElem.lastChild.appendChild(tdElem);
    this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
  }

  const tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;

}

//--------------------------------------------------------------------------------------------Function Calls-------------------------------------------------------------------------------------------------
createTableHead();
// create new stores
let seattle = new Store('Seattle', 23, 65, 6.3, storeHours);
let tokyo = new Store('Tokyo', 3, 24, 1.2, storeHours);
let dubai = new Store('Dubai', 11, 38, 3.7, storeHours);
let paris = new Store('Paris', 20, 38, 2.3, storeHours);
let lima = new Store('Lima', 2, 16, 4.6, storeHours);

seattle.setCookiesSoldPerHour();
tokyo.setCookiesSoldPerHour();
dubai.setCookiesSoldPerHour();
paris.setCookiesSoldPerHour();
lima.setCookiesSoldPerHour();

seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// createTableFoot();


// makeSeattleSalesDiv(seattleStore);

// makeTokyoSalesDiv(tokyoStore);
// makeDubaiSalesDiv(dubaiStore);
// makeParisSalesDiv(parisStore);
// makeLimaSalesDiv(limaStore);

// const tdThead = document.createElement('td');
// tdThead.textContent = ' ';
// rowThead.appendChild('tdThead');