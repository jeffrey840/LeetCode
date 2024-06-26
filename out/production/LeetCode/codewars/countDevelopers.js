function countDevelopers(list) {

	let count = list.filter(developer => developer.continent === "Europe" && developer.language === "JavaScript").length;

	// Return the count of such developers
	return count;
}
console.log(countDevelopers(list1 = [
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
	{ firstName: 'Joe', lastName: 'E.', country: 'Switzerland', continent: 'Europe', age: 20, language: 'JavaScript' }
]))