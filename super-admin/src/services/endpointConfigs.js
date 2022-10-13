import axios from 'axios';

export const get = async ({ url, headers, data }) => {
    return await axios.get(url, { headers: headers, withCredentials: true, json: true,maxContentLength: 900 });
};

export const post = async ({ url, headers, data }) => {
    return await axios.post(url, data, { headers: headers, withCredentials: true, json: true,maxContentLength: 900 });
};

export const put = async ({ url, headers, data }) => {
    return await axios.put(url, data, { ...headers });
};
