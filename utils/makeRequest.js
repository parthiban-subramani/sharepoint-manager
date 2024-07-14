const axios = require('axios');

async function makeRequest(url, token) {
    try {
        const response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        if (error.data) {
            return {
                error: {
                    message: error.data.error.message,
                    code: error.data.error.code
                }
            }
        } else {
            throw error;
        }
    }
}

module.exports = makeRequest;