const { getSites, searchSites, getFollowedSites, getDocuments, getDocumentLibraries } = require('../lib/index');
const makeRequest = require('../utils/makeRequest');
const { msGraphUrl } = require('../utils/url');

jest.mock('../utils/makeRequest');

describe('Site functions', () => {
    const token = 'testToken';

    test('getSites returns expected data', async () => {
        const mockData = { data: 'testData' };
        makeRequest.mockResolvedValue(mockData);

        const result = await getSites(token);
        expect(result).toEqual(mockData);
        expect(makeRequest).toHaveBeenCalledWith(`${msGraphUrl}/sites?search=*`, token);
    });

    test('searchSites returns expected data', async () => {
        const searchString = 'testSearch';
        const mockData = { data: 'testData' };
        makeRequest.mockResolvedValue(mockData);

        const result = await searchSites(token, searchString);
        expect(result).toEqual(mockData);
        expect(makeRequest).toHaveBeenCalledWith(`${msGraphUrl}/sites?search=${searchString}`, token);
    });

    test('getFollowedSites returns expected data', async () => {
        const mockData = { data: 'testData' };
        makeRequest.mockResolvedValue(mockData);

        const result = await getFollowedSites(token);
        expect(result).toEqual(mockData);
        expect(makeRequest).toHaveBeenCalledWith(`${msGraphUrl}/me/followedSites`, token);
    });

    test('getDocumentLibraries returns expected data', async () => {
        const siteId = 'testSiteId';
        const mockData = { data: 'testData' };
        makeRequest.mockResolvedValue(mockData);

        const result = await getDocumentLibraries(token, siteId);
        expect(result).toEqual(mockData);
        expect(makeRequest).toHaveBeenCalledWith(`${msGraphUrl}/sites/${siteId}/drives`, token);
    });

    test('getDocuments returns expected data', async () => {
        const siteId = 'testSiteId';
        const driveId = 'testDriveId';
        const mockData = { data: 'testData' };
        makeRequest.mockResolvedValue(mockData);

        const result = await getDocuments(siteId, token, driveId);
        expect(result).toEqual(mockData);
        expect(makeRequest).toHaveBeenCalledWith(`${msGraphUrl}/sites/${siteId}/drives/${driveId}/items/root/children`, token);
    });
});