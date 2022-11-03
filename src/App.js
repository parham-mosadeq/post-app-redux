import React from 'react';
// redux
import store from './redux/store';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
