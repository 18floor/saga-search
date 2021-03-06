import {
    SEARCH_SKILLS_REQUEST,
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_SUCCESS,
    CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
    search: '',
};

const hasQuery = (search) => {
    return search && search.trim() !== ''
};

export default function skillsReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SKILLS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_SKILLS_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case SEARCH_SKILLS_SUCCESS:
            const items = hasQuery(state.search) ? action.payload.items : [];
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };
        case CHANGE_SEARCH_FIELD:
            const {search} = action.payload;
            const newItems = hasQuery(search) ? state.items : [];
            return {
                ...state,
                search,
                items: newItems
            };
        default:
            return state;
    }
};