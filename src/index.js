import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import Routes from './Routes';
import store, { persistor } from './app/store';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Routes />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);
