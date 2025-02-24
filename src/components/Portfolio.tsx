import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/projectsData';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function Portfolio() {
	return (
		<BigContainer>
			<Container>
				<div>
					<Title>Portfolio</Title>
					<InfoText>Here's some projects I've done so far.</InfoText>
				</div>
				<ProjectsBigContainer>
					{projects.map((project) => (
						<ProjectsContainer key={project.id}>
							<StyledLink to={`/portfolio/${project.id}`}>
								<ProjectList>
									<NumberAndTitleContainer>
										<ProjectName>{project.title}</ProjectName>
									</NumberAndTitleContainer>
									<ReadMoreContainer>
										<ReadMoreText>Read more</ReadMoreText>
										<Arrow src="/arrow-right.png" alt="arrow-image" />
									</ReadMoreContainer>
								</ProjectList>
							</StyledLink>
							<Line />
						</ProjectsContainer>
					))}
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

	@media ${media.desktop} {
		margin-bottom: 40px;
	}
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
	font-size: 14px;
	margin-top: 5px;

	@media ${media.tablet} {
		font-size: 14px;
	}

	@media ${media.desktop} {
		font-size: 18px;
	}
`;

const ProjectsBigContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media ${media.desktop} {
		gap: 30px;
	}
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;

	@media ${media.desktop} {
		margin-bottom: 10px;
	}
`;

const ProjectList = styled.div`
	display: flex;
	justify-content: space-between;

	&:hover {
		font-style: italic;
		cursor: pointer;
	}
`;

const NumberAndTitleContainer = styled.div`
	display: flex;
	gap: 10px;

	@media ${media.tablet} {
		gap: 20px;
	}
`;

const ProjectName = styled.h4`
	margin: 0;
	font-family: 'NewYork', sans-serif;
	font-weight: 400;
	font-size: 22px;

	@media ${media.tablet} {
		font-size: 24px;
	}

	@media ${media.desktop} {
		font-size: 28px;
	}
`;

const ReadMoreContainer = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;

	@media ${media.tablet} {
		gap: 10px;
	}
`;

const ReadMoreText = styled.p`
	margin: 0;
	font-family: ${fonts.montserrat};
	display: none;

	@media ${media.tablet} {
		display: block;
		font-size: 12px;
	}

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const Arrow = styled.img`
	width: 20px;
	height: 7px;

	@media ${media.desktop} {
		width: 35px;
		height: 12px;
	}
`;

const Line = styled.div`
	background-color: black;
	width: 100%;
	height: 1px;
`;

export default Portfolio;
