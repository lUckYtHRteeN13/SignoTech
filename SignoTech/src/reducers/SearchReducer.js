import {
	LOAD_SEARCH_HISTORY_ITEMS,
	SEARCHING,
	CHANGE_SEARCH_TEXT
} from '../actions/types';

export const INITIAL_STATE = {
  search_history_items: [],
  is_searching: false,
  search_text: ''
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case LOAD_SEARCH_HISTORY_ITEMS:
			const newItem = action.payload;

			const filteredHistory = state.search_history_items.filter(
				(item) => item !== newItem
			);

			const updatedHistory = [...filteredHistory, newItem];

			return { ...state, search_history_items: updatedHistory};
		case SEARCHING:
			return { ...state, is_searching: action.payload }
		case CHANGE_SEARCH_TEXT:
			return { ...state, search_text: action.payload }
		default:
			return state;

	}
};