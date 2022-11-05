import axios from 'axios';
import { randomNumber } from '../../functions/functions';

const writePostReq = () => {
  return {
    type: 'REQUEST',
  };
};

const writePostSuccessReq = (wrote) => {
  return {
    type: 'SUCCESS',
    payload: wrote,
  };
};

const writePostFailed = (err) => {
  return {
    type: 'FAILED',
    payload: err,
  };
};

const txtTitle = (txtTitle) => {
  return {
    type: 'TXT_TITLE',
    payload: txtTitle,
  };
};
const txtArea = (txtArea) => {
  return {
    type: 'TXT_BODY',
    payload: txtArea,
  };
};
const clear = () => {
  return {
    type: 'CLEAR_FILED',
    payload: '',
  };
};

const sendPost = (txtTitle, txtArea) => {
  const data = {
    title: txtTitle,
    // body: txtArea,
    userId: randomNumber(100),
  };

  return (dispatch) => {
    dispatch(writePostReq());
    axios
      .post('https://dummyjson.com/posts/add', data)
      .then((resp) => dispatch(writePostSuccessReq(resp.data)))
      .catch((error) => dispatch(writePostFailed(console.warn(error.message))));
  };
};

export { txtTitle, clear, sendPost, txtArea };
