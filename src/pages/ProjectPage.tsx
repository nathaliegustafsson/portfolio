import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { media } from '../styles/breakpoints';

function ProjectPage() {
	return (
		<ProjectPageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<Projects />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</ProjectPageStyling>
	);
}

// Styling
const ProjectPageStyling = styled.div`
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

export default ProjectPage;
