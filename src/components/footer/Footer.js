import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(props) {
	return (
		<div>
			<footer>
				<ul className='footer-list'>
					<a href='https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/'>
						<LinkedInIcon className='icon' />
						<li className='icon-text'>Narimen Mokrani</li>
					</a>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
