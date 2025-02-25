import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function Cv() {
	const cvLinks = [
		{
			language: 'SWEDISH',
			href: '/cv-files/Nathalie-Gustafsson-CV.pdf',
		},
		{
			language: 'ENGLISH',
			href: '/cv-files/Nathalie-Gustafsson-CV-(eng).pdf',
		},
	];

	return (
		<BigContainer>
			<Container>
				<div>
					<Title>CV</Title>
					<InfoText>Here's my CV in both Swedish and English.</InfoText>
				</div>
				<ContactContainer>
					{cvLinks.map((link) => (
						<Link
							key={link.language}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ContactTitle>{link.language}</ContactTitle>
							<Icon src="/icons/arrow-up-right.svg" />
						</Link>
					))}
				</ContactContainer>
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

	@media ${media.tablet} {
		gap: 15px;
	}
`;

const Icon = styled.img`
	height: 14px;

	@media ${media.mobile} {
		height: 18px;
	}
`;

const Link = styled.a`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
	font-family: ${fonts.montserrat};
	color: black;
	text-decoration: none;
`;

const ContactTitle = styled.h6`
	margin: 0;
	font-family: ${fonts.montserrat};
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.1rem;
	text-decoration: underline;
	text-decoration-thickness: 2px;
	text-underline-offset: 0.3rem;

	&:hover {
		font-weight: 700;
	}

	@media ${media.tablet} {
		font-size: 16px;
		text-underline-offset: 0.4rem;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

export default Cv;
