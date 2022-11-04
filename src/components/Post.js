import React, { useState } from 'react';
// router
import { Link, useParams, useLocation } from 'react-router-dom';
// query string
import queryString from 'query-string';

const Post = ({ data }) => {
  const [expand, setExpand] = useState(false);

  const { title, body, tags, reactions, id, userId } = data;
  const tag = useParams();
  const loc = useLocation();

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setExpand(!expand)}>more</button>
        <div>{expand && <p>{body}</p>}</div>
      </div>
      <div>
        <p>
          tags:
          {tags.map((tag, idx) => {
            return (
              <Link key={idx} to={`/posts/${tag}`}>
                #{tag}
              </Link>
            );
          })}
        </p>
        <p>reactions: {reactions}</p>
      </div>
    </div>
  );
};

export default Post;
