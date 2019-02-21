import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './views/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement);

registerServiceWorker();
