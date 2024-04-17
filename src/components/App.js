import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div>
      {/* Pass the name and about information from blogData to Header */}
      <Header name={blogData.name} about={blogData.about} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} /> {/* Pass the posts array as a prop */}

     
    </div>
  );
}

export default App;
