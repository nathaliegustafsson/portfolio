import styled from 'styled-components';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { media } from '../styles/breakpoints';

function AboutPage() {
	return (
		<AboutPageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<About />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</AboutPageStyling>
	);
}

// Styling
const AboutPageStyling = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	overflow-y: auto;

	@media ${media.desktop} {
		justify-content: center;
	}
`;

export default AboutPage;
