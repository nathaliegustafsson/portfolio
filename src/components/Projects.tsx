import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/projectsData';
import { media } from '../styles/breakpoints';
import { Project } from '../types/projectTypes';

function Projects() {
	const { projectId } = useParams<{ projectId: string }>();
	const project = projects.find((p) => p.id === projectId) as
		| Project
		| undefined;

	if (!project) {
		return <div>Project wasn't found...</div>;
	}

	return (
		<BigContainer>
			<Container>
				<TitleContainer>
					<Title>Portfolio</Title>
					<StyledLink to={`/portfolio`}>
						<GoBackContainer>
							<Arrow src="/arrow-left.png" alt="arrow-left" />
							<GoBackText>Go back</GoBackText>
						</GoBackContainer>
					</StyledLink>
				</TitleContainer>
				<ProjectsMainContent>
					<ProjectNameBigContainer>
						<NumberAndTitleContainer>
							<ProjectNumberContainer>
								<ProjectNumber>{project.number}.</ProjectNumber>
							</ProjectNumberContainer>
							<div>
								<ProjectName>{project.title}</ProjectName>
							</div>
						</NumberAndTitleContainer>
						<Line />
					</ProjectNameBigContainer>
					<ProjectMainContent>
						<ImageContainer>
							<ProjectImage src={project.image1} alt="project-image1" />
							<ProjectImage src={project.image2} alt="project-image2" />
						</ImageContainer>
						<TextContainer>
							<DescriptionText>{project.description}</DescriptionText>
							<UrlContainer>
								<SectionTitle>URL</SectionTitle>
								<UrlLink
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{project.url}
								</UrlLink>
							</UrlContainer>
							<TechnologiesContainer>
								<SectionTitle>TECHNOLOGIES</SectionTitle>
								<TechnologiesText>{project.technologies}</TechnologiesText>
							</TechnologiesContainer>
							{project.collaborators && project.collaborators.length > 0 && (
								<CollaboratorsContainer>
									<SectionTitle>COLLABORATORS</SectionTitle>
									<CollaboratorList>
										{project.collaborators?.map((collaborator, index) => (
											<CollaboratorNameList key={index}>
												<CollaboratorName
													href={collaborator.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													{collaborator.name}
												</CollaboratorName>
											</CollaboratorNameList>
										))}
									</CollaboratorList>
								</CollaboratorsContainer>
							)}
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

	@media ${media.desktopXL} {
		max-width: 1200px;
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

	@media ${media.tablet} {
		gap: 10px;
	}
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
		font-size: 15px;
	}

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const Arrow = styled.img`
	width: 20px;
	height: 6px;

	@media ${media.tablet} {
		width: 25px;
		height: 8px;
	}

	@media ${media.desktop} {
		width: 35px;
		height: 12px;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const ProjectsMainContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media ${media.desktop} {
		gap: 30px;
	}
`;

const ProjectNameBigContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media ${media.desktop} {
		gap: 10px;
	}
`;

const NumberAndTitleContainer = styled.div`
	display: flex;
	gap: 5px;

	@media ${media.tablet} {
		gap: 15px;
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

	@media ${media.desktop} {
		flex-direction: row-reverse;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;

	@media ${media.desktop} {
		justify-content: flex-end;
	}
`;

const ProjectImage = styled.img`
	max-width: 47%;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	@media ${media.tablet} {
		gap: 20px;
	}

	@media ${media.desktop} {
		max-width: 350px;
	}

	@media ${media.desktopXL} {
		max-width: 450px;
	}
`;

const DescriptionText = styled.p`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 10px;
	line-height: 1.2rem;

	@media ${media.tablet} {
		font-size: 14px;
	}
`;

const UrlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media ${media.tablet} {
		gap: 15px;
	}
`;

const SectionTitle = styled.h6`
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

	@media ${media.tablet} {
		font-size: 14px;
	}
`;

const TechnologiesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media ${media.tablet} {
		gap: 15px;
	}
`;

const TechnologiesText = styled(DescriptionText)``;

const CollaboratorName = styled.a`
	text-decoration: none;
	color: black;
	font-family: 'Montserrat';
	font-size: 10px;

	&:hover {
		font-weight: 600;
	}

	@media ${media.tablet} {
		font-size: 14px;
	}
`;

const CollaboratorsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media ${media.tablet} {
		gap: 15px;
	}
`;

const CollaboratorNameList = styled.li`
	list-style: none;
	margin-bottom: 10px;
`;

const CollaboratorList = styled.ul`
	margin: 0;
	padding: 0;
`;

export default Projects;
