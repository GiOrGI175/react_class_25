import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMosre, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );
        const data = await response.json();
        setPosts((PrevPosts) => [...PrevPosts, ...data]);

        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const handlescore = () => {
      const windowHeight = window.innerHeight;

      const documentHeight = document.documentElement.offsetHeight;

      const scrollTop = document.documentElement.scrollTop;

      if (
        windowHeight + scrollTop >= documentHeight - 20 &&
        hasMosre &&
        !loading
      ) {
        setpage((pervPage) => pervPage + 1);
      }
    };

    window.addEventListener('scroll', handlescore);

    return () => window.removeEventListener('scroll', handlescore);
  }, [loading, hasMosre]);

  return (
    <>
      <div>
        <h1 className=' text-3xl font-bold w-full  underline'>Hello world!</h1>
      </div>
      <div>
        {posts.map((post) => (
          <div
            key={`${post.id} + ${post.body} + ${post.title}`}
            className='border p-6 mb-6'
          >
            <h1> {post.title}</h1>

            <h2>{post.body}</h2>
          </div>
        ))}
      </div>
      {loading && <h2>loading</h2>}

      {!hasMosre && <p>this e eropr</p>}
    </>
  );
};

export default App;
