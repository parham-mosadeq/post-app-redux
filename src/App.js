import React from 'react';
// redux
import store from './redux/store';
import { Provider } from 'react-redux';

// component
import Posts from './components/Posts';
import Notfound from './components/Notfound';
import Home from './components/Home';
// routes
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Routes>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/notfound' element={<Notfound />}></Route>
          </Routes>
        </div>

        <div>
          <Posts />
        </div>
      </Provider>
    </div>
  );
};

export default App;
