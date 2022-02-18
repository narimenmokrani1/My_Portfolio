import React from 'react';

function Resume(props) {
	return (
		<div className='resume-container'>
			<h1>Resume</h1>
            <div className='img-contain'>

			<img src={require('../images/resume.png')} alt='' />
            </div>
			<button>
				<a href='https://docs.google.com/document/d/1Z92eBsVqtrn52lQLjQcfQjFUnYBJRKc5d-NoXIvXhQc/edit#'>Click here to see the virtual Resume</a>
			</button>
		</div>
	);
}

export default Resume;
