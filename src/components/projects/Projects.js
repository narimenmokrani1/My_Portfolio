import React from 'react';
import { Link } from 'react-router-dom';
function Projects(props) {
	return (
		<div>
			<Link to='https://github.com/narimenmokrani1/Memory-Game'>
				<div>
					<img src='./project1.png' alt='' />
					<h2>Planet Memory Game</h2>
				</div>
			</Link>
			<Link to='https://github.com/narimenmokrani1/make-up-finder'>
				<div>
					<img src='./project2.png' alt='' />
					<h2>Make-up Finder App</h2>
				</div>
			</Link>
			<Link to='https://github.com/seir-1115-p3-squad6/project3'>
				<div>
					<img src='./project3.png' alt='' />
					<h2>Plant Haven</h2>
				</div>
			</Link>
			<Link to='https://github.com/narimenmokrani1/discover-algeria-frontend'>
				<div>
					<img src='./project 4.png' alt='' />
					<h2>Discover Algeria </h2>
				</div>
			</Link>
		</div>
	);
}

export default Projects;
