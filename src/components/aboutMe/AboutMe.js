import React from 'react';
import style from './aboutme.css';
function AboutMe(props) {
	return (
		<div className='about-div'>
			<h2>About Me</h2>
			<div className='mimi-image'>
				<img src={require('../images/narimenpic.png')} alt='' className='mimi'/>
			</div>
			<p>
				Software engineer with a background in architecture and design. 4 years
				of experience in effective time management, attention to details, and
				the ability to be proficient in delivering creative and useful products.
				transferred to web development and gained tech skills such as
				Javascript, React.js, HTML, CSS, and more. I am eager to help provide
				functional and appealing products that leave a positive impact and lead
				to progress.
			</p>
			<h3>Skills</h3>
			<div className='skills'>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>React.js</li>
				</ul>
				<ul>
					<li>MongoDB</li>
					<li>EXpress.js</li>
					<li>Django</li>
					<li>SQL and NoSQL</li>
				</ul>
			</div>
		</div>
	);
}

export default AboutMe;
