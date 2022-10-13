import { get, post } from '../endpointConfigs';
import URLConfigs from '../configs/urlConfigs';
import { headersWithoutToken } from '../configs/headerConfigs';

export const saveData = async (data) => {
    const response = await post({
        url: URLConfigs.BASE_URL + URLConfigs.GET_Work_Package_URL,
        headers: headersWithoutToken(),
        ...data
    });

    return response;
};

export const loadPostService = async () => {
    const response = await get({
        url: URLConfigs.BASE_URL + URLConfigs.GET_Work_Package_URL,
        headers: headersWithoutToken()
    });

    return response;
};
