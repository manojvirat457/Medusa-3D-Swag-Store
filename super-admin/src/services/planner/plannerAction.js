import * as actionTypes from './plannerConsts';
import { loadPostService } from './plannerService';
import { dispatch } from '../dispatcher';

const loadPost = async () => {
    var values = await loadPostService();
    dispatch({ type: actionTypes.GET_WORK_PACKAGE_DATA, data: values.data });
};

const startLoader = () => {
    dispatch({ type: actionTypes.PLANNER_LOADING, isLoading: true });
};

const stopLoader = () => {
    dispatch({ type: actionTypes.PLANNER_LOADING, isLoading: false });
};

export { loadPost, startLoader, stopLoader };
