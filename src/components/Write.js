import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// reducer
import { txtTitle, txtArea, sendPost, clear } from '../redux/write/writeAction';
// router
import { Link } from 'react-router-dom';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// styles
import {
  MainContainer,
  Article,
  WriteBtnContainer,
  Body,
  TitleInput,
  LinkContainer,
} from '../styles/styles';

const Write = () => {
  const handleToast = (txt) => {
    toast.success(txt, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const write = useSelector((state) => state.writeState);
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <Article>
        <TitleInput
          value={write.txtTitle}
          onChange={(e) => dispatch(txtTitle(e.target.value))}
          type='text'
          placeholder='title'
        />
        <Body
          value={write.textarea}
          onChange={(e) => dispatch(txtArea(e.target.value))}
          placeholder='Write....'
          cols='50'
          rows='10'
        ></Body>
      </Article>

      <WriteBtnContainer>
        <button
          onClick={() => {
            handleToast('sent');

            dispatch(sendPost(write.txtTitle, write.txtArea));
          }}
        >
          post
        </button>
        <button
          onClick={() => {
            dispatch(clear());
          }}
        >
          clear
        </button>
      </WriteBtnContainer>
      <LinkContainer>
        <Link to='/'>home</Link>
        <Link to='/posts'>post</Link>
      </LinkContainer>
      <ToastContainer />
    </MainContainer>
  );
};

export default Write;
