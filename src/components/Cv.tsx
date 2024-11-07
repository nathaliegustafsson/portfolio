import styled from 'styled-components';
import { media } from '../styles/breakpoints';

function Cv() {
	return (
		<BigContainer>
			<Container>
				<div>
					<Title>CV</Title>
					<InfoText>Here's my CV in both Swedish and English.</InfoText>
				</div>
				<ContactContainer>
					<ContactTitle>SWEDISH</ContactTitle>
					<Link
						href="/cv-files/CV-swe.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open here
					</Link>
				</ContactContainer>
				<ContactContainer>
					<ContactTitle>ENGLISH</ContactTitle>
					<Link
						href="/cv-files/CV-eng.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open here
					</Link>
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
	font-family: 'NewYork';
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
	font-family: 'Montserrat';
	font-size: 11px;
	margin-top: 5px;

	@media ${media.tablet} {
		font-size: 14px;
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

const Link = styled.a`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 10px;
	line-height: 1.2rem;
	color: black;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 0.01rem;
		text-underline-offset: 0.3rem;
	}

	@media ${media.tablet} {
		font-size: 14px;
	}

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const ContactTitle = styled.h6`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.1rem;
	text-decoration: underline;
	text-decoration-thickness: 1px;
	text-underline-offset: 0.3rem;

	@media ${media.tablet} {
		font-size: 16px;
		text-decoration-thickness: 2px;
		text-underline-offset: 0.4rem;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

export default Cv;
