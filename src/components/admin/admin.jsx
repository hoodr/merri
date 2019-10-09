import React, { useEffect, useState } from 'react';
import StorageManager from '../util/localStorageManager';
import AdminTools from './tools';
import Display from './display';
import './admin.css';

const Admin = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    let ignore = false;
    let manager = new StorageManager();

    async function fetchItems() {
      let fetchedItems = manager.getAllItems();

      if (!ignore) setItems(fetchedItems);
    }

    fetchItems();
    return () => { ignore = true; }
  }, []);

  const RemoveClick = (shortenedUrl) => {
    let manager = new StorageManager();
    manager.removeItem(shortenedUrl)
    let newItems = items
    delete newItems.shortenedUrl
    setItems(newItems);
  };

  return (
    <div className="admin-container">
      <AdminTools />
      <Display {...{items: items, removeClick: url => RemoveClick(url)}}/>
    </div>
  );
};

export default Admin;
