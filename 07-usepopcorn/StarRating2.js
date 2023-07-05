import { useState } from 'react';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starsStyle = {
  display: 'flex',
};

export default function StarRating2({
  maxRating = 10,
  defaultRating = 0,
  color = '#fcc419',
  size = 48,
}) {
  const [rating, setRating] = useState(defaultRating);

  function handleRating(rating) {
    setRating(rating);
  }

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size / 2.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starsStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            isFull={rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>You gave {rating || ''} stars</p>
    </div>
  );
}

function Star({ color, size, onRate, isFull }) {
  const starStyle = {
    display: 'block',
    height: `${size}px`,
    width: `${size}px`,
    cursor: 'pointer',
    color: { color },
  };

  return (
    <span role='button' style={starStyle} onClick={onRate}>
      {isFull ? (
        <span style={(color = { color })}> &#9733;</span>
      ) : (
        <span style={(color = { color })}>&#9734;</span>
      )}
    </span>
  );
}
