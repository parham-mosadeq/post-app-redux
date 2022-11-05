import React from 'react';
// redux
import store from './redux/store';
import { Provider } from 'react-redux';

// component
import Posts from './components/Posts';
import Notfound from './components/Notfound';
import Home from './components/Home';
import Tags from './components/layouts/tags/Tags';
import Write from './components/Write';
// routes
import { Route, Routes, Navigate } from 'react-router-dom';

import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  background: linear-gradient(189deg, green, teal);
`;

const App = () => {
  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <Routes>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/posts/:tags' element={<Tags />}></Route>
            <Route path='/write' element={<Write />}></Route>
            <Route path='/notfound' element={<Notfound />}></Route>
            <Route path='*' element={<Navigate to='/notfound' />}></Route>
          </Routes>
        </div>

        <div></div>
      </Provider>
    </AppContainer>
  );
};

export default App;
