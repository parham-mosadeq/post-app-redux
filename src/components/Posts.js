import React, { useEffect } from 'react';
// data
import { fetchData } from '../redux/posts/postsAction';
// redux
import { useDispatch, useSelector } from 'react-redux';
//component
import Post from './Post';
// loader
import Loader from './layouts/loader/Loader';
// router
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  //managing loc's and nav's btn
  const nav = useNavigate();

  // reading data from redux
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postState);

  // fetching data
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // destructuring received data
  const {
    isLoading,
    posts: { posts },
    error,
  } = postData;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : posts ? (
        posts.map((item) => (
          <div key={item.id}>
            <Post data={item} />
          </div>
        ))
      ) : (
        <p>{error}</p>
      )}

      <div>
        <button onClick={() => nav('/')}>home</button>
      </div>
    </div>
  );
};

export default Posts;
