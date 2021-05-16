'use strict';

// Create separate object literals for each shop
// Store the min / max hourly customers and the average cookies per customer in obj. properties
// Use a method of the object the object to generate a random number of customers per hour
// Calculate & store the simulated amounts of cookies purchased each hour at each location using avgCookiesPerCustomer and the randomCustomersPerHour()


const seattleStore = {
  store: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  cookiesSoldPerHour: [], // Results of cookie sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};

for (let i = 0; i < seattleStore.storeHours.length; i++) {
  seattleStore.setCookiesSoldPerHour();
  seattleStore.totalCookiesPerDay += seattleStore.cookiesSoldPerHour[i];
  console.log(seattleStore.totalCookiesPerDay, seattleStore.cookiesSoldPerHour);
}

const tokyoStore = {
  store: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerCustomer: 1.2,
  storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
};

const dubaiStore = {
  store: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerCustomer: 3.7,
  storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
};

const parisStore = {
  store: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPerCustomer: 2.3,
  storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
};

const limaStore = {
  store: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPerCustomer: 4.6,
  storeHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
};

// This random function returns a result that is no lower than the minCustomers and is less than the maxCustomers
function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}

// let totalCookiesPerDay = 0;
// for (let i = 0, i < storeHours.length, i++) {
//   setCookiesSoldPerHour();
//   totalCookiesPerDay += cookiesSoldPerHour[i];
//   console.log(totalCookiesPerDay, cookiesSoldPerHour);
// }


console.log(seattleStore);
console.log(tokyoStore);
console.log(dubaiStore);
console.log(parisStore);
console.log(limaStore);
