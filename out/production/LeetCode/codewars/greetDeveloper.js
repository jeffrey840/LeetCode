function greetDevelopers(list) {
	return list.map(developer => {
		// Add the 'greeting' property to each developer object
		developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
		return developer;
	});
}

// Example input
var list1 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

// Calling the function and logging the result
var updatedList = greetDevelopers(list1);
console.log(updatedList);
