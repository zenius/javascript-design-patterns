// Revealing Module Pattern
// Note: This pattern is the improved version of the Module Pattern by Christian Heilmann

const bookModule = (function () {
  let books = [];
  
	function getBooks() {
		return books;
	}

	// private method
	function addBookService(book) { 
		books.push(book);
	}

	function addBook(book) {
		addBookService(book);
	}

	// public functions 
  // Note: These public APIs/ properties are exposed to the outside world
  
  // New in JavaScript with ES6/S2015 is the object literal property value shorthand.
  // if you want to define an object who's keys have the same name as the variables passed-in as properties, 
  // you can use the shorthand and simply pass the key name.

	return {
		getBooks,
		addBook
	}
})();

console.log(bookModule.getBooks()); // []
bookModule.addBook({ title: 'Ikigai', author: 'Hector Garcia & Albert Liebermann' });
console.log(bookModule.getBooks()); // [{ title: 'Ikigai', author: 'Hector Garcia & Albert Liebermann' }]
