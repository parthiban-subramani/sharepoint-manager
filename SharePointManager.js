class SharePointManager {
  constructor() {
    this.baseUrl = 'https://your-sharepoint-site.com'; // Replace with actual SharePoint URL
  }

  async getFiles(folderPath) {
    try {
      const response = await fetch(`${this.baseUrl}/_api/web/GetFolderByServerRelativeUrl('${folderPath}')/Files`);
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error('Error fetching files from SharePoint:', error);
      throw error;
    }
  }

  async uploadFile(folderPath, file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${this.baseUrl}/_api/web/GetFolderByServerRelativeUrl('${folderPath}')/Files/add(url='${file.name}',overwrite=true)`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json;odata=verbose',
        }
      });

      const data = await response.json();
      return data.d;
    } catch (error) {
      console.error('Error uploading file to SharePoint:', error);
      throw error;
    }
  }

  async deleteFile(fileServerRelativeUrl) {
    try {
      await fetch(`${this.baseUrl}/_api/web/GetFileByServerRelativeUrl('${fileServerRelativeUrl}')`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json;odata=verbose',
          'X-HTTP-Method': 'DELETE',
          'If-Match': '*'
        }
      });
    } catch (error) {
      console.error('Error deleting file from SharePoint:', error);
      throw error;
    }
  }
}

module.exports = SharePointManager;