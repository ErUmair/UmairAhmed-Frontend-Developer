import {
    FILTER_ACTION,
} from '../_actions/type';

const initialState = {}

const capsuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_ACTION:
            return {
                ...state,
                capsuleData: { ...state.capsuleData, capsuleData: action.payload }
            }
        default:
            return state;
    }
}

export default capsuleReducer;