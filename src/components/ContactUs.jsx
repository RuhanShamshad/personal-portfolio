import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBackground = (e) => {
      setPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", moveBackground);
    return () => window.removeEventListener("mousemove", moveBackground);
  }, []);

  return (
    <div className="contact-bg-mouse">
      <section className="contact-container">
        <h2>Let's Create Something Awesome Together!</h2>
        <p>
          Whether it's a web app, design collab, or just tech banter—drop me a
          message below 👇
        </p>
      </section>
      <section className="container-2">
        <form action="https://formspree.io/f/xldbeeeb" method="POST">
          <input type="text" name="name" placeholder="Enter Name" required />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows="6"
            required
          ></textarea>

          <button type="submit">🚀 Send It!</button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
