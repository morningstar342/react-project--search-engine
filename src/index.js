// index.js is connection between react application and index.html at publick
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './global.css';

ReactDom.render(<App />, document.getElementById('root'))