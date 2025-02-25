import styled from 'styled-components';
import { media } from '../styles/breakpoints';

function Footer() {
	const footerLinks = [
		{
			href: 'mailto:nath.gustafsson@gmail.com',
			icon: '/icons/email-icon.svg',
			alt: 'email-icon',
		},
		{
			href: 'https://github.com/nathaliegustafsson',
			icon: '/icons/github-icon.svg',
			alt: 'github-icon',
		},
		{
			href: 'https://www.linkedin.com/in/nathalie-gustafsson-5393b415a/',
			icon: '/icons/linkedin-icon.svg',
			alt: 'linkedin-icon',
		},
	];

	return (
		<Container>
			<IconContainer>
				{footerLinks.map((link, index) =>
					link.href.startsWith('mailto:') ? (
						<a
							key={index}
							href={link.href}
							rel="noopener noreferrer"
						>
							<Icon src={link.icon} alt={link.alt} />
						</a>
					) : (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon src={link.icon} alt={link.alt} />
						</a>
					)
				)}
			</IconContainer>
		</Container>
	);
}

// Styling
const Container = styled.div`
	border-top: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px 0;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 25px;

	@media ${media.mobile} {
		gap: 30px;
	}
`;

const Icon = styled.img`
	height: 28px;
	cursor: pointer;

	&:hover {
		opacity: 0.6;
	}

	@media ${media.mobile} {
		height: 35px;
	}
`;

export default Footer;
