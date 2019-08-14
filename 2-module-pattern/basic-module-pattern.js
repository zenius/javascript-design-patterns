// Basic Module Pattern Example

const bookModule = (function () {
	// private variable
	let books = [];

	// private functions
	function getBooks() {
		console.log(books);
	}

	function addBook(book) {
		books.push(book);
	}
		
	// public functions
	// Note: These are public APIs/ properties exposed to the outside world
	return {
		GetBooks: function() {
			// public function accessing private method
			return getBooks();
		},

		AddBook: function(book) {
			// public function accessing private method
			addBook(book);
		}, 

		GetBooksCount: function() {
			// public function accessing private variables
			console.log(books.length);
		}
	}
})();

bookModule.GetBooks(); // []
bookModule.GetBooksCount(); // 0

bookModule.AddBook({ title: 'Ikigai', author: 'Hector Garcia & Albert Liebermann' });
bookModule.GetBooks(); // [{ title: 'Ikigai' , author: 'Hector Garcia & Albert Liebermann'}];
bookModule.GetBooksCount(); // 1

