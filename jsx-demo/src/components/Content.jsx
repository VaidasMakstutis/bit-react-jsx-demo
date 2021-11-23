import Post from "./Post";
import posts from "../data/posts";
import React from "react";

class Content extends React.Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            {posts.map(post => (
              <Post key={post.id} title={post.title} about={post.about} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
