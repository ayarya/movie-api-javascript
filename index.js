let input = document.querySelector('input');

const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '374635d9',
			s: searchTerm
		}
	});
};

const onInput = (event) => {
	fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 1000));
