var React = require('react');
var ReactDOM = require('react-dom');

import MainApp from './components/MainApp.jsx';

// App css
require('style-loader!css-loader!sass-loader!./styles/app.scss');

ReactDOM.render(
  <MainApp/>,
  document.getElementById('app')
);
