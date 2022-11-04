import React from 'react';

const Write = () => {
  return (
    <main>
      <article>
        <input type='text' placeholder='title' />
        <textarea placeholder='body' cols='50' rows='10'></textarea>
      </article>

      <div>
        <button>post</button>
        <button>clear</button>
      </div>
    </main>
  );
};

export default Write;
