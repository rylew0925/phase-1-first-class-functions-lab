// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Test the function
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

// Check if the original array remains unchanged
console.log(drivers);

// Extract the last two elements
const array = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwo = array.slice(-2);

// Extract and return the last two diners
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
 // Test the function
 console.log(returnLastTwoDrivers(drivers));

 // Check if the original array remains unchanged
 console.log(drivers);

 // Create selectingDrivers
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 // Testing selectingDrivers
 // Test accessing and invoking the first function
 console.log(selectingDrivers[0](drivers));
 // Test accessing and invoking the second function
 console.log(selectingDrivers[1](drivers));

 // Create createFareMultiplier
 const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
 };

 // Testing createFareMultiplier
 const fareDoubler = createFareMultiplier(2); // Test with a different multiplier like 3
 console.log(fareDoubler(10));

 // Test the function directly
 console.log(createFareMultiplier(4)(5));

 // Create fareTripler
 const fareTripler = createFareMultiplier(3);

 // Testing fareTripler
// Test if it's a function
 console.log(typeof fareTripler);

 // Test if it triples fares
 console.log(fareTripler(10));
 console.log(fareTripler(5));

 // Create selectDifferentDrivers
 const selectDifferentDrivers = function(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
 }

 // Testing selectDifferentDrivers
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

// Test with other driver arrays
const newDrivers = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(selectDifferentDrivers(newDrivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(newDrivers, returnLastTwoDrivers));
