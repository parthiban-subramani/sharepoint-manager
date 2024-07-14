const { msGraphUrl } = require('../utils/url');
const makeRequest = require('../utils/makeRequest');

/**
 * Searches for sites based on a search string.
 * @param {string} token - The authentication token.
 * @param {string} searchString - The search string.
 * @returns {Promise<Object>} The search results.
 */
async function searchSites(token, searchString) {
    const url = `${msGraphUrl}/sites?search=${searchString}`;
    return await makeRequest(url, token);
}

/**
 * Retrieves all sites.
 * @param {string} token - The authentication token.
 * @returns {Promise<Object>} The sites data.
 */
async function getSites(token) {
    const url = `${msGraphUrl}/sites?search=*`;
    return await makeRequest(url, token);
}

/**
 * Retrieves the followed sites of the authenticated user.
 * @param {string} token - The authentication token.
 * @returns {Promise<Object>} The followed sites data.
 */
async function getFollowedSites(token) {
    const url = `${msGraphUrl}/me/followedSites`;
    return await makeRequest(url, token);
}

/**
 * Retrieves document libraries for a specific site.
 * @param {string} token - The authentication token.
 * @param {string} siteId - The ID of the site.
 * @returns {Promise<Object>} The document libraries data.
 */
async function getDocumentLibraries(token, siteId) {
    const url = `${msGraphUrl}/sites/${siteId}/drives`;
    return await makeRequest(url, token);
}

/**
 * Retrieves documents from a specific drive in a site.
 * @param {string} siteId - The ID of the site.
 * @param {string} token - The authentication token.
 * @param {string} driveId - The ID of the drive.
 * @returns {Promise<Object>} The documents data.
 */
async function getDocuments(siteId, token, driveId) {
    const url = `${msGraphUrl}/sites/${siteId}/drives/${driveId}/items/root/children`;
    return await makeRequest(url, token);
}

module.exports = {
    getSites,
    searchSites,
    getFollowedSites,
    getDocuments,
    getDocumentLibraries
};