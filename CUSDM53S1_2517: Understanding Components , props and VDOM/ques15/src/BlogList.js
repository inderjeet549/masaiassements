import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          content={blog.content}
          isFeatured={blog.isFeatured}
        />
      ))}
    </div>
  );
};

export default BlogList;