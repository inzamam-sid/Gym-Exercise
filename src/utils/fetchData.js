export const exerciseOptions = {

	method: 'GET',
	// hostname: 'exercisedb.p.rapidapi.com',
	// port: null,
	// path: '/status',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
         ,'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        // 'kjwzzijsfimshuivmsvgaiyzkromp15f2vkjsnk4bkzuuzvlza'
	}
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}