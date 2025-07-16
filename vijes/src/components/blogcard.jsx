import React from "react";

const BlogCard = ({ image, title, description, author, date, category }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p className="blog-description">{description}</p>
        <p className="blog-meta">
          {author} | {date} | <span className="blog-category">{category}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
