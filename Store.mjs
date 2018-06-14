import FileStorageProvider from './storage/FileStorageProvider';


const FileStorageSingleton = new FileStorageProvider('./data/storage.json');
FileStorageSingleton.initFromFile();


export default FileStorageSingleton;
