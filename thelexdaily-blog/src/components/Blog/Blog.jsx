import React from "react";
import "./blog.scss";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-body">
        {post.body.slice(0, 100)}...
      </p>

      <button className="read-more">Read More</button>
    </div>
  );
};

export default BlogCard;