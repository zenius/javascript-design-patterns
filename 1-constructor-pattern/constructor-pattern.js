'use strict';

// Method 1
// Warning: Each functions are redefined for the new object created

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.personDetails = function () {
		return `Name: ${this.name}, Age: ${this.age}`;
	}
}

// Create Object and Set Properties
const person = new Person('zenius', 26);

// Get Properties
console.log(person.name); // zenius
console.log(person.age); // 26
console.log(person.personDetails()); // Name: zenius, Age: 26

// Method 2 
// Note: To avoid separate instance of each functions defined, we take the help of 'prototype'

function Employee(name, department) {
	this.name = name;
	this.department = department;
}

Employee.prototype.employeeDetails = function () {
	return `Name: ${this.name}, Department: ${this.department}`;
}

const employee = new Employee('zenius', 'Software Developer');

console.log(employee.name); // zenius
console.log(employee.department); // Software Developer
console.log(employee.employeeDetails()); // Name: zenius, Department: Software Developer
