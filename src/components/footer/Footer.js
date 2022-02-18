import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './footer.css'
import { GitHub } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
function Footer(props) {
	return (
		<div>
			<footer>
				<ul className='footer-list'>
						<h1>Contact Me:</h1>
					<a href='https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/'>
						<LinkedInIcon
							className='icon'
							style={{
								fontSize: 60,
							}}
						/>
					</a>
					<a href='https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act'>
						<Email
							className='email'
							style={{
								fontSize: 60,
							}}
						/>
					</a>

					<a href='https://github.com/narimenmokrani1'>
						<GitHub
							style={{
								fontSize: 60,
							}}
						/>
					</a>
					<a href='https://www.instagram.com/narimen_mokrani/'>
						<Instagram
							style={{
								fontSize: 60,
							}}
						/>
					</a>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
