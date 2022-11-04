import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
// query string
import queryString from 'query-string';
// redux
import { useSelector } from 'react-redux';

const Tags = () => {
  const tag = useParams();
  const nav = useNavigate();

  const filteredState = useSelector((state) => state.postState);

  const {
    isLoading,
    posts: { posts },
    error,
  } = filteredState;

  return (
    <div>
      {posts ? (
        <div>
          {/* main div start */}
          <div>
            <h1>you searched for:#{tag.tags}</h1>
            {!isLoading && posts ? (
              posts.map((post) => {
                //finding the needed tag
                const filteredTags = post.tags.filter(
                  (tagItem) => tagItem === tag.tags
                );
                // destructuring tags
                const [mainTag] = filteredTags;
                // checking for matched tags
                if (mainTag === tag.tags) {
                  return (
                    <div key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <div>
                        <p>other tags used in this post: </p>
                        {post.tags.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <Link to={`/posts/${item}`}>{item}</Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div>
                <p>{error.msg}</p>
              </div>
            )}
          </div>

          <div>
            <Link to='/posts'>posts</Link>
            <br />
            <Link to='/'>home</Link>
          </div>
          {/* main div end */}
        </div>
      ) : (
        <div>
          <span>
            <p>enter a valid tag or visit our posts </p>
          </span>
          <Link to='/posts'>posts</Link>
          <br />
          <Link to='/'>home</Link>
        </div>
      )}
    </div>
  );
};

export default Tags;
