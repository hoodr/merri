import { sha256 } from 'js-sha256';
import StorageManager from './localStorageManager';

const Shortener = (url) => {
  let manager = new StorageManager();

  let shortened = sha256(url + new Date()).slice(0, 8);

  manager.setStorage(url, shortened)

  return shortened;
};

export default Shortener;
