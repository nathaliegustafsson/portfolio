import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/projectsData';
import { media } from '../styles/breakpoints';

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
										<ProjectNumberContainer>
											<ProjectNumber>{project.number}.</ProjectNumber>
										</ProjectNumberContainer>
										<div>
											<ProjectName>{project.title}</ProjectName>
										</div>
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
		font-size: 70px;
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

const ReadMoreContainer = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const ReadMoreText = styled.p`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 9px;

	@media ${media.tablet} {
		font-size: 12px;
	}

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const Arrow = styled.img`
	width: 18px;
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

const Line = styled.div`
	background-color: black;
	width: 100%;
	height: 1px;
`;

export default Portfolio;
