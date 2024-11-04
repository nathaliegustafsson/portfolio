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
				<ProjectsBigContainer>
					<NumberAndTitleContainer>
						<ProjectNumberContainer>
							<ProjectNumber>01.</ProjectNumber>
						</ProjectNumberContainer>
						<div>
							<ProjectName>Bumpy Monster</ProjectName>
						</div>
					</NumberAndTitleContainer>
					<Line />
				</ProjectsBigContainer>
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

const ProjectsBigContainer = styled.div`
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

export default Projects;
