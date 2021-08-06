import axios from 'axios'

export const types = {
	CHANGE_LOADING: 'CHANGE_LOADING',
	SEARCH_MOVIES_SUCCESS: 'SEARCH_MOVIES_SUCCESS',
}

export const searchMovies = (title) => (dispatch) => {
	dispatch({ type: types.CHANGE_LOADING })

	const params = new URLSearchParams({
		apikey: 'b25f677',
		// apikey: 'faf7e5bb',
		s: title,
	})

	const baseUrl = `https://www.omdbapi.com/?${params}`
	axios
		.get(baseUrl)
		.then((res) => {
			console.log(res.data.Search)
			dispatch({ type: types.SEARCH_MOVIES_SUCCESS, movies: res.data.Search })
		})
		.catch((err) => console.log(err))
}
