import { CONST_NUMBER, USER_LIST } from "../actions/action.example";

const initialState = {
    loading: 'idle',
    data: [],
    counter: 0
};

const exampleReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_IN_PROGRESS':
            return {
                ...state,
                loading: 'pending'
            }
        case USER_LIST:
            return {
                ...state,
                loading: 'succes',
                data: action.payload
            }
        case 'REQUEST_FAILED':
            return {
                ...state,
                loading: 'error'
            }
        case CONST_NUMBER:
            return {
                ...state,
                counter: action.payload.number + 1
            }
        default:
            return state;
    }
};

export default exampleReducers