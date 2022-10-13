// action - state management
import * as actionTypes from './plannerConsts';

export const initialState = {
    data: [],
    isLoading: false
};

// ==============================|| PLANNER REDUCER ||============================== //

const plannerReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.GET_WORK_PACKAGE_DATA:
            return {
                ...state,
                data: action.data
            };
        case actionTypes.PLANNER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};

export default plannerReducer;
