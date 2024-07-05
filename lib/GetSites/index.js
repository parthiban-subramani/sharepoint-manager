const axios = require('axios');

function getSites(token) {
    return axios.get('https://graph.microsoft.com/v1.0/sites?search=*', {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

module.exports = getSites;