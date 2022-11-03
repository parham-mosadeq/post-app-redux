import React, { useEffect } from 'react';

import { fetchData } from '../redux/posts/postsAction';

import { useDispatch } from 'react-redux';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <div>hello</div>;
};

export default Posts;
