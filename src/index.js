import React from 'react';
import ReactDOM from 'react-dom';

// Service worker
import * as serviceWorker from './serviceWorker';

// Main page
import Index from './pages/Index/index';
import Top from './pages/Top/index';

// TODO: add react-router

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
