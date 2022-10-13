export const headersWithoutToken = () => {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
};

export const headersWithToken = (token) => {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
    };
};
