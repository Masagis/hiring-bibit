import { types } from './action'

const globalState = {
	movies: '',
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
		default:
			return state
	}
}

export default rootReducer
