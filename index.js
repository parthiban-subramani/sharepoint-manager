const SharePointManager = require('./SharePointManager');
const OneDriveManager = require('./OneDriveManager');

const sharePointManager = new SharePointManager();
const oneDriveManager = new OneDriveManager('your-access-token-here'); // Replace with actual access token

async function main() {
  try {
    // SharePoint operations
    console.log('SharePoint operations:');
    const spFiles = await sharePointManager.getFiles('/Documents');
    console.log('SharePoint files:', spFiles);

    const spFile = { name: 'test.txt', content: 'Hello SharePoint!' };
    const uploadedSpFile = await sharePointManager.uploadFile('/Documents', spFile);
    console.log('Uploaded file to SharePoint:', uploadedSpFile);

    await sharePointManager.deleteFile('/Documents/test.txt');
    console.log('Deleted file from SharePoint');

    // OneDrive operations
    console.log('\nOneDrive operations:');
    const odFiles = await oneDriveManager.getFiles();
    console.log('OneDrive files:', odFiles);

    const odFile = { name: 'test.txt', content: 'Hello OneDrive!' };
    const uploadedOdFile = await oneDriveManager.uploadFile('/', odFile);
    console.log('Uploaded file to OneDrive:', uploadedOdFile);

    await oneDriveManager.deleteFile(uploadedOdFile.id);
    console.log('Deleted file from OneDrive');

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();