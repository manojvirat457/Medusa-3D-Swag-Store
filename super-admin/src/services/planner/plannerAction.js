import * as actionTypes from './plannerConsts';
import { loadPostService, AuthService } from './plannerService';
import { dispatch } from '../dispatcher';

const loadPost = async () => {
    var values = await loadPostService();
    console.log(values);
    dispatch({ type: actionTypes.GET_WORK_PACKAGE_DATA, data: values.data });
};

const adminAuth = async ({ email, password }) => {
    var result = await AuthService({ email, password });
    console.log(result)
}


const startLoader = () => {
    dispatch({ type: actionTypes.PLANNER_LOADING, isLoading: true });
};

const stopLoader = () => {
    dispatch({ type: actionTypes.PLANNER_LOADING, isLoading: false });
};

export { loadPost, startLoader, stopLoader, adminAuth };
