import React, { useEffect, useState } from 'react';
// router
import { Link, useParams } from 'react-router-dom';

const Post = ({ data }) => {
  const [expand, setExpand] = useState(false);

  const { title, body, tags, reactions, id, userId } = data;
  const a = useParams();
  console.log(a);

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
          {tags.map((tags, idx) => {
            return (
              <Link key={idx} to={`/${tags}`}>
                {tags}
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
