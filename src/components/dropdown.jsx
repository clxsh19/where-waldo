import odlaw from '../img/odlaw.jpg';
import waldo from '../img/waldo.jpg';
import wenda from '../img/wenda.jpg';
import wizard from '../img/wizard.jpg';

const characterImages = {
    Odlaw: odlaw,
    Waldo: waldo,
    Wenda: wenda,
    Wizard: wizard,
};

const Dropdown = ({ characters,  x, y, characterFound, isCharacterFound} ) => {
    const char_names = Object.keys(characters);
    const checkIfFound = (character, x, y) => {
    	const x_range = characters[character].x;
		const y_range = characters[character].y;
		if ( x_range[0] >= x && x >= x_range[1] ) {
			if ( y_range[0] >= y && y >= y_range[1] ) {
				characterFound(character);
				console.log(true);
				return;
			}
		}
		console.log(false);
	}

	return (
		<div className="w-54 m-2 ">
		    {char_names.map((name) => (
		    	isCharacterFound(name) ? null : ( 
		    		<div className="flex items-center m-1 h-12 w-12 border rounded-md hover:border-black">
		    	  	   <img className="h-full w-full p-1 object-contain" src={characterImages[name]}
		    	  	    onClick={ () => checkIfFound(name, x, y)} />  	
		    	    </div>
		    	)
			))}
		</div>
	)
}

export default Dropdown;