import React from 'react';
import BlogList from './BlogList';

const App = () => {
  const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
  ];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;