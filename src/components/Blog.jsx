import React, { useEffect, useState } from "react";
import mockPosts from "../MockData/MockPosts.json";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const filterPosts = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setPosts(mockPosts);
    } else {
      const filtered = mockPosts.filter((post) => post.category === category);
      setPosts(filtered);
    }
  };

  return (
    <div className="blog">
      <h1 className="blog-title">My Blog</h1>

      <div className="categories">
        {["All", "Tech", "Frontend", "Backend"].map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => filterPosts(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="post-item">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <p className="post-date">
                <small>
                  Published on: {new Date(post.date).toLocaleDateString()}
                </small>
              </p>
              <a href={`/blog/${post.id}`} className="read-more-link">
                Read More
              </a>
            </li>
          ))
        ) : (
          <p className="no-posts">No posts found in this category.</p>
        )}
      </ul>
    </div>
  );
};

export default Blog;
