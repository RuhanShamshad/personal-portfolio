import React from "react";
import { useParams } from "react-router-dom";
import mockPosts from "../MockData/MockPosts.json";
import "../App.css";

const Post = () => {
  const { postId } = useParams();
  const post = mockPosts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <div className="content">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>
          <strong>Category:</strong> {post.category}
        </p>
        <p>
          <em>Published on: {new Date(post.date).toLocaleDateString()}</em>
        </p>
      </div>
    </div>
  );
};

export default Post;
