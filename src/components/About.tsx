import styled from 'styled-components';
import { media } from '../styles/breakpoints';

function About() {
	return (
		<BigContainer>
			<Container>
				<div>
					<Title>About</Title>
					<InfoText>
						My name is Nathalie, and I'm a recently graduated Front End
						Developer from Medieinstitutet in Gothenburg. I have a passion for
						creating user-friendly and visually appealing web solutions, and I'm
						driven by the opportunity to combine technology and design to
						deliver the best possible user experiences. Before transitioning
						into tech, I worked in various roles, including as a team leader and
						in customer service.I also gained experience as a Front End
						Developer at a start-up, where I had the chance to work in a dynamic
						environment, which strengthened my problem-solving skills and my
						ability to collaborate effectively. I'm passionate about front end
						development and UX/UI design, and I've developed skills in a variety
						of technologies and tools, including: Languages and frameworks:
						JavaScript, TypeScript, React, Vue, Node.js Design tools: Figma Web
						development: HTML, CSS, SCSS Version control: Git, GitHub, Bitbucket
						Other technologies: Redux, Firebase, MongoDB, BigCommerce, React
						Native, Stencil, Jest. I'm excited to continue growing in the field
						and contribute to developing smart, creative, and functional
						solutions that make a difference.
					</InfoText>
				</div>
				<div></div>
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

export default About;
