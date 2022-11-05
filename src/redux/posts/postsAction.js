import axios from 'axios';
import queryString from 'query-string';
const baseUrl = 'https://dummyjson.com/posts';

const fetchPostsReq = () => {
  return {
    type: 'REQUEST',
  };
};

const fetchPostsReqSuccess = (posts) => {
  return {
    type: 'SUCCESS',
    payload: posts,
  };
};

const fetchPostsReqFail = (error) => {
  return {
    type: 'FAIL',
    payload: error,
  };
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchPostsReq());
    axios
      .get(`${baseUrl}`)
      .then((resp) => {
        const posts = resp.data;
        dispatch(fetchPostsReqSuccess(posts));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchPostsReqFail(errorMsg));
      });
  };
};

export { fetchData };
