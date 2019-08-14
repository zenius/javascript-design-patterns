// Singleton Pattern Example

const mySingleton = (function () {
	// instance stores a reference to the Singleton 
	let instance;

	// Singleton 
	function init() {
		// private variables
		let count = 0;

		// private functions
		function incrementCounter() {
			count++;
			console.log('After increment, count value is ' + count);
		}

		function resetCounter() {
			console.log('Before increment, count value was ' + count);
			count = 0;
		}

		// public functions

		// Note: Compatible with ECMASCRIPT 6 /ES2015 only 
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		return {
			incrementCounter,
			resetCounter
		}
	}

	function getInstance() {
		if (!instance) {
			instance = init();
		}
		return instance;
	}

	return {
		getInstance
	}
})();

let singletonA = mySingleton.getInstance();
let singletonB = mySingleton.getInstance();

console.log(singletonA === singletonB); // true


