import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'components/routes'
import { browserHistory } from 'react-router'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} />,
  document.getElementById('root')
);
