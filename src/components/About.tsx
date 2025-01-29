import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function About() {
	const technologies = [
		{
			category: 'Languages and Frameworks:',
			tools: ['JavaScript, TypeScript, React, Vue, Node.js'],
		},
		{
			category: 'Design Tools:',
			tools: ['Figma'],
		},
		{
			category: 'Web Development:',
			tools: ['HTML, CSS, SCSS, Styled Components'],
		},
		{
			category: 'Version Control:',
			tools: ['Git, Github, Bitbucket'],
		},
		{
			category: 'Other Technologies:',
			tools: [
				'React-Native, Expo, Xcode, Redux, Firebase, MongoDB, BigCommerce, Stencil, Jest ',
			],
		},
	];

	return (
		<BigContainer>
			<Container>
				<Title>About</Title>
				<AboutContent>
					<ImageContainer>
						<Image src="/cv-picture.jpg" alt="cv-picture" />
					</ImageContainer>
					<TextContainer>
						<AboutText>
							<Text>
								Hi! My name is Nathalie, and I'm a recent graduate in Front-End
								Development from Medieinstitutet in Gothenburg. I chose to
								pursue this field because of the variety and creativity it
								offers, as well as the constant opportunities to grow and learn.
								I'm passionate about combining technology and design to deliver
								the best possible user experiences.
							</Text>
							<Text>
								Before transitioning to tech, I worked in retail for several
								years which gave me valuable skills in communication,
								adaptability, and teamwork.
							</Text>
						</AboutText>
						<SkillsContainer>
							<Text>
								I've developed skills in a variety of technologies and tools,
								including:
							</Text>
							<TechnologiesContainer>
								{technologies.map((technology) => (
									<TechnologiesBox key={technology.category}>
										<TechnologyCategory>
											{technology.category}
										</TechnologyCategory>
										<TechnologyTools>{technology.tools}</TechnologyTools>
									</TechnologiesBox>
								))}
							</TechnologiesContainer>
						</SkillsContainer>
					</TextContainer>
				</AboutContent>
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
	margin-bottom: 10px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;

	@media ${media.desktop} {
		gap: 20px;
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

const AboutContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;

	@media ${media.tablet} {
		flex-direction: row-reverse;
		justify-content: space-between;
		gap: 20px;
	}
`;

const TextContainer = styled.div`
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media ${media.tablet} {
		width: 50%;
		line-height: 1.3rem;
		margin-top: 0;
		gap: 15px;
	}

	@media ${media.desktop} {
		line-height: 1.4rem;
	}
`;

const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const AboutText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const Text = styled.p`
	margin: 0;
	font-family: ${fonts.montserrat};
	font-size: 14px;

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const TechnologiesBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;
`;

const TechnologyCategory = styled.h6`
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	font-family: ${fonts.montserrat};

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const TechnologiesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const TechnologyTools = styled.p`
	margin: 0;
	font-size: 14px;
	font-family: ${fonts.montserrat};

	@media ${media.desktop} {
		font-size: 16px;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	display: flex;

	@media ${media.tablet} {
		width: 50%;
		align-items: flex-start;
	}
`;

const Image = styled.img`
	width: 100%;
`;

export default About;
