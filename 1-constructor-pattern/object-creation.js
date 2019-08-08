'use strict';

// Methods to create empty object

// Method 1
const newObject1 = {};

// Method 2
const newObject2 = Object.create(Object.prototype);

// Method 3
const newObject3 = new Object();

console.log(newObject1, newObject2, newObject3); // {} {} {}


// Methods to assign key and value to the object

// Note: Methods supported by ECMASCRIPT 3 

// Method 1

// Set properties
newObject1.greet = "Hello World";

// Get properties
console.log(newObject1.greet); // Hello World

// Method 2

// Set properties
newObject2['greet'] = "Hello World";

// Get properties
console.log(newObject2['greet']); // Hello World

// Methods supported by ECMASCRIPT 5 only 

// Method 3

// Set properties
Object.defineProperty(newObject3, 'greet', {
	value: 'Hello World',
	writable: true,
	enumerable: true,
	configurable: true
});

// Set Properties
console.log(newObject3.greet); // Hello World
console.log(newObject3['greet']); // Hello World

// Method 4

// Set Properties
Object.defineProperties(newObject3, {
	'name': {
		value: 'zenius',
		writable: false
	},
	'age': {
		value: 26,
		writable: true
	}
});

// Get Properties
console.log(newObject3.name, newObject3.age); // zenius 26
console.log(newObject3['name'], newObject3['age']);// zenius 26
