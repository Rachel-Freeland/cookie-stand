'use strict';

// Create separate object literals for each shop
// Store the min / max hourly customers and the average cookies per customer in obj. properties
// Use a method of the object the object to generate a random number of customers per hour
// Calculate & store the simulated amounts of cookies purchased each hour at each location using avgCookiesPerCustomer and the randomCustomersPerHour()

//-------------------------------------------------------------------------------------Global Variables / Arrays---------------------------------------------------------------------------------------------

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// let storeList = [];
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

  // this.storeList.push;
}

//-----------------------------------------------------------------------------------------------Prototypes--------------------------------------------------------------------------------------------------

Store.prototype.setCookiesSoldPerHour = function(i) {
  return this.cookiesSoldPerHour(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer) * fluxPerHour[i]); // rounded up for fractions of cookies
};


// Store.prototype.render = render;

//-----------------------------------------------------------------------------------------------Functions---------------------------------------------------------------------------------------------------

// This random function returns a result that is no lower than the minCustomers and is less than the maxCustomers
function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}

function createTableHead() {
  const parentElem = document.getElementById('cookieSales');
  const tableElem = document.createElement('table');
  tableElem.setAttribute('width', '80%');
  parentElem.appendChild(tableElem);
  const tableCap = document.createElement('caption');
  tableCap.textContent = 'Cookie Sales';
  tableElem.appendChild(tableCap);

  const theadElem = document.createElement('thead');
  tableElem.setAttribute('id', 'tableHead');
  tableElem.appendChild(theadElem);

  const rowThead = document.createElement('tr');
  theadElem.appendChild(rowThead);

  // const th1Elem = document.createElement('th');
  // th1Elem.textContent = '';
  // rowThead.appendChild(th1Elem);


  // for(let i=0; i < storeHours.length; i++) {
  // for(let store of storeHours) {
  //   const thElem = document.createElement('th');
  //   thElem.setAttribute('scope', 'col');
  //   thElem.textContent = `${store}`;
  //   rowThead.appendChild(thElem);
  // }

  // const th2Elem = document.createElement('th');
  // th2Elem.setAttribute('scope', 'col');
  // th2Elem.textContent = 'Daily Total';
  // rowThead.appendChild(th2Elem);

  // const tbodyElem = document.createElement('tbody');
  // tbodyElem.setAttribute('id', 'tableBody');
  // tableElem.appendChild(tbodyElem);
  }

  // function createTableBody() {
  //   // Start of tbody
  //   // for (let i=0; i < storeList.length; i++) {
  //     const tbodyElem = document.getElementById('tableBody');
  //     const row1Elem = document.createElement('tr');
  //     tbodyElem.appendChild(row1Elem);

  //     const thElem = document.createElement('th');
  //     thElem.setAttribute('scope', 'row');
  //     thElem.textContent = storeList[i].store;
  //     row1Elem.appendChild(thElem);

  // //create the data cells to hold location cookie sales data

  // for(let i = 0; i < storeHours.length; i++) {
  //   const tdElem = document.createElement('td');
  //   tdElem.textContent = this.setcookiesSoldPerHour;
  //   row1Elem.appendChild(tdElem);
  //   this.totalCookiesPerDay += this.cookiesSoldPerHour;
  // }
}
//   const tdTotal = document.createElement('td');
//   tdTotal.textContent = store.totalCookiesPerDay;
// }
// }
//   // function render() {


// }

//--------------------------------------------------------------------------------------------Function Calls-------------------------------------------------------------------------------------------------
// create new stores
let seattle = new Store('Seattle', 23, 65, 6.3, storeHours);
let tokyo = new Store('Tokyo', 3, 24, 1.2, storeHours);
let dubai = new Store('Dubai', 11, 38, 3.7, storeHours);
let paris = new Store('Paris', 20, 38, 2.3, storeHours);
let lima = new Store('Lima', 2, 16, 4.6, storeHours);

createTableHead();
seattle.createTableBody;
// createTableBody(tokyo);





// tokyo.createTable();
// seattle.setCookiesSoldPerHour();
// tokyo.setCookiesSoldPerHour();
// dubai.setCookiesSoldPerHour();
// paris.setCookiesSoldPerHour();
// lima.setCookiesSoldPerHour();

// createTableHead(store);
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
// rowThead.appendChild('tdThead')
