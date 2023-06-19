// import React from 'react';

const Game = ({image_url}) => {
	const handleClick = (event) => {
    const image = event.target;
    const rect = image.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    console.log('X Coordinate (relative to image):', offsetX);
    console.log('Y Coordinate (relative to image):', offsetY);
  };

	return (
		<div>
		  <img src={image_url} onClick={handleClick} />
	  </div>
	)
}

export default Game;