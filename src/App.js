import React from 'react';
// redux
import store from './redux/store';
import { Provider } from 'react-redux';

// component
import Posts from './components/Posts';
import Notfound from './components/Notfound';
import Home from './components/Home';
import Tags from './components/tags/Tags';
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
            <Route path='/posts/:tags' element={<Tags />}></Route>
            <Route path='/notfound' element={<Notfound />}></Route>
            <Route path='*' element={<Navigate to='/notfound' />}></Route>
          </Routes>
        </div>

        <div></div>
      </Provider>
    </div>
  );
};

export default App;
