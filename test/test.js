const SharePointManager = require('../index');
const makeRequest = require('../utils/makeRequest');
const { msGraphUrl } = require('../utils/url');

jest.mock('../utils/makeRequest');

describe('SharePointManager', () => {
    let manager;
    const bearerToken = 'test-token';

    beforeEach(() => {
        manager = new SharePointManager(bearerToken);
    });

    test('searchSites calls makeRequest with correct URL', async () => {
        const searchString = 'test-site';
        const expectedUrl = `${msGraphUrl}/sites?search=${searchString}`;
        makeRequest.mockResolvedValue({});

        await manager.searchSites(searchString);

        expect(makeRequest).toHaveBeenCalledWith(expectedUrl, bearerToken);
    });

    test('getSites calls makeRequest with correct URL', async () => {
        const expectedUrl = `${msGraphUrl}/sites?search=*`;
        makeRequest.mockResolvedValue({});

        await manager.getSites();

        expect(makeRequest).toHaveBeenCalledWith(expectedUrl, bearerToken);
    });

    test('getFollowedSites calls makeRequest with correct URL', async () => {
        const expectedUrl = `${msGraphUrl}/me/followedSites`;
        makeRequest.mockResolvedValue({});

        await manager.getFollowedSites();

        expect(makeRequest).toHaveBeenCalledWith(expectedUrl, bearerToken);
    });

    test('getDocumentLibraries calls makeRequest with correct URL', async () => {
        const siteId = 'test-site-id';
        const expectedUrl = `${msGraphUrl}/sites/${siteId}/drives`;
        makeRequest.mockResolvedValue({});

        await manager.getDocumentLibraries(siteId);

        expect(makeRequest).toHaveBeenCalledWith(expectedUrl, bearerToken);
    });

    test('getDocuments calls makeRequest with correct URL', async () => {
        const siteId = 'test-site-id';
        const driveId = 'test-drive-id';
        const expectedUrl = `${msGraphUrl}/sites/${siteId}/drives/${driveId}/items/root/children`;
        makeRequest.mockResolvedValue({});

        await manager.getDocuments(siteId, driveId);

        expect(makeRequest).toHaveBeenCalledWith(expectedUrl, bearerToken);
    });
});