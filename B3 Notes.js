// Functions as parameters

// Create a function that calculates 10% tax
function calculateTax(amount) {
  return amount * 0.10;
}

// Create a function that takes in an order amount calculates total
// including tax
function calculateTotal(amount) {
  return amount + calculateTax(amount);
}

var orderTotal = calculateTotal(10.00);
console.log(orderTotal);

// Create a function that calculates 7% tax for Utah
function calculateUtahTax(amount) {
  return amount * 0.07;
}

// Update calculateTotal to include a state parameter use
// the new utah calculator when the state is Utah
calculateTotal = function (amount, state) {
  if (state === 'Utah') {
    return amount + calculateUtahTax(amount);
  } else {
    return amount + calculateTax(amount);
  }
};

orderTotal = calculateTotal(20, 'Utah');
console.log(orderTotal);

// Q: What are some potential problems with this method?
// Q: What if tax calculation for Utah is based on county?
// Q: What if we need to calculate for other states?

// Update the calculateTotal to accept a function
// as a parameter that can calculate tax
calculateTotal = function (amount, taxCalculator) {
  return amount + taxCalculator(amount);
};


// Invoke calculateTotal with both calculateTax functions
orderTotal = calculateTotal(30, calculateUtahTax);
console.log(orderTotal);

// Q: What is better about this approach?


// Create a another function called GetTaxCalculator
// that takes state as a parameter and returns the
// correct tax calculator
function GetTaxCalculator() {
  
}

// Q: If we add new tax calculators, what code will need to be updated?

// Using functions as arguments to other functions is one way we can
// get results from an asynchronous function.

// Asynchronous & functions as callbacks

// Create a function called done, that writes done to the console
function done() {
  console.log('done');
}

// Use setTimeout and pass the done function as the callback
setTimeout(done, 2000);

console.log('after setTimeout');

// Q: Why does 'after setTimeout' display before 'done'?


// Create a function called getColors that uses setTimeout to simulate
// an asynchronous call to a web server that returns an array of colors
var getColors = function () {
  setTimeout(function () {
    //console.log('Returning colors...');
    return ['Red','Blue','Purple','Black'];
  },500);
};


// Q: What will the value of colors be? Why?
var colors = getColors();
console.log('Colors: ' + colors);

// Update getColors to solve the problem by using a callback
getColors = function (displayColors) {

  setTimeout(function () {
     displayColors(['Red','Blue','Purple','Black']);   
  },500); 

};
// Invoke getColors again using the callback
var displayColors = function (colors) {
  console.log(colors);
};

getColors(displayColors);
console.log('after getColors');


// Q: What challenges does asynchronous code create? How does it affect
// code readability?
// Q: What advantages does it provide?

// Create a function called forEach that takes an array as the first parameter, and a function as the second parameter.  The forEach function should loop over the items in the array and invoke the callback function, passing in each item in the array
var forEach = function (items, callback) {
  for (var i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

// Create an array of colors
var colors = ['Red', 'Blue', 'Purple', 'Pink'];

// use forEach to loop over the array of colors.  Pass a callback
// to forEach that receives a color as a parameter and outputs the
// name of the color to the console.
forEach(colors, function (color) {
  return color;
});

// Now create an order object that has a total property, and a property called items that is an array containing item prices. Add a method called updateTotal that uses the forEach function to loop over the items and update the total property
var order = {
  total: 0,
  items: [1.99,2.50,9.99],
  updateTotal: function () {
    this.total = 0;
    
    forEach(this.items, function (item) {
      this.total += item;
    });
  }
};



// Invoke the updateTotal method and display the order total
order.updateTotal();
console.log(order.total);






// Q: Why is the total zero?


// Change the updateTotal method to solve the problem using 'self'
order.updateTotal = function () {
  this.total = 0;
  
  var self = this;
  forEach(this.items, function (item) {
    self.total += item;
  }); 
};

order.updateTotal();
console.log("Total using 'self': " + order.total);


// Change the updateTotal method to solve the problem using 'bind'
order.updateTotal = function () {
  this.total = 0;
  
  forEach(this.items, function (item) {
    this.total += item;  
  }.bind(this)); 
};

order.updateTotal();
console.log("Total using 'bind': " + order.total);


// Change the updateTotal method to solve problem by passing 'this'
// to forEach
// This solution requires updating our forEach function itself and isn't
// always an option

// Update forEach to take a 3rd parameter, which is what 'this' should
// be bound to
forEach = function (items, callback, whatThisShouldBe) {
  for (var i = 0; i < items.length; i++) {
    callback.call(whatThisShouldBe, items[i]);
  }
};
  
// Update updateTotal to pass it the order object
order.updateTotal = function () {
  this.total = 0;
  
  forEach(this.items, function (item) {
    this.total += item;  
  }, this); 
};

order.updateTotal();
console.log('Total using update to forEach: ' + order.total);
