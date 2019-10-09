// import React, { Component } from 'react';

class Manager {

  // localStorage.getItem(originalUrl);
  // localStorage.removeItem(originalUrl);
  // localStorage.clear();

  getStorage(shortenedUrl) {
    return localStorage.getItem(shortenedUrl);
  }

  setStorage(shortenedUrl, originalUrl) {
    localStorage.setItem(shortenedUrl, originalUrl);
  }

  removeItem(shortenedUrl) {
    localStorage.removeItem(shortenedUrl);
  }

  getAllItems() {
    // let items = {...localStorage};
    // console.log(items)
    return {...localStorage};
  }
}

export default Manager;
