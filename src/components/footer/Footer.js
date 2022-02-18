import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './footer.css'
function Footer(props) {
	return (
		<div>
			<footer>
				<ul className='footer-list'>
					<a href='https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/'>
						<LinkedInIcon className='icon' />
					</a>
						<button>Contact Me</button>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
