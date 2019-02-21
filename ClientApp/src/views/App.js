import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';
import './styles/global.css';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from '../views/Users/Index';

export default () => (
  <Layout>
    <Router>
      <Route exact path='/' component={Home}/>
    </Router>
  </Layout>
);
