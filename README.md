# SharePoint Manager

The SharePoint Manager is an NPM package that allows you to easily interact with SharePoint using the Microsoft Graph API. With this package, you can perform various operations such as searching for sites, getting followed sites, and listing documents and libraries.

## Installation

To install the SharePoint Manager package, run the following command:

```bash
npm install sharepoint-manager
```

## Usage

To use the SharePoint Manager package, you will need a Bearer token to authenticate with the Microsoft Graph API. Once you have obtained the token, you can use it to create an instance of the `SharePointManager` class and perform operations on SharePoint sites.

Here's an example of how to use the package:

```javascript
const { SharePointManager } = require('sharepoint-manager');

// Initialize SharePointManager with your Bearer token
const manager = new SharePointManager('YOUR_BEARER_TOKEN');

// Search for sites
const searchResults = await manager.searchSites('keyword');

// Get followed sites
const followedSites = await manager.getFollowedSites();

// List documents and libraries in a site
const siteId = 'SITE_ID';
const siteContents = await manager.listSiteContents(siteId);
```

Make sure to replace `'YOUR_BEARER_TOKEN'` with your actual Bearer token and `'SITE_ID'` with the ID of the site you want to perform operations on.

For more information on the available methods and their parameters, please refer to the [API documentation](https://github.com/your-username/sharepoint-manager/docs/api.md).

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/parthiban-subramani/sharepoint-manager).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
