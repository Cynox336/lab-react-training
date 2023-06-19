import React, { useState } from 'react';

export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  console.log('indice siguiente:', likes % colors.length);

  return (
    <button
      style={{ backgroundColor: colors[likes % colors.length] }}
      onClick={handleClick}
    >
      {likes} likes
    </button>
  );
}
