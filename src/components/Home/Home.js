import React from 'react';
import style from './Home.css'
import { useNavigate } from 'react-router-dom';
function Home(props) {

    const navigate = useNavigate()

function navigateTocContactMe () {
    navigate('/contactMe');
}

	return (
		<div className='home-div'>
			<div className='narimen-pic'>
				<img
					src={require('../images/narimenpic.png')}
					alt=''
					className='rimi'
				/>
			</div>
			<div>
				<h1>Narimen Mokrani</h1>
				<h2>Software Engineer</h2>
				<button onClick={navigateTocContactMe}>Contact Me</button>
			</div>
		</div>
	);
}

export default Home;
