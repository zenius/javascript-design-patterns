// Object Literals

const counter = {
	count: 0,
	incrementCounter: function () {
		this.count++;
		return this.count;
	}
};

console.log(counter.count); // 0
console.log(counter.incrementCounter()); // 1