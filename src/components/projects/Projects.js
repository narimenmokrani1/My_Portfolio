import React from 'react';
import style from './project.css';
function Projects(props) {
	return (
		<div className='container'>
			<div className='pro1'>
				<a href='https://github.com/narimenmokrani1/Memory-Game'>
					<div>
						<div className='sizing-class'>
							<img
								src={require('../images/project1.png')}
								alt=''
								className='img1'
							/>
						</div>
						<h2>Planet Memory Game</h2>
					</div>
				</a>
			</div>
			<div className='pro2'>
				<a href='https://github.com/narimenmokrani1/make-up-finder'>
					<div>
						<div className='sizing-class'>
							<img
								src={require('../images/project2.png')}
								alt=''
								className='img2'
							/>
						</div>
						<h2>Make-up Finder App</h2>
					</div>
				</a>
			</div>
			<div className='pro3'>
				<a href='https://github.com/seir-1115-p3-squad6/project3'>
					<div>
						<div className='sizing-class'>
							<img
								src={require('../images/project3.png')}
								alt=''
								className='img3'
							/>
						</div>
						<h2>Plant Haven</h2>
					</div>
				</a>
			</div>
			<div className='pro4'>
				<a href='https://github.com/narimenmokrani1/discover-algeria-frontend'>
					<div>
						<div className='sizing-class'>
							<img
								src={require('../images/project 4.png')}
								alt=''
								className='img4'
							/>
						</div>
						<h2>Discover Algeria </h2>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Projects;
