import axios from 'axios';

export const get = async ({ url, headers, data }) => {
    return await axios.get(url, { params: data, headers: headers });
};

export const post = async ({ url, headers, data }) => {
    return await axios.post(url, data, { ...headers });
};

export const put = async ({ url, headers, data }) => {
    return await axios.put(url, data, { ...headers });
};
