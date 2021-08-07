import axios from 'axios'

export const types = {
	CHANGE_LOADING: 'CHANGE_LOADING',
	SEARCH_MOVIES_SUCCESS: 'SEARCH_MOVIES_SUCCESS',
	DEATIL_MOVIES_SUCCESS: 'DEATIL_MOVIES_SUCCESS',
	SEARCH_AUTOCOMPLETE: 'SEARCH_AUTOCOMPLETE',
}

export const searchMovies = (title) => (dispatch) => {
	dispatch({ type: types.CHANGE_LOADING })

	const params = new URLSearchParams({
		apikey: 'faf7e5bb',
		// apikey: 'b25f677',
		// apikey: 'ff972965',
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

export const detailByID = (imdbID) => (dispatch) => {
	dispatch({ type: types.CHANGE_LOADING })

	const baseUrl = `https://www.omdbapi.com/?apikey=faf7e5bb&i=${imdbID}&plot=full`
	axios
		.get(baseUrl)
		.then((res) => {
			dispatch({ type: types.DEATIL_MOVIES_SUCCESS, detailMovies: res.data })
		})
		.catch((err) => console.log(err))
}
