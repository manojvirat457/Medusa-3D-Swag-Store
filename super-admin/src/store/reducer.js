import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import plannerReducer from 'services/planner/plannerReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    planner: plannerReducer
});

export default reducer;
