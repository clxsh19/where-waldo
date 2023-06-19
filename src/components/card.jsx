import React from 'react';

const Card = ({image_url}) => {
  return (
  	<div className="w-[90%] h-[80%]">
  		<img className="w-full h-full rounded-2xl" src={image_url} alt="level-image"/>
  	</div>
  )
}

export default Card;