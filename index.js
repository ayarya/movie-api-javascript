const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '374635d9',
			i: 'tt0848228'
		}
	});
	console.log('sdds', response.data);
};

fetchData();
