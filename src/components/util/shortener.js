import { sha256 } from 'js-sha256';
import StorageManager from './localStorageManager';

const Shortener = (url) => {
  let manager = new StorageManager();
  let shortenedObject = {};
  let date = new Date();

  shortenedObject.key = sha256(
    url + date.getDay() + date.getMonth() + date.getFullYear() + date.getSeconds()
  ).slice(0, 8);
  shortenedObject.url = url;
  shortenedObject.day = date.getDate()
  shortenedObject.month = date.getMonth()
  shortenedObject.year = date.getFullYear()

  manager.setStorage(shortenedObject.key, JSON.stringify(shortenedObject));

  return shortenedObject;
};

export default Shortener;
