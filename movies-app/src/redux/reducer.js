import { types } from './action'

const globalState = {
	movies: '',
	detailMovies: '',
	isLoading: false,
}

const rootReducer = (state = globalState, action) => {
	switch (action.type) {
		case types.CHANGE_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case types.SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
				isLoading: false,
			}
		case types.DEATIL_MOVIES_SUCCESS:
			return {
				...state,
				detailMovies: action.detailMovies,
				isLoading: false,
			}
		default:
			return state
	}
}

export default rootReducer
