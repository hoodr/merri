// import React, { Component } from 'react';

class Manager {

  // localStorage.getItem(originalUrl);
  // localStorage.removeItem(originalUrl);
  // localStorage.clear();

  getStorage(shortenUrl) {
    return localStorage.getItem(shortenUrl);
  }

  setStorage(originalUrl, shortenUrl) {
    localStorage.setItem(shortenUrl, originalUrl);
  }

  getAllItems() {
    let items = {...localStorage};
    console.log(items)
    return items
  }
}

export default Manager;
