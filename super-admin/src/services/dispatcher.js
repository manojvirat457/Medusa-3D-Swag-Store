import { store } from '../store';

export const dispatch = (reducerValue) => {
    store.dispatch(reducerValue);
};
