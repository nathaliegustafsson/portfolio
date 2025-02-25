import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function Contact() {
	const contactLinks = [
		{
			icon: '/icons/email-icon.svg',
			title: 'EMAIL',
			href: 'mailto:nath.gustafsson@gmail.com',
			text: 'nath.gustafsson@gmail.com',
		},
		{
			icon: '/icons/github-icon.svg',
			title: 'GITHUB',
			href: 'https://github.com/nathaliegustafsson',
			text: 'https://github.com/nathaliegustafsson',
		},
		{
			icon: '/icons/linkedin-icon.svg',
			title: 'LINKEDIN',
			href: 'https://linkedin.com/in/nathalie-gustafsson-5393b415a/',
			text: 'https://linkedin.com/in/nathalie-gustafsson-5393b415a/',
		},
	];

	return (
		<BigContainer>
			<Container>
				<div>
					<Title>Contact</Title>
					<InfoText>You can find me here.</InfoText>
				</div>

				{contactLinks.map((link, index) =>
					link.href.startsWith('mailto:') ? (
						<ContactContainer key={index}>
							<IconTitleContainer>
								<Icon src={link.icon} />
								<ContactTitle>{link.title}</ContactTitle>
							</IconTitleContainer>
							<Link href={link.href}>{link.text}</Link>
						</ContactContainer>
					) : (
						<ContactContainer key={index}>
							<IconTitleContainer>
								<Icon src={link.icon} />
								<ContactTitle>{link.title}</ContactTitle>
							</IconTitleContainer>
							<Link href={link.href} target="_blank" rel="noopener noreferrer">
								{link.text}
							</Link>
						</ContactContainer>
					)
				)}
			</Container>
		</BigContainer>
	);
}

// Styling
const BigContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	height: 100%;
	width: 80%;
	padding: 20px;
	max-width: 1000px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media ${media.desktop} {
		gap: 40px;
	}

	@media ${media.desktopXL} {
		gap: 50px;
	}
`;

const Title = styled.h1`
	display: inline-block;
	font-family: 'NewYork', sans-serif;
	font-size: 55px;
	font-weight: 100;
	margin-bottom: 5px;
	margin: 0;

	@media ${media.tablet} {
		font-size: 70px;
	}

	@media ${media.desktop} {
		font-size: 80px;
	}

	@media ${media.desktopXL} {
		font-size: 90px;
	}
`;

const InfoText = styled.p`
	font-family: ${fonts.montserrat};
	font-size: 13px;
	margin-top: 5px;

	@media ${media.tablet} {
		font-size: 15px;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Link = styled.a`
	margin: 0;
	font-family: ${fonts.montserrat};
	font-size: 13px;
	line-height: 1.2rem;
	color: black;
	text-decoration-thickness: 0.01rem;
	text-underline-offset: 0.3rem;

	&:hover {
		text-decoration-thickness: 0.1rem;
		font-weight: 600;
	}

	@media ${media.tablet} {
		font-size: 15px;
	}

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const IconTitleContainer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 10px;
`;

const ContactTitle = styled.h6`
	margin: 0;
	font-family: ${fonts.montserrat};
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.1rem;

	@media ${media.tablet} {
		font-size: 16px;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

const Icon = styled.img`
	height: 18px;
	cursor: pointer;

	@media ${media.mobile} {
		height: 22px;
	}
`;

export default Contact;
