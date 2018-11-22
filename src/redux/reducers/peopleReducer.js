import {
    FETCHING_PEOPLE_REQUEST,
    FETCHING_PEOPLE_SUCCESS,
    FETCHING_PEOPLE_FAILURE
} from './../constants/ActionTypes';

const initialState = {
    isFetching: false,
    errorMessage: '',
    peoples: []
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PEOPLE_REQUEST:
            return { ...state, isFetching: true }
        case FETCHING_PEOPLE_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_PEOPLE_SUCCESS:
            console.log(action.payload);
            return { ...state, isFetching: false, peoples: action.payload }
        default:
            return state;
    }
}

export default peopleReducer;