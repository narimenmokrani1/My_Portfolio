import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';
function Header(props) {
	return (
		<div>
			<nav className='nav-header'>
				<ul>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
