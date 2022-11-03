import React, { useEffect } from 'react';
// data
import { fetchData } from '../redux/posts/postsAction';
// redux
import { useDispatch, useSelector } from 'react-redux';
//component
import Post from './Post';
// loader
import Loader from './loader/Loader';

const Posts = () => {
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postState);

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

    </div>
  );
};

export default Posts;
