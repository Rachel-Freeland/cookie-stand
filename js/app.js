'use strict';

// Create separate object literals for each shop
// Store the min / max hourly customers and the average cookies per customer in obj. properties

function randomCustomersPerHour(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const seattleStore = {
  store: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: 0,
  setCustomersPerHour: function() {
    console.log(this.customersPerHour);
    this.customersPerHour = this.randomCumstomersPerHour(this.minCustomers, this.maxCustomers);
    console.log(this.customersPerHour);
  }
};

const tokyoStore = {
  store: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
};

const dubaiStore = {
  store: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
};

const parisStore = {
  store: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
};

const limaStore = {
  store: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
};







console.log(seattleStore);
console.log(tokyoStore);
console.log(dubaiStore);
console.log(parisStore);
console.log(limaStore);
