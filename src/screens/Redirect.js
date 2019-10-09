import StorageManager from '../components/util/localStorageManager';

const Redirect = (props) => {
  let url = props.location.pathname.slice(1);
  let manager = new StorageManager();
  let fullUrlObj = JSON.parse(manager.getStorage(url));
  let date = new Date();
  let compDate = new Date((date.getFullYear() - 1), date.getMonth(), date.getDay())
  let urlDate = new Date(fullUrlObj.year, fullUrlObj.month, fullUrlObj.day)

  let valid = true;
  if (urlDate <= compDate) {
    valid = false
  };

  if (valid) {
    window.location.href = fullUrlObj.url
  } else {
    props.history.push(`/`)
  }

  return null;
}

export default Redirect;
