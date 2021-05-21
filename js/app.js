'use strict';

// Create separate object literals for each shop
// Store the min / max hourly customers and the average cookies per customer in obj. properties
// Use a method of the object the object to generate a random number of customers per hour
// Calculate & store the simulated amounts of cookies purchased each hour at each location using avgCookiesPerCustomer and the randomCustomersPerHour()

let storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function Store (store, minCustomers, maxCustomers, avgCookiesPerCustomer, storeHours) {
  this.store = store;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = storeHours;
  this.cookiesSoldPerHour = [];
  this.totalCookiesPerDay = 0;
}

Store.prototype.setCookiesSoldPerHour = function() {
  return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
};


// const seattleStore = {
//   store: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerCustomer: 6.3,
//   storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
//   cookiesSoldPerHour: [], // Results of cookie sales for the store, stored as a property of the store
//   totalCookiesPerDay: 0,
//   setCookiesSoldPerHour: function() {
//     return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
//   }
// };


// create new stores
let seattleStore = new Store('Seattle', 23, 65, 6.3, storeHours);
console.log(seattleStore);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2, storeHours);
let dubaiStore = new Store('Dubai', 11, 38, 3.7, storeHours);
let parisStore = new Store('Parie', 20, 38, 2.3, storeHours);
let limaStore = new Store('Lima', 2, 16, 4.6, storeHours);

// Build out the sales.html page

// Build out the Seattle store sales
const seattleDivElem = document.getElementById('seattleSales');

function makeSeattleSalesDiv(seattleStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  seattleDivElem.appendChild(h2Elem);
  h2Elem.textContent = seattleStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  seattleDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < seattleStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    seattleDivElem.lastChild.appendChild(liElem);
    seattleStore.setCookiesSoldPerHour();
    liElem.textContent = `${seattleStore.storeHours[i]} ${seattleStore.cookiesSoldPerHour[i]}`;
    seattleStore.totalCookiesPerDay += seattleStore.cookiesSoldPerHour[i];
    if (i === seattleStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      seattleDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${seattleStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Tokyo store sales
const tokyoDivElem = document.getElementById('tokyoSales');

function makeTokyoSalesDiv(tokyoStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  tokyoDivElem.appendChild(h2Elem);
  h2Elem.textContent = tokyoStore.store;

  // Create the ul tag and attach to the div element
  const uLElem = document.createElement('ul');
  tokyoDivElem.appendChild(uLElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < tokyoStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    tokyoDivElem.lastChild.appendChild(liElem);
    tokyoStore.setCookiesSoldPerHour();
    liElem.textContent = `${tokyoStore.storeHours[i]}  ${tokyoStore.cookiesSoldPerHour[i]}`;
    tokyoStore.totalCookiesPerDay += tokyoStore.cookiesSoldPerHour[i];
    if (i === tokyoStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      tokyoDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${tokyoStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Dubai store sales
const dubaiDivElem = document.getElementById('dubaiSales');

function makeDubaiSalesDiv(dubaiStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  dubaiDivElem.appendChild(h2Elem);
  h2Elem.textContent = dubaiStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  dubaiDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < dubaiStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    dubaiDivElem.lastChild.appendChild(liElem);
    dubaiStore.setCookiesSoldPerHour();
    liElem.textContent = `${dubaiStore.storeHours[i]} ${dubaiStore.cookiesSoldPerHour[i]}`;
    dubaiStore.totalCookiesPerDay += dubaiStore.cookiesSoldPerHour[i];
    if (i === dubaiStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      dubaiDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${dubaiStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Paris store sales
const parisDivElem = document.getElementById('parisSales');

function makeParisSalesDiv(parisStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  parisDivElem.appendChild(h2Elem);
  h2Elem.textContent = parisStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  parisDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < parisStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    parisDivElem.lastChild.appendChild(liElem);
    parisStore.setCookiesSoldPerHour();
    liElem.textContent = `${parisStore.storeHours[i]} ${parisStore.cookiesSoldPerHour[i]}`;
    parisStore.totalCookiesPerDay += parisStore.cookiesSoldPerHour[i];
    if (i === parisStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      parisDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${dubaiStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Lima store sales
const limaDivElem = document.getElementById('limaSales');

function makeLimaSalesDiv(limaStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  limaDivElem.appendChild(h2Elem);
  h2Elem.textContent = limaStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  limaDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < parisStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    limaDivElem.lastChild.appendChild(liElem);
    limaStore.setCookiesSoldPerHour();
    liElem.textContent = `${limaStore.storeHours[i]} ${limaStore.cookiesSoldPerHour[i]}`;
    limaStore.totalCookiesPerDay += limaStore.cookiesSoldPerHour[i];
    if (i === limaStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      limaDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${limaStore.totalCookiesPerDay}`;
    }
  }
}



// This random function returns a result that is no lower than the minCustomers and is less than the maxCustomers
function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
};

makeSeattleSalesDiv(seattleStore);
makeTokyoSalesDiv(tokyoStore);
makeDubaiSalesDiv(dubaiStore);
makeParisSalesDiv(parisStore);
makeLimaSalesDiv(limaStore);
