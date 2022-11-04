import axios from 'axios';

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

const send = (txtTitle, txtArea) => {
  return {
    type: 'POST',
    payload: { txtArea, txtTitle },
  };
};
const clear = () => {
  return {
    type: 'CLEAR_FILED',
    payload: '',
  };
};

const sendPost = () => {
  const data = {
    title: '',
    userId: null,
  };

  return (dispatch) => {
    writePostReq(dispatch());

    axios
      .post('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      .then((resp) => console.log(resp.data))
      .catch((error) => console.warn(error.message));
  };
};

export { send, clear, sendPost };
