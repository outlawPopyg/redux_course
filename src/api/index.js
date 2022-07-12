export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        "Content-Type": "application/json"
    };

    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(endPoint, config);
        if (!response.ok) throw new Error();

        return await response.json();
    } catch (e) {
        return Promise.reject();
    }
};

client.get = function (endPoint, customConfig = {}) {
    return client(endPoint, {});
}

client.post = function (endPoint, body, customConfig = {}) {
    return client(endPoint, { body, ...customConfig });
}

client.delete = function (endPoint, customConfig = {}) {
    return client(endPoint, { ...customConfig, method: "DELETE"});
}

client.patch = function (endPoint, body, customConfig = {}) {
    return client(endPoint, {body, ...customConfig, method: "PATCH"});
}
