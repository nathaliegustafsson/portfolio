import styled from 'styled-components';
import { media } from '../styles/breakpoints';

function Portfolio() {
	return (
		<BigContainer>
			<Container>
				<div>
					<Title>Portfolio</Title>
					<InfoText>Here's some projects I've done so far.</InfoText>
				</div>
				<ProjectsContainer>
					<ProjectList>
						<div style={{ display: 'flex', gap: '5px' }}>
							<div>
								<ProjectNumber>01.</ProjectNumber>
							</div>
							<div>
								<ProjectName>Bumpy Monster</ProjectName>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								gap: '5px',
								alignItems: 'center',
							}}
						>
							<ReadMoreLink>Read More</ReadMoreLink>
							<Arrow src="/Arrow.png" alt="" />
						</div>
					</ProjectList>
					<Line />
				</ProjectsContainer>
			</Container>
		</BigContainer>
	);
}

// Styling
const BigContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: auto;
	padding: 20px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Title = styled.h1`
	display: inline-block;
	font-family: 'NewYork';
	font-size: 55px;
	font-weight: 100;
	margin-bottom: 5px;
	margin: 0;

	@media ${media.mobile} {
		font-size: 70px;
	}

	@media ${media.tablet} {
		font-size: 80px;
	}

	@media ${media.desktopXL} {
		font-size: 90px;
	}
`;

const InfoText = styled.p`
	font-family: 'Montserrat';
	font-size: 12px;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const ProjectList = styled.div`
	display: flex;
	justify-content: space-between;
	
	&:hover {
		font-style: italic;
		cursor: pointer;
	}	
`;

const ProjectNumber = styled.div`
	margin: 0;
	font-family: 'NewYork';
	font-size: 20px;
`;

const ProjectName = styled.h4`
	margin: 0;
	font-family: 'NewYork';
	font-weight: 400;
	font-size: 20px;
`;

const ReadMoreLink = styled.p`
	margin: 0;
	font-family: 'Montserrat';
	font-size: 12px;
`;

const Arrow = styled.img`
	width: 30px;
	height: 10px;
`;

const Line = styled.div`
	background-color: black;
	width: 100%;
	height: 1px;
`;

export default Portfolio;
