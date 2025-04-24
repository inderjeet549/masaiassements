import React from 'react';

const BlogPost = ({ title, content, isFeatured }) => {
  const blogStyle = {
    backgroundColor: isFeatured ? 'lightyellow' : 'white',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  return (
    <div style={blogStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;