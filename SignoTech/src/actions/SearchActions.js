import {
	LOAD_SEARCH_HISTORY_ITEMS,
	SEARCHING,
	CHANGE_SEARCH_TEXT
} from './types';

import { INITIAL_STATE } from '../reducers/SearchReducer';

export const changeSearchText = (search="") => {
	if (search !== null){
		return {
			type: CHANGE_SEARCH_TEXT,
			payload: search
		};
	}
	return {
		type: CHANGE_SEARCH_TEXT,
		payload: INITIAL_STATE.search_text
	};
}

export const storeSearchQuery = (searchQuery="") => async dispatch => {
  if (searchQuery !== "") {
    dispatch({
      type: LOAD_SEARCH_HISTORY_ITEMS,
      payload: searchQuery
    })
  }
}

export const Searching = (isSearching=false) => {
	if (isSearching !== null){
		if (isSearching === true) {
			return {
				type: SEARCHING,
				payload: true
			};
		}
		return {
			type: SEARCHING,
			payload: false
		};
	}
	return {
		type: SEARCHING,
		payload: INITIAL_STATE.is_searching
	};
}