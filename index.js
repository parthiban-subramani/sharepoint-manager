const { msGraphUrl } = require('./utils/url');
const makeRequest = require('./utils/makeRequest');

class SharePointManager {
    constructor(bearerToken) {
        this.bearerToken = bearerToken;
    }

    /**
     * Searches for sites based on a search string.
     * @param {string} searchString - The search string.
     * @returns {Promise<Object>} The search results.
     */
    async searchSites(searchString) {
        const url = `${msGraphUrl}/sites?search=${searchString}`;
        return await makeRequest(url, this.bearerToken);
    }

    /**
     * Retrieves all sites.
     * @returns {Promise<Object>} The sites data.
     */
    async getSites() {
        const url = `${msGraphUrl}/sites?search=*`;
        return await makeRequest(url, this.bearerToken);
    }

    /**
     * Retrieves the followed sites of the authenticated user.
     * @returns {Promise<Object>} The followed sites data.
     */
    async getFollowedSites() {
        const url = `${msGraphUrl}/me/followedSites`;
        return await makeRequest(url, this.bearerToken);
    }

    /**
     * Retrieves document libraries for a specific site.
     * @param {string} siteId - The ID of the site.
     * @returns {Promise<Object>} The document libraries data.
     */
    async getDocumentLibraries(siteId) {
        const url = `${msGraphUrl}/sites/${siteId}/drives`;
        return await makeRequest(url, this.bearerToken);
    }

    /**
     * Retrieves documents from a specific drive in a site.
     * @param {string} siteId - The ID of the site.
     * @param {string} driveId - The ID of the drive.
     * @returns {Promise<Object>} The documents data.
     */
    async getDocuments(siteId, driveId) {
        const url = `${msGraphUrl}/sites/${siteId}/drives/${driveId}/items/root/children`;
        return await makeRequest(url, this.bearerToken);
    }
}

module.exports = SharePointManager;