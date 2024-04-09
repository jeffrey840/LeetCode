function getFirstPython(list) {

	const pythonDev = list.find(developer => developer.language === 'Python')

	if(pythonDev) {
		return `${pythonDev.firstName}, ${pythonDev.country}`;
	} else {

		return 'There will be no Python developers'
	}

}