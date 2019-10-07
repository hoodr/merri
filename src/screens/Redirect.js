import StorageManager from '../components/util/localStorageManager';

const Redirect = (props) => {
  let url = props.location.pathname.slice(1);
  let manager = new StorageManager();
  let fullUrl = manager.getStorage(url);

  if (fullUrl) {
    window.location.href = fullUrl
  } else {
    props.history.push(`/`)
  }

  return null;
}

export default Redirect;
