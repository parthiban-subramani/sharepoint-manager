const { Client } = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

class OneDriveManager {
  constructor(accessToken) {
    this.client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      }
    });
  }

  async getFiles(folderPath = '/') {
    try {
      const response = await this.client
        .api(`/me/drive/root:${folderPath}:/children`)
        .get();
      return response.value;
    } catch (error) {
      console.error('Error fetching files from OneDrive:', error);
      throw error;
    }
  }

  async uploadFile(folderPath, file) {
    try {
      const response = await this.client
        .api(`/me/drive/root:${folderPath}/${file.name}:/content`)
        .put(file);
      return response;
    } catch (error) {
      console.error('Error uploading file to OneDrive:', error);
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.client
        .api(`/me/drive/items/${fileId}`)
        .delete();
    } catch (error) {
      console.error('Error deleting file from OneDrive:', error);
      throw error;
    }
  }
}

module.exports = OneDriveManager;