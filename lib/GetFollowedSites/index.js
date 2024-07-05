const axios = require('axios');
const { msGraphUrl } = require('../../utils/url');

async function getFollowedSites(token) {
    try {
        // Make a request to the Microsoft Graph API to get the followed sites
        const response = await axios.get(`${msGraphUrl}/me/followedSites`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        // Return the data from the response
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.log('Error:', error.message);
        throw error;
    }
}

module.exports = getFollowedSites;