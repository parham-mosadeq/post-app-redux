import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';

const Post = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const { title, body, tags, reactions } = data;

  return (
    <div>
      <div>
        <h3>{title}...</h3>
        <button onClick={() => setExpand(!expand)}>more</button>
        <div>{expand && <p>{body}</p>}</div>
      </div>
      <div>
        <div>
          ️🎨:
          {tags.map((tag, idx) => {
            return (
              <Link key={idx} to={`/posts/${tag}`}>
                #{tag}
              </Link>
            );
          })}
        </div>
        <div>✍:{reactions}</div>
      </div>
    </div>
  );
};

export default Post;
