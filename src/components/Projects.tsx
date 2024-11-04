import styled from 'styled-components';
import { media } from '../styles/breakpoints';

function Projects() {
	return (
		<BigContainer>
			<Container>
				<TitleContainer>
					<Title>Portfolio</Title>
					<GoBackContainer>
						<Arrow src="/arrow-left.png" alt="arrow-left" />
						<GoBackText>Go back</GoBackText>
					</GoBackContainer>
				</TitleContainer>
				<ProjectsMainContent>
					<ProjectNameBigContainer>
						<NumberAndTitleContainer>
							<ProjectNumberContainer>
								<ProjectNumber>01.</ProjectNumber>
							</ProjectNumberContainer>
							<div>
								<ProjectName>Bumpy Monster</ProjectName>
							</div>
						</NumberAndTitleContainer>
						<Line />
					</ProjectNameBigContainer>
					<ProjectMainContent>
						<ImageContainer>
							<ProjectImage src="/projectImages/bumpy1.png" alt="bumpy1" />
							<ProjectImage src="/projectImages/bumpy2.png" alt="bumpy2" />
						</ImageContainer>
						<TextContainer>
							<DescriptionText>
								This is one of my favorite projects. Together with four other
								students from my class, we created a game called “Bumpy
								Monster.” It is a platform game where the goal is to reach as
								high up as possible. Along the way, Bumpy encounters enemies and
								can collect power-ups.
							</DescriptionText>
							<UrlContainer>
								<UrlTitle>URL</UrlTitle>
								<UrlLink href="https://bumpythegame.netlify.app">
									https://bumpythegame.netlify.app
								</UrlLink>
							</UrlContainer>
						</TextContainer>
					</ProjectMainContent>
				</ProjectsMainContent>
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
	width: 85%;
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

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
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
		font-size: 70px;
	}

	@media ${media.desktopXL} {
		font-size: 90px;
	}
`;

const GoBackContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const GoBackText = styled.p`
	font-family: 'Montserrat';
	font-size: 11px;
	font-weight: 400;
	margin: 0px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 0.01rem;
		text-underline-offset: 0.3rem;
	}

	@media ${media.tablet} {
		font-size: 14px;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

const Arrow = styled.img`
	width: 20px;
	height: 6px;

	@media ${media.tablet} {
		width: 20px;
		height: 7px;
	}

	@media ${media.desktop} {
		width: 35px;
		height: 12px;
	}
`;

const ProjectsMainContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ProjectNameBigContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media ${media.desktop} {
		gap: 30px;
	}
`;

const NumberAndTitleContainer = styled.div`
	display: flex;
	gap: 5px;

	@media ${media.tablet} {
		gap: 20px;
	}
`;

const ProjectNumberContainer = styled.div`
	width: 25px;
`;

const ProjectNumber = styled.p`
	margin: 0;
	font-family: 'NewYork';
	font-size: 18px;

	@media ${media.tablet} {
		font-size: 24px;
	}

	@media ${media.desktop} {
		font-size: 28px;
	}
`;

const ProjectName = styled.h4`
	margin: 0;
	font-family: 'NewYork';
	font-weight: 400;
	font-size: 18px;

	@media ${media.tablet} {
		font-size: 24px;
	}

	@media ${media.desktop} {
		font-size: 28px;
	}
`;

const Line = styled.div`
	background-color: black;
	width: 100%;
	height: 1px;
`;

const ProjectMainContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const ImageContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
`;

const ProjectImage = styled.img`
	max-width: 47%;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const DescriptionText = styled.p`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 10px;
`;

const UrlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const UrlTitle = styled.h6`
	font-family: 'Montserrat';
	font-size: 12px;
	font-weight: 600;
	text-decoration: underline;
	text-decoration-thickness: 1px;
	text-underline-offset: 0.3rem;
	margin: 0;
`;

const UrlLink = styled.a`
	font-family: 'Montserrat';
	font-size: 10px;
	text-decoration: none;
	color: black;

	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2rem;
	}
`;

export default Projects;
