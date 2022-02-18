import React from 'react';
import style from './Home.css'
function Home(props) {
	return (
		<div className='home-div'>
			<div className='narimen-pic'>
				<img src={require('../images/narimenpic.png')} alt='' className='rimi'/>
			</div>
            <div>
                <h1>Narimen Mokrani</h1>
                <h2>Software Engineer</h2>
                <button>Contact Me</button>
            </div>
		</div>
	);
}

export default Home;
