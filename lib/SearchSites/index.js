const axios = require('axios');
const { msGraphUrl } = require('../../utils/url');

async function searchSites(token, searchString) {
    try {
        const response = await axios.get(`${msGraphUrl}/sites?search=${searchString}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}

module.exports = searchSites;
