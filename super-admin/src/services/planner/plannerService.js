import { get, post } from '../endpointConfigs';
import URLConfigs from '../configs/urlConfigs';
import { headersWithoutToken } from '../configs/headerConfigs';

export const saveData = async (data) => {
    const response = await post({
        url: URLConfigs.BASE_URL + URLConfigs.GET_STORE,
        headers: headersWithoutToken(),
        ...data
    });

    return response;
};

export const loadPostService = async () => {
    const response = await get({
        url: URLConfigs.BASE_URL + URLConfigs.GET_STORE,
    });

    return response;
};

export const AuthService = async ({ email, password }) => {
    let data = {
        email: email,
        password: password
    };
    const response = await post({
        url: URLConfigs.BASE_URL + URLConfigs.ADMIN_AUTH,
        data
    });

    return response;
};
