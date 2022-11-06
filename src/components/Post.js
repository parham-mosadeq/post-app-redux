import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';
// styles

import { MainContainerPost, Tags } from '../styles/styles';
const Post = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const { title, body, tags, reactions } = data;

  return (
    <MainContainerPost>
      <div>
        <h3>{title}...</h3>
        <button onClick={() => setExpand(!expand)}>
          {expand ? 'show less' : 'show more'}
        </button>
        {expand && <p>{body}</p>}
      </div>
      {/* tags reactions */}
      <div>
        <Tags>
          ️🎨:
          {tags.map((tag, idx) => {
            return (
              <Link key={idx} to={`/posts/${tag}`}>
                #{tag}
              </Link>
            );
          })}
        </Tags>
        <div>✍:{reactions}</div>
      </div>
    </MainContainerPost>
  );
};

export default Post;
