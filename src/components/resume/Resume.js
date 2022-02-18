import React from 'react';
import style from './resume.css'
function Resume(props) {
	return (
		<div className='resume-container'>
			<button className='resume-btn'>
				<a href='https://docs.google.com/document/d/1Z92eBsVqtrn52lQLjQcfQjFUnYBJRKc5d-NoXIvXhQc/edit#'>
					Click here to see the virtual Resume
				</a>
			</button>
			<div className='img-contain'>
				<img src={require('../images/resume.png')} alt='' />
			</div>
		</div>
	);
}

export default Resume;
