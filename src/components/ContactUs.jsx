import React from "react";
import "./Blog.css"; // Make sure to import the CSS file

const Blog = () => {
  return (
    <>
      <section id="contact">
        <h2>Let's Create Something Awesome Together!</h2>
        <p>
          Whether it's a web app, design collab, or just tech banter—drop me a
          message below 👇
        </p>

        <form action="https://formspree.io/f/xldbeeeb" method="POST">
          <label>Name</label>
          <input type="text" name="name" placeholder="Jane Doe" required />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows="6"
            required
          ></textarea>

          <button type="submit">🚀 Send It!</button>
        </form>
      </section>
    </>
  );
};

export default Blog;
