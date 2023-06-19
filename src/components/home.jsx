import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

const Home = ({levels}) => {
	return (
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 sm:grid-rows-3 md:grid-rows-2 ">
			{levels.map( (level, id) => (
				<Link key={id} to={`/map/${id}`}>
				    <Card image_url={level.image_url} />
				</Link>
			))}
		</div>
	)
}

export default Home;