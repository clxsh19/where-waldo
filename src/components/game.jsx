import Dropdown from './dropdown';
import { useState } from 'react';

const Game = ({image_url, characters}) => {

	const [showDropDown, setShowDropDown] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [foundCharacters, setFoundCharacters] = useState([]);

  const characterFound = (character) => {
    setFoundCharacters((prevFoundCharacters) => [...prevFoundCharacters, character]);
  };

  const isCharacterFound = (character) => {
    return foundCharacters.includes(character);
  };

	const handleClick = (event) => {
    const image = event.target;
    const rect = image.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    setShowDropDown(!showDropDown);
    setPosition({ x: offsetX, y: offsetY });
    console.log(offsetX+','+offsetY);
  };

	return (
		<div>
		  {showDropDown && (
		  	<div className="absolute bg-white border rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          style={{ top: position.y, left: position.x }}
        >
          <Dropdown characters={characters} x={position.x} y={position.y} characterFound={characterFound} isCharacterFound={isCharacterFound}/>
        </div>
        )
		  }
		  <img src={image_url} onClick={handleClick} />
	  </div>
	)
}

export default Game;