import React from "react";
import Article from "./Article"; // Import the Article component

function ArticleList({ posts }) {
  return (
    <main>
      {/* Map through the posts array and render an Article component for each post */}
      {posts.map((post) => (
        <Article
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
        />
      ))}
    </main>
  );
}

export default ArticleList;
