// import React, { Component } from 'react';

class Manager {

  // localStorage.getItem(originalUrl);
  // localStorage.removeItem(originalUrl);
  // localStorage.clear();

  getStorage(originalUrl, shortenUrl) {
    localStorage.getItem(originalUrl, shortenUrl);
  }

  setStorage(originalUrl, shortenUrl) {
    localStorage.setItem(originalUrl, shortenUrl);
  }
}

export default Manager;
