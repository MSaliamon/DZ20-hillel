import React, { useState } from 'react';

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState([
    { symbol: '😊', clicks: 0 },
    { symbol: '😎', clicks: 0 },
    { symbol: '🤔', clicks: 0 },
  ]);
  const [showWinner, setShowWinner] = useState(false);

  const handleEmojiClick = (index) => {
    const newEmojis = [...emojis];
    newEmojis[index].clicks++;
    setEmojis(newEmojis);
  };

  const handleShowResults = () => {
    const winningEmoji = emojis.reduce((prev, current) => (prev.clicks > current.clicks ? prev : current));
    setShowWinner(winningEmoji.symbol);
  };

  return (
    <div>
      {emojis.map((emoji, index) => (
        <div key={index} onClick={() => handleEmojiClick(index)}>
          {emoji.symbol} - {emoji.clicks}
        </div>
      ))}
      <button onClick={handleShowResults}>Show Results</button>
      {showWinner && <div>The winning emoji is: {showWinner}</div>}
    </div>
  );
};

export default EmojiVoting;
