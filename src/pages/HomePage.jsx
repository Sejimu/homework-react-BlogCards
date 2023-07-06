import React from "react";
import AddBlog from "../components/AddBlog";
import BlogCard from "../components/BlogCard";

function HomePage() {
  return (
    <div>
      <AddBlog />
      <h2>Cards</h2>

      <BlogCard />
    </div>
  );
}

export default HomePage;
