'use strict';

// Create an array for store hours
const storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

// Create an array to hold store locations
const storeLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];



// Create separate object literals for each shop

const seattleStore = {
  store: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgCustHour: [],
  setAvgCustomer: function() {
    this.avgCustHour = randomCustomerPerHour(23, 65);
  }
};

function randomCustomerPerHour(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}



console.log(seattleStore.avgCustomerHour);
