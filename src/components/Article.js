import React from "react";

function Article({ title, date, preview, minutes }) {
  // Function to generate the appropriate emoji based on minutes
  const generateEmojis = (minutes) => {
    const emojis = [];
    const numEmojis = Math.ceil(minutes / 5); // Calculate number of emojis needed

    // Determine which emoji to use based on the number of minutes
    const emoji = minutes < 30 ? '☕️' : '🍱';

    // Generate array of emojis
    for (let i = 0; i < numEmojis; i++) {
      emojis.push(emoji);
    }

    return emojis.join(''); // Combine emojis into a single string
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{generateEmojis(minutes)} {minutes} min read</p>
    </article>
  );
}

export default Article;
